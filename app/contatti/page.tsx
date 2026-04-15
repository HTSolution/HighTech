'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { CONTACT_DATA } from '@/constants/contact';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Bot, 
  ChevronRight,
  X
} from 'lucide-react';

export default function ContattiPage() {
  const { language } = useLanguage();
  const content = CONTACT_DATA[language];
  const [showCallAlert, setShowCallAlert] = useState(false);

  const openGlobalAIChat = () => {
    const fabButton = document.querySelector('#smart-fab-button') as HTMLButtonElement;
    if (fabButton) fabButton.click();
  };

  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowCallAlert(true);
  };

  const confirmCall = () => {
    setShowCallAlert(false);
    window.location.href = `tel:${content.info.phone.value.replace(/\s/g, '')},19`;
  };

  return (
    <div className="bg-white min-h-screen text-brand-dark selection:bg-brand-blue selection:text-white flex flex-col relative">
      
      {/* Popup Avviso Chiamata Dinamico */}
      <AnimatePresence>
        {showCallAlert && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center px-6 bg-brand-dark/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[2.5rem] p-8 w-full max-w-sm shadow-2xl relative"
            >
              <button 
                onClick={() => setShowCallAlert(false)}
                className="absolute top-6 right-6 text-brand-gray/40 hover:text-brand-dark transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center text-brand-blue mb-6">
                <Phone size={28} />
              </div>

              <h3 className="text-xl font-bold text-brand-dark mb-3 tracking-tight">
                {content.callAlert.title}
              </h3>
              <p className="text-brand-gray text-sm leading-relaxed mb-8">
                {content.callAlert.description}
              </p>

              <div className="flex flex-col gap-3">
                <button 
                  onClick={confirmCall}
                  className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold uppercase text-[10px] tracking-widest hover:bg-brand-dark transition-all"
                >
                  {content.callAlert.confirm}
                </button>
                <button 
                  onClick={() => setShowCallAlert(false)}
                  className="w-full py-4 text-brand-gray/60 font-bold uppercase text-[10px] tracking-widest hover:text-brand-dark transition-colors"
                >
                  {content.callAlert.cancel}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <main className="grow pt-40 pb-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          
          <nav className="mb-12 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em]">
            <Link href="/" className="text-brand-gray/40 hover:text-brand-blue transition-colors">Home</Link>
            <span className="text-brand-gray/20">/</span>
            <span className="text-brand-blue">{content.tag}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 space-y-12"
            >
              <div>
                <h1 className="text-5xl md:text-7xl font-light tracking-tighter leading-[1.1] mb-6">
                  {content.title.light} <br/>
                  <span className="font-bold text-brand-blue">{content.title.bold}</span>.
                </h1>
                <p className="text-xl text-brand-gray font-light leading-relaxed">
                  {content.description}
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-blue shrink-0">
                    <Phone size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-gray font-bold mb-1">{content.info.phone.label}</p>
                    <a href="#" onClick={handlePhoneClick} className="text-2xl font-light hover:text-brand-blue transition-colors">{content.info.phone.value}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-blue shrink-0">
                    <Mail size={20} strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[10px] uppercase tracking-widest text-brand-gray font-bold mb-1">{content.info.email.label}</p>
                    <a href={`mailto:${content.info.email.value}`} className="text-2xl font-light hover:text-brand-blue transition-colors">{content.info.email.value}</a>
                    <a href={`mailto:${content.info.email.value2}`} className="text-2xl font-light hover:text-brand-blue transition-colors">{content.info.email.value2}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center text-brand-blue shrink-0">
                    <MapPin size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-brand-gray font-bold mb-1">{content.info.address.label}</p>
                    <p className="text-xl font-light">{content.info.address.value}<br/>{content.info.address.city}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-7 bg-brand-dark rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-center shadow-2xl border border-white/5 h-[650px]"
            >
              <div className="mb-10">
                <h3 className="text-white text-3xl font-bold tracking-tighter mb-2">
                  {content.cta.title}
                </h3>
                <p className="text-white/40 text-sm font-light leading-relaxed max-w-md">
                  {content.cta.description}
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { 
                    title: "WhatsApp", 
                    desc: "Instant Messaging", 
                    href: "https://wa.me/390818681442", 
                    icon: MessageCircle,
                    hoverBg: "hover:bg-green-500",
                    accentColor: "text-green-500" 
                  },
                  { 
                    title: "Kira AI", 
                    desc: "Smart Assistant", 
                    onClick: openGlobalAIChat, 
                    icon: Bot,
                    hoverBg: "hover:bg-brand-blue",
                    accentColor: "text-brand-blue" 
                  },
                  { 
                    title: "Phone Call", 
                    desc: "Direct Line", 
                    onClick: handlePhoneClick, 
                    icon: Phone,
                    hoverBg: "hover:bg-white",
                    accentColor: "text-white",
                    isDark: true 
                  }
                ].map((item, idx) => {
                  const Tag = item.href ? 'a' : 'button';
                  const Icon = item.icon;
                  return (
                    <Tag
                      key={idx}
                      href={item.href}
                      onClick={item.onClick}
                      className={`group w-full flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl transition-all duration-500 ${item.hoverBg} hover:border-transparent hover:-translate-y-1`}
                    >
                      <div className="flex items-center gap-5 text-left pointer-events-none">
                        <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center transition-all duration-500 group-hover:bg-black/10 shrink-0 ${item.accentColor} group-hover:text-white ${item.isDark ? 'group-hover:text-brand-dark' : ''}`}>
                          <Icon size={24} strokeWidth={1.5} />
                        </div>
                        <div>
                          <h4 className={`font-bold text-white tracking-tight leading-tight transition-colors duration-500 ${item.isDark ? 'group-hover:text-brand-dark' : ''}`}>
                            {item.title}
                          </h4>
                          <p className={`text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold transition-colors duration-500 ${item.isDark ? 'group-hover:text-brand-dark/40' : 'group-hover:text-white/60'}`}>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <div className={`mr-2 opacity-20 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0 ${item.isDark ? 'text-brand-dark' : 'text-white'}`}>
                         <ChevronRight size={20} strokeWidth={2.5} />
                      </div>
                    </Tag>
                  );
                })}
              </div>

              <div className="mt-12 pt-8 border-t border-white/5">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
                  {content.availability}
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </main>
    </div>
  );
}