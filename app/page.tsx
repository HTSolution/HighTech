import Hero from '@/components/sections/Hero';
import Identity from '@/components/sections/Identity';
import ServicesGrid from '@/components/sections/ServicesGrid';
import Sectors from '@/components/sections/Sectors'; // NUOVO
import NavalFocus from '@/components/sections/NavalFocus'; // NUOVO
import History from '@/components/sections/History';
import ContactFooter from '@/components/sections/ContactFooter';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />

      <Identity />

      <Sectors />

      <ServicesGrid />

      <NavalFocus />

      <History />

      <ContactFooter />
    </main>
  );
}