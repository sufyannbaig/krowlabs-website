import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/Faq";
import { resultCards } from "@/content/resultCards";
import { FlatRibbon } from "@/components/sections/Ribbons";
import { EngagementBlock, headingLG, headingXL, ResultsBlock, TestimonialsBlock } from "@/components/sections/ServiceBlocks";
import { HeroImage, ServiceHero } from "@/components/sections/ServiceHero";
import { testimonials } from "@/content/testimonials";
import { staticPages } from "@/content/pages";
import { useSeo } from "@/lib/seo";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import { vibeCodingFaq } from "@/content/faqs";

export default function UiUxDesign() {
  useSeo(staticPages["/services/ui-ux-design"]);
  return (
    <main className="overflow-x-clip">
      <ServiceHero
        buttonVariant="brand"
        grid="7ccb5.svg"
        gridClassName="left-[calc(41.67%+8px)] top-[-65px]"
        heading={
          <h1 className="text-[64px] font-medium leading-[1.3] tracking-[-2.56px] text-ink">
            Product design that <br />
            <span className="accent">gets </span>shipped,{" "}
            <span className="text-ink/60">not</span> shelved.
          </h1>
        }
        intro="UI/UX for SaaS platforms and mobile apps, from first wireframe to a design system your team can keep building on."
        image={<HeroImage src="/work/revsta-platform/cover.webp" alt="Revsta product platform UI" className="left-[927px]" />}
      />

      <div className="h-[51px] max-lg:hidden" />
      <FlatRibbon className="z-10 -mt-[1.46px]" />

      <section className="bg-[#fff7f2] px-[60px] py-20 max-lg:mt-6 max-lg:px-5 max-lg:py-16">
        <div className="mx-auto flex max-w-[1314px] items-start justify-between max-lg:flex-col max-lg:gap-8">
          <Reveal>
            <h2 className={cn(headingLG, "whitespace-nowrap text-ink")}>
              What <span className="text-black/60">Is Included</span>
            </h2>
          </Reveal>
          <div className="grid w-[720px] grid-cols-2 gap-10 text-[22px] leading-[1.4] text-ink/70 max-lg:w-full max-lg:gap-6 max-lg:text-[17px] max-sm:grid-cols-1">
            {[
              "User flows and wireframes, grounded in how people actually use the product",
              "High-fidelity UI for web and mobile, pixel-checked before handoff",
              "Developer handoff support, so what ships matches what was designed",
              "A design system your team can keep extending without you",
            ].map((t, i) => (
              <Reveal key={t} delay={i * 0.08}>
                <p>{t}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-brand to-ink to-[113.8%] py-20 pl-[60px] pr-[61px] max-lg:px-5 max-lg:py-16">
        <ResultsBlock
          className="mx-auto w-[1319px] text-white max-lg:w-full"
          heading={
            <>
              Recent Product <span className="text-white/60">Work</span>
            </>
          }
          cards={resultCards(["revsta-platform", "fintech-investor-landing"])}
        />
      </section>

      <TestimonialsBlock
          className="mt-20 bg-ink text-white"
          heading={
            <>
              What <span className="text-white/60">clients</span> say
            </>
          }
          items={[testimonials.benProduct, testimonials.benAds, testimonials.misk, testimonials.gkTraining]}
        />

      <EngagementBlock
        className="mt-20"
        bg="bg-page"
        theme="light"
        heading={
          <>
            How we <span className="text-ink/60">work</span>
          </>
        }
        steps={[
          { title: "Discover", description: "We map the flows and constraints before a single screen gets drawn.", gap: 138 },
          { title: "Wireframe", description: "Low-fidelity structure signed off before we invest in visual design.", gap: 138 },
          { title: "High-fidelity UI", description: "Full visual design across web and mobile, built as reusable components.", gap: 75 },
          { title: "Handoff", description: "Specs, states, and a design system your engineers can actually use.", gap: 137 },
        ]}
      />

      <section className="mt-40 bg-white px-[60px] py-20 max-lg:mt-16 max-lg:px-5 max-lg:py-16">
        <FaqSection
          className="mx-auto max-w-[1320px]"
          heading={
            <h2 className={cn(headingXL, "w-[528px] text-ink")}>
              <span className="accent">Questions</span> about this service
            </h2>
          }
          items={vibeCodingFaq}
        />
      </section>

      <CtaBanner className="mt-40 max-lg:mt-24" title="Ready for a product that feels as good as it works?" buttonVariant="dark" />

      <Footer className="mt-40 max-lg:mt-24" />
    </main>
  );
}
