'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PROJECTS } from '@/constants';

export default function Projects() {
  return (
    <section id="work" className="bg-[#111] text-white py-32 px-6 md:px-10 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight">Selected Work.</h2>
          <p className="text-gray-400 mt-4 md:mt-0">Casi studio B2B & Enterprise</p>
        </div>

        <div className="flex flex-col gap-40">
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
  const isInView = useInView(ref, { margin: "-30% 0px -30% 0px" });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-10'}`}>
         <div className="flex gap-2 mb-6">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 border border-white/20 rounded-full text-xs font-mono text-gray-400 uppercase tracking-wider">
                {tag}
              </span>
            ))}
         </div>
         <h3 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">{project.client}</h3>
         <p className="text-xl text-gray-400 leading-relaxed font-light max-w-md">
            {project.desc}
         </p>
         <div className="mt-8 text-white font-semibold border-b border-white inline-block pb-1 cursor-pointer hover:opacity-70">
            Leggi Case Study
         </div>
      </div>

      <motion.div
        className="w-full aspect-square md:aspect-[4/3] rounded-3xl bg-[#1a1a1a] relative overflow-hidden flex items-center justify-center group"
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-10" />
        <span className="relative z-20 text-8xl font-black text-white/10 group-hover:text-white/20 transition-colors">
          {project.imageText}
        </span>
      </motion.div>
    </div>
  );
};