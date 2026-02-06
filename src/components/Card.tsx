export type CardProps = {
  title: string;
  description: string;
  tags?: string[];
};

export default function Card({ title, description, tags }: CardProps) {
  return (
    <div className="rounded-2xl border border-[var(--sb-sand)] bg-white/60 p-6 shadow-sm">
      <div className="text-sm uppercase tracking-wide text-[var(--sb-ink)]">{title}</div>
      <p className="mt-3 text-base text-[var(--sb-ink)]/80">{description}</p>
      {tags && tags.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--sb-ink)] px-3 py-1 text-xs uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
