"use client";

import { useMemo, useState } from "react";
import questionsData from "../../data/questions.json";

/**
 * Mélange un tableau sans modifier le tableau d'origine.
 * @param {Array} elements
 * @returns {Array}
 */
function melanger(elements) {
  const resultat = [...elements];

  for (let i = resultat.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [resultat[i], resultat[j]] = [resultat[j], resultat[i]];
  }

  return resultat;
}

/**
 * Normalise le format attendu afin d'éviter les erreurs si une question ou
 * une réponse est incomplète dans le fichier JSON.
 */
function preparerQuestions(source) {
  const liste = Array.isArray(source) ? source : source?.questions;

  if (!Array.isArray(liste)) {
    return [];
  }

  return melanger(liste).map((question, index) => ({
    ...question,
    id: question?.id ?? `question-${index + 1}`,
    texte: String(question?.texte ?? "Question sans énoncé"),
    reponses: melanger(
      Array.isArray(question?.reponses) ? question.reponses : [],
    ).map((reponse, reponseIndex) => ({
      ...reponse,
      id: reponse?.id ?? `reponse-${index + 1}-${reponseIndex + 1}`,
      texte: String(reponse?.texte ?? "Réponse sans texte"),
    })),
  }));
}

export default function PageQuestionnaire() {
  const questions = useMemo(() => preparerQuestions(questionsData), []);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [reponsesChoisies, setReponsesChoisies] = useState({});
  const [questionnaireTermine, setQuestionnaireTermine] = useState(false);

  const questionActuelle = questions[questionIndex];
  const derniereQuestion = questionIndex === questions.length - 1;
  const reponseChoisie = questionActuelle
    ? reponsesChoisies[questionActuelle.id]
    : undefined;

  function choisirReponse(reponseId) {
    if (!questionActuelle) {
      return;
    }

    setReponsesChoisies((reponsesPrecedentes) => ({
      ...reponsesPrecedentes,
      [questionActuelle.id]: reponseId,
    }));
  }

  function allerAQuestion(index) {
    if (questions.length === 0) {
      return;
    }

    const indexSecurise = Math.min(Math.max(index, 0), questions.length - 1);
    setQuestionIndex(indexSecurise);
  }

  function questionPrecedente() {
    allerAQuestion(questionIndex - 1);
  }

  function questionSuivante() {
    if (derniereQuestion) {
      setQuestionnaireTermine(true);
      return;
    }

    allerAQuestion(questionIndex + 1);
  }

  function calculerScore() {
    return questions.reduce((total, question) => {
      const reponseId = reponsesChoisies[question.id];
      const reponse = question.reponses.find(
        (element) => element.id === reponseId,
      );
      const score = Number(reponse?.score);

      // Une question sans réponse, ou avec un score non numérique, vaut 0.
      return total + (Number.isFinite(score) ? score : 0);
    }, 0);
  }

  function recommencer() {
    setQuestionIndex(0);
    setReponsesChoisies({});
    setQuestionnaireTermine(false);
  }

  if (questions.length === 0) {
    return (
      <main>
        <h1>Questionnaire</h1>
        <p>Aucune question disponible.</p>
      </main>
    );
  }

  if (questionnaireTermine) {
    return (
      <main>
        <h1>Questionnaire terminé</h1>
        <p>
          Votre score est de <strong>{calculerScore()}</strong> point(s).
        </p>
        <p>Ce questionnaire est proposé à titre ludique et ne constitue pas une évaluation scientifique.</p>
        <button type="button" onClick={recommencer}>
          Recommencer
        </button>
      </main>
    );
  }

  return (
    <main>
      <header>
        <p>
          Question {questionIndex + 1} sur {questions.length}
        </p>
        <h1>Questionnaire</h1>
      </header>

      <section aria-labelledby="question-texte">
        <h2 id="question-texte">{questionActuelle.texte}</h2>
        {questionActuelle.categorie ? (
          <p>Catégorie : {questionActuelle.categorie}</p>
        ) : null}

        <fieldset>
          <legend>Choisissez une réponse (facultatif)</legend>
          {questionActuelle.reponses.length > 0 ? (
            questionActuelle.reponses.map((reponse) => (
              <label key={reponse.id}>
                <input
                  type="radio"
                  name={`question-${questionActuelle.id}`}
                  value={reponse.id}
                  checked={reponseChoisie === reponse.id}
                  onChange={() => choisirReponse(reponse.id)}
                />
                {reponse.texte}
              </label>
            ))
          ) : (
            <p>Cette question ne contient aucune réponse proposée.</p>
          )}
        </fieldset>
      </section>

      <nav aria-label="Navigation du questionnaire">
        <button
          type="button"
          onClick={questionPrecedente}
          disabled={questionIndex === 0}
        >
          Précédente
        </button>
        <button type="button" onClick={questionSuivante}>
          {derniereQuestion ? "Voir le résultat" : "Suivante"}
        </button>
      </nav>
    </main>
  );
}
