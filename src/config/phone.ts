import type { CSSProperties } from "react";
import { animation } from "@/config/animations";

export type PhoneSide = "left" | "right";

const perspective = 1400;
const angles = {
  desktop: { rest: [8, 18, 4], entry: [10, 30, 7] },
  mobile: { rest: [4, 8, 2], entry: [6, 14, 4] },
} as const;

export function phoneStyle(side: PhoneSide): CSSProperties {
  const direction = side === "left" ? 1 : -1;
  const rotation = ([x, y, z]: readonly number[]) =>
    `rotateY(${direction * y}deg) rotateX(${x}deg) rotateZ(${direction * z}deg)`;

  return {
    "--phone-perspective": `${perspective}px`,
    "--phone-rest": rotation(angles.desktop.rest),
    "--phone-entry": rotation(angles.desktop.entry),
    "--phone-rest-mobile": rotation(angles.mobile.rest),
    "--phone-entry-mobile": rotation(angles.mobile.entry),
    "--float-distance": `${animation.floatDistance}px`,
    "--float-duration": `${animation.floatDuration}s`,
  } as CSSProperties;
}
