import Link from "next/link";

export default function PageAccueil() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>L'Observatoire de la Stupidité</h1>

      <p style={{ color: "#3B3B3B", marginTop: "1rem" }}>
        Institution d'observation des comportements absurdes.
        <br />
        (Site en cours de construction.)
      </p>

      <Link
        href="/questionnaire"
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
        Accéder au questionnaire
      </Link>
    </main>
  );
}
