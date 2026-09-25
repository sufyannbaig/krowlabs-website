import { clientLogos } from "@/content/clients";
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


/** Row of client logos, centered and bleeding past both edges like the design. */
export function LogoStrip({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-x-0 h-[56px]", className)}>
      <ul
        aria-label="Clients"
        className="absolute left-[calc(50%+0.41px)] top-0 flex h-full w-max -translate-x-1/2 items-center gap-[110px]"
      >
        {clientLogos.map((l) => (
          <li key={l.name} className="shrink-0">
            <img src={img(l.src)} alt={l.name} width={l.w} height={l.h} style={{ width: l.w, height: l.h }} />
          </li>
        ))}
      </ul>
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
