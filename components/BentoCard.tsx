'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BentoCard({ id, title, desc, slug, className = "" }: any) {
  const isMain = className.includes('lg:col-span-2');

  return (
    <Link href={`/servizi/${slug}`} className={`${className} block h-full`}>
      <motion.div
        className="relative group h-full p-6 lg:p-10 rounded-[2rem] bg-white border border-gray-100 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:shadow-2xl"
      >
        {/* BACKGROUND HOVER: Diventa Blu Scuro (#0C283B) invece di Nero */}
        <div className="absolute inset-0 bg-brand-dark translate-y-full lg:group-hover:translate-y-0 transition-transform duration-500 ease-in-out hidden lg:block" />

        <div className="relative z-10 flex justify-between items-start">
          <span className="font-mono text-xs text-brand-gray lg:group-hover:text-gray-400 transition-colors">
            / {id}
          </span>
          {/* Cerchio icona: brand-blue (#3884C5) */}
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-blue lg:group-hover:bg-brand-light transition-all duration-300">
            <span className="text-white lg:group-hover:text-brand-blue font-bold">↗</span>
          </div>
        </div>

        <div className="relative z-10 mt-8 md:mt-auto">
          <div className="transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500">
            {/* Titolo: brand-dark (#0C283B) */}
            <h3 className={`font-bold text-brand-dark lg:group-hover:text-brand-light leading-tight mb-2 transition-colors ${
              isMain ? 'text-3xl lg:text-5xl' : 'text-xl lg:text-3xl'
            }`}>
              {title}
            </h3>
            {/* Descrizione: brand-gray */}
            <p className="text-brand-gray lg:group-hover:text-gray-300 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 text-sm md:text-base">
              {desc}
            </p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}