import "./globals.css";

// Métadonnées globales du site : titre de l'onglet, description pour les moteurs de recherche
export const metadata = {
  title: "L'Observatoire de la Stupidité",
  description:
    "Une expérience humoristique et pseudo-scientifique d'observation des comportements absurdes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
