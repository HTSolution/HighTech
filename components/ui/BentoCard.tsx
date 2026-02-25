'use client';

import Link from 'next/link';

export default function BentoCard({ id, title, desc, slug, className = "" }: any) {
  const isMain = className.includes('lg:col-span-2');

  return (
    <Link href={`/services/${slug}`} scroll={false} className={`${className} block h-full`}>
      <div className="relative group h-full p-8 lg:p-12 rounded-[2.5rem] bg-white border border-gray-100 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-brand-blue/20">

        <div className="relative z-10 flex justify-between items-start">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-gray/60">{id}</span>
          <div className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-100 bg-white group-hover:bg-brand-blue group-hover:border-brand-blue transition-colors duration-300">
            <span className="text-brand-dark group-hover:text-white text-lg">↗</span>
          </div>
        </div>

        <div className="relative z-10 mt-auto">
          <h3 className={`font-light tracking-tighter text-brand-dark leading-[1.1] mb-4 ${
            isMain ? 'text-4xl lg:text-6xl' : 'text-2xl lg:text-3xl'
          }`}>
            {title.split(' ').map((word: string, i: number) => (
              <span key={i} className={i === 0 ? "font-semibold" : ""}>{word} </span>
            ))}
          </h3>
          <p className="text-brand-gray font-light text-sm md:text-base opacity-70 group-hover:opacity-100 transition-opacity">
            {desc}
          </p>
        </div>
      </div>
    </Link>
  );
}