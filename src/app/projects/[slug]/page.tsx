import Layout from '@/components/Layout';
import { getCaseStudies, getCaseStudyBySlug } from '@/lib/case-studies';
import Link from 'next/link';
import { notFound } from 'next/navigation';
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
  const caseStudy = getCaseStudyBySlug(slug);

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
            ← Back to projects
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
          <article className="rounded-2xl border border-[var(--sb-ink)]/10 bg-white/80 p-6">
            <div className="prose max-w-none text-[var(--sb-ink)]/80">
              <ReactMarkdown>{caseStudy.content}</ReactMarkdown>
            </div>
          </article>
          <aside className="stack">
            {caseStudy.stack && caseStudy.stack.length > 0 && (
              <div className="rounded-2xl border border-[var(--sb-ink)]/10 bg-[var(--color-muted)] p-5">
                <h2 className="text-base">Stack</h2>
                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-[var(--sb-ink)]/70">
                  {caseStudy.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {caseStudy.metrics && caseStudy.metrics.length > 0 && (
              <div className="rounded-2xl border border-[var(--sb-ink)]/10 bg-white/80 p-5">
                <h2 className="text-base">Impact</h2>
                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-[var(--sb-ink)]/70">
                  {caseStudy.metrics.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            {caseStudy.tags && caseStudy.tags.length > 0 && (
              <div className="rounded-2xl border border-[var(--sb-ink)]/10 bg-[var(--color-muted)] p-5">
                <h2 className="text-base">Tags</h2>
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
