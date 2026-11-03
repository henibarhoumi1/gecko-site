// One page per service, in English and French, written for the words people type into Google
// (src/pages/[lang]/services/[slug].astro). Prices come from offers.ts, so they never disagree with the plans.
type L = { en: string; fr: string };
type Ls = { en: string[]; fr: string[] };
export type Service = {
  slug: string; title: L; h1: L; lede: L; desc: L;
  gets: Ls; steps: { t: L; d: L }[]; formats: Ls; price: L;
  faq: { q: L; a: L }[];
};

const steps = [
  { t: { en: 'Brief and angles', fr: 'Brief et angles' }, d: { en: 'We look at your product, your customers and the ads you have run, then write the reasons to buy each ad is built on.', fr: 'On regarde votre produit, vos clients et les pubs déjà lancées, puis on écrit les raisons d’acheter sur lesquelles chaque pub repose.' } },
  { t: { en: 'Scripts you approve', fr: 'Des scripts que vous validez' }, d: { en: 'Every script waits for your yes before anything is filmed, in your own client space.', fr: 'Chaque script attend votre accord avant le tournage, dans votre espace client.' } },
  { t: { en: 'Shoot, edit, deliver', fr: 'Tournage, montage, livraison' }, d: { en: 'One shoot day in Tunis, a first draft 7 days later, final files in 9:16 and 4:5.', fr: 'Une journée de tournage à Tunis, un premier montage 7 jours plus tard, les fichiers finaux en 9:16 et 4:5.' } },
];

export const services: Service[] = [
  {
    slug: 'video-ads',
    title: { en: 'Video ads in Tunis', fr: 'Publicité vidéo à Tunis' },
    h1: { en: 'Video ads for brands in Tunisia.', fr: 'Des pubs vidéo pour les marques en Tunisie.' },
    lede: { en: 'Short video ads for Instagram, Facebook and TikTok, written, shot and edited in Tunis by one team, from the first idea to the final cut.', fr: 'Des pubs vidéo courtes pour Instagram, Facebook et TikTok, écrites, tournées et montées à Tunis par une seule équipe, de la première idée au montage final.' },
    desc: { en: 'Video ad production in Tunis: short ads for Instagram, Facebook and TikTok, scripted, shot and edited by one team. Monthly plans from 2,900 TND.', fr: 'Production de pubs vidéo à Tunis : des pubs courtes pour Instagram, Facebook et TikTok, écrites, tournées et montées par une seule équipe. Plans mensuels dès 2 900 TND.' },
    gets: {
      en: ['Ads built on a written reason to buy', 'Two hooks per reel on monthly plans, so your results pick the winner', 'Vertical 9:16 and 4:5 files, subtitled for sound off', 'A monthly review of what sold, and the next round written from it'],
      fr: ['Des pubs construites sur une raison d’acheter écrite', 'Deux accroches par reel sur les plans mensuels, vos résultats choisissent la meilleure', 'Des fichiers verticaux 9:16 et 4:5, sous-titrés pour le son coupé', 'Une revue mensuelle de ce qui a vendu, et la suite écrite à partir de là'],
    },
    steps,
    formats: { en: ['Product demos', 'Before and after', 'Comparisons', 'Skits', 'Tutorials', 'Founder ads'], fr: ['Démos produit', 'Avant / après', 'Comparaisons', 'Sketchs', 'Tutos', 'Pubs fondateur'] },
    price: { en: 'Try us with the Test (3 reels, 999 TND one time) or a monthly plan from 2,900 TND a month.', fr: 'Essayez-nous avec le Test (3 reels, 999 TND une fois) ou un plan mensuel dès 2 900 TND par mois.' },
    faq: [
      { q: { en: 'How fast do we get the ads?', fr: 'En combien de temps reçoit-on les pubs ?' }, a: { en: 'The first draft arrives 7 days after the shoot. You approve each one or write what to change, right under it.', fr: 'Le premier montage arrive 7 jours après le tournage. Vous validez chaque pub ou écrivez quoi changer, juste en dessous.' } },
      { q: { en: 'Do you run the ads too?', fr: 'Lancez-vous aussi les pubs ?' }, a: { en: 'No. You run your ads and pay the ad spend; we read the results you share with us and make more of what works.', fr: 'Non. Vous lancez vos pubs et payez le budget média ; on lit les résultats que vous partagez et on refait ce qui marche.' } },
      { q: { en: 'Do you work outside Tunis?', fr: 'Travaillez-vous hors de Tunis ?' }, a: { en: 'We shoot across Tunisia and work with brands abroad.', fr: 'On tourne partout en Tunisie et on travaille avec des marques à l’étranger.' } },
    ],
  },
  {
    slug: 'ugc-ads',
    title: { en: 'UGC ads in Tunisia', fr: 'Pubs UGC en Tunisie' },
    h1: { en: 'UGC ads that feel real and still sell.', fr: 'Des pubs UGC naturelles, qui vendent quand même.' },
    lede: { en: 'Creator-style ads filmed like a customer’s own video, with a script behind every second, cast and shot in Tunis.', fr: 'Des pubs au style créateur, filmées comme la vidéo d’un client, avec un script derrière chaque seconde, castées et tournées à Tunis.' },
    desc: { en: 'UGC ads in Tunisia: creator-style video ads, scripted, cast and shot in Tunis for Instagram, Facebook and TikTok. Scripts approved before the shoot.', fr: 'Pubs UGC en Tunisie : des pubs vidéo au style créateur, écrites, castées et tournées à Tunis pour Instagram, Facebook et TikTok. Scripts validés avant le tournage.' },
    gets: {
      en: ['Creators and talent cast for your customer', 'Scripts that sound spoken, approved by you before filming', 'Several openings per ad to test', 'Raw selects you can recut later'],
      fr: ['Des créateurs et talents choisis pour ressembler à vos clients', 'Des scripts qui sonnent parlés, validés par vous avant le tournage', 'Plusieurs accroches par pub à tester', 'Des rushs sélectionnés à remonter plus tard'],
    },
    steps,
    formats: { en: ['UGC ads', 'Testimonials', 'Unboxings', 'Street interviews', 'POV ads', 'Reaction ads'], fr: ['Pubs UGC', 'Témoignages', 'Unboxings', 'Micro-trottoirs', 'Pubs POV', 'Pubs réaction'] },
    price: { en: 'UGC ads are part of every plan: the Test (999 TND one time) or monthly plans from 2,900 TND a month.', fr: 'Les pubs UGC font partie de chaque plan : le Test (999 TND une fois) ou les plans mensuels dès 2 900 TND par mois.' },
    faq: [
      { q: { en: 'Who appears in the ads?', fr: 'Qui apparaît dans les pubs ?' }, a: { en: 'Creators and talent we cast for your brand, or you and your team if you prefer. Talent fees are agreed before the shoot.', fr: 'Des créateurs et talents choisis pour votre marque, ou vous et votre équipe si vous préférez. Les cachets sont fixés avant le tournage.' } },
      { q: { en: 'Do I need to be on camera?', fr: 'Dois-je être à l’écran ?' }, a: { en: 'No. Founder ads work well, but most UGC ads use cast creators.', fr: 'Non. Les pubs fondateur marchent bien, mais la plupart des pubs UGC utilisent des créateurs castés.' } },
      { q: { en: 'Can we use the ads as paid ads?', fr: 'Peut-on utiliser les pubs en publicité payante ?' }, a: { en: 'Yes. Every file is made to post or run as an ad.', fr: 'Oui. Chaque fichier est prêt à publier ou à lancer en pub.' } },
    ],
  },
  {
    slug: 'ramadan-campaigns',
    title: { en: 'Ramadan ad campaigns', fr: 'Campagnes pub Ramadan' },
    h1: { en: 'Ramadan campaigns, ready before the first iftar.', fr: 'Vos campagnes Ramadan, prêtes avant le premier ftour.' },
    lede: { en: 'Ramadan 2027 starts in early February. Brands that win it script and shoot in December and January, so their ads are tested before the month begins.', fr: 'Le Ramadan 2027 commence début février. Les marques qui le réussissent écrivent et tournent en décembre et janvier, pour que leurs pubs soient testées avant le début du mois.' },
    desc: { en: 'Ramadan ad campaigns in Tunisia: video ads scripted, shot and edited in Tunis before Ramadan 2027, with shoot dates booked from December.', fr: 'Campagnes pub Ramadan en Tunisie : des pubs vidéo écrites, tournées et montées à Tunis avant le Ramadan 2027, avec des dates de tournage dès décembre.' },
    gets: {
      en: ['A campaign idea that fits the month and your product', 'Ads for before, during and after Ramadan (Aïd included)', 'Shoot dates booked early, before studios fill up', 'Files ready to schedule before the first day'],
      fr: ['Une idée de campagne qui colle au mois et à votre produit', 'Des pubs pour avant, pendant et après le Ramadan (Aïd compris)', 'Des dates de tournage réservées tôt, avant que les studios soient pleins', 'Des fichiers prêts à programmer avant le premier jour'],
    },
    steps,
    formats: { en: ['Brand films', 'Family skits', 'Recipes and tutorials', 'Product films', 'Offers and countdowns', 'Aïd ads'], fr: ['Films de marque', 'Sketchs en famille', 'Recettes et tutos', 'Films produit', 'Offres et comptes à rebours', 'Pubs Aïd'] },
    price: { en: 'Ramadan campaigns are quoted from your brief. Tell us what you’re making and we reply with dates and a price.', fr: 'Les campagnes Ramadan sont chiffrées à partir de votre brief. Dites-nous ce que vous préparez, on répond avec des dates et un prix.' },
    faq: [
      { q: { en: 'When should we start?', fr: 'Quand faut-il commencer ?' }, a: { en: 'Now. Scripts in December, shoot in January, final files a week or two before Ramadan.', fr: 'Maintenant. Scripts en décembre, tournage en janvier, fichiers finaux une à deux semaines avant le Ramadan.' } },
      { q: { en: 'Can a monthly plan cover Ramadan?', fr: 'Un plan mensuel peut-il couvrir le Ramadan ?' }, a: { en: 'Yes. A monthly plan can put its January shoot toward Ramadan ads.', fr: 'Oui. Un plan mensuel peut consacrer son tournage de janvier aux pubs Ramadan.' } },
      { q: { en: 'How does payment work?', fr: 'Comment se passe le paiement ?' }, a: { en: 'A 50% deposit books the shoot date; the balance is due when you approve the final files.', fr: 'Un acompte de 50 % réserve la date de tournage ; le solde est dû à la validation des fichiers finaux.' } },
    ],
  },
];
