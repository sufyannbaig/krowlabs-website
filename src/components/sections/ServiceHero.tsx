import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Navbar } from "@/components/layout/Navbar";
import { Button, type ButtonVariant } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { HeroGrid, HeroImage, LogoStrip } from "./HeroBackdrop";

type Props = {
  heading: ReactNode;
  intro: string;
  buttonVariant: ButtonVariant;
  image: ReactNode;
  /** Grid backdrop file + optional positioning override. */
  grid?: string;
  gridClassName?: string;
  /** Left offset / width of the copy column (varies by a few px per page in the design). */
  left?: number;
  width?: number;
  headingWidth?: number;
  gap?: number;
  innerGap?: number;
  introClassName?: string;
  showLogos?: boolean;
  children?: ReactNode;
};

/** 797px tall hero shared by the service pages (grid, nav, copy, image, optional logos). */
export function ServiceHero({
  heading,
  intro,
  buttonVariant,
  image,
  grid = "06d81.svg",
  gridClassName,
  left = 60,
  width = 655,
  headingWidth,
  gap = 16,
  innerGap = 14,
  introClassName,
  showLogos = false,
  children,
}: Props) {
  return (
    <section className="relative h-[797px] max-lg:h-auto max-lg:pb-4 max-lg:pt-[110px]">
      <HeroGrid src={grid} className={gridClassName} />
      {children}
      <Navbar />
      <div className="relative mx-auto h-full max-w-[1440px] max-lg:px-5">
        <div
          className="absolute left-[var(--hero-left)] top-[254px] flex w-[var(--hero-w)] flex-col items-start gap-[var(--hero-gap)] max-lg:static max-lg:w-auto max-lg:gap-6"
          style={{ "--hero-left": `${left}px`, "--hero-w": `${width}px`, "--hero-gap": `${gap}px` } as CSSProperties}
        >
          <div
            className="flex w-[var(--hero-hw)] flex-col gap-[var(--hero-inner-gap)] max-lg:w-auto max-lg:gap-4 max-lg:[&_br]:hidden max-lg:[&_h1]:!w-auto max-lg:[&_h1]:!text-[40px] max-lg:[&_h1]:!leading-[1.1] max-lg:[&_h1]:!tracking-[-1.6px]"
            style={
              { "--hero-hw": headingWidth ? `${headingWidth}px` : "auto", "--hero-inner-gap": `${innerGap}px` } as CSSProperties
            }
          >
            <Reveal immediate>{heading}</Reveal>
            <Reveal immediate delay={0.12}>
              <p className={cn("w-[676px] text-[18px] leading-[1.4] text-ink/60 max-lg:!h-auto max-lg:w-auto max-lg:!pb-0 max-lg:text-[16px]", introClassName)}>
                {intro}
              </p>
            </Reveal>
          </div>
          <Reveal immediate delay={0.24}>
            <Button variant={buttonVariant} raised>
              Book a Free Strategy Call
            </Button>
          </Reveal>
        </div>
        {image}
      </div>
      {showLogos && <LogoStrip className="top-[715px]" />}
    </section>
  );
}

export { HeroImage };
