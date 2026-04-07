import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import OverlayNav from "@/components/layout/OverlayNav";
import ContactFooter from "@/components/layout/ContactFooter";
import { LanguageProvider } from '@/context/LanguageContext';

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HT Solution",
  description: "High Tech - Soluzione Informatica - Sviluppo Software - Consulenza IT",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className={montserrat.className}>
        <LanguageProvider>
          <OverlayNav />
            {children}
          <ContactFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}