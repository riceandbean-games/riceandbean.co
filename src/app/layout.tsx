import type { CSSProperties, ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { brand } from "@/config/brand";
import { assetPath, site } from "@/config/site";
import "./globals.css";

const socialImage = {
  url: `${site.url}/brand/social.png`,
  width: 1200,
  height: 630,
  alt: site.name,
};

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  alternates: { canonical: `${site.url}/` },
  icons: {
    icon: assetPath("/brand/favicon.png"),
    apple: assetPath("/brand/apple-touch-icon.png"),
  },
  openGraph: {
    title: site.title,
    description: site.description,
    siteName: site.name,
    url: `${site.url}/`,
    locale: "tr_TR",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [socialImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: brand.purple,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const palette = {
    "--brand-purple": brand.purple,
    "--brand-cream": brand.cream,
    "--brand-lime": brand.lime,
    "--brand-dark": brand.dark,
  } as CSSProperties;

  return (
    <html lang={site.locale} style={palette}>
      <body>{children}</body>
    </html>
  );
}
