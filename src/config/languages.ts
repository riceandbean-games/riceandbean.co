import { site } from "./site";

export const languages = {
  en: {
    label: "English",
    path: "/",
    locale: "en_US",
    title: "Rice & Bean — Mobile Game Studio",
    description: "Rice & Bean is an independent mobile game studio.",
    languagePicker: "Select language",
    scroll: "Scroll down to see our games",
    copyright: "All rights reserved.",
    screenshot: "gameplay screenshot",
    video: "gameplay video",
  },
  tr: {
    label: "Türkçe",
    path: "/tr/",
    locale: "tr_TR",
    title: "Rice & Bean — Mobil Oyun Stüdyosu",
    description: "Rice & Bean, bağımsız bir mobil oyun stüdyosu.",
    languagePicker: "Dil seçin",
    scroll: "Oyunları Görmek İçin Aşağıya Kaydırın",
    copyright: "Tüm hakları saklıdır.",
    screenshot: "oyun içi ekran görüntüsü",
    video: "oynanış videosu",
  },
} as const;

export type Language = keyof typeof languages;

export const languageUrls = {
  en: `${site.url}${languages.en.path}`,
  tr: `${site.url}${languages.tr.path}`,
  "x-default": `${site.url}${languages.en.path}`,
};
