'use client';

import { SERVICES } from '@/constants';
import BentoCard from '../BentoCard';

export default function ServicesGrid() {
  return (
    <section
      id="services"
      className="h-screen w-full px-6 md:px-10 py-10 max-w-[1600px] mx-auto bg-white flex flex-col"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full w-full">
        {SERVICES.slice(0, 5).map((s, i) => {
          // Logica per il layout Bento:
          // Il primo elemento occupa 2 col e 2 righe (metà dello schermo a sinistra)
          // Gli altri si dispongono nelle restanti celle
          const isLarge = i === 0;
          const gridClass = isLarge
            ? "md:col-span-2 md:row-span-2 h-full"
            : "md:col-span-1 md:row-span-1 h-full";

          return (
            <BentoCard
              key={s.id}
              id={s.id}
              title={s.title}
              desc={s.desc}
              slug={s.slug}
              className={gridClass}
            />
          );
        })}
      </div>
    </section>
  );
}