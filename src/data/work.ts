// Everything shown as proof lives here. Only real ads, real names and numbers from the client's ad account.
// Media go in public/work/<slug>/. A section with nothing in it is hidden.
// Entries marked `sample: true` show in previews only and are dropped when built with PUBLIC_LIVE=1.
type L = { en: string; fr: string };
const live = import.meta.env.PUBLIC_LIVE === '1';
const real = <T extends { sample?: boolean }>(xs: T[]) => (live ? xs.filter((x) => !x.sample) : xs);

// angle is the reel's name (its idea), format the kind of ad, why one or two lines on how it works (shown in the viewer).
export type Ad = { src?: string; poster?: string; clip?: string; brand: string; angle: L; format?: L; why?: L; result?: L; sample?: boolean };
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
// The four reels made for Glucélia in 2026, before Gecko. Captions name the idea and the format, never the client.
// clip is the short silent loop the cards play; the full reel loads only in the viewer.
const allAds: Ad[] = [
  { src: '/work/glucelia-on-off.mp4', clip: '/work/clip-on-off.mp4', poster: '/work/glucelia-on-off.jpg', brand: 'Glucélia',
    angle: { en: 'Sad vs happy', fr: 'Triste vs heureux' }, format: { en: 'Before and after', fr: 'Avant / après' },
    why: { en: 'No long voiceover about benefits. The reel cuts between life before and life with the product, and lets the switch do the selling.', fr: 'Pas de longue voix off sur les bénéfices. Le reel alterne la vie avant et la vie avec le produit, et laisse le contraste vendre.' } },
  { src: '/work/glucelia-vs-the-world.mp4', clip: '/work/clip-vs-the-world.mp4', poster: '/work/glucelia-vs-the-world.jpg', brand: 'Glucélia',
    angle: { en: 'Us vs the world', fr: 'Nous contre le monde' }, format: { en: 'Comparison', fr: 'Comparaison' },
    why: { en: 'The product stands next to the usual options, crossed out one by one, so the ad plays like a contest people want to see the end of.', fr: 'Le produit face aux options habituelles, barrées une à une\u00a0: la pub devient un duel dont on veut voir la fin.' } },
  { src: '/work/glucelia-chatgpt.mp4', clip: '/work/clip-chatgpt.mp4', poster: '/work/glucelia-chatgpt.jpg', brand: 'Glucélia',
    angle: { en: 'ChatGPT, Fad Meni!', fr: 'ChatGPT, Fad Meni\u00a0!' }, format: { en: 'Skit', fr: 'Sketch' },
    why: { en: 'A moment everyone knows, asking ChatGPT for help, played as a short comedy that ends at the table with the product.', fr: 'Un moment que tout le monde connaît, demander de l’aide à ChatGPT, joué comme une petite comédie qui finit à table avec le produit.' } },
  { src: '/work/glucelia-atef-the-chef.mp4', clip: '/work/clip-atef-the-chef.mp4', poster: '/work/glucelia-atef-the-chef.jpg', brand: 'Glucélia',
    angle: { en: 'Atef the chef', fr: 'Atef le chef' }, format: { en: 'Tutorial', fr: 'Tuto' },
    why: { en: 'A chef with a face you remember and a 15-minute timer turn a recipe into a show, with the product in every step.', fr: 'Un chef qu’on retient et un minuteur de 15 minutes font d’une recette un spectacle, avec le produit à chaque étape.' } },
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
