"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/config/site";

const currentYear = () => new Date().getFullYear();

function subscribe(onChange: () => void) {
  const timer = window.setInterval(onChange, 60_000);
  return () => window.clearInterval(timer);
}

export function Copyright({ buildYear }: { buildYear: number }) {
  const year = useSyncExternalStore(subscribe, currentYear, () => buildYear);
  return <small className="site-copyright">© {year} {site.name}. Tüm hakları saklıdır.</small>;
}
