import Layout from '@/components/Layout';
import content from '@/lib/content';

const formatDate = (value: string) => {
  if (!value) return '';
  if (value.toLowerCase() === 'present') return 'Present';
  if (value.toLowerCase() === 'confirm') return 'Confirm';

  const date = new Date(`${value}-01T00:00:00`);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat('en', {
    month: 'short',
    year: 'numeric',
  }).format(date);
};

export default function AboutPage() {
  const primaryEducation = content.education[0];
  const focusAreas = content.profiles.slice(0, 4);

  return (
    <Layout>
      <section className="container section">
        <div className="stack">
          <h1>About</h1>
          <p className="text-lg text-[var(--sb-ink)]/80">
            {content.site.name} is based in {content.site.location} and focuses on{' '}
            {content.profiles[0]?.title.toLowerCase()} with strong experience in configuration
            management and platform rollouts.
          </p>
          <p className="text-sm text-[var(--sb-ink)]/70">
            Current studies: {primaryEducation.program} ({primaryEducation.focus}) at{' '}
            {primaryEducation.institution}, expected {formatDate(primaryEducation.end)}.
          </p>
        </div>
      </section>
      <section className="container section">
        <h2>Focus areas</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {focusAreas.map((profile) => (
            <article
              key={profile.id}
              className="rounded-2xl border border-[var(--sb-ink)]/10 bg-[var(--color-muted)] p-5"
            >
              <h3 className="text-lg">{profile.title}</h3>
              <p className="text-sm text-[var(--sb-ink)]/70">{profile.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[var(--sb-ink)]/60">
                {profile.focus.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="container section">
        <h2>Experience</h2>
        <div className="mt-6 grid gap-4">
          {content.experience.map((role) => (
            <article
              key={role.id}
              className="rounded-2xl border border-[var(--sb-ink)]/10 bg-white/80 p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-lg">{role.role}</h3>
                  <p className="text-sm text-[var(--sb-ink)]/70">
                    {role.company} · {role.location}
                  </p>
                </div>
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--sb-ink)]/60">
                  {formatDate(role.start)} — {formatDate(role.end)}
                </div>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--sb-ink)]/80">
                {role.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
