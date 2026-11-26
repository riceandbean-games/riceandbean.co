import type { Game } from "@/data/games";
import { GameShowcase } from "./GameShowcase";

export function GamesPortfolio({ games }: { games: Game[] }) {
  return (
    <div id="oyunlar" tabIndex={-1}>
      <noscript><style>{".reveal-motion{opacity:1!important;transform:none!important}.phone-device{transform:var(--phone-rest-current)!important}"}</style></noscript>
      {games.map((game, index) => (
        <GameShowcase key={game.id} game={game} phoneSide={index % 2 === 0 ? "left" : "right"} />
      ))}
    </div>
  );
}
