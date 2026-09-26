import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/Faq";
import { resultCards } from "@/content/resultCards";
import { EngagementBlock, headingLG, headingXL, ResultsBlock, TestimonialsBlock } from "@/components/sections/ServiceBlocks";
import { HeroImage, ServiceHero } from "@/components/sections/ServiceHero";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { provenResults, testimonials } from "@/content/testimonials";
import { staticPages } from "@/content/pages";
import { useSeo } from "@/lib/seo";
import { cn } from "@/lib/utils";

export default function Cro() {
  useSeo(staticPages["/services/cro"]);
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
        image={<HeroImage src="/work/zaffo-coffee/cover.webp" alt="Zaffo Coffee ecommerce store redesign" className="left-[927px]" />}
      />

      <div className="h-[51px] max-lg:hidden" />

      <section className="bg-white px-[60px] py-20 max-lg:mt-10 max-lg:px-5 max-lg:py-16">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-10">
          <div className="flex h-[217px] w-full flex-col gap-[60px] max-lg:h-auto max-lg:gap-8">
            <Reveal className="min-h-px w-full flex-1">
              <h2 className={cn(headingLG, "text-ink")}>
                What <span className="text-ink/60">Is </span>
                <span className="accent">Included</span>
              </h2>
            </Reveal>
            <div className="flex w-full items-start gap-10 text-[22px] leading-[1.4] text-ink/60 max-lg:grid max-lg:grid-cols-2 max-lg:gap-6 max-lg:text-[17px] max-sm:grid-cols-1">
              {[
                ["w-[297px]", "Full funnel walkthrough, desktop and mobile"],
                ["w-[302px]", "Heuristic and usability review against CRO best practices"],
                ["w-[300px]", "A prioritized list of fixes, ranked by expected impact and effort"],
                ["w-[297px]", "A written report plus a walkthrough call on every finding"],
              ].map(([w, t], i) => (
                <Reveal key={t} delay={i * 0.08} className={cn(w, "max-lg:w-auto")}>
                  <p>{t}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <motion.div className="h-[6px] w-full origin-left bg-brand-line" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} />
        </div>
      </section>

      <section className="mt-20 bg-gradient-to-b from-ink from-[14.882%] to-brand to-[128.68%] py-20 pl-[60px] pr-[61px] max-lg:mt-0 max-lg:px-5 max-lg:py-16">
        <ResultsBlock
          className="mx-auto w-[1319px] text-white max-lg:w-full"
          heading={
            <>
              Recent CRO <span className="text-white/60">Work</span>
            </>
          }
          cards={resultCards(["zaffo-coffee", "optiwrite"])}
        />
        <ul className="mx-auto mt-10 grid w-[1319px] grid-cols-3 gap-[47px] px-[74px] max-lg:w-full max-lg:grid-cols-1 max-lg:gap-6 max-lg:px-0">
          {provenResults.map((r, i) => (
            <Reveal as="li" key={r.value} delay={i * 0.1} className="flex flex-col gap-2 border-t border-white/30 pt-5 text-white">
              <span className="text-[36px] font-medium leading-[1.2] tracking-[-1px]">{r.value}</span>
              <span className="text-[16px] leading-[1.4] text-white/70">{r.label}</span>
            </Reveal>
          ))}
        </ul>
      </section>

      <TestimonialsBlock
        className="mt-20 text-ink max-lg:mt-8"
        heading={
          <>
            What <span className="accent">clients</span> say
          </>
        }
        items={[testimonials.chander, testimonials.gkTraining, testimonials.deborah, testimonials.misk]}
      />

      <EngagementBlock
        className="mt-40"
        bg="bg-ink"
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

      <Container className="mt-40 max-lg:mt-24">
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
            {
              question: "Do you also fix what you find?",
              answer:
                "Yes. We can design and build the top fixes as a follow-on engagement, then A/B test them against real traffic. You can also hand the report to your own team if you prefer.",
              align: "end",
            },
          ]}
        />
      </Container>

      <CtaBanner className="mt-40 max-lg:mt-24" title="Ready to see what your funnel is missing ?" buttonVariant="black" />

      <Footer className="mt-40 max-lg:mt-24" />
    </main>
  );
}
