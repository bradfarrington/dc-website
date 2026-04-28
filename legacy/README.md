# Legacy landing page

This is the original landing experience (epic activate button → cinematic
video → final WebGL hero) that lived at the project root before the
Digital Craft brand redesign was promoted to `/`.

It is preserved here for reference. Nothing in `legacy/` is wired into the
live site — the live site is the new design at the project root.

## What's here

- `index.html` — original entry HTML
- `src/main.js` — GSAP intro, video sequence, THREE.js neural mesh init
- `src/style.css` — original landing styles
- `public/` — original landing's static assets (mp4s, big logos, hero_bg, previews/)
- `Arboria_Book_Font_original/` — original Arboria font drop (the live site
  uses the deduplicated copy in `/fonts`)
- `envato_video_gen_Apr_14_2026_9_32_13.mp4` — unused source video
- `nexbot_robot_character_concept.spline` — unused Spline concept asset
- `design-snapshots/` — frozen snapshots of the v1 design hand-off:
  - `Landing Page (original).html` — the source the current `/index.html`
    was branched from
  - `Landing Page (standalone).html`
  - `Digital Craft Landing Page.html`
  - `uploads/` — design review screenshots

## Reverting to the legacy landing

If you ever want to swap back:

1. Move `legacy/index.html` to the project root.
2. Move `legacy/src/main.js` and `legacy/src/style.css` back to `/src`.
3. Move `legacy/public/*` back to `/public` so `/0414.mp4`, `/previews/*`,
   etc. are served at the URLs the legacy code expects.
4. Restart `vite`.

The animated THREE.js neural mesh from this version is what powers the new
hero background — see `HeroMeshCanvas` in the root `index.html`.
