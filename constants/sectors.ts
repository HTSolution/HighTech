export const NAVALE_PAGE_DATA = {
  it: {
    tag: "Infrastrutture Critiche",
    currentPage: "Navale & Marittimo",
    header: {
      tag: "Maritime & Naval",
      titleLight: "Sicurezza e Reti in",
      titleBold: "Ambiente Navale",
      description: "Progettiamo e mettiamo in sicurezza reti di bordo, garantendo la segmentazione IT/OT e la piena conformità alla Direttiva NIS europea."
    },
    sidebar: {
      tag: "Highlight Navali",
      nis: { label: "Compliance Totale", value: "NIS2" },
      itot: { label: "Segregazione Reti", value: "IT / OT" },
      uptime: { label: "Monitoraggio Asset", value: "24/7" },
      boxTitle: "Cos'è la Direttiva NIS?",
      boxText: "È la direttiva UE sulla cybersicurezza che classifica il settore marittimo come 'infrastruttura critica'. Il mancato adeguamento comporta sanzioni fino a 10 Milioni di Euro.",
      boxLink: "Approfondisci la Direttiva NIS2"
    },
    intro: {
      titleLight: "Il mare non è più un",
      titleBold: "porto sicuro",
      titleSuffix: "per i dati.",
      paragraphs: [
        "Fino a pochi anni fa, le reti a bordo delle navi operavano in totale isolamento. Oggi, le motonavi moderne sono 'data center galleggianti', costantemente connessi con la terraferma tramite sistemi satellitari e 5G.",
        "Questa iper-connettività ha esposto il settore marittimo ad attacchi ransomware devastanti. Per questo motivo, l'Unione Europea ha imposto adeguamenti drastici tramite la Direttiva NIS."
      ]
    },
    approccio: {
      tag: "L'Approccio HT Solution"
    },
    solutions: [
      {
        id: "01",
        title: "Segregazione IT / OT",
        text: "Separazione fisica e logica (VLAN) tra la rete aziendale (IT) e la rete operativa che controlla i sistemi vitali della nave (OT)."
      },
      {
        id: "02",
        title: "Asset & Vulnerability",
        text: "Mappatura completa di tutti i dispositivi connessi a bordo (IoT, sensori, radar) e installazione firewall di ultima generazione."
      },
      {
        id: "03",
        title: "Continuità Operativa",
        text: "Creazione di cluster ad alta affidabilità (HA) a bordo per garantire sistemi attivi anche in condizioni marine estreme."
      },
      {
        id: "04",
        title: "Audit & Compliance NIS",
        text: "Supporto tecnico e burocratico per la conformità alla direttiva NIS con reportistica e protocolli di incident response."
      }
    ],
    cta: {
      title: "Metti in sicurezza la tua flotta.",
      desc: "Prenota un assessment tecnico preliminare. Analizzeremo lo stato della tua infrastruttura di bordo e la distanza dalla compliance NIS.",
      button: "Richiedi Assessment Navale"
    }
  },
  en: {
    tag: "Critical Infrastructure",
    currentPage: "Naval & Maritime",
    header: {
      tag: "Maritime & Naval",
      titleLight: "Security and Networks in",
      titleBold: "Naval Environment",
      description: "We design and secure on-board networks, ensuring IT/OT segmentation and full compliance with the European NIS Directive."
    },
    sidebar: {
      tag: "Naval Highlights",
      nis: { label: "Full Compliance", value: "NIS2" },
      itot: { label: "Network Segregation", value: "IT / OT" },
      uptime: { label: "Asset Monitoring", value: "24/7" },
      boxTitle: "What is the NIS Directive?",
      boxText: "It is the EU cybersecurity directive classifying the maritime sector as 'critical infrastructure'. Non-compliance leads to fines up to 10 Million Euros.",
      boxLink: "Learn more about NIS2 Directive"
    },
    intro: {
      titleLight: "The sea is no longer a",
      titleBold: "safe haven",
      titleSuffix: "for data.",
      paragraphs: [
        "Until a few years ago, shipboard networks operated in total isolation. Today, modern vessels are 'floating data centers', constantly connected to the mainland via satellite and 5G systems.",
        "This hyper-connectivity has exposed the maritime sector to devastating ransomware attacks. For this reason, the European Union has imposed drastic adjustments through the NIS Directive."
      ]
    },
    approccio: {
      tag: "The HT Solution Approach"
    },
    solutions: [
      {
        id: "01",
        title: "IT / OT Segregation",
        text: "Physical and logical separation (VLAN) between the corporate network (IT) and the operational network (OT)."
      },
      {
        id: "02",
        title: "Asset & Vulnerability",
        text: "Complete mapping of all on-board connected devices (IoT, sensors, radar) and next-gen firewall installation."
      },
      {
        id: "03",
        title: "Business Continuity",
        text: "Creation of on-board High Availability (HA) clusters to ensure systems stay active even in extreme sea conditions."
      },
      {
        id: "04",
        title: "NIS Audit & Compliance",
        text: "Technical and bureaucratic support for NIS compliance with detailed reporting and incident response protocols."
      }
    ],
    cta: {
      title: "Secure your fleet.",
      desc: "Book a preliminary technical assessment. We will analyze the state of your on-board infrastructure and NIS compliance gap.",
      button: "Request Naval Assessment"
    }
  }
};

export const PA_PAGE_DATA = {
  it: {
    tag: "Transizione Digitale",
    currentPage: "Pubblica Amministrazione",
    header: {
      tag: "Public Sector",
      titleLight: "Modernizzazione e",
      titleBold: "Sicurezza per la PA",
      description: "Affianchiamo gli enti locali e le amministrazioni nel percorso verso il cloud, garantendo massima protezione dei dati sensibili e piena conformità normativa."
    },
    sidebar: {
      tag: "Punti di Forza",
      m365: { label: "Tenant Governance", value: "M365" },
      trust: { label: "Sicurezza Endpoint", value: "Zero Trust" },
      agid: { label: "Compliance Normativa", value: "AgID / GDPR" }
    },
    intro: {
      titleLight: "L'innovazione senza",
      titleBold: "compromessi",
      titleSuffix: ".",
      paragraphs: [
        "Le Pubbliche Amministrazioni gestiscono quotidianamente enormi moli di dati sensibili dei cittadini. Molte infrastrutture IT pubbliche sono ancora ancorate a sistemi legacy obsoleti.",
        "Il nostro obiettivo è portare la PA nel futuro attraverso un approccio Modern Workplace strutturato, garantendo l'operatività ininterrotta dei servizi al cittadino."
      ]
    },
    approccio: {
      tag: "I Nostri Interventi per la PA"
    },
    interventions: [
      { title: "Gestione Tenant M365", text: "Configurazione, migrazione e governance completa dell'ecosistema Microsoft 365 per la collaborazione sicura tra uffici." },
      { title: "Sicurezza Endpoint (Intune)", text: "Gestione centralizzata di PC e mobili dell'ente. Policy stringenti per impedire la fuga di dati sensibili." },
      { title: "Business Continuity", text: "Progettiamo sistemi di Disaster Recovery per ripristinare i dati istantaneamente in caso di guasti o ransomware." },
      { title: "Supporto Operativo", text: "Un Help Desk dedicato pronto a risolvere i problemi quotidiani degli operatori pubblici, riducendo i tempi di fermo." }
    ],
    cta: {
      title: "Pronto a digitalizzare il tuo Ente?",
      desc: "Contattaci per valutare le soluzioni IT migliori nel rispetto dei requisiti AgID e delle normative sulla privacy.",
      button: "Parla con un Esperto"
    }
  },
  en: {
    tag: "Digital Transition",
    currentPage: "Public Administration",
    header: {
      tag: "Public Sector",
      titleLight: "Modernization and",
      titleBold: "Security for Gov",
      description: "We support local authorities and administrations in the transition to the cloud, ensuring maximum protection of sensitive data and full regulatory compliance."
    },
    sidebar: {
      tag: "Key Strengths",
      m365: { label: "Tenant Governance", value: "M365" },
      trust: { label: "Endpoint Security", value: "Zero Trust" },
      agid: { label: "Regulatory Compliance", value: "AgID / GDPR" }
    },
    intro: {
      titleLight: "Innovation without",
      titleBold: "compromise",
      titleSuffix: ".",
      paragraphs: [
        "Public Administrations manage massive amounts of sensitive citizen data daily. Many public IT infrastructures are still tied to obsolete legacy systems.",
        "Our goal is to bring the Public Sector into the future through a structured Modern Workplace approach, ensuring uninterrupted operation of citizen services."
      ]
    },
    approccio: {
      tag: "Our Interventions for Gov"
    },
    interventions: [
      { title: "M365 Tenant Management", text: "Full configuration, migration, and governance of the Microsoft 365 ecosystem for secure collaboration between departments." },
      { title: "Endpoint Security (Intune)", text: "Centralized management of the entity's PCs and mobile devices. Strict policies to prevent sensitive data leaks." },
      { title: "Business Continuity", text: "We design Disaster Recovery systems to instantly restore data in case of hardware failure or ransomware." },
      { title: "Operational Support", text: "A dedicated Help Desk ready to solve daily problems for public operators, reducing downtime." }
    ],
    cta: {
      title: "Ready to digitize your Authority?",
      desc: "Contact us to evaluate the best IT solutions in compliance with AgID requirements and privacy regulations.",
      button: "Talk to an Expert"
    }
  }
};

export const PMI_PAGE_DATA = {
  it: {
    tag: "Connettività e Produttività",
    currentPage: "PMI Multi-Sede",
    header: {
      tag: "Distributed Enterprise",
      titleLight: "Infrastrutture IT per",
      titleBold: "Aziende Distribuite",
      description: "Abbattiamo le distanze fisiche tra uffici, filiali e stabilimenti produttivi creando un'unica grande rete aziendale fluida, veloce e inattaccabile."
    },
    sidebar: {
      tag: "Metriche Operative",
      vpn: { label: "Site-to-Site Sicure", value: "VPN" },
      pc: { label: "Gestione Postazioni PC", value: "5 - 80" },
      ha: { label: "Alta Affidabilità", value: "HA" }
    },
    intro: {
      titleLight: "La forza di un",
      titleBold: "IT centralizzato",
      titleSuffix: ".",
      paragraphs: [
        "Quando un'azienda cresce e apre nuove sedi, la tecnologia può diventare il suo peggior collo di bottiglia. Documenti non sincronizzati e gestionali irraggiungibili rallentano il business.",
        "Progettiamo l'architettura per far comunicare tutte le tue sedi come se fossero nello stesso edificio, gestendo ogni problema tecnico in tempo reale."
      ]
    },
    approccio: {
      tag: "L'Architettura Multi-Sede"
    },
    solutions: [
      {
        title: "Connessioni VPN",
        text: "Creiamo tunnel crittografati tra gli uffici (VPN Site-to-Site) permettendo la condivisione sicura di database e risorse."
      },
      {
        title: "Disaster Recovery",
        text: "Sincronizziamo i backup tra le diverse sedi fisiche per garantire un recupero dati immediato e geo-ridondato."
      },
      {
        title: "Gestione Parco Macchine",
        text: "Configuriamo l'hardware per i dipendenti, gestendo centralmente licenze, policy di sicurezza e aggiornamenti."
      },
      {
        title: "Help Desk Proattivo",
        text: "Assistenza remota per i tuoi team ovunque si trovino, intervenendo prima che un blocco diventi un problema."
      }
    ],
    cta: {
      title: "Vuoi connettere le tue filiali?",
      desc: "Richiedi un audit gratuito. Scopri come abbattere i costi di gestione frammentati centralizzando la tua rete aziendale.",
      button: "Richiedi Audit Infrastrutturale"
    }
  },
  en: {
    tag: "Connectivity & Productivity",
    currentPage: "Multi-Site SMB",
    header: {
      tag: "Distributed Enterprise",
      titleLight: "IT Infrastructure for",
      titleBold: "Distributed Business",
      description: "We bridge the physical distance between offices, branches, and production sites by creating a single, fluid, and secure corporate network."
    },
    sidebar: {
      tag: "Operational Metrics",
      vpn: { label: "Secure Site-to-Site", value: "VPN" },
      pc: { label: "PC Station Management", value: "5 - 80" },
      ha: { label: "High Availability", value: "HA" }
    },
    intro: {
      titleLight: "The strength of a",
      titleBold: "centralized IT",
      titleSuffix: ".",
      paragraphs: [
        "When a company grows and opens new locations, technology can become its worst bottleneck. Out-of-sync documents and unreachable ERPs slow down the business.",
        "We design the architecture to make all your locations communicate as if they were in the same building, handling every technical issue in real-time."
      ]
    },
    approccio: {
      tag: "The Multi-Site Architecture"
    },
    solutions: [
      {
        title: "VPN Connections",
        text: "We create encrypted tunnels between offices (Site-to-Site VPN) allowing secure sharing of databases and resources."
      },
      {
        title: "Disaster Recovery",
        text: "We synchronize backups across different physical sites to ensure immediate, geo-redundant data recovery."
      },
      {
        title: "Hardware Management",
        text: "We configure hardware for employees, centrally managing licenses, security policies, and updates."
      },
      {
        title: "Proactive Help Desk",
        text: "Remote assistance for your teams wherever they are, intervening before a stall becomes a major issue."
      }
    ],
    cta: {
      title: "Want to connect your branches?",
      desc: "Request a free audit. Discover how to cut fragmented management costs by centralizing your business network.",
      button: "Request Infrastructure Audit"
    }
  }
};