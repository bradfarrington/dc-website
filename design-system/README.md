# Digital Craft — Design System

Digital Craft builds bespoke systems that transform how businesses operate. We design and develop custom websites, CRM systems, and mobile apps that replace manual work, reduce human error, and create seamless customer experiences.

This is the canonical design system for the Digital Craft brand: tokens, type, color, components, and high-fidelity UI kits. Use it to build pages, slides, and product surfaces that feel cohesive and unmistakably on-brand.

> **Positioning.** Digital Craft is *not* a "web design service" — it is a **systemisation and transformation** brand. The visual language reflects clarity, structure, and engineered precision.

---

## Brand essence

| | |
|---|---|
| **What we do** | Replace manual work with smart, automated systems. |
| **For whom** | Forward-thinking businesses tired of chaos and process debt. |
| **Promise** | Frustration → solution → an obvious, achievable future state. |
| **Mood** | Modern, minimal, premium, slightly technical, high-performance. |

### Visual direction
- **Clarity over clutter** — generous whitespace, no decoration for its own sake.
- **Structure & systems** — visible grids, deliberate alignment, consistent rhythm.
- **Subtle motion** — interactions feel responsive, never bouncy.
- **Strong contrast** — primarily black, white, greyscale.
- **Confident, bold typography** — type does the heavy lifting.

---

## Sources & inputs

This system was synthesised from materials provided directly by the brand owner. There is **no codebase or Figma reference** — guidance was given verbally and through brand assets:

| Source | Where it lives |
|---|---|
| Brand description + tone & voice notes | Provided inline in chat (see below). |
| Logo files (mark + wordmark, black + white, transparent) | `assets/logo-mark-{black,white}.png`, `assets/logo-wordmark-{black,white}.png` |
| Brand display font — **Arboria Book** (Type-O-Tones) | `fonts/Arboria-Book.{woff2,woff,ttf}` |
| Color palette (verbatim from brief) | `#000`, `#FFF`, `#1A1A1A`, `#3B82F6`, `#60A5FA` |

### ⚠️ Substitutions & open questions
- Only **one weight of Arboria** was supplied (Book / 400). For UI weights (medium / semibold / bold) the system falls back to **Inter** loaded from Google Fonts. If you have access to additional Arboria weights (Medium, Bold, Black), drop them in `fonts/` and update `colors_and_type.css` — the body stack will pick them up automatically.
- No product UI was provided, so the UI kit is built around the **marketing site surface** only. If a CRM/app product exists, share its codebase or Figma link to extend the kit.

---

## File index

```
.
├── README.md                    ← you are here
├── SKILL.md                     ← instructions for Claude / agents using this brand
├── colors_and_type.css          ← all CSS tokens (color, type, spacing, radii, shadow, motion)
├── assets/                      ← logos and visual brand assets
│   ├── logo-mark-black.png
│   ├── logo-mark-white.png
│   ├── logo-wordmark-black.png
│   └── logo-wordmark-white.png
├── fonts/                       ← the Arboria Book webfont (woff2/woff/ttf)
├── preview/                     ← Design-System-tab cards (one HTML per card)
└── ui_kits/
    └── marketing/               ← marketing site UI kit (components + index.html)
```

---

## Content fundamentals

The voice is **direct, confident, outcome-driven, and slightly technical.** Copy is written as if the reader has limited time and zero patience for fluff.

### Rules of thumb
- **Outcomes, not features.** Don't say "We build CRMs." Say "Stop chasing leads in spreadsheets."
- **Frustration → solution.** Name the pain in plain words, then show the future state.
- **Lead with verbs.** "Replace," "Automate," "Eliminate," "Transform," "Ship."
- **"You," not "we."** Speak to the reader. Use *we* only when describing how Digital Craft works.
- **Short, structural sentences.** One idea per sentence. Periods over commas.
- **Sentence case for everything** — headings, buttons, navigation. **Title Case is reserved** for proper nouns and brand names. **UPPERCASE** is reserved for eyebrows, labels, and code-style affordances (with letter-spacing).
- **No emoji** in product or marketing copy. The brand is monochrome and engineered — emoji break the register.
- **Numbers and metrics earn their place.** If you cite a stat, it must be specific and provable. No vanity numbers.
- **Avoid**: "synergy," "solutions," "leverage," "unlock," "empower," "best-in-class," "next-gen," "world-class." Anything a generic SaaS site would say.

### Examples (write like this)

> **Headline.** Stop running your business on duct tape.
> **Sub.** We replace the spreadsheets, sticky notes, and manual handoffs with one system that runs itself.

> **Headline.** Your team is doing work software should do.
> **Sub.** Custom CRMs, internal tools, and automations that take the busywork off the table — so your people can do the work only they can do.

> **Section eyebrow.** HOW IT WORKS
> **Heading.** Three weeks to a working system.
> **Body.** We map your process, build the system around it, and put it in your hands. No retainers. No mystery roadmaps.

### Examples (don't write like this)
- ❌ "Empowering businesses with cutting-edge digital solutions."
- ❌ "We leverage modern web technologies to deliver world-class results."
- ❌ "🚀 Transform your business today!"
- ❌ "Click here to learn more about our services."

---

## Visual foundations

### Color
- **Monochrome-first.** Black `#000`, white `#FFF`, and a 6-step grey scale (`#0A0A0A` → `#F5F5F5`) carry 95% of every layout.
- **One accent — electric blue `#3B82F6`.** Treat it as **energy running through the system**, not as decoration. Use it for:
  - The single primary CTA per surface
  - Inline links inside long-form text
  - Active/selected states (tabs, nav, toggles)
  - Focus rings (3px, 50% alpha)
  - **Thin lines, dividers, and connectors** that suggest structured systems and automation (1px, sometimes with a soft glow)
  - Data highlights (a single number, not a whole chart)
- **Hover/glow `#60A5FA`** lifts the accent on interaction. A soft outer glow is allowed on the *primary* CTA, on active connectors, and on the focused node in a system diagram.
- **Avoid heavy fills of the accent.** No accent-tinted backgrounds, no large color blocks, no gradient washes. The blue should feel like current through a wire.
- **No gradients** as decoration. The one exception: a near-black radial vignette behind hero sections on dark backgrounds (≤8% opacity, used to add depth, never color).
- **Semantic colors** (success/warning/danger) exist in the token file but are used only inside product UI states — never in marketing.

### Typography
- **Display (headings, logo, hero numbers):** Arboria Book — geometric humanist sans, slightly soft, distinctive lowercase `g`.
- **Body / UI (paragraphs, buttons, labels):** Inter — neutral, excellent at small sizes.
- **Mono (code, data, system labels):** JetBrains Mono.
- Hero headlines run **48–112px**, leading **1.05**, tracking **-0.04em**. Body is 16/18 with 1.5–1.65 leading.
- **Eyebrows** are 12px Inter Medium, UPPERCASE, tracking +0.12em — used to label sections.

### Spacing & rhythm
- **4px base.** Tokens: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128 / 160.
- **Section padding** is generous: 96–160px vertical on desktop. Marketing should breathe.
- **Container** caps at 1240px. Inside, a 12-column grid with 24px gutters.
- The grid is sometimes made *visible* with hairline `#EAEAEA` rules at section boundaries — this is the "structure & systems" motif.

### Backgrounds
- Default page background is pure white (`#FFFFFF`) or pure black (`#000000`). Pick one per section; alternate to create rhythm.
- The `#1A1A1A` "background alt" is for cards on dark sections, and for code/terminal blocks.
- **No imagery in backgrounds** by default. Photography, when used, is **black & white with neutral grain** — never warm, never saturated. Imagery is editorial, not stock.
- Allowed pattern: a subtle 1px dot or line grid (`rgba(0,0,0,.04)` on light, `rgba(255,255,255,.06)` on dark) behind hero sections — reinforces the "system" motif.

### Borders & cards
- Hairline only — **1px, `#EAEAEA` on light, `#2A2A2A` on dark**. No 2px, no double borders.
- **Cards on light**: white surface, 1px hairline border, **no shadow** at rest. Hover: border darkens to `#0A0A0A`, no transform, no shadow lift.
- **Cards on dark**: `#1A1A1A` surface, 1px `#2A2A2A` border. Hover: border lightens to `#3D3D3D`.
- **Radii.** Default `8px` (`--r-md`) for cards and inputs. `4px` for small chips. `12–16px` for hero panels. **No pill buttons** by default — buttons are `8px` rounded rectangles. The pill radius exists only for badges and avatars.

### Shadows & elevation
- **Default elevation is flat.** Shadows are reserved for:
  - Floating menus / dropdowns (`--sh-md`)
  - Dialogs (`--sh-lg`)
  - The primary CTA's accent glow on hover (`--sh-glow`)
- No drop shadows on cards at rest. No inner shadows. No "neumorphic" anything.

### Motion
- **Easing**: `cubic-bezier(.2, .8, .2, 1)` — the system "ease-out". Snappy entrance, gentle settle. Never bouncy.
- **Durations**: 120ms (micro — color, opacity), 220ms (UI — hover, transforms), 420ms (entrance — sections, modals).
- **Allowed**: opacity fades, 2–6px translate-Y on enter, color transitions, a slow accent-glow pulse on the primary CTA at idle (optional).
- **Forbidden**: spring/elastic easing, page-level parallax, decorative auto-play loops, scroll-jacking.

### Hover & press states
- **Buttons (primary, accent fill):** hover = `#60A5FA` + 6px outer glow. Press = `#2563EB`, no glow, 1px translate-Y. Cursor never changes weight; no scale.
- **Buttons (secondary, outline):** hover = border darkens to black, background stays white. Press = background `#0A0A0A`, text white.
- **Links inline:** underline 1px, offset 4px, color `#3B82F6`. Hover: color `#60A5FA`, underline thickens to 2px.
- **Cards:** hover = border darkens; no shadow lift, no scale.
- **Icons-as-buttons:** hover = bg `#F5F5F5`, no rotate.

### Focus
- 3px outer ring at 50% accent alpha, 2px offset, `--r-md` rounded — works on dark and light. Never remove the focus ring.

### Transparency, blur
- Used **rarely**. The one approved use: a sticky top nav over a long page can use `backdrop-filter: blur(12px)` with `rgba(255,255,255,0.8)` background on light or `rgba(0,0,0,0.6)` on dark — and only after the user has scrolled.
- Modals get a `rgba(0,0,0,0.5)` scrim with no blur.

### Iconography
See [Iconography](#iconography) below.

### Layout rules
- Sticky top nav is allowed; sticky side rails are not, except in product/admin UI.
- Footer is dense, multi-column, `#0A0A0A` on white pages or `#1A1A1A` on dark pages.
- One primary CTA per fold. One accent color per section.
- The Digital Craft logo lives top-left; minimum clear space is the height of the mark on every side.

---

## Iconography

Digital Craft has **no proprietary icon set**. The brand uses a single, consistent third-party set:

- **[Lucide](https://lucide.dev)** — open-source, MIT, available via CDN.
  - **Stroke 1.5px**, line caps round, line joins round.
  - Default size **20px** in UI, **24px** in marketing, **16px** for inline label icons.
  - Color always inherits from text (`stroke: currentColor`); icons are **never** colored independently of their label.

```html
<!-- Load once in <head>, then use <i data-lucide="arrow-right"></i> anywhere -->
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
```

### Rules
- Icons are **functional, never decorative**. Every icon must clarify a label or action.
- **No emoji** anywhere in product or marketing. The Digital Craft brand reads as engineered; emoji break the tone.
- **No unicode glyphs** as icons (no `→` arrows, no `★` stars). Use Lucide.
- **No multi-color icons.** Lucide is monoline; keep it that way.
- The **logo mark** is a brand element, not an icon — never use it inline with text or as a UI affordance. Reserve it for headers, footers, favicons, and brand moments.

### Logo usage
- **Wordmark** (`logo-wordmark-{black,white}.png`) — primary lockup. Use in nav, footer, deck title slides, business assets.
- **Mark** (`logo-mark-{black,white}.png`) — the parallelogram grid. Use as favicon, app icon, social avatar, and on dark hero panels where the wordmark would compete with copy.
- The mark itself reinforces the brand: a tilted grid of soft-cornered tiles — *systemisation*, made visual.

---

## UI kits

| Kit | Path | Status |
|---|---|---|
| Marketing site | `ui_kits/marketing/` | Built. Hero, nav, feature grid, process, testimonial, CTA, footer + click-thru. |
| Product UI (CRM/app) | — | Not built. Awaiting source materials. |
| Slide template | — | Not built. Ask if needed. |

---

## How to use this system

- **For HTML artifacts** (mocks, slides, prototypes): copy `colors_and_type.css` and the `assets/` + `fonts/` folders into your project. Link the stylesheet, lean on the semantic classes (`.dc-h1`, `.dc-lede`, `.dc-body`, etc.) and tokens (`var(--accent)`, `var(--sp-8)`).
- **For production code**: lift the tokens from `:root` into your design tokens layer; map them to your framework's theming primitive. The dark theme is one attribute flip (`data-theme="dark"`).
- **For agents / Claude Code**: see `SKILL.md` — it bundles this system as an invocable skill.
