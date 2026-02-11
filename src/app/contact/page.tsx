import Layout from '@/components/Layout';
import content from '@/lib/content';
import { getCopy } from '@/lib/i18n';
import { getLocale } from '@/lib/locale.server';

export default async function ContactPage() {
  const locale = await getLocale();
  const t = getCopy(locale);

  return (
    <Layout>
      <section className="container section">
        <div className="stack">
          <h1>{t.contact.title}</h1>
          <p className="text-lg text-[var(--sb-ink)]/80">{t.contact.intro}</p>
        </div>
      </section>
      <section className="container section">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-[var(--sb-ink)]/10 bg-[var(--color-muted)] p-6">
            <h2 className="text-lg">{t.contact.direct}</h2>
            <div className="mt-4 grid gap-3 text-sm text-[var(--sb-ink)]/80">
              <a href={`mailto:${content.contact.email}`} className="font-medium">
                {content.contact.email}
              </a>
              {content.contact.phone && (
                <a href={`tel:${content.contact.phone}`} className="font-medium">
                  {content.contact.phone}
                </a>
              )}
              {content.contact.location && <div>{content.contact.location}</div>}
            </div>
          </div>
          <div className="rounded-3xl border border-[var(--sb-ink)]/10 bg-[var(--color-surface)] p-6">
            <h2 className="text-lg">{t.contact.links}</h2>
            <div className="mt-4 grid gap-3 text-sm">
              {content.contact.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
