import Link from 'next/link';

export type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
};

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-[var(--color-accent)] text-[var(--sb-paper)] border border-transparent hover:opacity-90',
  secondary:
    'bg-transparent text-[var(--color-text)] border border-[var(--sb-ink)] hover:bg-[var(--sb-sand)]',
  ghost:
    'bg-transparent text-[var(--color-text)] border border-transparent hover:bg-[var(--sb-sand)]',
};

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-5 py-2.5',
};

export default function Button({ href, children, variant = 'primary', size = 'md' }: ButtonProps) {
  const className = `inline-flex items-center justify-center gap-2 rounded-full transition ${
    variantClasses[variant]
  } ${sizeClasses[size]}`;

  if (href) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
}
