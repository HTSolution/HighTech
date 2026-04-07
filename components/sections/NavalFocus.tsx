/*'use client';

import { motion } from 'framer-motion';
import Link from 'next/link'; // Importiamo Link per la navigazione

const navalFeatures = [
  "Progettazione reti di bordo",
  "Segmentazione VLAN e isolamento IoT",
  "Hardening dei sistemi IT",
  "Analisi del rischio",
  "Adeguamento Direttiva NIS",
  "Monitoraggio centralizzato",
  "Continuità operativa in mare"
];

export default function NavalFocus() {
  return (
    <section id="naval" className="py-24 md:py-32 bg-brand-dark text-white relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.4em] block mb-4">
            Specializzazione Rara
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
            Sicurezza e reti in <br/>
            <span className="font-bold text-brand-blue">ambienti navali</span>
          </h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed mb-8">
            Siamo tra le poche realtà IT specializzate nella gestione di infrastrutture critiche su motonavi. Dalla segmentazione fisica e logica delle reti IT/OT, fino al rigoroso adeguamento normativo per la compliance NIS.
          </p>

          <Link 
            href="/settori/navale" 
            className="inline-block px-8 py-4 bg-brand-blue text-white rounded-full font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-lg shadow-brand-blue/20 hover:shadow-xl hover:-translate-y-1"
          >
            Scopri la Compliance NIS
          </Link>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {navalFeatures.map((feature, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="text-brand-blue mb-3 font-mono text-sm opacity-70">0{i+1}</div>
              <p className="font-medium text-sm md:text-base">{feature}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}*/