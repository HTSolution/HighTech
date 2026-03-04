'use client';

import { motion, useMotionValue, useSpring, Variants} from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { HERO_CONTENT } from '@/constants';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as any
      }
    }
  };

  return (
    <section
      id="home"
      // Su mobile riduciamo il padding top (pt-24 invece di pt-32)
      className="relative w-full min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-12 px-4 md:px-10 bg-white overflow-hidden"
    >
      {/* Bagliore blu */}
      <motion.div
        className="pointer-events-none absolute z-0 w-[800px] h-[800px] rounded-full opacity-[0.12]"
        style={{
          background: 'radial-gradient(circle, #0055ff 0%, transparent 70%)',
          left: smoothX,
          top: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          filter: 'blur(100px)',
        }}
      />

      <div className="absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />

      {/* Riduciamo il gap su mobile per evitare spazi vuoti eccessivi */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-0">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0 w-full"
        >
          {/* TITOLO: Scalato da text-5xl (Mobile) a text-[10rem] (Desktop) */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-semibold tracking-tighter leading-[1] md:leading-[0.82] text-brand-dark"
          >
            {HERO_CONTENT.title.first}<span className="text-brand-blue">.</span><br/>
            {HERO_CONTENT.title.second}<span className="text-brand-blue">.</span>
          </motion.h1>

          {/* CLAIM: Più piccolo su mobile (text-sm) per non andare a capo male */}
          <motion.p
            variants={itemVariants}
            className="mt-6 md:mt-8 text-sm md:text-xl text-brand-blue font-bold uppercase tracking-[0.2em] md:tracking-[0.4em]"
          >
            {HERO_CONTENT.claim}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="mt-4 md:mt-6 text-sm md:text-lg text-brand-gray max-w-md font-light leading-relaxed italic px-4 md:px-0"
          >
            {HERO_CONTENT.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start"
          >
            {HERO_CONTENT.pills.map((pill, index) => (
              <motion.span
                key={index}
                whileHover={{ y: -2, borderColor: '#0055ff' }}
                className="px-4 md:px-5 py-2 rounded-full border border-gray-100 bg-white shadow-sm text-brand-blue text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-colors"
              >
                {pill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <div className="flex-1 relative flex justify-center items-center w-full">
          <div className="relative w-full flex justify-center items-center">

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 z-20 bg-white/60 backdrop-blur-xl border border-white/20 p-4 rounded-3xl shadow-2xl hidden sm:block"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold text-brand-dark/60 uppercase tracking-widest">System Uptime</span>
              </div>
              <p className="text-2xl font-black text-brand-dark tracking-tighter">{HERO_CONTENT.widgets.uptime}</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 z-20 bg-brand-dark/95 text-white p-5 rounded-[2rem] shadow-2xl w-52 hidden md:block border border-white/10"
            >
               <div className="flex justify-between items-end mb-3 h-10">
                  {[0.4, 0.7, 1, 0.6, 0.9, 0.5].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: [1, 0.4, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
                      className="w-1.5 bg-brand-blue rounded-full origin-bottom"
                      style={{ height: `${h * 100}%` }}
                    />
                  ))}
               </div>
               <p className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-50 mb-1">Data Flow</p>
               <p className="text-xs font-bold text-brand-blue tracking-tight">{HERO_CONTENT.widgets.status}</p>
            </motion.div>

            <div className="relative w-full aspect-square max-w-[180px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] z-10">
              <Image
                src="/face.png"
                alt="HT Solution Visual"
                fill
                priority
                className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.1)]"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}