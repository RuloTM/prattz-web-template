import "./globals.css";

export const metadata = {
  title: "Prattz Web Template",
  description: "Plantilla web para negocios locales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}