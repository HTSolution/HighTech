import { HISTORY_CONTENT } from '@/constants';

const stats = [
  { label: "Tecnici Infrastruttura", value: "3" },
  { label: "Sviluppatori Senior", value: "2" },
  { label: "UI/UX Designer", value: "1" },
  { label: "Anni di Esperienza", value: "20+" },
];

export default function Identity() {
  return (
    <section id="identity" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Parte Superiore: Mission & Il Nostro DNA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

          <div className="space-y-6">
            <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.4em]">La Nostra Missione</span>
            <h2 className="text-3xl md:text-4xl font-light leading-tight text-brand-dark">
              Abilitiamo il potenziale tecnologico delle imprese attraverso <span className="font-semibold text-brand-blue">infrastrutture solide</span> e codice su misura.
            </h2>
          </div>

          {/* Posizionamento Strategico */}
          <div className="space-y-6 lg:pt-20">
            <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.4em]">Il Nostro DNA</span>
            <p className="text-xl text-brand-gray font-light leading-relaxed">
              Siamo una boutique tecnologica: una struttura compatta, ma <span className="font-medium text-brand-dark">verticale e completa</span>.
              Avere esperti di infrastruttura, sviluppatori software, specialisti di sicurezza e intelligenza artificiale nello stesso team &egrave; il nostro pi&ugrave; grande vantaggio.
              Ci permette di muoverci con un&apos;agilit&agrave; introvabile altrove, gestendo progetti complessi in <span className="font-medium text-brand-dark">Pubblica Amministrazione</span> e vantando un&apos;esperienza rara in <span className="font-medium text-brand-dark">ambito Navale</span>.
            </p>
          </div>

        </div>

        {/* Parte Inferiore: I Numeri del Team */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gray-200 pt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center lg:text-left group cursor-default">
              <p className="text-4xl md:text-5xl font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors duration-500">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-widest text-brand-gray font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}