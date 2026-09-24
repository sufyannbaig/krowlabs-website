import { cn, img } from "@/lib/utils";

/** Faint square grid with a few filled cells that sits behind every hero. */
export function HeroGrid({ src = "d403b.svg", className }: { src?: string; className?: string }) {
  return (
    <img
      src={img(src)}
      alt=""
      aria-hidden
      className={cn(
        "pointer-events-none absolute left-1/2 top-[-198px] h-[1038px] w-[2076px] max-w-none -translate-x-1/2 select-none",
        className,
      )}
    />
  );
}

/** Row of client logos with soft fades on both edges. */
export function LogoStrip({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-x-0 h-[51px]", className)}>
      <div className="absolute left-[calc(50%+9.5px)] top-[11px] flex -translate-x-1/2 items-center gap-[110px]">
        <img src={img("11384.svg")} alt="" className="h-[26px] w-[110px] shrink-0" />
        <div className="relative h-[26px] w-[196px] shrink-0 overflow-hidden">
          <img src={img("cfbff.svg")} alt="" className="absolute left-0 top-0 h-full w-[18.7%] max-w-none" />
          <img src={img("88936.svg")} alt="" className="absolute inset-[20.59%_0.27%_24.56%_22.59%] h-[54.85%] w-[77.14%] max-w-none" />
        </div>
        <div className="relative h-[26px] w-[140px] shrink-0 overflow-hidden">
          <img src={img("9f564.svg")} alt="" className="absolute left-0 top-0 h-full w-[18.6%] max-w-none" />
          <img src={img("de676.svg")} alt="" className="absolute inset-[12.5%_0.13%_9.2%_24.19%] h-[78.3%] w-[75.68%] max-w-none" />
        </div>
        <img src={img("11384.svg")} alt="" className="h-[26px] w-[110px] shrink-0" />
        <img src={img("2a4c8.svg")} alt="" className="h-[26px] w-[197px] shrink-0" />
        <div className="relative h-[26px] w-[140px] shrink-0 overflow-hidden">
          <img src={img("9f564.svg")} alt="" className="absolute left-0 top-0 h-full w-[18.6%] max-w-none" />
          <img src={img("a4748.svg")} alt="" className="absolute inset-[12.5%_0.13%_9.2%_24.19%] h-[78.3%] w-[75.68%] max-w-none" />
        </div>
      </div>
      <div className="absolute left-[-13px] top-0 h-[51px] w-[92px] bg-gradient-to-l from-[rgba(255,251,249,0)] to-[#fffbf9]" />
      <div className="absolute left-[calc(91.67%+44px)] top-0 h-[51px] w-[92px] bg-gradient-to-r from-[rgba(255,251,249,0)] to-[#fffbf9]" />
    </div>
  );
}

/** Thin strip under the hero: "5+ years designing for ecommerce and SaaS brands". */
export function TrustBar({ className, textClassName }: { className?: string; textClassName?: string }) {
  return (
    <div className={cn("flex h-[51px] w-full items-center justify-center", className)}>
      <p className={cn("whitespace-nowrap text-[20px] leading-[1.4] text-white", textClassName)}>
        5+ years designing for ecommerce and SaaS brands
      </p>
    </div>
  );
}

/** Right-hand hero image used on service pages (452 × 294). */
export function HeroImage({ src, className, imgClassName }: { src: string; className?: string; imgClassName?: string }) {
  return (
    <div className={cn("absolute top-[259px] h-[294px] w-[452px] overflow-hidden", className)}>
      <img src={img(src)} alt="" className={cn("absolute inset-0 size-full max-w-none object-cover", imgClassName)} />
    </div>
  );
}
