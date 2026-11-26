"use client";

import { useSyncExternalStore } from "react";

const query = "(prefers-reduced-motion: reduce)";
const getPreference = () => window.matchMedia(query).matches;
const getServerPreference = () => false;

function subscribe(onChange: () => void) {
  const preference = window.matchMedia(query);
  preference.addEventListener("change", onChange);
  return () => preference.removeEventListener("change", onChange);
}

export function useReducedMotionPreference() {
  return useSyncExternalStore(subscribe, getPreference, getServerPreference);
}
