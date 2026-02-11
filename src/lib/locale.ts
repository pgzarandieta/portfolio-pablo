export type Locale = 'es' | 'en' | 'zh';

export const LOCALE_COOKIE = 'sb_locale';
export const defaultLocale: Locale = 'es';
export const supportedLocales: Locale[] = ['es', 'en', 'zh'];

export const normalizeLocale = (value?: string | null): Locale | null => {
  if (!value) return null;
  const normalized = value.toLowerCase();
  if (normalized.startsWith('es')) return 'es';
  if (normalized.startsWith('en')) return 'en';
  if (normalized.startsWith('zh')) return 'zh';
  return null;
};
