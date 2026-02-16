import type { Metadata } from "next";
import { Exo_2, Inter } from "next/font/google";

import "./globals.css";

const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ArcheAge Classic Tools",
  description: "Community tools for ArcheAge Classic private servers — trade pack prices, calculators, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${exo2.variable} ${inter.variable} antialiased min-h-screen flex flex-col`}>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
