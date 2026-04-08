import Link from "next/link";

export default function FinalCtaSection() {
  return (
    <section className="w-full px-6 md:px-10 py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto rounded-[2rem] bg-brand-dark text-white p-8 md:p-12">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight max-w-4xl">
          Portiamo ordine operativo in infrastruttura, sicurezza e sviluppo.
        </h2>
        <p className="mt-5 text-white/80 max-w-3xl text-sm md:text-base leading-relaxed">
          Se vuoi valutare il perimetro IT attuale o impostare un nuovo progetto,
          partiamo da obiettivi, vincoli e tempi reali.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/consulenza"
            aria-label="Richiedi una consulenza"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-blue text-white text-sm md:text-base font-semibold tracking-wide hover:bg-white hover:text-brand-dark transition-colors"
          >
            Richiedi una consulenza
          </Link>
          <Link
            href="/progetto"
            aria-label="Parliamo del tuo progetto"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 text-white text-sm md:text-base font-semibold tracking-wide hover:border-white hover:bg-white hover:text-brand-dark transition-colors"
          >
            Parliamo del tuo progetto
          </Link>
        </div>
      </div>
    </section>
  );
}
