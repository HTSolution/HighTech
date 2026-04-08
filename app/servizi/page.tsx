'use client';

import ContactFooter from '@/components/layout/ContactFooter';
import { SERVICES_DATA, SERVICES_GRID_CONTENT } from '@/constants/home/services';
import Cta from '@/components/sections/shared/Cta';
import PageBanner from '@/components/sections/shared/PageBanner';
import ServiceRow from '@/components/sections/servizi/ServiceRow'; // Nuovo import
import { useLanguage } from '@/context/LanguageContext';

export default function ServiziPage() {
  const { language, t } = useLanguage();

  const services = SERVICES_DATA[language];
  const gridContent = SERVICES_GRID_CONTENT[language];

  return (
    <div className="bg-white min-h-screen text-brand-dark selection:bg-brand-blue selection:text-white">
      
      <PageBanner 
        currentPage={t("Servizi", "Services")}
        tag={t("Competenze Verticali", "Vertical Expertise")}
        titleLight={t("Infrastrutture, Codice", "Infrastructure, Code")}
        titleBold={t("& Cybersecurity", "& Cybersecurity")}
        description={gridContent.header.claim}
        metaLeft={[t("Operatività 24/7", "24/7 Operations"), t("Supporto SLA", "SLA Support")]}
        metaRight={[t("Hardware & Reti", "Hardware & Networks"), t("Sviluppo Custom", "Custom Development")]}
      />

      <main>
        {services.map((service, index) => (
          <ServiceRow 
            key={service.id} 
            service={service} 
            index={index} 
          />
        ))}
        <Cta />
      </main>

      <ContactFooter />
    </div>
  );
}