// Prices and plans as Heni set them on 25 Oct (Test 999 one time, Regular 2,900 and Pro 3,800 launch prices with no original price shown, Creative Partner custom, no media buying) (they replace the draft in gecko/plan/offers-and-pricing.md). Prices in TND, excluding VAT.
export type Offer = { key: string; name: string; for?: { en: string; fr: string }; reels?: number; more?: boolean; items: { en: string[]; fr: string[] }; launch: number; standard?: number; top?: number; from?: boolean; custom?: boolean; once?: boolean; max?: number; shoot?: { en: string; fr: string }; review?: { en: string; fr: string }; monthly: boolean };

export const test: Offer = {
  key: 'test', name: 'Test', reels: 3, launch: 999, once: true, monthly: false,
  for: { en: 'For brands that want to see what we can do before a monthly plan.', fr: 'Pour les marques qui veulent voir ce qu’on sait faire avant un plan mensuel.' },
  items: {
    en: ['1 static', 'Ready to post or run as ads'],
    fr: ['1 visuel fixe', 'Prêts à publier ou à lancer en pub'],
  },
  shoot: { en: 'A 3-hour shoot', fr: 'Un tournage de 3 heures' },
  review: { en: 'Final files handed over', fr: 'Fichiers finaux livrés' },
};

export const monthly: Offer[] = [
  {
    key: 'regular', name: 'Regular', reels: 10,
    for: { en: 'For brands starting to test new ads every month.', fr: 'Pour les marques qui commencent à tester de nouvelles pubs chaque mois.' }, launch: 2900, monthly: true,
    items: {
      en: ['2 hooks per reel', '4 statics', '1 carousel'],
      fr: ['2 accroches par reel', '4 visuels fixes', '1 carrousel'],
    },
    shoot: { en: '1 production day a month', fr: '1 journée de production par mois' },
    review: { en: 'Monthly results review', fr: 'Revue mensuelle des résultats' },
  },
  {
    key: 'pro', name: 'Pro', reels: 15,
    for: { en: 'For brands already running ads that need more variations.', fr: 'Pour les marques qui lancent déjà des pubs et ont besoin de plus de variations.' }, launch: 3800, monthly: true,
    items: {
      en: ['2 hooks per reel', '6 statics', '2 carousels', '2 recut ads from your footage'],
      fr: ['2 accroches par reel', '6 visuels fixes', '2 carrousels', '2 pubs remontées à partir de vos images'],
    },
    shoot: { en: '1 production day a month', fr: '1 journée de production par mois' },
    review: { en: 'Monthly results review', fr: 'Revue mensuelle des résultats' },
  },
  {
    key: 'partner', name: 'Creative Partner', reels: 20, max: 100,
    for: { en: 'For brands that need ads at volume, with the team on call.', fr: 'Pour les marques qui ont besoin de pubs en volume, avec l’équipe à disposition.' }, more: true, custom: true, launch: 0, monthly: true,
    items: {
      en: ['3 hooks per reel', 'Statics, carousels and recut ads', 'Market analysis for your category', 'KPIs we set and track together', 'Priority shoot dates', 'A direct line to the team, 7 days a week'],
      fr: ['3 accroches par reel', 'Visuels fixes, carrousels et pubs remontées', 'Analyse de marché de votre secteur', 'Des KPIs fixés et suivis ensemble', 'Dates de tournage prioritaires', 'Une ligne directe avec l’équipe, 7 jours sur 7'],
    },
    shoot: { en: 'Shoot days planned to your volume', fr: 'Jours de tournage selon votre volume' },
    review: { en: 'Weekly performance review', fr: 'Revue de performance hebdomadaire' },
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
    en: 'Not ready to shoot? A 20-minute video review of your current ads and Instagram, plus 5 hook ideas for your products. Fully credited if you book a Test within 30 days.',
    fr: 'Pas prêt à tourner ? Une revue vidéo de 20 minutes de vos pubs et de votre Instagram, plus 5 idées d’accroche pour vos produits. Entièrement déduite si vous réservez un Test sous 30 jours.',
  },
};

// Everything the pricing sections show, in order: the monthly plans first, then the Test as the way in.
export const plans: Offer[] = [...monthly, test];

export const fmt = (n: number, lang: 'en' | 'fr') => n.toLocaleString(lang === 'en' ? 'en-US' : 'fr-FR').replace(/\s/g, ' ');
