import Layout from '@/components/Layout';
import content from '@/lib/content';
import { getCopy } from '@/lib/i18n';
import { getLocale } from '@/lib/locale.server';
import Link from 'next/link';

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

export default async function ResumePage() {
  const locale = await getLocale();
  const t = getCopy(locale);
  const isEnglish = locale === 'en' || locale === 'zh';
  const resumeDownloads = [
    {
      label: isEnglish ? 'CM / Systems (EN, ATS)' : 'CM / Sistemas (ES, ATS)',
      file: isEnglish
        ? '/resume/Pablo_Garcia-Zarandieta_CV_CM-Systems_EN_ATS.pdf'
        : '/resume/Pablo_Garcia-Zarandieta_CV_CM-Systems_ES_ATS.pdf',
    },
    {
      label: isEnglish ? 'Mechanical (EN, ATS)' : 'Mecánico (ES, ATS)',
      file: isEnglish
        ? '/resume/Pablo_Garcia-Zarandieta_CV_Mechanical_EN_ATS.pdf'
        : '/resume/Pablo_Garcia-Zarandieta_CV_Mechanical_ES_ATS.pdf',
    },
    {
      label: isEnglish ? 'Data Analytics (EN, ATS)' : 'Analítica de datos (ES, ATS)',
      file: isEnglish
        ? '/resume/Pablo_Garcia-Zarandieta_CV_Data-Analytics_EN_ATS.pdf'
        : '/resume/Pablo_Garcia-Zarandieta_CV_Data-Analytics_ES_ATS.pdf',
    },
    {
      label: isEnglish ? 'Platform / DevOps (EN, ATS)' : 'Plataforma / DevOps (ES, ATS)',
      file: isEnglish
        ? '/resume/Pablo_Garcia-Zarandieta_CV_Platform-DevOps_EN_ATS.pdf'
        : '/resume/Pablo_Garcia-Zarandieta_CV_Platform-DevOps_ES_ATS.pdf',
    },
  ];

  return (
    <Layout>
      <section className="container section">
        <div className="stack">
          <h1>{t.resume.title}</h1>
          <p className="text-lg text-[var(--sb-ink)]/80">
            {locale === 'es'
              ? `${content.site.tagline} con base en ${content.site.location}.`
              : locale === 'zh'
                ? `${content.site.tagline}，常驻 ${content.site.location}。`
                : `${content.site.tagline} based in ${content.site.location}.`}
          </p>
          <div className="stack">
            <p className="text-sm text-[var(--sb-ink)]/70">{t.resume.subtitle}</p>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {resumeDownloads.map((resume) => (
                <article
                  key={resume.file}
                  className="rounded-2xl border border-[var(--sb-ink)]/10 bg-[var(--color-surface)] p-4"
                >
                  <div className="text-sm font-medium">{resume.label}</div>
                  <a
                    href={resume.file}
                    download
                    className="mt-3 inline-flex items-center gap-2 rounded-full border border-[var(--sb-ink)]/20 px-3 py-1.5 text-xs uppercase tracking-[0.2em]"
                    aria-label={`${t.resume.download} ${resume.label} (PDF)`}
                  >
                    <span>{t.resume.download}</span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d="M10 3a.75.75 0 0 1 .75.75v7.94l2.22-2.22a.75.75 0 1 1 1.06 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V3.75A.75.75 0 0 1 10 3Z" />
                      <path d="M4 13a.75.75 0 0 1 .75.75v1.5c0 .41.34.75.75.75h9a.75.75 0 0 0 .75-.75v-1.5a.75.75 0 1 1 1.5 0v1.5A2.25 2.25 0 0 1 14.5 17h-9A2.25 2.25 0 0 1 3.25 15.25v-1.5A.75.75 0 0 1 4 13Z" />
                    </svg>
                  </a>
                </article>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--sb-ink)]/20 px-4 py-2"
            >
              {t.resume.contact}
            </Link>
            <span className="text-[var(--sb-ink)]/60">
              {t.resume.emailLabel}: {content.contact.email}
            </span>
          </div>
        </div>
      </section>
      <section className="container section">
        <h2>{t.resume.experience}</h2>
        <div className="mt-6 grid gap-4">
          {content.experience.map((role) => (
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
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--sb-ink)]/80">
                {role.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="container section">
        <h2>{t.resume.education}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {content.education.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl border border-[var(--sb-ink)]/10 bg-[var(--color-muted)] p-5"
            >
              <h3 className="text-lg">{item.program}</h3>
              <p className="text-sm text-[var(--sb-ink)]/70">{item.institution}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--sb-ink)]/60">
                {item.focus ? `${item.focus} · ` : ''}
                {formatDate(item.end, locale)}
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[var(--sb-ink)]/80">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="container section">
        <h2>{t.resume.skills}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {content.skills.map((group) => (
            <article
              key={group.category}
              className="rounded-2xl border border-[var(--sb-ink)]/10 bg-[var(--color-surface)] p-5"
            >
              <h3 className="text-base">{group.category}</h3>
              <div className="mt-3 flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-[var(--sb-ink)]/60">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
