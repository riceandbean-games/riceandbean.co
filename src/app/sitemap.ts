import type { MetadataRoute } from "next";
import { languageUrls } from "@/config/languages";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [languageUrls.en, languageUrls.tr].map((url) => ({
    url,
    alternates: { languages: languageUrls },
  }));
}
