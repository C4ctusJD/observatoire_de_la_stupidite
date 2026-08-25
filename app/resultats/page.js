"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import animauxData from "../../data/animaux.json";
import qualificatifsData from "../../data/qualificatifs.json";

function trouverAnimal(indiceStupidite) {
  return animauxData.animaux.find(
    (animal) =>
      indiceStupidite >= animal.score_min &&
      indiceStupidite <= animal.score_max
  );
}

function trouverQualificatif(mesure, valeur) {
  const mesureData = qualificatifsData.mesures.find(
    (element) => element.mesure === mesure
  );

  if (!mesureData) return null;

  const qualificatifBas = mesureData.qualificatifs.find(
    (qualificatif) => qualificatif.id.endsWith("-bas")
  );

  const qualificatifMoyen = mesureData.qualificatifs.find(
    (qualificatif) => qualificatif.id.endsWith("-moyen")
  );

  const qualificatifHaut = mesureData.qualificatifs.find(
    (qualificatif) => qualificatif.id.endsWith("-haut")
  );

  if (mesure === "temps_avant_reponse") {
    if (valeur <= 3) return qualificatifBas;
    if (valeur <= 8) return qualificatifMoyen;
    return qualificatifHaut;
  }

  if (mesure === "changements_reponse") {
    if (valeur <= 1) return qualificatifBas;
    if (valeur <= 3) return qualificatifMoyen;
    return qualificatifHaut;
  }

  if (mesure === "retours_arriere") {
    if (valeur <= 1) return qualificatifBas;
    if (valeur <= 3) return qualificatifMoyen;
    return qualificatifHaut;
  }

  if (mesure === "clics_secondaires") {
    if (valeur <= 5) return qualificatifBas;
    if (valeur <= 15) return qualificatifMoyen;
    return qualificatifHaut;
  }

  if (mesure === "utilisation_aide") {
    if (valeur <= 1) return qualificatifBas;
    if (valeur <= 3) return qualificatifMoyen;
    return qualificatifHaut;
  }

  if (mesure === "completude") {
    if (valeur <= 59) return qualificatifBas;
    if (valeur <= 89) return qualificatifMoyen;
    return qualificatifHaut;
  }

  return null;
}

export default function PageResultats() {
  const [resultat, setResultat] = useState(null);
  const [qualificatif, setQualificatif] = useState(null);
  const [chargement, setChargement] = useState(true);

  useEffect(() => {
    const resultatEnregistre = sessionStorage.getItem(
      "observatoire-resultat"
    );

    if (resultatEnregistre) {
      try {
        const resultatParse = JSON.parse(resultatEnregistre);
        setResultat(resultatParse);

        const qualificatifEnregistre = sessionStorage.getItem(
          "observatoire-qualificatif"
        );

        if (qualificatifEnregistre) {
          const qualificatifParse = JSON.parse(
            qualificatifEnregistre
          );

          setQualificatif(qualificatifParse);
        } else {
          const mesuresDisponibles = [
            {
              mesure: "completude",
              valeur: resultatParse.tauxCompletude ?? 0,
            },
            {
              mesure: "temps_avant_reponse",
              valeur: resultatParse.tempsMoyenSecondes ?? 0,
            },
            {
              mesure: "changements_reponse",
              valeur:
                resultatParse.nombreReponsesModifiees ?? 0,
            },
            {
              mesure: "clics_secondaires",
              valeur: Math.max(
                0,
                (resultatParse.nombreClics ?? 0) - 60
              ),
            },
            {
              mesure: "retours_arriere",
              valeur:
                resultatParse.nombreClicsPrecedents ?? 0,
            },
            {
              mesure: "utilisation_aide",
              valeur: resultatParse.nombreClicsAide ?? 0,
            },
          ];

          const mesureTiree =
            mesuresDisponibles[
              Math.floor(
                Math.random() * mesuresDisponibles.length
              )
            ];

          const qualificatifTrouve = trouverQualificatif(
            mesureTiree.mesure,
            mesureTiree.valeur
          );

          if (qualificatifTrouve) {
            sessionStorage.setItem(
              "observatoire-qualificatif",
              JSON.stringify(qualificatifTrouve)
            );

            setQualificatif(qualificatifTrouve);
          }
        }
      } catch (erreur) {
        console.error(
          "Impossible de lire les données enregistrées.",
          erreur
        );
      }
    }

    setChargement(false);
  }, []);

  if (chargement) {
    return (
      <main style={styles.page}>
        <section style={styles.carte}>
          <p style={styles.label}>Rapport d’observation</p>

          <p style={styles.texte}>
            Lecture des données pseudo-scientifiques en cours…
          </p>
        </section>
      </main>
    );
  }

  if (!resultat) {
    return (
      <main style={styles.page}>
        <section style={styles.carte}>
          <p style={styles.label}>Rapport indisponible</p>

          <h1 style={styles.titre}>
            Aucun résultat disponible
          </h1>

          <p style={styles.texte}>
            Aucun questionnaire terminé n’a été trouvé dans cette
            session d’observation.
          </p>

          <p style={styles.avertissement}>
            L’Observatoire décline toute responsabilité en cas
            d’absence de stupidité mesurable.
          </p>

          <div style={styles.actions}>
            <Link href="/" style={styles.boutonSecondaire}>
              Retour à l’accueil
            </Link>

            <Link
              href="/questionnaire"
              style={styles.boutonPrincipal}
            >
              Commencer le questionnaire
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const animal = trouverAnimal(resultat.indiceStupidite);

  const topCategories = Array.isArray(resultat.categories)
    ? resultat.categories
        .filter(
          (categorie) =>
            categorie &&
            typeof categorie.indice === "number" &&
            categorie.nombreReponses > 0
        )
        .sort((a, b) => b.indice - a.indice)
        .slice(0, 3)
    : [];

  return (
    <main style={styles.page}>
      <section style={styles.carte}>
        <p style={styles.label}>
          Rapport officiel d’observation n° 001
        </p>

        <h1 style={styles.titre}>
          Questionnaire terminé
        </h1>

        <p style={styles.introduction}>
          Les services de l’Observatoire ont terminé l’analyse de
          cette session. Les résultats ci-dessous sont fictifs,
          humoristiques et ne constituent pas une évaluation
          scientifique.
        </p>

        {animal && qualificatif && (
          <section style={styles.carteAnimal}>
            <p style={styles.label}>Classification provisoire</p>

            <h2 style={styles.titreAnimal}>
              Vous êtes un {animal.nom} {qualificatif.nom}
            </h2>

            <img
              src={animal.illustration}
              alt={`Illustration humoristique : ${animal.nom}`}
              style={styles.imageAnimal}
            />

            <p style={styles.descriptionAnimal}>
              {animal.description}
            </p>

            <p style={styles.descriptionQualificatif}>
              <strong>Observation complémentaire :</strong>{" "}
              {qualificatif.description}
            </p>
          </section>
        )}

        <div style={styles.blocResultat}>
          <p>
            <strong>Score observé :</strong>{" "}
            {resultat.scoreTotal} / {resultat.scoreMaximum}
          </p>

          <p>
            <strong>Indice de stupidité :</strong>{" "}
            {resultat.indiceStupidite} / 100
          </p>

          <p>
            <strong>Taux de complétude :</strong>{" "}
            {resultat.tauxCompletude} %
          </p>

          <p>
            <strong>Temps moyen de réponse :</strong>{" "}
            {resultat.tempsMoyenSecondes} seconde
            {resultat.tempsMoyenSecondes !== 1 ? "s" : ""} par
            question
          </p>

          <p>
            <strong>Réponses modifiées :</strong>{" "}
            {resultat.nombreReponsesModifiees}
          </p>

          <p>
            <strong>Nombre total de clics :</strong>{" "}
            {resultat.nombreClics}
          </p>

          <p>
            <strong>Clics sur « Question précédente » :</strong>{" "}
            {resultat.nombreClicsPrecedents}
          </p>

          <p>
            <strong>Clics sur « Aide » :</strong>{" "}
            {resultat.nombreClicsAide}
          </p>
        </div>

        {topCategories.length > 0 && (
          <section style={styles.sectionCategories}>
            <p style={styles.sousTitre}>
              Top 3 des catégories observées
            </p>

            <p style={styles.texte}>
              Les catégories ci-dessous correspondent aux domaines
              ayant obtenu les indices les plus élevés durant cette
              session.
            </p>

            <div>
              {topCategories.map((categorie, index) => (
                <article
                  key={categorie.id}
                  style={styles.carteCategorie}
                >
                  <div style={styles.enteteCategorie}>
                    <span style={styles.rangCategorie}>
                      {index + 1}
                    </span>

                    <div>
                      <h3 style={styles.titreCategorie}>
                        {categorie.label}
                      </h3>

                      <p style={styles.indiceCategorie}>
                        Indice observé : {categorie.indice} / 100
                      </p>
                    </div>
                  </div>

                  <p style={styles.descriptionCategorie}>
                    {categorie.description_resultat}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}

        <div style={styles.encadreObservation}>
          <p style={styles.sousTitre}>
            Observation complémentaire
          </p>

          <p style={styles.texte}>
            Cette fiche décrit uniquement les actions réalisées
            pendant cette session. Elle ne définit pas votre
            personnalité et ne permet de tirer aucune conclusion
            générale sur vous.
          </p>

          <p style={styles.phraseHumoristique}>
            Conclusion provisoire : l’échantillon humain observé
            semble avoir coopéré avec le protocole.
          </p>
        </div>

        <p style={styles.avertissement}>
          Cette observation est fictive, humoristique et non
          scientifique. Les résultats décrivent uniquement cette
          session et ne constituent ni un diagnostic, ni un test de
          quotient intellectuel, ni une mesure de votre valeur.
        </p>

        <div style={styles.actions}>
          <Link href="/" style={styles.boutonSecondaire}>
            Retour à l’accueil
          </Link>

          <Link
            href="/questionnaire"
            style={styles.boutonPrincipal}
          >
            Recommencer
          </Link>
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "2rem 1rem",
    backgroundColor: "#F5F5F5",
    color: "#000000",
  },

  carte: {
    width: "100%",
    maxWidth: "720px",
    margin: "0 auto",
    padding: "2rem",
    backgroundColor: "#FFFFFF",
    border: "2px solid #000000",
  },

  label: {
    margin: 0,
    color: "#3B3B3B",
    fontSize: "0.8rem",
    fontWeight: "bold",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },

  titre: {
    marginTop: "0.75rem",
    marginBottom: "1rem",
    fontSize: "clamp(1.8rem, 5vw, 2.6rem)",
    lineHeight: 1.15,
  },

  introduction: {
    color: "#3B3B3B",
    lineHeight: 1.6,
  },

  carteAnimal: {
    marginTop: "1.5rem",
    padding: "1.5rem",
    border: "2px solid #000000",
    backgroundColor: "#FFFFFF",
  },

  titreAnimal: {
    marginTop: "0.75rem",
    marginBottom: "1rem",
    fontSize: "clamp(1.6rem, 5vw, 2.2rem)",
    lineHeight: 1.2,
  },

  imageAnimal: {
    display: "block",
    width: "100%",
    maxWidth: "280px",
    height: "280px",
    margin: "0 auto 1.5rem",
    objectFit: "contain",
  },

  descriptionAnimal: {
    margin: 0,
    color: "#3B3B3B",
    lineHeight: 1.6,
  },

  descriptionQualificatif: {
    marginTop: "1rem",
    marginBottom: 0,
    paddingTop: "1rem",
    borderTop: "1px solid #A5A5A5",
    color: "#3B3B3B",
    lineHeight: 1.6,
  },

  texte: {
    color: "#3B3B3B",
    lineHeight: 1.6,
  },

  blocResultat: {
    marginTop: "1.5rem",
    padding: "1.25rem",
    border: "1px solid #A5A5A5",
    backgroundColor: "#F5F5F5",
    lineHeight: 1.6,
  },

  sectionCategories: {
    marginTop: "1.5rem",
  },

  carteCategorie: {
    marginTop: "1rem",
    padding: "1.25rem",
    border: "1px solid #A5A5A5",
    backgroundColor: "#F5F5F5",
  },

  enteteCategorie: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },

  rangCategorie: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: "2.25rem",
    height: "2.25rem",
    backgroundColor: "#000000",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: "1.1rem",
  },

  titreCategorie: {
    margin: 0,
    fontSize: "1.1rem",
  },

  indiceCategorie: {
    margin: "0.35rem 0 0",
    color: "#3B3B3B",
    fontSize: "0.9rem",
    fontWeight: "bold",
  },

  descriptionCategorie: {
    marginBottom: 0,
    color: "#3B3B3B",
    lineHeight: 1.6,
  },

  encadreObservation: {
    marginTop: "1.5rem",
    padding: "1.25rem",
    border: "1px solid #A5A5A5",
    backgroundColor: "#FFFFFF",
  },

  sousTitre: {
    marginTop: 0,
    marginBottom: "0.75rem",
    fontWeight: "bold",
    fontSize: "1.1rem",
  },

  phraseHumoristique: {
    marginBottom: 0,
    color: "#3B3B3B",
    fontStyle: "italic",
    lineHeight: 1.6,
  },

  avertissement: {
    marginTop: "1.5rem",
    color: "#3B3B3B",
    fontStyle: "italic",
    lineHeight: 1.6,
  },

  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
    marginTop: "1.5rem",
  },

  boutonPrincipal: {
    display: "inline-block",
    padding: "0.75rem 1rem",
    border: "1px solid #000000",
    backgroundColor: "#000000",
    color: "#FFFFFF",
    textDecoration: "none",
    fontWeight: "bold",
  },

  boutonSecondaire: {
    display: "inline-block",
    padding: "0.75rem 1rem",
    border: "1px solid #000000",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
