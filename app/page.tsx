// app/page.tsx

import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Projects from "@/components/sections/Projects";
import History from "@/components/sections/History";
import ContactFooter from "@/components/sections/ContactFooter";
import Identity from "@/components/sections/Identity";

export default function Home() {
  return (
    <main className="bg-white text-black font-sans selection:bg-black selection:text-white">
      <Hero />
      <Identity />
      <History />
      <ServicesGrid />
      <ContactFooter />
    </main>
  );
}