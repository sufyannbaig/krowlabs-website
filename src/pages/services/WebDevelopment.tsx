import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/Faq";
import { resultCards } from "@/content/resultCards";
import { headingXL, IncludedColumns, ResultsBlock, TestimonialsBlock } from "@/components/sections/ServiceBlocks";
import { HeroImage, ServiceHero } from "@/components/sections/ServiceHero";
import { Container } from "@/components/ui/Container";
import { vibeCodingFaq } from "@/content/faqs";
import { testimonials } from "@/content/testimonials";
import { staticPages } from "@/content/pages";
import { useSeo } from "@/lib/seo";
import { cn } from "@/lib/utils";

export default function WebDevelopment() {
  useSeo(staticPages["/services/web-development"]);
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
        image={<HeroImage src="/work/b2b-saas-website/cover.webp" alt="B2B SaaS marketing website" className="left-[928px]" />}
      />

      <div className="h-[51px] max-lg:hidden" />

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

      <Container className="mt-20 max-lg:mt-16">
        <ResultsBlock
          className="text-black"
          heading={
            <>
              Recent <span className="accent">Build</span> <span className="text-black/60">Work</span>
            </>
          }
          cards={resultCards(["b2b-saas-website", "b2b-agency-website"])}
        />
      </Container>

      <TestimonialsBlock
          className="mt-20 bg-ink text-white"
          heading={
            <>
              What clients<span className="text-white/60"> say</span>
            </>
          }
          items={[testimonials.misk, testimonials.chander, testimonials.deborah, testimonials.gkTraining]}
        />

      <Container className="mt-[161px] max-lg:mt-24">
        <FaqSection
          heading={
            <h2 className={cn(headingXL, "w-[528px] text-ink")}>
              Questions about this <span className="accent">service</span>
            </h2>
          }
          items={vibeCodingFaq}
        />
      </Container>

      <CtaBanner className="mt-40 max-lg:mt-24" title="Ready to get a working site in days?" />

      <Footer className="mt-40 max-lg:mt-24" />
    </main>
  );
}
