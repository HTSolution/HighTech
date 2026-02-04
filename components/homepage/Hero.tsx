'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-20 border-b border-gray-100 bg-white">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-7xl md:text-9xl font-semibold tracking-tighter leading-none text-black"
      >
        High<span className="text-gray-300">.</span><br/>
        Tech<span className="text-gray-300">.</span>
      </motion.h1>
      <p className="mt-8 text-2xl text-gray-500 max-w-xl font-medium leading-relaxed">
        La complessità tecnologica,<br/>
        <span className="text-black">finalmente risolta.</span>
      </p>
      <div className="mt-12">
         <button className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
           Inizia Ora
         </button>
      </div>
    </section>
  );
}