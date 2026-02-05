# AGENTS — Repo Workflow

These instructions apply to all changes in this repository.

## Branch-first workflow (required)

- Always create a new branch before making changes.
- The branch name must reference the Epic/Issue/Feature you are working on.
- One issue = one branch = one PR.
- You can make one commit or multiple commits as you work.
- Open a PR in Forgejo when the work for that issue is ready.
- PRs are reviewed and merged only via the Forgejo UI.
- Do not merge locally.
- Do not open PRs on GitHub.

## Stack learning guide

- `docs/STACK_GUIDE.md` is the simple reference for how the stack fits together.
- If the stack or directory structure changes, update the guide in the same PR.

## Issue + PR templates and labels

- Use the templates in `.gitea/ISSUE_TEMPLATE/` and `.gitea/pull_request_template.md`.
- Always apply labels from each category: `priority:*`, `area:*`, and `type:*`.
- Epics must keep the title format `[EPIC <n>] <short name>` and list all child issues.
- Feature/issue titles must follow: `[FEAT|DOCS|CHORE] E<n>: <short name>`.
- Bug titles must follow: `[BUG] E<n>: <short name>`.
- If a change affects UI, include LAN and Tailscale preview URLs in the PR.

## Branch naming

Branch names must include the Epic/Issue/Feature ID.

Examples:
- `epic/EPIC-12-landing-page-refresh`
- `issue/ISSUE-104-add-projects-section`
- `feature/FEAT-7-profile-selector`

If you are unsure which ID to use, ask before starting.
