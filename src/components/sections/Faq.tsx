import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { cn, img } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer?: string;
  /** How the +/- icon aligns with the question text when collapsed (differs per item in the design). */
  align?: "start" | "center" | "end";
  /** Fixed question width on desktop, forces the same line breaks as the design. */
  questionWidth?: number;
};

const FALLBACK_ANSWER = "Book a free strategy call and we will walk you through it for your specific project.";

/** Accordion: one item open at a time, the first open by default (as in the design). */
export function FaqList({ items, className }: { items: FaqItem[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={cn("flex w-[680px] shrink-0 flex-col gap-[26px] max-lg:w-full max-lg:gap-4", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={item.question} delay={i * 0.08}>
            <div
              className={cn(
                "border bg-white transition-colors duration-300",
                isOpen ? "border-ink px-[26px] pb-[30px] pt-[31px]" : "border-transparent px-[26px] py-6",
                "max-lg:px-5",
              )}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className={cn(
                  "flex w-full justify-between gap-6 text-left",
                  isOpen || item.align === "start" ? "items-start" : item.align === "center" ? "items-center" : "items-end",
                )}
              >
                <span
                  className="min-w-px flex-1 text-[22px] font-medium leading-[1.3] tracking-[-0.44px] text-ink max-lg:text-[18px]"
                  style={item.questionWidth && !isOpen ? { maxWidth: item.questionWidth } : undefined}
                >
                  {item.question}
                </span>
                <span className="relative mt-1 size-5 shrink-0">
                  {/* plus = minus + a vertical bar that rotates away when open */}
                  <motion.img
                    src={img("26c70.svg")}
                    alt=""
                    className="absolute inset-[3.13%] size-[93.74%]"
                    animate={{ opacity: isOpen ? 0 : 1, rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.img
                    src={img("548a5.svg")}
                    alt=""
                    className="absolute left-[12.73%] top-[42.83%] h-[14.34%] w-[74.54%]"
                    animate={{ opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-[18px] leading-[1.2] text-ink/50 max-lg:text-[16px] max-lg:leading-[1.4]">
                      {item.answer ?? FALLBACK_ANSWER}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

/** Heading on the left, FAQ list on the right (stacked on mobile). */
export function FaqSection({ heading, items, className }: { heading: ReactNode; items: FaqItem[]; className?: string }) {
  return (
    <div className={cn("flex w-full items-start justify-between max-lg:flex-col max-lg:gap-8", className)}>
      <Reveal className="max-lg:[&_h2]:!w-auto max-lg:[&_h2]:!whitespace-normal">{heading}</Reveal>
      <FaqList items={items} />
    </div>
  );
}
