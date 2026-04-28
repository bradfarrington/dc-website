---
name: digital-craft-design
description: Use this skill to generate well-branded interfaces and assets for Digital Craft, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- **Brand essence.** Digital Craft is a *systemisation and transformation* brand — modern, minimal, premium, slightly technical. Visual language reflects clarity, structure, and engineered precision. **Not** a generic "web design service."
- **Core files**
  - `README.md` — full brand bible (content, voice, visual foundations, iconography, file index).
  - `colors_and_type.css` — every token (color, type, spacing, radii, shadow, motion). Light + dark themes via `data-theme="dark"`.
  - `assets/` — the brand mark and wordmark in black/white, transparent.
  - `fonts/` — Arboria Book webfont (Type-O-Tones). Inter is loaded from Google Fonts as the body/UI fallback because only one Arboria weight was provided.
  - `preview/` — design-system cards for every token, component, and brand element.
  - `ui_kits/marketing/` — a fully built marketing UI kit (React + CSS) you can lift components from.
- **Palette** — black `#000`, white `#FFF`, bg-alt `#1A1A1A`, accent `#3B82F6`, hover `#60A5FA`. The accent is **energy, never decoration** — used for thin connectors, single CTAs, focus rings, active states.
- **Type** — `Arboria` for display/headings, `Inter` for body/UI, `JetBrains Mono` for data/code. Hero headlines run 48–112px, leading 1.05, tracking −0.04em.
- **Voice** — direct, confident, outcome-driven. Sentence case. No emoji. "You" not "we." Frustration → solution → obvious future state.
- **Iconography** — Lucide via CDN, 1.5px stroke, currentColor. Never emoji, never inline unicode arrows.
