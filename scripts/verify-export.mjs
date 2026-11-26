import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = (process.env.SITE_URL || "https://riceandbean.co").replace(/\/$/, "");
const requiredFiles = [
  "index.html",
  ".nojekyll",
  "robots.txt",
  "sitemap.xml",
  "brand/rice-and-bean.webp",
  "brand/favicon.png",
  "brand/apple-touch-icon.png",
  "brand/social.png",
  "badges/app-store.svg",
  "badges/google-play.png",
];

for (const file of requiredFiles) {
  const info = await stat(`out/${file}`);
  assert(info.isFile() && (info.size > 0 || file === ".nojekyll"), `Invalid export file: ${file}`);
}

const html = await readFile("out/index.html", "utf8");
const sitemap = await readFile("out/sitemap.xml", "utf8");
const robots = await readFile("out/robots.txt", "utf8");
assert(html.includes(`href="${siteUrl}/"`), "Canonical URL does not match the deployment");
assert(html.includes(`content="${siteUrl}/brand/social.png"`), "Social image URL does not match the deployment");
assert(sitemap.includes(`<loc>${siteUrl}/</loc>`), "Sitemap URL does not match the deployment");
assert(robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`), "Robots file links to an incorrect sitemap");
assert(html.includes('href="https://www.instagram.com/riceandbean.co/"'), "Instagram link is missing");

const assetUrls = new Set(
  [...html.matchAll(/(?:src|href)="([^"<>]*(?:\/_next\/|\/brand\/)[^"<>]*)"/g)]
    .map((match) => match[1])
    .filter((url) => url.startsWith("/")),
);
assert(assetUrls.size > 0, "HTML has no static asset references");
for (const url of assetUrls) {
  assert(url.startsWith(`${basePath}/`), `Missing base path: ${url}`);
  const pathname = new URL(url, "https://example.invalid").pathname;
  assert((await stat(`out${pathname.slice(basePath.length)}`)).isFile(), `Missing referenced asset: ${url}`);
}

console.log(`Verified static export at ${siteUrl}/ (${assetUrls.size} referenced assets)`);
