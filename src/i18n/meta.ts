import type { Locale } from './strings';

// What Google and link previews show for each page: the home title, and one description per page.
const meta = {
  en: {
    home: 'Short video ads for brands, Tunis',
    desc: {
      home: 'Gecko is a creative studio in Tunis. We develop, shoot and edit short video ads for brands. Plans from 999 TND.',
      work: 'Four reels for Glucélia: the ideas, the choices behind them and the finished ads.',
      process: 'From brief to final files: every step of a Gecko project, what we need from you and when you pay.',
      offers: 'The Test at 999 TND, monthly plans from 2,900 TND, and bespoke projects quoted from your brief. Launch prices until 31 December 2026.',
      about: 'A creative and production studio in Tunis, founded by Heni Barhoumi, for ideas that have to sell.',
      faq: 'Straight answers on prices, timing, payment, revisions and what you receive.',
      contact: 'Write to Gecko on WhatsApp, by email or on Instagram. Based in Tunis.',
      apply: 'Answer a few quick questions about your brand and we’ll suggest where to start.',
      join: 'Talent, creators, camera and editors: show us your work and make ads with Gecko.',
    },
  },
  fr: {
    home: 'Pubs vidéo courtes pour les marques, Tunis',
    desc: {
      home: 'Gecko est un studio de création à Tunis. On conçoit, tourne et monte des pubs vidéo courtes pour les marques. Des plans dès 999 TND.',
      work: 'Quatre reels pour Glucélia\u00a0: les idées, les choix derrière et les pubs finies.',
      process: 'Du brief aux fichiers finaux\u00a0: chaque étape d’un projet Gecko, ce qu’il nous faut de vous et quand vous payez.',
      offers: 'Le Test à 999 TND, des plans mensuels dès 2 900 TND, et des projets sur mesure chiffrés selon votre brief. Prix de lancement jusqu’au 31 décembre 2026.',
      about: 'Un studio de création et de production à Tunis, fondé par Heni Barhoumi, pour les idées qui doivent vendre.',
      faq: 'Des réponses claires sur les prix, les délais, le paiement, les retouches et ce que vous recevez.',
      contact: 'Écrivez à Gecko sur WhatsApp, par e-mail ou sur Instagram. Basés à Tunis.',
      apply: 'Répondez à quelques questions sur votre marque et on vous dit par où commencer.',
      join: 'Talents, créateurs, image et montage\u00a0: montrez-nous votre travail et faites des pubs avec Gecko.',
    },
  },
} as const;

export type Page = keyof typeof meta.en.desc;
export const m = (lang: Locale) => meta[lang];
