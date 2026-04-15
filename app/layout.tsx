import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import OverlayNav from "@/components/layout/OverlayNav";
import ContactFooter from "@/components/layout/ContactFooter";
import { LanguageProvider } from '@/context/LanguageContext';
import { ChatProvider } from '@/context/ChatContext';
import SmartFAB from "@/components/layout/SmartFAB";
import CookieBanner from '@/components/layout/CookieBanner';

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['300', '400', '600', '700', '900'], // Light, Regular, SemiBold, Bold, Black
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "HT Solution | Infrastrutture IT e Software su Misura",
    template: "%s | HT Solution"
  },
  description: "Boutique tecnologica specializzata in cybersecurity, networking, infrastrutture critiche e sviluppo software AI-driven.",
  metadataBase: new URL('https://www.htsolution.it'),
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },

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
          <ChatProvider>

          <OverlayNav />
          <main className="min-h-screen flex flex-col">
            {children}
          </main>
          <SmartFAB />
          <CookieBanner />
          <ContactFooter />
          </ChatProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}