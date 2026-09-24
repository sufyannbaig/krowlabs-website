import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/Faq";
import { TrustBar } from "@/components/sections/HeroBackdrop";
import { ResultImage } from "@/components/sections/ResultCard";
import { EngagementBlock, headingXL, IncludedColumns, ResultsBlock, TestimonialsBlock } from "@/components/sections/ServiceBlocks";
import { HeroImage, ServiceHero } from "@/components/sections/ServiceHero";
import { Container } from "@/components/ui/Container";
import { cn, img } from "@/lib/utils";

export default function DigitalAdvertising() {
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
        image={<HeroImage src="2fd20.jpg" className="left-[928px]" />}
      />

      <TrustBar className="bg-white" textClassName="text-ink" />

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

      <section className="bg-ink py-20">
        <ResultsBlock
          className="mx-auto max-w-[1440px] text-white"
          heading={
            <>
              Recent <span className="accent">Cro</span> Results
            </>
          }
          cards={[
            {
              label: "NIBBI · DTC / SNACK",
              title: "AI-generated ad campaign built around a mascot character, across multiple scene sets",
              stat: "+42%",
              statLabel: "CTR (Click-Through Rate)",
              image: <ResultImage src={img("7eefb.jpg")} className="border-[1.322px] border-white/[0.81]" />,
            },
            {
              label: "OMNIZS · DTC / GEN Z APPAREL",
              title: "Ad creative built to match campaign landing pages",
              titleClassName: "tracking-[-0.69px]",
              stat: "+65%",
              statLabel: "Lift in Conversion Rate",
              image: <ResultImage src={img("5cd24.jpg")} />,
            },
          ]}
        />
      </section>

      <TestimonialsBlock
        className="mt-40 text-ink"
        heading={
          <>
            What <span className="accent">clients</span> say
          </>
        }
        items={[
          {
            quote:
              '"The AI mascot creatives completely refreshed our ad campaigns. We saw a massive spike in click-through rates almost immediately, and the visual quality across different scenes was top-tier."',
            name: "Marcus Vance",
            role: "Head of Growth · NiBBi",
            avatar: "cc230.png",
          },
          {
            quote:
              '"Matching our ad creative directly with our landing page visuals made a seamless experience for our audience. Conversion rates jumped significantly within the first two weeks."',
            name: "Elena Rostova",
            role: "Brand Manager · OmniZs",
            avatar: "5ecdd.png",
          },
        ]}
      />

      <EngagementBlock
        className="mt-40 h-[715px] bg-ink pt-20"
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

      <Container className="mt-40">
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
            { question: "Do you do video ads?", align: "end" },
            { question: "Ready for ad creative that actually converts?", align: "end", questionWidth: 504 },
          ]}
        />
      </Container>

      <CtaBanner className="mt-40" title="Ready for ad creative that actually converts?" />

      <Footer className="mt-40" />
    </main>
  );
}
