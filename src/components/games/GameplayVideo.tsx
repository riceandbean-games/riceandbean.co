import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

type VideoProps = { src: string; poster?: string; title: string; fit: "cover" | "contain" };

export function GameplayVideo({ src, poster, title, fit }: VideoProps) {
  const video = useRef<HTMLVideoElement>(null);
  const nearby = useInView(video, { margin: "240px", once: true });
  const visible = useInView(video, { amount: 0.55 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const player = video.current;
    if (!player || !nearby) return;

    const syncPlayback = () => {
      if (visible && !reduceMotion && !document.hidden) {
        void player.play().catch(() => {
          // A blocked autoplay keeps the current frame or poster visible.
        });
      } else {
        player.pause();
      }
    };

    syncPlayback();
    document.addEventListener("visibilitychange", syncPlayback);
    return () => {
      player.pause();
      document.removeEventListener("visibilitychange", syncPlayback);
    };
  }, [src, nearby, visible, reduceMotion]);

  return (
    <video
      ref={video}
      src={nearby && (!reduceMotion || !poster) ? src : undefined}
      poster={nearby ? poster : undefined}
      muted
      loop
      playsInline
      preload={nearby && !poster ? "metadata" : "none"}
      aria-label={`${title} oynanış videosu`}
      style={{ objectFit: fit }}
    />
  );
}
