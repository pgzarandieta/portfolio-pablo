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
  const experienceStories: Record<string, string> = {
    'formula-student':
      'I started with Formula Student, moving from suspension/dynamics to CAD coordination and later handoff training, learning design-for-manufacture under competition deadlines.',
    'airbus-data-intern':
      'I shifted into data analytics at Airbus, building BOM trade-off pipelines and dashboards while validating legacy data quality.',
    'airbus-consultant':
      'I then joined Airbus via ALTEN in configuration management, translating change processes into tool requirements, running UAT, and leading training during rollout.',
  };

  return (
    <Layout>
      <section className="container section">
        <div className="stack">
          <h1>About</h1>
          <p className="text-lg text-[var(--sb-ink)]/80">
            I&apos;m {content.site.name}, an aerospace engineering student based in{' '}
            {content.site.location}. I enjoy bridging rigorous engineering with practical tools
            people actually use, from configuration management in Airbus programs to hands-on
            systems building and automation.
          </p>
          <p className="text-sm text-[var(--sb-ink)]/70">
            Current studies: {primaryEducation.program} ({primaryEducation.focus}) at{' '}
            {primaryEducation.institution}, expected {formatDate(primaryEducation.end)}.
          </p>
        </div>
      </section>
      <section className="container section">
        <h2>Beyond the resume</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.7fr_2.3fr]">
          <div className="rounded-3xl border border-[var(--sb-ink)]/10 bg-[var(--color-muted)] p-5">
            <div className="flex aspect-[3/4] items-center justify-center rounded-2xl border border-dashed border-[var(--sb-ink)]/30 bg-[var(--color-surface-strong)] text-xs uppercase tracking-[0.2em] text-[var(--sb-ink)]/60">
              Portrait photo placeholder
            </div>
            <p className="mt-4 text-xs text-[var(--sb-ink)]/60">
              Add a portrait photo here when ready.
            </p>
          </div>
          <div className="stack">
            <p className="text-sm text-[var(--sb-ink)]/80">
              Outside of engineering, I am a high-performance hockey player with national team
              experience (U18, U20, and senior). Competitive sport has taught me discipline,
              teamwork, and how to perform under pressure.
            </p>
            <p className="text-sm text-[var(--sb-ink)]/80">
              I also enjoy hands-on building: drones, Arduino/ESP32 projects, and 3D printing. I
              like learning by doing and turning ideas into working prototypes.
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              {[
                {
                  title: 'High-performance hockey',
                  detail: 'Training 3–4 times per week + national team tournaments.',
                },
                {
                  title: 'Maker mindset',
                  detail: 'CAD, electronics, and rapid prototyping in spare time.',
                },
                {
                  title: 'Curiosity-driven',
                  detail: 'Learning across systems, data, and automation.',
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[var(--sb-ink)]/10 bg-[var(--color-surface)] p-4"
                >
                  <h3 className="text-sm">{item.title}</h3>
                  <p className="mt-2 text-xs text-[var(--sb-ink)]/70">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
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
        <h2>Career path</h2>
        <p className="mt-2 text-sm text-[var(--sb-ink)]/70">
          My path moved from hands-on Formula Student engineering to data analytics in Airbus, and
          then into configuration management and change process ownership during a major platform
          rollout.
        </p>
        <div className="mt-6 grid gap-4">
          {[...content.experience]
            .slice()
            .sort((a, b) => a.start.localeCompare(b.start))
            .map((role) => (
              <article
                key={role.id}
                className="rounded-2xl border border-[var(--sb-ink)]/10 bg-[var(--color-surface)] p-6"
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
                {experienceStories[role.id] && (
                  <p className="mt-4 text-sm text-[var(--sb-ink)]/80">
                    {experienceStories[role.id]}
                  </p>
                )}
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
