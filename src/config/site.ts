const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const site = {
  name: "Rice & Bean",
  url: (process.env.SITE_URL || "https://riceandbean.co").replace(/\/$/, ""),
  instagram: "https://www.instagram.com/riceandbean.co/",
} as const;

export function assetPath(path: string): string {
  return path.startsWith("/") && !path.startsWith("//") ? `${basePath}${path}` : path;
}
