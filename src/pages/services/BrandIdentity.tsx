import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/Faq";
import { resultCards } from "@/content/resultCards";
import { CrossRibbons } from "@/components/sections/Ribbons";
import { EngagementBlock, headingXL, IncludedColumns, ResultsBlock, TestimonialsBlock } from "@/components/sections/ServiceBlocks";
import { HeroImage, ServiceHero } from "@/components/sections/ServiceHero";
import { Container } from "@/components/ui/Container";
import { testimonials } from "@/content/testimonials";
import { staticPages } from "@/content/pages";
import { useSeo } from "@/lib/seo";
import { cn, img } from "@/lib/utils";

export default function BrandIdentity() {
  useSeo(staticPages["/services/brand-identity"]);
  return (
    <main className="overflow-x-clip">
      <ServiceHero
        showLogos
        buttonVariant="black"
        left={66}
        gap={17}
        innerGap={16}
        introClassName="h-[49px]"
        heading={
          <h1 className="text-[64px] font-medium leading-[1.3] tracking-[-2.56px] text-ink">
            Look as <span className="text-ink/60">credible</span> as <br />
            the <span className="accent">product</span> you built.
          </h1>
        }
        intro="A logo, visual identity, and brand guidelines that hold up everywhere your brand shows up, from your product UI to a printed menu or a box on a shelf."
        image={
          <>
            {/* soft orange glow bleeding off the right edge */}
            <div aria-hidden className="pointer-events-none absolute left-[1377px] top-[212px] size-[158px] max-lg:hidden">
              <img src={img("917b4.svg")} alt="" className="absolute inset-[-196.2%] size-[492.4%] max-w-none" />
            </div>
            <HeroImage src="/work/korax/cover.webp" className="left-[928px]" />
          </>
        }
      />

      {/* 51px gap where other service pages show the trust bar */}
      <div className="relative z-10 mt-[51px] h-[196px] max-lg:mt-4 max-lg:h-[170px]">
        <img src={img("73b39.svg")} alt="" aria-hidden className="absolute inset-x-0 top-[82px] h-[159px] w-full max-lg:hidden" />
        <CrossRibbons offset={10} />
      </div>

      <IncludedColumns
        className="bg-ink text-white"
        heading={
          <>
            What <span className="text-white/60">Is Included</span>
          </>
        }
        items={[
          "Logo design and full visual identity system",
          "Brand guidelines covering color, type, imagery, and voice",
          "Business essentials: cards, decks, email signatures, and social templates",
          "Packaging, menus, signage, and other print-ready materials built from the same identity",
          "A system built to extend cleanly into your website, product, and ads",
        ]}
      />

      <Container className="mt-20 max-lg:mt-16">
        <ResultsBlock
          className="text-black"
          rowClassName="items-start justify-center px-0"
          heading={
            <>
              Recent Brand <span className="accent">Work</span>
            </>
          }
          cards={resultCards(["korax", "kebabberia-sabri", "omnizs"])}
        />
      </Container>

      <TestimonialsBlock
          className="mt-40 bg-ink text-white"
          heading={
            <>
              What <span className="text-white/60">clients</span> say
            </>
          }
          items={[testimonials.efogi, testimonials.iskender, testimonials.deborah, testimonials.benProduct]}
        />

      <EngagementBlock
        className=""
        bg="bg-white"
        theme="light"
        button="outline-muted"
        stepsClassName="items-end justify-center"
        heading={
          <>
            How this <span className="accent">engagement</span> runs
          </>
        }
        steps={[
          { title: "Positioning", description: "We define what the brand needs to say before we decide how it looks.", gap: 138 },
          { title: "Concepts", description: "Distinct directions to react to, not one safe option.", gap: 138 },
          { title: "System build", description: "The chosen direction extended into a full, documented system.", gap: 75 },
          { title: "Rollout", description: "Applied to every touchpoint you need on day one, digital and print.", gap: 75 },
        ]}
      />

      <Container className="mt-40 max-lg:mt-24">
        <FaqSection
          heading={
            <h2 className={cn(headingXL, "whitespace-nowrap text-ink")}>
              Common <span className="accent">questions</span>
            </h2>
          }
          items={[
            {
              question: "We already have a logo. Do we need a full rebrand?",
              answer:
                "Not always. We can evolve what exists instead of starting over, once we see whether the current identity is holding the brand back.",
            },
            {
              question: "How long does a brand identity project take?",
              answer:
                "Usually 1 to 2 weeks from ideation to final deliverables, depending on how many concept rounds and brand applications you need.",
              align: "end",
            },
            {
              question: "Do you handle print production for packaging and signage?",
              answer:
                "We design everything print-ready (packaging, menus, signage and more) with the right dielines, bleed and color specs, and we can coordinate directly with your printer. The printing itself is done by your print partner.",
              align: "end",
              questionWidth: 504,
            },
          ]}
        />
      </Container>

      <CtaBanner
        className="mt-40 max-lg:mt-24"
        title="Ready for a brand that matches where you're headed?"
        buttonVariant="black"
        contentWidth={859}
        titleWidth={859}
      />

      <Footer className="mt-40 max-lg:mt-24" />
    </main>
  );
}
