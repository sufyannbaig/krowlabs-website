import type { CSSProperties } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Button, type ButtonVariant } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { img } from "@/lib/utils";

type Props = {
  title: string;
  subtitle?: string;
  buttonVariant?: ButtonVariant;
  /** Left inset of the copy inside the orange panel. */
  inset?: number;
  contentWidth?: number;
  titleWidth?: number;
  className?: string;
};

// Streaks that shoot along the panel's diagonal lines: [left %, top %, delay s, duration s, length px]
const streaks: [number, number, number, number, number][] = [
  [4, 110, 0, 3.2, 180],
  [18, 125, 1.4, 2.6, 120],
  [32, 105, 2.8, 3.6, 220],
  [48, 130, 0.7, 2.9, 150],
  [60, 110, 2.1, 3.4, 200],
  [72, 120, 3.5, 2.7, 130],
  [86, 105, 1.1, 3.1, 170],
  [40, 140, 4.2, 3, 110],
];

/** Orange gradient "Ready to…" panel: diagonal texture, shooting-star streaks, copy fades in. */
export function CtaBanner({
  title,
  subtitle,
  buttonVariant = "white",
  inset = 72,
  contentWidth = 751,
  titleWidth = 708,
  className,
}: Props) {
  return (
    <Container className={className}>
      <div className="relative flex h-[509px] items-center overflow-hidden bg-brand-cta max-lg:h-auto max-lg:py-16">
        <img
          src={img("c959a.jpg")}
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-[-0.03%] top-[-51.98%] h-[402.9%] w-[100.03%] max-w-none opacity-[0.26]"
        />
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {streaks.map(([left, top, delay, duration, length], i) => (
            <span
              key={i}
              className="cta-streak"
              style={
                {
                  left: `${left}%`,
                  top: `${top}%`,
                  width: length,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                } as CSSProperties
              }
            />
          ))}
        </div>
        <div
          className="relative flex w-[var(--cta-w)] flex-col items-start gap-5 pl-[var(--cta-inset)] max-lg:w-full max-lg:px-6"
          style={{ "--cta-w": `${contentWidth + inset}px`, "--cta-inset": `${inset}px` } as CSSProperties}
        >
          <div
            className="flex w-[var(--cta-title-w)] flex-col gap-5 text-white max-lg:w-full"
            style={{ "--cta-title-w": `${titleWidth}px` } as CSSProperties}
          >
            <Reveal>
              <h2 className="text-[60px] font-medium leading-[1.11] tracking-[-2.4px] max-lg:text-[36px] max-lg:tracking-[-1.2px]">
                {title}
              </h2>
            </Reveal>
            {subtitle && (
              <Reveal delay={0.1}>
                <p className="h-[78px] text-[20px] capitalize leading-[1.28] tracking-[0.2px] max-lg:h-auto max-lg:text-[16px]">
                  {subtitle}
                </p>
              </Reveal>
            )}
          </div>
          <Reveal delay={0.2}>
            <Button variant={buttonVariant} size="md">
              Book a Free Strategy Call
            </Button>
          </Reveal>
        </div>
      </div>
    </Container>
  );
}
