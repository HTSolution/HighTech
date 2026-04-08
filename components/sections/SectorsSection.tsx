const SECTORS = [
  {
    title: "Pubblica Amministrazione",
    problems: [
      "Gestione M365, endpoint e policy su utenti distribuiti.",
      "Continuita' operativa e procedure di ripristino verificabili.",
      "Compliance, MFA e riduzione del rischio su account critici.",
    ],
  },
  {
    title: "PMI multi-sede",
    problems: [
      "Connettivita' instabile tra sedi e risorse condivise.",
      "Help Desk con tempi lunghi e priorita' non governate.",
      "Sicurezza perimetrale e interna non uniforme.",
    ],
  },
  {
    title: "Settore Navale",
    problems: [
      "Reti di bordo eterogenee tra sistemi IT e apparati IoT.",
      "Segmentazione IT/IoT insufficiente e superfici di attacco elevate.",
      "Adeguamento NIS e audit readiness su asset critici.",
    ],
  },
];

export default function SectorsSection() {
  return (
    <section id="sectors" className="w-full px-6 md:px-10 py-20 md:py-28 bg-brand-light">
      <div className="max-w-7xl mx-auto">
        <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.5em] block mb-4 opacity-90">
          Settori
        </span>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-brand-dark max-w-4xl">
          Interveniamo dove l&apos;IT deve funzionare ogni giorno, anche in
          contesti distribuiti e critici.
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SECTORS.map((sector) => (
            <article
              key={sector.title}
              className="rounded-[2rem] bg-white border border-gray-100 p-7 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-brand-dark">
                {sector.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-brand-dark" aria-label={`Problemi risolti ${sector.title}`}>
                {sector.problems.map((problem) => (
                  <li key={problem} className="flex gap-2 items-start">
                    <span aria-hidden="true" className="text-brand-blue font-bold mt-[1px]">
                      •
                    </span>
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
