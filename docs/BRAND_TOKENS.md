# Brand Tokens

This project uses Sabaris brand tokens as CSS variables.

## Source of truth

- Repository: `sabaris-brand-system`
- File: `tokens/tokens.css`
- Releases: https://sabaris-56.opah-gar.ts.net/forgejo/Sabaris/sabaris-brand-system/releases

## Current version

- Current version: v1.0.2

## How tokens are included here

- Copied into: `src/styles/brand-tokens.css`
- Loaded globally in: `src/app/globals.css`

## Updating tokens (recommended)

Use the helper script to fetch the latest release assets and extract
`tokens/tokens.css` automatically.

```bash
# latest release
scripts/update-brand-tokens.sh

# specific tag
scripts/update-brand-tokens.sh v1.0.2
```

## Fonts

The tokens reference IBM Plex fonts. Font loading is handled separately
and should be set up in EPIC-3 typography work.
