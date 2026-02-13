import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Usiamo Montserrat come nel tuo CSS
import "./globals.css";
import OverlayNav from "@/components/OverlayNav";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HT Solution",
  description: "Creato con Next.js e Tailwind v4",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className={montserrat.className}>
        <OverlayNav />
        {children}
      </body>
    </html>
  );
}