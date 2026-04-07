import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Chi Siamo | HT Solution - Boutique Tecnologica IT",
  description: "Dal 2001, abilitiamo il potenziale tecnologico delle imprese attraverso infrastrutture solide, codice su misura e un team di specialisti verticali.",
  keywords: ["chi siamo HT solution", "team IT specializzato", "system integrator", "storia HT solution", "boutique tecnologica"],
};

export default function ChiSiamoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}