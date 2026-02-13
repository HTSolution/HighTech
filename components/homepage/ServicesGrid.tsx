'use client';

import { SERVICES } from '@/constants';
import BentoCard from '../BentoCard';

export default function ServicesGrid() {
  return (
    <section
      id="services"
      // Sfondo brand-light (#F9F9F9)
      className="min-h-screen w-full px-4 md:px-10 py-24 md:py-32 max-w-[1600px] mx-auto bg-brand-light flex flex-col"
    >
      {/* Intestazione aggiunta */}
      <div className="mb-16 border-b border-brand-dark/10 pb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-dark tracking-tight">
          I Nostri Servizi<span className="text-brand-blue">.</span>
        </h2>
        <p className="text-brand-gray mt-2 font-medium">Soluzioni tecnologiche su misura</p>
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
              className={`${gridClass} min-h-[300px] md:min-h-0`}
            />
          );
        })}
      </div>
    </section>
  );
}