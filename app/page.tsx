import Hero from '@/components/sections/home/Hero';
import Sectors from '@/components/sections/home/Sectors';
import ServicesGrid from '@/components/sections/home/ServicesGrid';
import ReadyToScale from '@/components/sections/home/ReadyToScale';
import BoutiqueTeaser from '@/components/sections/home/BoutiqueTeaser';
import NavalTeaser from '@/components/sections/home/NavalTeaser';
import ContactFooter from '@/components/layout/ContactFooter';

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      
      <Hero />

      <BoutiqueTeaser />

      <Sectors />
      
      <ServicesGrid />
      
      <NavalTeaser />

      <ReadyToScale />

    </main>
  );
}