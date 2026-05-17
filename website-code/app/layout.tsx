import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QiQi Portfolio",
  description: "QiQi visual designer portfolio homepage.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
