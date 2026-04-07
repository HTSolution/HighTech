import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contatti | HT Solution",
  description: "Mettiti in contatto con HT Solution. Sede a Monte di Procida (NA), operiamo in tutta Italia per PMI, PA e settore navale.",
  keywords: ["contatti HT solution", "assistenza IT Napoli", "preventivo IT", "consulenza sistemistica"],
};

export default function ContattiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}