# Content Model (E2)

This document defines **where content lives** and **how it is loaded** in the app.
It is intentionally simple so non-developers can update content safely.

## Chosen format

- **JSON** for structured data (profiles, experience, skills, education, contact, project metadata).
- **MDX (optional)** for long-form case studies and rich text.

Why:

- JSON is easy to edit and validate.
- MDX lets us write readable long-form content with headings and lists.

## Directory layout

```
content/
  site.json           # global site info (name, tagline, links)
  profiles.json       # role profiles (Systems, DevOps, etc.)
  experience.json     # professional experience
  projects.json       # project metadata + ordering + profile tags
  skills.json         # skills inventory
  education.json      # education + courses
  contact.json        # contact info
  case-studies/       # long-form project pages (MDX)
    _template.mdx     # case study template + umbrella/deep-dive structure
    en/               # English case studies (same slugs)
```

## Data access approach

- Content is **statically imported** at build time (no runtime database).
- The app will read JSON files directly from `content/`.
- Case studies (if used) will be loaded from `content/case-studies/`.
- Projects can include `profiles` to support profile-based filtering.
- Type definitions live in `content/schema.ts`.
- Case studies can cross-link to related projects using the CTA pattern in `docs/CASE_STUDY_TEMPLATE.md`.

This keeps deployments fast, reproducible, and easy to edit.

## Localization

- UI copy lives in `src/lib/i18n.ts` (ES/EN/zh UI labels).
- Project card translations live in `src/lib/projects-i18n.ts`.
- Case studies are Spanish by default; EN lives in `content/case-studies/en/` with the same slug.
- Chinese UI currently falls back to English case studies.

## Updating content

- Edit the JSON/MDX files under `content/`.
- Keep fields consistent with the schema (defined in E2 issue #21).
- Avoid sensitive data and internal company details.
