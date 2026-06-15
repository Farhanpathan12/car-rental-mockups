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
  title: "Wheels Four Rent | Premium Luxury & Self-Drive Car Rental Hyderabad",
  description: "Hyderabad's ultimate luxury car rental service. Self-drive G-Wagon, Lamborghini, Rolls-Royce, and premium fleets for weddings, shoots, and corporate entries.",
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
