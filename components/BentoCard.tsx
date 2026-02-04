'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface BentoCardProps {
  id: string;
  title: string;
  desc: string;
  slug: string; // Aggiunto per l'URL dinamico
  className?: string;
}

export default function BentoCard({ id, title, desc, slug, className = "" }: BentoCardProps) {
  const isLarge = className.includes('md:col-span-2');

  return (
    <Link href={`/servizi/${slug}`} className={className}>
      <motion.div
        className="relative group h-full p-8 md:p-12 rounded-[2rem] bg-gray-50 border border-gray-100 overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500"
      >
        {/* Sfondo Hover: diventa nero */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Contenuto */}
        <div className="relative z-10 h-full flex flex-col justify-end">

           {/* Header: ID e Freccia */}
           <div className="absolute top-0 right-0 w-full flex justify-between items-start mb-auto">
              <span className="font-mono text-sm text-gray-400 group-hover:text-gray-500 transition-colors">/ {id}</span>
              <div className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 bg-black group-hover:bg-white">
                  <span className="text-xl text-white group-hover:text-black">
                    ↗
                  </span>
              </div>
           </div>

           {/* Titolo e Descrizione animati */}
           <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <h3 className={`font-semibold text-black group-hover:text-white tracking-tight mb-4 transition-colors duration-500 ${isLarge ? 'text-5xl md:text-6xl' : 'text-3xl md:text-4xl'}`}>
                {title}
              </h3>

              <p className="text-gray-400 group-hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-75 font-medium leading-relaxed max-w-md">
                {desc}
              </p>
           </div>
        </div>
      </motion.div>
    </Link>
  );
}