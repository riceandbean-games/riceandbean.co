import type { CSSProperties, ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { brand } from "@/config/brand";
import { languages, languageUrls, type Language } from "@/config/languages";
import { assetPath, site } from "@/config/site";
import "@/app/globals.css";

const socialImage = {
  url: `${site.url}/brand/social.png`,
  width: 1200,
  height: 630,
  alt: site.name,
};

export function siteMetadata(language: Language): Metadata {
  const content = languages[language];
  const url = languageUrls[language];

  return {
    title: content.title,
    description: content.description,
    alternates: { canonical: url, languages: languageUrls },
    icons: {
      icon: assetPath("/brand/favicon.png"),
      apple: assetPath("/brand/apple-touch-icon.png"),
    },
    openGraph: {
      title: content.title,
      description: content.description,
      siteName: site.name,
      url,
      locale: content.locale,
      alternateLocale: languages[language === "en" ? "tr" : "en"].locale,
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      images: [socialImage],
    },
  };
}

export const siteViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: brand.purple,
};

export function DocumentLayout({ children, language }: { children: ReactNode; language: Language }) {
  const palette = {
    "--brand-purple": brand.purple,
    "--brand-cream": brand.cream,
    "--brand-lime": brand.lime,
    "--brand-dark": brand.dark,
  } as CSSProperties;

  return (
    <html lang={language} style={palette}>
      <body>{children}</body>
    </html>
  );
}
