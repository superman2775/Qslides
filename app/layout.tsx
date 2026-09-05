import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qslides",
  description:
    "Qslides is a website to create presentations with quizes in it.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
