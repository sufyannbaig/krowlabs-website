import { motion } from "framer-motion";
import { Marquee } from "@/components/motion/Marquee";
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


/** Slow, continuous ticker of client logos. */
export function LogoStrip({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 h-[56px] max-lg:relative max-lg:inset-auto max-lg:mt-12 max-lg:h-[44px]",
        className,
      )}
    >
      <Marquee duration={55} className="h-full" trackClassName="h-full">
        <ul aria-label="Clients" className="flex h-full items-center gap-[110px] pr-[110px] max-lg:gap-14 max-lg:pr-14">
          {clientLogos.map((l) => (
            <li key={l.name} className="shrink-0">
              <img
                src={img(l.src)}
                alt={l.name}
                width={l.w}
                height={l.h}
                style={{ width: l.w, height: l.h }}
                className="max-lg:!h-auto max-lg:!w-auto max-lg:max-h-8"
              />
            </li>
          ))}
        </ul>
      </Marquee>
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

/** Right-hand hero image used on service pages (452 × 294). Eases in on load. */
export function HeroImage({
  src,
  alt = "",
  className,
  imgClassName,
}: {
  src: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
      className={cn(
        "absolute top-[259px] h-[294px] w-[452px] overflow-hidden max-lg:relative max-lg:left-0 max-lg:top-0 max-lg:mt-10 max-lg:h-auto max-lg:w-full max-lg:aspect-[452/294]",
        className,
      )}
    >
      <img src={img(src)} alt={alt} className={cn("absolute inset-0 size-full max-w-none object-cover", imgClassName)} />
    </motion.div>
  );
}
