import { motion } from "framer-motion";
import { Marquee } from "@/components/motion/Marquee";
import { cn } from "@/lib/utils";
import { TestimonialCard, type Testimonial } from "./TestimonialCard";

const CARD = 400;
const GAP = 40;

/**
 * Slow testimonial ticker. Hovering pauses it and lifts the card toward the viewer.
 * The list repeats until one copy is wider than the screen so the loop never shows a gap.
 */
export function TestimonialTicker({
  items,
  dark = false,
  duration = 60,
  className,
}: {
  items: Testimonial[];
  dark?: boolean;
  duration?: number;
  className?: string;
}) {
  const repeats = Math.max(1, Math.ceil(1600 / (items.length * (CARD + GAP))));
  const list = Array.from({ length: repeats }, () => items).flat();

  return (
    <Marquee
      duration={duration * repeats}
      pauseOnHover
      className={cn("w-full overflow-x-clip overflow-y-visible py-8", className)}
    >
      <div className="flex items-stretch gap-10 pr-10 max-lg:gap-5 max-lg:pr-5">
        {list.map((t, i) => (
          <motion.div
            key={i}
            className="relative shrink-0"
            whileHover={{ y: -18, scale: 1.05, zIndex: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            <TestimonialCard
              {...t}
              dark={dark}
              className="h-full w-[400px] shadow-[0_0_0_rgba(0,0,0,0)] transition-shadow duration-300 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] max-lg:w-[300px]"
            />
          </motion.div>
        ))}
      </div>
    </Marquee>
  );
}
