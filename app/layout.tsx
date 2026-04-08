import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import OverlayNav from "@/components/layout/OverlayNav";
import ContactFooter from "@/components/layout/ContactFooter";
import { LanguageProvider } from '@/context/LanguageContext';

// Ottimizzazione font: carichiamo solo quello che serve
const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['300', '400', '600', '700', '900'], // Light, Regular, SemiBold, Bold, Black
  display: 'swap', // Migliora il tempo di caricamento del testo (Lighthouse performance)
});

export const metadata: Metadata = {
  title: {
    default: "HT Solution | Infrastrutture IT e Software su Misura",
    template: "%s | HT Solution" // Permette alle pagine interne di aggiungere il loro titolo (es: "Navale | HT Solution")
  },
  description: "Boutique tecnologica specializzata in cybersecurity, networking, infrastrutture critiche e sviluppo software AI-driven.",
  metadataBase: new URL('https://www.htsolution.it'),
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  // Open Graph per anteprime social (LinkedIn/WA)
  openGraph: {
    title: "HT Solution | Boutique Tecnologica",
    description: "Infrastrutture IT, Software e Cybersecurity.",
    type: "website",
    locale: "it_IT",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={`${montserrat.className} antialiased selection:bg-brand-blue selection:text-white`}>
        <LanguageProvider>
          <OverlayNav />
          <main className="min-h-screen flex flex-col">
            {children}
          </main>
          <ContactFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}