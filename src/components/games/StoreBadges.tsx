import Image from "next/image";
import { assetPath } from "@/config/site";
import type { Game } from "@/data/games";

function storeUrl(value: string | undefined, store: "apple" | "google") {
  if (!value) return null;
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return null;
  }

  if (url.protocol !== "https:" || url.username || url.password || url.port) return null;
  const valid = store === "apple"
    ? ["apps.apple.com", "itunes.apple.com"].includes(url.hostname) && /^\/(?:[^/]+\/)?app\/(?:[^/]+\/)?id\d+\/?$/.test(url.pathname)
    : url.hostname === "play.google.com" && url.pathname === "/store/apps/details" && Boolean(url.searchParams.get("id"));

  return valid ? url.href : null;
}

export function StoreBadges({ game }: { game: Game }) {
  const apple = storeUrl(game.appStoreUrl, "apple");
  const google = storeUrl(game.googlePlayUrl, "google");
  if (!apple && !google) return null;

  return (
    <div className="store-badges flex flex-wrap items-center">
      {apple && (
        <a className="store-badge" href={apple} target="_blank" rel="noopener noreferrer" aria-label={`${game.title} — Download on the App Store`}>
          <Image alt="" src={assetPath("/badges/app-store.svg")} width={132} height={44} />
        </a>
      )}
      {google && (
        <a className="store-badge" href={google} target="_blank" rel="noopener noreferrer" aria-label={`${game.title} — Get it on Google Play`}>
          <Image alt="" src={assetPath("/badges/google-play.png")} width={564} height={168} />
        </a>
      )}
    </div>
  );
}
