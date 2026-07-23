# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Critical: verify against bundled docs before writing code

This project runs **Next.js 16.2.11** (with React 19.2 and Tailwind CSS v4). This is newer than most training data and has breaking API/convention changes. Before writing or changing framework code, read the relevant guide under `node_modules/next/dist/docs/` — do not rely on remembered Next.js APIs.

- `node_modules/next/dist/docs/01-app/` — App Router (this project uses it)
- `node_modules/next/dist/docs/03-architecture/` — internals/architecture
- `node_modules/next/dist/docs/index.md` — entry point

## Commands

```bash
npm run dev     # start dev server at http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint (flat config, eslint 9)
```

There is no test setup in this project.

## Architecture

Next.js **App Router** project. All routes and UI live under `app/`:

- `app/layout.tsx` — root layout; loads Geist fonts via `next/font/google` and exposes them as CSS variables (`--font-geist-sans`, `--font-geist-mono`), and sets base `<html>`/`<body>` classes.
- `app/page.tsx` — the `/` route.
- `app/globals.css` — global styles. Tailwind v4 is imported with `@import "tailwindcss"` (no `tailwind.config.js`); theme tokens are defined in CSS via `@theme inline` and `:root` custom properties. Dark mode uses `prefers-color-scheme`.
- `public/` — static assets served at the root path.

Notable config:

- TypeScript path alias `@/*` maps to the repo root (`tsconfig.json`).
- Tailwind v4 is wired through PostCSS (`postcss.config.mjs`, `@tailwindcss/postcss`) — configuration is CSS-first, not JS-based.
- ESLint uses the flat-config format (`eslint.config.mjs`) extending `eslint-config-next`.

## Build task: migrate the MEA static mockups into the App Router

The design source of truth is the static HTML in `lib/html/` (17 pages + a shared
`lib/html/styles.css` design system). This is a full marketing/membership site for
**MEA — Монголын Эвангелийн Эвсэл** (Mongolian Evangelical Alliance), UI language is
Mongolian (`lang="mn"`). The goal is to reproduce these pages faithfully as Next.js 16
App Router routes, then delete `lib/html/` once every page is ported.

The current `app/about`, `app/blog`, `app/quotes` scaffold does **not** match this site
and should be replaced by the routes below.

### Route map (HTML file → route)

| HTML mockup | Route | Notes |
| --- | --- | --- |
| `index.html` | `/` | home: hero, "4 хурдасгуур", membership teaser, news grid, CTA |
| `news.html` | `/news` | news + article list, filter tabs (Мэдээ / Нийтлэл) |
| `membership.html` | `/membership` | 3 membership types |
| `membership-join.html` | `/membership/join` | join form (client component) |
| `departments.html` | `/departments` | department (Албад) listing |
| `department-detail.html` | `/departments/[slug]` | dynamic department detail |
| `login.html` | `/login` | login form (client component) |
| `user-profile.html` | `/profile` | member profile |
| `about-vision.html` | `/about/vision` | |
| `about-history.html` | `/about/history` | |
| `about-congress.html` | `/about/congress` | has an image slider |
| `about-board.html` | `/about/board` | leadership cards |
| `about-creed.html` | `/about/creed` | statement of faith |
| `hub-ulaanbaatar.html` | `/hubs/ulaanbaatar` | |
| `hub-21-aimag.html` | `/hubs/aimag` | |
| `hub-faith-orgs.html` | `/hubs/faith-orgs` | |

### Shared chrome → components + layout

The announcement bar, `header` (logo + nav + search + login), and `footer` (with its
5 nav groups) repeat on every page. Extract them into `components/` and render them from
`app/layout.tsx` so routes only render page content. The mobile menu toggle and search
button need a small client component; keep the rest as Server Components.

### Design system conversion

- Port `lib/html/styles.css` tokens (`:root` custom properties: colors, `--font-*`,
  `--text-*`, spacing) into `app/globals.css` under Tailwind v4's `@theme inline` /
  `:root` — CSS-first, no `tailwind.config.js`. Do **not** keep the standalone
  `styles.css`; the design tokens live in `globals.css`.
- Fonts: the mockups use **Playfair** (display), **Manrope** (body), **Inter** (ui).
  Load them via `next/font/google` in `app/layout.tsx` (replacing the current Geist
  fonts) and wire them to the `--font-display` / `--font-body` / `--font-ui` variables.
- The mockups use heavy inline `style="..."`. When porting, prefer Tailwind utility
  classes / the token variables over copying inline styles verbatim.

### Data

Model repeated content (news articles, departments, hub entries, board members,
membership tiers) as typed data in `lib/` (follow the existing `lib/*.ts` pattern) and
map over it, rather than hardcoding each card in JSX. Dynamic routes
(`/news/[slug]`, `/departments/[slug]`) read from these.

### Assets (currently missing)

The mockups reference `images/*` (38 files: `logo.svg`, `hero-bg.jpg`, `news-*.jpg`,
`leader-*.jpg`, `hub-*.jpg`, etc.) and none exist in `public/`. Create `public/images/`.
Until real assets arrive, use placeholders and load photos through `next/image`.

### Definition of done

Every route above renders, shared chrome comes from `layout.tsx`, tokens/fonts live in
`globals.css` + `next/font`, `npm run build` and `npm run lint` pass, and `lib/html/`
is removed.

## Build task (phase 2): move the site onto Payload CMS 3

Once the App Router port (phase 1 above) is in place, migrate the site so that content
**and the design-system tokens** are served from **Payload CMS 3**. Payload 3 installs
*into* this Next.js app (it is not a separate server): its admin panel and REST/local
API mount as App Router routes, and Server Components read content through Payload's
local API. The static `lib/*.ts` data becomes editable Payload collections/globals.

### Verify first (Next 16 compatibility)

Payload 3 targets Next.js 15 App Router; this repo runs **Next 16.2.11**, which is newer
than Payload's documented peer range. **Before installing, verify compatibility** — check
Payload's `peerDependencies` for `next`, and re-read the App Router conventions under
`node_modules/next/dist/docs/01-app/` (route groups, `next.config` wrappers, dynamic
params). If Payload pins `next@15`, decide between an install override vs. holding phase 2
until a Next 16-compatible Payload release. Record the outcome here before proceeding.

### Install & scaffold

- Add `payload`, `@payloadcms/next`, `@payloadcms/richtext-lexical`, `@payloadcms/db-*`
  (adapter — see decisions), and `sharp` (image processing).
- Wrap the Next config with `withPayload(...)` (config is `next.config.ts`/`.mjs` here).
- Add env: `PAYLOAD_SECRET` and the DB connection string (`.env`, plus `.env.example`).
- Add npm scripts as needed (`payload` CLI, `generate:types`, `generate:importmap`).

### Directory restructure (route groups)

Payload owns `/admin` and `/api`, so the existing site routes must move out of their way
using **route groups** (folders in parens don't affect the URL):

- `app/(payload)/` — Payload's admin + API routes (generated/boilerplate). Do not put
  site UI here.
- `app/(frontend)/` — move **all** phase-1 routes here (`page.tsx`, `layout.tsx`, `news/`,
  `membership/`, `about/`, `departments/`, `hubs/`, `login/`, `profile/`). URLs are
  unchanged (`/news` stays `/news`). Shared chrome layout moves to
  `app/(frontend)/layout.tsx`.
- `payload.config.ts` at repo root (collections, globals, db adapter, lexical editor,
  `secret`, `sharp`). Keep the `@/*` alias working for imports.

### Content model (collections & globals)

Map phase-1 typed data and the route map onto Payload:

| Payload entity | Type | Replaces / feeds | Notes |
| --- | --- | --- | --- |
| `posts` | collection | `lib/posts.ts`, `/news`, `/news/[slug]` | fields: title, slug, kind (Мэдээ/Нийтлэл), excerpt, cover (upload), body (lexical), publishedAt |
| `departments` | collection | `/departments`, `/departments/[slug]` | slug, name, lead, body, image |
| `hubs` | collection | `/hubs/*` | region, body, images |
| `boardMembers` | collection | `about-board` | name, role, photo |
| `membershipTiers` | collection | `/membership` | name, price, benefits[] |
| `media` | collection (upload) | all `images/*` | replaces `public/images` placeholders |
| `users` | collection (auth) | `/login`, `/profile` | Payload auth; powers header login |
| `pages` | global(s) or collection | `about-*`, static copy | for editable long-form pages |
| `theme` | global | **the design system** | see next section |
| `siteSettings` | global | announcement bar, nav, footer groups | editable shared chrome |

Frontend reads via the local API in Server Components:
`const payload = await getPayload({ config }); await payload.find({ collection: 'posts' })`
and `payload.findGlobal({ slug: 'theme' })`. Dynamic routes resolve slugs through
`payload.find({ where: { slug: { equals } } })`.

### Design system driven by Payload config (the CSS ← Payload part)

Goal: the `styles.css`/`globals.css` design tokens are **managed through Payload**, not
hardcoded — so colors/typography/spacing are editable in the admin and applied site-wide.

1. **`theme` global** (`payload.config.ts`): grouped fields mirroring the current
   `:root` tokens — `colors` (primary, primary-dark, primary-light, neutral-50…900,
   accent-red, link), `typography` (font-family names for display/body/ui + the
   `--text-*` sizes), `spacing` (section-pad, gutter, container-max, radius-sm/md/full).
   Seed defaults to the exact values already in `lib/html/styles.css`.
2. **Inject as CSS variables at runtime**: in `app/(frontend)/layout.tsx`, fetch the
   `theme` global server-side and render an inline
   `<style id="theme-tokens">:root{ --color-primary: …; --font-display: …; … }</style>`
   using the **same variable names** the components already use. Values now come from
   Payload; keep the current `:root` values in `globals.css` as static fallbacks for
   build time / DB-unavailable.
3. **Tailwind stays CSS-first**: `globals.css` keeps `@import "tailwindcss"` and
   `@theme inline` mapping Tailwind utilities → those CSS custom properties. No
   `tailwind.config.js`. Editing the theme in Payload re-colors utilities automatically.
4. **Fonts**: `next/font/google` (Playfair/Manrope/Inter) still loads the font *files*
   at build (runtime font swapping isn't possible); the `theme` global controls the
   `--font-*` *variable wiring* and sizes, not the loaded font binaries.

### Data migration

- Write a seed script (Payload local API, run via the `payload` CLI/Node) that imports
  the existing `lib/posts.ts` / `lib/about.ts` content and the `theme` defaults from
  `styles.css`, so the DB starts populated and pages render identically to phase 1.
- After parity is confirmed, `lib/*.ts` static data and any remaining `lib/html/` files
  are removed (phase-1 `lib/html/` removal still applies).

### Definition of done (phase 2)

`/admin` loads and authenticates; every phase-1 route renders from Payload data; the
`theme` global drives the site's CSS custom properties (change a color in admin →
frontend updates); `generate:types` types are committed; `npm run build` + `npm run lint`
pass; env is documented in `.env.example`; static `lib/*.ts` content is removed.

### Decisions to confirm before starting

- **DB adapter**: `@payloadcms/db-sqlite` (zero-infra local dev, recommended to start)
  vs. `@payloadcms/db-postgres` (prod) vs. `@payloadcms/db-mongodb`.
- **Next 16 vs Payload peer range** — see "Verify first" above.
- **Theme editability scope**: full admin-editable `theme` global (assumed here) vs.
  config-only tokens defined in `payload.config.ts` with no admin UI.
- **Media storage**: ✅ decided (2026-07-23) — start with **local disk storage** (Payload's
  default upload handling, files under `media/` or similar, no extra adapter needed).
  Migrate to S3 later via `@payloadcms/storage-s3`; keep upload field config
  adapter-agnostic so the switch is a config change, not a content-model change.
