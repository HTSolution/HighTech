import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Infrastrutture IT e Reti per PMI Multi-Sede | HT Solution",
  description: "Soluzioni tecnologiche scalabili per PMI con più filiali. VPN site-to-site, Cluster HA, Backup DR centralizzati e Help Desk dedicato per l'intero parco macchine.",
  keywords: ["IT per PMI", "VPN aziendale multi sede", "reti interconnesse filiali", "Help Desk PMI", "infrastruttura IT scalabile"],
};

export default function PMILayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}