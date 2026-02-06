import Layout from '@/components/Layout';
import content from '@/lib/content';
import Link from 'next/link';

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

export default function ResumePage() {
  const resumeDownloads = [
    {
      label: 'Systems / Configuration Management',
      file: '/resume/cv-systems.pdf',
    },
    {
      label: 'Mechanical Design',
      file: '/resume/cv-mechanical.pdf',
    },
    {
      label: 'DevOps / Platform',
      file: '/resume/cv-devops.pdf',
    },
  ];

  return (
    <Layout>
      <section className="container section">
        <div className="stack">
          <h1>Resume</h1>
          <p className="text-lg text-[var(--sb-ink)]/80">
            {content.site.tagline} based in {content.site.location}.
          </p>
          <div className="stack">
            <p className="text-sm text-[var(--sb-ink)]/70">
              Download the PDF that matches each role.
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              {resumeDownloads.map((resume) => (
                <article
                  key={resume.file}
                  className="rounded-2xl border border-[var(--sb-ink)]/10 bg-white/80 p-4"
                >
                  <div className="text-sm font-medium">{resume.label}</div>
                  <a
                    href={resume.file}
                    download
                    className="mt-3 inline-flex items-center gap-2 rounded-full border border-[var(--sb-ink)]/20 px-3 py-1.5 text-xs uppercase tracking-[0.2em]"
                    aria-label={`Download ${resume.label} CV (PDF)`}
                  >
                    <span>Download PDF</span>
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
              Contact
            </Link>
            <span className="text-[var(--sb-ink)]/60">Email: {content.contact.email}</span>
          </div>
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
      <section className="container section">
        <h2>Education</h2>
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
                {formatDate(item.end)}
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
        <h2>Skills</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {content.skills.map((group) => (
            <article
              key={group.category}
              className="rounded-2xl border border-[var(--sb-ink)]/10 bg-white/80 p-5"
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
