# HTML mockup → Payload CMS 3 хөрвүүлэлтийн төлөвлөгөө

> **Энэ файл бол ажлын үндсэн эх сурвалж (source of truth).** `CLAUDE.md` үүнээс
> үүсдэг — зөрчилдвөл `plan.md` зөв, `CLAUDE.md`-г засна.
>
> Хамрах хүрээ: `lib/html/` доторх 19 static хуудсыг Next.js 16 App Router + Payload CMS 3
> дээр буулгах. **Гол зарчим: хуудасны хэсэг (section) бүр = Payload block.** Админ
> хэрэглэгч ямар ч хэсгийг засах, дараалал солих, нэмэх, устгах боломжтой байх ёстой.
>
> Сүүлд шинэчилсэн: 2026-08-15

---

## 0. Одоогийн байдал

| Зүйл | Байдал |
| --- | --- |
| `next` | **16.2.11** |
| `@payloadcms/next@3.86.0` peer range | `>=16.2.6 <17.0.0` → **Next 16 дэмжигдэнэ** ✅ |
| Суусан багц | `payload`, `@payloadcms/next`, `@payloadcms/richtext-lexical`, `@payloadcms/db-postgres`, `sharp`, `graphql` |
| DB | Postgres.app 16 (`127.0.0.1:5432`), `mea` DB үүсгэсэн ✅ |
| Mockup | 19 `.html`, **JavaScript огт байхгүй**, бүгд server-render хийх боломжтой |
| CSS | `styles.css` 3987 мөр (BEM design system) + `news-detail.css`, `organization.css` |
| Зураг | 66 файл `public/images/`-д хуулагдсан ✅ |

### Хийгдсэн ажил

- [x] **Алхам 0** — хуучин blog scaffold устгасан; `mea` DB; `.env` + `.env.example`;
      `.gitignore` (`!.env.example`, `/media`); 66 зураг `public/images/`-д.
- [x] **Алхам 1** — `payload.config.ts`, `withPayload()`, `app/(payload)/` route-ууд,
      `@payload-config` alias, `"type": "module"` (Payload CLI-д шаардлагатай),
      9 collection + 2 global, npm script-ууд, `importMap`, `payload-types.ts`,
      `app/(frontend)/` руу нүүлгэсэн. **`/admin` ажиллаж байна** (144 хүснэгт үүссэн).
- [x] **Алхам 2** — `styles.css` → `app/(frontend)/styles/` 13 файл болгон хуваасан
      (**rejoin хийхэд эх файлтай яг ижил** — cascade хэвээр); `next/font/google`
      (Playfair/Manrope/Inter, cyrillic subset); `theme` global → `<style id="theme-tokens">`;
      `siteSettings` global; `AnnouncementBar`/`Header`/`Newsletter`/`Footer`;
      `proxy.ts` нь `x-pathname` header өгснөөр active nav **server дээр** тооцогдоно.
- [x] **Алхам 3** — `pageBanner`, `sectionTabs`, `richText` block; `RenderBlocks` + `registry`;
      `pages` collection + `app/(frontend)/[...slug]` + `/`.
- [~] **Алхам 4** — 19-өөс **3 хуудас** дууссан:
      - `news2.html` → `/news` — `postsFeed` block (12 карт, таб шүүлтүүр ажиллаж байна:
        `?kind=article` → 3 карт), 12 `posts` DB-д орсон.
      - `news-detail.html` → `/news/[slug]` — нийтлэлийн бие нь блокоор
        (`richText` → `gallery` мозайк → `richText`), доор нь "Төстэй мэдээнүүд".
      - `index.html` → `/` — `pageBanner` + `cardGrid` + `quoteBanner` + `accelerators`
        + `postsFeed` + `quoteBanner`(cta).

      **Бэлэн болсон block: 8** — `pageBanner`, `sectionTabs`, `richText`, `cardGrid`,
      `quoteBanner`, `accelerators`, `postsFeed`, `gallery`.

      Үлдсэн: departments, organization, hubs×3, about×5, membership×3, membership-join.

      **Алхам 5 (auth) эхэлсэн:** `login.html` → `/login`, `user-profile.html` → `/profile`
      ажиллаж байна (утас/и-мэйлээр нэвтрэх, гарах, толгойн товч солигдох).

**Шалгасан:** `npm run lint` ✅ · `npx tsc --noEmit` ✅ · `npm run build` ✅ ·
`/`, `/news`, `/news?kind=article`, `/news/[slug]`, `/admin` бүгд 200.

Админ: `admin@mea.mn` / `changeme123` (`/admin`-аас солино). Хоосон DB дээр Payload өөрөө
эхний хэрэглэгч үүсгэх дэлгэц гаргана — seed script байхгүй.

⚠️ **`npx payload …` бүү ажиллуул** — registry-рүү залгаж, амжилтгүй болбол `node_modules`-ыг
эвдэнэ (нэг удаа `next`, `payload`, `@payloadcms/*`-г устгасан). Зөвхөн `npm run <script>`.

---

## 1. Архитектурын гол зарчим: бүх зүйл block

### 1.1 Дүрэм

1. **Хуудас бүр = `pages` collection-ий нэг document**, түүний `layout` талбар нь
   block-уудын массив. Route нь `slug`-аар олдоно. Хуудсыг код дотор хатуу бүтээхгүй.
2. **Mockup-ийн `<section>` / нэрлэгдсэн `div` бүр = нэг block төрөл.** Дээрх бүх 19
   файлыг сканнердаж гаргасан жинхэнэ каталог §2-т байна.
3. **Block дотор хатуу бичсэн (hardcoded) текст, зураг, линк байж болохгүй.** Харагдаж
   буй бүх зүйл field байна. Зөвхөн layout/CSS класс код дотор үлдэнэ.
4. **Block = 3 файл**: schema (`payload/blocks/<Name>/config.ts`), React component
   (`components/blocks/<Name>/index.tsx`), бүртгэл (`components/blocks/registry.ts`-д 1 мөр).
5. **Дахин ашиглалт `variant`-аар.** Ижил төстэй хэсгүүдийг (жишээ нь 6 өөр banner)
   тусад нь block болгохгүй — нэг block + `variant` select талбар.
6. **Хуваарилалт:** контентоо өөртөө агуулдаг block (`richText`, `quoteBanner`) ба
   collection-оос татдаг block (`postsFeed`, `departmentGrid`, `peopleGrid`) хоёр төрөлтэй.
   Татдаг block-д админ зөвхөн шүүлтүүр/тоо/эрэмбийг тохируулна.
7. **Chrome бас засагдана**: announcement bar, header nav, footer, newsletter хэсэг нь
   `siteSettings` global-аас ирнэ (block биш — бүх хуудсанд ижил).

### 1.2 Ийм байх ёстой (админ талын үр дүн)

```
Pages → "Нүүр хуудас"
  Layout:
    ▸ Page Banner        [variant: hub]      ← гарчиг, дэд гарчиг, дэвсгэр зураг
    ▸ Card Grid          [variant: info]     ← 3 карт: icon, гарчиг, текст, линк
    ▸ Quote Banner                           ← ишлэл, эх сурвалж
    ▸ Accelerators                           ← 4 карт
    ▸ Quote Banner                           ← (дахин ашиглав)
    ▸ Posts Feed         [limit: 4]          ← posts-оос автоматаар
    [+ Add block]  ← админ шинэ хэсэг нэмнэ, чирж дараалал солино
```

### 1.3 Block schema-г бичих дэс дараалал (заавал)

Markup-ыг хараагүй байж field зохиохыг **хориглоно**. Хуудас бүрд:

1. **Markup зөөх** — HTML-ийн `<body>` → JSX, контент нь түр hardcoded.
   `class`→`className`, self-closing tag, `<img>`→`next/image`.
   → Mockup-той харьцуулж visual parity шалгана.
2. **Хэсэглэх** — section бүрийг `components/blocks/<Name>` болгож **props**-оор гаргана.
   Hardcoded утга бүр props болж гарна — үлдвэл алдаа.
3. **Schema гаргах** — props-ын хэлбэрээс block-ийн field-үүдийг бичнэ (урвуугаар биш).
   `interfaceName` өгч `payload-types.ts`-ээс шууд props-ын type болгож ашиглана.
4. **Контент оруулах** — hardcoded утгуудыг `/admin`-д гараар оруулна. Контентын цорын ганц
   эх сурвалж нь DB; seed script байхгүй тул редакторын засварыг юу ч дарж бичихгүй.
5. **Холбох** — page нь `payload.find(...)` → `<RenderBlocks blocks={page.layout} />`.
   Hardcoded хувилбарыг устгана.

---

## 2. Block каталог (19 mockup-ийг сканнердаж гаргасан)

Давтамж = хэдэн mockup дээр гарч ирсэн бэ.

### 2.1 Бүтцийн block-ууд

| Block | Давтамж | Mockup дахь класс | Талбарууд |
| --- | --- | --- | --- |
| `pageBanner` | **17** | `hub-banner`, `vision-banner`, `dept-banner`, `dept-detail-banner`, `news-banner`, `hub-region-hero`, `news-detail-hero` | `variant` (hub/vision/dept/deptDetail/news/region/newsDetail), `eyebrow`, `title`, `subtitle`, `background` (media), `watermark`, `overlay` (bool), `links[]` |
| `sectionTabs` | **11** | `dept-tabs`, `tab-bar`, `cap-tabs`, `news-filter` | `variant`, `items[]` (label, href, active), `align` |
| `richText` | **9** | `about-content__section`, `hub-content__inner` доторх prose | `eyebrow`, `title`, `content` (lexical), `width` (narrow/wide) |
| `twoColumn` | **5** | `history-grid`, `hub-intro`, `hub-region-intro`, `dept-detail-text-grid` | `left` (lexical), `right` (lexical эсвэл media), `ratio`, `reverse` |
| `sectionHeader` *(field group, block биш)* | **8** | `content-block__header`, `org-section-header`, `news-header`, `vision-mission__header` | `label`, `title`, `description` — бусад block-д давхар талбар болж орно |

### 2.2 Контентын block-ууд

| Block | Давтамж | Класс | Талбарууд |
| --- | --- | --- | --- |
| `cardGrid` | **6** | `info-cards`, `vision-mission__cards`, `acknowledgment-grid`, `vision-values__grid`, `step-cards` | `variant` (info/mission/ack/values/step), `sectionHeader`, `columns`, `items[]`: icon (media), title, text (lexical), link |
| `quoteBanner` | **3** | `quote-banner`, `dept-detail-quote` | `variant`, `quote`, `author`, `role`, `background` |
| `calloutText` | **3** | `highlighted-text`, `vision-goal`, `creed-section__parchment` | `variant` (highlight/goal/parchment), `content` (lexical), `watermark` |
| `statsRow` | **2** | `stats-row`, `stats-row__item` | `items[]`: value, label, `columns` |
| `timeline` | **1** | `timeline`, `timeline__item` | `items[]`: year, title, content (lexical) |
| `accelerators` | **1** | `digital_strategy`, `accel-card__frame`, `accel-card__panel` | `sectionHeader`, `items[]`: icon, title, text, link ("4 хурдасгуур") |
| `processSteps` | **1** | `process-steps`, `process-step__number` | `items[]`: number, title, text; `rows` |
| `introCard` | **2** | `org-intro-card`, `hub-intro` | `background`, `title`, `content` (lexical) |
| `mapBlock` | **2** | `map-block` | `image`, `regions[]` (name, href, x, y) |
| `newsletterSignup` | **19** | `join-our__newsletter` | ⚠️ **block биш** — бүх хуудсанд байгаа тул `siteSettings`-т орно |

### 2.3 Өгөгдөл татдаг block-ууд

| Block | Давтамж | Класс | Татдаг | Тохиргоо |
| --- | --- | --- | --- | --- |
| `postsFeed` | **3** | `news-grid`, `news-card` | `posts` / `prayers` (`collection` сонголт) | `sectionHeader`, `kind` (all/news/article), `limit`, `layout` (grid/carousel), `showFilter`, `moreLink`, `manual[]` (гараар сонгох боломж) |
| `departmentGrid` | **2** | `dept-grid`/`dept-card`, `org-dept-grid`/`org-dept-card` | `departments` | `variant` (card/overlay), `limit`, `manual[]` |
| `peopleGrid` | **5** | `board-grid`/`board-card`, `team-grid`/`team-card`, `hub-region-team-grid` | `boardMembers` | `variant` (board/team/region), `sectionHeader`, `group` (filter), `manual[]` |
| `gallery` | **5** | `hub-carousel`, `hub-carousel__slide`, `news-detail-article__gallery` | — (өөрийн media) | `variant` (carousel/grid/mosaic), `items[]` (media, caption) |
| `dataTable` | **4** | `data-table`, `filter-row`, `filter-field` | `hubs` / гараар | `variant`, `columns[]`, `rows[]` эсвэл `source` (collection), `filters[]` |

### 2.4 Block биш зүйлс (app UI)

`login-card`, `login-field-group`, `profile-panel`, `profile-info-section`,
`profile-field` — эдгээр нь auth-аас хамаарсан динамик UI. Тогтмол component болгоно;
зөвхөн шошго/тайлбар текстийг `siteSettings`-ээс авна.

---

## 3. Файлын бүтэц

```
payload.config.ts                 # root
payload/
  access/index.ts                 # ✅ бэлэн
  fields/
    slug.ts                       # ✅ бэлэн
    sectionHeader.ts              # давхар ашиглагдах field group
    link.ts
  blocks/
    <Name>/config.ts              # Block schema (interfaceName-тэй)
    index.ts                      # бүх block-ийн export
  collections/*.ts
  globals/Theme.ts, SiteSettings.ts
  hooks/revalidate.ts

components/
  blocks/
    <Name>/index.tsx              # 1:1 харгалзах React component
    RenderBlocks.tsx              # ганц switch — block → component
    registry.ts                   # blockType → component map
  chrome/AnnouncementBar.tsx, Header.tsx, Footer.tsx, Newsletter.tsx
  ui/                             # Image, Link, RichText helper-ууд

app/
  (payload)/                      # admin + api (boilerplate)
  (frontend)/
    layout.tsx                    # chrome + theme token injection
    globals.css
    styles/                       # styles.css-ийн хуваасан хувилбар
    [...slug]/page.tsx            # pages collection-ий бүх статик хуудас
    news/page.tsx, news/[slug]/page.tsx
    departments/[slug]/page.tsx
    login/, profile/, membership/join/
```

### 3.1 `RenderBlocks` загвар

```tsx
// components/blocks/registry.ts
export const blockComponents = {
  pageBanner: PageBanner,
  richText: RichTextBlock,
  cardGrid: CardGrid,
  // … block нэмэх = энд 1 мөр
} as const

// components/blocks/RenderBlocks.tsx
export function RenderBlocks({ blocks }: { blocks: Page['layout'] }) {
  return blocks?.map((block, i) => {
    const Component = blockComponents[block.blockType]
    return Component ? <Component key={i} {...block} /> : null
  })
}
```

Block component-ийн props нь `payload-types.ts`-ээс generate хийгдсэн type
(`interfaceName`) байна — гараар type бичихгүй.

---

## 4. Collection & global

| Entity | Төрөл | Үүрэг | Тэмдэглэл |
| --- | --- | --- | --- |
| `pages` | collection | **бүх статик хуудас** | `title`, `slug`, `layout: blocks[]`, SEO, drafts |
| `posts` | collection | `/news`, `/news/[slug]` | title, slug, kind (Мэдээ/Нийтлэл), excerpt, cover, `layout: blocks[]` эсвэл lexical body, publishedAt |
| `prayers` | collection | `/prayer`, `/prayer/[slug]` | `posts`-той ижил талбарууд (`articleFields`), `kind`-гүй. Админд "Мэдээ & Нийтлэл"-ийн доор. |
| `departments` | collection | `/departments/[slug]` | name, slug, lead, image, `layout: blocks[]` |
| `hubs` | collection | `/hubs/*` | name, slug, region, banner, `layout: blocks[]` |
| `boardMembers` | collection | `peopleGrid`-ийн эх | name, role, photo, `group` (board/team/region), order |
| `membershipTiers` | collection | `/membership/[slug]` | name, slug, price, benefits[], description |
| `media` | collection (upload) | контентын зураг | ✅ бэлэн |
| `users` | collection (auth) | зөвхөн админ панел | ✅ бэлэн |
| `members` | collection (auth) | `/login`, `/profile`, `/membership/join` | `users`-ээс тусдаа |
| `theme` | global | design token | §6 |
| `siteSettings` | global | announcement bar, header nav, footer 5 бүлэг, newsletter | бүх хуудсанд ижил chrome |

**Чухал:** `departments`, `hubs`, `posts` дээр ч `layout: blocks[]` байна — detail хуудсууд
нь мөн адил block-оор угсрагдана, зөвхөн эхний хэдэн талбар нь тогтмол.

Frontend уншилт нь **Server Component дотор local API**-аар:
`const payload = await getPayload({ config }); await payload.find({ collection: 'posts' })`.
`getPayload` нь **server-only** — client component-д хэзээ ч импортлохгүй.

---

## 5. Design system: `styles.css`-ийг хэвээр авчирна

Mockup-ууд цэвэр BEM класстай (`.header__nav`, `.board-card__photo`, `.dept-tab`), inline
style бараг байхгүй, `styles.css` нь бүрэн design system. Tailwind utility болгож дахин
бичвэл parity алдагдана.

- `styles.css` → `app/(frontend)/styles/` дор хуваана: `tokens.css`, `base.css`,
  `chrome.css`, `blocks.css`, `pages/*.css`. **Класс нэрс хэвээр** — иймээс markup хуулахад
  шууд зөв харагдана.
- `news-detail.css`, `organization.css` → `styles/pages/`.
- `globals.css` нь `@import "tailwindcss"` + `@theme inline` хадгална. Tailwind-ыг зөвхөн
  mockup-д байхгүй **шинэ UI**-д хэрэглэнэ.
- Фонт: **Playfair** (display), **Manrope** (body), **Inter** (ui) — `next/font/google`,
  `--font-display|body|ui` рүү холбоно. Mockup-ийн Google Fonts `<link>` устгана.

---

## 6. Token-ууд Payload-аас удирдагдана

1. **`theme` global**: `colors` (primary/-dark/-light, neutral-0…900, border-medium,
   accent-red, link), `typography` (font нэрс + `--text-display|h1|h2|h3|h4|body|sm|caption`),
   `spacing` (`section-pad`, `gutter`, `container-max`, `radius-sm|md|lg|2xl|full`,
   `padding-md|lg`). Default нь `lib/html/styles.css:6-59`-ийн **яг тэр утгууд**.
2. **Runtime inject**: `app/(frontend)/layout.tsx` global-ыг server дээр татаж
   `<style id="theme-tokens">:root{…}</style>` рендэрлэнэ — component-уудын аль хэдийн
   ашиглаж буй **ижил хувьсагчийн нэрсээр**.
3. `globals.css`-ийн `:root` нь build үеийн / DB унасан үеийн fallback болж үлдэнэ.
4. Tailwind CSS-first хэвээр — `tailwind.config.js` байхгүй.
5. Фонтын **файлыг** `next/font` build дээр ачаална; global нь зөвхөн хувьсагчийн
   холболт ба хэмжээг удирдана.

---

## 7. Бусад шийдвэрүүд

### 7.1 Localization
`localization: { locales: ['mn','en'], defaultLocale: 'mn', fallback: true }` — **эхнээс нь**.
Announcement bar дээр English сэлгүүр бэлэн байгаа; дараа нэмбэл бүх schema дахин бичигдэнэ.
Харагдах текстийн field бүр `localized: true`. `slug` нь localized **биш** (URL тогтвортой).

**Frontend routing (2026-09-03-нд хэрэгжсэн).** Route бүр `app/(frontend)/[lang]/` дор
байрлана. Монгол нь угтваргүй (`/news`) — `proxy.ts` үүнийг `/mn/news` руу **rewrite**
хийнэ; англи нь ил угтвартай (`/en/news`); гараар бичсэн `/mn/...` нь угтваргүй хэлбэр рүү
redirect хийгдэнэ. Ингэснээр хэл тус бүр өөрийн cache entry-тэй болно (cookie-д суурилсан
сэлгэлт нэг URL-д хоёр хэл өгч ISR-ийг унагаана).

- Payload query бүр `locale` дамжуулна (`lib/queries.ts`, `[lang]` route-ууд, өгөгдөл татдаг
  block-ууд). `fallback: true` тул орчуулаагүй EN талбар монголоор гарна.
- Дотоод холбоос бүр `lib/i18n.ts` дахь `localeHref()`-ээр угтвар авна — `resolveHref` нь
  reference болон гараар бичсэн `/`-ээр эхэлсэн URL хоёуланг нь хамарна.
- Кодод үлдсэн цөөн UI мөр (`Унших`, хайлтын хуудас, aria-label) `lib/dictionary.ts`-д.
- `revalidatePath` нь rewrite-ийн **очих** замыг шаарддаг тул hook-ууд нийтийн зам бүрийг
  `/mn/...` ба `/en/...` гэж хоёр удаа цэвэрлэнэ; layout нь `/[lang]`.
- Хэл сэлгүүр (`LanguageSelector`) нь client component — `usePathname()`-ээс одоогийн
  хуудсыг аваад нөгөө хэл рүү нь байрандаа сэлгэнэ.

### 7.2 Auth
`users` = админ панел, `members` = олон нийтийн бүртгэл (гишүүнчлэлийн төрөл, байгууллага,
төлөв). Хоёрыг хольж болохгүй. `/membership/join` → Server Action →
`payload.create({ collection: 'members' })`, server талд валидац + honeypot/rate-limit.

### 7.3 Draft, preview
`posts`, `pages`, `departments`, `hubs` дээр `versions: { drafts: true }`, Next `draftMode`,
Payload Live Preview.

### 7.4 Cache & revalidation
- `cacheComponents` (`'use cache'`) **бүү асаа** — Payload 3-ын RSC интеграцтай шалгагдаагүй.
  Анхдагч загвар: `node_modules/next/dist/docs/01-app/02-guides/caching-without-cache-components.md`.
- Collection бүрийн `afterChange`/`afterDelete` hook-оос `revalidatePath`/`revalidateTag`.
  `theme`, `siteSettings` → `revalidatePath('/', 'layout')`.
- Next 16-д `revalidateTag`/`updateTag` семантик өөрчлөгдсөн —
  `02-guides/upgrading/version-16.md` §"Caching APIs" уншиж баталгаажуулна.

### 7.5 Rich text
Нийтлэлийн биетийг `/admin`-ы lexical editor-т шууд оруулна. Хэрэв нэг удаагийн бөөн импорт
хэрэгтэй бол `@payloadcms/richtext-lexical`-ийн HTML→Lexical converter-ийг түр script-д
ашиглана (JSDOM). Lexical JSON гараар бичихгүй.

### 7.6 Зураг
- **`media` collection руу**: редактор солих ёстой зураг — мэдээний cover, хүмүүсийн зураг,
  албадын зураг, gallery, banner.
- **`public/images/` дотор**: дизайны хөшүүрэг — `logo.svg`, `main-logo.jpeg`, `arrow.svg`,
  `bird.svg`, `pray.svg`, `harvest.svg`, `vision-check.svg`, `*-watermark-*.svg`, `icon-*.png`.
- Бүх зураг `next/image`-ээр рендэрлэгдэнэ.

---

## 8. Гүйцэтгэлийн дараалал

### Алхам 0 — цэвэрлэгээ ✅ дууссан

### Алхам 1 — Payload skeleton (үлдсэн хэсэг)
1. `payload/collections/*` бүгдийг бич (`Pages`, `Posts`, `Departments`, `Hubs`,
   `BoardMembers`, `MembershipTiers`, `Members`) + `globals/Theme`, `globals/SiteSettings`.
2. `package.json` script: `payload`, `generate:types`, `generate:importmap`.
3. `npm run generate:importmap` → `app/(payload)/admin/importMap.js`.
4. `app/layout.tsx`, `app/page.tsx`, `app/globals.css` → `app/(frontend)/` руу нүүлгэнэ.
5. **Шалгалт:** `/admin` нээгдэж, эхний админ хэрэглэгч үүснэ.

### Алхам 2 — design system + chrome
1. `styles.css` → `app/(frontend)/styles/*` (§5).
2. `next/font/google` — Playfair / Manrope / Inter.
3. `theme` global + `<style id="theme-tokens">` inject (§6).
4. `siteSettings` global + `<AnnouncementBar>`, `<Header>`, `<Footer>`, `<Newsletter>`.
   Active nav-ыг route-оос **server дээр** тооцно; зөвхөн mobile menu toggle + search нь
   жижиг client component.
5. **Шалгалт:** админаас `--color-primary` солиход сайт бүхэлдээ өнгө солино.

### Алхам 3 — block суурь
1. `payload/fields/sectionHeader.ts`, `link.ts`.
2. Эхний block-ууд: `pageBanner`, `richText`, `sectionTabs` (хамгийн олон давтагддаг гурав).
3. `RenderBlocks` + `registry.ts` + `pages` collection + `app/(frontend)/[...slug]/page.tsx`.
4. `npm run generate:types` → `payload-types.ts` commit.
5. **Шалгалт:** админаас гараар шинэ хуудас үүсгэж, 3 block нэмээд frontend дээр гарч ирнэ.

### Алхам 4 — хуудас бүрийг хөрвүүлэх
Хуудас бүрд §1.3-ийн 5 алхам. Дараалал (хамгийн олон block гаргаж өгөхөөс нь):

| # | Mockup | Гарах шинэ block |
| --- | --- | --- |
| 1 | `news2.html` → `/news` | `postsFeed`, `sectionTabs` |
| 2 | `news-detail.html` → `/news/[slug]` | `gallery` |
| 3 | `index.html` → `/` | `cardGrid`, `quoteBanner`, `accelerators` |
| 4 | `departments.html` + `department-detail.html` | `departmentGrid`, `peopleGrid`, `twoColumn` |
| 5 | `organization.html` | `introCard`, `departmentGrid` (overlay variant) |
| 6 | `hub-ulaanbaatar` / `hub-21-aimag` / `hub-faith-orgs` | `dataTable`, `gallery` (carousel) |
| 7 | `about-history.html` | `statsRow`, `timeline`, `calloutText` |
| 8 | `about-vision.html` | `cardGrid` (mission/values variant) |
| 9 | `about-congress.html`, `about-creed.html` | `calloutText` (parchment) |
| 10 | `about-board.html` | `peopleGrid` (board variant) |
| 11 | `membership.html` + `membership-detail.html` | `processSteps`, `mapBlock` |
| 12 | `login.html`, `user-profile.html`, `membership-join.html` | (block биш — app UI) |

### Алхам 5 — auth & форм
`members` login (Server Action + cookie), `/membership/join` бүртгэл, `/profile`.

- [x] `/login` — `LoginForm` (`useActionState`), `loginAction` Server Action.
      Нэвтрэх нэр = **утасны дугаар эсвэл и-мэйл** (утсыг зөвхөн цифрээр хадгалж,
      `members.phone`-оор и-мэйлийг нь олоод Payload-ийн `login`-д дамжуулна).
      Cookie нь `generatePayloadCookie`-оор тавигдаж, `?next=` зөвхөн дотоод зам.
      Буруу оролдлого 5 удаа → Payload өөрөө 10 минут түгждэг.
- [x] `/profile` — `members` session заавал шаардана (үгүй бол `/login?next=/profile`),
      мэдээллийг харуулж, `logoutAction` нь session-ийг DB-ээс устгаад cookie-г арилгана.
- [x] Толгойн "Нэвтрэх" товч нэвтэрсэн үед "Профайл" болж солигдоно (`layout.tsx` → `getMember`).
- [x] Хоёр хуудасны бүх текст `siteSettings → Нэвтрэх & Профайл` таб дотор
      (`lib/authLabels.ts` нь default-уудыг global болон fallback хоёрт нэг дор өгнө).
- [ ] `/membership/join` бүртгэлийн форм — үлдсэн.
- [x] `/profile` дээрх **нууц үг солих** — `PasswordSection` (задардаг форм) +
      `changePasswordAction`. Одоогийн нууц үгээ дахин оруулах шаардлагатай
      (Payload-ийн түгжээ энэ шалгалтад мөн үйлчилнэ), шинэ нь ≥8 тэмдэгт.
      Амжилттай бол бүх session устаж, тухайн browser-т шинэ cookie олгоно —
      өөр төхөөрөмжөөс автоматаар гарна.
- [ ] "Нууц үг мартсан" (`/login`) ба "Мэдээлэл өөрчлөх" (`/profile`) — холбоос
      байгаа ч харгалзах урсгал хийгдээгүй.

### Алхам 5.1 — Холбоо барих (Figma-аас)
`contactForm` block (Figma `160:2583`) — зүүн талд засварлагдах холбоо барих мэдээлэл,
баруун талд "Санал хүсэлт илгээх" маягт. Маягт нь `feedback` collection руу бичнэ
(нийтэд `create`, унших нь зөвхөн админ). Honeypot + IP тутам 10 минутад 3 удаа.
`/contact` хуудас `pages`-д үүссэн (`pageBanner` + `contactForm`).
Энэ хэсэг нь `lib/html/`-д mockup байхгүй тул Tailwind + theme token-оор бичсэн.

### Алхам 6 — цэвэрлэгээ
`lib/html/` устгана. Контентын зургийг `public/images/`-ээс хасаж `media`-д үлдээнэ.
`npm run build` + `npm run lint` цэвэр.

---

## 9. Түгээмэл алдаа (хориотой)

1. Хуудас бүрт тусдаа global эсвэл тусдаа hardcoded `page.tsx` → **`pages` + block**.
2. Block дотор hardcoded текст/зураг/линк үлдээх → бүгд field байх ёстой.
3. Markup хараагүй байж schema зохиох → **props эхэлж, field хоёрдугаарт**.
4. Төстэй хэсэг бүрт шинэ block үүсгэх → `variant` талбар ашигла.
5. Block component-ийн props-ыг гараар бичих → `payload-types.ts`-ийн `interfaceName`.
6. Бүх зургийг `media`-д хийх → чимэглэлийн SVG `public/`-д.
7. "Localization дараа нэмнэ" → бүх schema дахин бичигдэнэ.
8. `styles.css`-ийг Tailwind utility болгож дахин бичих → parity алдагдана.
9. `getPayload`-ыг client component-д дуудах.
10. Revalidation hook-гүй үлдээх → админы засвар сайтад гарахгүй мэт харагдана.
11. `app/(frontend)` дотор Payload-ийн route холих → `/admin`, `/api` зөрчилдөнө.

---

## 10. Дууссаны шалгуур

- [ ] `/admin` нэвтэрнэ; бүх collection/global-д агуулга бий
- [ ] 19 route бүгд Payload-ийн өгөгдлөөс рендэрлэгдэнэ
- [ ] **Хуудасны хэсэг бүр админаас засагдана** — текст, зураг, линк, дараалал
- [ ] Админ шинэ хуудсыг код бичихгүйгээр block-оор угсарч чадна
- [ ] `theme` global-аас өнгө/фонт солиход frontend шууд өөрчлөгдөнө
- [ ] Mockup vs route — visual parity (десктоп + мобайл)
- [ ] `payload-types.ts` commit хийгдсэн
- [ ] `npm run build`, `npm run lint` цэвэр
- [ ] `.env.example` баримтжсан
- [ ] `lib/html/` болон static `lib/*.ts` устсан

---

## 11. Шийдвэрүүд

**Батлагдсан:**

- **Next 16 ↔ Payload** ✅ 2026-08-15 — `@payloadcms/next@3.86.0` нь `>=16.2.6 <17.0.0`
  дэмждэг. Override хэрэггүй.
- **DB** ✅ — `@payloadcms/db-postgres`, локал Postgres.app дээр `mea` DB.
- **Media storage** ✅ 2026-07-23 — локал диск (`/media`), дараа `@payloadcms/storage-s3`.
- **Theme** ✅ — админаас бүрэн засагддаг `theme` global.
- **Дараалал** ✅ 2026-08-15 — Payload эхэлнэ, нэг дамжлагаар. (Хуучин phase 1 → phase 2
  хуваалт цуцлагдсан — 19 хуудсыг хоёр удаа бичих байсан.)
- **`styles.css`** ✅ 2026-08-15 — CSS хэвээр зөөнө, Tailwind utility болгохгүй.
- **Block-first** ✅ 2026-08-15 — section бүр block, бүх контент админаас засагдана.

**Нээлттэй (тухайн алхамд хүрэхийн өмнө асууна):**

- **Англи хэл** — жинхэнэ EN орчуулга хийх үү, эсвэл сэлгүүр нь зөвхөн чимэглэл үү?
- **`organization.html`** — аль route вэ? (`/organization` гэж таамагласан)
- **Гишүүнчлэлийн бүртгэл** — жинхэнэ нэвтрэх эрхтэй хэрэглэгч үү, эсвэл админ гараар
  баталгаажуулдаг өргөдлийн форм уу?
- **Хуваалцсан block** — олон хуудсанд ижил block-ыг нэг эх сурвалжаас (reusable blocks
  collection) татах хэрэгтэй юу, эсвэл хуудас бүрт хуулбарлах уу?
