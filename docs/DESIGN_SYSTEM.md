# Design System

This doc summarizes the base typography, color, and layout rules.

## Typography

- Font family: IBM Plex Sans (body), IBM Plex Mono (code)
- Sizes are driven by brand tokens in `src/styles/brand-tokens.css`
- Typography overrides live in `src/styles/typography.css`

## Colors

- Background: `--sb-paper`
- Text: `--sb-ink`
- Accent: `--sb-teal`
- Muted: `--sb-sand`

Color aliases are in `src/styles/colors.css`.

## Layout

- Max content width: 1120px
- Horizontal padding: `--sb-space-3`
- Vertical section padding: `--sb-space-4`
- Base utilities: `.container`, `.section`, `.stack`

Layout utilities live in `src/styles/layout.css`.
