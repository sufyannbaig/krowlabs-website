import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { HeroGrid } from "@/components/sections/HeroBackdrop";
import { Container } from "@/components/ui/Container";
import { WorkCard } from "@/components/work/WorkCard";
import { caseStudies } from "@/content/caseStudies";
import { services, type ServiceKey } from "@/content/services";
import { useSeo } from "@/lib/seo";
import { cn } from "@/lib/utils";

const filters: (ServiceKey | "all")[] = ["all", "cro", "web-development", "ui-ux-design", "brand-identity", "digital-advertising"];

export default function Work() {
  const [active, setActive] = useState<ServiceKey | "all">("all");
  useSeo({
    title: "Work",
    description:
      "Selected Krow Labs case studies: CRO, website development, UI/UX, brand identity and ad creative for ecommerce, SaaS and service brands.",
  });

  const list = active === "all" ? caseStudies : caseStudies.filter((c) => c.services.includes(active));

  return (
    <main className="overflow-x-clip">
      <section className="relative pb-[60px] pt-[200px] max-lg:pb-10 max-lg:pt-[120px]">
        <HeroGrid src="06d81.svg" />
        <Navbar />
        <Container className="relative flex flex-col gap-10">
          <div className="flex items-end justify-between gap-16 max-lg:flex-col max-lg:items-start max-lg:gap-4">
            <Reveal immediate>
              <h1 className="text-[72px] font-medium leading-[1.2] tracking-[-4px] text-ink max-lg:text-[44px] max-lg:tracking-[-1.8px]">
                Selected <span className="accent">work</span>
              </h1>
            </Reveal>
            <Reveal immediate delay={0.1}>
              <p className="max-w-[460px] text-[18px] leading-[1.4] text-ink/60 max-lg:text-[16px]">
                A sample of what we have shipped for ecommerce, SaaS, and service brands.
              </p>
            </Reveal>
          </div>
          <div role="tablist" aria-label="Filter by service" className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={active === f}
                onClick={() => setActive(f)}
                className={cn(
                  "border px-5 py-3 text-[16px] font-medium leading-[1.4] transition-colors max-lg:px-4 max-lg:py-2 max-lg:text-[14px]",
                  active === f ? "border-ink bg-ink text-white" : "border-ink/20 text-ink hover:border-ink",
                )}
              >
                {f === "all" ? "All work" : services[f].short}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <Container className="grid grid-cols-2 gap-x-10 gap-y-20 max-lg:grid-cols-1 max-lg:gap-y-12">
        <AnimatePresence mode="popLayout">
          {list.map((c) => (
            <motion.div
              key={c.slug}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <WorkCard study={c} imageClassName="aspect-[4/3]" />
            </motion.div>
          ))}
        </AnimatePresence>
      </Container>

      <CtaBanner
        className="mt-40 max-lg:mt-24"
        title="Ready to see what is costing you conversions?"
        subtitle="Book a free strategy call. No pitch deck, just a straight look at your funnel and where it is leaking."
        inset={78}
      />
      <Footer className="mt-40 max-lg:mt-24" />
    </main>
  );
}
