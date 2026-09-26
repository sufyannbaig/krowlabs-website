import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Marquee } from "@/components/motion/Marquee";
import { cn, img } from "@/lib/utils";
import { useIsDesktop } from "@/lib/useIsDesktop";
import { enterToCenter, useRectProgress } from "@/lib/useRectProgress";

const darkItems = ["Framer", "Web Development", "Product Design", "UI/UX Design", "Figma"];
const orangeItems = ["Web Development", "Framer", "Product Design", "Figma", "UI/UX Design"];

/**
 * Tilted bands are much wider than any screen so their ends never show, even on ultrawide monitors.
 * Each marquee copy (items repeated) is wider than the band, so the loop never shows a gap.
 */
const BAND_WIDTH = 3600;
const REPEATS = 3;

function Tags({ items }: { items: string[] }) {
  const list = Array.from({ length: REPEATS }, () => items).flat();
  return (
    <div className="flex items-center gap-[101px] pr-[101px] max-lg:gap-12 max-lg:pr-12">
      {list.map((item, i) => (
        <div key={i} className="flex shrink-0 items-center gap-[18px] max-lg:gap-3">
          <img src={img("85cf9.svg")} alt="" className="size-[28px] max-lg:size-5" />
          <span className="whitespace-nowrap text-[28px] font-semibold leading-[1.3] tracking-[-0.84px] text-white max-lg:text-[20px] max-lg:tracking-[-0.4px]">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

/** A solid band with a ticker running along it. */
function Band({
  items,
  direction,
  color,
  tilt = 0,
  width = BAND_WIDTH,
  className,
}: {
  items: string[];
  direction: "left" | "right";
  color: string;
  tilt?: number;
  width?: number | string;
  className?: string;
}) {
  return (
    <div
      className={cn("flex h-[81.747px] items-center overflow-hidden max-lg:h-[56px]", color, className)}
      style={{ width, rotate: tilt ? `${tilt}deg` : undefined }}
    >
      <Marquee duration={38 * REPEATS} direction={direction} className="w-full">
        <Tags items={items} />
      </Marquee>
    </div>
  );
}

/**
 * Two crossing, tilted ticker ribbons (dark + orange).
 * As the block scrolls into view each band slides in from its side and swings into its tilt.
 * `offset` nudges the crossing point horizontally (brand page sits 10px right of home).
 */
export function CrossRibbons({ offset = 0, className }: { offset?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const desktop = useIsDesktop();
  const reduce = useReducedMotion() || !desktop; // mobile: ribbons sit still, only the tickers move
  const scrollYProgress = useRectProgress(ref, enterToCenter);
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const darkRotate = useTransform(p, (v) => 4.45 * (1 - v));
  const darkX = useTransform(p, (v) => -260 * (1 - v));
  const orangeRotate = useTransform(p, (v) => -4.45 * (1 - v));
  const orangeX = useTransform(p, (v) => 260 * (1 - v));

  const place = "absolute top-1/2 -translate-x-1/2 -translate-y-1/2";
  const left = { left: `calc(50% + ${offset}px)` };
  return (
    <div ref={ref} className={cn("pointer-events-none absolute inset-x-0 top-0 h-[198px] overflow-x-clip max-lg:h-[170px]", className)}>
      <motion.div className="absolute inset-0" style={reduce ? undefined : { rotate: darkRotate, x: darkX }}>
        <div className={place} style={left}>
          <Band items={darkItems} direction="left" color="bg-ink" tilt={desktop ? -4.45 : -6} />
        </div>
      </motion.div>
      <motion.div className="absolute inset-0" style={reduce ? undefined : { rotate: orangeRotate, x: orangeX }}>
        <div className={place} style={left}>
          <Band items={orangeItems} direction="right" color="bg-[#ed812b]" tilt={desktop ? 4.45 : 6} />
        </div>
      </motion.div>
    </div>
  );
}

/** Flat dark ticker band spanning the full width (UI/UX page). */
export function FlatRibbon({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none relative w-full overflow-hidden", className)}>
      <Band items={darkItems} direction="left" color="bg-ink" width="100%" />
    </div>
  );
}
