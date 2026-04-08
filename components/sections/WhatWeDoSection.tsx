import ServiceDeliverableCard from "@/components/ui/ServiceDeliverableCard";

const WHAT_WE_DO = [
  {
    title: "Reti & Sicurezza",
    description: "Dal cablaggio alle VLAN, VPN e hardening.",
    deliverables: [
      "Segmentazione VLAN / IT-OT",
      "VPN site-to-site",
      "Firewall & policy",
    ] as [string, string, string],
  },
  {
    title: "Server & Servizi",
    description: "Web, posta Postfix, database MySQL e gestione.",
    deliverables: ["Server web", "Postfix", "MySQL tuning"] as [
      string,
      string,
      string,
    ],
  },
  {
    title: "Virtualizzazione",
    description: "Proxmox / ESXi e ambienti affidabili.",
    deliverables: ["Hypervisor", "Backup VM", "Capacity planning"] as [
      string,
      string,
      string,
    ],
  },
  {
    title: "Alta Affidabilità",
    description: "Cluster e continuità operativa.",
    deliverables: ["HA", "Cluster geografici", "Piani DR"] as [
      string,
      string,
      string,
    ],
  },
  {
    title: "Modern Workplace",
    description: "Microsoft 365 con Intune.",
    deliverables: ["Tenant governance", "MFA & compliance", "Device management"] as [
      string,
      string,
      string,
    ],
  },
  {
    title: "Sviluppo Web",
    description: "Backend + frontend per applicazioni e portali.",
    deliverables: ["API", "Dashboard", "Integrazioni"] as [
      string,
      string,
      string,
    ],
  },
  {
    title: "Siti Web",
    description: "Siti aziendali veloci e gestibili.",
    deliverables: ["SEO base", "Performance", "CMS se presente"] as [
      string,
      string,
      string,
    ],
  },
  {
    title: "Agenti IA",
    description: "Automazione e assistenza intelligente.",
    deliverables: ["Workflow", "Chat/agent", "Integrazione dati"] as [
      string,
      string,
      string,
    ],
  },
];

export default function WhatWeDoSection() {
  return (
    <section id="services" className="w-full px-6 md:px-10 py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto">
        <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.5em] block mb-4 opacity-90">
          Cosa facciamo
        </span>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-brand-dark max-w-4xl">
          Servizi tecnici concreti, dalla rete al software, con responsabilita operativa end-to-end.
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
          {WHAT_WE_DO.map((service) => (
            <ServiceDeliverableCard
              key={service.title}
              title={service.title}
              description={service.description}
              deliverables={service.deliverables}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
