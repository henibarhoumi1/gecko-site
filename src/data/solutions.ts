// What Gecko makes, one entry per direction (Heni, 21 Nov 2026: "ads stay the hero; then campaign film, brand identity,
// web, Brand World, product photography and more"). Home lists them, /solutions shows them all, and each one has its
// own page at /solutions/<slug> (the Brand World keeps its own page at /brand-world).
// Rules: no invented numbers, results, clients or timelines. Only the Ads plans have prices (data/offers.ts); every
// other direction is quoted from the brief. Heni to check every French line.
import type { Locale } from '../i18n/strings';

export type Tone = 'pink' | 'yellow' | 'blue' | 'black';
type T = Record<Locale, string>;
type L = Record<Locale, string[]>;

export interface Solution {
  slug: string;
  /** Where the solution lives: its own page under /solutions, or a page of its own (the Brand World). */
  page: string;
  tone: Tone;
  /** The flagship: shown first and biggest. */
  flagship?: boolean;
  name: T;
  /** One line on the card. */
  line: T;
  /** Three short things it includes, as chips on the card. */
  chips: L;
  /** The page's headline; its last two words carry the marker. */
  title: T;
  lead: T;
  gets: L;
  steps: Record<Locale, [string, string][]>;
  who: Record<Locale, [string, string][]>;
  /** How it's priced: the Ads plans, or a quote. */
  price: 'plans' | 'quote';
  /** The brief opens with this answer picked. */
  plan: string;
  related: string[];
}

export const solutions: Solution[] = [
  {
    slug: 'ads', page: 'solutions/ads', tone: 'black', flagship: true, price: 'plans', plan: 'test',
    name: { en: 'Video ads', fr: 'Pubs vidéo' },
    line: {
      en: 'Short ads for Reels, TikTok and Stories, made, tested and improved every month.',
      fr: 'Des pubs courtes pour Reels, TikTok et Stories, créées, testées et améliorées chaque mois.',
    },
    chips: { en: ['Scripts and hooks', 'Shoot and edit', 'Monthly testing'], fr: ['Scripts et accroches', 'Tournage et montage', 'Tests chaque mois'] },
    title: { en: 'Ads made to be watched twice.', fr: 'Des pubs à regarder deux fois.' },
    lead: {
      en: 'Our flagship. We write the angle, shoot it, edit it and give you several openings to test. Every month starts from what the last one taught us.',
      fr: 'Notre métier principal. On écrit l’angle, on tourne, on monte et on vous donne plusieurs ouvertures à tester. Chaque mois part de ce que le précédent nous a appris.',
    },
    gets: {
      en: ['Research and one written angle per ad', 'Scripts and hooks you approve before the shoot', 'The shoot and the edit, by one team', 'Two or three openings per reel, to find the hook that holds', 'Subtitles, licensed music, 9:16 and 4:5', 'A monthly results review and your private workspace'],
      fr: ['Recherche et un angle écrit par pub', 'Scripts et accroches validés par vous avant le tournage', 'Le tournage et le montage, par une seule équipe', 'Deux ou trois ouvertures par reel, pour trouver l’accroche qui retient', 'Sous-titres, musique sous licence, 9:16 et 4:5', 'Une revue des résultats chaque mois et votre espace privé'],
    },
    steps: {
      en: [['Brief', 'Your product, your customers, your offer.'], ['Scripts', 'Angles and hooks, written where you approve them.'], ['Shoot and edit', 'One production day, then the first cut.'], ['Test and learn', 'Your results go back to each hook. The next month starts there.']],
      fr: [['Brief', 'Votre produit, vos clients, votre offre.'], ['Scripts', 'Angles et accroches, écrits là où vous les validez.'], ['Tournage et montage', 'Une journée de production, puis le premier montage.'], ['Tester et apprendre', 'Vos résultats remontent à chaque accroche. Le mois suivant part de là.']],
    },
    who: {
      en: [['Brands that sell online', 'You need new ads every month to keep the account fed.'], ['Brands starting with ads', 'Start with the Test: 3 reels and 1 static from one shoot.']],
      fr: [['Les marques qui vendent en ligne', 'Il vous faut de nouvelles pubs chaque mois.'], ['Les marques qui débutent en pub', 'Commencez par le Test : 3 reels et 1 visuel d’un seul tournage.']],
    },
    related: ['strategy', 'product-photography', 'campaigns'],
  },
  {
    slug: 'campaigns', page: 'solutions/campaigns', tone: 'pink', price: 'quote', plan: 'bespoke',
    name: { en: 'Campaign films', fr: 'Films de campagne' },
    line: {
      en: 'Launches, brand films and seasonal campaigns, from the idea to the last cut.',
      fr: 'Lancements, films de marque et campagnes de saison, de l’idée au dernier montage.',
    },
    chips: { en: ['Concept', 'Crew and talent', 'Every format'], fr: ['Concept', 'Équipe et talents', 'Tous les formats'] },
    title: { en: 'One idea, told in every format.', fr: 'Une idée, racontée dans chaque format.' },
    lead: {
      en: 'For the moments that matter: a launch, a new store, Ramadan, an anniversary. One concept, one shoot, and the film cut for every place it will run.',
      fr: 'Pour les moments qui comptent : un lancement, une nouvelle boutique, le Ramadan, un anniversaire. Un concept, un tournage, et le film monté pour chaque endroit où il passera.',
    },
    gets: {
      en: ['The concept and the script', 'Studio, crew, talent and sets through our production partners', 'The hero film and its cut-downs', 'Stills from the shoot', 'Every format: 16:9, 9:16, 4:5 and 1:1', 'One proposal with every cost shown'],
      fr: ['Le concept et le script', 'Studio, équipe, talents et décors via nos partenaires de production', 'Le film principal et ses versions courtes', 'Des photos du tournage', 'Tous les formats : 16:9, 9:16, 4:5 et 1:1', 'Une seule proposition, chaque coût visible'],
    },
    steps: {
      en: [['Brief', 'The moment, the message, the budget.'], ['Concept', 'One idea and a treatment you approve.'], ['Production', 'Casting, locations, the shoot.'], ['Delivery', 'The film and every cut-down, ready to run.']],
      fr: [['Brief', 'Le moment, le message, le budget.'], ['Concept', 'Une idée et une note d’intention que vous validez.'], ['Production', 'Casting, lieux, tournage.'], ['Livraison', 'Le film et toutes ses versions, prêts à diffuser.']],
    },
    who: {
      en: [['A launch', 'A product, a brand or a store to introduce.'], ['A moment', 'A season, an event or an anniversary to mark.']],
      fr: [['Un lancement', 'Un produit, une marque ou une boutique à présenter.'], ['Un moment', 'Une saison, un événement ou un anniversaire à marquer.']],
    },
    related: ['ads', 'product-photography', 'brand-identity'],
  },
  {
    slug: 'brand-identity', page: 'solutions/brand-identity', tone: 'yellow', price: 'quote', plan: 'bespoke',
    name: { en: 'Brand identity', fr: 'Identité de marque' },
    line: {
      en: 'A name to stand behind: logo, type, colours and a brand deck your team can use.',
      fr: 'Une marque solide : logo, typographie, couleurs et un brand deck que votre équipe peut utiliser.',
    },
    chips: { en: ['Logo and type', 'Colours', 'Brand deck'], fr: ['Logo et typo', 'Couleurs', 'Brand deck'] },
    title: { en: 'A brand people recognise before they read it.', fr: 'Une marque qu’on reconnaît avant de la lire.' },
    lead: {
      en: 'A new identity or a rebrand, built from your market and the competitors you have to beat. You leave with the files and the rules to use them.',
      fr: 'Une nouvelle identité ou une refonte, construite à partir de votre marché et des concurrents à battre. Vous repartez avec les fichiers et les règles pour les utiliser.',
    },
    gets: {
      en: ['A study of your market and competitors', 'Logo, wordmark and monogram', 'Typefaces and a colour palette', 'Packaging and social templates direction', 'A brand deck: voice, rules and examples', 'Every file, ready for print and screens'],
      fr: ['Une étude de votre marché et de vos concurrents', 'Logo, logotype et monogramme', 'Typographies et palette de couleurs', 'Direction pour le packaging et les modèles réseaux', 'Un brand deck : ton, règles et exemples', 'Tous les fichiers, prêts pour l’impression et les écrans'],
    },
    steps: {
      en: [['Study', 'Your business, your market, your strongest competitors.'], ['Direction', 'Two routes, shown on real uses.'], ['Design', 'One route, refined with you.'], ['Hand-over', 'The brand deck and every file.']],
      fr: [['Étude', 'Votre activité, votre marché, vos concurrents les plus forts.'], ['Direction', 'Deux pistes, montrées sur de vrais usages.'], ['Design', 'Une piste, affinée avec vous.'], ['Remise', 'Le brand deck et tous les fichiers.']],
    },
    who: {
      en: [['Launching', 'A product with no brand around it yet.'], ['Rebranding', 'A brand that no longer looks like what you sell.']],
      fr: [['Se lancer', 'Un produit sans marque autour.'], ['Se refaire', 'Une marque qui ne ressemble plus à ce que vous vendez.']],
    },
    related: ['brand-world', 'web', 'product-photography'],
  },
  {
    slug: 'brand-world', page: 'brand-world', tone: 'blue', price: 'quote', plan: 'brandworld',
    name: { en: 'The Brand World', fr: 'L’Univers de marque' },
    line: {
      en: 'Everything at once: strategy, identity, 15 reels, product photos and a store with its own back office.',
      fr: 'Tout d’un coup : stratégie, identité, 15 reels, photos produit et une boutique avec son back-office.',
    },
    chips: { en: ['Strategy', 'Brand and campaign', 'Store'], fr: ['Stratégie', 'Marque et campagne', 'Boutique'] },
    title: { en: 'You bring the product. We build the world around it.', fr: 'Vous apportez le produit. On construit l’univers autour.' },
    lead: { en: '', fr: '' },
    gets: { en: [], fr: [] }, steps: { en: [], fr: [] }, who: { en: [], fr: [] },
    related: [],
  },
  {
    slug: 'web', page: 'solutions/web', tone: 'blue', price: 'quote', plan: 'bespoke',
    name: { en: 'Websites and stores', fr: 'Sites et boutiques' },
    line: {
      en: 'Sites that sell, with a back office for orders, products, stock and payments.',
      fr: 'Des sites qui vendent, avec un back-office pour les commandes, produits, stock et paiements.',
    },
    chips: { en: ['Design', 'Store', 'Back office'], fr: ['Design', 'Boutique', 'Back-office'] },
    title: { en: 'A store that looks like your ads.', fr: 'Une boutique qui ressemble à vos pubs.' },
    lead: {
      en: 'The page your ads send people to matters as much as the ad. We design and build it in your brand, with the back office to run it.',
      fr: 'La page où vos pubs envoient les gens compte autant que la pub. On la conçoit et on la construit dans votre marque, avec le back-office pour la gérer.',
    },
    gets: {
      en: ['Design in your brand, desktop and phone', 'An online store or a brand site', 'Landing pages for your campaigns', 'A back office: orders, products, stock and payments', 'Your Meta ads results beside your orders', 'Product pages written to sell'],
      fr: ['Un design dans votre marque, ordinateur et téléphone', 'Une boutique en ligne ou un site de marque', 'Des pages d’atterrissage pour vos campagnes', 'Un back-office : commandes, produits, stock et paiements', 'Les résultats de vos pubs Meta à côté de vos commandes', 'Des fiches produit écrites pour vendre'],
    },
    steps: {
      en: [['Map', 'What you sell, how people buy, what you need to run.'], ['Design', 'The key pages, approved before any code.'], ['Build', 'The site, the store and the back office.'], ['Launch', 'Live on your domain, with a walk-through for your team.']],
      fr: [['Cadrage', 'Ce que vous vendez, comment on achète, ce qu’il faut gérer.'], ['Design', 'Les pages clés, validées avant le code.'], ['Développement', 'Le site, la boutique et le back-office.'], ['Lancement', 'En ligne sur votre domaine, avec une prise en main pour votre équipe.']],
    },
    who: {
      en: [['Selling on social only', 'You take orders in DMs and want a real store.'], ['Outgrowing your store', 'Your current site doesn’t look or work like your brand.']],
      fr: [['Vente sur les réseaux seulement', 'Vous prenez les commandes en message et voulez une vraie boutique.'], ['Une boutique trop petite', 'Votre site actuel ne ressemble pas à votre marque.']],
    },
    related: ['brand-identity', 'product-photography', 'brand-world'],
  },
  {
    slug: 'product-photography', page: 'solutions/product-photography', tone: 'pink', price: 'quote', plan: 'bespoke',
    name: { en: 'Product photography', fr: 'Photo produit' },
    line: {
      en: 'Packshots, lifestyle and close-ups for your store, your ads and your feed.',
      fr: 'Packshots, mises en situation et gros plans pour votre boutique, vos pubs et votre feed.',
    },
    chips: { en: ['Packshots', 'Lifestyle', 'Ad stills'], fr: ['Packshots', 'Mises en situation', 'Visuels pub'] },
    title: { en: 'Photos that make people want to hold it.', fr: 'Des photos qui donnent envie de le tenir.' },
    lead: {
      en: 'Clean packshots for the store, scenes for the brand, and stills made for ads. Shot in one session, edited in one look.',
      fr: 'Des packshots nets pour la boutique, des scènes pour la marque, et des visuels pensés pour la pub. Une seule séance, un seul style.',
    },
    gets: {
      en: ['Packshots on a clean background', 'Lifestyle scenes with props or talent', 'Close-ups of textures and details', 'Statics made to run as ads', 'Retouching in one consistent look', 'Every size your store and feed need'],
      fr: ['Packshots sur fond net', 'Mises en situation avec accessoires ou talents', 'Gros plans sur les textures et les détails', 'Visuels pensés pour la pub', 'Retouche dans un style cohérent', 'Toutes les tailles dont votre boutique et votre feed ont besoin'],
    },
    steps: {
      en: [['Shot list', 'Every product, every angle, every use.'], ['Styling', 'Props, sets and talent, approved first.'], ['Shoot', 'One session, studio or on location.'], ['Retouch', 'Selected, edited and delivered in every size.']],
      fr: [['Liste de plans', 'Chaque produit, chaque angle, chaque usage.'], ['Stylisme', 'Accessoires, décors et talents, validés avant.'], ['Séance', 'Une séance, en studio ou en extérieur.'], ['Retouche', 'Sélection, retouche et livraison dans toutes les tailles.']],
    },
    who: {
      en: [['A new store', 'Every product needs a clean photo.'], ['New ads', 'Your statics need more than phone photos.']],
      fr: [['Une nouvelle boutique', 'Chaque produit a besoin d’une photo nette.'], ['De nouvelles pubs', 'Vos visuels méritent mieux que des photos au téléphone.']],
    },
    related: ['ads', 'web', 'social'],
  },
  {
    slug: 'social', page: 'solutions/social', tone: 'yellow', price: 'quote', plan: 'bespoke',
    name: { en: 'Social content', fr: 'Contenu réseaux' },
    line: {
      en: 'A feed that sounds like you: monthly reels, carousels and posts, planned ahead.',
      fr: 'Un feed qui vous ressemble : reels, carrousels et posts chaque mois, planifiés à l’avance.',
    },
    chips: { en: ['Content plan', 'Reels and carousels', 'Captions'], fr: ['Plan de contenu', 'Reels et carrousels', 'Légendes'] },
    title: { en: 'A feed worth following.', fr: 'Un feed qui donne envie de suivre.' },
    lead: {
      en: 'Ads bring people in; your feed makes them stay. A monthly plan of reels, carousels and posts, shot with your ads so nothing is wasted.',
      fr: 'Les pubs font venir les gens ; votre feed les fait rester. Un plan mensuel de reels, carrousels et posts, tournés avec vos pubs pour ne rien perdre.',
    },
    gets: {
      en: ['A monthly content plan you approve', 'Reels made for the feed, not only for ads', 'Carousels and static posts', 'Captions in your voice', 'Covers and highlights in your brand', 'Shot on the same day as your ads'],
      fr: ['Un plan de contenu mensuel que vous validez', 'Des reels pensés pour le feed, pas seulement pour la pub', 'Carrousels et posts fixes', 'Des légendes dans votre ton', 'Couvertures et stories à la une dans votre marque', 'Tourné le même jour que vos pubs'],
    },
    steps: {
      en: [['Plan', 'The month’s themes, dates and formats.'], ['Write', 'Ideas and captions, approved in your workspace.'], ['Make', 'Shot with your ads, edited for the feed.'], ['Hand over', 'Ready to post, in order.']],
      fr: [['Planifier', 'Les thèmes, les dates et les formats du mois.'], ['Écrire', 'Idées et légendes, validées dans votre espace.'], ['Produire', 'Tourné avec vos pubs, monté pour le feed.'], ['Livrer', 'Prêt à publier, dans l’ordre.']],
    },
    who: {
      en: [['A quiet account', 'You post when you can, and it shows.'], ['Running ads already', 'People click your profile and find nothing new.']],
      fr: [['Un compte trop calme', 'Vous publiez quand vous pouvez, et ça se voit.'], ['Vous faites déjà de la pub', 'Les gens visitent votre profil et ne trouvent rien de neuf.']],
    },
    related: ['ads', 'product-photography', 'brand-identity'],
  },
  {
    slug: 'strategy', page: 'solutions/strategy', tone: 'blue', price: 'quote', plan: 'bespoke',
    name: { en: 'Creative strategy', fr: 'Stratégie créative' },
    line: {
      en: 'Market study, competitor teardown and the angles worth testing, before you spend.',
      fr: 'Étude de marché, analyse des concurrents et les angles à tester, avant de dépenser.',
    },
    chips: { en: ['Market study', 'Competitor ads', 'Testing plan'], fr: ['Étude de marché', 'Pubs concurrentes', 'Plan de tests'] },
    title: { en: 'Know what to say before you film it.', fr: 'Savoir quoi dire avant de filmer.' },
    lead: {
      en: 'We study your customers, your market and the ads your competitors keep running, then write the angles and the order to test them.',
      fr: 'On étudie vos clients, votre marché et les pubs que vos concurrents continuent de diffuser, puis on écrit les angles et l’ordre pour les tester.',
    },
    gets: {
      en: ['Who buys, and why they hesitate', 'The ads your competitors keep running, taken apart', 'Your strongest angles, written out', 'Hooks to test for each angle', 'A testing plan for the next months', 'A short deck your team can act on'],
      fr: ['Qui achète, et pourquoi ils hésitent', 'Les pubs que vos concurrents gardent, décortiquées', 'Vos angles les plus forts, rédigés', 'Des accroches à tester pour chaque angle', 'Un plan de tests pour les mois à venir', 'Un deck court sur lequel votre équipe peut agir'],
    },
    steps: {
      en: [['Listen', 'Your numbers, your customers, your questions.'], ['Study', 'Your market and your competitors’ ads.'], ['Write', 'Angles, hooks and the testing order.'], ['Present', 'One session, one deck, clear next steps.']],
      fr: [['Écouter', 'Vos chiffres, vos clients, vos questions.'], ['Étudier', 'Votre marché et les pubs de vos concurrents.'], ['Écrire', 'Angles, accroches et ordre des tests.'], ['Présenter', 'Une séance, un deck, des prochaines étapes claires.']],
    },
    who: {
      en: [['Before a campaign', 'You want to know what to say before you pay to say it.'], ['When ads stall', 'What used to work doesn’t any more.']],
      fr: [['Avant une campagne', 'Vous voulez savoir quoi dire avant de payer pour le dire.'], ['Quand les pubs plafonnent', 'Ce qui marchait ne marche plus.']],
    },
    related: ['ads', 'brand-identity', 'campaigns'],
  },
];

export const bySlug = (slug: string) => solutions.find((s) => s.slug === slug);
/** The solutions that have a page under /solutions (the Brand World has its own). */
export const pages = solutions.filter((s) => s.page.startsWith('solutions/'));

export const solCopy = {
  en: {
    nav: 'Solutions', label: 'Solutions',
    homeTitle: 'One studio. Everything your brand needs to sell.',
    homeLead: 'Ads are what we’re known for. Around them, everything that makes a brand sell: films, identity, photos, a store and the plan behind it.',
    flag: 'What we’re known for',
    all: 'All solutions',
    pageTitle: 'Everything your brand needs to sell.',
    pageLead: 'Start with ads, or bring us the whole brand. One team, one brief and one look across all of it.',
    getsTitle: 'What you get', stepsTitle: 'How it works', whoTitle: 'Good for', relatedTitle: 'Pairs well with',
    quoteTitle: 'Price', quote: 'Quoted from your brief: a clear scope, timeline and price before anything starts.',
    ask: 'Ask for a quote', start: 'Start a project', pricing: 'See pricing', plansTitle: 'Plans for video ads',
    notSure: 'Not sure where to start?', notSureLine: 'Answer a few questions. We’ll point you to the right place.', brief: 'Take the brief',
    from: 'Try it from 999 TND',
    open: 'See more',
  },
  fr: {
    nav: 'Solutions', label: 'Solutions',
    homeTitle: 'Un studio. Tout ce qu’il faut à votre marque pour vendre.',
    homeLead: 'La pub, c’est ce qui nous a fait connaître. Autour, tout ce qui fait vendre une marque : films, identité, photos, boutique et la stratégie derrière.',
    flag: 'Notre spécialité',
    all: 'Toutes les solutions',
    pageTitle: 'Tout ce qu’il faut à votre marque pour vendre.',
    pageLead: 'Commencez par la pub, ou confiez-nous toute la marque. Une équipe, un brief et un style pour tout.',
    getsTitle: 'Ce que vous recevez', stepsTitle: 'Comment ça marche', whoTitle: 'Pour qui', relatedTitle: 'Va bien avec',
    quoteTitle: 'Prix', quote: 'Sur devis, selon votre brief : un périmètre, un calendrier et un prix clairs avant de commencer.',
    ask: 'Demander un devis', start: 'Lancer un projet', pricing: 'Voir les tarifs', plansTitle: 'Les plans pour les pubs vidéo',
    notSure: 'Vous ne savez pas par où commencer ?', notSureLine: 'Répondez à quelques questions. On vous oriente.', brief: 'Remplir le brief',
    from: 'À essayer dès 999 TND',
    open: 'Voir plus',
  },
} as const;
export const sc = (lang: Locale) => solCopy[lang];
