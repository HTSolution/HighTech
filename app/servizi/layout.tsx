import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "I Nostri Servizi IT | HT Solution",
  description: "Dall&apos;infrastruttura di rete allo sviluppo software su misura. Scopri tutti i servizi tecnologici di HT Solution per PMI, PA e settore navale.",
  keywords: ["servizi IT", "infrastrutture di rete", "sviluppo software", "cybersecurity B2B", "assistenza IT"],
};

export default function ServiziLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}