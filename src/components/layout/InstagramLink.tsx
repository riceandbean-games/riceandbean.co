import { site } from "@/config/site";

export function InstagramLink() {
  return (
    <a className="instagram-link grid place-items-center" href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Rice & Bean Instagram">
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
      </svg>
    </a>
  );
}
