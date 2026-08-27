import Link from "next/link";
import styles from "./page.module.css";


export default function PageAccueil() {
  return (
    <main className={styles.page}>
      {/* Bandeau institutionnel */}
      <div className={styles.bandeauRepublique}>
  <div className={styles.conteneurBandeau}>
    

    <div className={styles.texteUnsi}>
      <strong>Université Nationale des Sciences Inutiles</strong>

      <span className={styles.sousTexte}>
        In dubio, clicca iterum.
      </span>
    </div>
  </div>
</div>

      {/* En-tête */}
      <header className={styles.header}>
        <div className={styles.conteneur}>
          <div className={styles.entetePrincipal}>
            <Link href="/" className={styles.identite}>
              <img
                src="/images/logo_ods.png"
                alt="Logo de L’Observatoire de la Stupidité"
                className={styles.logo}
              />

              <span>
                <strong className={styles.nomSite}>
                  Observatoire
                  <br />
                  de la Stupidité
                </strong>

                <span className={styles.baseline}>
                  Institution d’observations comportementales affligeantes
                </span>
              </span>
            </Link>

            <div className={styles.reference}>
              <span>Organisme n° 00X85JU527V8</span>
              <span>Protocole expérimental</span>
              <span>Tout va bien se passer</span>
            </div>
          </div>

          <nav
            className={styles.navigation}
            aria-label="Navigation principale"
          >
            <Link href="/" className={styles.lienNavigation}>
              Accueil
            </Link>

            <a href="#presentation" className={styles.lienNavigation}>
              Présentation
            </a>

            <a href="#fonctionnement" className={styles.lienNavigation}>
              Fonctionnement
            </a>

            <a href="#mentions" className={styles.lienNavigation}>
              Mentions
            </a>
          </nav>
        </div>
      </header>

      {/* Contenu principal */}
      <div className={styles.conteneur}>
        <section
          className={styles.filAriane}
          aria-label="Fil d’Ariane"
        >
          Accueil <span aria-hidden="true">›</span> Présentation de
          l’Observatoire
        </section>

        <section className={styles.hero} id="presentation">
          <div className={styles.heroContenu}>
            <p className={styles.surtitre}>
              DISPOSITIF D’OBSERVATION RÉCRÉATIF
            </p>

            <h1 className={styles.titre}>
              Étudiez vos réactions face à des situations parfaitement
              raisonnables.
            </h1>

            <p className={styles.introduction}>
              L’Observatoire de la Stupidité propose une série de situations
              absurdes, de choix douteux et de raisonnements approximatifs afin
              d’observer vos comportements dans un cadre méthodologiquement
              contestable.
            </p>

            <Link
              href="/questionnaire"
              className={styles.boutonPrincipal}
            >
              Accéder au questionnaire
              <span aria-hidden="true"> →</span>
            </Link>

            <p className={styles.precisionAction}>
              Durée estimée : quelques minutes · Participation libre · Aucun
              compte requis
            </p>
          </div>

          <aside className={styles.encadreProtocole}>
            <p className={styles.label}>État du protocole</p>

            <p className={styles.statut}>
              <span
                className={styles.pointStatut}
                aria-hidden="true"
              >
                ●
              </span>
              Opérationnel
            </p>

            <div className={styles.ligneSeparatrice} />

            <p className={styles.textePetit}>
              Les observations recueillies dans le cadre de cette expérience
              sont fictives, humoristiques et sans valeur scientifique.
            </p>

            <span className={styles.cachet}>FICTION — HUMOUR</span>
          </aside>
        </section>

        {/* Cartes de présentation */}
        <section className={styles.section} id="fonctionnement">
          <div className={styles.titreSection}>
            <p className={styles.surtitre}>À PROPOS DU DISPOSITIF</p>

            <h2 className={styles.sousTitre}>
              Une observation sérieuse de phénomènes peu sérieux
            </h2>
          </div>

          <div className={styles.grille}>
            <article className={styles.carte}>
              <span className={styles.numeroCarte}>01</span>

              <h3 className={styles.titreCarte}>
                Des situations absurdes
              </h3>

              <p className={styles.texteCarte}>
                Répondez à des questions portant sur la précipitation, la
                crédulité, la mauvaise foi ou encore la tendance à compliquer
                inutilement les choses.
              </p>
            </article>

            <article className={styles.carte}>
              <span className={styles.numeroCarte}>02</span>

              <h3 className={styles.titreCarte}>
                Une méthode douteuse
              </h3>

              <p className={styles.texteCarte}>
                Vos choix sont analysés selon un protocole volontairement
                approximatif, présenté avec tout le sérieux administratif
                nécessaire.
              </p>
            </article>

            <article className={styles.carte}>
              <span className={styles.numeroCarte}>03</span>

              <h3 className={styles.titreCarte}>
                Un résultat à interpréter
              </h3>

              <p className={styles.texteCarte}>
                Découvrez une appellation animalière et quelques observations
                sur votre session. Rien de définitif, rien de médical, mais
                parfois un peu troublant.
              </p>
            </article>
          </div>
        </section>

        {/* Avertissement */}
        <section className={styles.avertissement} id="mentions">
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
      <footer className={styles.footer}>
        <div className={styles.conteneur}>
          <div className={styles.footerContenu}>
            <p className={styles.footerTitre}>
              L’Observatoire de la Stupidité
            </p>

            <p className={styles.footerTexte}>
              Un organisme fictif dédié à l’étude des raisonnements
              approximatifs.
            </p>
          </div>

          <div className={styles.footerMentions}>
            <span>Projet humoristique</span>
            <span>·</span>
            <span>Aucune donnée personnelle nécessaire</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
