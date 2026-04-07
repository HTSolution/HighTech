export const SERVICES_GRID_CONTENT = {
  it: {
    philosophy: {
      tag: "Il Nostro Core",
      quote: "Progettiamo, realizziamo e gestiamo infrastrutture IT sicure e ad alta affidabilità. soluzioni visionarie."
    },
    header: {
      title: "Cosa",
      subtitle: "Facciamo",
      claim: "Sviluppiamo soluzioni su misura per PA, PMI e settore navale."
    }
  },
  en: {
    philosophy: {
      tag: "Our Core",
      quote: "We design, build and manage secure and high-reliability IT infrastructures. visionary solutions."
    },
    header: {
      title: "What",
      subtitle: "We Do",
      claim: "We develop custom solutions for Govt, SMBs, and the maritime sector."
    }
  }
};

export const SERVICES_DATA = {
  it: [
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
        { q: "Operate anche su motonavi?", a: "Sì, realizziamo e certifichiamo reti di bordo garantendo la compliance NIS navale." },
        { q: "Garantite collegamenti sicuri tra filiali?", a: "Certamente, configuriamo VPN multi-sede crittografate." }
      ]
    },
    {
      id: "02",
      slug: "server-virtualization",
      title: "Server & Virtualizzazione",
      desc: "Implementiamo ambienti virtualizzati (Proxmox, ESXi), cluster geografici in alta affidabilità e database MySQL.",
      longDesc: "Costruiamo le fondamenta server della tua azienda. Garantiamo stabilità totale tramite cluster geografici e alta affidabilità.",
      details: [
        { label: "Tecnologia", value: "Virtualizzazione" },
        { label: "Obiettivo", value: "Business Continuity" }
      ],
      metrics: [
        { label: "Virtualizzazione", value: "Proxmox / ESXi" },
        { label: "Disponibilità", value: "Cluster HA" }
      ],
      fullContent: "La perdita di dati non è un'opzione. Progettiamo cluster in Alta Affidabilità (HA) su Proxmox o ESXi, assicurando operatività costante.",
      process: [
        { step: "01", name: "Architettura", text: "Definizione delle risorse necessarie (CPU, RAM, Storage)." },
        { step: "02", name: "Virtualizzazione", text: "Setup degli hypervisor e migrazione senza disservizi." },
        { step: "03", name: "Resilienza", text: "Configurazione di Cluster Geografici." }
      ],
      stack: ["Proxmox", "VMware ESXi", "MySQL", "Postfix"],
      faqs: [
        { q: "Cosa succede se un server si guasta?", a: "Con i Cluster HA, le macchine virtuali vengono migrate in automatico su nodi sani." },
        { q: "Gestite server di posta?", a: "Sì, configuriamo server basati su Postfix." }
      ]
    },
    {
      id: "03",
      slug: "cybersecurity-compliance",
      title: "Cybersecurity & Compliance",
      desc: "Hardening sistemi, segmentazione IT/OT, protezione endpoint con Microsoft 365 e Intune, adeguamento alla direttiva NIS.",
      longDesc: "Garantiamo la massima sicurezza dei tuoi dati e dispositivi. Curiamo l'adeguamento normativo per infrastrutture critiche.",
      details: [
        { label: "Framework", value: "Direttiva NIS" },
        { label: "Endpoint", value: "Gestione Centralizzata" }
      ],
      metrics: [
        { label: "Governance", value: "Microsoft 365" },
        { label: "Protezione", value: "IT / OT Segregation" }
      ],
      fullContent: "Uniamo la governance del Modern Workplace con protocolli di sicurezza stringenti e compliance NIS per settori strategici.",
      process: [
        { step: "01", name: "Assessment", text: "Analisi delle vulnerabilità e della compliance normativa." },
        { step: "02", name: "Policies", text: "Creazione regole aziendali (Conditional Access)." },
        { step: "03", name: "Endpoint", text: "Enrollment dei dispositivi sotto Microsoft Intune." }
      ],
      stack: ["Microsoft 365", "Microsoft Intune", "IT/OT Security", "Zero Trust"],
      faqs: [
        { q: "Gestite i dispositivi da remoto?", a: "Assolutamente sì, tramite Microsoft Intune." },
        { q: "Ci aiutate con la NIS?", a: "Sì, offriamo consulenza e interventi tecnici mirati." }
      ]
    },
    {
      id: "04",
      slug: "software-web",
      title: "Software & Web Applications",
      desc: "Sviluppiamo applicazioni web complete (backend e frontend), integriamo sistemi hardware e realizziamo soluzioni personalizzate.",
      longDesc: "Scriviamo codice su misura per applicazioni web complesse e integrazioni hardware/software personalizzate per PMI e PA.",
      details: [
        { label: "Target", value: "PMI e PA" },
        { label: "Sviluppo", value: "Full Stack Custom" }
      ],
      metrics: [
        { label: "Frontend", value: "Reattivo" },
        { label: "Backend", value: "Scalabile" }
      ],
      fullContent: "Sviluppiamo internamente portali ad alte prestazioni o software in grado di interfacciarsi con macchinari industriali.",
      process: [
        { step: "01", name: "Analisi", text: "Studio dei flussi aziendali e definizione dei requisiti." },
        { step: "02", name: "Sviluppo", text: "Creazione frontend intuitivi e backend robusti." },
        { step: "03", name: "Integrazione", text: "Connessione del nuovo software con ERP o API esterne." }
      ],
      stack: ["React / Next.js", "Node.js", "TypeScript", "Integrazioni HW/SW"],
      faqs: [
        { q: "Lavorate con la PA?", a: "Sì, rispettando i requisiti di accessibilità e sicurezza." },
        { q: "Create API?", a: "Certo, sviluppiamo middleware per far dialogare sistemi diversi." }
      ]
    },
    {
      id: "05",
      slug: "ai-agents",
      title: "Agenti IA",
      desc: "Progettiamo agenti intelligenti per l'automazione dei processi e l'integrazione avanzata con i sistemi aziendali.",
      longDesc: "Sviluppiamo agenti IA capaci di automatizzare compiti ripetitivi e interagire attivamente con i tuoi dati aziendali.",
      details: [
        { label: "Tecnologia", value: "Intelligenza Artificiale" },
        { label: "Obiettivo", value: "Automazione Processi" }
      ],
      metrics: [
        { label: "Efficienza", value: "Massimizzata" },
        { label: "Integrazione", value: "Seamless" }
      ],
      fullContent: "Creiamo Agenti IA in grado di leggere documentazione complessa e interrogare i tuoi database in sicurezza.",
      process: [
        { step: "01", name: "Use Case", text: "Individuazione dei processi manuali da automatizzare." },
        { step: "02", name: "Training", text: "Addestramento degli agenti (RAG) sui dati aziendali." },
        { step: "03", name: "Deployment", text: "Integrazione sicura dell'Agente IA nei software esistenti." }
      ],
      stack: ["LLMs", "RAG", "Python", "Automation API"],
      faqs: [
        { q: "Cosa fa un Agente IA?", a: "Smista ticket, analizza contratti e genera report dai database." },
        { q: "I dati sono al sicuro?", a: "Sì, utilizziamo architetture private che non espongono i dati all'esterno." }
      ]
    },
    {
      id: "06",
      slug: "assistance-helpdesk",
      title: "Assistenza & Help Desk",
      desc: "Gestiamo parchi macchine da 5 a 80 PC, garantendo supporto tecnico continuativo e manutenzione proattiva.",
      longDesc: "Diventiamo il tuo reparto IT in outsourcing, garantendo assistenza tempestiva e risolutiva per ogni esigenza quotidiana.",
      details: [
        { label: "Servizio", value: "Help Desk H24/8x5" },
        { label: "Target", value: "5 - 80 Postazioni" }
      ],
      metrics: [
        { label: "Assistenza", value: "Continuativa" },
        { label: "Supporto", value: "Remoto / On-site" }
      ],
      fullContent: "Gestiamo la tua flotta macchine in totale serenità, intervenendo rapidamente per ogni problematica hardware o software.",
      process: [
        { step: "01", name: "Censimento", text: "Installazione dei tool di teleassistenza su tutto l'hardware." },
        { step: "02", name: "Ticketing", text: "Gestione priorizzata delle richieste tramite sistema dedicato." },
        { step: "03", name: "Manutenzione", text: "Aggiornamenti periodici e monitoraggio preventivo." }
      ],
      stack: ["Help Desk", "Remote Desktop", "Asset Management", "Troubleshooting"],
      faqs: [
        { q: "Intervenite on-site?", a: "Il supporto remoto risolve il 90% dei casi. Interveniamo on-site per problemi fisici." },
        { q: "Gestite gli onboarding?", a: "Sì, prepariamo hardware e account per i nuovi dipendenti." }
      ]
    }
  ],
  en: [
    {
      id: "01",
      slug: "infrastructure-networking",
      title: "Infrastructure & Networking",
      desc: "From structured cabling to VLAN segmentation and secure multi-site VPN network design.",
      longDesc: "We design and implement solid corporate networks. From cabling to NIS compliance for the maritime sector.",
      details: [
        { label: "Domain", value: "Networking & Security" },
        { label: "Specialty", value: "Marine & IoT" }
      ],
      metrics: [
        { label: "Segmentation", value: "VLAN / VPN" },
        { label: "Compliance", value: "NIS Ready" }
      ],
      fullContent: "We ensure secure communication between your branches (multi-site VPN) and protect the perimeter with advanced firewalls.",
      process: [
        { step: "01", name: "Assessment", text: "Analysis of existing cabling and security/operational requirements." },
        { step: "02", name: "Design", text: "VLAN, site-to-site VPN design and advanced firewalling." },
        { step: "03", name: "Deploy", text: "Configuration and network certification, including on-board." }
      ],
      stack: ["Cisco", "Fortinet", "VLAN", "Multi-site VPN"],
      faqs: [
        { q: "Do you operate on vessels?", a: "Yes, we create and certify on-board networks ensuring NIS compliance." },
        { q: "Do you guarantee branch connectivity?", a: "Certainly, we configure encrypted multi-site VPNs." }
      ]
    },
    {
      id: "02",
      slug: "server-virtualization",
      title: "Server & Virtualization",
      desc: "We implement virtualized environments (Proxmox, ESXi), high-availability clusters and MySQL databases.",
      longDesc: "We build your company's server foundation. We guarantee total stability through geographic clusters and high availability.",
      details: [
        { label: "Technology", value: "Virtualization" },
        { label: "Goal", value: "Business Continuity" }
      ],
      metrics: [
        { label: "Virtualization", value: "Proxmox / ESXi" },
        { label: "Availability", value: "HA Cluster" }
      ],
      fullContent: "Data loss is not an option. We design High Availability (HA) clusters on Proxmox or ESXi to ensure constant uptime.",
      process: [
        { step: "01", name: "Architecture", text: "Definition of required resources (CPU, RAM, Storage)." },
        { step: "02", name: "Virtualization", text: "Hypervisor setup and seamless migration." },
        { step: "03", name: "Resilience", text: "Geographic Cluster configuration." }
      ],
      stack: ["Proxmox", "VMware ESXi", "MySQL", "Postfix"],
      faqs: [
        { q: "What happens if a server fails?", a: "With HA Clusters, virtual machines automatically migrate to healthy nodes." },
        { q: "Do you manage mail servers?", a: "Yes, we maintain robust mail servers based on Postfix." }
      ]
    },
    {
      id: "03",
      slug: "cybersecurity-compliance",
      title: "Cybersecurity & Compliance",
      desc: "System hardening, IT/OT segmentation, endpoint protection with Microsoft 365 and Intune, NIS compliance.",
      longDesc: "We ensure maximum security for your data and devices. We manage regulatory compliance for critical infrastructures.",
      details: [
        { label: "Framework", value: "NIS Directive" },
        { label: "Endpoint", value: "Centralized Management" }
      ],
      metrics: [
        { label: "Governance", value: "Microsoft 365" },
        { label: "Protection", value: "IT / OT Segregation" }
      ],
      fullContent: "We combine Modern Workplace governance with strict security protocols and NIS compliance for strategic sectors.",
      process: [
        { step: "01", name: "Assessment", text: "Analysis of vulnerabilities and regulatory compliance status." },
        { step: "02", name: "Policies", text: "Corporate rule creation (Conditional Access) and hardening." },
        { step: "03", name: "Endpoint", text: "Device enrollment under Microsoft Intune for total control." }
      ],
      stack: ["Microsoft 365", "Microsoft Intune", "IT/OT Security", "Zero Trust"],
      faqs: [
        { q: "Can you manage devices remotely?", a: "Absolutely, through Microsoft Intune." },
        { q: "Do you assist with NIS?", a: "Yes, we offer technical interventions to align with NIS requirements." }
      ]
    },
    {
      id: "04",
      slug: "software-web",
      title: "Software & Web Applications",
      desc: "We develop full-stack web applications, integrate hardware systems and create custom solutions.",
      longDesc: "When standard solutions aren't enough, we write custom code. We create complex web applications and hardware/software integrations.",
      details: [
        { label: "Target", value: "SMBs & Govt" },
        { label: "Development", value: "Full Stack Custom" }
      ],
      metrics: [
        { label: "Frontend", value: "Responsive" },
        { label: "Backend", value: "Scalable" }
      ],
      fullContent: "Whether you need a high-performance portal or software that interfaces with production machinery, we build it.",
      process: [
        { step: "01", name: "Analysis", text: "Study of business flows and definition of technical/UX requirements." },
        { step: "02", name: "Development", text: "Iterative creation of intuitive frontends and robust backends." },
        { step: "03", name: "Integration", text: "Connecting new software with ERP, APIs or existing hardware." }
      ],
      stack: ["React / Next.js", "Node.js", "TypeScript", "HW/SW Integration"],
      faqs: [
        { q: "Do you work with Govt?", a: "Yes, complying with strict accessibility and security requirements." },
        { q: "Can you make software talk?", a: "Yes, we develop middleware and APIs to bridge different systems." }
      ]
    },
    {
      id: "05",
      slug: "ai-agents",
      title: "AI Agents",
      desc: "We design intelligent agents for process automation and advanced integration with business systems.",
      longDesc: "We bring Artificial Intelligence to your daily business. We develop agents capable of automating tasks and interacting with data.",
      details: [
        { label: "Technology", value: "Artificial Intelligence" },
        { label: "Goal", value: "Process Automation" }
      ],
      metrics: [
        { label: "Efficiency", value: "Maximized" },
        { label: "Integration", value: "Seamless" }
      ],
      fullContent: "We create AI Agents capable of reading complex documentation and querying your databases securely.",
      process: [
        { step: "01", name: "Use Case", text: "Identifying bottlenecks and manual processes to automate." },
        { step: "02", name: "Training", text: "Training agents (RAG) on specific company data and policies." },
        { step: "03", name: "Deployment", text: "Secure integration of the AI Agent into existing workflows." }
      ],
      stack: ["LLMs", "RAG", "Python", "Automation API"],
      faqs: [
        { q: "What can an AI Agent do?", a: "Sort support tickets, analyze contracts and generate reports." },
        { q: "Is company data safe?", a: "Yes, we use private architectures so data never leaves your perimeter." }
      ]
    },
    {
      id: "06",
      slug: "assistance-helpdesk",
      title: "Assistance & Help Desk",
      desc: "We manage fleets of 5 to 80 PCs, ensuring continuous technical support and proactive maintenance.",
      longDesc: "We become your outsourced IT department, providing timely and effective assistance for daily needs.",
      details: [
        { label: "Service", value: "Help Desk 24/7" },
        { label: "Target", value: "5 - 80 Workstations" }
      ],
      metrics: [
        { label: "Assistance", value: "Continuous" },
        { label: "Support", value: "Remote / On-site" }
      ],
      fullContent: "We manage your entire device fleet smoothly, intervening quickly for any hardware or software issue.",
      process: [
        { step: "01", name: "Onboarding", text: "Hardware inventory and installation of remote support tools." },
        { step: "02", name: "Ticketing", text: "Prioritized request management via dedicated Help Desk system." },
        { step: "03", name: "Maintenance", text: "Periodic updates and preventive monitoring." }
      ],
      stack: ["Help Desk", "Remote Desktop", "Asset Management", "Troubleshooting"],
      faqs: [
        { q: "Do you intervene on-site?", a: "Remote support solves 90% of cases. We intervene on-site for hardware issues." },
        { q: "Do you handle onboarding?", a: "Yes, we prepare hardware and accounts for new hires in advance." }
      ]
    }
  ]
};