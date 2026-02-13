// constants/index.ts

export const SERVICES = [
  {
    id: "01",
    slug: "infrastructure",
    title: "Infrastructure",
    desc: "Fondamenta solide. Reti e Data Center progettati per la continuità operativa assoluta.",
    longDesc: "Progettiamo infrastrutture critiche capaci di reggere carichi di lavoro enterprise. Dalla stesura del cabling alla configurazione di cluster ad alta disponibilità.",
    details: [
      { label: "Ambito", value: "Reti e Data Center" },
      { label: "Focus", value: "Continuità Operativa" }
    ],
    fullContent: "La nostra divisione Infrastructure gestisce la complessità tecnologica alla base del tuo business, garantendo componenti ottimizzati per la massima efficienza.",
    process: [
      { step: "01", name: "Audit", text: "Analisi completa dell'infrastruttura esistente e dei colli di bottiglia." },
      { step: "02", name: "Design", text: "Progettazione di un'architettura ridondata e scalabile." },
      { step: "03", name: "Deployment", text: "Installazione fisica e configurazione logica con test di carico." }
    ],
    stack: ["Cisco", "Dell Enterprise", "Fortinet", "VMware"],
    faqs: [
      { q: "Offrite supporto per Data Center esistenti?", a: "Sì, eseguiamo interventi di ottimizzazione e revamping su strutture già operative." },
      { q: "Come garantite l'uptime?", a: "Attraverso la progettazione di sistemi a tolleranza d'errore e ridondanza geografica." }
    ]
  },
  {
    id: "02",
    slug: "cloud",
    title: "Cloud & Hybrid",
    desc: "Flessibilità senza confini. Migrazione e gestione ambienti Azure/AWS.",
    longDesc: "Accompagniamo le aziende nel percorso verso il cloud, ottimizzando i costi e garantendo una scalabilità sicura attraverso architetture moderne.",
    details: [
      { label: "Piattaforme", value: "Azure / AWS" },
      { label: "Vantaggio", value: "Scalabilità Sicura" }
    ],
    fullContent: "Gestiamo la transizione verso il Cloud riducendo i rischi e massimizzando il ritorno sull'investimento tecnologico.",
    process: [
      { step: "01", name: "Assessment", text: "Valutazione della cloud-readiness delle applicazioni aziendali." },
      { step: "02", name: "Migration", text: "Spostamento controllato dei dati con downtime vicino allo zero." },
      { step: "03", name: "Governance", text: "Configurazione di policy di sicurezza e controllo dei costi (FinOps)." }
    ],
    stack: ["Microsoft Azure", "AWS", "Terraform", "Docker", "Kubernetes"],
    faqs: [
      { q: "Quale provider Cloud consigliate?", a: "Dipende dalle necessità: valutiamo Azure per ecosistemi Microsoft e AWS per soluzioni agnostiche." },
      { q: "Posso mantenere alcuni server locali?", a: "Certamente, progettiamo soluzioni Hybrid Cloud per far comunicare on-premise e cloud." }
    ]
  },
  {
    id: "03",
    slug: "security",
    title: "Security",
    desc: "Difesa attiva. SOC H24 e protezione endpoint avanzata.",
    longDesc: "Protezione totale contro le minacce informatiche. Implementiamo architetture Zero Trust e monitoraggio costante dei sistemi.",
    details: [
      { label: "Servizio", value: "SOC H24" },
      { label: "Protocollo", value: "Zero Trust" }
    ],
    fullContent: "La sicurezza non è un prodotto, ma un processo. Garantiamo una difesa attiva su ogni livello della tua rete aziendale.",
    process: [
      { step: "01", name: "Pentesting", text: "Identificazione delle vulnerabilità attraverso simulazioni di attacco." },
      { step: "02", name: "Hardening", text: "Rafforzamento dei sistemi e chiusura delle falle rilevate." },
      { step: "03", name: "Monitoring", text: "Sorveglianza continua 24/7 tramite il nostro SOC dedicato." }
    ],
    stack: ["SentinelOne", "CrowdStrike", "Splunk", "Palo Alto Networks"],
    faqs: [
      { q: "Cos'è l'approccio Zero Trust?", a: "È un modello di sicurezza che non dà mai per scontata l'affidabilità di un utente, verificando ogni accesso." },
      { q: "Intervenite in caso di attacco in corso?", a: "Sì, offriamo servizi di Incident Response per mitigare i danni in tempo reale." }
    ]
  },
  {
    id: "04",
    slug: "software",
    title: "Software",
    desc: "Codice su misura. Sviluppo custom per processi unici.",
    longDesc: "Sviluppiamo soluzioni software custom (Web e App) progettate per risolvere problemi specifici e migliorare i processi aziendali.",
    details: [
      { label: "Tipo", value: "Sviluppo Custom" },
      { label: "Metodologia", value: "Agile" }
    ],
    fullContent: "Trasformiamo le tue necessità in strumenti digitali potenti, manutenibili e scalabili.",
    process: [
      { step: "01", name: "Discovery", text: "Workshop per definire i requisiti funzionali e l'esperienza utente." },
      { step: "02", name: "Coding", text: "Sviluppo iterativo con rilasci frequenti e test automatizzati." },
      { step: "03", name: "Release", text: "Messa in produzione e piano di manutenzione evolutiva." }
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "React Native"],
    faqs: [
      { q: "Sviluppate App per iOS e Android?", a: "Sì, utilizziamo tecnologie cross-platform per garantire alte prestazioni su entrambi i sistemi." },
      { q: "Il codice rimane di mia proprietà?", a: "Assolutamente sì, al termine del progetto consegniamo tutta la proprietà intellettuale e i sorgenti." }
    ]
  },
  {
    id: "05",
    slug: "support",
    title: "Support",
    desc: "Mai soli. Help Desk proattivo e SLA garantiti.",
    longDesc: "Assistenza H24 e supporto proattivo per garantire che ogni problema venga risolto prima ancora che impatti sulla produttività.",
    details: [
      { label: "Copertura", value: "H24 / 7gg" },
      { label: "Garanzia", value: "SLA Certificati" }
    ],
    fullContent: "Il nostro Help Desk analizza i dati per prevenire i guasti e ottimizzare l'uso delle risorse IT.",
    process: [
      { step: "01", name: "Onboarding", text: "Configurazione degli strumenti di telemetria e monitoraggio remoto." },
      { step: "02", name: "Support", text: "Gestione dei ticket secondo le priorità definite negli SLA." },
      { step: "03", name: "Reporting", text: "Incontri periodici per analizzare le performance e pianificare miglioramenti." }
    ],
    stack: ["ServiceNow", "Jira Service Management", "AnyDesk Enterprise"],
    faqs: [
      { q: "Quali sono i tempi di risposta?", a: "I tempi variano in base al piano scelto, ma garantiamo l'intervento entro 1 ora per i ticket critici." },
      { q: "Supportate anche utenti in smart working?", a: "Certamente, gestiamo il supporto remoto ovunque si trovi il tuo team." }
    ]
  },
];

export const PROJECTS = [
  {
    id: 1,
    client: "Finance Corp",
    role: "Cybersecurity",
    desc: "Implementazione Zero Trust Architecture per un gruppo bancario internazionale.",
    tags: ["Tool", "Framework"],
    imageText: "Immagine"
  }
];

export const HISTORY = [
  { year: "2010", title: "Le Fondamenta", desc: "Nascita come System Integrator." },
  { year: "2015", title: "L'Espansione", desc: "Apertura divisione Cloud & DevOps." },
  { year: "2020", title: "La Svolta", desc: "Focus strategico su Digital Transformation." },
  { year: "2024", title: "Il Futuro", desc: "Integrazione AI nei processi aziendali." }
];