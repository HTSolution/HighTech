"use client";

import React, { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';
import { CHATBOT_DATA } from '@/constants/chat/chatbot'; // Import corretto
import { useChat } from '@/context/ChatContext';

interface UserData {
  email: string;
  first_name: string;
  last_name: string;
}

export default function ChatBot() {
  const { messages, setMessages } = useChat();
  const [mounted, setMounted] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [formData, setFormData] = useState<UserData>({ email: '', first_name: '', last_name: '' });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const [input, setInput] = useState('');
  const [sessionId] = useState(`session_${Math.random().toString(36).substring(7)}`);
  const [isValidating, setIsValidating] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  useEffect(() => {
    setMounted(true);
    const savedUser = Cookies.get('kira_user_data');
    if (savedUser) setUserData(JSON.parse(savedUser));
  }, []);

  const getLangKey = () => {
    if (typeof navigator === 'undefined') return 'it';
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'it' ? 'it' : 'en';
  };

  const langKey = mounted ? getLangKey() : 'it';
  const content = CHATBOT_DATA[langKey]; // Usa CHATBOT_DATA

  useEffect(() => {
    if (userData && messages.length === 0) {
      const welcomeText = content.readyMessage.replace('{name}', userData.first_name);
      const timer = setTimeout(() => {
        setMessages([{ role: 'bot', text: welcomeText }]);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [userData, content, messages.length, setMessages]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    
    if (!privacyAccepted) {
      setValidationError(content.privacyError);
      return;
    }

    setIsValidating(true);
    setValidationError(null);

    try {
      const response = await fetch('/api/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (result.all_valid) {
        Cookies.set('kira_user_data', JSON.stringify(formData), { expires: 7 });
        setUserData(formData);
      } else {
        setValidationError(langKey === 'it' ? "Dati non validi." : "Invalid data.");
      }
    } catch (err) {
      setValidationError("Server Error");
    } finally {
      setIsValidating(false);
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !userData || loading) return;

    const userMessage = input;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch('https://ai.hightechsas.it/webhook/ab6ea438-48cd-4693-96a0-0433a0db4fc3/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: userMessage,
          channel: "chat",
          session_id: sessionId,
          lang: navigator.language,
          ...userData
        }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'bot', text: data.output || data.text || content.errorMessage }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'bot', text: content.connectionError }]);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return <div className="w-full h-full bg-transparent" />;

  if (!userData) {
    return (
      <div className="flex flex-col w-full h-full bg-transparent p-8 justify-center items-center animate-in fade-in duration-500 overflow-y-auto custom-scrollbar">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-blue/20 overflow-hidden shrink-0">
          <img src="/icon.svg" alt="Kira" className="w-8 h-8" />
        </div>
        <div className="text-center mb-6 shrink-0">
          <h2 className="text-2xl font-bold text-white tracking-tight">Kira Assistant</h2>
          <p className="text-white/40 text-sm mt-1 max-w-[280px] leading-relaxed">{content.welcome}</p>
        </div>
        <form onSubmit={handleRegister} className="w-full space-y-4 max-w-sm">
          <input type="text" className="hidden" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} tabIndex={-1} autoComplete="off" />
          <div className="grid grid-cols-2 gap-4">
            <input required type="text" placeholder={content.firstName} value={formData.first_name} className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white outline-none focus:border-brand-blue" onChange={(e) => setFormData({...formData, first_name: e.target.value})} />
            <input required type="text" placeholder={content.lastName} value={formData.last_name} className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white outline-none focus:border-brand-blue" onChange={(e) => setFormData({...formData, last_name: e.target.value})} />
          </div>
          <input required type="email" placeholder={content.emailPlaceholder} value={formData.email} className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-white outline-none focus:border-brand-blue" onChange={(e) => setFormData({...formData, email: e.target.value})} />
          <label className="flex items-start gap-3 cursor-pointer group">
            <input type="checkbox" required checked={privacyAccepted} onChange={(e) => setPrivacyAccepted(e.target.checked)} className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 accent-brand-blue cursor-pointer shrink-0" />
            <span className="text-[10px] text-white/40 leading-tight group-hover:text-white/60 transition-colors">
              {content.privacyLink}{" "}
              <a 
                href="/privacy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-brand-blue underline hover:text-white transition-colors" 
                onClick={(e) => e.stopPropagation()}
              >
                Privacy Policy
              </a>.
            </span>
          </label>
          {validationError && <p className="text-red-400 text-[10px] text-center uppercase tracking-widest font-bold">{validationError}</p>}
          <button type="submit" disabled={isValidating} className="w-full bg-brand-blue hover:scale-[1.02] active:scale-95 text-white py-4 rounded-2xl font-bold uppercase text-[11px] tracking-[0.2em] transition-all disabled:opacity-50">{isValidating ? "..." : content.button}</button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full bg-transparent animate-in fade-in duration-500">
      <div className="p-6 border-b border-white/5 flex items-center gap-4 bg-white/5">
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
          <img src="/icon.svg" alt="Kira Logo" className="w-6 h-6 object-contain" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-white leading-none">Kira AI</h3>
          <span className="text-[10px] text-green-400 uppercase tracking-widest font-bold">Online</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-500`}>
            <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed shadow-sm ${
              msg.role === 'user' ? 'bg-brand-blue text-white rounded-tr-none' : 'bg-white/10 text-white rounded-tl-none border border-white/10 backdrop-blur-sm'
            }`}>
              <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            </div>
          </div>
        ))}
        {loading && <div className="flex justify-start animate-pulse italic text-xs text-white/40 ml-2">Kira is typing...</div>}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-6">
        <form onSubmit={sendMessage} className="relative group">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder={content.inputPlaceholder} className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 pr-24 text-white outline-none focus:border-brand-blue/50 focus:bg-white/10 transition-all" />
          <button type="submit" disabled={loading || !input.trim()} className="absolute right-2 top-2 bottom-2 bg-brand-blue text-white px-5 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all">Invia</button>
        </form>
      </div>
    </div>
  );
}