export const SERVICES_CONTENT = {
  philosophy: {
    tag: "Il Nostro Core",
    quote: "Progettiamo, realizziamo e gestiamo infrastrutture IT sicure e ad alta affidabilità."
  },
  header: {
    title: "Cosa",
    subtitle: "Facciamo",
    claim: "Sviluppiamo soluzioni su misura per PA, PMI e settore navale."
  }
};

export const SERVICES = [
  {
    id: "01",
    slug: "infrastrutture-networking",
    title: "Infrastrutture & Networking",
    desc: "Dal cablaggio strutturato alla segmentazione VLAN, fino alla progettazione di reti multi-sede connesse tramite VPN sicure.",
    longDesc: "Progettiamo e implementiamo reti aziendali solide e sicure. Dal cablaggio strutturato alla segmentazione VLAN, fino all'adeguamento alla compliance NIS in ambito navale.",
    details: [
      { label: "Ambito", value: "Reti e Sicurezza" },
      { label: "Specialità", value: "Ambito Navale & IoT" }
    ],
    metrics: [
      { label: "Segmentazione", value: "VLAN / VPN" },
      { label: "Compliance", value: "NIS Ready" }
    ],
    fullContent: "Garantiamo la comunicazione sicura tra le tue sedi (VPN multi-sede), proteggendo il perimetro con firewall avanzati e gestendo asset IT e IoT anche in contesti complessi come le motonavi.",
    process: [
      { step: "01", name: "Assessment", text: "Analisi del cablaggio esistente e dei requisiti di sicurezza e operatività." },
      { step: "02", name: "Design", text: "Progettazione VLAN, VPN site-to-site e regole di firewalling avanzato." },
      { step: "03", name: "Deploy", text: "Stesura fisica, configurazione e certificazione della rete, anche a bordo." }
    ],
    stack: ["Cisco", "Fortinet", "VLAN", "VPN Multi-sede"],
    faqs: [
      { q: "Operate anche su motonavi?", a: "Sì, realizziamo e certifichiamo reti di bordo garantendo la compliance NIS navale e la segmentazione IT/OT." },
      { q: "Garantite collegamenti sicuri tra diverse filiali?", a: "Certamente, configuriamo VPN multi-sede crittografate per garantire un flusso di lavoro continuo e sicuro." }
    ]
  },
  {
    id: "02",
    slug: "server-virtualizzazione",
    title: "Server & Virtualizzazione",
    desc: "Implementiamo ambienti virtualizzati (Proxmox, ESXi), cluster geografici in alta affidabilità, database MySQL e server web.",
    longDesc: "Costruiamo le fondamenta server della tua azienda. Che si tratti di server Web, Posta (Postfix) o Database MySQL, garantiamo stabilità totale tramite cluster geografici.",
    details: [
      { label: "Tecnologia", value: "Virtualizzazione" },
      { label: "Obiettivo", value: "Business Continuity" }
    ],
    metrics: [
      { label: "Virtualizzazione", value: "Proxmox / ESXi" },
      { label: "Disponibilità", value: "Cluster HA" }
    ],
    fullContent: "La perdita di dati o l'interruzione del servizio non sono un'opzione. Progettiamo cluster in Alta Affidabilità (HA) su Proxmox o ESXi, assicurando che i tuoi database e applicativi rimangano sempre operativi.",
    process: [
      { step: "01", name: "Architettura", text: "Definizione delle risorse necessarie (CPU, RAM, Storage) in base ai carichi di lavoro." },
      { step: "02", name: "Virtualizzazione", text: "Setup degli hypervisor (Proxmox/ESXi) e migrazione senza disservizi." },
      { step: "03", name: "Resilienza", text: "Configurazione di Cluster Geografici e test di Business Continuity." }
    ],
    stack: ["Proxmox", "VMware ESXi", "MySQL", "Postfix"],
    faqs: [
      { q: "Cosa succede se un server fisico si guasta?", a: "Grazie ai Cluster HA (Alta Affidabilità), le macchine virtuali vengono migrate e riavviate in automatico su un altro nodo sano." },
      { q: "Gestite server di posta interni?", a: "Sì, configuriamo e manuteniamo server di posta robusti basati su Postfix." }
    ]
  },
  {
    id: "03",
    slug: "cybersecurity-compliance",
    title: "Cybersecurity & Compliance",
    desc: "Hardening sistemi, segmentazione IT/OT, protezione endpoint con Microsoft 365 e Intune, adeguamento alla direttiva NIS.",
    longDesc: "Garantiamo la massima sicurezza dei tuoi dati e dispositivi. Centralizziamo il controllo degli accessi aziendali e curiamo l'adeguamento normativo per infrastrutture critiche.",
    details: [
      { label: "Framework", value: "Direttiva NIS" },
      { label: "Endpoint", value: "Gestione Centralizzata" }
    ],
    metrics: [
      { label: "Governance", value: "Microsoft 365" },
      { label: "Protezione", value: "IT / OT Segregation" }
    ],
    fullContent: "Uniamo la governance del Modern Workplace (tenant M365, policy Intune su laptop e smartphone) con protocolli di sicurezza stringenti, dall'hardening dei sistemi fino alla piena compliance NIS per i settori strategici.",
    process: [
      { step: "01", name: "Assessment", text: "Analisi delle vulnerabilità, dello stato del tenant e della compliance normativa." },
      { step: "02", name: "Policies & Hardening", text: "Creazione regole aziendali (Conditional Access) e rafforzamento dei sistemi." },
      { step: "03", name: "Endpoint Management", text: "Enrollment dei dispositivi sotto Microsoft Intune per un controllo totale e remoto." }
    ],
    stack: ["Microsoft 365", "Microsoft Intune", "IT/OT Security", "Zero Trust"],
    faqs: [
      { q: "Potete gestire i dispositivi aziendali da remoto?", a: "Assolutamente sì. Con Intune possiamo configurare, aggiornare e, se necessario, formattare PC e smartphone a distanza." },
      { q: "Ci aiutate con la direttiva NIS?", a: "Sì, offriamo consulenza e interventi tecnici mirati per allineare l'infrastruttura ai requisiti della NIS." }
    ]
  },
  {
    id: "04",
    slug: "software-web",
    title: "Software & Web Applications",
    desc: "Sviluppiamo applicazioni web complete (backend e frontend), integriamo sistemi hardware e realizziamo soluzioni personalizzate.",
    longDesc: "Quando le soluzioni standard non bastano, scriviamo codice su misura. Realizziamo applicazioni web complesse e integrazioni hardware/software personalizzate per PMI e PA.",
    details: [
      { label: "Target", value: "PMI e PA" },
      { label: "Sviluppo", value: "Full Stack Custom" }
    ],
    metrics: [
      { label: "Frontend", value: "Reattivo & Accessibile" },
      { label: "Backend", value: "Scalabile & Sicuro" }
    ],
    fullContent: "Che tu abbia bisogno di un portale aziendale ad alte prestazioni o di un software in grado di interfacciarsi in tempo reale con i macchinari della tua linea produttiva, noi lo sviluppiamo internamente.",
    process: [
      { step: "01", name: "Analisi", text: "Studio dei flussi aziendali e definizione dei requisiti tecnici e UI/UX." },
      { step: "02", name: "Sviluppo", text: "Creazione iterativa di frontend intuitivi e backend robusti." },
      { step: "03", name: "Integrazione", text: "Connessione del nuovo software con ERP, API esterne o hardware esistente." }
    ],
    stack: ["React / Next.js", "Node.js", "TypeScript", "Integrazioni HW/SW"],
    faqs: [
      { q: "Lavorate con la Pubblica Amministrazione?", a: "Sì, forniamo soluzioni customizzate rispettando i rigidi requisiti di accessibilità e sicurezza della PA." },
      { q: "Potete far comunicare due software diversi?", a: "Certo, sviluppiamo middleware e API per far dialogare sistemi eterogenei senza disperdere dati." }
    ]
  },
  {
    id: "05",
    slug: "agenti-ia",
    title: "Agenti IA",
    desc: "Progettiamo agenti intelligenti per l'automazione dei processi e l'integrazione avanzata con i sistemi aziendali.",
    longDesc: "Portiamo l'Intelligenza Artificiale nel tuo business quotidiano. Sviluppiamo agenti IA capaci di automatizzare compiti ripetitivi e interagire attivamente con i tuoi dati.",
    details: [
      { label: "Tecnologia", value: "Intelligenza Artificiale" },
      { label: "Obiettivo", value: "Automazione Processi" }
    ],
    metrics: [
      { label: "Efficienza", value: "Massimizzata" },
      { label: "Integrazione", value: "Seamless" }
    ],
    fullContent: "Non parliamo solo di chatbot generici. Creiamo veri e propri Agenti IA in grado di leggere documentazione complessa, interrogare i tuoi database aziendali e prendere decisioni basate su flussi di lavoro predefiniti.",
    process: [
      { step: "01", name: "Use Case", text: "Individuazione dei colli di bottiglia e dei processi manuali da automatizzare." },
      { step: "02", name: "Training", text: "Addestramento degli agenti (RAG) sui dati e sulle policy specifiche dell'azienda." },
      { step: "03", name: "Deployment", text: "Integrazione sicura dell'Agente IA nei software o nelle intranet già in uso." }
    ],
    stack: ["LLMs", "RAG", "Python", "Automation API"],
    faqs: [
      { q: "Cosa può fare concretamente un Agente IA?", a: "Può smistare ticket di assistenza, analizzare contratti, rispondere a clienti attingendo alle procedure interne o generare report automatici dai database." },
      { q: "I miei dati aziendali sono al sicuro?", a: "Assolutamente sì. Utilizziamo architetture private e modelli configurati per non far mai uscire i tuoi dati dal perimetro aziendale." }
    ]
  },
  {
    id: "06",
    slug: "assistenza-helpdesk",
    title: "Assistenza & Help Desk",
    desc: "Gestiamo parchi macchine da 5 a 80 PC, garantendo supporto tecnico continuativo, VPN site-to-site e manutenzione proattiva.",
    longDesc: "Il nostro Core Business storico. Diventiamo il tuo vero e proprio reparto IT in outsourcing, garantendo assistenza tempestiva e risolutiva per ogni esigenza quotidiana.",
    details: [
      { label: "Servizio", value: "Help Desk H24/8x5" },
      { label: "Target", value: "5 - 80 Postazioni" }
    ],
    metrics: [
      { label: "Assistenza", value: "Continuativa" },
      { label: "Supporto", value: "Remoto / On-site" }
    ],
    fullContent: "Gestiamo la tua intera flotta macchine in totale serenità. Che un utente abbia un problema software bloccante o che serva attivare urgentemente una postazione in VPN, il nostro Help Desk interviene in tempi rapidissimi.",
    process: [
      { step: "01", name: "Presa in Carico", text: "Censimento completo dell'hardware aziendale e installazione dei tool di teleassistenza." },
      { step: "02", name: "Ticketing", text: "Gestione ordinata e priorizzata delle richieste tramite il nostro sistema di Help Desk dedicato." },
      { step: "03", name: "Manutenzione", text: "Aggiornamenti periodici, monitoraggio preventivo e supporto operativo quotidiano." }
    ],
    stack: ["Help Desk", "Remote Desktop", "Asset Management", "Troubleshooting"],
    faqs: [
      { q: "Intervenite anche di persona?", a: "Il supporto remoto è immediato e risolve il 90% dei casi. Interveniamo tempestivamente on-site in caso di problemi fisici all'hardware o alla rete." },
      { q: "Come gestite i nuovi dipendenti?", a: "Prepariamo in anticipo la postazione (hardware, account, permessi software) in modo che tutto sia pronto per il primo giorno di lavoro." }
    ]
  }
];

export const SECTORS = [
  {
    title: "Pubblica Amministrazione",
    features: ["Gestione tenant M365", "Sicurezza endpoint", "Continuità operativa", "Compliance normativa"]
  },
  {
    title: "PMI Multi-Sede",
    features: ["VPN site-to-site", "Cluster HA e Backup DR", "Gestione parco macchine", "Supporto operativo"]
  },
  {
    title: "Settore Navale",
    features: ["Reti di bordo", "Segmentazione IT/OT", "Analisi asset IT e IoT", "Adeguamento Direttiva NIS"]
  }
];