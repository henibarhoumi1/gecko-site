// Source of truth: gecko/plan/offers-and-pricing.md. Prices in TND, excluding VAT.
export type Offer = { key: string; name: string; reels?: number; more?: boolean; items: { en: string[]; fr: string[] }; launch: number; standard?: number; from?: boolean; monthly: boolean };

export const test: Offer = {
  key: 'test', name: 'Test Campaign', launch: 1000, standard: 1500, monthly: false,
  items: {
    en: ['3 angles, 1 production day', '3 reels with 2 hooks each (6 ads)', '1 carousel', 'Results read-out after 14 days'],
    fr: ['3 angles, 1 journée de production', '3 reels avec 2 accroches chacun (6 pubs)', '1 carrousel', 'Bilan des résultats après 14 jours'],
  },
};

export const monthly: Offer[] = [
  {
    key: 'regular', name: 'Regular', reels: 10, launch: 2200, standard: 3200, monthly: true,
    items: {
      en: ['1 production day', '2 hooks per reel', '4 statics', '1 carousel', 'Monthly report'],
      fr: ['1 journée de production', '2 accroches par reel', '4 visuels fixes', '1 carrousel', 'Rapport mensuel'],
    },
  },
  {
    key: 'pro', name: 'Pro', reels: 15, launch: 3200, standard: 3900, monthly: true,
    items: {
      en: ['1 production day', '2 hooks per reel', '6 statics', '2 recut ads from your footage', '2 carousels', 'Monthly report'],
      fr: ['1 journée de production', '2 accroches par reel', '6 visuels fixes', '2 pubs remontées à partir de vos images', '2 carrousels', 'Rapport mensuel'],
    },
  },
  {
    key: 'partner', name: 'Creative Partner', reels: 20, more: true, launch: 4800, from: true, monthly: true,
    items: {
      en: ['As many reels as your volume needs', '3 hooks per reel', 'Statics, carousels and recut ads', 'We run your Meta ads', 'Priority shoot dates', 'A direct line to the team, 7 days a week', 'Weekly report'],
      fr: ['Autant de reels que votre volume l’exige', '3 accroches par reel', 'Visuels fixes, carrousels et pubs remontées', 'On gère vos pubs Meta', 'Dates de tournage prioritaires', 'Une ligne directe avec l’équipe, 7 jours sur 7', 'Rapport hebdomadaire'],
    },
  },
];

export const campaign: Offer = {
  key: 'campaign', name: 'Campaign', launch: 3600, standard: 4800, monthly: false,
  items: {
    en: ['For a launch, an opening, Ramadan or a season', 'Concept and 1 production day', '10 reels, 2 carousels'],
    fr: ['Pour un lancement, une ouverture, Ramadan ou une saison', 'Concept et 1 journée de production', '10 reels, 2 carrousels'],
  },
};

export const audit = {
  name: 'Ad Audit', price: 150,
  text: {
    en: 'Not ready to shoot? A 20-minute video review of your current ads and Instagram, plus 5 hook ideas for your products. Fully credited if you book a Test Campaign within 30 days.',
    fr: 'Pas prêt à tourner ? Une revue vidéo de 20 minutes de vos pubs et de votre Instagram, plus 5 idées d’accroche pour vos produits. Entièrement déduite si vous réservez un Test Campaign sous 30 jours.',
  },
};

export const fmt = (n: number, lang: 'en' | 'fr') => n.toLocaleString(lang === 'en' ? 'en-US' : 'fr-FR').replace(/\s/g, ' ');
