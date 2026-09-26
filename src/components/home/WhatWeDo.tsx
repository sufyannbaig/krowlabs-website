import { AnimatePresence, motion, useMotionValueEvent, useTransform, type MotionValue } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollPin } from "@/components/motion/ScrollPin";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useIsDesktop } from "@/lib/useIsDesktop";

const services = [
  {
    title: "CRO & Conversion-Focused Design",
    text: "Full audits of your sales pages, product pages, and checkout flow, with a prioritized fix list ranked by expected impact.",
    href: "/services/cro",
    image: "/work/optiwrite/cover.webp",
  },
  {
    title: "Website Development",
    text: "Landing pages and full marketing sites, built fast with a vibe-coding, AI-assisted workflow and reviewed by a senior designer at every step.",
    href: "/services/web-development",
    image: "/images/83d21.webp",
  },
  {
    title: "UI/UX Design",
    text: "Product design for SaaS platforms and mobile apps, from first wireframe to a design system your team can keep building on.",
    href: "/services/ui-ux-design",
    image: "/work/revsta-platform/cover.webp",
  },
  {
    title: "Digital Advertising & Creative",
    text: "Static ad creative for Google Ads and social, designed to match the landing page it sends traffic to.",
    href: "/services/digital-advertising",
    image: "/work/kryve/cover.webp",
  },
  {
    title: "Brand Identity",
    text: "Logo, visual identity, and brand guidelines, extended into packaging, menus, signage, and other physical touchpoints.",
    href: "/services/brand-identity",
    image: "/work/korax/cover.webp",
  },
];

const N = services.length;

function Heading() {
  return (
    <div className="flex items-start justify-between max-lg:flex-col max-lg:gap-4">
      <Reveal>
        <h2 className="mt-[11px] text-[52px] font-medium leading-[1.24] tracking-[-2.08px] text-ink max-lg:mt-0 max-lg:text-[36px] max-lg:tracking-[-1.2px]">
          What <span className="accent">we do</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="w-[385px] text-[18px] leading-[1.4] text-ink/60 max-lg:w-auto max-lg:text-[16px]">
          Five disciplines, one team, built around a single goal: more of your visitors becoming customers.
        </p>
      </Reveal>
    </div>
  );
}

/** Progress bar on the active item's top rule: fills as you scroll through that service. */
function ItemRule({ progress, index, status }: { progress: MotionValue<number>; index: number; status: "done" | "active" | "todo" }) {
  const fill = useTransform(progress, (v) => Math.min(1, Math.max(0, v * N - index)));
  return (
    <div className="relative h-0 w-full">
      <div className="absolute inset-x-0 -top-[2px] h-[2px] bg-ink/10" />
      <motion.div
        className="absolute inset-x-0 -top-[2px] h-[2px] origin-left bg-ink"
        style={{ scaleX: status === "active" ? fill : status === "done" ? 1 : 0 }}
      />
    </div>
  );
}

function PinnedServices({ progress }: { progress: MotionValue<number> }) {
  const [active, setActive] = useState(0);
  useMotionValueEvent(progress, "change", (p) => setActive(Math.min(N - 1, Math.max(0, Math.floor(p * N)))));

  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 pl-[57px] pr-[63px]">
      <Heading />
      <div className="flex items-start justify-between">
        <ul className="flex w-[640px] flex-col gap-8">
          {services.map((s, i) => {
            const on = i === active;
            return (
              <li key={s.title} className="flex flex-col gap-[30px]">
                <ItemRule progress={progress} index={i} status={on ? "active" : i < active ? "done" : "todo"} />
                <Link to={s.href} className="flex flex-col">
                  <h3
                    className={cn(
                      "text-[40px] font-medium leading-[1.24] tracking-[-1.6px] transition-colors duration-500",
                      on ? "text-ink" : "text-ink/30 hover:text-ink/60",
                    )}
                  >
                    {s.title}
                  </h3>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.p
                        key="text"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden text-[18px] leading-[1.4] text-ink/60"
                      >
                        <span className="block pt-3">{s.text}</span>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="relative h-[358px] w-[563px] shrink-0 overflow-hidden bg-ink">
          <AnimatePresence initial={false}>
            <motion.img
              key={services[active].image}
              src={services[active].image}
              alt={services[active].title}
              className="absolute inset-0 size-full object-cover"
              initial={{ opacity: 0, scale: 1.12, clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0%)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </AnimatePresence>
          <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1.5 text-[14px] font-medium text-ink">
            {String(active + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Mobile: every service with its image, stacked. */
function StackedServices() {
  return (
    <div className="flex flex-col gap-8 px-5">
      <Heading />
      <ul className="flex flex-col gap-10">
        {services.map((s, i) => (
          <Reveal key={s.title} as="li" delay={i * 0.05}>
            <Link to={s.href} className="flex flex-col gap-4 border-t-2 border-ink pt-5">
              <img src={s.image} alt="" className="aspect-[563/358] w-full object-cover" loading="lazy" />
              <h3 className="text-[28px] font-medium leading-[1.2] tracking-[-1px] text-ink">{s.title}</h3>
              <p className="text-[16px] leading-[1.4] text-ink/60">{s.text}</p>
            </Link>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export function WhatWeDo() {
  const desktop = useIsDesktop();
  return (
    <div id="services" className="mt-40 max-lg:mt-24">
      {desktop ? (
        <ScrollPin screens={N * 0.9 + 0.6}>{(progress) => <PinnedServices progress={progress} />}</ScrollPin>
      ) : (
        <StackedServices />
      )}

      <Reveal y={40} className="mx-auto mt-10 w-full max-w-[1440px] pl-[57px] pr-[63px] max-lg:px-5">
        <div className="relative flex h-[131px] items-center justify-center overflow-hidden bg-[#212121] px-[58px] max-lg:h-auto max-lg:px-6 max-lg:py-8">
          <div className="relative flex w-[1164px] items-center justify-between max-lg:w-full max-lg:flex-col max-lg:items-start max-lg:gap-5">
            <p className="w-[570px] text-[30px] font-medium leading-[1.24] tracking-[-1.2px] text-white max-lg:w-auto max-lg:text-[24px]">
              Not sure which one you need?
            </p>
            <Button variant="brand">Book a Free Strategy Call</Button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
