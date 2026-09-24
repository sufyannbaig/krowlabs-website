import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/Faq";
import { TrustBar } from "@/components/sections/HeroBackdrop";
import { ResultImage } from "@/components/sections/ResultCard";
import { headingXL, IncludedColumns, ResultsBlock, TestimonialsBlock } from "@/components/sections/ServiceBlocks";
import { HeroImage, ServiceHero } from "@/components/sections/ServiceHero";
import { Container } from "@/components/ui/Container";
import { vibeCodingFaq } from "@/content/faqs";
import { cn, img } from "@/lib/utils";

export default function WebDevelopment() {
  return (
    <main className="overflow-x-clip">
      <ServiceHero
        buttonVariant="brand"
        left={61}
        introClassName="pb-[25px]"
        heading={
          <h1 className="text-[64px] font-medium leading-[1.3] tracking-[-3.84px] text-ink">
            A working website in <span className="accent">days</span>, not{" "}
            <span className="text-ink/60">months.</span>
          </h1>
        }
        intro="Landing pages and full marketing sites, built with a vibe-coding, AI-assisted workflow and reviewed by a senior designer at every step, so speed never means sloppy."
        image={<HeroImage src="2fd20.jpg" className="left-[928px]" />}
      />

      <TrustBar className="bg-gradient-to-r from-brand-warm from-[21.154%] to-brand-deep" />

      <IncludedColumns
        className="bg-ink text-white"
        heading={
          <>
            What <span className="text-white/60">Is Included</span>
          </>
        }
        items={[
          "AI-assisted, vibe-coded development for fast turnaround, with senior design review on every screen",
          "Full site or landing page build, mapped to your funnel stages",
          "Copywriting support so the words and the layout are built together",
          "Mobile-first builds that hold up on every device",
          "Handoff into Webflow, Framer, or your existing stack",
        ]}
      />

      <Container className="mt-20">
        <ResultsBlock
          className="text-black"
          heading={
            <>
              Recent <span className="accent">Cro</span> <span className="text-black/60">Results</span>
            </>
          }
          cards={[
            {
              label: "REPLIX AI · SAAS",
              title: "Upgraded a Shopify ad-creative SaaS platform, demo built and shipped in Lovable",
              stat: "+45%",
              statLabel: "Demo Signups",
              image: <ResultImage src={img("7eefb.jpg")} className="border-[1.322px] border-white/[0.81]" />,
            },
            {
              label: "ALGERA LABS · SAAS",
              title: "Site QA and build support on a live Framer site",
              stat: "100%",
              statLabel: "QA Passed",
              image: <ResultImage src={img("5cd24.jpg")} />,
            },
          ]}
        />
      </Container>

      <section className="mt-20 bg-ink px-[133px] py-20">
        <TestimonialsBlock
          className="text-white"
          heading={
            <>
              What clients<span className="text-white/60"> say</span>
            </>
          }
          items={[
            {
              quote:
                '"The speed and attention to detail were unmatched. Our new demo interface was built and shipped in record time without compromising quality."',
              name: "Saad m / Replix AI",
              role: "Founder & CEO",
              avatar: "cc230.png",
            },
            {
              quote:
                ' "No fluff, no endless account manager check-ins—just high-level strategy and fast execution that fixed our onboarding drop-offs."',
              name: "Jenkins / Algera Labs",
              role: "Head of Product",
              avatar: "5ecdd.png",
            },
          ]}
        />
      </section>

      <Container className="mt-[161px]">
        <FaqSection
          heading={
            <h2 className={cn(headingXL, "w-[528px] text-ink")}>
              Questions about this <span className="accent">service</span>
            </h2>
          }
          items={vibeCodingFaq}
        />
      </Container>

      <CtaBanner className="mt-40" title="Ready to get a working site in days?" />

      <Footer className="mt-40" />
    </main>
  );
}
