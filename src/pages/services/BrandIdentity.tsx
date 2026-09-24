import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/Faq";
import { ResultImage } from "@/components/sections/ResultCard";
import { CrossRibbons } from "@/components/sections/Ribbons";
import { EngagementBlock, headingXL, IncludedColumns, ResultsBlock, TestimonialsBlock } from "@/components/sections/ServiceBlocks";
import { HeroImage, ServiceHero } from "@/components/sections/ServiceHero";
import { Container } from "@/components/ui/Container";
import { cn, img } from "@/lib/utils";

export default function BrandIdentity() {
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
            <div aria-hidden className="pointer-events-none absolute left-[1377px] top-[212px] size-[158px]">
              <img src={img("917b4.svg")} alt="" className="absolute inset-[-196.2%] size-[492.4%] max-w-none" />
            </div>
            <HeroImage
              src="e8f9d.jpg"
              className="left-[928px]"
              imgClassName="left-[-8.63%] top-[-89.64%] h-[270.41%] w-[117.26%] object-fill"
            />
          </>
        }
      />

      {/* 51px gap where other service pages show the trust bar */}
      <div className="relative z-10 mt-[51px] h-[196px]">
        <img src={img("73b39.svg")} alt="" aria-hidden className="absolute inset-x-0 top-[82px] h-[159px] w-full" />
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

      <Container className="mt-20">
        <ResultsBlock
          className="text-black"
          rowClassName="items-start justify-center px-0"
          heading={
            <>
              Recent Cro <span className="accent">Results</span>
            </>
          }
          cards={[
            {
              label: "KEBABERIA SABRI RESTAURANT · F&B",
              title: " Full brand identity, from logo to guidelines",
              stat: "+35%",
              statLabel: "In-Store Foot Traffic",
              image: <ResultImage src={img("7eefb.jpg")} className="border-[1.322px] border-white/[0.81]" />,
            },
            {
              label: "OMNIZS · DTC / GEN Z APPAREL",
              title: "Brand identity for a Gen Z clothing brand",
              stat: "2.5x",
              statLabel: "Social Engagement",
              image: <ResultImage src={img("5cd24.jpg")} />,
            },
            {
              label: "ELLA / REVSTA / KORAX · BRAND IDENTITY",
              title: "Core brand identity projects across multiple industries",
              stat: "100%",
              statLabel: "Brand Consistency",
              image: <ResultImage src={img("5cd24.jpg")} />,
            },
          ]}
        />
      </Container>

      <section className="mt-40 bg-ink px-[133px] py-20">
        <TestimonialsBlock
          className="text-white"
          heading={
            <>
              What <span className="text-white/60">clients</span> say
            </>
          }
          items={[
            {
              quote:
                "\"Created a distinct visual identity that completely modernized our restaurant's look—from our menus to physical packaging. Our customers love it.\"",
              name: "Kebaberia Sabri Restaurant",
              role: "Owner & Manager",
              avatar: "cc230.png",
            },
            {
              quote:
                ' "Nailed the Gen Z aesthetic on the first pass. The brand guidelines made scaling our social graphics and product drops smooth and effortless."',
              name: "OmniZs",
              role: "Founder & Creative Director",
              avatar: "5ecdd.png",
            },
          ]}
        />
      </section>

      <EngagementBlock
        className="h-[649px] bg-white pt-[47px]"
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

      <Container className="mt-40">
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
            { question: "How long does a brand identity project take?", align: "end" },
            { question: "Do you handle print production for packaging and signage?", align: "end", questionWidth: 504 },
          ]}
        />
      </Container>

      <CtaBanner
        className="mt-40"
        title="Ready for a brand that matches where you're headed?"
        buttonVariant="black"
        contentWidth={859}
        titleWidth={859}
      />

      <Footer className="mt-40" />
    </main>
  );
}
