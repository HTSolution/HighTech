import Link from "next/link";

export default function HomeHero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center pt-28 pb-16 px-6 md:px-10 bg-white overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(circle at center, black, transparent 85%)",
          WebkitMaskImage: "radial-gradient(circle at center, black, transparent 85%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.5em] block mb-6 opacity-90">
          IT Infrastructure · Software · AI
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-brand-dark leading-[1.05] max-w-5xl">
          Infrastrutture IT sicure, software su misura e soluzioni IA.
        </h1>

        <p className="mt-8 text-base md:text-xl text-brand-gray max-w-4xl leading-relaxed">
          Supportiamo PA, PMI multi-sede e settore navale: reti, server, cloud,
          cybersecurity, applicazioni web e assistenza con SLA.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/consulenza"
            aria-label="Richiedi una consulenza"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-brand-dark text-white text-sm md:text-base font-semibold tracking-wide hover:bg-brand-blue transition-colors"
          >
            Richiedi una consulenza
          </Link>
          <Link
            href="/#services"
            aria-label="Scopri i servizi"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-brand-dark/20 text-brand-dark text-sm md:text-base font-semibold tracking-wide hover:border-brand-blue hover:text-brand-blue transition-colors"
          >
            Scopri i servizi
          </Link>
        </div>
      </div>
    </section>
  );
}
