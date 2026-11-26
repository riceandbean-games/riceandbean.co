export interface Game {
  id: string;
  title: string;
  published: boolean;
  mediaType: "image" | "video";
  mediaSrc: string;
  posterSrc?: string;
  googlePlayUrl?: string;
  appStoreUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  mediaFit?: "cover" | "contain";
}

export const games: Game[] = [];
