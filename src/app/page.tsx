import Layout from '@/components/Layout';
import content from '@/lib/content';
import Link from 'next/link';

export default function Home() {
  const highlightProjects = content.projects.slice(0, 3);

  return (
    <Layout>
      <section className="container section">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="stack">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--sb-ink)]/60">Portfolio</p>
            <h1 className="text-balance">{content.site.name}</h1>
            <p className="text-lg text-[var(--sb-ink)]/80">{content.site.tagline}</p>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--sb-ink)]/60">
              {content.site.location}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--sb-ink)]/20 px-4 py-2 text-sm"
              >
                View projects
              </Link>
              {content.site.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-muted)] px-4 py-2 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-[var(--sb-ink)]/10 bg-[var(--color-muted)] p-6">
            <h2 className="text-lg">Focus areas</h2>
            <div className="mt-4 grid gap-3 text-sm">
              {content.profiles.slice(0, 3).map((profile) => (
                <div key={profile.id}>
                  <div className="font-medium">{profile.title}</div>
                  <div className="text-[var(--sb-ink)]/70">{profile.summary}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="container section">
        <div className="flex items-end justify-between gap-4">
          <h2>Highlights</h2>
          <Link href="/projects" className="text-sm">
            All projects →
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {highlightProjects.map((project) => (
            <article
              key={project.id}
              className="flex h-full flex-col gap-3 rounded-2xl border border-[var(--sb-ink)]/10 bg-white/80 p-5"
            >
              <div>
                <h3 className="text-lg">{project.title}</h3>
                <p className="text-sm text-[var(--sb-ink)]/70">{project.summary}</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[var(--sb-ink)]/60">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
