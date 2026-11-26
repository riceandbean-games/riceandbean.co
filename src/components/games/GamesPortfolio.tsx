import type { Language } from "@/config/languages";
import type { Game } from "@/data/games";
import { GameShowcase } from "./GameShowcase";

export function GamesPortfolio({ games, language }: { games: Game[]; language: Language }) {
  return (
    <div id="oyunlar" tabIndex={-1}>
      <noscript><style>{".reveal-motion{opacity:1!important;transform:none!important}.phone-device{transform:var(--phone-rest-current)!important}"}</style></noscript>
      {games.map((game, index) => (
        <GameShowcase key={game.id} game={game} language={language} phoneSide={index % 2 === 0 ? "left" : "right"} />
      ))}
    </div>
  );
}
