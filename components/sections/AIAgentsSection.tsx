const AI_USE_CASES = [
  {
    title: "Help Desk Assistito",
    text: "Triage automatico ticket, suggerimenti di soluzione e instradamento verso il tecnico corretto.",
  },
  {
    title: "Automazione Processi",
    text: "Agenti per attivita' ripetitive: raccolta dati, aggiornamento sistemi e notifiche operative.",
  },
  {
    title: "Analisi Documenti",
    text: "Estrazione dati da documenti tecnici e amministrativi con controllo umano nei passaggi critici.",
  },
  {
    title: "Integrazione Microsoft 365",
    text: "Copilot/agent su Teams, SharePoint e Outlook con governance, permessi e tracciabilita'.",
  },
];

export default function AIAgentsSection() {
  return (
    <section id="ai-agents" className="w-full px-6 md:px-10 py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto">
        <span className="text-brand-blue font-bold uppercase text-[10px] tracking-[0.5em] block mb-4 opacity-90">
          AI Agents
        </span>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-brand-dark max-w-4xl">
          Agenti IA operativi su processi reali, non demo isolate.
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {AI_USE_CASES.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] bg-brand-light border border-gray-100 p-7"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-brand-dark">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-brand-gray leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
