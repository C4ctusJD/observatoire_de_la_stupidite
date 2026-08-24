import Link from "next/link";

export default function PageAccueil() {
  return (
    <main style={styles.page}>
      {/* Bandeau institutionnel */}
      <div style={styles.bandeauRepublique}>
        <div style={styles.conteneur}>
          <span style={styles.embleme}>◼</span>
          <div>
            <strong>République presque française</strong>
            <br />
            <span style={styles.sousTexte}>
              Liberté, égalité, mauvaise foi
            </span>
          </div>
        </div>
      </div>

      {/* En-tête */}
      <header style={styles.header}>
        <div style={styles.conteneur}>
          <div style={styles.entetePrincipal}>
            <Link href="/" style={styles.identite}>
              <span style={styles.logo}>O</span>

              <span>
                <strong style={styles.nomSite}>
                  L’Observatoire
                  <br />
                  de la Stupidité
                </strong>

                <span style={styles.baseline}>
                  Institution fictive d’observation comportementale
                </span>
              </span>
            </Link>

            <div style={styles.reference}>
              <span>Organisme n° 001</span>
              <span>Protocole expérimental</span>
            </div>
          </div>

          <nav style={styles.navigation} aria-label="Navigation principale">
            <Link href="/" style={styles.lienNavigation}>
              Accueil
            </Link>

            <a href="#presentation" style={styles.lienNavigation}>
              Présentation
            </a>

            <a href="#fonctionnement" style={styles.lienNavigation}>
              Fonctionnement
            </a>

            <a href="#mentions" style={styles.lienNavigation}>
              Mentions
            </a>
          </nav>
        </div>
      </header>

      {/* Contenu principal */}
      <div style={styles.conteneur}>
        <section style={styles.filAriane} aria-label="Fil d’Ariane">
          Accueil <span aria-hidden="true">›</span> Présentation de l’Observatoire
        </section>

        <section style={styles.hero} id="presentation">
          <div style={styles.heroContenu}>
            <p style={styles.surtitre}>DISPOSITIF D’OBSERVATION RÉCRÉATIF</p>

            <h1 style={styles.titre}>
              Étudiez vos réactions face à des situations parfaitement
              raisonnables.
            </h1>

            <p style={styles.introduction}>
              L’Observatoire de la Stupidité propose une série de situations
              absurdes, de choix douteux et de raisonnements approximatifs afin
              d’observer vos comportements dans un cadre méthodologiquement
              contestable.
            </p>

            <Link href="/questionnaire" style={styles.boutonPrincipal}>
              Accéder au questionnaire
              <span aria-hidden="true"> →</span>
            </Link>

            <p style={styles.precisionAction}>
              Durée estimée : quelques minutes · Participation libre · Aucun
              compte requis
            </p>
          </div>

          <aside style={styles.encadreProtocole}>
            <p style={styles.label}>État du protocole</p>

            <p style={styles.statut}>
              <span style={styles.pointStatut} aria-hidden="true">
                ●
              </span>
              Opérationnel
            </p>

            <div style={styles.ligneSeparatrice} />

            <p style={styles.textePetit}>
              Les observations recueillies dans le cadre de cette expérience
              sont fictives, humoristiques et sans valeur scientifique.
            </p>

            <span style={styles.cachet}>FICTION — HUMOUR</span>
          </aside>
        </section>

        {/* Cartes de présentation */}
        <section style={styles.section} id="fonctionnement">
          <div style={styles.titreSection}>
            <p style={styles.surtitre}>À PROPOS DU DISPOSITIF</p>
            <h2 style={styles.sousTitre}>
              Une observation sérieuse de phénomènes peu sérieux
            </h2>
          </div>

          <div style={styles.grille}>
            <article style={styles.carte}>
              <span style={styles.numeroCarte}>01</span>
              <h3 style={styles.titreCarte}>Des situations absurdes</h3>
              <p style={styles.texteCarte}>
                Répondez à des questions portant sur la précipitation, la
                crédulité, la mauvaise foi ou encore la tendance à compliquer
                inutilement les choses.
              </p>
            </article>

            <article style={styles.carte}>
              <span style={styles.numeroCarte}>02</span>
              <h3 style={styles.titreCarte}>Une méthode douteuse</h3>
              <p style={styles.texteCarte}>
                Vos choix sont analysés selon un protocole volontairement
                approximatif, présenté avec tout le sérieux administratif
                nécessaire.
              </p>
            </article>

            <article style={styles.carte}>
              <span style={styles.numeroCarte}>03</span>
              <h3 style={styles.titreCarte}>Un résultat à interpréter</h3>
              <p style={styles.texteCarte}>
                Découvrez une appellation animalière et quelques observations
                sur votre session. Rien de définitif, rien de médical, mais
                parfois un peu troublant.
              </p>
            </article>
          </div>
        </section>

        {/* Avertissement */}
        <section style={styles.avertissement} id="mentions">
          <strong>À savoir avant de commencer</strong>

          <p>
            Ce questionnaire est une expérience fictive, satirique et
            récréative. Il ne constitue ni un test de quotient intellectuel,
            ni un diagnostic psychologique, ni une évaluation scientifique de
            votre personne.
          </p>
        </section>
      </div>

      {/* Pied de page */}
      <footer style={styles.footer}>
        <div style={styles.conteneur}>
          <div style={styles.footerContenu}>
            <p style={styles.footerTitre}>L’Observatoire de la Stupidité</p>

            <p style={styles.footerTexte}>
              Un organisme fictif dédié à l’étude des raisonnements
              approximatifs.
            </p>
          </div>

          <div style={styles.footerMentions}>
            <span>Projet humoristique</span>
            <span>·</span>
            <span>Aucune donnée personnelle nécessaire</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#F5F5F5",
    color: "#000000",
    fontFamily: "Montserrat, Arial, sans-serif",
  },

  conteneur: {
    width: "100%",
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "0 1.25rem",
    boxSizing: "border-box",
  },

  bandeauRepublique: {
    backgroundColor: "#000000",
    color: "#FFFFFF",
    padding: "0.7rem 0",
    fontSize: "0.78rem",
  },

  embleme: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "1.8rem",
    height: "1.8rem",
    marginRight: "0.7rem",
    border: "1px solid #FFFFFF",
    fontSize: "0.7rem",
  },

  sousTexte: {
    opacity: 0.75,
  },

  header: {
    backgroundColor: "#FFFFFF",
    borderBottom: "1px solid #A5A5A5",
  },

  entetePrincipal: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
    padding: "1.5rem 0",
  },

  identite: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    color: "#000000",
    textDecoration: "none",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "3.8rem",
    height: "3.8rem",
    border: "3px solid #000000",
    borderRadius: "50%",
    fontSize: "2rem",
    fontWeight: "bold",
  },

  nomSite: {
    display: "block",
    fontSize: "1.35rem",
    lineHeight: 1.05,
  },

  baseline: {
    display: "block",
    marginTop: "0.4rem",
    color: "#3B3B3B",
    fontSize: "0.72rem",
  },

  reference: {
    display: "flex",
    flexDirection: "column",
    gap: "0.35rem",
    color: "#3B3B3B",
    fontSize: "0.75rem",
    textAlign: "right",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
  },

  navigation: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.5rem",
    borderTop: "1px solid #D9D9D9",
  },

  lienNavigation: {
    padding: "0.9rem 0",
    color: "#000000",
    fontSize: "0.88rem",
    fontWeight: "bold",
    textDecoration: "none",
    borderBottom: "3px solid transparent",
  },

  filAriane: {
    padding: "1.25rem 0",
    color: "#3B3B3B",
    fontSize: "0.8rem",
  },

  hero: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 2fr) minmax(260px, 1fr)",
    gap: "2rem",
    padding: "3rem",
    backgroundColor: "#FFFFFF",
    borderTop: "5px solid #000000",
    borderBottom: "1px solid #A5A5A5",
  },

  heroContenu: {
    maxWidth: "720px",
  },

  surtitre: {
    margin: 0,
    color: "#3B3B3B",
    fontSize: "0.78rem",
    fontWeight: "bold",
    letterSpacing: "0.1em",
  },

  titre: {
    maxWidth: "760px",
    margin: "1rem 0",
    fontSize: "clamp(2rem, 5vw, 3.8rem)",
    lineHeight: 1.08,
  },

  introduction: {
    maxWidth: "680px",
    margin: "0 0 1.75rem",
    color: "#3B3B3B",
    fontSize: "1.08rem",
    lineHeight: 1.65,
  },

  boutonPrincipal: {
    display: "inline-block",
    padding: "1rem 1.35rem",
    backgroundColor: "#000000",
    color: "#FFFFFF",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "0.95rem",
  },

  precisionAction: {
    margin: "0.8rem 0 0",
    color: "#3B3B3B",
    fontSize: "0.78rem",
  },

  encadreProtocole: {
    alignSelf: "start",
    padding: "1.5rem",
    border: "1px solid #A5A5A5",
    backgroundColor: "#F5F5F5",
  },

  label: {
    margin: 0,
    color: "#3B3B3B",
    fontSize: "0.72rem",
    fontWeight: "bold",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },

  statut: {
    margin: "0.8rem 0",
    fontWeight: "bold",
  },

  pointStatut: {
    marginRight: "0.5rem",
    fontSize: "0.7rem",
  },

  ligneSeparatrice: {
    height: "1px",
    backgroundColor: "#A5A5A5",
  },

  textePetit: {
    color: "#3B3B3B",
    fontSize: "0.88rem",
    lineHeight: 1.55,
  },

  cachet: {
    display: "inline-block",
    marginTop: "0.5rem",
    padding: "0.35rem 0.5rem",
    border: "1px solid #000000",
    fontSize: "0.65rem",
    fontWeight: "bold",
    letterSpacing: "0.06em",
  },

  section: {
    padding: "4rem 0",
  },

  titreSection: {
    maxWidth: "700px",
    marginBottom: "1.5rem",
  },

  sousTitre: {
    margin: "0.6rem 0 0",
    fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
    lineHeight: 1.15,
  },

  grille: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "1rem",
  },

  carte: {
    minHeight: "210px",
    padding: "1.5rem",
    backgroundColor: "#FFFFFF",
    border: "1px solid #A5A5A5",
    boxSizing: "border-box",
  },

  numeroCarte: {
    color: "#3B3B3B",
    fontSize: "0.8rem",
    fontWeight: "bold",
  },

  titreCarte: {
    margin: "1.5rem 0 0.75rem",
    fontSize: "1.15rem",
  },

  texteCarte: {
    margin: 0,
    color: "#3B3B3B",
    lineHeight: 1.6,
  },

  avertissement: {
    marginBottom: "4rem",
    padding: "1.25rem 1.5rem",
    borderLeft: "5px solid #000000",
    backgroundColor: "#FFFFFF",
    color: "#3B3B3B",
    lineHeight: 1.6,
  },

  footer: {
    padding: "2rem 0",
    backgroundColor: "#000000",
    color: "#FFFFFF",
  },

  footerContenu: {
    display: "flex",
    justifyContent: "space-between",
    gap: "2rem",
    alignItems: "flex-start",
  },

  footerTitre: {
    margin: 0,
    fontWeight: "bold",
  },

  footerTexte: {
    margin: "0.4rem 0 0",
    maxWidth: "460px",
    color: "#D9D9D9",
    fontSize: "0.85rem",
  },

  footerMentions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    color: "#D9D9D9",
    fontSize: "0.75rem",
    textAlign: "right",
  },
};
