'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NavalePage() {
  return (
    <div className="bg-white min-h-screen text-brand-dark selection:bg-brand-blue selection:text-white">
      
      {/* --- HERO SECTION SCURA ED ELEGANTE --- */}
      <header className="relative pt-40 pb-20 md:pb-32 px-6 md:px-10 bg-brand-dark text-white overflow-hidden">
        {/* Effetto griglia tecnica in background */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[40px_40px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumbs */}
          <nav className="mb-12 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em]">
            <Link href="/" className="text-white/40 hover:text-brand-blue transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <span className="text-white/40">Settori</span>
            <span className="text-white/20">/</span>
            <span className="text-brand-blue">Navale & Marittimo</span>
          </nav>

          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-blue font-mono text-xs mb-6 block tracking-[0.4em] uppercase"
            >
              Infrastrutture Critiche
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[1.1] mb-8"
            >
              Sicurezza e Reti in <br/>
              <span className="font-bold text-white">Ambiente Navale</span>
              <span className="text-brand-blue">.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl"
            >
              Progettiamo e mettiamo in sicurezza reti di bordo, garantendo la segmentazione IT/OT e la piena conformità alla Direttiva NIS europea.
            </motion.p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-24 px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* --- SIDEBAR: METRICHE E PUNTI CHIAVE --- */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="p-10 bg-brand-light rounded-4xl border border-gray-100">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-blue mb-8">
                Highlight Navali
              </h3>
              <div className="space-y-8">
                <div>
                  <p className="text-4xl font-bold text-brand-dark mb-1">NIS2</p>
                  <p className="text-xs uppercase tracking-widest text-brand-gray">Compliance Totale</p>
                </div>
                <hr className="border-gray-200" />
                <div>
                  <p className="text-4xl font-bold text-brand-dark mb-1">IT / OT</p>
                  <p className="text-xs uppercase tracking-widest text-brand-gray">Segregazione Reti</p>
                </div>
                <hr className="border-gray-200" />
                <div>
                  <p className="text-4xl font-bold text-brand-dark mb-1">24/7</p>
                  <p className="text-xs uppercase tracking-widest text-brand-gray">Monitoraggio Asset</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-10 rounded-4xl">
                <h4 className="font-bold text-brand-dark mb-3">Cos&apos;è la Direttiva NIS?</h4>
                <p className="text-sm text-brand-gray leading-relaxed">
                  È la direttiva UE sulla cybersicurezza che classifica il settore marittimo come &quot;infrastruttura critica&quot;. Il mancato adeguamento comporta sanzioni fino a 10 Milioni di Euro o il 2% del fatturato globale.
                </p>
            </div>
          </aside>

          {/* --- CONTENUTO PRINCIPALE (SEO OPTIMIZED) --- */}
          <div className="lg:col-span-8 space-y-24">
            
            {/* Sezione 1: Il Problema */}
            <section>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-brand-dark mb-8">
                Il mare non è più un <span className="font-semibold">porto sicuro</span> per i dati.
              </h2>
              <div className="space-y-6 text-lg text-brand-gray font-light leading-relaxed">
                <p>
                  Fino a pochi anni fa, le reti a bordo delle navi operavano in totale isolamento. Oggi, le motonavi moderne sono &quot;data center galleggianti&quot;, costantemente connessi con la terraferma tramite sistemi satellitari e 5G.
                </p>
                <p>
                  Questa iper-connettività ha esposto il settore marittimo ad attacchi ransomware devastanti. Hackerare la rete di bordo oggi significa poter bloccare sistemi di navigazione, cargo management o apparati motore (sistemi OT). Per questo motivo, l&apos;Unione Europea ha imposto adeguamenti drastici tramite la <strong>Direttiva NIS</strong>.
                </p>
              </div>
            </section>

            {/* Sezione 2: La Soluzione (Cosa fate voi) */}
            <section>
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-blue mb-10">L&apos;Approccio HT Solution</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div className="p-8 rounded-4xl border border-gray-100 hover:shadow-xl transition-shadow bg-white">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6">
                    <span className="text-brand-blue font-bold">01</span>
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-brand-dark">Segregazione IT / OT</h4>
                  <p className="text-brand-gray font-light text-sm leading-relaxed">
                    Separazione fisica e logica (VLAN) tra la rete aziendale (IT) e la rete operativa che controlla i sistemi vitali della nave (OT). Se un computer dell&apos;equipaggio viene infettato, la nave continua a navigare al sicuro.
                  </p>
                </div>

                <div className="p-8 rounded-4xl border border-gray-100 hover:shadow-xl transition-shadow bg-white">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6">
                    <span className="text-brand-blue font-bold">02</span>
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-brand-dark">Asset & Vulnerability</h4>
                  <p className="text-brand-gray font-light text-sm leading-relaxed">
                    Mappatura completa di tutti i dispositivi connessi a bordo (IoT, sensori, radar). Installiamo firewall di ultima generazione per bloccare intrusioni e monitorare il traffico anomalo.
                  </p>
                </div>

                <div className="p-8 rounded-4xl border border-gray-100 hover:shadow-xl transition-shadow bg-white">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6">
                    <span className="text-brand-blue font-bold">03</span>
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-brand-dark">Continuità Operativa</h4>
                  <p className="text-brand-gray font-light text-sm leading-relaxed">
                    Creazione di cluster ad alta affidabilità (HA) a bordo. Se un server hardware si rompe a causa delle condizioni marine, i sistemi passano automaticamente al server di backup senza disservizi.
                  </p>
                </div>

                <div className="p-8 rounded-4xl border border-gray-100 hover:shadow-xl transition-shadow bg-white">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center mb-6">
                    <span className="text-brand-blue font-bold">04</span>
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-brand-dark">Audit & Compliance NIS</h4>
                  <p className="text-brand-gray font-light text-sm leading-relaxed">
                    Ti affianchiamo nel percorso burocratico e tecnico per dichiarare la conformità alla direttiva NIS, producendo reportistica dettagliata e protocolli di incident response.
                  </p>
                </div>

              </div>
            </section>

            {/* --- CALL TO ACTION B2B --- */}
            <section className="mt-12 p-12 bg-brand-dark rounded-[3rem] text-white text-center relative overflow-hidden">
               <div className="absolute top-[-50%] left-[-10%] w-96 h-96 bg-brand-blue/30 blur-[120px] rounded-full" />
               
               <div className="relative z-10 max-w-2xl mx-auto">
                  <h3 className="text-3xl md:text-4xl font-light mb-6">
                    Metti in sicurezza la tua <span className="font-bold">flotta</span>.
                  </h3>
                  <p className="text-gray-400 text-lg mb-10 font-light">
                    Prenota un assessment tecnico preliminare. Analizzeremo lo stato della tua infrastruttura di bordo e la distanza dalla compliance NIS.
                  </p>
                  <Link
                    href="/#contact"
                    className="inline-block px-10 py-5 bg-brand-blue text-white rounded-full font-bold uppercase text-xs tracking-[0.3em] hover:bg-white hover:text-brand-dark transition-all shadow-xl shadow-brand-blue/20"
                  >
                    Richiedi Assessment Navale
                  </Link>
               </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}