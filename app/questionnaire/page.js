"use client";

import { useEffect, useState } from "react";
import questionsData from "../../data/questions.json";

export default function PageQuestionnaire() {
  const questions = questionsData.questions;

  const [questionIndex, setQuestionIndex] = useState(0);
  const [reponsesChoisies, setReponsesChoisies] = useState({});
  const [reponsesMelangees, setReponsesMelangees] = useState([]);
  const [reponseValidee, setReponseValidee] = useState(false);

  const questionActuelle = questions[questionIndex];
  const derniereQuestion = questionIndex === questions.length - 1;

  useEffect(() => {
    const reponses = [...questionActuelle.reponses];

    reponses.sort(() => Math.random() - 0.5);

    setReponsesMelangees(reponses);

    setReponseValidee(
      Boolean(reponsesChoisies[questionActuelle.id])
    );
  }, [questionIndex]);

  const reponseChoisie = reponsesChoisies[questionActuelle.id];

  function choisirReponse(reponseId) {
    if (reponseValidee) {
      return;
    }

    setReponsesChoisies({
      ...reponsesChoisies,
      [questionActuelle.id]: reponseId,
    });
  }

  function validerReponse() {
    setReponseValidee(true);

    if (!derniereQuestion) {
      setQuestionIndex(questionIndex + 1);
    }
  }

  function modifierReponse() {
    setReponseValidee(false);
  }

  function questionPrecedente() {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  }

  function questionSuivante() {
    if (!derniereQuestion) {
      setQuestionIndex(questionIndex + 1);
    }
  }

  function terminerQuestionnaire() {
    alert("Questionnaire terminé. Les résultats arriveront prochainement.");
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
                disabled={reponseValidee}
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
                  cursor: reponseValidee ? "default" : "pointer",
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

          {!reponseValidee ? (
            <button onClick={validerReponse}>
              Valider la réponse
            </button>
          ) : (
            <button onClick={modifierReponse}>
              Modifier la réponse
            </button>
          )}
        </div>
      </section>
    </main>
  );
}

