import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sicurezza Reti Navali e Compliance NIS2 | HT Solution",
  description: "Specialisti in infrastrutture critiche per il settore marittimo. Progettazione reti di bordo, segregazione IT/OT e adeguamento alla Direttiva NIS.",
  keywords: ["sicurezza navale", "direttiva NIS2", "reti di bordo", "IT/OT navale", "cybersecurity marittima"],
  openGraph: {
    title: "Sicurezza Reti Navali e Compliance NIS2",
    description: "HT Solution: Infrastrutture critiche e cybersecurity per il settore marittimo.",
    url: 'https://www.htsolution.it/settori/navale',
    siteName: 'HT Solution',
    locale: 'it_IT',
    type: 'website',
  },
};
export default function NavaleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}