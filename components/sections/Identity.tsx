'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: "Anni di Esperienza", value: "10+" },
  { label: "Progetti Completati", value: "150+" },
  { label: "Uptime Medio", value: "99.9%" },
  { label: "Clienti B2B", value: "40+" },
];

export default function Identity() {
  return (
    <section id="identity" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Parte Superiore: Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.4em]">Mission</span>
            <h2 className="text-3xl md:text-4xl font-light leading-tight text-brand-dark">
              Abilitiamo il potenziale tecnologico delle imprese attraverso <span className="font-semibold text-brand-blue">infrastrutture solide</span> e codice su misura.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:pt-20"
          >
            <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.4em]">Vision</span>
            <p className="text-xl text-brand-gray font-light leading-relaxed">
              Vogliamo essere il motore invisibile ma infallibile della trasformazione digitale, anticipando le sfide di un mercato in continua evoluzione per rendere ogni business tecnologicamente inarrestabile.
            </p>
          </motion.div>
        </div>

        {/* Parte Inferiore: I Numeri (Counter) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gray-200 pt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center lg:text-left">
              <p className="text-4xl md:text-5xl font-bold text-brand-dark mb-2">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-widest text-brand-gray font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}