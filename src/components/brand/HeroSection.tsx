import Image from "next/image";
import { languages, type Language } from "@/config/languages";
import { assetPath, site } from "@/config/site";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function HeroSection({ showScrollIndicator, language }: { showScrollIndicator: boolean; language: Language }) {
  return (
    <section className="hero grid place-items-center">
      <LanguageSwitcher language={language} />
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
          {languages[language].scroll}
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </a>
      )}
    </section>
  );
}
