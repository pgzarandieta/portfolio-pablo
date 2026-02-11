# Case Study Template

Use this structure for every portfolio case study. Keep it concise and honest.

## Frontmatter fields (required)

- `slug`
- `title`
- `summary`
- `role`
- `date`
- `stack` (list)
- `tags` (list)
- `metrics` (list)
- `confidentiality`
- `primaryProfile`
- `secondaryProfiles` (list)

## Sections (required)

1. **TL;DR** — 2–3 bullets summarizing role, impact, scale
2. **Role & Scope** — responsibilities and collaboration
3. **Profile relevance** — primary + secondary profiles
4. **Context** — the real problem and why it mattered
5. **Deep dives** — profile-tagged sections (umbrella + deep dives)
6. **Outcomes & Impact** — results, scale, numbers
7. **Learnings** — what you learned and future improvements
8. **Media / Evidence** — diagrams, screenshots, links

## Cross-links (required when a deep dive has its own project)

If a deep dive has a **standalone** project/case study, add a CTA link immediately under the deep dive heading using this exact pattern (this renders as a button):

`[Go to standalone case study: <Project Title> →](/projects/<slug>)`

If you are cross-referencing a **related** umbrella project, use:

`[Go to related case study: <Project Title> →](/projects/<slug>)`

## Optional

- Short bulleted highlights at the top (if TL;DR is too long)
- Additional subsections inside Deep dives for decisions/tradeoffs

## Example file

See `content/case-studies/_template.mdx`.

## Localization

- Spanish case studies live in `content/case-studies/`.
- English case studies live in `content/case-studies/en/` with the same `slug`.
