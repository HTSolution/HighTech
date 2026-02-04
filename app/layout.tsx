import type { Metadata } from "next";
import { Inter } from "next/font/google"; // O il font che c'è di default
import "./globals.css";

// 1. IMPORTA LA NAVBAR
import Navbar from "@/components/Navbar"; 
import OverlayNav from "@/components/OverlayNav"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Il Mio Sito Animato",
  description: "Creato con Next.js e Tailwind v4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className={inter.className}>
        <Navbar /> {/* Navbar fissa sopra a tutto */}
        {/*<OverlayNav /> QUESTA è TIPO BURGER MENU*/}
        {children} {/* Qui dentro c'è il HorizontalWrapper che scorre */}
      </body>
    </html>
  );
}