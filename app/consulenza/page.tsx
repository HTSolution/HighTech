import Link from "next/link";

export const metadata = {
  title: "Richiedi una consulenza | HT Solution",
  description:
    "Prenota una consulenza tecnica su infrastruttura, sicurezza, software e AI Agents.",
};

export default function ConsulenzaPage() {
  return (
    <main className="min-h-screen bg-brand-light text-brand-dark px-6 md:px-10 py-28">
      <section className="max-w-4xl mx-auto rounded-[2rem] bg-white border border-gray-100 p-8 md:p-10">
        <h1 className="text-3xl md:text-5xl font-light tracking-tight">
          Richiedi una consulenza
        </h1>
        <p className="mt-5 text-brand-gray leading-relaxed">
          Pagina in allestimento. Contattaci per una valutazione tecnica iniziale
          su rete, sistemi, cybersecurity, M365 e sviluppo software.
        </p>
        <Link
          href="/"
          className="inline-flex mt-8 px-5 py-3 rounded-full bg-brand-dark text-white text-sm font-semibold hover:bg-brand-blue transition-colors"
        >
          Torna alla Home
        </Link>
      </section>
    </main>
  );
}
