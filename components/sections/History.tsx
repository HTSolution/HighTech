'use client';

import { HISTORY, HISTORY_CONTENT } from '@/constants';
import { motion } from 'framer-motion';

export default function History() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-10 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-blue text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
          >
            {HISTORY_CONTENT.tag}
          </motion.p>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-brand-dark">
            {HISTORY_CONTENT.title.light} <span className="font-semibold">{HISTORY_CONTENT.title.bold}</span>
            <span className="text-brand-blue">.</span>
          </h2>
          <p className="text-brand-gray mt-4 font-light text-lg md:text-xl tracking-wide max-w-2xl leading-relaxed">
            {HISTORY_CONTENT.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {HISTORY.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 rounded-3xl border border-transparent hover:border-gray-100 hover:bg-brand-light/50 transition-all duration-500 group"
            >
              <span className="text-xs font-black block mb-4 text-brand-blue tracking-[0.2em] uppercase">
                {h.year}
              </span>

              <h4 className="text-xl font-semibold mb-3 text-brand-dark tracking-tight">
                {h.title}
              </h4>

              <p className="text-sm md:text-base text-brand-gray font-light leading-relaxed opacity-80">
                {h.desc}
              </p>

              <div className="absolute top-0 left-6 w-8 h-[2px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}