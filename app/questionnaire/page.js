export default function PageQuestionnaire() {
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
          maxWidth: "640px",
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
          Protocole d’observation n° 001
        </p>

        <h1>Questionnaire</h1>

        <p
          style={{
            color: "#3B3B3B",
            lineHeight: 1.6,
          }}
        >
          Préparez-vous à répondre à plusieurs situations soigneusement
          absurdes. Vos réponses seront observées avec une rigueur toute
          relative.
        </p>

        <a
          href="/"
          style={{
            display: "inline-block",
            marginTop: "1.5rem",
            padding: "1rem 1.5rem",
            backgroundColor: "#000000",
            color: "#FFFFFF",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Retour à l’accueil
        </a>
      </section>
    </main>
  );
}
