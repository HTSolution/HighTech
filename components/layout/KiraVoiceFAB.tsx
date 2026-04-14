'use client';

import Image from 'next/image';

export default function KiraVoiceFAB() {
  const CENTRALINO_URL = "tel:+390818681442,19";

  const handleVoiceCall = () => {
    window.location.href = CENTRALINO_URL;
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <button
        onClick={handleVoiceCall}
        className="relative group w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 hover:bg-brand-dark hover:-translate-y-2 active:scale-90"
        aria-label="Chiama Kira"
      >
        <span className="absolute inset-0 rounded-full bg-brand-blue animate-ping opacity-20 group-hover:bg-emerald-400/20"></span>
        <span className="absolute -inset-1 rounded-full border border-brand-blue/10 animate-pulse"></span>
        
        <div className="relative z-10">
          <Image 
            src="/icon.svg" 
            alt="Kira Voice" 
            width={26} 
            height={26} 
            className="brightness-200" 
          />
        </div>
      </button>
    </div>
  );
}