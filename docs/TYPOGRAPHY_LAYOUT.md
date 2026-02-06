# Typography + Layout System

This document describes the base typography, spacing, and layout rules.

## Typography

- Primary font: IBM Plex Sans
- Mono font: IBM Plex Mono
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

## Fonts

Local fonts are optional. Place them in `public/fonts/` and they will be
loaded with `next/font/local`. If missing, the app uses fallbacks.
