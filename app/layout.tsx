import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QiQi Portfolio",
  description: "Visual Designer portfolio for AI-driven creativity, game publishing visuals, e-commerce campaigns, and brand systems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
