import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spring-Ford Luxury Rides | Black & Gold Chauffeur Service",
  description: "The obsidian black standard of executive travel — liquid gold luxury meets uncompromised precision. Long Island's premier chauffeur service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${manrope.variable} font-sans bg-background text-foreground selection:bg-gold/30 selection:text-gold antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
