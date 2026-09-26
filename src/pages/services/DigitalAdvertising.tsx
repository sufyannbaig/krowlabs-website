import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/Faq";
import { resultCards } from "@/content/resultCards";
import { EngagementBlock, headingXL, IncludedColumns, ResultsBlock, TestimonialsBlock } from "@/components/sections/ServiceBlocks";
import { HeroImage, ServiceHero } from "@/components/sections/ServiceHero";
import { Container } from "@/components/ui/Container";
import { testimonials } from "@/content/testimonials";
import { staticPages } from "@/content/pages";
import { useSeo } from "@/lib/seo";
import { cn } from "@/lib/utils";

export default function DigitalAdvertising() {
  useSeo(staticPages["/services/digital-advertising"]);
  return (
    <main className="overflow-x-clip">
      <ServiceHero
        buttonVariant="brand"
        left={61}
        width={697}
        headingWidth={697}
        introClassName="pb-[25px]"
        heading={
          <h1 className="text-[64px] font-medium leading-[1.22] tracking-[-3.84px] text-ink">
            Ad creative that <span className="text-ink/60">actually </span>
            <span className="accent">matches</span> your landing page.
          </h1>
        }
        intro="Landing pages and full marketing sites, built with a vibe-coding, AI-assisted workflow and reviewed by a senior designer at every step, so speed never means sloppy."
        image={<HeroImage src="/work/kryve/cover.webp" alt="Kryve sportswear ad creative" className="left-[928px]" />}
      />

      <div className="h-[51px] max-lg:hidden" />

      <IncludedColumns
        className="bg-[linear-gradient(120.98deg,rgb(210,58,18)_5.79%,rgb(245,133,45)_66.43%)] text-white"
        itemClassName="text-white"
        heading={
          <>
            What <span className="text-white/60">Is Included</span>
          </>
        }
        items={[
          "Static ad creative for Google Ads and paid social, sized for every placement",
          "Messaging and visuals matched to the landing page the ad sends people to",
          "Multiple creative variants built for testing, not just one final asset",
          "Organic social templates that keep feeds on-brand between campaigns",
        ]}
      />

      <section className="bg-ink py-20 max-lg:px-5 max-lg:py-16">
        <ResultsBlock
          className="mx-auto max-w-[1440px] text-white"
          heading={
            <>
              Recent <span className="accent">Ad</span> Work
            </>
          }
          cards={resultCards(["kryve", "salten"])}
        />
      </section>

      <TestimonialsBlock
        className="mt-20 text-ink max-lg:mt-8"
        heading={
          <>
            What <span className="accent">clients</span> say
          </>
        }
        items={[testimonials.prospectBase, testimonials.gkEvent, testimonials.benAds, testimonials.gkTraining]}
      />

      <EngagementBlock
        className="mt-40"
        bg="bg-ink"
        theme="dark"
        button="outline-white"
        heading="How this engagement runs"
        steps={[
          { title: "Align on funnel", description: "We look at the landing page first, so the ad and the page tell one story.", gap: 81 },
          { title: "Concept & copy", description: "Hooks and visuals built around what is already converting on your page.", gap: 94 },
          { title: "Variant production", description: "Multiple sizes and angles delivered ready for your ad platforms.", gap: 75 },
          { title: "Iterate", description: "We refresh creative on a cadence, based on what your data shows.", gap: 95 },
        ]}
      />

      <Container className="mt-40 max-lg:mt-24">
        <FaqSection
          heading={
            <h2 className={cn(headingXL, "w-[513px] text-ink")}>
              Questions about <span className="accent">this service</span>
            </h2>
          }
          items={[
            {
              question: "Do you run the ads too, or just design the creative?",
              answer:
                "We design the creative. We work alongside your media buyer or agency, matching what they need for the platforms you are running on.",
            },
            {
              question: "Do you do video ads?",
              answer:
                "Yes. Alongside static creative we produce short-form video, motion graphics and AI-generated video ads. We will recommend the right mix of formats for your platforms on the strategy call.",
              align: "end",
            },
            {
              question: "Ready for ad creative that actually converts?",
              answer:
                "Book a free strategy call. We will look at your current ads and landing pages together and show you where new creative is most likely to move your numbers.",
              align: "end",
              questionWidth: 504,
            },
          ]}
        />
      </Container>

      <CtaBanner className="mt-40 max-lg:mt-24" title="Ready for ad creative that actually converts?" />

      <Footer className="mt-40 max-lg:mt-24" />
    </main>
  );
}
