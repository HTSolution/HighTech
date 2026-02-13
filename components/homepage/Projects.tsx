'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PROJECTS } from '@/constants';

export default function Projects() {
  return (
    <section
      id="work"
      // Sfondo brand-dark (#0C283B) e testo brand-light (#F9F9F9)
      className="bg-brand-dark text-brand-light py-24 md:py-32 px-6 md:px-10 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight">
            Selected Work<span className="text-brand-blue">.</span>
          </h2>
          <p className="text-brand-gray mt-4 md:mt-0 font-medium italic">
            Casi studio B2B & Enterprise
          </p>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {PROJECTS.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectRow = ({ project }: { project: any }) => {
  const ref = useRef(null);
  // Gestione dell'animazione in view per il resize fluido
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: true });

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
      <div className={`transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
         <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 border border-brand-blue/30 rounded-full text-[10px] font-mono text-brand-blue uppercase tracking-widest bg-brand-blue/5">
                {tag}
              </span>
            ))}
         </div>

         <h3 className="text-4xl md:text-6xl font-bold mb-6 text-brand-light leading-tight">
            {project.client}
         </h3>

         <p className="text-lg md:text-xl text-brand-gray leading-relaxed font-light max-w-md">
            {project.desc}
         </p>

         <div className="mt-8 text-brand-blue font-semibold border-b-2 border-brand-blue inline-block pb-1 cursor-pointer hover:text-brand-light hover:border-brand-light transition-all duration-300">
            Leggi Case Study
         </div>
      </div>

      <motion.div
        // Sfondo leggermente più chiaro del brand-dark per dare profondità
        className="w-full aspect-square md:aspect-[4/3] rounded-[2rem] bg-white/5 relative overflow-hidden flex items-center justify-center group border border-white/5"
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/90 to-transparent z-10" />

        {/* Testo decorativo usando il brand-blue con bassa opacità */}
        <span className="relative z-20 text-6xl md:text-8xl font-black text-brand-blue/10 group-hover:text-brand-blue/30 transition-all duration-500 group-hover:scale-110">
          {project.imageText}
        </span>

        {/* Glow decorativo */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-blue/10 blur-[100px] rounded-full" />
      </motion.div>
    </div>
  );
};