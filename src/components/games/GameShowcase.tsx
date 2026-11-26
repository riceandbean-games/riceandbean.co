"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState, type CSSProperties } from "react";
import { animation } from "@/config/animations";
import { brand } from "@/config/brand";
import { phoneStyle, type PhoneSide } from "@/config/phone";
import type { Game } from "@/data/games";
import { PhoneMockup3D } from "./PhoneMockup3D";
import { StoreBadges } from "./StoreBadges";

const transition = { duration: animation.entrance, ease: animation.easing };

export function GameShowcase({ game, phoneSide }: { game: Game; phoneSide: PhoneSide }) {
  const section = useRef<HTMLElement>(null);
  const revealed = useInView(section, { amount: animation.revealAmount, once: true });
  const visible = useInView(section);
  const reduceMotion = useReducedMotion();
  const [entranceComplete, setEntranceComplete] = useState(false);
  const light = phoneSide === "left";
  const direction = light ? -1 : 1;
  const headingId = `game-${game.id}`;
  const colors = {
    backgroundColor: game.backgroundColor ?? (light ? brand.cream : brand.purple),
    color: game.textColor ?? (light ? brand.purple : brand.cream),
    "--game-accent": game.accentColor ?? (light ? brand.purple : brand.lime),
    "--reveal-time": `${animation.entrance}s`,
    "--reveal-easing": `cubic-bezier(${animation.easing.join(", ")})`,
  } as CSSProperties;
  const infoVariants = {
    hidden: { opacity: 0, x: -direction * animation.infoTravel },
    shown: { opacity: 1, x: 0 },
  };
  const showContent = revealed || reduceMotion;

  return (
    <section className="game-showcase" data-phone-side={phoneSide} ref={section} style={colors} aria-labelledby={headingId}>
      <div className="game-layout">
        <motion.div
          className="phone-entrance reveal-motion"
          initial="hidden"
          animate={showContent ? "shown" : "hidden"}
          variants={{
            hidden: { opacity: 0, x: direction * animation.phoneTravel, scale: animation.phoneScale },
            shown: { opacity: 1, x: 0, scale: 1 },
          }}
          transition={reduceMotion ? { duration: 0 } : transition}
          onAnimationComplete={(state) => {
            if (state === "shown") setEntranceComplete(true);
          }}
        >
          <div className="phone-scene" style={phoneStyle(phoneSide)} data-revealed={Boolean(showContent)}>
            <div className="phone-float" data-floating={Boolean(entranceComplete && visible && !reduceMotion)}>
              <PhoneMockup3D game={game} />
            </div>
          </div>
        </motion.div>
        <div className="game-information">
          <motion.h2 id={headingId} className="game-title reveal-motion" initial="hidden" animate={showContent ? "shown" : "hidden"} variants={infoVariants} transition={reduceMotion ? { duration: 0 } : { ...transition, delay: animation.infoDelay }}>
            {game.title}
          </motion.h2>
          <motion.div className="reveal-motion" initial="hidden" animate={showContent ? "shown" : "hidden"} variants={infoVariants} transition={reduceMotion ? { duration: 0 } : { ...transition, delay: animation.infoDelay + animation.storeStagger }}>
            <StoreBadges game={game} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
