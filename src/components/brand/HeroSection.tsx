import Image from "next/image";
import { assetPath, site } from "@/config/site";

export function HeroSection({ showScrollIndicator }: { showScrollIndicator: boolean }) {
  return (
    <section className="hero grid place-items-center">
      <h1 className="brand-logo">
        <Image
          src={assetPath("/brand/rice-and-bean.webp")}
          alt={site.name}
          width={1126}
          height={224}
          preload
        />
      </h1>
      {showScrollIndicator && (
        <a className="scroll-indicator" href="#oyunlar">
          Oyunları Görmek İçin Aşağıya Kaydırın
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      )}
    </section>
  );
}
