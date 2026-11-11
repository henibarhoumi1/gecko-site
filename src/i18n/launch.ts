// Copy added for the launch edition (plan rev 2, 11 Nov 2026). English is from the plan. The French is written in the
// same voice with the site's own terms (Réalisations, Offres, reels, visuels): Heni to check every French line.
import type { Locale } from './strings';

const en = {
  hero: { line: 'Gecko is a creative studio in Tunis. Short video ads for brands that sell online, and the whole brand world around them.', caption: (t: string, f: string) => (f ? `${t} · ${f}` : t) },
  what: {
    title: 'One studio. Everything your brand needs to sell.',
    items: [
      ['Strategy', 'We study your business, your market and your strongest competitors before we write a word.'],
      ['Creative', 'Angles, hooks and scripts. You approve every one before a camera turns on.'],
      ['Production', 'Shoots, edits and product photography. One crew, start to finish.'],
      ['Brand and web', 'Identity, brand deck, website assets, and a store with its own back office.'],
    ],
  },
  formats: 'Formats',
  bw: {
    label: 'New',
    name: 'The Brand World',
    title: 'You bring the product. We build the world around it.',
    lead: 'For brands launching or starting over. One team studies your market, builds the brand, shoots the campaign and opens the store.',
    startTitle: 'How it starts',
    start: ['Send us the product.', 'Fill in one onboarding form.', 'We study your business, your market and the best competitors.', 'We launch or rebrand, then sell and track every order.'],
    insideTitle: 'What’s inside',
    inside: [
      'Market study and strategy.',
      'Brand identity or rebrand, with a brand deck.',
      'First campaign: 15 reels, built to test many variations and find your winning formats early.',
      'Product photography.',
      'Website assets and a website with its own custom back office: orders, products, stock and payments in one place, with your Meta ads results beside them.',
      'Creative support from the team throughout.',
    ],
    value: 'Bought separately, that is a strategist, a designer, a photographer, a video crew and a web developer. Here it is one team, one brief and one look.',
    price: 'Quoted for your brand. Ask for a quote and you get a clear scope, timeline and price.',
    quote: 'Ask for a quote', see: 'See what’s inside',
    // Page /brand-world
    holdTitle: 'What you hold at the end',
    hold: ['Brand deck and identity files', '15 reels', 'Product photos', 'The website live, with its custom back office', 'Workspace access'],
    forTitle: 'Who it’s for',
    who: [['Launching', 'You have a product and no brand around it yet.'], ['Rebranding', 'You have a brand that no longer sells what you make.']],
    priceTitle: 'Price',
  },
  plans: {
    title: 'Choose how we work together.',
    ways: ['Try', 'Every month', 'The whole brand'],
    everyTitle: 'In every plan',
    every: ['Research and one written angle per ad', 'Scripts you approve before the shoot', 'The shoot and the edit by one team', 'Subtitles, licensed music, 9:16 and 4:5', 'First draft 7 days after the shoot', 'Your private workspace'],
    start: 'Start here', lowest: 'Lowest price per reel',
    forWho: 'Who it’s for', gives: 'What you get', perReel: (n: number) => `About ${n} TND per reel`,
    testWorks: 'One payment, once', openings: (n: number) => `${n} openings to test`,
    custom: 'Custom price', talk: 'Talk to us', choose: 'Choose', quoteBW: 'Ask for a quote',
    bwText: 'Strategy, brand, 15 reels, product photos and a website with its own back office. One team.',
    partnerGives: ['20–100 reels a month, 3 hooks each', 'Market analysis for your category', 'Weekly review', 'Priority shoot dates'],
  },
  ws: {
    label: 'One link. The whole project.',
    title: 'Watch your ads get made.',
    lead: 'Every idea, script, shoot date, cut and invoice lives in one private workspace. Included with every plan, the Test too.',
    blocks: [
      ['Nothing is filmed without your yes.', 'Scripts, hooks and calls to action are written where you can read them. You approve with one click.'],
      ['No more “which version?”', 'Each cut sits with your notes under it. Final files stay in one place.'],
      ['Every round gets smarter.', 'Your results go back to the hooks that earned them, and the next scripts start from what worked.'],
    ],
    row: ['Idea', 'Script', 'Shoot', 'Cut', 'Results', 'next idea'],
    cta: 'See how a project runs',
  },
  strip: { formats: ['Reels', 'Statics', 'Carousels', 'Recut ads', '9:16', '4:5'], next: 'Let’s make your next ad' },
  apply: {
    titleStart: 'Tell us what you’re ', roll: ['making', 'launching', 'rebranding', 'selling'],
    world: ['🌍', 'The whole brand world'], bw: 'The Brand World, quoted for your brand',
  },
  faqAll: 'See all questions',
};

const fr: typeof en = {
  hero: { line: 'Gecko est un studio créatif à Tunis. Des pubs vidéo courtes pour les marques qui vendent en ligne, et tout l’univers de marque autour.', caption: en.hero.caption },
  what: {
    title: 'Un studio. Tout ce dont votre marque a besoin pour vendre.',
    items: [
      ['Stratégie', 'On étudie votre activité, votre marché et vos concurrents les plus forts avant d’écrire un mot.'],
      ['Création', 'Angles, accroches et scripts. Vous validez chacun avant qu’une caméra ne tourne.'],
      ['Production', 'Tournages, montages et photo produit. Une seule équipe, du début à la fin.'],
      ['Marque et web', 'Identité, brand deck, visuels de site, et une boutique avec son propre back-office.'],
    ],
  },
  formats: 'Formats',
  bw: {
    label: 'Nouveau',
    name: 'L’Univers de marque',
    title: 'Vous apportez le produit. On construit l’univers autour.',
    lead: 'Pour les marques qui se lancent ou repartent de zéro. Une seule équipe étudie votre marché, construit la marque, tourne la campagne et ouvre la boutique.',
    startTitle: 'Comment ça commence',
    start: ['Envoyez-nous le produit.', 'Remplissez un seul formulaire d’accueil.', 'On étudie votre activité, votre marché et les meilleurs concurrents.', 'On lance ou on refait la marque, puis on vend et on suit chaque commande.'],
    insideTitle: 'Ce qu’il y a dedans',
    inside: [
      'Étude de marché et stratégie.',
      'Identité de marque ou refonte, avec un brand deck.',
      'Première campagne : 15 reels, pensés pour tester de nombreuses variations et trouver tôt vos formats gagnants.',
      'Photo produit.',
      'Visuels de site et un site avec son propre back-office sur mesure : commandes, produits, stock et paiements au même endroit, avec les résultats de vos pubs Meta à côté.',
      'Le soutien créatif de l’équipe tout au long du projet.',
    ],
    value: 'Achetés séparément, c’est un stratège, un designer, un photographe, une équipe vidéo et un développeur web. Ici, c’est une équipe, un brief et un style.',
    price: 'Sur devis pour votre marque. Demandez un devis : vous recevez un périmètre, un calendrier et un prix clairs.',
    quote: 'Demander un devis', see: 'Voir ce qu’il y a dedans',
    holdTitle: 'Ce que vous avez à la fin',
    hold: ['Le brand deck et les fichiers d’identité', '15 reels', 'Les photos produit', 'Le site en ligne, avec son back-office sur mesure', 'L’accès à l’espace de travail'],
    forTitle: 'Pour qui',
    who: [['Se lancer', 'Vous avez un produit et pas encore de marque autour.'], ['Repartir de zéro', 'Votre marque ne vend plus ce que vous faites.']],
    priceTitle: 'Prix',
  },
  plans: {
    title: 'Choisissez comment on travaille ensemble.',
    ways: ['Essayer', 'Chaque mois', 'Toute la marque'],
    everyTitle: 'Dans chaque plan',
    every: ['Recherche et un angle écrit par pub', 'Des scripts que vous validez avant le tournage', 'Le tournage et le montage par une seule équipe', 'Sous-titres, musique sous licence, 9:16 et 4:5', 'Premier montage 7 jours après le tournage', 'Votre espace de travail privé'],
    start: 'Commencez ici', lowest: 'Prix par reel le plus bas',
    forWho: 'Pour qui', gives: 'Ce que vous recevez', perReel: (n: number) => `Environ ${n} TND par reel`,
    testWorks: 'Un seul paiement', openings: (n: number) => `${n} ouvertures à tester`,
    custom: 'Prix sur mesure', talk: 'Parlons-en', choose: 'Choisir', quoteBW: 'Demander un devis',
    bwText: 'Stratégie, marque, 15 reels, photos produit et un site avec son propre back-office. Une seule équipe.',
    partnerGives: ['20 à 100 reels par mois, 3 accroches chacun', 'Analyse de marché de votre secteur', 'Revue hebdomadaire', 'Dates de tournage prioritaires'],
  },
  ws: {
    label: 'Un lien. Tout le projet.',
    title: 'Regardez vos pubs se fabriquer.',
    lead: 'Chaque idée, script, date de tournage, montage et facture vit dans un seul espace de travail privé. Inclus dans tous les plans, le Test aussi.',
    blocks: [
      ['Rien n’est tourné sans votre feu vert.', 'Scripts, accroches et appels à l’action sont écrits là où vous pouvez les lire. Vous validez en un clic.'],
      ['Fini le « quelle version ? »', 'Chaque montage a vos notes juste en dessous. Les fichiers finaux restent au même endroit.'],
      ['Chaque tour est plus malin.', 'Vos résultats remontent aux accroches qui les ont obtenus, et les scripts suivants partent de ce qui a marché.'],
    ],
    row: ['Idée', 'Script', 'Tournage', 'Montage', 'Résultats', 'prochaine idée'],
    cta: 'Voir comment un projet se déroule',
  },
  strip: { formats: ['Reels', 'Visuels fixes', 'Carrousels', 'Pubs remontées', '9:16', '4:5'], next: 'Faisons votre prochaine pub' },
  apply: {
    titleStart: 'Dites-nous ce que vous ', roll: ['préparez', 'lancez', 'refondez', 'vendez'],
    world: ['🌍', 'Tout l’univers de marque'], bw: 'L’Univers de marque, sur devis',
  },
  faqAll: 'Voir toutes les questions',
};

export const launch = (lang: Locale) => (lang === 'fr' ? fr : en);
