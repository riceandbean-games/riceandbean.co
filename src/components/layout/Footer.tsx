import { Copyright } from "./Copyright";
import { InstagramLink } from "./InstagramLink";

export function Footer({ mode }: { mode: "flow" | "viewport" }) {
  return (
    <footer className="site-footer flex items-center justify-between" data-mode={mode}>
      <Copyright buildYear={new Date().getFullYear()} />
      <InstagramLink />
    </footer>
  );
}
