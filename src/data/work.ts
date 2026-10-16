// Everything shown as proof lives here. Only real ads, real names and numbers from the client's ad account.
// Media go in public/work/<slug>/. Entries with `sample: true` are layout placeholders:
// they show in previews, marked "Sample", and disappear when the site is built with PUBLIC_LIVE=1.
// On the live site, a section with nothing real in it is hidden.
type L = { en: string; fr: string };
const live = import.meta.env.PUBLIC_LIVE === '1';
const real = <T extends { sample?: boolean }>(xs: T[]) => (live ? xs.filter((x) => !x.sample) : xs);

export type Ad = { src?: string; poster?: string; brand: string; angle: L; result?: L; sample?: boolean };
export type Case = {
  slug: string; brand: string; sector: L; year: string; sample?: boolean;
  number: string; numberLabel: L; line: L;
  brief: L; story: { before: L; tried: L; happened: L };
  angles: { en: string[]; fr: string[] };
  results?: { label: L; value: string }[];
  ads: Ad[];
  quote?: { text: L; who: string };
};

const sAd = (brand: string, en: string, fr: string): Ad => ({ brand, angle: { en, fr }, sample: true });

const sampleCase = (n: number, angle: [string, string]): Case => ({
  slug: `example-${n}`, brand: `Brand ${n}`, sector: { en: 'E-commerce', fr: 'E-commerce' }, year: '2026', sample: true,
  number: '—', numberLabel: { en: 'cost per message', fr: 'coût par message' },
  line: { en: 'One sentence on what changed for the brand.', fr: 'Une phrase sur ce qui a changé pour la marque.' },
  brief: { en: 'What the brand asked for, in two lines.', fr: 'Ce que la marque a demandé, en deux lignes.' },
  story: {
    before: { en: 'Where the brand was before.', fr: 'Où en était la marque.' },
    tried: { en: 'The angles we wrote and shot.', fr: 'Les angles écrits et tournés.' },
    happened: { en: 'What the ad account showed.', fr: 'Ce que le compte publicitaire a montré.' },
  },
  angles: { en: [angle[0], 'Before and after', 'Founder talks'], fr: [angle[1], 'Avant / après', 'Le fondateur parle'] },
  ads: [sAd(`Brand ${n}`, angle[0], angle[1]), sAd(`Brand ${n}`, 'Before and after', 'Avant / après'), sAd(`Brand ${n}`, 'Founder talks', 'Le fondateur parle')],
});

const allCases: Case[] = [
  sampleCase(1, ['The price', 'Le prix']),
  sampleCase(2, ['Delivery time', 'Le délai de livraison']),
  sampleCase(3, ['Is it original?', 'C’est de l’original ?']),
];

// The ad shown in the hero (Gecko's own campaign once it has run).
const heroAd: Ad = { brand: 'Gecko', angle: { en: 'Gecko’s own campaign', fr: 'La campagne de Gecko' }, sample: true };

const allAds: Ad[] = [
  sAd('Brand 1', 'The price', 'Le prix'), sAd('Brand 2', 'Delivery time', 'Le délai'),
  sAd('Brand 3', 'Is it original?', 'C’est de l’original ?'), sAd('Brand 1', 'Before and after', 'Avant / après'),
  sAd('Brand 2', 'Founder talks', 'Le fondateur parle'), sAd('Brand 3', 'Unboxing', 'Déballage'),
  sAd('Brand 1', 'Customer review', 'Avis client'), sAd('Brand 2', 'Objection', 'Objection'),
];

// Logos need the brand's written OK. Shown only once there are 3.
const allLogos: { name: string; src?: string; sample?: boolean }[] = [
  { name: 'Brand 1', sample: true }, { name: 'Brand 2', sample: true }, { name: 'Brand 3', sample: true },
];

// Totals tracked from real clients. Leave empty until the numbers are real.
const allNumbers: { key: 'ads' | 'spend' | 'best'; value: string; sample?: boolean }[] = [
  { key: 'ads', value: '—', sample: true }, { key: 'spend', value: '—', sample: true }, { key: 'best', value: '—', sample: true },
];

// Photos from real shoot days (public/team/). No AI images.
const allPhotos: { src?: string; alt: L; sample?: boolean }[] = [
  { alt: { en: 'Heni directing', fr: 'Heni en réalisation' }, sample: true },
  { alt: { en: 'On set', fr: 'Sur le tournage' }, sample: true },
  { alt: { en: 'Editing', fr: 'Au montage' }, sample: true },
];

export const cases = real(allCases);
export const ads = real(allAds);
export const hero = live && heroAd.sample ? undefined : heroAd;
export const logos = (() => { const l = real(allLogos); return l.length >= 3 ? l : []; })();
export const numbers = real(allNumbers);
export const photos = real(allPhotos);
export const portrait: { src?: string } = {};
