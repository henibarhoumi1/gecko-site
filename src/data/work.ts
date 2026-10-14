// One entry per case study. Results only from the client's ad account, never estimated.
// Media go in public/work/<slug>/. `sample` entries are placeholders and are hidden when PUBLIC_LIVE=1.
type L = { en: string; fr: string };
export type Work = {
  slug: string;
  brand: string;
  sector: L;
  country: string;
  year: string;
  sample?: boolean;
  reels: { src: string; poster?: string }[];
  resultLine?: L;
  story: { before: L; tried: L; happened: L };
  angles: { en: string[]; fr: string[] };
  results?: { label: L; value: string }[];
  quote?: { text: L; who: string };
};

const sample = (n: number): Work => ({
  slug: `example-${n}`,
  brand: `Brand ${n}`,
  sector: { en: 'E-commerce', fr: 'E-commerce' },
  country: 'Tunisia',
  year: '2026',
  sample: true,
  reels: [],
  resultLine: { en: 'Result line goes here', fr: 'Le résultat sera ici' },
  story: {
    before: { en: 'Where the brand was before.', fr: 'Où en était la marque.' },
    tried: { en: 'The angles we wrote and shot.', fr: 'Les angles écrits et tournés.' },
    happened: { en: 'What the ad account showed.', fr: 'Ce que le compte publicitaire a montré.' },
  },
  angles: { en: ['Angle one', 'Angle two', 'Angle three'], fr: ['Angle un', 'Angle deux', 'Angle trois'] },
});

export const work: Work[] = [sample(1), sample(2), sample(3)];

export const visibleWork = () => (import.meta.env.PUBLIC_LIVE === '1' ? work.filter((w) => !w.sample) : work);
