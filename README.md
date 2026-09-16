# p21-gtm

**Plutus21 — GTM engineering.** A static marketing site describing how Plutus21
engineers the data, signals, orchestration and decision logic behind a GTM motion.

Live: https://p21gtm.com

## Layout

| Path | Purpose |
| --- | --- |
| `index.html` | The site. Static HTML; the interactive sections hydrate with React. |
| `assets/js/` | `dc-runtime.js`, the Plutus21 design system, and pinned React 18.3.1 + ReactDOM. |
| `assets/fonts/` | Self-hosted woff2: Manrope, Public Sans, IBM Plex Mono, Newsreader, and a subset of Material Symbols Rounded. |
| `assets/img/` | Logo and the orchestration-map still. |
| `orchestration-map/` | A separate standalone page — the GTM Orchestration Map diagram. |

Everything is served from this repo. The page makes **no external requests** at
runtime: no CDN, no font host, no analytics.

## Local preview

```sh
python3 -m http.server 8000
# http://localhost:8000
```

Open `index.html` over `file://` and the React sections will not hydrate — use a
server.

## Build notes

The site was extracted from a single-file Claude Artifact bundle that carried its
assets as base64 in a JSON manifest. Two things are worth knowing before editing:

- **The icon font is subset.** `material-symbols-subset.woff2` contains only the
  48 glyphs the page uses, keyed by codepoint rather than by ligature, and is
  5.8 KB instead of the original 5.2 MB. Icon markup uses the literal codepoint
  character; `window.__P21_ICONS` in `index.html` maps names to those codepoints
  for anything rendered through the design system's `Icon` component. **Adding a
  new icon means re-subsetting the font** — the glyph will not be in the file.
- **The navbar is responsive.** Below 860px it collapses to a hamburger drawer.
  That logic lives in the `Navbar` component inside `assets/js/design-system.js`.

## Mobile

- The navbar is sticky at the top of the viewport on every section. It lives in
  the screen wrapper, **not** inside `<section id="top">` — the hero sets
  `overflow:hidden`, which traps `position:sticky`, and sticky is bounded by its
  parent's box regardless. The hero carries `margin-top:-72px; padding-top:72px`
  so its gradient still starts at y=0 with the header overlaying it.
- The navbar collapses to a hamburger drawer under 860px, with Escape-to-close,
  background scroll lock and 48px minimum tap targets.
- Two decorative diagrams use fixed pixel coordinates and would otherwise widen
  the document on narrow screens. They are scaled down and clipped at their
  shared container. Note that `overflow-x: hidden` is deliberately **not** set on
  `html` — doing so moves the scroll container to `<body>` and silently zeroes
  `window.scrollY` for everything on the page.
