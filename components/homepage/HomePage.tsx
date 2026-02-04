'use client';

// Se Homepage.tsx è dentro la cartella homepage,
// gli import devono essere relativi ai file vicini (./)
import Hero from './Hero';
import ServicesGrid from './ServicesGrid';
import Projects from './Projects';
import History from './History';
import ContactFooter from './ContactFooter';

export default function Homepage() {
  return (
    <main className="bg-white text-black font-sans selection:bg-black selection:text-white">
      <Hero />
      <ServicesGrid />
      <Projects />
      <History />
      <ContactFooter />
    </main>
  );
}