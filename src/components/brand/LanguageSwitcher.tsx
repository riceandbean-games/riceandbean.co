import { languages, type Language } from "@/config/languages";
import { assetPath } from "@/config/site";

export function LanguageSwitcher({ language }: { language: Language }) {
  return (
    <details className="language-switcher">
      <summary className="language-trigger grid place-items-center" aria-label={languages[language].languagePicker}>
        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.4 2.4 3.5 5.4 3.5 9s-1.1 6.6-3.5 9c-2.4-2.4-3.5-5.4-3.5-9S9.6 5.4 12 3Z" />
        </svg>
      </summary>
      <ul className="language-options">
        {(["en", "tr"] as const).map((option) => (
          <li key={option}>
            <a href={assetPath(languages[option].path)} hrefLang={option} lang={option} aria-current={language === option ? "page" : undefined}>
              {languages[option].label}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
