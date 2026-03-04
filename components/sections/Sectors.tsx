'use client';

import { motion } from 'framer-motion';
import { SECTORS } from '@/constants/services';

export default function Sectors() {
  return (
    <section className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">

        <div className="text-center mb-16">
          <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.4em] block mb-4">
            Ambiti di Intervento
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-brand-dark">
            Soluzioni per <span className="font-semibold text-brand-blue">Settori Critici</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SECTORS.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-lg shadow-brand-dark/5 border border-gray-100 hover:border-brand-blue/30 transition-colors"
            >
              <h3 className="text-2xl font-bold text-brand-dark mb-6 pb-4 border-b border-gray-100">
                {sector.title}
              </h3>
              <ul className="space-y-4">
                {sector.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-brand-gray">
                    <span className="text-brand-blue mr-3 mt-1">✓</span>
                    <span className="font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}