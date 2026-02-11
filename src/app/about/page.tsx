import Layout from '@/components/Layout';
import content from '@/lib/content';
import { getCopy } from '@/lib/i18n';
import { getLocale } from '@/lib/locale.server';

const formatDate = (value: string, locale: string) => {
  if (!value) return '';
  if (value.toLowerCase() === 'present') {
    if (locale === 'es') return 'Actual';
    if (locale === 'zh') return '至今';
    return 'Present';
  }
  if (value.toLowerCase() === 'confirm') {
    if (locale === 'es') return 'Confirmar';
    if (locale === 'zh') return '待确认';
    return 'Confirm';
  }

  const date = new Date(`${value}-01T00:00:00`);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat(locale, {
    month: 'short',
    year: 'numeric',
  }).format(date);
};

export default async function AboutPage() {
  const primaryEducation = content.education[0];
  const focusAreas = content.profiles.slice(0, 4);
  const locale = await getLocale();
  const t = getCopy(locale);
  const experienceStories: Record<string, string> = {
    'formula-student':
      locale === 'es'
        ? 'Empecé en Formula Student, pasando de suspensión/dinámica a coordinación CAD y luego formación de handoff, aprendiendo diseño para fabricar bajo deadlines de competición.'
        : 'I started with Formula Student, moving from suspension/dynamics to CAD coordination and later handoff training, learning design-for-manufacture under competition deadlines.',
    'airbus-data-intern':
      locale === 'es'
        ? 'Luego pasé a analítica de datos en Airbus, construyendo pipelines y dashboards de trade-offs y validando la calidad de datos legacy.'
        : 'I shifted into data analytics at Airbus, building BOM trade-off pipelines and dashboards while validating legacy data quality.',
    'airbus-consultant':
      locale === 'es'
        ? 'Después entré en Airbus vía ALTEN en configuración, traduciendo procesos de cambio a requisitos de herramienta, ejecutando UAT y liderando formación en el rollout.'
        : 'I then joined Airbus via ALTEN in configuration management, translating change processes into tool requirements, running UAT, and leading training during rollout.',
  };

  return (
    <Layout>
      <section className="container section">
        <div className="stack">
          <h1>{t.about.title}</h1>
          <p className="text-lg text-[var(--sb-ink)]/80">{t.about.intro}</p>
          <p className="text-sm text-[var(--sb-ink)]/70">
            {t.about.studiesPrefix}: {primaryEducation.program} ({primaryEducation.focus}) at{' '}
            {primaryEducation.institution}, expected {formatDate(primaryEducation.end, locale)}.
          </p>
        </div>
      </section>
      <section className="container section">
        <h2>{t.about.beyondResume}</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.7fr_2.3fr]">
          <div className="rounded-3xl border border-[var(--sb-ink)]/10 bg-[var(--color-muted)] p-5">
            <div className="flex aspect-[3/4] items-center justify-center rounded-2xl border border-dashed border-[var(--sb-ink)]/30 bg-[var(--color-surface-strong)] text-xs uppercase tracking-[0.2em] text-[var(--sb-ink)]/60">
              {t.about.portraitPlaceholder}
            </div>
            <p className="mt-4 text-xs text-[var(--sb-ink)]/60">{t.about.portraitHint}</p>
          </div>
          <div className="stack">
            <p className="text-sm text-[var(--sb-ink)]/80">{t.about.personal1}</p>
            <p className="text-sm text-[var(--sb-ink)]/80">{t.about.personal2}</p>
            <div className="grid gap-3 md:grid-cols-3">
              {t.about.cards.map((item) => (
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
        <h2>{t.about.focusAreas}</h2>
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
        <h2>{t.about.careerPath}</h2>
        <p className="mt-2 text-sm text-[var(--sb-ink)]/70">{t.about.careerIntro}</p>
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
                    {formatDate(role.start, locale)} — {formatDate(role.end, locale)}
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
