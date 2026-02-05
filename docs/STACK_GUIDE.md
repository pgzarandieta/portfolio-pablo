# Stack Guide (Simple)

This is a short, beginner-friendly reference for how the portfolio stack fits together.

## What this repo is

- A Next.js site built with the App Router.
- It will be deployed on Vercel.
- Forgejo is the source of truth.
- GitHub is a mirror for deployment.

## The moving parts (plain words)

- **Next.js**: the framework that renders pages, routes, and data.
- **App Router**: the new Next.js folder-based routing system in `app/`.
- **TypeScript**: adds types to JavaScript to prevent mistakes.
- **Vercel**: hosts the site and builds it on every push to the GitHub mirror.
- **Forgejo**: where we open issues and PRs, and where we merge.
- **Tailwind CSS**: a utility-first CSS framework. You style by adding class names (e.g. `text-sm`, `font-medium`) directly in JSX.

## How a change reaches production

1. Create a branch in Forgejo.
2. Make changes and commit.
3. Open a PR in Forgejo.
4. Merge the PR in Forgejo.
5. Forgejo pushes to GitHub mirror.
6. Vercel auto-builds and deploys from GitHub.

## Where things live

- `app/`: pages and routes (App Router).
- `components/`: shared UI components (to be added).
- `styles/`: global styles (to be added).
- `public/`: static assets (images, icons).
- `references/`: source material and datasets (CV master).

## Common commands

- `npm install`: install dependencies.
- `npm run dev`: run the local dev server.
- `npm run lint`: run lint checks.
- `npm run format`: format files.
- `npm run format:check`: verify formatting without changing files.
- `npm run typecheck`: run TypeScript type checks.

## Pre-commit hooks

- We use **husky** + **lint-staged** to lint/format staged files on commit.
- Hooks install automatically on `npm install`.
- If you need to skip hooks temporarily: `HUSKY=0 git commit ...`.

## Package manager policy

- This repo uses **npm only**.
- Always commit `package-lock.json` when dependencies change.
- Do not use `pnpm` or `yarn` here.

## Tailwind quick note

- Tailwind is installed by default in this repo.
- Global entry point is `src/app/globals.css` via `@import "tailwindcss";`.
- You can still add custom CSS, but most styling can be done with Tailwind utility classes.

## When to update this guide

- If the stack changes (new tool, new hosting, new workflow).
- If directory structure changes in a way that affects newcomers.
