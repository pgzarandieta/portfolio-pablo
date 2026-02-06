# Motion & Interaction

This doc defines the motion rules used across the portfolio.

## Principles

- Motion is subtle and functional, not decorative.
- Use short durations and ease curves for a calm feel.
- Respect `prefers-reduced-motion`.

## Utilities

Defined in `src/styles/motion.css`:

- `.page` — default page reveal animation
- `.reveal` — reveal animation for sections/cards
- `.reveal-delay-{1|2|3}` — staggered delays

## Accessibility

All animations and transitions are disabled when the user prefers reduced motion.
