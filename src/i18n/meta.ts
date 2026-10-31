import type { Locale } from './strings';

// What Google and link previews show for each page: the home title, and one description per page.
const meta = {
  en: {
    home: 'Short video ads for brands, Tunis',
    desc: {
      home: 'Short video ads for brands that sell online, written, shot and edited in Tunis. Monthly plans and bespoke projects.',
      work: 'Short ads, each built on one idea: the reels, why they work and the formats we make.',
      process: 'From brief to final files: every step of a Gecko project, what we need from you and when you pay.',
      offers: 'The Test at 999 TND, monthly plans from 2,900 TND, and bespoke projects quoted from your brief. Launch prices until 31 December 2026.',
      about: 'A creative and production studio in Tunis for ideas that have to sell: who we are and what changes when you work with us.',
      faq: 'Straight answers on prices, timing, payment, revisions and what you receive.',
      contact: 'Write to Gecko on WhatsApp, by email or on Instagram. Based in Tunis.',
      apply: 'Answer a few quick questions about your brand and we’ll suggest where to start.',
      join: 'Talent, creators, camera and editors: show us your work and make ads with Gecko.',
    },
  },
  fr: {
    home: 'Pubs vidéo courtes pour les marques, Tunis',
    desc: {
      home: 'Des pubs vidéo courtes pour les marques qui vendent en ligne, écrites, tournées et montées à Tunis. Plans mensuels et projets sur mesure.',
      work: 'Des pubs courtes, chacune construite sur une idée\u00a0: les reels, pourquoi ils marchent et les formats qu’on fait.',
      process: 'Du brief aux fichiers finaux\u00a0: chaque étape d’un projet Gecko, ce qu’il nous faut de vous et quand vous payez.',
      offers: 'Le Test à 999 TND, des plans mensuels dès 2 900 TND, et des projets sur mesure chiffrés selon votre brief. Prix de lancement jusqu’au 31 décembre 2026.',
      about: 'Un studio de création et de production à Tunis pour les idées qui doivent vendre\u00a0: qui on est et ce qui change quand vous travaillez avec nous.',
      faq: 'Des réponses claires sur les prix, les délais, le paiement, les retouches et ce que vous recevez.',
      contact: 'Écrivez à Gecko sur WhatsApp, par e-mail ou sur Instagram. Basés à Tunis.',
      apply: 'Répondez à quelques questions sur votre marque et on vous dit par où commencer.',
      join: 'Talents, créateurs, image et montage\u00a0: montrez-nous votre travail et faites des pubs avec Gecko.',
    },
  },
} as const;

export type Page = keyof typeof meta.en.desc;
export const m = (lang: Locale) => meta[lang];
