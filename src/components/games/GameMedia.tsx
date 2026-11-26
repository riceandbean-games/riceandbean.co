import Image from "next/image";
import type { Game } from "@/data/games";
import { assetPath } from "@/config/site";
import { GameplayVideo } from "./GameplayVideo";

export function GameMedia({ game }: { game: Game }) {
  const fit = game.mediaFit ?? "cover";

  if (game.mediaType === "video") {
    return <GameplayVideo src={assetPath(game.mediaSrc)} poster={game.posterSrc && assetPath(game.posterSrc)} title={game.title} fit={fit} />;
  }

  return (
    <Image
      fill
      src={assetPath(game.mediaSrc)}
      alt={`${game.title} oyun içi ekran görüntüsü`}
      sizes="(max-width: 719px) 62vw, 20rem"
      style={{ objectFit: fit }}
    />
  );
}
