# p21-gtm

**GTM Orchestration Map** — a single-page static site mapping the go-to-market
pipeline from CRM sync through to a prioritised queue per rep.

## Contents

| Path | Purpose |
| --- | --- |
| `index.html` | The entire site. Self-contained HTML + CSS, no JavaScript, no build step. |
| `.nojekyll` | Tells GitHub Pages to serve files as-is instead of running Jekyll. |

## Local preview

Open the file directly:

```sh
open index.html
```

Or serve it over HTTP:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Stack

- Static HTML with an inline `<style>` block — no framework, no bundler.
- Type: Archivo + IBM Plex Mono, loaded from Google Fonts.
- Responsive from 320px up; light and dark themes via `prefers-color-scheme`,
  with a `data-theme` attribute override.

## Deployment

Served by GitHub Pages from the `main` branch. Any push to `main` republishes
the site.
