import Link from "next/link";

export const metadata = {
  title: "Parliamo del tuo progetto | HT Solution",
  description:
    "Confronto iniziale su obiettivi, vincoli e roadmap per progetti IT e software.",
};

export default function ProgettoPage() {
  return (
    <main className="min-h-screen bg-brand-light text-brand-dark px-6 md:px-10 py-28">
      <section className="max-w-4xl mx-auto rounded-[2rem] bg-white border border-gray-100 p-8 md:p-10">
        <h1 className="text-3xl md:text-5xl font-light tracking-tight">
          Parliamo del tuo progetto
        </h1>
        <p className="mt-5 text-brand-gray leading-relaxed">
          Pagina in allestimento. Possiamo partire da un assessment tecnico e
          definire un piano di lavoro con priorita, rischi e milestone.
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
