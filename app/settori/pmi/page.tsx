'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PMIMultiSedePage() {
  return (
    <div className="bg-white min-h-screen text-brand-dark selection:bg-brand-blue selection:text-white">
      
      <header className="relative pt-40 pb-20 md:pb-32 px-6 md:px-10 bg-brand-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="mb-12 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em]">
            <Link href="/" className="text-white/40 hover:text-brand-blue transition-colors">Home</Link>
            <span className="text-white/20">/</span>
            <span className="text-white/40">Settori</span>
            <span className="text-white/20">/</span>
            <span className="text-brand-blue">PMI Multi-Sede</span>
          </nav>

          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-brand-blue font-mono text-xs mb-6 block tracking-[0.4em] uppercase"
            >
              Connettività e Produttività
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[1.1] mb-8"
            >
              Infrastrutture IT per <br/>
              <span className="font-bold">Aziende Distribuite</span>
              <span className="text-brand-blue">.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl"
            >
              Abbattiamo le distanze fisiche tra uffici, filiali e stabilimenti produttivi creando un&apos;unica grande rete aziendale fluida, veloce e inattaccabile.
            </motion.p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-24 px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          <aside className="lg:col-span-4 space-y-12">
            <div className="p-10 bg-brand-light rounded-4xl border border-gray-100">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-blue mb-8">
                Metriche Operative
              </h3>
              <div className="space-y-8">
                <div>
                  <p className="text-4xl font-bold text-brand-dark mb-1">VPN</p>
                  <p className="text-xs uppercase tracking-widest text-brand-gray">Site-to-Site Sicure</p>
                </div>
                <hr className="border-gray-200" />
                <div>
                  <p className="text-4xl font-bold text-brand-dark mb-1">5 - 80</p>
                  <p className="text-xs uppercase tracking-widest text-brand-gray">Gestione Postazioni PC</p>
                </div>
                <hr className="border-gray-200" />
                <div>
                  <p className="text-4xl font-bold text-brand-dark mb-1">HA</p>
                  <p className="text-xs uppercase tracking-widest text-brand-gray">Alta Affidabilità</p>
                </div>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8 space-y-24">
            <section>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-brand-dark mb-8">
                La forza di un <span className="font-semibold text-brand-blue">IT centralizzato</span>.
              </h2>
              <div className="space-y-6 text-lg text-brand-gray font-light leading-relaxed">
                <p>
                  Quando un&apos;azienda cresce e apre nuove sedi, magazzini o uffici commerciali, la tecnologia può diventare il suo peggior collo di bottiglia. Documenti non sincronizzati, gestionale ERP irraggiungibile dalla sede B, e ticket di assistenza che si accumulano.
                </p>
                <p>
                  In HT Solution diventiamo il tuo vero reparto IT in outsourcing. Progettiamo l&apos;architettura per far comunicare tutte le tue sedi come se fossero nello stesso edificio, e ci occupiamo noi di risolvere ogni problema tecnico dei tuoi dipendenti in tempo reale.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-brand-blue mb-10">L&apos;Architettura Multi-Sede</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 rounded-4xlrder border-gray-100 hover:shadow-xl transition-shadow">
                  <h4 className="text-xl font-bold mb-4 text-brand-dark">Connessioni VPN</h4>
                  <p className="text-brand-gray font-light text-sm leading-relaxed">Creiamo tunnel crittografati tra gli uffici (VPN Site-to-Site) permettendo la condivisione istantanea e sicura dei database e delle risorse di rete aziendali.</p>
                </div>
                <div className="p-8 rounded-4xl border border-gray-100 hover:shadow-xl transition-shadow">
                  <h4 className="text-xl font-bold mb-4 text-brand-dark">Disaster Recovery</h4>
                  <p className="text-brand-gray font-light text-sm leading-relaxed">I tuoi dati vitali non risiedono in una sola macchina vulnerabile. Sincronizziamo i backup tra le diverse sedi per garantire un recupero dati immediato.</p>
                </div>
                <div className="p-8 rounded-4xl border border-gray-100 hover:shadow-xl transition-shadow">
                  <h4 className="text-xl font-bold mb-4 text-brand-dark">Gestione Parco Macchine</h4>
                  <p className="text-brand-gray font-light text-sm leading-relaxed">Forniamo, prepariamo e configuriamo l&apos;hardware per i nuovi dipendenti, gestendo centralmente licenze, policy di sicurezza e aggiornamenti.</p>
                </div>
                <div className="p-8 rounded-4xl border border-gray-100 hover:shadow-xl transition-shadow">
                  <h4 className="text-xl font-bold mb-4 text-brand-dark">Help Desk Proattivo</h4>
                  <p className="text-brand-gray font-light text-sm leading-relaxed">Tramite controllo remoto assistiamo i tuoi team ovunque si trovino, intervenendo prima ancora che un piccolo blocco diventi un problema sistemico.</p>
                </div>
              </div>
            </section>

            <section className="mt-12 p-12 bg-brand-light border border-gray-200 rounded-[3rem] text-center">
               <h3 className="text-3xl md:text-4xl text-brand-dark font-light mb-6">
                 Vuoi connettere le tue <span className="font-bold text-brand-blue">filiali</span>?
               </h3>
               <p className="text-brand-gray text-lg mb-10 font-light">
                 Richiedi un audit gratuito. Scopri come abbattere i costi di gestione frammentati centralizzando la tua rete aziendale.
               </p>
               <Link href="/#contact" className="inline-block px-10 py-5 bg-brand-blue text-white rounded-full font-bold uppercase text-xs tracking-[0.3em] hover:bg-brand-dark transition-all">
                 Richiedi Audit Infrastrutturale
               </Link>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}