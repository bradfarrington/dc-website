# Marketing UI kit

A click-thru, hi-fi recreation of the Digital Craft marketing surface.

## What's here

| File | Purpose |
|---|---|
| `index.html` | Live demo. One scrolling page; the **Book a system audit** button opens a modal that submits and triggers a confirmation toast. |
| `marketing.css` | All component styles (nav, hero, feature grid, process steps, testimonial, CTA band, footer, modal, toast). Imports `colors_and_type.css` from the project root. |
| `components.jsx` | React components — `Nav`, `Hero`, `Capabilities`, `Features`, `Process`, `Testimonial`, `CTABand`, `Footer`, `AuditModal`, `Toast`, plus an `Icon` helper around Lucide. |

## Components

- **`<Nav active onNav onCTA />`** — sticky top nav with blurred backdrop, brand lockup, link rail with accent underline on the active page, and a primary "Book a system audit" CTA.
- **`<Hero onCTA />`** — hero with eyebrow, large display headline (Arboria), lede, and dual CTA. Background carries a subtle 64px dot grid, masked to a radial vignette — the "system" motif.
- **`<Capabilities />`** — quiet capability strip between bordered hairlines.
- **`<Features />`** — 3-column feature grid with hairline dividers (no card chrome — the grid itself is the card). Hover lifts the row to `--bg-alt` and extends the accent connector.
- **`<Process />`** — 4-step process with a horizontal connector. The accent line "fills" up to the active step. Hover steps to advance.
- **`<Testimonial />`** — full-width dark section with a large display quote.
- **`<CTABand onCTA />`** — black radius-16 panel with masked grid, single accent CTA.
- **`<Footer />`** — black footer with brand block + 4 link columns + legal row.
- **`<AuditModal />`** — accessible modal with name/email/company/problem fields. Submits via the `onSubmit` prop.
- **`<Toast />`** — bottom-center confirmation toast.

## Tokens used

This kit relies entirely on the tokens in `../../colors_and_type.css`. There are **no inline color values** outside that file — change the tokens, the kit changes with them.

## What's deliberately omitted

- No real product UI (CRM/app dashboards) — none was provided.
- The "Work" / "Services" / "Process" / "Journal" links are wired up but the Hero is the only page rendered. Add additional `Page*` components and switch on the `page` prop in `index.html`'s `App` to extend.
- No analytics, no real form submission. The submit handler triggers a toast.
