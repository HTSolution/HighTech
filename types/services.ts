export interface ServiceMetric {
  label: string;
  value: string;
}

export interface ServiceProcessStep {
  step: string;
  name: string;
  text: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  desc: string;
  longDesc: string;
  fullContent?: string;
  metrics?: ServiceMetric[];
  stack?: string[];
  process?: ServiceProcessStep[];
  // Aggiungi qui altri campi se necessari
}

export interface ServicesContent {
  philosophy: { tag: string; quote: string };
  header: { title: string; subtitle: string; claim: string };
}