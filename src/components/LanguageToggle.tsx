'use client';

import { LOCALE_COOKIE, type Locale } from '@/lib/locale';

const setLocaleCookie = (locale: Locale) => {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
};

export default function LanguageToggle({ currentLocale }: { currentLocale: Locale }) {
  const handleChange = (locale: Locale) => {
    if (locale === currentLocale) return;
    setLocaleCookie(locale);
    window.location.reload();
  };

  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--sb-ink)]/70">
      <button
        type="button"
        onClick={() => handleChange('es')}
        className={`rounded-full border px-2 py-1 ${
          currentLocale === 'es'
            ? 'border-[var(--sb-ink)] text-[var(--sb-ink)]'
            : 'border-[var(--sb-ink)]/20 text-[var(--sb-ink)]/60'
        }`}
        aria-pressed={currentLocale === 'es'}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => handleChange('en')}
        className={`rounded-full border px-2 py-1 ${
          currentLocale === 'en'
            ? 'border-[var(--sb-ink)] text-[var(--sb-ink)]'
            : 'border-[var(--sb-ink)]/20 text-[var(--sb-ink)]/60'
        }`}
        aria-pressed={currentLocale === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => handleChange('zh')}
        className={`rounded-full border px-2 py-1 ${
          currentLocale === 'zh'
            ? 'border-[var(--sb-ink)] text-[var(--sb-ink)]'
            : 'border-[var(--sb-ink)]/20 text-[var(--sb-ink)]/60'
        }`}
        aria-pressed={currentLocale === 'zh'}
      >
        中文
      </button>
    </div>
  );
}
