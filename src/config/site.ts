const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const site = {
  name: "Rice & Bean",
  title: "Rice & Bean — Mobile Game Studio",
  description: "Rice & Bean, bağımsız bir mobil oyun stüdyosu.",
  locale: "tr",
  url: (process.env.SITE_URL || "https://riceandbean.co").replace(/\/$/, ""),
  instagram: "https://www.instagram.com/riceandbean.co/",
} as const;

export function assetPath(path: string): string {
  return path.startsWith("/") && !path.startsWith("//") ? `${basePath}${path}` : path;
}
