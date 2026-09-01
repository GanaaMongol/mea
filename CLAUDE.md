# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> **[plan.md](plan.md) is the source of truth for this build.** It holds the ordered task
> list, the full block catalogue, and the current progress. This file mirrors its rules and
> decisions — if the two disagree, `plan.md` is right and this file must be corrected.
> Read `plan.md` before starting any task in this repo.

## Critical: verify against bundled docs before writing code

This project runs **Next.js 16.2.11** (with React 19.2 and Tailwind CSS v4). This is newer than most training data and has breaking API/convention changes. Before writing or changing framework code, read the relevant guide under `node_modules/next/dist/docs/` — do not rely on remembered Next.js APIs.

- `node_modules/next/dist/docs/01-app/` — App Router (this project uses it)
- `node_modules/next/dist/docs/03-architecture/` — internals/architecture
- `node_modules/next/dist/docs/index.md` — entry point

Same rule for Payload 3: it is installed at `node_modules/payload` and `node_modules/@payloadcms/*` — check the actual exports and `peerDependencies` rather than recalling Payload 2 APIs.

## Commands

```bash
npm run dev                  # dev server at http://localhost:3000
npm run build                # production build
npm run start                # serve the production build
npm run lint                 # eslint (flat config, eslint 9)
npm run generate:types       # payload-types.ts (run after every schema change)
npm run generate:importmap   # app/(payload)/admin/importMap.js
```

**Never run `npx payload …`.** npx reaches out to the registry for a `payload` binary it
thinks is missing; a failed fetch has already wiped `next`, `payload` and `@payloadcms/*`
out of `node_modules` once, requiring a full `npm install`. Use `npm run <script>` — the
package scripts resolve the local binary. `package.json` also needs `"type": "module"`, or
the Payload CLI cannot load `payload.config.ts` (lexical uses top-level await).

There is no test setup. Verification = `npm run build`, `npm run lint`, and visual comparison
of each route against its `lib/html/` mockup.

Local Postgres: Postgres.app 16 on `127.0.0.1:5432`, database `mea`. `psql` is not on PATH —
use `/Applications/Postgres.app/Contents/Versions/16/bin/psql`.

## Architecture

Next.js **App Router** + Payload CMS 3 installed *into* the same app (not a separate server).

- `app/(payload)/` — Payload admin + API routes (generated boilerplate). **No site UI here.**
- `app/(frontend)/` — every site route plus the shared-chrome `layout.tsx`. Route groups do
  not affect URLs, so `/news` stays `/news`.
- `payload.config.ts` — repo root. `@payload-config` and `@/*` aliases are set in `tsconfig.json`.
- `payload/` — collections, globals, blocks, fields, access, hooks.
- `components/blocks/` — one React component per Payload block + `RenderBlocks` + `registry.ts`.
- `components/chrome/` — AnnouncementBar, Header, Footer, Newsletter.
- `app/(frontend)/styles/` — the ported `lib/html/styles.css` design system.
- `media/` — local disk uploads (gitignored).

Notable config:

- Tailwind v4 through PostCSS (`postcss.config.mjs`) — CSS-first, no `tailwind.config.js`.
- ESLint flat config (`eslint.config.mjs`) extending `eslint-config-next`.

## The build task: MEA mockups → block-driven Payload site

The design source of truth is the static HTML in `lib/html/` — **19 pages**, a shared
`styles.css` (3987-line BEM design system), two page-level stylesheets (`news-detail.css`,
`organization.css`), and `lib/html/images/`. This is a marketing/membership site for
**MEA — Монголын Эвангелийн Эвсэл** (Mongolian Evangelical Alliance); UI language is Mongolian
(`lang="mn"`). The mockups contain **zero JavaScript** — every page is server-renderable markup.

Goal: reproduce these pages as App Router routes where **every section is an admin-editable
Payload block**, then delete `lib/html/`.

### Core rule: everything is a block

1. **A page is a `pages` document**, whose `layout` field is an array of blocks. Pages are not
   hand-built in `page.tsx`.
2. **Every `<section>` / named `div` in the mockups is a block type.** The catalogue in
   `plan.md` §2 was derived by scanning all 19 files — do not invent block types.
3. **No hardcoded text, image, or link inside a block component.** Everything visible is a
   field. Only layout and CSS class names stay in code.
4. **A block is three files**: `payload/blocks/<Name>/config.ts` (schema),
   `components/blocks/<Name>/index.tsx` (component), and one line in
   `components/blocks/registry.ts`.
5. **Reuse via `variant`, not new blocks.** Six banner styles = one `pageBanner` block with a
   `variant` select, not six blocks.
6. Two kinds of block: **self-contained** (`richText`, `quoteBanner`) and **collection-driven**
   (`postsFeed`, `departmentGrid`, `peopleGrid`) where the editor configures filter/limit/order.
7. **Chrome is editable too** — announcement bar, header nav, footer groups, and the newsletter
   strip come from the `siteSettings` global (not blocks; they are identical on every page).

Block component props come from `payload-types.ts` via each block's `interfaceName` — never
hand-write those types.

### Per-page conversion recipe (mandatory order)

Writing a field before looking at the markup is forbidden. For each page:

1. **Move the markup** — HTML `<body>` → JSX with content temporarily hardcoded.
   `class`→`className`, self-close tags, `<img>`→`next/image`. Verify visual parity first.
2. **Componentize** — each section becomes `components/blocks/<Name>` taking **props**. Every
   hardcoded value must surface as a prop; anything left inline is a bug.
3. **Derive the schema** — write the block fields *from those props*, then `npm run generate:types`.
4. **Enter the content in `/admin`** — the database is the only source of truth for content;
   there is no seed script, so nothing re-imposes hardcoded copy over an editor's work.
5. **Wire up** — the route reads via `payload.find(...)` and renders
   `<RenderBlocks blocks={doc.layout} />`; delete the hardcoded copy.

Page order and which blocks each page yields: `plan.md` §8 Алхам 4.

### Route map (19 mockups)

| HTML mockup | Route | Source |
| --- | --- | --- |
| `index.html` | `/` | `pages` (slug `home`) |
| `news2.html` | `/news` | `pages` + `postsFeed` block |
| `news-detail.html` | `/news/[slug]` | `posts` |
| — (шинэ) | `/prayer` | `pages` + `postsFeed` block (эх сурвалж: `prayers`) |
| — (шинэ) | `/prayer/[slug]` | `prayers` |
| `membership.html` | `/membership` | `pages` + `membershipTiers` |
| `membership-detail.html` | `/membership/[slug]` | `membershipTiers` |
| `membership-join.html` | `/membership/join` | form (server action) |
| `departments.html` | `/departments` | `pages` + `departmentGrid` block |
| `department-detail.html` | `/departments/[slug]` | `departments` |
| `organization.html` | `/organization` ⚠️ route unconfirmed | `pages` |
| `hub-ulaanbaatar.html` | `/hubs/ulaanbaatar` | `hubs` |
| `hub-21-aimag.html` | `/hubs/aimag` | `hubs` |
| `hub-faith-orgs.html` | `/hubs/faith-orgs` | `hubs` |
| `about-vision.html` | `/about/vision` | `pages` |
| `about-history.html` | `/about/history` | `pages` |
| `about-congress.html` | `/about/congress` | `pages` |
| `about-board.html` | `/about/board` | `pages` + `peopleGrid` block |
| `about-creed.html` | `/about/creed` | `pages` |
| `login.html` | `/login` | `members` auth |
| `user-profile.html` | `/profile` | `members` |

There is **no `news.html`** — the news list mockup is `news2.html`.

Detail collections (`posts`, `departments`, `hubs`) also carry a `layout: blocks[]` field, so
detail pages are assembled from blocks too; only their first few fields are fixed.

`login`, `profile`, and the join form are **not** blocks — they are auth-driven app UI with
their labels sourced from `siteSettings`.

### Shared chrome

The announcement bar, header (logo + nav + search + login), footer (5 nav groups), and the
`join-our__newsletter` strip repeat on **every** mockup. **Source of truth: `index.html`'s
blocks** — the other pages are synced to them and differ only in which nav link carries
`active` (about-* → "Бидний Тухай", news → "Мэдээ & Нийтлэл", membership* → "Гишүүнчлэл",
departments/detail → "Үйлчлэлийн Албад"; hubs/login/profile have none).

Build them as `components/chrome/*`, render from `app/(frontend)/layout.tsx`, take their
content from `siteSettings`, and derive active nav from the route **on the server**. Only the
mobile menu toggle and the search button need a small client component.

### Design system: keep `styles.css`, do not rewrite it in Tailwind

The mockups are clean BEM (`.header__nav`, `.board-card__photo`, `.dept-tab`) backed by a
complete design system. Converting it to utility classes destroys pixel parity for no gain.

- Port `styles.css` **nearly verbatim** into `app/(frontend)/styles/` split by concern
  (`tokens.css`, `base.css`, `chrome.css`, `blocks.css`, `pages/*.css`), imported from
  `globals.css`. Class names stay identical so copied markup renders correctly on arrival.
- `news-detail.css` and `organization.css` go under `styles/pages/`.
- `globals.css` keeps `@import "tailwindcss"` and `@theme inline` exposing the `:root` tokens.
  Use **Tailwind only for new UI** that has no mockup equivalent.
- Fonts: **Playfair** (display), **Manrope** (body), **Inter** (ui) via `next/font/google`,
  wired to `--font-display` / `--font-body` / `--font-ui`. Drop the mockups' Google Fonts `<link>`.

### Design tokens driven by Payload

1. **`theme` global**: `colors` (primary/-dark/-light, neutral-0…900, border-medium, accent-red,
   link), `typography` (font family names + `--text-display|h1|h2|h3|h4|body|sm|caption`),
   `spacing` (`section-pad`, `gutter`, `container-max`, `radius-sm|md|lg|2xl|full`,
   `padding-md|lg`). Enter the **exact** values from `lib/html/styles.css:6-59` in `/admin`.
2. `app/(frontend)/layout.tsx` fetches the global server-side and renders
   `<style id="theme-tokens">:root{ … }</style>` using the same variable names the CSS uses.
3. The `:root` block in `globals.css` stays as a build-time / DB-unavailable fallback.
4. `next/font` loads the font *files* at build; the global controls variable wiring and sizes.

### Content model

| Entity | Type | Role |
| --- | --- | --- |
| `pages` | collection | every static page — `title`, `slug`, `layout: blocks[]`, SEO, drafts |
| `posts` | collection | `/news`, `/news/[slug]` — kind (Мэдээ/Нийтлэл), excerpt, cover, body, publishedAt |
| `prayers` | collection | `/prayer`, `/prayer/[slug]` — `posts`-той ижил бүтэц (`payload/fields/article.ts`), `kind`-гүй |
| `departments` | collection | `/departments/[slug]` |
| `hubs` | collection | `/hubs/*` |
| `boardMembers` | collection | feeds `peopleGrid` (group: board / team / region) |
| `membershipTiers` | collection | `/membership/[slug]` |
| `media` | collection (upload) | content images, local disk |
| `users` | collection (auth) | **admin panel only** |
| `members` | collection (auth) | public site accounts — separate from `users` |
| `theme` | global | design tokens |
| `siteSettings` | global | announcement bar, nav, footer groups, newsletter |

Read via the local API in Server Components:
`const payload = await getPayload({ config }); await payload.find({ collection: 'posts' })`.
Dynamic routes resolve slugs via `payload.find({ where: { slug: { equals } } })`.
`getPayload` is **server-only** — never import it into a client component.

### Localization

`localization: { locales: ['mn','en'], defaultLocale: 'mn', fallback: true }` **from day one** —
the announcement bar already ships an English switcher, and retrofitting rewrites every schema.
Every visible text field is `localized: true`; `slug` is **not** localized (stable URLs).

### Auth

`users` = admin panel; `members` = public accounts (membership type, organization, status).
Never merge them — a public signup must not be able to widen CMS access. `/membership/join`
submits via a Server Action → `payload.create({ collection: 'members' })` with server-side
validation and basic abuse protection (honeypot / rate limit).

### Drafts, caching, revalidation

- `versions: { drafts: true }` on `pages`, `posts`, `departments`, `hubs`; plus Next `draftMode`
  and Payload Live Preview.
- **Do not enable `cacheComponents` / `'use cache'`** — untested with Payload 3's RSC
  integration. Use `01-app/02-guides/caching-without-cache-components.md`.
- Call `revalidatePath`/`revalidateTag` from `afterChange`/`afterDelete` hooks; `theme` and
  `siteSettings` revalidate `('/', 'layout')`. `revalidateTag`/`updateTag` semantics changed in
  Next 16 — read `02-guides/upgrading/version-16.md` §"Caching APIs" first.

### Query budget and Payload performance

Payload stores one logical document across many tables when it contains arrays, blocks, localized
fields, relationships, or rich text with nested media/links. The site must stay fast by treating
public pages as cached content and by keeping DB reads shallow and narrow.

- `depth` is the primary cost driver. Payload defaults to `depth: 2`; for list pages this is often
  unnecessary. Use `depth: 0` or `depth: 1` for listing views and only expand relations when the
  page truly needs them.
- Use `select` aggressively so a query does not pull rich text, nested blocks, or unrelated
  relation data. Example: `select: { title: true, slug: true, publishedAt: true }` for a list page.
- Use `pagination: false` when a page does not need total counts; this avoids an extra count query.
- Add indexes on high-traffic lookup fields such as `slug` and any `where` filter fields. For slug
  lookups, every public-facing collection should have a unique index or at least a text index in the
  database.
- Keep public pages mostly static: homepage, about pages, department listings, hub landing pages,
  and large marketing views should be cacheable and should not hit the database on every request.
  Prefer `export const revalidate = 3600` for route-level cache and `unstable_cache`/`revalidateTag`
  for data-level caches when a page depends on query results.
- Use hooks to invalidate cache tags when content changes. `afterChange` and `afterDelete` should call
  `revalidateTag` for collections like `pages`, `posts`, `departments`, `hubs`, `theme`, and
  `siteSettings` so admin edits refresh immediately without requiring a full rebuild.
- Reserve the database for the hot paths that are truly dynamic: admin panel access, member signup,
  login, user-specific profile data, and restricted content that depends on current auth/session state.
- Treat cache as the real optimization lever. A public-facing page that is cached for an hour will
  usually outperform a lightly optimized but uncached page by an order of magnitude.

Practical examples:

```ts
const posts = await payload.find({
  collection: 'posts',
  depth: 1,
  limit: 10,
  select: { title: true, slug: true, publishedAt: true, heroImage: true },
  sort: '-publishedAt',
})
```

```ts
// app/(frontend)/page.tsx
export const revalidate = 3600
```

```ts
const getDepartments = unstable_cache(
  async () => payload.find({ collection: 'departments', depth: 1, pagination: false }),
  ['departments'],
  { tags: ['departments'], revalidate: 3600 },
)
```

Verification requirement: enable the Postgres logger locally and measure real query counts on a warm
public route. If a route regularly produces 30+ SQL queries, the issue is likely `depth`/relation
explosion or missing select narrowing. If a route stays around 5 queries or fewer after warm cache,
then the query shape is acceptable.

### Rich text

Paste article bodies into the admin's lexical editor. If a one-off bulk import is ever needed,
use `@payloadcms/richtext-lexical`'s HTML→Lexical converter in a throwaway script — never
hand-author Lexical JSON.

### Assets

- **→ `media` collection**: anything an editor should swap — post covers, people photos,
  department images, galleries, banners.
- **→ `public/images/`**: design assets — `logo.svg`, `main-logo.jpeg`, `arrow.svg`, `bird.svg`,
  `pray.svg`, `harvest.svg`, `vision-check.svg`, `*-watermark-*.svg`, `icon-*.png`.
- All photos render through `next/image`.

### Anti-patterns (do not do these)

1. A hardcoded `page.tsx` or a per-page global instead of `pages` + blocks.
2. Hardcoded text/image/link left inside a block component.
3. Designing schema before reading the markup → props first, fields second.
4. A new block for every similar section → use a `variant` field.
5. Hand-writing block prop types instead of using `interfaceName` + `payload-types.ts`.
6. Every image into `media` → decorative SVGs belong in `public/`.
7. "We'll add localization later" → it rewrites the whole schema.
8. Rewriting `styles.css` as Tailwind utilities → parity loss.
9. Calling `getPayload` from a client component.
10. Shipping without revalidation hooks → admin edits appear not to work.
11. Putting site UI inside `app/(payload)/`.

### Definition of done

`/admin` authenticates; all 19 routes render from Payload data; **every section of every page is
editable in admin** (text, image, link, order); an editor can assemble a new page from blocks
without writing code; the `theme` global drives the site's CSS custom properties; visual parity
with the mockups on desktop **and** mobile; `payload-types.ts` committed; `npm run build` +
`npm run lint` pass; `.env.example` documented; `lib/html/` and static `lib/*.ts` removed.

## Decisions

Settled (see `plan.md` §11 for dates and rationale):

- **Next 16 ↔ Payload** ✅ — `@payloadcms/next@3.86.0` supports `next >=16.2.6 <17.0.0`. Next
  16.2.11 is inside the range; no override, no waiting.
- **DB adapter** ✅ — `@payloadcms/db-postgres`, local Postgres.app, database `mea`.
- **Media storage** ✅ — local disk (`/media`); swap to `@payloadcms/storage-s3` later as a
  config-only change.
- **Theme editability** ✅ — fully admin-editable `theme` global.
- **Build order** ✅ — Payload first, single pass. (The old phase 1 → phase 2 split is cancelled;
  it meant writing all 19 pages twice.)
- **`styles.css`** ✅ — ported as CSS, not converted to Tailwind utilities.
- **Block-first** ✅ — every section is a block; all content admin-editable.

Open — ask before the step that needs them:

- **English locale** — real EN translation, or is the switcher decorative?
- **`organization.html`** — which route? `/organization` is a guess.
- **Membership signup** — real member logins, or an application form an admin approves?
- **Shared blocks** — should a block repeated across pages pull from one reusable source, or is
  copying per page acceptable?
