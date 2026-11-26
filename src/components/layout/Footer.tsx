import { languages, type Language } from "@/config/languages";
import { Copyright } from "./Copyright";
import { InstagramLink } from "./InstagramLink";

export function Footer({ mode, language }: { mode: "flow" | "viewport"; language: Language }) {
  return (
    <footer className="site-footer flex items-center justify-between" data-mode={mode}>
      <Copyright buildYear={new Date().getFullYear()} rights={languages[language].copyright} />
      <InstagramLink />
    </footer>
  );
}
