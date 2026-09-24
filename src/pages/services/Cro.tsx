import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/Faq";
import { TrustBar } from "@/components/sections/HeroBackdrop";
import { ResultImage } from "@/components/sections/ResultCard";
import { EngagementBlock, headingLG, headingXL, ResultsBlock, TestimonialsBlock } from "@/components/sections/ServiceBlocks";
import { HeroImage, ServiceHero } from "@/components/sections/ServiceHero";
import { Container } from "@/components/ui/Container";
import { cn, img } from "@/lib/utils";

const genericQuote =
  ' "No fluff, no endless account manager check-ins—just high-level strategy and fast execution that fixed our onboarding drop-offs."';

export default function Cro() {
  return (
    <main className="overflow-x-clip">
      <ServiceHero
        showLogos
        buttonVariant="black"
        width={632}
        headingWidth={629}
        gap={17}
        innerGap={16}
        introClassName="h-[49px]"
        heading={
          <h1 className="w-[655px] text-[64px] font-medium leading-[1.3] tracking-[-3.84px] text-ink">
            Find out exactly <span className="text-ink/60">where you are losing</span>{" "}
            <span className="accent">customers.</span>
          </h1>
        }
        intro="A full audit of your site or app, plus a prioritized fix list ranked by revenue impact. No guesswork, no redesign for the sake of it."
        image={<HeroImage src="936a6.jpg" className="left-[927px]" />}
      />

      <TrustBar className="bg-brand-line" />

      <section className="bg-white px-[60px] py-20">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-10">
          <div className="flex h-[217px] w-full flex-col gap-[60px]">
            <h2 className={cn(headingLG, "min-h-px w-full flex-1 text-ink")}>
              What <span className="text-ink/60">Is </span>
              <span className="accent">Included</span>
            </h2>
            <div className="flex w-full items-start gap-10 text-[22px] leading-[1.4] text-ink/60">
              <p className="w-[297px]">
                Full funnel <br />
                walkthrough, desktop and mobile
              </p>
              <p className="w-[302px]">Heuristic and usability review against CRO best practices</p>
              <p className="w-[300px]">A prioritized list of fixes, ranked by expected impact and effort</p>
              <p className="w-[297px]">A prioritized list of fixes, ranked by expected impact and effort</p>
            </div>
          </div>
          <div className="h-[6px] w-full bg-brand-line" />
        </div>
      </section>

      <section className="mt-20 bg-gradient-to-b from-ink from-[14.882%] to-brand to-[128.68%] py-20 pl-[60px] pr-[61px]">
        <ResultsBlock
          className="mx-auto w-[1319px] text-white"
          heading={
            <>
              Recent Cro <span className="text-white/60">Results</span>
            </>
          }
          cards={[
            {
              label: "ZAFFO · DTC / E-COMMERCE",
              title: "Full funnel audit and rebuild, from product page to checkout",
              stat: "+28%",
              statLabel: "Revenue Per Visitor",
              image: <ResultImage src={img("7d3de.jpg")} className="shadow-[-4px_5px_13.8px_0px_rgba(0,0,0,0.15)]" />,
            },
            {
              label: "GRACIE SPORTS",
              title: "Homepage CRO strategy and location-page SEO architecture",
              stat: "+2.1x",
              statLabel: "Organic Booking Rate",
              image: (
                <ResultImage
                  src={img("41d79.jpg")}
                  imgClassName="left-[0.82%] top-[0.12%] h-[146.34%] w-full object-fill"
                />
              ),
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
          { quote: genericQuote, name: "Jenkins", role: "Product Lead at FlowPulse", avatar: "cc230.png" },
          { quote: genericQuote, name: "Jenkins", role: "Product Lead at FlowPulse", avatar: "5ecdd.png" },
        ]}
      />

      <EngagementBlock
        className="mt-40 h-[715px] bg-ink pt-20"
        theme="dark"
        button="outline-white"
        heading="How this engagement runs"
        steps={[
          { title: "Audit", description: "We walk your funnel end-to-end and rank every drop-off by revenue impact.", gap: 138 },
          { title: "Report", description: "A written report plus a call; findings ranked so you know what to fix first.", gap: 138 },
          { title: "Design & Build", description: "We design and ship the top fixes as a follow-on engagement.", gap: 75 },
          { title: "Test & Optimize", description: "We A/B test the changes and keep refining against real traffic.", gap: 75 },
        ]}
      />

      <Container className="mt-40">
        <FaqSection
          heading={
            <h2 className={cn(headingXL, "w-[528px] text-ink")}>
              Questions about this <span className="accent">service</span>
            </h2>
          }
          items={[
            {
              question: "What do I get at the end of the audit?",
              answer:
                "A written report plus a walkthrough call, with every finding ranked so you know what to fix first.",
            },
            { question: "Do you also fix what you find?", align: "end" },
          ]}
        />
      </Container>

      <CtaBanner className="mt-40" title="Ready to see what your funnel is missing ?" buttonVariant="black" />

      <Footer className="mt-40" />
    </main>
  );
}
