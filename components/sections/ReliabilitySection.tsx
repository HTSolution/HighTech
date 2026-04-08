import Link from "next/link";

const RELIABILITY_POINTS = [
  {
    title: "Cluster geografici",
    text: "Progettiamo architetture ridondate su sedi diverse per limitare il single point of failure.",
  },
  {
    title: "Backup e Disaster Recovery",
    text: "Definiamo policy, retention e test periodici di restore per ridurre RTO e RPO.",
  },
  {
    title: "Continuita' operativa",
    text: "Monitoraggio, runbook e piani di escalation per mantenere i servizi disponibili anche durante incidenti.",
  },
];

export default function ReliabilitySection() {
  return (
    <section id="reliability" className="w-full px-6 md:px-10 py-20 md:py-28 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto">
        <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.5em] block mb-4 opacity-90">
          Alta Affidabilita
        </span>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight max-w-4xl">
          Disponibilita dei servizi, anche in scenari critici.
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {RELIABILITY_POINTS.map((point) => (
            <article
              key={point.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-xl font-semibold tracking-tight">{point.title}</h3>
              <p className="mt-3 text-sm text-white/80 leading-relaxed">{point.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/consulenza"
            aria-label="Richiedi una consulenza per alta affidabilita"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-blue text-white text-sm md:text-base font-semibold tracking-wide hover:bg-white hover:text-brand-dark transition-colors"
          >
            Richiedi una consulenza
          </Link>
        </div>
      </div>
    </section>
  );
}
