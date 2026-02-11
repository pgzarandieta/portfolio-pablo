import Layout from '@/components/Layout';
import { getCaseStudies } from '@/lib/case-studies';
import content from '@/lib/content';
import Link from 'next/link';

type ProjectsPageProps = {
  searchParams?: { profile?: string } | Promise<{ profile?: string }>;
};

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const caseStudySlugs = new Set(getCaseStudies().map((study) => study.slug));
  const resolvedSearchParams = (await searchParams) ?? {};
  const activeProfile = resolvedSearchParams.profile;
  const knownProfiles = new Set(content.profiles.map((profile) => profile.id));
  const selectedProfile = activeProfile && knownProfiles.has(activeProfile) ? activeProfile : null;
  const filteredProjects = selectedProfile
    ? content.projects.filter((project) => project.profiles?.includes(selectedProfile))
    : content.projects;

  return (
    <Layout>
      <section className="container section">
        <div className="stack">
          <h1>Projects</h1>
          <p className="text-lg text-[var(--sb-ink)]/80">
            Case studies and personal projects that represent the core of my experience.
          </p>
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[var(--sb-ink)]/60">
            <span>Filter by profile:</span>
          </div>
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em]">
            <Link
              href="/projects"
              className={`rounded-full border px-3 py-1.5 ${
                selectedProfile ? 'border-[var(--sb-ink)]/20' : 'border-[var(--sb-ink)]'
              }`}
            >
              All
            </Link>
            {content.profiles.map((profile) => (
              <Link
                key={profile.id}
                href={`/projects?profile=${profile.id}`}
                className={`rounded-full border px-3 py-1.5 ${
                  selectedProfile === profile.id
                    ? 'border-[var(--sb-ink)] text-[var(--sb-ink)]'
                    : 'border-[var(--sb-ink)]/20 text-[var(--sb-ink)]/70'
                }`}
              >
                {profile.title}
              </Link>
            ))}
          </div>
          {selectedProfile && (
            <p className="text-sm text-[var(--sb-ink)]/70">
              Showing projects for {content.profiles.find((p) => p.id === selectedProfile)?.title}
            </p>
          )}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {filteredProjects.map((project) => (
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
