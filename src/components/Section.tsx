export type SectionProps = {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ eyebrow, title, children }: SectionProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="stack">
          {eyebrow ? (
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--sb-ink)]/60">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="text-[length:var(--font-size-h2)] leading-[var(--line-height-h2)]">
            {title}
          </h2>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}
