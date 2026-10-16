// Source of truth: gecko/plan/offers-and-pricing.md. Prices in TND, excluding VAT.
type L = { en: string; fr: string };
export type Offer = { key: string; name: string; reels?: number; fits?: L; items: { en: string[]; fr: string[] }; launch: number; standard: number; monthly: boolean };

export const test: Offer = {
  key: 'test', name: 'Test Campaign', launch: 1000, standard: 1500, monthly: false,
  items: {
    en: ['3 angles, 1 shoot day', '3 reels with 2 hooks each (6 ads)', '1 carousel', 'Results read-out after 14 days'],
    fr: ['3 angles, 1 journée de tournage', '3 reels avec 2 accroches chacun (6 pubs)', '1 carrousel', 'Bilan des résultats après 14 jours'],
  },
};

export const monthly: Offer[] = [
  {
    key: 'regular', name: 'Regular', reels: 6, launch: 1800, standard: 2300, monthly: true,
    fits: { en: 'under 1,500 TND / month', fr: 'moins de 1 500 TND / mois' },
    items: {
      en: ['1 shoot day', '2 hooks per reel', '4 statics', '1 carousel', 'Monthly report'],
      fr: ['1 journée de tournage', '2 accroches par reel', '4 visuels fixes', '1 carrousel', 'Rapport mensuel'],
    },
  },
  {
    key: 'premier', name: 'Premier', reels: 10, launch: 2800, standard: 3600, monthly: true,
    fits: { en: '1,500 to 3,000 TND / month', fr: '1 500 à 3 000 TND / mois' },
    items: {
      en: ['2 shoot days', '2 hooks per reel', '6 statics', '2 recut ads from your footage', '2 carousels', 'Monthly report'],
      fr: ['2 journées de tournage', '2 accroches par reel', '6 visuels fixes', '2 pubs remontées à partir de vos images', '2 carrousels', 'Rapport mensuel'],
    },
  },
  {
    key: 'premium', name: 'Premium', reels: 16, launch: 4500, standard: 5800, monthly: true,
    fits: { en: 'over 3,000 TND / month', fr: 'plus de 3 000 TND / mois' },
    items: {
      en: ['3 shoot days', '3 hooks per reel', '10 statics', '4 recut ads from your footage', '2 carousels', 'We run your Meta ads (budget up to 5,000 TND)', 'Weekly report'],
      fr: ['3 journées de tournage', '3 accroches par reel', '10 visuels fixes', '4 pubs remontées à partir de vos images', '2 carrousels', 'On gère vos pubs Meta (budget jusqu’à 5 000 TND)', 'Rapport hebdomadaire'],
    },
  },
];

export const campaign: Offer = {
  key: 'campaign', name: 'Campaign', launch: 3600, standard: 4800, monthly: false,
  items: {
    en: ['For a launch, an opening, Ramadan or a season', 'Concept and 2 shoot days', '10 reels, 2 carousels'],
    fr: ['Pour un lancement, une ouverture, Ramadan ou une saison', 'Concept et 2 journées de tournage', '10 reels, 2 carrousels'],
  },
};

export const audit = {
  name: 'Ad Audit', price: 150,
  text: {
    en: 'Not ready to shoot? A 20-minute video review of your current ads and Instagram, plus 5 hook ideas for your products. Fully credited if you book a Test Campaign within 30 days.',
    fr: 'Pas prêt à tourner ? Une revue vidéo de 20 minutes de vos pubs et de votre Instagram, plus 5 idées d’accroche pour vos produits. Entièrement déduite si vous réservez un Test Campaign sous 30 jours.',
  },
};

export const addons: { name: L; price: L }[] = [
  { name: { en: 'Extra reel from existing footage', fr: 'Reel supplémentaire avec les images existantes' }, price: { en: '150 TND', fr: '150 TND' } },
  { name: { en: 'Extra reel with a new half-day shoot', fr: 'Reel supplémentaire avec une demi-journée de tournage' }, price: { en: '400 TND', fr: '400 TND' } },
  { name: { en: 'Extra carousel', fr: 'Carrousel supplémentaire' }, price: { en: '120 TND', fr: '120 TND' } },
  { name: { en: 'Posting and community management, 5 days a week', fr: 'Publication et community management, 5 jours sur 7' }, price: { en: '600 TND / month', fr: '600 TND / mois' } },
  { name: { en: 'Meta ads management on its own', fr: 'Gestion des pubs Meta seule' }, price: { en: '700 TND / month', fr: '700 TND / mois' } },
  { name: { en: 'Raw footage', fr: 'Rushes' }, price: { en: '300 TND', fr: '300 TND' } },
  { name: { en: 'Express delivery (72 hours)', fr: 'Livraison express (72 heures)' }, price: { en: '+25%', fr: '+25 %' } },
];

export const fmt = (n: number, lang: 'en' | 'fr') => n.toLocaleString(lang === 'en' ? 'en-US' : 'fr-FR').replace(/\s/g, ' ');
