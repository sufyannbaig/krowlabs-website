import { Footer } from "@/components/layout/Footer";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/Faq";
import { TrustBar } from "@/components/sections/HeroBackdrop";
import { ResultImage } from "@/components/sections/ResultCard";
import { FlatRibbon } from "@/components/sections/Ribbons";
import { EngagementBlock, headingLG, headingXL, ResultsBlock, TestimonialsBlock } from "@/components/sections/ServiceBlocks";
import { HeroImage, ServiceHero } from "@/components/sections/ServiceHero";
import { cn, img } from "@/lib/utils";
import { vibeCodingFaq } from "@/content/faqs";

export default function UiUxDesign() {
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
        image={<HeroImage src="4e44c.jpg" className="left-[927px]" />}
      />

      <TrustBar className="bg-gradient-to-r from-brand-warm from-[21.154%] to-brand-deep" />
      <FlatRibbon className="z-10 -mt-[1.46px]" />

      <section className="bg-[#fff7f2] px-[60px] py-20">
        <div className="mx-auto flex max-w-[1314px] items-start justify-between">
          <h2 className={cn(headingLG, "whitespace-nowrap text-ink")}>
            What <span className="text-black/60">Is Included</span>
          </h2>
          <div className="flex w-[720px] flex-col gap-10 text-[22px] leading-[1.4] text-ink/70">
            <div className="flex items-center gap-10">
              <p className="w-[340px]">User flows and wireframes, grounded in how people actually use the product</p>
              <p className="w-[340px]">High-fidelity UI for web and mobile, pixel-checked before handoff</p>
            </div>
            <div className="flex items-start gap-10">
              <p className="w-[340px]">Developer handoff support, so what ships matches what was designed</p>
              <p className="w-[340px]">A design system your team can keep extending without you</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-brand to-ink to-[113.8%] py-20 pl-[60px] pr-[61px]">
        <ResultsBlock
          className="mx-auto w-[1319px] text-white"
          heading={
            <>
              Recent Cro <span className="text-white/60">Results</span>
            </>
          }
          cards={[
            {
              label: "PCX TEAM · B2B SAAS",
              title: "Product design for a B2B coaching platform",
              titleClassName: "tracking-[-0.23px]",
              stat: "+40%",
              statLabel: "User Engagement",
              image: <ResultImage src={img("7d3de.jpg")} className="shadow-[-4px_5px_13.8px_0px_rgba(0,0,0,0.15)]" />,
            },
            {
              label: "GROWPATH (KIDEMMY) · CONSUMER APP",
              title: "UI/UX and early branding for a birth-to-15 parenting app, from concept to build-ready screens",
              stat: "40+",
              statLabel: "Build-Ready Screens",
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

      <section className="bg-white px-[133px] py-20">
        <TestimonialsBlock
          dark
          className="text-ink"
          heading={
            <>
              What <span className="text-[rgba(1,1,1,0.6)]">clients</span> say
            </>
          }
          items={[
            {
              quote:
                '"Transformed our complex B2B workflows into an intuitive, polished platform. The design system makes shipping new features effortless."',
              name: "Saad m / Replix AI",
              role: "Head of Product · PCx Team",
              avatar: "cc230.png",
            },
            {
              quote:
                '"Brought our parenting app concept to life with incredible UI and thoughtful user flows. Handed over clean, build-ready screens on schedule."',
              name: "Jenkins / Algera Labs",
              role: "Founder & CEO · GrowPath (Kidemmy)",
              avatar: "5ecdd.png",
            },
          ]}
        />
      </section>

      <EngagementBlock
        className="mt-20"
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

      <section className="mt-40 bg-white px-[60px] py-20">
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

      <CtaBanner className="mt-40" title="Ready for a product that feels as good as it works?" buttonVariant="dark" />

      <Footer className="mt-40" />
    </main>
  );
}
