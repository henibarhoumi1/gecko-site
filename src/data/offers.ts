// Prices and plans as Heni set them on 25 Oct (Test 999 one time, Regular 2,900 and Pro 3,800 launch prices with no original price shown, Creative Partner custom, no media buying) (they replace the draft in gecko/plan/offers-and-pricing.md). Prices in TND, excluding VAT.
export type Offer = { key: string; name: string; for?: { en: string; fr: string }; campaigns?: { en: string; fr: string }; reels?: number; more?: boolean; items: { en: string[]; fr: string[] }; launch: number; standard?: number; top?: number; from?: boolean; custom?: boolean; once?: boolean; max?: number; shoot?: { en: string; fr: string }; review?: { en: string; fr: string }; monthly: boolean };

export const test: Offer = {
  key: 'test', name: 'Test', reels: 3, launch: 999, once: true, monthly: false,
  // Heni, 14 Nov: the Test is 2–3 ad campaigns made in one production day. Deliverables unchanged (3 reels, 1 static).
  // The older offer said "a 3-hour shoot": flagged to Heni, the brief's "one production day" is used.
  for: { en: 'See our method on your product before any monthly plan.', fr: 'Voyez notre méthode sur votre produit, avant tout plan mensuel.' },
  campaigns: { en: '2–3 ad campaigns, each with its own angle', fr: '2 à 3 campagnes pub, chacune avec son angle' },
  items: {
    en: ['1 static', 'Ready to post or run as ads'],
    fr: ['1 visuel fixe', 'Prêts à publier ou à lancer en pub'],
  },
  shoot: { en: 'Made in one production day', fr: 'Produites en une journée de production' },
  review: { en: 'Final files handed over', fr: 'Fichiers finaux livrés' },
};

export const monthly: Offer[] = [
  {
    key: 'regular', name: 'Regular', reels: 10,
    for: { en: 'For brands starting to test new ads every month.', fr: 'Pour les marques qui commencent à tester de nouvelles pubs chaque mois.' }, launch: 2900, monthly: true,
    items: {
      en: ['4 statics', '1 carousel'],
      fr: ['4 visuels fixes', '1 carrousel'],
    },
    shoot: { en: '1 production day a month', fr: '1 journée de production par mois' },
    review: { en: 'Monthly results review', fr: 'Revue mensuelle des résultats' },
  },
  {
    key: 'pro', name: 'Pro', reels: 15,
    for: { en: 'For brands already running ads: a fuller creative partnership, every month.', fr: 'Pour les marques qui font déjà de la pub : un partenariat créatif plus complet, chaque mois.' }, launch: 3800, monthly: true,
    items: {
      en: ['6 statics', '2 carousels', '2 recut ads from your footage'],
      fr: ['6 visuels fixes', '2 carrousels', '2 pubs remontées à partir de vos images'],
    },
    shoot: { en: '1 production day a month', fr: '1 journée de production par mois' },
    review: { en: 'Monthly results review', fr: 'Revue mensuelle des résultats' },
  },
  {
    // No fixed reel count on the site (Heni, 14 Nov): volume is set per brand, campaign rhythm and production capacity.
    key: 'partner', name: 'Creative Partner',
    for: { en: 'For brands that need ads at volume, planned with us month after month.', fr: 'Pour les marques qui ont besoin de pubs en volume, planifiées avec nous mois après mois.' }, more: true, custom: true, launch: 0, monthly: true,
    items: {
      en: ['3 hooks per reel', 'Statics, carousels and recut ads', 'Market analysis for your category', 'KPIs we set and track together', 'Priority shoot dates', 'A direct line to the team, 7 days a week'],
      fr: ['3 accroches par reel', 'Visuels fixes, carrousels et pubs remontées', 'Analyse de marché de votre secteur', 'Des KPIs fixés et suivis ensemble', 'Dates de tournage prioritaires', 'Une ligne directe avec l’équipe, 7 jours sur 7'],
    },
    shoot: { en: 'Shoot days planned to your volume', fr: 'Jours de tournage selon votre volume' },
    review: { en: 'Weekly performance review', fr: 'Revue de performance hebdomadaire' },
  },
];

// Everything the pricing sections show, in order: the monthly plans first, then the Test as the way in.
export const plans: Offer[] = [...monthly, test];

export const fmt = (n: number, lang: 'en' | 'fr') => n.toLocaleString(lang === 'en' ? 'en-US' : 'fr-FR').replace(/\s/g, ' ');
