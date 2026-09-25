import { useState } from "react";
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
      <section className="relative pb-[60px] pt-[200px]">
        <HeroGrid src="06d81.svg" />
        <Navbar />
        <Container className="relative flex flex-col gap-10">
          <div className="flex items-end justify-between gap-16">
            <h1 className="text-[72px] font-medium leading-[1.2] tracking-[-4px] text-ink">
              Selected <span className="accent">work</span>
            </h1>
            <p className="max-w-[460px] text-[18px] leading-[1.4] text-ink/60">
              A sample of what we have shipped for ecommerce, SaaS, and service brands.
            </p>
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
                  "border px-5 py-3 text-[16px] font-medium leading-[1.4] transition-colors",
                  active === f ? "border-ink bg-ink text-white" : "border-ink/20 text-ink hover:border-ink",
                )}
              >
                {f === "all" ? "All work" : services[f].short}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <Container className="grid grid-cols-2 gap-x-10 gap-y-20">
        {list.map((c) => (
          <WorkCard key={c.slug} study={c} imageClassName="aspect-[4/3]" />
        ))}
      </Container>

      <CtaBanner
        className="mt-40"
        title="Ready to see what is costing you conversions?"
        subtitle="Book a free strategy call. No pitch deck, just a straight look at your funnel and where it is leaking."
        inset={78}
      />
      <Footer className="mt-40" />
    </main>
  );
}
