import { locales } from './strings';
export const langPaths = () => locales.map((lang) => ({ params: { lang } }));
