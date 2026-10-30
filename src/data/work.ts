// Everything shown as proof lives here. Only real ads, real names and numbers from the client's ad account.
// Media go in public/work/<slug>/. A section with nothing in it is hidden.
// Entries marked `sample: true` show in previews only and are dropped when built with PUBLIC_LIVE=1.
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

// Nothing real yet, so every list is empty and its section stays hidden.
// Add entries as they arrive (Gecko's own campaign first). Example:
// { src: '/work/gecko/ad-01.mp4', poster: '/work/gecko/ad-01.jpg', brand: 'Gecko', angle: { en: 'The price', fr: 'Le prix' }, result: { en: '0.9 TND / message', fr: '0,9 TND / message' } }
const allCases: Case[] = [];
const heroAd: Ad | undefined = undefined;
// The four Glucélia case study reels (CreativesLab, 2026).
const allAds: Ad[] = [
  { src: '/work/glucelia-on-off.mp4', poster: '/work/glucelia-on-off.jpg', brand: 'Glucélia', angle: { en: 'Sad vs Happy', fr: 'Triste vs heureux' } },
  { src: '/work/glucelia-vs-the-world.mp4', poster: '/work/glucelia-vs-the-world.jpg', brand: 'Glucélia', angle: { en: 'Glucélia vs the world', fr: 'Glucélia contre le monde' } },
  { src: '/work/glucelia-chatgpt.mp4', poster: '/work/glucelia-chatgpt.jpg', brand: 'Glucélia', angle: { en: 'ChatGPT, Fad Meni!', fr: 'ChatGPT, Fad Meni\u00a0!' } },
  { src: '/work/glucelia-atef-the-chef.mp4', poster: '/work/glucelia-atef-the-chef.jpg', brand: 'Glucélia', angle: { en: 'Atef the chef', fr: 'Atef le chef' } },
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
export const portrait: { src?: string } = { src: '/team/heni.jpg' };
