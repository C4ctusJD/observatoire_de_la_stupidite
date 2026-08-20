"use client";

import { useEffect, useMemo, useState } from "react";
import questionsData from "../../data/questions.json";

export default function PageQuestionnaire() {
  const questions = useMemo(() => {
    const questionsMelangees = [...questionsData.questions];

    for (let i = questionsMelangees.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [questionsMelangees[i], questionsMelangees[j]] = [
        questionsMelangees[j],
        questionsMelangees[i],
      ];
    }

    return questionsMelangees;
  }, []);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [reponsesChoisies, setReponsesChoisies] = useState({});
  const [reponsesMelangees, setReponsesMelangees] = useState([]);

  const questionActuelle = questions[questionIndex];

  useEffect(() => {
    if (!questionActuelle) {
      return;
    }

    const reponses = [...questionActuelle.reponses];

    reponses.sort(() => Math.random() - 0.5);

    setReponsesMelangees(reponses);
  }, [questionIndex, questionActuelle]);

  if (!questions || questions.length === 0) {
    return <p>Aucune question disponible.</p>;
  }

  const derniereQuestion = questionIndex === questions.length - 1;
  const reponseChoisie = reponsesChoisies[questionActuelle.id];

  function choisirReponse(reponseId) {
    setReponsesChoisies((reponsesActuelles) => ({
      ...reponsesActuelles,
      [questionActuelle.id]: reponseId,
    }));
  }

  function modifierReponse() {
    setReponsesChoisies((reponsesActuelles) => {
      const nouvellesReponses = { ...reponsesActuelles };

      delete nouvellesReponses[questionActuelle.id];

      return nouvellesReponses;
    });
  }

  function questionPrecedente() {
    if (questionIndex > 0) {
      setQuestionIndex((index) => index - 1);
    }
  }

  function questionSuivante() {
    if (!derniereQuestion) {
      setQuestionIndex((index) => index + 1);
    }
  }

  function terminerQuestionnaire() {
    const scoreTotal = questions.reduce((total, question) => {
      const reponseId = reponsesChoisies[question.id];

      const reponseSelectionnee = question.reponses.find(
        (reponse) => reponse.id === reponseId
      );

      return total + (reponseSelectionnee?.score ?? 0);
    }, 0);

    const scoreMaximum = questions.length * 3;

    const indiceStupidite =
      scoreMaximum > 0
        ? Math.round((scoreTotal / scoreMaximum) * 100)
        : 0;

    alert(
      `Questionnaire terminé.\n\n` +
        `Score observé : ${scoreTotal} / ${scoreMaximum}\n` +
        `Indice de stupidité : ${indiceStupidite} / 100\n\n` +
        `Résultat fictif, humoristique et non scientifique.`
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "2rem",
        backgroundColor: "#FFFFFF",
        color: "#000000",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "700px",
          margin: "0 auto",
          padding: "2rem",
          border: "1px solid #A5A5A5",
          backgroundColor: "#F5F5F5",
        }}
      >
        <p
          style={{
            color: "#3B3B3B",
            fontSize: "0.85rem",
            fontWeight: "bold",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Protocole d’observation n° 001
        </p>

        <p style={{ color: "#3B3B3B" }}>
          Question {questionIndex + 1} sur {questions.length}
        </p>

        <h1>{questionActuelle.texte}</h1>

        <div style={{ marginTop: "2rem" }}>
          {reponsesMelangees.map((reponse) => {
            const estSelectionnee = reponse.id === reponseChoisie;

            return (
              <button
                key={reponse.id}
                onClick={() => choisirReponse(reponse.id)}
                style={{
                  display: "block",
                  width: "100%",
                  marginBottom: "1rem",
                  padding: "1rem",
                  border: estSelectionnee
                    ? "3px solid #000000"
                    : "1px solid #A5A5A5",
                  backgroundColor: estSelectionnee
                    ? "#D9D9D9"
                    : "#FFFFFF",
                  color: "#000000",
                  textAlign: "left",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                {reponse.texte}
              </button>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginTop: "2rem",
          }}
        >
          <button onClick={() => alert("L’aide sera ajoutée plus tard.")}>
            Aide
          </button>

          <button
            onClick={questionPrecedente}
            disabled={questionIndex === 0}
          >
            Question précédente
          </button>

          {!derniereQuestion ? (
            <button onClick={questionSuivante}>
              Question suivante
            </button>
          ) : (
            <button onClick={terminerQuestionnaire}>
              Terminer le questionnaire
            </button>
          )}

          <button
            onClick={modifierReponse}
            disabled={!reponseChoisie}
          >
            Modifier la réponse
          </button>
        </div>
      </section>
    </main>
  );
}
