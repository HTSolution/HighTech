'use client';

import { SITE_CONFIG } from '@/constants';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen text-brand-dark pt-40 pb-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <nav className="mb-12">
          <Link href="/" className="text-brand-blue font-bold text-[10px] uppercase tracking-[0.4em]">
            ← Torna alla Home
          </Link>
        </nav>

        <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-12">
          Privacy <span className="font-bold">Policy</span><span className="text-brand-blue">.</span>
        </h1>

        <div className="prose prose-slate max-w-none space-y-8 text-brand-gray font-light leading-relaxed">
          <section>
            <h2 className="text-brand-dark font-semibold text-xl mb-4">1. Titolare del Trattamento</h2>
            <p>
              Il titolare del trattamento è <strong>{SITE_CONFIG.name}</strong>, con sede in {SITE_CONFIG.address}.
              Per qualsiasi richiesta relativa alla privacy, puoi contattarci all'indirizzo: <strong>{SITE_CONFIG.email}</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-brand-dark font-semibold text-xl mb-4">2. Dati Raccolti</h2>
            <p>
              Raccogliamo solo i dati necessari per fornirti i nostri servizi B2B, inclusi dati di contatto tramite il modulo di richiesta o email (nome, azienda, email, telefono).
            </p>
          </section>

          <section>
            <h2 className="text-brand-dark font-semibold text-xl mb-4">3. Finalità del Trattamento</h2>
            <p>
              I tuoi dati vengono utilizzati esclusivamente per rispondere alle tue richieste di consulenza, gestire i contratti di servizio e adempiere agli obblighi di legge.
            </p>
          </section>

          <p className="pt-10 text-[10px] uppercase tracking-widest opacity-50">
            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
          </p>
        </div>
      </div>
    </div>
  );
}