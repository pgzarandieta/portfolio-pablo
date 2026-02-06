# Typography + Layout System

This document describes the base typography, spacing, and layout rules.

## Typography

- Primary font: IBM Plex Sans
- Mono font: IBM Plex Mono
- Fonts are loaded via `next/font/google` in `src/lib/fonts.ts`
- Token-driven sizes: `src/styles/brand-tokens.css`
- Overrides and defaults: `src/styles/typography.css`

## Colors

- Base color aliases live in `src/styles/colors.css`
- Background: `--color-bg` (from `--sb-paper`)
- Text: `--color-text` (from `--sb-ink`)
- Accent: `--color-accent` (from `--sb-teal`)

## Layout

- Container width and spacing are defined in `src/styles/layout.css`
- Utilities:
  - `.container` for max-width layout
  - `.section` for vertical spacing
  - `.stack` for vertical rhythm

## Fonts (local option)

If you want to self-host fonts, place the WOFF2 files in `public/fonts/`
and update `src/lib/fonts.ts` to use `next/font/local`.
