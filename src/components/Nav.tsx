import Link from 'next/link';

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="text-sm uppercase tracking-[0.2em]">PABLO</div>
      <div className="flex gap-6 text-sm">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
