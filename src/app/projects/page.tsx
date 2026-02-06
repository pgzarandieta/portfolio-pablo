import Layout from '@/components/Layout';
import { getCaseStudies } from '@/lib/case-studies';
import content from '@/lib/content';
import Link from 'next/link';

export default function ProjectsPage() {
  const caseStudySlugs = new Set(getCaseStudies().map((study) => study.slug));

  return (
    <Layout>
      <section className="container section">
        <div className="stack">
          <h1>Projects</h1>
          <p className="text-lg text-[var(--sb-ink)]/80">
            Case studies and personal projects that represent the core of my experience.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {content.projects.map((project) => (
            <article
              key={project.id}
              className="flex h-full flex-col gap-4 rounded-2xl border border-[var(--sb-ink)]/10 bg-white/80 p-6"
            >
              <div className="stack">
                <h2 className="text-xl">{project.title}</h2>
                <p className="text-sm text-[var(--sb-ink)]/70">{project.summary}</p>
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[var(--sb-ink)]/60">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="mt-auto flex flex-wrap gap-3 text-sm">
                {project.caseStudySlug && caseStudySlugs.has(project.caseStudySlug) ? (
                  <Link href={`/projects/${project.caseStudySlug}`} className="font-medium">
                    View case study →
                  </Link>
                ) : (
                  <span className="text-[var(--sb-ink)]/50">Case study coming soon</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
