import type { CSSProperties } from "react";
import { cn, img } from "@/lib/utils";

const darkItems = ["Frammer", "Web Development", "Product Design", "UI/UX Design", "Figma"];
const orangeItems = ["Web Development", "Frammer", "Product Design", "Figma", "UI/UX Design"];

function TagRow({ items, className, style }: { items: string[]; className?: string; style?: CSSProperties }) {
  return (
    <div className={cn("flex items-center gap-[101px]", className)} style={style}>
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

/**
 * Two crossing, tilted marquee ribbons (dark + orange).
 * `offset` nudges the whole composition horizontally (brand page sits 10px right of home).
 */
export function CrossRibbons({ offset = 0, className }: { offset?: number; className?: string }) {
  const center = (dx: number) => ({ left: `calc(50% + ${dx + offset}px)` });
  return (
    <div className={cn("pointer-events-none absolute inset-x-0 top-0 h-[198px]", className)}>
      {/* dark band */}
      <div className="absolute top-0 flex h-[197.205px] w-[1492.964px] -translate-x-1/2 items-center justify-center" style={center(-4.52)}>
        <div className="h-[81.747px] w-[1491.116px] shrink-0 rotate-[-4.45deg] bg-ink" />
      </div>
      <div className="absolute top-[19.74px] flex h-[150.621px] w-[1463.32px] -translate-x-1/2 items-center justify-center" style={center(4.32)}>
        <TagRow items={darkItems} className="shrink-0 rotate-[-4.49deg]" />
      </div>
      {/* orange band */}
      <div className="absolute top-0 flex h-[197.205px] w-[1492.964px] items-center justify-center" style={{ left: -22.91 + offset }}>
        <div className="h-[81.747px] w-[1491.116px] shrink-0 rotate-[4.45deg] bg-[#ed812b]" />
      </div>
      <div className="absolute top-[19.02px] flex h-[153.771px] w-[1463.146px] -translate-x-1/2 items-center justify-center" style={center(4.32)}>
        <TagRow items={orangeItems} className="shrink-0 rotate-[4.62deg]" />
      </div>
    </div>
  );
}

/** Flat dark marquee band (UI/UX page). */
export function FlatRibbon({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none relative h-[81.747px] w-full", className)}>
      <div className="absolute left-[calc(50%-14.36px)] top-0 h-[81.747px] w-[1491.116px] -translate-x-1/2 bg-ink" />
      <div className="absolute left-[calc(50%-5.26px)] top-[19.05px] flex h-[37.964px] w-[1465.047px] -translate-x-1/2 items-center justify-center">
        <TagRow items={darkItems} className="shrink-0 rotate-[0.08deg]" />
      </div>
    </div>
  );
}
