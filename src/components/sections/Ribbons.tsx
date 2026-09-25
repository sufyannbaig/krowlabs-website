import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Marquee } from "@/components/motion/Marquee";
import { cn, img } from "@/lib/utils";
import { useIsDesktop } from "@/lib/useIsDesktop";
import { enterToCenter, useRectProgress } from "@/lib/useRectProgress";

const darkItems = ["Frammer", "Web Development", "Product Design", "UI/UX Design", "Figma"];
const orangeItems = ["Web Development", "Frammer", "Product Design", "Figma", "UI/UX Design"];

function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex items-center gap-[101px] pr-[101px]">
      {items.map((item) => (
        <div key={item} className="flex shrink-0 items-center gap-[18px]">
          <img src={img("85cf9.svg")} alt="" className="size-[28px]" />
          <span className="whitespace-nowrap text-[28px] font-semibold leading-[1.3] tracking-[-0.84px] text-white">
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

/** A ticker of tags inside a fixed-width, centered box (the box width comes from the design). */
function TagTicker({ items, direction, width }: { items: string[]; direction: "left" | "right"; width: number }) {
  return (
    <div className="flex justify-center" style={{ width }}>
      <Marquee duration={38} direction={direction} className="overflow-visible">
        <Tags items={items} />
      </Marquee>
    </div>
  );
}

/**
 * Two crossing, tilted ticker ribbons (dark + orange).
 * As the block scrolls into view each band slides in from its side and swings into its tilt.
 * `offset` nudges the whole composition horizontally (brand page sits 10px right of home).
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

  const center = (dx: number) => ({ left: `calc(50% + ${dx + offset}px)` });
  return (
    <div ref={ref} className={cn("pointer-events-none absolute inset-x-0 top-0 h-[198px]", className)}>
      {/* dark band */}
      <motion.div className="absolute inset-0" style={reduce ? undefined : { rotate: darkRotate, x: darkX }}>
        <div className="absolute top-0 flex h-[197.205px] w-[1492.964px] -translate-x-1/2 items-center justify-center" style={center(-4.52)}>
          <div className="h-[81.747px] w-[1491.116px] shrink-0 rotate-[-4.45deg] bg-ink" />
        </div>
        <div className="absolute top-[19.74px] flex h-[150.621px] w-[1463.32px] -translate-x-1/2 items-center justify-center" style={center(4.32)}>
          <div className="shrink-0 rotate-[-4.49deg]">
            <TagTicker items={darkItems} direction="left" width={1463.32} />
          </div>
        </div>
      </motion.div>
      {/* orange band */}
      <motion.div className="absolute inset-0" style={reduce ? undefined : { rotate: orangeRotate, x: orangeX }}>
        <div className="absolute top-0 flex h-[197.205px] w-[1492.964px] items-center justify-center" style={{ left: -22.91 + offset }}>
          <div className="h-[81.747px] w-[1491.116px] shrink-0 rotate-[4.45deg] bg-[#ed812b]" />
        </div>
        <div className="absolute top-[19.02px] flex h-[153.771px] w-[1463.146px] -translate-x-1/2 items-center justify-center" style={center(4.32)}>
          <div className="shrink-0 rotate-[4.62deg]">
            <TagTicker items={orangeItems} direction="right" width={1463.146} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/** Flat dark ticker band (UI/UX page). */
export function FlatRibbon({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none relative h-[81.747px] w-full", className)}>
      <div className="absolute left-[calc(50%-14.36px)] top-0 h-[81.747px] w-[1491.116px] -translate-x-1/2 bg-ink" />
      <div className="absolute left-[calc(50%-5.26px)] top-[19.05px] flex h-[37.964px] w-[1465.047px] -translate-x-1/2 items-center justify-center">
        <TagTicker items={darkItems} direction="left" width={1465.047} />
      </div>
    </div>
  );
}
