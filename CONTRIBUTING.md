# Contributing

Thanks for contributing. This repo follows a Forgejo-first workflow.

## Source of truth

- Forgejo is the canonical repo.
- GitHub is a read-only mirror for deployment visibility.
- Do not open PRs on GitHub.

## Workflow

- Create a new branch for every change.
- Branch names must reference an Epic/Issue/Feature ID.
- One issue = one branch = one PR.
- Open a PR in Forgejo for review.
- Merge only through the Forgejo UI.
- Do not merge locally.

See `AGENTS.md` for the authoritative workflow.

## Stack learning guide

If you are new to the stack or need a quick refresher, read `docs/STACK_GUIDE.md`.
Keep this guide updated when the stack or directory structure changes.

## Package manager policy

- Use `npm` only.
- Commit `package-lock.json` with any dependency changes.
- Do not use `pnpm` or `yarn` in this repo.

## Pre-commit hooks

- We use **husky** + **lint-staged** for pre-commit checks.
- Hooks are installed automatically on `npm install`.
- Staged files are auto-formatted and linted before commit.
- To skip hooks temporarily: run `HUSKY=0 git commit ...`.

## Issue/PR templates

- Use the templates in `.gitea/ISSUE_TEMPLATE/` and `.gitea/pull_request_template.md`.
- Epics must keep the title format `[EPIC <n>] <short name>` and include a checklist of child issues.
- Feature/issue titles must follow: `[FEAT|DOCS|CHORE] E<n>: <short name>`.
- Bug titles must follow: `[BUG] E<n>: <short name>`.
- If a change affects UI, include LAN and Tailscale preview URLs in the PR.

## Labels (required)

Apply labels from each category:

**Priority**

- `priority:p0` — blocker / urgent
- `priority:p1` — high
- `priority:p2` — normal
- `priority:p3` — low

**Area**

- `area:app` — Next.js app/router/pages
- `area:ui` — UI components & styling
- `area:content` — CV/portfolio content & data
- `area:design` — visual design system
- `area:assets` — images, diagrams, media
- `area:docs` — documentation
- `area:ci` — CI workflows
- `area:repo` — repo tooling/config

**Type**

- `type:epic`
- `type:feature`
- `type:issue`
- `type:bug`
- `type:chore`
- `type:docs`

Good practice:

- Use exactly one `priority:*`, one `area:*`, and one `type:*` label.
- If something is both feature and refactor, prefer the primary outcome label.

## Branch naming examples

- `epic/EPIC-12-landing-page-refresh`
- `issue/ISSUE-104-add-projects-section`
- `feature/FEAT-7-profile-selector`

## Commit notes

- One or multiple commits are both fine.
- Keep commits focused and descriptive.
