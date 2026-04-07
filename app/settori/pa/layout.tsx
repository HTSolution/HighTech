import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Infrastrutture IT e Sicurezza per la Pubblica Amministrazione | HT Solution",
  description: "Affianchiamo le PA nella transizione digitale. Gestione tenant Microsoft 365, sicurezza endpoint con Intune, continuità operativa e compliance normativa.",
  keywords: ["IT pubblica amministrazione", "transizione digitale PA", "sicurezza dati PA", "gestione Microsoft 365 PA", "compliance normativa IT"],
};

export default function PALayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}