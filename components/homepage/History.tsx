'use client';

import { HISTORY } from '@/constants';
import { motion } from 'framer-motion';

export default function History() {
  return (
    <section
      id="about"
      // Sfondo brand-light (#F9F9F9) e padding adattivo per il resize
      className="py-24 md:py-32 px-6 md:px-20 bg-brand-light border-b border-brand-dark/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Intestazione coerente con il resto del sito */}
        <div className="mb-16 border-b border-brand-dark/10 pb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">
            Evoluzione Continua<span className="text-brand-blue">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {HISTORY.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              // Bordo sinistro usando il brand-blue per la timeline
              className="border-l-2 border-brand-blue/30 pl-6 py-2 group hover:border-brand-blue transition-colors duration-500"
            >
              {/* L'anno ora usa il brand-blue */}
              <span className="text-3xl font-bold block mb-2 text-brand-blue/40 group-hover:text-brand-blue transition-colors">
                {h.year}
              </span>

              {/* Titolo in brand-dark */}
              <h4 className="text-xl font-bold mb-2 text-brand-dark">
                {h.title}
              </h4>

              {/* Descrizione in brand-gray */}
              <p className="text-sm md:text-base text-brand-gray leading-relaxed">
                {h.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}