export const metadata = {
  title: "L'Observatoire de la Stupidité",
  description: "Institution d'observation des comportements absurdes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
