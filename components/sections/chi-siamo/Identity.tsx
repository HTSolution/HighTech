'use client';
import { useLanguage } from '@/context/LanguageContext';
import { ABOUT_PAGE_DATA } from '@/constants/chi-siamo/about';

export default function Identity() {
  const { language } = useLanguage();
  const { mission, stats, methodInfra, methodSoftware, ai } = ABOUT_PAGE_DATA[language];

  return (
    <>
      {/* \u2500\u2500 MISSION & DNA \u2500\u2500 */}
      <section id="identity" className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div className="space-y-6">
              <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.4em]">
                {mission.tag}
              </span>
              <h2 className="text-3xl md:text-4xl font-light leading-tight text-brand-dark">
                {mission.title}{' '}
                <span className="font-semibold text-brand-blue">{mission.bold}</span>{' '}
                {mission.extra}
              </h2>
            </div>
            <div className="space-y-6 lg:pt-20">
              <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.4em]">
                {mission.dnaTag}
              </span>
              <p className="text-xl text-brand-gray font-light leading-relaxed">
                {mission.dnaText}
              </p>
            </div>
          </div>

          {/* --- SEZIONE STATS PARTICOLARE --- */}
<div className="border-t border-gray-200 pt-24">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
    
    {/* Colonna Sinistra: Technical Core (Occupia 7/12) */}
    <div className="lg:col-span-7 space-y-12">
      <div className="space-y-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-blue">
          Technical Core
        </span>
        <h3 className="text-sm font-light text-brand-gray uppercase tracking-widest">
          La nostra forza verticale
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {stats.technical.map((stat, index) => (
          <div key={index} className="relative group">
            {/* Numero gigante in background opaco opzionale */}
            <span className="absolute -top-6 -left-2 text-7xl font-bold text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10">
              {stat.value}
            </span>
            <p className="text-6xl font-bold text-brand-dark group-hover:text-brand-blue transition-colors duration-500">
              {stat.value}
            </p>
            <p className="text-[10px] uppercase tracking-widest text-brand-gray font-bold mt-2 leading-tight">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Colonna Destra: Relations & Experience (Occupia 5/12) */}
    <div className="lg:col-span-5 bg-brand-dark p-10 md:p-12 rounded-[2rem] text-white space-y-12 relative overflow-hidden">
      {/* Elemento grafico decorativo */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
      
      <div className="space-y-2 relative z-10">
        <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.4em]">
          Relations & Heritage
        </span>
        <h3 className="text-sm font-light text-gray-400 uppercase tracking-widest">
          Il valore del tempo e delle persone
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-10 relative z-10">
        {stats.relations.map((stat, index) => (
          <div key={index} className="flex items-end gap-4 group">
            <p className="text-6xl font-bold text-white group-hover:text-brand-blue transition-colors duration-500 leading-none">
              {stat.value}
            </p>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1 leading-tight">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>

        </div>
      </section>

      {/* \u2500\u2500 COME LAVORIAMO: INFRASTRUTTURE \u2500\u2500 */}
      <section id="method-infra" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div className="space-y-6">
              <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.4em]">
                {methodInfra.tag}
              </span>
              <h2 className="text-3xl md:text-4xl font-light leading-tight text-brand-dark">
                {methodInfra.title.light}{' '}
                <span className="font-semibold text-brand-blue">{methodInfra.title.bold}</span>
              </h2>
            </div>
            <div className="space-y-6 lg:pt-20">
              <p className="text-xl text-brand-gray font-light leading-relaxed">
                {methodInfra.description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodInfra.steps.map((step, index) => (
              <div
                key={index}
                className="group p-8 border border-gray-200 hover:border-brand-blue transition-colors duration-500 cursor-default"
              >
                <p className="text-[10px] uppercase tracking-widest text-brand-blue font-bold mb-6">
                  {step.number}
                </p>
                <h3 className="text-xl font-semibold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-brand-gray font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* \u2500\u2500 COME LAVORIAMO: SOFTWARE \u2500\u2500 */}
      <section id="method-software" className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div className="space-y-6">
              <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.4em]">
                {methodSoftware.tag}
              </span>
              <h2 className="text-3xl md:text-4xl font-light leading-tight text-brand-dark">
                {methodSoftware.title.light}{' '}
                <span className="font-semibold text-brand-blue">{methodSoftware.title.bold}</span>
              </h2>
            </div>
            <div className="space-y-6 lg:pt-20">
              <p className="text-xl text-brand-gray font-light leading-relaxed">
                {methodSoftware.description}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodSoftware.steps.map((step, index) => (
              <div
                key={index}
                className="group p-8 border border-gray-200 hover:border-brand-blue transition-colors duration-500 cursor-default"
              >
                <p className="text-[10px] uppercase tracking-widest text-brand-blue font-bold mb-6">
                  {step.number}
                </p>
                <h3 className="text-xl font-semibold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-brand-gray font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* \u2500\u2500 AI & AUTOMAZIONE \u2500\u2500 */}
      <section id="ai" className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.4em]">
                {ai.tag}
              </span>
              <h2 className="text-3xl md:text-4xl leading-tight text-white">
                <span className="font-light">{ai.titleLight}</span>{' '}
                <span className="font-semibold text-brand-blue">{ai.titleBold}</span>
              </h2>
            </div>
            <div className="lg:pt-4">
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                {ai.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
