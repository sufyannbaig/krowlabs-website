import { motion, useMotionValue, useMotionValueEvent, useReducedMotion, useSpring, type MotionValue } from "framer-motion";
import { useRef, type PointerEvent } from "react";
import { cn, img } from "@/lib/utils";
import { useIsDesktop } from "@/lib/useIsDesktop";

/**
 * Collage coordinates are relative to the collage box, which sits at (948, 137) in the 1440 frame.
 * [left, top, box width, box height, rotation, image, bordered]
 */
const cards = [
  { left: 258, top: 0, w: 315.562, h: 206.517, rotate: 1.97, src: "406a3.webp", border: true, alt: "SaaS website design shown on a desktop monitor" },
  { left: 98, top: 338, w: 318.834, h: 211.903, rotate: -3, src: "bf1d8.webp", alt: "Limber's snack brand identity on a cap and staff T-shirt" },
  { left: 258.28, top: 410.75, w: 315.555, h: 206.506, rotate: -1.97, src: "326d8.webp", alt: "Omnizs fashion campaign visual" },
  { left: 99.72, top: 69.74, w: 315.562, h: 206.517, rotate: 1.97, src: "add6a.webp", alt: "Replix AI app icon design" },
  { left: 0, top: 184, w: 309, h: 196, rotate: 0, src: "a63fd.webp", border: true, alt: "B2B agency website shown on a laptop" },
];

const RADIUS = 280; // how far the cursor's "force field" reaches
const PUSH = 70; // max displacement in px

function CollageCard({
  card,
  index,
  px,
  py,
  interactive,
}: {
  card: (typeof cards)[number];
  index: number;
  px: MotionValue<number>;
  py: MotionValue<number>;
  interactive: boolean;
}) {
  const spring = { stiffness: 140, damping: 14, mass: 0.7 };
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);
  const tilt = useSpring(0, spring);
  const cx = card.left + card.w / 2;
  const cy = card.top + card.h / 2;

  const react = () => {
    const dx = cx - px.get();
    const dy = cy - py.get();
    const d = Math.hypot(dx, dy) || 1;
    if (!interactive || d > RADIUS) {
      x.set(0);
      y.set(0);
      tilt.set(0);
      return;
    }
    const f = 1 - d / RADIUS;
    x.set((dx / d) * PUSH * f);
    y.set((dy / d) * PUSH * f);
    tilt.set((dx > 0 ? 1 : -1) * 6 * f);
  };
  useMotionValueEvent(px, "change", react);
  useMotionValueEvent(py, "change", react);

  return (
    <motion.div
      className="absolute flex items-center justify-center"
      style={{ left: card.left, top: card.top, width: card.w, height: card.h, zIndex: index + 1 }}
      initial={{ opacity: 0, x: 180, y: 40, rotate: 12, scale: 0.85 }}
      animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.35 + index * 0.1 }}
    >
      {/* cursor repulsion layer */}
      <motion.div style={{ x, y, rotate: tilt }}>
        {/* idle drift layer */}
        <motion.div
          animate={interactive ? { y: [0, -8, 0] } : undefined}
          transition={{ duration: 5 + index * 0.7, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
        >
          {/* draggable card: throw it, it springs back home */}
          <motion.div
            drag={interactive}
            dragSnapToOrigin
            dragElastic={0.6}
            dragTransition={{ bounceStiffness: 260, bounceDamping: 14 }}
            whileHover={interactive ? { scale: 1.04 } : undefined}
            whileDrag={{ scale: 1.08, rotate: card.rotate > 0 ? -4 : 4, zIndex: 20, cursor: "grabbing" }}
            className={cn(
              "relative h-[196px] w-[309px] shrink-0 overflow-hidden shadow-[0_20px_40px_-20px_rgba(0,0,0,0.35)]",
              interactive && "cursor-grab",
              card.border && "border-[1.322px] border-white/[0.81]",
            )}
            style={{ rotate: card.rotate }}
          >
            <img src={img(card.src)} alt={card.alt} draggable={false} className="pointer-events-none absolute inset-0 size-full object-cover" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/** Work showcase collage beside the home hero: cursor-reactive, draggable, softly floating. */
export function HeroCollage({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const desktop = useIsDesktop();
  const reduce = useReducedMotion();
  const interactive = desktop && !reduce;
  const px = useMotionValue(-9999);
  const py = useMotionValue(-9999);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!interactive || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const k = ref.current.offsetWidth / r.width; // undo laptop zoom
    px.set((e.clientX - r.left) * k);
    py.set((e.clientY - r.top) * k);
  };
  const onLeave = () => {
    px.set(-9999);
    py.set(-9999);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={cn(
        // desktop: absolute box at its design position with a margin so the force field reaches in
        "absolute left-[948px] top-[137px] h-[624px] w-[574px]",
        // mobile: a scaled-down, centered copy of the same composition
        "max-lg:relative max-lg:left-1/2 max-lg:top-0 max-lg:-mb-[260px] max-lg:mt-10 max-lg:-translate-x-1/2 max-lg:scale-[0.58] max-lg:origin-top",
        className,
      )}
    >
      {cards.map((c, i) => (
        <CollageCard key={c.src} card={c} index={i} px={px} py={py} interactive={interactive} />
      ))}
    </div>
  );
}
