// Everything shown as proof lives here. Only real ads, real names and numbers from the client's ad account.
// Media go in public/work/<slug>/. A section with nothing in it is hidden.
// Entries marked `sample: true` show in previews only and are dropped when built with PUBLIC_LIVE=1.
type L = { en: string; fr: string };
const live = import.meta.env.PUBLIC_LIVE === '1';
const real = <T extends { sample?: boolean }>(xs: T[]) => (live ? xs.filter((x) => !x.sample) : xs);

export type Ad = { src?: string; poster?: string; brand: string; angle: L; idea?: L; how?: L; result?: L; sample?: boolean };
export type Case = {
  slug: string; brand: string; sector: L; year: string; sample?: boolean;
  number: string; numberLabel: L; line: L;
  brief: L; story: { before: L; tried: L; happened: L };
  angles: { en: string[]; fr: string[] };
  results?: { label: L; value: string }[];
  ads: Ad[];
  quote?: { text: L; who: string };
};

// Nothing real yet, so every list is empty and its section stays hidden.
// Add entries as they arrive (Gecko's own campaign first). Example:
// { src: '/work/gecko/ad-01.mp4', poster: '/work/gecko/ad-01.jpg', brand: 'Gecko', angle: { en: 'The price', fr: 'Le prix' }, result: { en: '0.9 TND / message', fr: '0,9 TND / message' } }
const allCases: Case[] = [];
const heroAd: Ad | undefined = undefined;
// Ads Heni made before Gecko, shown with Heni's OK (18 Oct 2026). No results claimed for them.
const allAds: Ad[] = [
  {
    src: '/work/glucelia-on-off.mp4', poster: '/work/glucelia-on-off.jpg', brand: 'Glucélia',
    angle: { en: 'The switch', fr: 'L’interrupteur' },
    idea: { en: 'Same dinner, switch off, switch on.', fr: 'Le même dîner, interrupteur éteint, puis allumé.' },
    how: {
      en: 'Three people, three meals. With the Glucélia switch off, the scene is grey and they pick at their plate. Flip it on and the colour, the light and the appetite come back. One visual idea carries the whole ad, so it works with the sound off.',
      fr: 'Trois personnes, trois repas. Interrupteur Glucélia éteint, la scène est grise et elles picorent. On l’allume et la couleur, la lumière et l’appétit reviennent. Une seule idée visuelle porte toute la pub, qui marche donc sans le son.',
    },
  },
  {
    src: '/work/hismile-30-seconds.mp4', poster: '/work/hismile-30-seconds.jpg', brand: 'Hismile',
    angle: { en: 'The 30-second test', fr: 'Le test de 30 secondes' },
    idea: { en: 'A real test, on camera, against the clock.', fr: 'Un vrai test, filmé, contre la montre.' },
    how: {
      en: 'A dentist counts down while she tries the product, and we never cut away from her reaction. The close-up shows the result, then the dentist sends you to the website. The proof happens inside the ad instead of being claimed.',
      fr: 'Un dentiste compte pendant qu’elle essaie le produit, et on ne coupe jamais sa réaction. Le gros plan montre le résultat, puis le dentiste renvoie vers le site. La preuve se passe dans la pub au lieu d’être affirmée.',
    },
  },
  {
    src: '/work/glucelia-vs-the-world.mp4', poster: '/work/glucelia-vs-the-world.jpg', brand: 'Glucélia',
    angle: { en: 'Every question, one box', fr: 'Toutes les questions, une boîte' },
    idea: { en: 'One person, one box, every doubt answered.', fr: 'Une personne, une boîte, chaque doute levé.' },
    how: {
      en: 'Gluten-free buyers read labels. So she reads it for them: the ingredients, the QR code, what’s in it and what isn’t, in Tunisian Arabic with word-by-word captions. It answers the comments before anyone writes them.',
      fr: 'Les clients sans gluten lisent les étiquettes. Alors elle la lit pour eux : les ingrédients, le QR code, ce qu’il y a dedans et ce qu’il n’y a pas, en tunisien avec des sous-titres mot à mot. Elle répond aux commentaires avant qu’ils soient écrits.',
    },
  },
  {
    src: '/work/hismile-dentist.mp4', poster: '/work/hismile-dentist.jpg', brand: 'Hismile',
    angle: { en: 'The dentist', fr: 'Le dentiste' },
    idea: { en: 'A dentist people want to keep watching.', fr: 'Un dentiste qu’on a envie de regarder jusqu’au bout.' },
    how: {
      en: 'A loud dentist character lit in purple talks straight down the lens. An animation shows the problem, a certificate backs the claim, and a customer shows the result. Same facts as a lab ad, told by someone with a personality.',
      fr: 'Un dentiste haut en couleur, éclairé en violet, parle droit dans l’objectif. Une animation montre le problème, un certificat appuie la promesse, et un client montre le résultat. Les mêmes faits qu’une pub de labo, racontés par un personnage.',
    },
  },
];
// Logos need the brand's written OK. Shown only once there are 3.
const allLogos: { name: string; src?: string; sample?: boolean }[] = [];
// Totals tracked from real clients.
const allNumbers: { key: 'ads' | 'spend' | 'best'; value: string; sample?: boolean }[] = [];
// Photos from real shoot days (public/team/). No AI images.
const allPhotos: { src?: string; alt: L; sample?: boolean }[] = [];

export const cases = real(allCases);
export const ads = real(allAds);
export const hero = heroAd && !(live && heroAd.sample) ? heroAd : undefined;
export const logos = (() => { const l = real(allLogos); return l.length >= 3 ? l : []; })();
export const numbers = real(allNumbers);
export const photos = real(allPhotos);
export const portrait: { src?: string } = {};
