'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PubblicaAmministrazionePage() {
  return (
    <div className="bg-white min-h-screen text-brand-dark selection:bg-brand-blue selection:text-white">
      
      <header className="relative pt-40 pb-20 md:pb-32 px-6 md:px-10 bg-brand-light overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="mb-12 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em]">
            <Link href="/" className="text-brand-gray/40 hover:text-brand-blue transition-colors">Home</Link>
            <span className="text-brand-gray/20">/</span>
            <span className="text-brand-gray/40">Settori</span>
            <span className="text-brand-gray/20">/</span>
            <span className="text-brand-blue">Pubblica Amministrazione</span>
          </nav>

          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-blue font-mono text-xs mb-6 block tracking-[0.4em] uppercase"
            >
              Transizione Digitale
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[1.1] mb-8 text-brand-dark"
            >
              Modernizzazione e <br/>
              <span className="font-bold text-brand-blue">Sicurezza per la PA</span>
              <span className="text-brand-dark">.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-brand-gray font-light leading-relaxed max-w-2xl"
            >
              Affianchiamo gli enti locali e le amministrazioni nel percorso verso il cloud, garantendo massima protezione dei dati sensibili e piena conformità normativa.
            </motion.p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-24 px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          <aside className="lg:col-span-4 space-y-12">
            <div className="p-10 bg-white shadow-xl shadow-brand-dark/5 rounded-4xl border border-gray-100">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-blue mb-8">
                Punti di Forza
              </h3>
              <div className="space-y-8">
                <div>
                  <p className="text-3xl font-bold text-brand-dark mb-1">M365</p>
                  <p className="text-xs uppercase tracking-widest text-brand-gray">Tenant Governance</p>
                </div>
                <hr className="border-gray-100" />
                <div>
                  <p className="text-3xl font-bold text-brand-dark mb-1">Zero Trust</p>
                  <p className="text-xs uppercase tracking-widest text-brand-gray">Sicurezza Endpoint</p>
                </div>
                <hr className="border-gray-100" />
                <div>
                  <p className="text-3xl font-bold text-brand-dark mb-1">AgID / GDPR</p>
                  <p className="text-xs uppercase tracking-widest text-brand-gray">Compliance Normativa</p>
                </div>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-24">
            <section>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-brand-dark mb-8">
                L&apos;innovazione senza <span className="font-semibold text-brand-blue">compromessi</span>.
              </h2>
              <div className="space-y-6 text-lg text-brand-gray font-light leading-relaxed">
                <p>
                  Le Pubbliche Amministrazioni gestiscono quotidianamente enormi moli di dati sensibili dei cittadini. Tuttavia, molte infrastrutture IT pubbliche sono ancora ancorate a sistemi legacy obsoleti, difficili da mantenere e vulnerabili agli attacchi informatici.
                </p>
                <p>
                  Il nostro obiettivo è portare la PA nel futuro attraverso un approccio <strong>Modern Workplace</strong> strutturato. Dal consolidamento dei server locali in cluster ad alta affidabilità, fino alla migrazione sicura verso ecosistemi cloud come Microsoft 365, garantendo l&apos;operatività ininterrotta dei servizi al cittadino.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-blue mb-10">I Nostri Interventi per la PA</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-4xl border border-gray-100 bg-gray-50/50">
                  <h4 className="text-xl font-bold mb-4 text-brand-dark">Gestione Tenant M365</h4>
                  <p className="text-brand-gray font-light text-sm leading-relaxed">Configurazione, migrazione e governance completa dell&apos;ecosistema Microsoft 365 per facilitare la collaborazione sicura tra uffici e dipartimenti.</p>
                </div>
                <div className="p-8 rounded-[2rem] border border-gray-100 bg-gray-50/50">
                  <h4 className="text-xl font-bold mb-4 text-brand-dark">Sicurezza Endpoint (Intune)</h4>
                  <p className="text-brand-gray font-light text-sm leading-relaxed">Gestione centralizzata di tutti i PC e dispositivi mobili dell&apos;ente. Impostiamo policy stringenti per impedire la fuga di dati o accessi non autorizzati.</p>
                </div>
                <div className="p-8 rounded-4xlrder border-gray-100 bg-gray-50/50">
                  <h4 className="text-xl font-bold mb-4 text-brand-dark">Business Continuity</h4>
                  <p className="text-brand-gray font-light text-sm leading-relaxed">I servizi pubblici non possono fermarsi. Progettiamo sistemi di Disaster Recovery per ripristinare i dati istantaneamente in caso di guasti o ransomware.</p>
                </div>
                <div className="p-8 rounded-4xl border border-gray-100 bg-gray-50/50">
                  <h4 className="text-xl font-bold mb-4 text-brand-dark">Supporto Operativo</h4>
                  <p className="text-brand-gray font-light text-sm leading-relaxed">Un Help Desk dedicato pronto a risolvere i problemi quotidiani degli operatori pubblici, riducendo i tempi di attesa e aumentando la produttività.</p>
                </div>
              </div>
            </section>

            <section className="mt-12 p-12 bg-brand-dark rounded-[3rem] text-white text-center">
               <h3 className="text-3xl md:text-4xl font-light mb-6">
                 Pronto a digitalizzare il tuo <span className="font-bold">Ente</span>?
               </h3>
               <p className="text-gray-400 text-lg mb-10 font-light">
                 Contattaci per valutare le soluzioni IT migliori nel rispetto dei requisiti AgID e delle normative sulla privacy.
               </p>
               <Link href="/#contact" className="inline-block px-10 py-5 bg-brand-blue text-white rounded-full font-bold uppercase text-xs tracking-[0.3em] hover:bg-white hover:text-brand-dark transition-all">
                 Parla con un Esperto
               </Link>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}