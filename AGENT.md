# Hugo Projects Showcase

Personal project showcase at `https://projects.eknath.dev`, built with Hugo and the local `projectgrid` theme.

## Development

```sh
hugo server --renderToMemory --port 1315
hugo --minify
hugo new content/projects/project-name.md
```

The existing Pages workflow builds with Hugo 0.141.0 and deploys on pushes to `master`. Keep the child independently buildable. Pushing the parent Command Center does not publish this site.

## Content

Create Markdown files in `content/projects/`:

```yaml
---
title: "Project Name - Short explanation"
date: 2025-01-07
description: "A concise description of the project"
tags: ["kotlin", "android"]
status: "in-progress"
thumbnail: "/images/project-thumb.jpg"  # optional
website: "https://project.example.com"  # optional
github: "https://github.com/username/repo"  # optional
demo: "https://demo.example.com"  # optional
download: "https://example.com/releases"  # optional
actions:  # optional
  - label: "API Docs"
    url: "https://example.com/docs"
    external: true
---

Project details start here. The template already supplies the page title.
```

Statuses: `live`, `in-progress`, `hold`, `archived`, `completed`, and `vision`. Filters are generated from the statuses actually used. Preserve existing status values unless the owner confirms a change; a stored `live` value is not independent evidence of current deployment.

The homepage uses the title before ` - ` as the compact card title and preserves the full title on detail pages. Search matches titles, descriptions, and tags. Action URLs are deduplicated and external links identify that they open a new tab. Put optional thumbnails in `static/images/`.

## Shared theme

The theme follows the landing page's navy background, blue accents, Poppins typography, and rounded glass panels. Dark is the initial appearance; the optional light theme persists per browser origin.

Edit shared files in `shared/site-theme/` in EK Command Center, then run `npm run theme:sync` there. `npm run theme:check` detects drift. Commit generated files in this repository so its standalone Hugo build keeps working.

Generated files (do not hand-edit):

- `themes/projectgrid/layouts/_default/baseof.html`
- `themes/projectgrid/static/css/ek-tokens.css`
- `themes/projectgrid/static/css/ek-theme.css`
- `themes/projectgrid/static/js/ek-theme.js`

Site-specific files:

- `layouts/index.html`, `layouts/_default/list.html`, and `layouts/_default/single.html` inside the theme.
- `layouts/partials/project-library.html` and `status-label.html`.
- `static/css/site.css` and `static/js/app.js`.

The shared shell provides navigation, footer, accessible theme controls, `/` to focus search, code copying, responsive tables, and print styles. No package installation, Bootstrap, or icon font is required. Poppins uses Google Fonts with system-font fallbacks.

## Verification

Build with Hugo and check home, `/projects/`, tag pages, and representative detail pages. Exercise combined search/status filters, no-results/reset, dark/light persistence, optional actions and thumbnails, mobile overflow, and responsive video embeds. Content and CSS edits do not imply a live deployment.
