import { cookies, headers } from 'next/headers';
import { defaultLocale, LOCALE_COOKIE, normalizeLocale, type Locale } from './locale';

const detectLocaleFromHeader = async (): Promise<Locale> => {
  const accept = (await headers()).get('accept-language') ?? '';
  const tokens = accept
    .split(',')
    .map((segment) => segment.trim().split(';')[0])
    .filter(Boolean);

  for (const token of tokens) {
    const locale = normalizeLocale(token);
    if (locale) return locale;
  }

  return defaultLocale;
};

export const getLocale = async (): Promise<Locale> => {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(LOCALE_COOKIE)?.value;
  const cookieLocale = normalizeLocale(cookieValue);
  if (cookieLocale) {
    return cookieLocale;
  }

  return detectLocaleFromHeader();
};
