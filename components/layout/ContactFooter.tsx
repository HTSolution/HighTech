import Link from 'next/link';
import { SITE_CONFIG } from '@/constants';

export default function ContactFooter() {
  return (
    <footer id="contact" className="py-24 md:py-32 flex items-center justify-center bg-brand-dark text-white relative overflow-hidden">
       {/* Bagliore decorativo */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />

       <div className="relative z-10 text-center p-6 md:p-10 max-w-5xl w-full">
         <span className="text-brand-blue font-bold text-[10px] uppercase tracking-[0.5em] mb-12 block opacity-80">
           Contact Center
         </span>

         {/* Email gigante cliccabile */}
         <a
           href={`mailto:${SITE_CONFIG.email}`}
           className="text-4xl sm:text-5xl md:text-8xl font-light mb-16 block tracking-tighter hover:text-brand-blue transition-colors duration-500 ease-out"
         >
           {SITE_CONFIG.email.split('@')[0]}<span className="font-semibold">@{SITE_CONFIG.email.split('@')[1]}</span>
         </a>

         <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center text-gray-400">
           <div className="flex flex-col gap-1">
             <span className="text-[9px] uppercase tracking-widest opacity-40">Location</span>
             <p className="text-sm md:text-lg font-light tracking-wide text-white/80">
               {SITE_CONFIG.address}
             </p>
           </div>
           
           <div className="hidden md:block w-[1px] h-10 bg-white/10" />
           
           <div className="flex flex-col gap-1">
             <span className="text-[9px] uppercase tracking-widest opacity-40">Direct Line</span>
             <p className="text-sm md:text-lg font-light tracking-wide text-white/80">
               {SITE_CONFIG.phone}
             </p>
           </div>
         </div>

         {/* Copyright e Links legali */}
         <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-[9px] text-gray-500 uppercase tracking-[0.3em]">
             &copy; {new Date().getFullYear()} {SITE_CONFIG.name}
             <span className="mx-2 text-white/10">|</span>
             P.IVA {SITE_CONFIG.piva}
           </div>
           <div className="flex gap-8">
              <Link href="/privacy" className="text-[9px] text-gray-500 uppercase tracking-[0.3em] hover:text-white transition-colors">Privacy</Link>
              <Link href="/cookies" className="text-[9px] text-gray-500 uppercase tracking-[0.3em] hover:text-white transition-colors">Cookies</Link>
           </div>
         </div>
       </div>
    </footer>
  );
}