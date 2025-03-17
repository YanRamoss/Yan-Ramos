import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yan Ramos - Desenvolvimento e Manutenção",
  description: "Servidor back-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
