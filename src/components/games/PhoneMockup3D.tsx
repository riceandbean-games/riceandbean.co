import type { Game } from "@/data/games";
import { GameMedia } from "./GameMedia";

const frameDepths = [2, 4, 6, 8, 10, 12];

export function PhoneMockup3D({ game }: { game: Game }) {
  return (
    <div className="phone-device">
      {frameDepths.map((depth) => (
        <div key={depth} className="phone-frame" style={{ transform: `translateZ(-${depth}px)` }} aria-hidden="true" />
      ))}
      <div className="phone-buttons" aria-hidden="true"><i /><i /><i /></div>
      <div className="phone-face">
        <div className="phone-screen">
          <GameMedia game={game} />
          <div className="phone-camera" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
