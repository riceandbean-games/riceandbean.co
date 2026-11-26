import Image from "next/image";
import { languages, type Language } from "@/config/languages";
import type { Game } from "@/data/games";
import { assetPath } from "@/config/site";
import { GameplayVideo } from "./GameplayVideo";

export function GameMedia({ game, language }: { game: Game; language: Language }) {
  const fit = game.mediaFit ?? "cover";
  const content = languages[language];

  if (game.mediaType === "video") {
    return <GameplayVideo src={assetPath(game.mediaSrc)} poster={game.posterSrc && assetPath(game.posterSrc)} label={`${game.title} ${content.video}`} fit={fit} />;
  }

  return (
    <Image
      fill
      src={assetPath(game.mediaSrc)}
      alt={`${game.title} ${content.screenshot}`}
      sizes="(max-width: 719px) 62vw, 20rem"
      style={{ objectFit: fit }}
    />
  );
}
