'use client';

import { HISTORY } from '@/constants';

export default function History() {
  return (
    <section id="about" className="py-32 px-6 md:px-20 text-black border-b border-gray-200 max-w-7xl mx-auto bg-white">
       <h2 className="text-4xl font-bold mb-16">Evoluzione Continua.</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {HISTORY.map((h, i) => (
            <div key={i} className="border-l-2 border-gray-300 pl-6 py-2">
              <span className="text-3xl font-bold block mb-2 text-gray-400">{h.year}</span>
              <h4 className="text-xl font-bold mb-1">{h.title}</h4>
              <p className="text-sm text-gray-500">{h.desc}</p>
            </div>
          ))}
       </div>
    </section>
  );
}