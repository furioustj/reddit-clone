import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reddish Sanity Admin Control Panel",
  description: "Reddish Sanity Admin Control Panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}