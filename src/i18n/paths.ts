import type { Locale } from './strings';

// Localised link: href('fr', 'offers') -> /fr/offers/
export const href = (lang: Locale, path = '') => `/${lang}/${path ? path.replace(/^\/|\/$/g, '') + '/' : ''}`;

// Same page in the other language: swaps the first path segment.
export const swapLang = (pathname: string, to: Locale) => pathname.replace(/^\/(en|fr)(?=\/|$)/, `/${to}`);
