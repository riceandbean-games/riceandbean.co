# Rice & Bean

Official website for the independent mobile game studio. With an empty game list, the entire site is a single purple viewport with the centered wordmark, language picker, copyright notice, and Instagram link. English opens at `/` by default. Select Türkçe from the globe menu to visit `/tr/`. Publishing a game adds the scroll indicator and the game portfolio in both languages, with the footer after the last game.

## Development

Use Node.js 24 LTS and npm. The site uses Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and CSS 3D transforms.

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm run verify:export
```

The development server uses `http://localhost:3000`. The production build exports static HTML and assets to `out/`. Serve that directory from any static HTTP server to preview the export.

## Publish a game

1. Place public gameplay media in `public/games/<game-id>/`. Use WebP for screenshots and H.264 MP4 for video. A portrait crop and a poster help keep the phone screen readable.
2. Add an entry to `src/data/games.ts` with a unique `id`. List games in the order they should appear. Use `published: true` to include an entry or `false` to remove it from the rendered portfolio.
3. Supply the direct HTTPS product page for each available store in `googlePlayUrl` or `appStoreUrl`. Omit stores that do not have a product page yet.

Example entries for `games`:

```ts
{
  id: "game-01",
  title: "Game Name",
  published: true,
  mediaType: "image",
  mediaSrc: "/games/game-01/screenshot.webp",
  mediaFit: "cover",
}
```

```ts
{
  id: "game-02",
  title: "Another Game",
  published: true,
  mediaType: "video",
  mediaSrc: "/games/game-02/gameplay.mp4",
  posterSrc: "/games/game-02/poster.webp",
  mediaFit: "contain",
}
```

To replace a screenshot with video, change `mediaType` and `mediaSrc`, and add `posterSrc`. Use `cover` to fill the screen or `contain` to show the entire recording. Optional `backgroundColor`, `textColor`, and `accentColor` override the automatic cream and purple sequence. Store links and layouts are derived from the published entries. Anything committed to this public repository or placed in `public/` is public, including media for entries marked unpublished.

```bash
git add .
git commit -m "feat: add new game"
git push origin main
```

## Brand and layout

| Change | File or directory |
| --- | --- |
| Optimized logo, icons, social image | `public/brand/` |
| Local original artwork | `images/company/` |
| Store artwork | `public/badges/` |
| Purple `#6900F5`, cream `#FFF5DC`, lime `#C8FA65`, dark `#151515` | `src/config/brand.ts` |
| Shared perspective and mirrored phone angles | `src/config/phone.ts` |
| Portfolio entrance, timing and float | `src/config/animations.ts`, `src/app/globals.css` |
| Footer and copyright | `src/components/layout/`, `src/app/globals.css` |
| Instagram, site identity, metadata URL and public asset prefix | `src/config/site.ts` |
| English and Turkish interface copy and page paths | `src/config/languages.ts` |

## Hosting and domain

The `main` branch of [riceandbean-games/riceandbean.co](https://github.com/riceandbean-games/riceandbean.co) deploys through `.github/workflows/deploy.yml`. The workflow lints, checks types, builds, verifies `out/`, and publishes with the official GitHub Pages artifact actions. Manual runs are available in the Actions tab.

Set the Pages source to **GitHub Actions** in repository settings. The workflow uses the Pages configuration to choose `NEXT_PUBLIC_BASE_PATH` and `SITE_URL` for both assets and SEO. The default project site uses `/riceandbean.co` at `https://riceandbean-games.github.io/riceandbean.co/`. The custom domain `https://riceandbean.co` uses an empty base path. A local build defaults to the root path. To reproduce the project-site build in PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = '/riceandbean.co'
$env:SITE_URL = 'https://riceandbean-games.github.io/riceandbean.co'
npm run build
npm run verify:export
```

Verify domain ownership in the GitHub account’s Pages settings with the per-domain TXT record GitHub generates. Keep that record in GoDaddy. Set the repository Pages custom domain to `riceandbean.co` before changing the website records. The artifact workflow takes the custom domain from Pages settings.

| Type | GoDaddy host | Target |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `riceandbean-games.github.io` |

Preserve existing email and verification records. With both website records in place, GitHub Pages redirects `www` to the primary apex. Once GitHub issues the certificate, enable **Enforce HTTPS** in Pages settings. Routine game and site updates use the same DNS setup. [GitHub custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

If assets return 404s after a domain change, rerun the Pages workflow so Next.js rebuilds with the new base path. If Pages’ DNS check or certificate is pending, inspect the authoritative A and CNAME records, confirm domain forwarding is disabled, then check Pages settings again. If an upload fails, check the build job and use `npm run verify:export` to reproduce export validation locally.
