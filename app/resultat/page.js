import path from "path";
import fs from "fs/promises";

function normalizeArray(maybeArrayOrObj, key) {
  if (Array.isArray(maybeArrayOrObj)) return maybeArrayOrObj;
  if (maybeArrayOrObj && typeof maybeArrayOrObj === "object") {
    const v = maybeArrayOrObj[key];
    if (Array.isArray(v)) return v;
  }
  return [];
}

export default async function ResultatPage() {
  const dataDir = path.join(process.cwd(), "data");

  const [animauxRaw, categoriesRaw, questionsRaw] = await Promise.all([
    fs.readFile(path.join(dataDir, "animaux.json"), "utf8"),
    fs.readFile(path.join(dataDir, "categories.json"), "utf8"),
    fs.readFile(path.join(dataDir, "questions.json"), "utf8"),
  ]);

  const animauxParsed = JSON.parse(animauxRaw);
  const categoriesParsed = JSON.parse(categoriesRaw);
  const questionsParsed = JSON.parse(questionsRaw);

  // Cas 1 : fichier = { animaux: [...] }
  // Cas 2 : fichier = [...]
  const animaux = normalizeArray(animauxParsed, "animaux");
  const categories = normalizeArray(categoriesParsed, "categories");
  const questions = normalizeArray(questionsParsed, "questions");

  return (
    <main style={{ padding: 24, fontFamily: "Montserrat, sans-serif" }}>
      <h1 style={{ marginBottom: 12 }}>Observatoire — Résultat (provisoire)</h1>

      <p style={{ color: "#3B3B3B", marginBottom: 24 }}>
        Chargement des données JSON côté serveur. (Test)
      </p>

      <div style={{ background: "#F5F5F5", border: "1px solid #A5A5A5", padding: 16 }}>
        <ul>
          <li>
            <b>animaux:</b> {animaux.length} entrée(s)
          </li>
          <li>
            <b>categories:</b> {categories.length} entrée(s)
          </li>
          <li>
            <b>questions:</b> {questions.length} entrée(s)
          </li>
        </ul>

        <p style={{ marginTop: 12, color: "#3B3B3B" }}>
          Si les compteurs ne sont pas > 0, on ajustera le “normalize” selon la structure
          exacte de tes JSON.
        </p>
      </div>
    </main>
  );
}
