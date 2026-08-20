export default function PageAccueil() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        backgroundColor: "#FFFFFF",
        color: "#000000",
        textAlign: "center",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: "720px",
          padding: "3rem 2rem",
          border: "1px solid #A5A5A5",
          backgroundColor: "#F5F5F5",
        }}
      >
        <p
          style={{
            margin: "0 0 1rem",
            color: "#3B3B3B",
            fontSize: "0.85rem",
            fontWeight: "bold",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Institution d’observation presque officielle
        </p>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(2rem, 6vw, 4rem)",
            lineHeight: 1.1,
          }}
        >
          L’Observatoire de la Stupidité
        </h1>

        <p
          style={{
            margin: "1.5rem auto 2rem",
            maxWidth: "520px",
            color: "#3B3B3B",
            fontSize: "1.1rem",
            lineHeight: 1.6,
          }}
        >
          Une expérience humoristique consacrée à l’observation des
          raisonnements absurdes, des décisions surprenantes et des
          comportements parfaitement discutables.
        </p>

        <a
          href="/questionnaire"
          style={{
            display: "inline-block",
            padding: "1rem 1.5rem",
            backgroundColor: "#000000",
            color: "#FFFFFF",
            textDecoration: "none",
            fontWeight: "bold",
            border: "2px solid #000000",
          }}
        >
          Accéder au questionnaire
        </a>

        <p
          style={{
            margin: "2rem 0 0",
            color: "#3B3B3B",
            fontSize: "0.85rem",
            fontStyle: "italic",
          }}
        >
          Rire de soi, réfléchir à ses biais.
        </p>
      </section>
    </main>
  );
}
