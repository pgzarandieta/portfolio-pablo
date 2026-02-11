import content from '@/lib/content';
import { getCopy } from '@/lib/i18n';
import { getLocale } from '@/lib/locale.server';
import LanguageToggle from '@/components/LanguageToggle';
import Link from 'next/link';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const t = getCopy(locale);
  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/projects', label: t.nav.projects },
    { href: '/resume', label: t.nav.resume },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <div>
      <header className="container">
        <div className="flex flex-wrap items-center justify-between gap-4 py-6">
          <div className="text-xs uppercase tracking-[0.2em]">{content.site.name}</div>
          <div className="flex flex-wrap items-center gap-4">
            <nav className="flex flex-wrap gap-4 text-sm">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <LanguageToggle currentLocale={locale} />
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="container py-10 text-xs text-[var(--sb-ink)]/70">
        <div>{content.site.location}</div>
      </footer>
    </div>
  );
}
