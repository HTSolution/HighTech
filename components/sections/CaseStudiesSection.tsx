const CASE_STUDIES = [
  {
    sector: "PMI multi-sede",
    problem: "Ticket connettivita' e Wi-Fi instabile.",
    intervention: "Survey, VLAN, VPN site-to-site e monitoraggio proattivo.",
    result: "-40% ticket in 60 giorni.",
  },
  {
    sector: "Ente pubblico",
    problem: "Device non governati e onboarding lento.",
    intervention: "Intune + policy endpoint + MFA su accessi critici.",
    result: "Onboarding nuovi PC in meno di 30 minuti.",
  },
  {
    sector: "Motonave",
    problem: "Asset IT/IoT non mappati e rischio non misurabile.",
    intervention: "Inventario asset, segmentazione e hardening perimetrale.",
    result: "Riduzione superficie d'attacco e audit readiness.",
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="w-full px-6 md:px-10 py-20 md:py-28 bg-brand-light">
      <div className="max-w-7xl mx-auto">
        <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.5em] block mb-4 opacity-90">
          Case study
        </span>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-brand-dark max-w-4xl">
          Tre interventi tipo: problema, esecuzione, risultato misurabile.
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((item) => (
            <article
              key={item.sector}
              className="rounded-[2rem] bg-white border border-gray-100 p-7 shadow-sm"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-brand-blue font-semibold">
                {item.sector}
              </p>
              <div className="mt-5 space-y-4 text-sm leading-relaxed">
                <p>
                  <strong className="text-brand-dark">Problema:</strong>{" "}
                  <span className="text-brand-gray">{item.problem}</span>
                </p>
                <p>
                  <strong className="text-brand-dark">Intervento:</strong>{" "}
                  <span className="text-brand-gray">{item.intervention}</span>
                </p>
                <p>
                  <strong className="text-brand-dark">Risultato:</strong>{" "}
                  <span className="text-brand-dark">{item.result}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
