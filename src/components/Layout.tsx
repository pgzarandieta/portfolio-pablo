import content from '@/lib/content';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="container">
        <div className="flex items-center justify-between py-6">
          <div className="text-xs uppercase tracking-[0.2em]">{content.site.name}</div>
          <nav className="flex flex-wrap gap-4 text-sm">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="container py-10 text-xs text-[var(--sb-ink)]/70">
        <div>{content.site.location}</div>
      </footer>
    </div>
  );
}
