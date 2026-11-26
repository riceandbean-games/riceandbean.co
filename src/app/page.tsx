import { HeroSection } from "@/components/brand/HeroSection";
import { Footer } from "@/components/layout/Footer";
import { games } from "@/data/games";

export default async function HomePage() {
  const publishedGames = games.filter((game) => game.published === true);
  const hasGames = publishedGames.length > 0;
  const GamesPortfolio = hasGames
    ? (await import("@/components/games/GamesPortfolio")).GamesPortfolio
    : null;

  return (
    <div className="relative">
      <main>
        <HeroSection showScrollIndicator={hasGames} />
        {GamesPortfolio && <GamesPortfolio games={publishedGames} />}
      </main>
      <Footer mode={hasGames ? "flow" : "viewport"} />
    </div>
  );
}
