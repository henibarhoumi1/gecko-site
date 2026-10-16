// Source of truth: gecko/plan/offers-and-pricing.md. Prices in TND, excluding VAT.
type L = { en: string; fr: string };
export type Offer = { key: string; name: string; text: L; launch: number; standard: number; monthly: boolean; featured?: boolean };

export const offers: Offer[] = [
  {
    key: 'test', name: 'Test Campaign', launch: 1000, standard: 1500, monthly: false, featured: true,
    text: {
      en: '3 ad angles with a script each, 1 shoot day, 3 edited reels with 2 hooks each, 1 carousel, a results read-out after 14 days.',
      fr: '3 angles avec un script chacun, 1 journée de tournage, 3 reels montés avec 2 accroches chacun, 1 carrousel, un bilan après 14 jours.',
    },
  },
  {
    key: 'monthly8', name: 'Monthly 8', launch: 2500, standard: 3200, monthly: true,
    text: {
      en: '8 reels a month with 2 hooks each, 2 shoot days, 2 carousels, a posting calendar and a monthly report on what won.',
      fr: '8 reels par mois avec 2 accroches chacun, 2 journées de tournage, 2 carrousels, un calendrier de publication et un rapport mensuel.',
    },
  },
  {
    key: 'monthly12', name: 'Monthly 12', launch: 3800, standard: 4800, monthly: true,
    text: {
      en: 'Everything in Monthly 8 with 12 reels and 3 shoot days, plus Meta ads management on a budget up to 3,000 TND you pay to Meta.',
      fr: 'Tout Monthly 8 avec 12 reels et 3 journées de tournage, plus la gestion de vos pubs Meta sur un budget jusqu’à 3 000 TND payé à Meta.',
    },
  },
  {
    key: 'campaign', name: 'Campaign', launch: 3600, standard: 4800, monthly: false,
    text: {
      en: 'A one-off for a launch, an opening, Ramadan or summer: campaign concept, 10 reels, 2 carousels, a posting schedule.',
      fr: 'Ponctuel, pour un lancement, une ouverture, Ramadan ou l’été : concept, 10 reels, 2 carrousels, un planning de publication.',
    },
  },
];

export const audit = {
  name: 'Ad Audit', price: 150,
  text: {
    en: 'A 20-minute video review of your current ads and Instagram, plus 5 hook ideas written for your products.',
    fr: 'Une revue vidéo de 20 minutes de vos pubs et de votre Instagram, plus 5 idées d’accroche écrites pour vos produits.',
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

export const fmt = (n: number, lang: 'en' | 'fr') => n.toLocaleString(lang === 'en' ? 'en-US' : 'fr-FR').replace(/ /g, ' ');
