import type { Metadata } from "next";
import {
  Bodoni_Moda,
  Cinzel,
  Cormorant_Garamond,
  Italiana,
  Lora,
  Manrope,
  Playfair_Display,
  Raleway,
  Sora,
} from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-sora",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-playfair",
  display: "swap",
});

const italiana = Italiana({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-italiana",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-cinzel",
  display: "swap",
});

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-bodoni",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-lora",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Sapphire Tampa — Modern Luxury Lounge",
  description: "Where modern luxury meets unforgettable entertainment. Tampa's newest gem for nights with presence. 21+",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} ${sora.variable} ${playfair.variable} ${italiana.variable} ${cinzel.variable} ${bodoniModa.variable} ${lora.variable} ${raleway.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
