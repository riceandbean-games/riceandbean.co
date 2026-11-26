import { HeroSection } from "@/components/brand/HeroSection";
import { Footer } from "@/components/layout/Footer";
import type { Language } from "@/config/languages";
import { games } from "@/data/games";

export async function StudioHome({ language }: { language: Language }) {
  const publishedGames = games.filter((game) => game.published === true);
  const hasGames = publishedGames.length > 0;
  const GamesPortfolio = hasGames
    ? (await import("@/components/games/GamesPortfolio")).GamesPortfolio
    : null;

  return (
    <div className="relative">
      <main>
        <HeroSection showScrollIndicator={hasGames} language={language} />
        {GamesPortfolio && <GamesPortfolio games={publishedGames} language={language} />}
      </main>
      <Footer mode={hasGames ? "flow" : "viewport"} language={language} />
    </div>
  );
}
