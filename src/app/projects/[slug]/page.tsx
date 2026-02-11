import Layout from '@/components/Layout';
import { getCaseStudies, getCaseStudyBySlug } from '@/lib/case-studies';
import { getCopy } from '@/lib/i18n';
import { getLocale } from '@/lib/locale.server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import ReactMarkdown from 'react-markdown';

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export const generateStaticParams = async () => {
  return getCaseStudies().map((study) => ({ slug: study.slug }));
};

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const locale = await getLocale();
  const caseStudy = getCaseStudyBySlug(slug, locale);
  const t = getCopy(locale);

  if (!caseStudy) {
    notFound();
  }

  return (
    <Layout>
      <section className="container section">
        <div className="stack">
          <Link
            href="/projects"
            className="text-xs uppercase tracking-[0.2em] text-[var(--sb-ink)]/60"
          >
            {t.projects.back}
          </Link>
          <h1>{caseStudy.title}</h1>
          {caseStudy.summary && (
            <p className="text-lg text-[var(--sb-ink)]/80">{caseStudy.summary}</p>
          )}
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em] text-[var(--sb-ink)]/60">
            {caseStudy.date && <span>{caseStudy.date}</span>}
            {caseStudy.role && <span>{caseStudy.role}</span>}
            {caseStudy.confidentiality && <span>{caseStudy.confidentiality}</span>}
          </div>
        </div>
      </section>
      <section className="container section">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <article className="rounded-2xl border border-[var(--sb-ink)]/10 bg-[var(--color-surface)] p-6">
            <div className="prose max-w-none text-[var(--sb-ink)]/80">
              <ReactMarkdown
                components={{
                  a: ({ href, children, ...props }) => {
                    const text = React.Children.toArray(children).join('');
                    const isProjectLink = href?.startsWith('/projects/');
                    const isCta = isProjectLink && text.toLowerCase().startsWith('go to');

                    if (isCta) {
                      return (
                        <a
                          {...props}
                          href={href}
                          className="inline-flex items-center rounded-full border border-[var(--sb-ink)]/30 bg-[var(--color-muted)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--sb-ink)]/80 transition hover:border-[var(--sb-ink)]"
                        >
                          {children}
                        </a>
                      );
                    }

                    return (
                      <a {...props} href={href}>
                        {children}
                      </a>
                    );
                  },
                }}
              >
                {caseStudy.content}
              </ReactMarkdown>
            </div>
          </article>
          <aside className="stack">
            {caseStudy.stack && caseStudy.stack.length > 0 && (
              <div className="rounded-2xl border border-[var(--sb-ink)]/10 bg-[var(--color-muted)] p-5">
                <h2 className="text-base">{t.projects.stack}</h2>
                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-[var(--sb-ink)]/70">
                  {caseStudy.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {caseStudy.metrics && caseStudy.metrics.length > 0 && (
              <div className="rounded-2xl border border-[var(--sb-ink)]/10 bg-[var(--color-surface)] p-5">
                <h2 className="text-base">{t.projects.impact}</h2>
                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-[var(--sb-ink)]/70">
                  {caseStudy.metrics.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {caseStudy.tags && caseStudy.tags.length > 0 && (
              <div className="rounded-2xl border border-[var(--sb-ink)]/10 bg-[var(--color-muted)] p-5">
                <h2 className="text-base">{t.projects.tags}</h2>
                <div className="mt-3 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[var(--sb-ink)]/60">
                  {caseStudy.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </Layout>
  );
}
