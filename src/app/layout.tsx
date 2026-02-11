import type { Metadata } from 'next';
import { plexMono, plexSans } from '@/lib/fonts';
import content from '@/lib/content';
import { getLocale } from '@/lib/locale.server';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: content.site.name,
    template: `%s · ${content.site.name}`,
  },
  description: `${content.site.tagline} portfolio based in ${content.site.location}.`,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} data-locale={locale}>
      <body className={`${plexSans.variable} ${plexMono.variable}`}>{children}</body>
    </html>
  );
}
