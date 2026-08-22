"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
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

  const [resultat, setResultat] = useState(null);
  const [fenetreResultatOuverte, setFenetreResultatOuverte] =
    useState(false);

  /*
   * Contient l'heure à laquelle chaque question a commencé.
   *
   * Exemple :
   * {
   *   q01: 1712345678901,
   *   q02: 1712345684120
   * }
   */
  const tempsDebutQuestions = useRef({});

  /*
   * Contient le temps enregistré pour chaque question,
   * en millisecondes.
   *
   * Exemple :
   * {
   *   q01: 5234,
   *   q02: 8120
   * }
   */
  const tempsQuestions = useRef({});

  const questionActuelle = questions[questionIndex];

  /*
   * Démarre le chronomètre uniquement si aucun temps
   * n'a encore été enregistré ou démarré pour cette question.
   *
   * Ainsi, revenir sur une question ou la corriger
   * ne relance pas le chronomètre.
   */
  useEffect(() => {
    if (!questionActuelle) {
      return;
    }

    const questionId = questionActuelle.id;

    const tempsDejaEnregistre =
      tempsQuestions.current[questionId] !== undefined;

    const chronometreDejaDemarre =
      tempsDebutQuestions.current[questionId] !== undefined;

    if (!tempsDejaEnregistre && !chronometreDejaDemarre) {
      tempsDebutQuestions.current[questionId] = Date.now();
    }
  }, [questionActuelle]);

  /*
   * Mélange les réponses lorsque la question affichée change.
   */
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

  /*
   * Enregistre définitivement le temps passé sur la question actuelle.
   *
   * Si le temps a déjà été enregistré, la fonction ne fait rien.
   * Cela empêche les doublons lorsqu'une réponse est sélectionnée
   * puis que l'utilisateur passe ensuite à la question suivante.
   */
  function enregistrerTempsQuestion() {
    const questionId = questionActuelle.id;

    const tempsDejaEnregistre =
      tempsQuestions.current[questionId] !== undefined;

    if (tempsDejaEnregistre) {
      return;
    }

    const tempsDebut = tempsDebutQuestions.current[questionId];

    if (tempsDebut === undefined) {
      return;
    }

    const tempsEcoule = Date.now() - tempsDebut;

    tempsQuestions.current[questionId] = tempsEcoule;
  }

  function choisirReponse(reponseId) {
    /*
     * La sélection d'une réponse arrête définitivement
     * le chronomètre de la question actuelle.
     */
    enregistrerTempsQuestion();

    setReponsesChoisies((reponsesActuelles) => ({
      ...reponsesActuelles,
      [questionActuelle.id]: reponseId,
    }));
  }

  function modifierReponse() {
    /*
     * Le temps n'est volontairement pas supprimé.
     * La correction de la réponse ne relance donc pas
     * le chronomètre.
     */
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
    /*
     * Le passage est autorisé même sans réponse.
     * Dans ce cas, le temps passé sur la question est
     * tout de même enregistré.
     */
    enregistrerTempsQuestion();

    if (!derniereQuestion) {
      setQuestionIndex((index) => index + 1);
    }
  }

  function calculerResultat() {
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

    const tempsEnregistres = Object.values(tempsQuestions.current);

    const tempsTotal =
      tempsEnregistres.length > 0
        ? tempsEnregistres.reduce(
            (total, temps) => total + temps,
            0
          )
        : 0;

    /*
     * Le temps moyen est calculé en secondes,
     * avec un arrondi au dixième.
     */
    const tempsMoyenSecondes =
      tempsEnregistres.length > 0
        ? Math.round(
            (tempsTotal / tempsEnregistres.length / 1000) * 10
          ) / 10
        : 0;

    return {
      scoreTotal,
      scoreMaximum,
      indiceStupidite,
      tempsMoyenSecondes,
    };
  }

  function terminerQuestionnaire() {
    /*
     * Le temps de la dernière question est enregistré
     * au moment où l'utilisateur termine le questionnaire.
     */
    enregistrerTempsQuestion();

    /*
     * Comme l'enregistrement ci-dessus modifie une ref,
     * le calcul qui suit utilise directement les données
     * mises à jour.
     */
    const nouveauResultat = calculerResultat();

    setResultat(nouveauResultat);
    setFenetreResultatOuverte(true);
  }

  function fermerFenetreResultat() {
    setFenetreResultatOuverte(false);
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

      {fenetreResultatOuverte && resultat && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="titre-resultat"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            backgroundColor: "rgba(0, 0, 0, 0.65)",
          }}
        >
          <section
            style={{
              width: "100%",
              maxWidth: "560px",
              maxHeight: "90vh",
              overflowY: "auto",
              padding: "2rem",
              border: "2px solid #000000",
              backgroundColor: "#FFFFFF",
              color: "#000000",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#3B3B3B",
                fontSize: "0.8rem",
                fontWeight: "bold",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Rapport d’observation
            </p>

            <h2
              id="titre-resultat"
              style={{
                marginTop: "0.75rem",
                marginBottom: "1.5rem",
              }}
            >
              Questionnaire terminé
            </h2>

            <div
              style={{
                padding: "1rem",
                border: "1px solid #A5A5A5",
                backgroundColor: "#F5F5F5",
              }}
            >
              <p>
                <strong>Score observé :</strong>{" "}
                {resultat.scoreTotal} / {resultat.scoreMaximum}
              </p>

              <p>
                <strong>Indice de stupidité :</strong>{" "}
                {resultat.indiceStupidite} / 100
              </p>

              <p>
                <strong>Temps moyen de réponse :</strong>{" "}
                {resultat.tempsMoyenSecondes} seconde
                {resultat.tempsMoyenSecondes !== 1 ? "s" : ""} par question
              </p>
            </div>

            <p
              style={{
                marginTop: "1.5rem",
                color: "#3B3B3B",
                fontStyle: "italic",
                lineHeight: 1.5,
              }}
            >
              Cette observation est fictive, humoristique et non
              scientifique. Le temps indiqué décrit uniquement le
              déroulement de cette session et ne constitue pas une
              caractéristique de votre personnalité.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                marginTop: "1.5rem",
              }}
            >
              <button onClick={fermerFenetreResultat}>
                Fermer
              </button>

              <Link
                href="/"
                onClick={fermerFenetreResultat}
                style={{
                  display: "inline-block",
                  padding: "0.6rem 1rem",
                  border: "1px solid #000000",
                  backgroundColor: "#000000",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Retour à l’accueil
              </Link>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
