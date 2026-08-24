import Link from "next/link";

export default function PageAccueil() {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="brand">
            <img
              src="/images/logo_ods.png"
              alt="Logo de L'Observatoire de la Stupidité"
              className="logo"
            />
          </Link>

          <nav className="main-nav" aria-label="Navigation principale">
            <Link href="#a-propos">L’Observatoire</Link>
            <Link href="#themes">Thématiques</Link>
            <Link href="#actualites">Actualités</Link>
            <Link href="#contact">Contact</Link>
          </nav>

          <Link href="/questionnaire" className="header-button">
            Commencer l’observation
          </Link>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-content">
              <p className="eyebrow">Organisme fictif d’observation comportementale</p>

              <h1>
                La stupidité humaine est un phénomène
                <span> qui mérite d’être observé.</span>
              </h1>

              <p className="hero-text">
                L’Observatoire étudie les raisonnements absurdes, les décisions
                précipitées et les réactions étonnamment confiantes dans leur
                environnement naturel.
              </p>

              <div className="hero-actions">
                <Link href="/questionnaire" className="primary-button">
                  Participer au questionnaire
                </Link>

                <Link href="#a-propos" className="secondary-button">
                  Découvrir l’Observatoire
                </Link>
              </div>

              <p className="hero-notice">
                Expérience humoristique, fictive et non scientifique.
              </p>
            </div>

            <div className="hero-image-wrapper">
              <div className="image-label">Spécimen actuellement surveillé</div>

              <img
                src="/images/pigeon1.png"
                alt="Pigeon observé par L'Observatoire de la Stupidité"
                className="pigeon-image"
              />

              <p className="image-caption">
                <strong>Columba dubitativus</strong>
                <br />
                Sujet présentant une confiance élevée face aux situations
                pourtant manifestement simples.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="a-propos">
          <div className="section-heading">
            <div>
              <p className="eyebrow">À propos</p>
              <h2>Une institution presque sérieuse</h2>
            </div>

            <p className="section-introduction">
              Fondé par des observateurs dont les qualifications restent à
              vérifier, l’Observatoire analyse les petits accidents de
              raisonnement qui rendent la vie quotidienne si intéressante.
            </p>
          </div>

          <div className="info-grid">
            <article className="info-card">
              <span className="card-number">01</span>
              <h3>Observer</h3>
              <p>
                Des situations ordinaires sont soumises à un protocole
                expérimental approximativement rigoureux.
              </p>
            </article>

            <article className="info-card">
              <span className="card-number">02</span>
              <h3>Questionner</h3>
              <p>
                Chaque réponse permet d’étudier une réaction, une logique ou
                une justification plus ou moins défendable.
              </p>
            </article>

            <article className="info-card">
              <span className="card-number">03</span>
              <h3>Interpréter</h3>
              <p>
                Les résultats décrivent uniquement votre session et ne
                constituent jamais un diagnostic ou une vérité sur vous.
              </p>
            </article>
          </div>
        </section>

        <section className="featured-section" id="actualites">
          <div className="section-heading">
            <div>
              <p className="eyebrow">À la une</p>
              <h2>Dernières observations</h2>
            </div>

            <Link href="/questionnaire" className="text-link">
              Voir le protocole complet →
            </Link>
          </div>

          <div className="news-grid">
            <article className="news-card news-card-large">
              <div className="news-card-content">
                <p className="news-category">Rapport prioritaire</p>
                <h3>
                  Pourquoi certaines personnes relisent-elles un message
                  avant de l’envoyer… puis l’envoient au mauvais destinataire ?
                </h3>
                <p>
                  Une étude préliminaire suggère que la confiance en soi
                  augmente parfois juste avant l’erreur.
                </p>
                <Link href="/questionnaire" className="text-link">
                  Participer à l’étude →
                </Link>
              </div>
            </article>

            <article className="news-card">
              <p className="news-category">Comportement observé</p>
              <h3>Le phénomène du « je savais que ça allait arriver »</h3>
              <p>
                Analyse de la capacité humaine à prévoir les événements après
                qu’ils se sont produits.
              </p>
              <span className="news-date">Observation en cours</span>
            </article>

            <article className="news-card">
              <p className="news-category">Note méthodologique</p>
              <h3>La mauvaise foi est-elle une science exacte ?</h3>
              <p>
                Le comité répond : non. Mais il a tout de même produit un
                graphique.
              </p>
              <span className="news-date">Dossier provisoire</span>
            </article>
          </div>
        </section>

        <section className="themes-section" id="themes">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Domaines d’observation</p>
              <h2>Thématiques étudiées</h2>
            </div>
          </div>

          <div className="theme-list">
            <span>Précipitation</span>
            <span>Crédulité</span>
            <span>Mauvaise foi</span>
            <span>Inattention</span>
            <span>Rationalisation</span>
            <span>Confiance excessive</span>
            <span>Réaction disproportionnée</span>
            <span>Acharnement inutile</span>
          </div>
        </section>

        <section className="cta-section">
          <div>
            <p className="eyebrow">Protocole n° 001</p>
            <h2>Acceptez-vous d’être observé pendant quelques minutes ?</h2>
            <p>
              Une série de situations absurdes, des réponses discutables et
              une classification finale sans aucune valeur scientifique.
            </p>
          </div>

          <Link href="/questionnaire" className="primary-button">
            Démarrer l’observation
          </Link>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div>
          <strong>L’Observatoire de la Stupidité</strong>
          <p>Institution fictive — résultats humoristiques uniquement.</p>
        </div>

        <p>
          Aucun diagnostic. Aucune donnée inutile. Beaucoup d’interprétations
          douteuses.
        </p>
      </footer>

      <style jsx>{`
        :global(*) {
          box-sizing: border-box;
        }

        :global(html) {
          scroll-behavior: smooth;
        }

        :global(body) {
          margin: 0;
          background: #ffffff;
          color: #000000;
          font-family: Arial, Helvetica, sans-serif;
        }

        .site-header {
          border-bottom: 1px solid #a5a5a5;
          background: #ffffff;
        }

        .header-inner {
          max-width: 1240px;
          min-height: 92px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .brand {
          display: inline-flex;
          align-items: center;
          flex-shrink: 0;
        }

        .logo {
          display: block;
          width: 180px;
          height: auto;
          max-height: 64px;
          object-fit: contain;
        }

        .main-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          flex: 1;
        }

        .main-nav a,
        .text-link {
          color: #000000;
          font-weight: bold;
          text-decoration: none;
        }

        .main-nav a:hover,
        .text-link:hover {
          text-decoration: underline;
        }

        .header-button,
        .primary-button {
          display: inline-block;
          padding: 0.9rem 1.15rem;
          background: #000000;
          color: #ffffff;
          font-weight: bold;
          text-decoration: none;
          border: 1px solid #000000;
        }

        .header-button:hover,
        .primary-button:hover {
          background: #3b3b3b;
        }

        .hero {
          background: #f5f5f5;
          border-bottom: 1px solid #a5a5a5;
        }

        .hero-inner {
          max-width: 1240px;
          min-height: 530px;
          margin: 0 auto;
          padding: 4rem 1.5rem;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 4rem;
        }

        .eyebrow {
          margin: 0 0 0.8rem;
          color: #3b3b3b;
          font-size: 0.78rem;
          font-weight: bold;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        h1,
        h2,
        h3,
        p {
          margin-top: 0;
        }

        h1 {
          max-width: 760px;
          margin-bottom: 1.5rem;
          font-size: clamp(2.4rem, 5vw, 5rem);
          line-height: 1.02;
          letter-spacing: -0.06em;
        }

        h1 span {
          color: #3b3b3b;
        }

        .hero-text {
          max-width: 650px;
          color: #3b3b3b;
          font-size: 1.1rem;
          line-height: 1.65;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 2rem;
        }

        .secondary-button {
          display: inline-block;
          padding: 0.9rem 1.15rem;
          color: #000000;
          border: 1px solid #000000;
          font-weight: bold;
          text-decoration: none;
          background: #ffffff;
        }

        .hero-notice {
          margin-top: 1.25rem;
          color: #3b3b3b;
          font-size: 0.85rem;
          font-style: italic;
        }

        .hero-image-wrapper {
          min-height: 390px;
          padding: 1.25rem;
          background: #ffffff;
          border: 1px solid #000000;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .image-label,
        .news-category {
          color: #3b3b3b;
          font-size: 0.75rem;
          font-weight: bold;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }

        .pigeon-image {
          display: block;
          width: 100%;
          height: 270px;
          margin: 1rem auto;
          object-fit: contain;
        }

        .image-caption {
          margin-bottom: 0;
          padding-top: 1rem;
          border-top: 1px solid #a5a5a5;
          color: #3b3b3b;
          line-height: 1.5;
        }

        .section,
        .featured-section,
        .themes-section {
          max-width: 1240px;
          margin: 0 auto;
          padding: 5rem 1.5rem;
        }

        .featured-section {
          max-width: none;
          padding-right: max(1.5rem, calc((100vw - 1210px) / 2));
          padding-left: max(1.5rem, calc((100vw - 1210px) / 2));
          background: #f5f5f5;
          border-top: 1px solid #a5a5a5;
          border-bottom: 1px solid #a5a5a5;
        }

        .section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        h2 {
          margin-bottom: 0;
          font-size: clamp(2rem, 4vw, 3.2rem);
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .section-introduction {
          max-width: 500px;
          margin-bottom: 0;
          color: #3b3b3b;
          line-height: 1.6;
        }

        .info-grid,
        .news-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .info-card,
        .news-card {
          padding: 1.5rem;
          border: 1px solid #a5a5a5;
          background: #ffffff;
        }

        .card-number {
          display: block;
          margin-bottom: 2rem;
          color: #3b3b3b;
          font-weight: bold;
        }

        .info-card h3,
        .news-card h3 {
          margin-bottom: 0.9rem;
          font-size: 1.35rem;
          line-height: 1.2;
        }

        .info-card p,
        .news-card p {
          margin-bottom: 1.5rem;
          color: #3b3b3b;
          line-height: 1.6;
        }

        .news-card-large {
          grid-column: span 2;
          min-height: 300px;
          display: flex;
          align-items: end;
          background: #000000;
          color: #ffffff;
        }

        .news-card-large .news-category,
        .news-card-large p {
          color: #ffffff;
        }

        .news-card-large h3 {
          max-width: 680px;
          font-size: clamp(1.6rem, 3vw, 2.5rem);
        }

        .news-card-large .text-link {
          color: #ffffff;
        }

        .news-date {
          color: #3b3b3b;
          font-size: 0.85rem;
          font-style: italic;
        }

        .theme-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .theme-list span {
          padding: 0.8rem 1rem;
          border: 1px solid #000000;
          background: #ffffff;
          font-weight: bold;
        }

        .cta-section {
          max-width: 1240px;
          margin: 0 auto 5rem;
          padding: 2.5rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          background: #000000;
          color: #ffffff;
        }

        .cta-section .eyebrow,
        .cta-section p {
          color: #ffffff;
        }

        .cta-section h2 {
          max-width: 700px;
          margin-bottom: 1rem;
        }

        .cta-section p {
          max-width: 650px;
          margin-bottom: 0;
          line-height: 1.6;
        }

        .cta-section .primary-button {
          flex-shrink: 0;
          background: #ffffff;
          color: #000000;
          border-color: #ffffff;
        }

        .cta-section .primary-button:hover {
          background: #d9d9d9;
        }

        .site-footer {
          padding: 2rem 1.5rem;
          border-top: 1px solid #a5a5a5;
          display: flex;
          justify-content: space-between;
          gap: 2rem;
          color: #3b3b3b;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .site-footer p {
          margin-bottom: 0;
        }

        @media (max-width: 850px) {
          .header-inner {
            flex-wrap: wrap;
          }

          .main-nav {
            order: 3;
            width: 100%;
            justify-content: flex-start;
            overflow-x: auto;
            padding-bottom: 0.25rem;
          }

          .hero-inner {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .info-grid,
          .news-grid {
            grid-template-columns: 1fr;
          }

          .news-card-large {
            grid-column: auto;
          }

          .section-heading,
          .cta-section,
          .site-footer {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 520px) {
          .header-inner {
            padding: 1rem;
          }

          .logo {
            width: 145px;
          }

          .header-button {
            padding: 0.7rem 0.8rem;
            font-size: 0.85rem;
          }

          .hero-inner,
          .section,
          .featured-section,
          .themes-section {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }

          h1 {
            font-size: 2.6rem;
          }

          .hero-actions {
            flex-direction: column;
          }

          .primary-button,
          .secondary-button {
            width: 100%;
            text-align: center;
          }

          .cta-section {
            margin-bottom: 3rem;
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </>
  );
}
