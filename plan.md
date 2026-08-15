# HTML mockup → Payload CMS 3 хөрвүүлэлтийн төлөвлөгөө

> Хамрах хүрээ: `lib/html/` доторх 19 static хуудсыг Next.js 16 App Router + Payload CMS 3
> дээр агуулга нь админаас засагддаг байдлаар буулгах.
> Огноо: 2026-08-15

---

## 0. Одоогийн байдал (шалгасан баримт)

| Зүйл | Байдал |
| --- | --- |
| `next` | **16.2.11** |
| `@payloadcms/next@3.86.0` peer range | `>=16.2.6 <17.0.0` → **Next 16 дэмжигдэнэ, override хэрэггүй** ✅ |
| Суусан Payload багцууд | `payload`, `@payloadcms/next`, `@payloadcms/richtext-lexical`, `@payloadcms/db-postgres`, `sharp`, `graphql` |
| `payload.config.ts` | **байхгүй** |
| `app/(payload)` / `app/(frontend)` | **байхгүй** — `app/` дотор хуучин blog scaffold (`about`, `blog`, `quotes`) хэвээр |
| `.env.local` | зөвхөн `FIGMA_TOKEN` — `PAYLOAD_SECRET`, `DATABASE_URI` **алга** |
| Mockup хуудас | 19 `.html` |
| Mockup JS | **0 script tag** — бүх хуудас цэвэр markup + CSS |
| CSS | `styles.css` 3987 мөр (BEM design system) + `news-detail.css`, `organization.css` |
| Зураг | `lib/html/images/` ~70 файл, `public/images/` хоосон |

**Дүгнэлт:** CLAUDE.md-д "Verify first (Next 16 vs Payload peer range)" гэж тэмдэглэсэн эрсдэл
**арилсан** — Payload 3.86 өөрөө Next 16-г дэмжинэ. Phase 2-ыг хойшлуулах шалтгаан алга.

---

## 1. Гол зөвлөмж: дараалал — эхлээд Payload, дараа нь хуудсууд

CLAUDE.md-д "phase 1 (static port) → phase 2 (Payload)" гэж бичсэн. **Үүнийг өөрчлөхийг зөвлөж
байна:** 19 хуудсыг эхлээд hardcoded байдлаар бичээд, дараа нь бүгдийг нь дахин CMS-рүү
холбох гэдэг бол **бүх хуудсыг хоёр удаа бичих** гэсэн үг.

Зөв дараалал:

```
Payload skeleton (config + admin + media + theme)
        ↓
Chrome (header/footer/announcement) + design system CSS
        ↓
Хуудас бүрийг: static markup → props-той component → Payload block/collection
```

Хуудас бүр **нэг л удаа** бичигдэнэ, зөвхөн өгөгдлийн эх үүсвэр нь эцсийн алхамд солигдоно.

---

## 2. Best practice шийдвэрүүд

### 2.1 `styles.css`-ийг Tailwind utility болгож бүү бичиж сольж бай ⚠️

CLAUDE.md-д "mockup-ууд хүнд inline `style=` ашигладаг тул Tailwind utility руу хөрвүүл" гэж
бичсэн. **Одоогийн mockup-ууд тийм биш** — бүгд цэвэр BEM класстай (`.header__nav`,
`.board-card__photo`, `.dept-tab`), inline style бараг байхгүй, `styles.css` нь бүрэн
бүтэн design system.

Иймд:

- `styles.css`-ийг **бараг хэвээр** нь `app/(frontend)/styles/` дор хувааж авчир
  (`tokens.css`, `base.css`, `chrome.css`, `components.css`, `pages/*.css`) → `globals.css`-аас
  `@import`. Класс нэрс хэвээр үлдэнэ → markup-ыг хуулахад pixel parity шууд гарна.
- `news-detail.css`, `organization.css`-ийг мөн адил `pages/` дор оруул.
- `globals.css` дотор `@import "tailwindcss"` + `@theme inline` үлдээж, `:root` token-уудыг
  Tailwind-д ил гарга. Tailwind-ыг **зөвхөн шинэ UI**-д (Payload block-ийн нэмэлт хэсэг,
  admin-д байхгүй жижиг зүйлс) ашигла.
- Ингэснээр theme global-аас ирэх CSS variable-ууд **хуучин CSS болон Tailwind хоёуланд нь**
  нэг дор нөлөөлнө.

Энэ нь CLAUDE.md-ийн заавраас зөрж байгаа тул тэр хэсгийг шинэчлэхийг санал болгож байна.

### 2.2 Хуудас болгонд global бүү үүсгэ — Blocks (layout builder) хэрэглэ

Хамгийн түгээмэл алдаа: `about-vision`, `about-history`, `about-creed` … гээд mockup бүрт
тусдаа Payload global. Ингэвэл админ 15 өөр форм цээжлэх ба дахин ашиглалт тэг болно.

Зөв загвар:

- **`pages` collection** (`slug`, `title`, `hero`, `layout: blocks[]`, SEO, drafts).
  `about-*`, `hubs/*`, `membership` зэрэг бүх "урт контент" хуудас үүн дотор орно.
- **Block төрлүүд** нь mockup-уудаас **давтагдаж гарч ирсэн** хэсгүүд байх ёстой — төсөөллөөр
  биш. Эхний ээлжийн жагсаалт (markup-аас илэрсэн):

  | Block | Хаанаас | Тэмдэглэл |
  | --- | --- | --- |
  | `hero` / `pageBanner` | `hub-banner`, `dept-banner`, `news-banner`, `news-detail-hero` | variant: image / horizontal / compact |
  | `richText` | бүх `about-*`, `hub-*` | lexical |
  | `cardGrid` | `card-1..4`, dept grid, hub grid | item[]: image, title, text, link |
  | `statsRow` | index, hub хуудсууд | тоо + тайлбар |
  | `accelerators` ("4 хурдасгуур") | `index.html` | icon + гарчиг + текст |
  | `ctaBanner` | index, membership | гарчиг + товч |
  | `gallery` | `about-congress`, `hub-ulaanbaatar` | image[] |
  | `peopleGrid` | `about-board`, hub team | `boardMembers` руу relationship |
  | `postsFeed` | index, news related | `posts`-оос автоматаар татна (filter + limit) |
  | `tabs` | `departments` (dept-tabs), news filter | |

- Block бүрт **1:1 харгалзах React component** `components/blocks/<Name>/index.tsx`, нэг
  `<RenderBlocks blocks={page.layout} />` switch-ээр рендэрлэнэ.
- Жинхэнэ жагсаалттай контент (`posts`, `departments`, `hubs`, `boardMembers`,
  `membershipTiers`) **өөрийн collection**-той хэвээр — тэдгээрийг block дотор бүү хий.

### 2.3 Content-ийн зураг ↔ чимэглэлийн зургийг ялга

- **`media` collection руу**: мэдээний cover, удирдлагын зураг, албадын зураг, congress
  gallery, banner-ууд — өөрөөр хэлбэл **редактор солих ёстой** зүйл.
- **`public/` дотор үлдээ**: `logo.svg`, `arrow.svg`, `bird.svg`, `pray.svg`, `harvest.svg`,
  `vision-check.svg`, `*-watermark-*.svg`, icon-ууд — эдгээр нь **дизайны хэсэг**, контент биш.
  CMS-д оруулбал зүгээр л замбараагүй болно.
- `.zip` файлууд (`card3.zip`, `mongolinmap.zip`, `section3.zip`) болон `Дизайн/` фолдер
  хөрвүүлэлтэд ороогүй — эх файл тул устгана эсвэл repo-гоос гаргана.

### 2.4 Эхнээс нь localization асаа

Announcement bar дээр **English сонголт** бэлэн байгаа. Payload-ийн `localization`-ийг
дараа нэмэх нь бүх schema-г буцааж өөрчлөх ажил. Одооноос:

```ts
localization: {
  locales: ['mn', 'en'],
  defaultLocale: 'mn',
  fallback: true,
}
```

Frontend талд URL-д `/en` prefix одоохондоо шаардлагагүй — `locale` параметрийг local API-д
дамжуулаад, cookie/switcher-ээр удирдаж эхэл.

### 2.5 Админ хэрэглэгч ↔ гишүүнийг тусад нь

`/login`, `/profile` нь **гишүүдэд** зориулагдсан. Payload-ийн `users` (admin) collection-ыг
public бүртгэлд бүү дахин ашигла — `admin.hidden`, access control хольцолдоод эрсдэлтэй.

- `users` — admin панелийн auth (`admin: { user: 'users' }`).
- `members` — тусдаа auth collection (гишүүнчлэлийн төрөл, байгууллага, төлөв),
  `/membership/join` формоос үүснэ, `/profile`-д уншигдана.

### 2.6 Draft / preview / versions

`posts`, `pages` дээр `versions: { drafts: true }` + Next-ийн `draftMode` + Payload
Live Preview. Мэдээ нийтлэх ажлын урсгалд заавал хэрэгтэй, дараа нэмэхэд илүү өртөгтэй.

### 2.7 Cache & revalidation (Next 16)

- `cacheComponents` (`'use cache'`) **одоохондоо бүү асаа** — Payload 3-ын RSC интеграцтай
  хамт шалгагдаагүй. Анхдагч загвараар яв
  (`node_modules/next/dist/docs/01-app/02-guides/caching-without-cache-components.md`).
- Collection бүрийн `afterChange` / `afterDelete` hook-оос `revalidatePath` / `revalidateTag`
  дуудаж frontend-ийг шинэчил. Next 16-д `revalidateTag`/`updateTag`-ийн семантик өөрчлөгдсөн —
  `02-guides/upgrading/version-16.md` (мөр 453+) уншиж баталгаажуул.
- `theme` global өөрчлөгдвөл `revalidatePath('/', 'layout')`.

### 2.8 Rich text руу хөрвүүлэх

`news-detail.html`-ийн биетийг гараар лексикал JSON бичих ёсгүй.
`@payloadcms/richtext-lexical`-ийн HTML→Lexical converter-ийг seed script дотор ашиглана
(JSDOM хэрэгтэй). Гар ажиллагаа зөвхөн засварт үлдэнэ.

---

## 3. Шат шатаар

### Алхам 0 — цэвэрлэгээ & суурь (0.5 өдөр)

1. Хуучин scaffold устга: `app/about`, `app/blog`, `app/quotes`, `components/BlogList.tsx`,
   `components/SearchBox.tsx`, `lib/posts.ts`, `lib/about.ts`.
2. `.env.example` + `.env` үүсгэ: `PAYLOAD_SECRET`, `DATABASE_URI`.
   Postgres-ийг локалд (Docker `postgres:16`) босго.
3. `lib/html/images/*` → `public/images/` (chrome/чимэглэл) ба `seed/images/` (контент) гэж
   хоёр салга.

### Алхам 1 — Payload skeleton (1 өдөр)

1. `payload.config.ts` (root): `postgresAdapter`, `lexicalEditor`, `sharp`, `secret`,
   `typescript.outputFile`, `localization`.
2. `next.config.ts`-ийг `withPayload(...)`-ээр бооно.
3. `app/(payload)/` — Payload-ийн admin + API boilerplate route-ууд.
4. `app/(frontend)/` — сайтын бүх route энд шилжинэ (URL өөрчлөгдөхгүй).
5. `package.json` script: `payload`, `generate:types`, `generate:importmap`.
6. **Шалгалт:** `/admin` нээгдэж, эхний admin user үүсэж байвал алхам 1 дууссан.

### Алхам 2 — design system + chrome (1 өдөр)

1. `styles.css` → `app/(frontend)/styles/*` (2.1-ийн дагуу), `globals.css`-аас import.
2. `next/font/google`: Playfair / Manrope / Inter → `--font-display|body|ui`.
   (Google Fonts-ийн `<link>` устгана.)
3. `theme` global: `colors`, `typography`, `spacing` — `styles.css`-ийн `:root` утгуудыг
   яг тэр чигээр нь default болгож өг.
4. `app/(frontend)/layout.tsx`: `payload.findGlobal({ slug: 'theme' })` → inline
   `<style id="theme-tokens">:root{…}</style>`. `globals.css`-ийн `:root` нь build/DB-гүй
   үеийн fallback болж үлдэнэ.
5. `siteSettings` global: announcement bar, header nav, footer-ийн 5 бүлэг.
6. `<AnnouncementBar>`, `<Header>`, `<Footer>` — `index.html`-ийн markup-аас. Active nav-ыг
   `usePathname` биш, layout-д route-оос тооцоолж server дээр гарга; зөвхөн mobile menu
   toggle + search нь жижиг client component.
7. **Шалгалт:** админаас `--color-primary` солиход сайт бүхэлдээ өнгө солино.

### Алхам 3 — контентын collection-ууд (1 өдөр)

`media`, `posts`, `departments`, `hubs`, `boardMembers`, `membershipTiers`, `pages`,
`users`, `members`. `npm run generate:types` → `payload-types.ts` commit.

### Алхам 4 — хуудас бүрийг хөрвүүлэх (үндсэн ажил)

Хуудас тус бүрд **дараах 5 алхмыг яг энэ дарааллаар**:

1. **Markup зөөх** — HTML-ийн `<body>`-г JSX болгож `app/(frontend)/<route>/page.tsx`-д
   контентыг нь hardcode-оор. `class`→`className`, self-closing tag, `<img>`→`next/image`.
   → Mockup-той зэрэгцүүлж visual parity шалга.
2. **Хэсэглэх** — давтагдаж буй хэсгүүдийг `components/blocks/<Name>` болгож **props**-оор
   гарга. Props-ийн хэлбэр = ирээдүйн Payload block-ийн schema.
3. **Schema бичих** — props-оос үүдэн block/collection field-үүдийг тодорхойл (урвуугаар биш).
   `generate:types`.
4. **Seed** — hardcoded утгуудыг `seed/` script руу зөөж, local API-аар DB-д суулга.
5. **Холбох** — page-ийг `payload.find(...)`-оос уншдаг болгож, hardcode-ыг устга.

Хуудасны дараалал (хамгийн олон block гаргаж өгөхөөс нь эхэлнэ):

1. `news2.html` → `/news` + `news-detail.html` → `/news/[slug]` (posts, feed, richText)
2. `index.html` → `/` (hero, accelerators, cardGrid, ctaBanner, postsFeed)
3. `departments.html` + `department-detail.html` → `/departments`, `/departments/[slug]`
4. `hub-ulaanbaatar` / `hub-21-aimag` / `hub-faith-orgs` / `organization.html`
5. `about-vision` / `about-history` / `about-congress` / `about-board` / `about-creed`
6. `membership.html` + `membership-detail.html` + `membership-join.html`
7. `login.html`, `user-profile.html` (auth — хамгийн сүүлд)

### Алхам 5 — auth & форм

- `login` — Payload `members` collection-ийн login, Server Action + cookie.
- `membership/join` — Server Action → `payload.create({ collection: 'members' })`,
  server талын валидац, honeypot/rate-limit.
- `profile` — session-оос member татаж рендэрлэнэ.

### Алхам 6 — цэвэрлэгээ

`lib/html/` бүрэн устгана. `npm run build`, `npm run lint` цэвэр өнгөрнө.

---

## 4. Route map (mockup-ийн бодит файлаар засварласан)

CLAUDE.md-ийн хүснэгт хуучирсан — `news.html` байхгүй, `news2.html` байгаа; мөн
`news-detail`, `organization`, `membership-detail` гурав бүртгэгдээгүй.

| Mockup | Route | Эх сурвалж |
| --- | --- | --- |
| `index.html` | `/` | `pages` (slug: `home`) |
| `news2.html` | `/news` | `posts` list |
| `news-detail.html` | `/news/[slug]` | `posts` |
| `membership.html` | `/membership` | `membershipTiers` |
| `membership-detail.html` | `/membership/[slug]` | `membershipTiers` |
| `membership-join.html` | `/membership/join` | форм (client + server action) |
| `departments.html` | `/departments` | `departments` |
| `department-detail.html` | `/departments/[slug]` | `departments` |
| `organization.html` | `/organization` *(баталгаажуулах)* | `pages` эсвэл `hubs` |
| `hub-ulaanbaatar.html` | `/hubs/ulaanbaatar` | `hubs` |
| `hub-21-aimag.html` | `/hubs/aimag` | `hubs` |
| `hub-faith-orgs.html` | `/hubs/faith-orgs` | `hubs` |
| `about-vision.html` | `/about/vision` | `pages` |
| `about-history.html` | `/about/history` | `pages` |
| `about-congress.html` | `/about/congress` | `pages` + `gallery` block |
| `about-board.html` | `/about/board` | `boardMembers` |
| `about-creed.html` | `/about/creed` | `pages` |
| `login.html` | `/login` | `members` auth |
| `user-profile.html` | `/profile` | `members` |

---

## 5. Түгээмэл алдаанууд (заавал зайлсхийх)

1. **Mockup бүрт тусдаа global** → block-based `pages` ашигла.
2. **Markup хараагүй байж schema зохиох** → эхлээд component props, дараа нь field.
3. **Бүх зургийг media-д хийх** → чимэглэлийн SVG `public/`-д үлдэнэ.
4. **Localization-ийг дараа нэмнэ гэж бодох** → schema бүхэлдээ дахин бичигдэнэ.
5. **`styles.css`-ийг Tailwind utility болгож дахин бичих** → parity алдагдаж, хэдэн өдөр
   алдана. Тохирсон газарт нь л Tailwind хэрэглэ.
6. **`getPayload`-ыг client component-д дуудах** → зөвхөн RSC / server action.
7. **Revalidation-гүй үлдээх** → админаас өөрчилсөн зүйл сайтад гарахгүй байх мэт харагдана.
8. **`app/(frontend)` дотор Payload-ийн route-ыг холих** → `/admin`, `/api` зөрчилдөнө.

---

## 6. Дууссаны шалгуур

- [ ] `/admin` нэвтэрч, бүх collection/global-д агуулга орсон
- [ ] Дээрх 19 route бүгд Payload-ийн өгөгдлөөс рендэрлэгдэнэ
- [ ] `theme` global-аас өнгө/фонт солиход frontend шууд өөрчлөгдөнө
- [ ] Mockup vs route — visual parity (десктоп + мобайл breakpoint)
- [ ] `payload-types.ts` commit хийгдсэн
- [ ] `npm run build` ба `npm run lint` цэвэр
- [ ] `.env.example` баримтжсан
- [ ] `lib/html/` болон static `lib/*.ts` устсан

---

## 7. Батлуулах шаардлагатай зүйлс

1. **DB** — `@payloadcms/db-postgres` суусан байгаа. Локал Postgres (Docker) уу, эсвэл
   Neon/Supabase зэрэг hosted уу?
2. **Дараалал** — 1-р хэсэгт санал болгосон "эхлээд Payload" дарааллыг зөвшөөрөх үү,
   эсвэл CLAUDE.md-ийн phase 1 → phase 2 дарааллыг хатуу барих уу?
3. **`styles.css` хэвээр** — 2.1-ийн зөвлөмжийг батлах уу (CLAUDE.md-ийн Tailwind-руу-хөрвүүлэх
   заавар цуцлагдана)?
4. **Localization** — англи хувилбарыг үнэхээр хийх үү? Хийхгүй бол 2.4-ийг алгасна.
5. **`organization.html`** — ямар route-д харгалзах вэ? (`/organization` гэж таамагласан)
6. **Гишүүнчлэлийн бүртгэл** — жинхэнэ хэрэглэгчийн бүртгэл үү, эсвэл зөвхөн өргөдлийн
   форм (админ гараар баталгаажуулна) уу?
