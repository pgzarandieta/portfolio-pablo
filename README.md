# Portfolio — Next.js + Vercel (Source in Forgejo, deploy from GitHub mirror)

Personal portfolio showcasing:
- Work-related projects (case studies)
- Multiple “profiles” (roles/skillsets)
- Personal projects I can present as experience
- A clean, branded UI based on my shared branding templates

---

## Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript (recommended)
- **Hosting/CI:** Vercel (auto-deploy from Git provider)
- **Source control (primary):** Forgejo
- **Public mirror (deploy trigger):** GitHub

---

## Repo workflow (important)

**Forgejo is the source of truth.**  
GitHub is a **push mirror** used for Vercel deployments and public visibility.

- ✅ Develop on Forgejo (`main` / feature branches)
- ✅ Forgejo pushes updates to GitHub (mirror)
- ✅ Vercel is connected to the GitHub repo and deploys automatically
- ❌ Don’t commit directly to GitHub (treat it as read-only)
- ❌ Don’t open PRs on GitHub (use Forgejo PRs/issues)

---

## Local development

### Requirements
- Node.js **LTS** (recommended)
- **Package manager:** `npm` (required)

### Run locally
```bash
# install
npm install

# dev server
npm run dev
```

### Lockfile policy
- `package-lock.json` is required and must be committed.
- Do not use `pnpm` or `yarn` in this repo.
