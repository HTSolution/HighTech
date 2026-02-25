'use client';

import { motion } from 'framer-motion';
import { SERVICES, SERVICES_CONTENT } from '@/constants';
import BentoCard from '@/components/ui/BentoCard';

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="relative min-h-screen w-full px-6 md:px-10 py-24 md:py-32 bg-white overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #f1f5f9 1px, transparent 1px),
            linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle at center, black, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 90%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col">

        <div className="mb-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.5em] block mb-4 opacity-80">
              {SERVICES_CONTENT.philosophy.tag}
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] tracking-tight text-brand-dark">
              “{SERVICES_CONTENT.philosophy.quote.split('soluzioni visionarie')[0]}
              <span className="text-brand-blue font-medium italic">soluzioni visionarie</span>
              {SERVICES_CONTENT.philosophy.quote.split('soluzioni visionarie')[1]}
              <span className="text-brand-blue">.</span>”
            </h3>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-brand-dark">
            {SERVICES_CONTENT.header.title} <span className="font-semibold">{SERVICES_CONTENT.header.subtitle}</span>
            <span className="text-brand-blue">.</span>
          </h2>
          <p className="text-brand-gray mt-4 font-light text-lg md:text-xl tracking-wide uppercase opacity-70">
            {SERVICES_CONTENT.header.claim}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:grid-rows-6 lg:grid-rows-2 gap-4 md:gap-6 w-full auto-rows-fr">
          {SERVICES.slice(0, 5).map((s, i) => {
            let gridClass = "";
            if (i === 0 || i === 1) {
              gridClass = i === 0
                ? "md:col-span-1 md:row-span-3 lg:col-span-2 lg:row-span-2"
                : "md:col-span-1 md:row-span-3 lg:col-span-1 lg:row-span-1";
            } else {
              gridClass = "md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-1";
            }

            return (
              <BentoCard
                key={s.id}
                id={s.id}
                title={s.title}
                desc={s.desc}
                slug={s.slug}
                className={`${gridClass} min-h-[300px] md:min-h-0 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-blue/5`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}