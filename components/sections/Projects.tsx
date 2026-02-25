'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PROJECTS } from '@/constants';

export default function Projects() {
  return (
    <section
      id="work"
      className="bg-brand-dark text-brand-light py-24 md:py-32 px-6 md:px-10 relative z-10 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-baseline border-b border-white/5 pb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl md:text-8xl font-light tracking-tighter"
          >
            Selected <span className="font-semibold italic">Work</span><span className="text-brand-blue">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            className="text-brand-gray mt-6 md:mt-0 font-light text-sm uppercase tracking-[0.4em]"
          >
            Casi studio B2B & Enterprise
          </motion.p>
        </div>

        <div className="flex flex-col gap-32 md:gap-56">
          {PROJECTS.map((project, index) => (
            <ProjectRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectRow = ({ project, index }: { project: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-10% 0px -10% 0px", once: true });

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
    >
      <div className={`order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'} transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
         <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-4 py-1.5 border border-white/10 rounded-full text-[9px] font-bold text-brand-blue uppercase tracking-[0.2em] bg-white/[0.03]">
                {tag}
              </span>
            ))}
         </div>

         <h3 className="text-4xl md:text-6xl font-light mb-8 text-white tracking-tighter leading-tight">
            {project.client.split(' ').map((word: string, i: number) => (
              <span key={i} className={i === 1 ? "font-bold" : ""}>{word} </span>
            ))}
         </h3>

         <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light max-w-md mb-10 opacity-80">
            {project.desc}
         </p>

         <motion.div
            whileHover={{ x: 10 }}
            className="group flex items-center gap-4 text-brand-blue font-bold uppercase text-[10px] tracking-[0.3em] cursor-pointer"
          >
            <span className="border-b border-brand-blue/30 group-hover:border-brand-blue pb-1 transition-all">Leggi Case Study</span>
            <span className="text-lg">→</span>
         </motion.div>
      </div>

      <motion.div
        className={`order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'} w-full aspect-[4/3] rounded-[2.5rem] bg-white/[0.02] relative overflow-hidden flex items-center justify-center group border border-white/5`}
        whileHover={{ scale: 0.98 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark via-transparent to-transparent z-10 opacity-60" />

        <span className="relative z-20 text-xs font-mono uppercase tracking-[1em] text-white/10 group-hover:text-brand-blue/40 transition-all duration-700">
          {project.imageText || "View Project"}
        </span>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-blue/5 blur-[120px] rounded-full group-hover:bg-brand-blue/10 transition-all duration-700" />

        <motion.div
          animate={{ y: ["-100%", "200%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent z-20"
        />
      </motion.div>
    </div>
  );
};