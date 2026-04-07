import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sicurezza Reti Navali e Compliance NIS2 | HT Solution",
  description: "Specialisti in infrastrutture critiche per il settore marittimo. Progettazione reti di bordo, segregazione IT/OT e adeguamento alla Direttiva NIS.",
  keywords: ["sicurezza navale", "direttiva NIS2", "reti di bordo", "IT/OT navale", "cybersecurity marittima"],
};

export default function NavaleLayout({ children }: { children: React.ReactNode }) {
  // Il layout si limita a renderizzare la pagina, ma inietta i metadati nel server!
  return <>{children}</>;
}