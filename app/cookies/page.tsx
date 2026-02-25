'use client';

import Link from 'next/link';

export default function CookiesPage() {
  return (
    <div className="bg-white min-h-screen text-brand-dark pt-40 pb-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-12">
          <Link href="/" className="text-brand-blue font-bold text-[10px] uppercase tracking-[0.4em]">
            ← Torna alla Home
          </Link>
        </nav>

        <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-12">
          Cookie <span className="font-bold">Policy</span><span className="text-brand-blue">.</span>
        </h1>

        <div className="prose prose-slate max-w-none space-y-8 text-brand-gray font-light leading-relaxed">
          <section>
            <h2 className="text-brand-dark font-semibold text-xl mb-4">Cosa sono i cookie?</h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva.
            </p>
          </section>

          <section>
            <h2 className="text-brand-dark font-semibold text-xl mb-4">Cookie Tecnici</h2>
            <p>
              Il nostro sito utilizza esclusivamente cookie tecnici necessari per il corretto funzionamento della navigazione e per ricordare le tue preferenze (come la lingua).
            </p>
          </section>

          <section>
            <h2 className="text-brand-dark font-semibold text-xl mb-4">Cookie di Terze Parti</h2>
            <p>
              Potremmo utilizzare servizi di analisi (come Google Analytics con IP anonimizzato) per capire come gli utenti utilizzano il sito e migliorarne l'esperienza.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}