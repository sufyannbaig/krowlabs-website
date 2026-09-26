import { motion, useInView, useReducedMotion, useTransform } from "framer-motion";
import { type CSSProperties, type ReactNode, useRef, useState } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { HeroCollage } from "@/components/home/HeroCollage";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollPin } from "@/components/motion/ScrollPin";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/Faq";
import { HeroGrid, LogoStrip } from "@/components/sections/HeroBackdrop";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CrossRibbons } from "@/components/sections/Ribbons";
import { TestimonialTicker } from "@/components/sections/TestimonialTicker";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WorkCard } from "@/components/work/WorkCard";
import { getCaseStudy } from "@/content/caseStudies";
import { auditUrl, showreel } from "@/content/site";
import { homeFaq } from "@/content/homeFaq";
import { featuredTestimonials } from "@/content/testimonials";
import { staticPages } from "@/content/pages";
import { useSeo } from "@/lib/seo";
import { enterToUpperQuarter, useRectProgress } from "@/lib/useRectProgress";
import { cn, img } from "@/lib/utils";

/* ------------------------------------------------------------------ Hero */

function Hero() {
  return (
    <section className="relative h-[1052px] max-lg:h-auto max-lg:pb-10 max-lg:pt-[110px]">
      <div className="absolute inset-0 mx-auto max-w-[1440px] max-lg:hidden">
        {/* dark texture behind the word "website" */}
        <motion.img
          src={img("9d808.webp")}
          alt=""
          className="absolute left-[455px] top-[264px] h-[79px] w-[256px] origin-left object-cover"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        />
      </div>
      <HeroGrid src="d403b.svg" />
      <Navbar />

      <div className="relative mx-auto h-full max-w-[1440px]">
        <div className="absolute left-[60px] top-[254px] flex w-[892px] flex-col gap-[17px] max-lg:static max-lg:w-auto max-lg:gap-6 max-lg:px-5">
          <div className="flex flex-col gap-4 max-lg:gap-5">
            {/* mobile only: small proof pill above the headline */}
            <Reveal immediate className="hidden max-lg:flex">
              <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 py-1.5 pl-2 pr-3 text-[13px] font-medium text-ink/70 backdrop-blur">
                <span className="relative flex size-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-brand opacity-60" />
                  <span className="relative size-2 rounded-full bg-brand" />
                </span>
                Trusted by 25+ growing brands
              </span>
            </Reveal>
            <Reveal immediate>
              <h1 className="text-[72px] font-medium leading-[1.3] tracking-[-4.32px] text-ink max-lg:text-[40px] max-lg:leading-[1.12] max-lg:tracking-[-1.6px]">
                We turn your{" "}
                <span className="text-white max-lg:inline-block max-lg:bg-[url(/images/9d808.webp)] max-lg:bg-cover max-lg:bg-center max-lg:px-2 max-lg:leading-[1.15]">
                  website
                </span>{" "}
                into your best <span className="accent max-lg:block">salesperson.</span>
              </h1>
            </Reveal>
            <Reveal immediate delay={0.12}>
              <p className="h-[74px] w-[676px] text-[18px] leading-[1.4] text-ink/60 max-lg:h-auto max-lg:w-auto max-lg:text-[16px] max-lg:leading-[1.5]">
                Krow Labs designs and optimizes the pages your customers actually see: sales pages, product pages, and
                apps, so they convert more of the traffic you are already paying for.
              </p>
            </Reveal>
          </div>
          <Reveal immediate delay={0.24} className="flex items-center gap-5 max-lg:mt-2 max-lg:flex-col max-lg:items-stretch max-lg:gap-3">
            <Button variant="gradient" raised className="max-lg:w-full">
              Book a Free Strategy Call
            </Button>
            <Button variant="outline" href={auditUrl} className="max-lg:w-full max-lg:bg-white/60">
              Get a Free Conversion Audit
            </Button>
          </Reveal>
        </div>

        <HeroCollage />
      </div>

      <LogoStrip className="top-[865px]" />
    </section>
  );
}

/* ---------------------------------------------------------- Problem list */

/** 1px rule that takes no layout space (matches Figma's zero-height vectors). */
function Divider({ className }: { className?: string }) {
  return (
    <div className="relative h-0 w-full">
      <div className={cn("absolute inset-x-0 -top-[0.5px] h-px", className)} />
    </div>
  );
}

const problems = [
  {
    text: "Your product pages look good but do not sell.",
    rowWidth: 674,
    textWidth: 354,
    icon: (
      <div className="flex h-[39px] w-[38px] -scale-x-100 items-center">
        <img src={img("b56c4.svg")} alt="" className="h-[37.824px] w-[38px]" />
      </div>
    ),
  },
  {
    text: "Your brand does not yet look as credible as your work.",
    rowWidth: 813,
    textWidth: 491,
    icon: (
      <div className="flex size-[38px] items-center justify-center">
        <img src={img("8fe11.svg")} alt="" className="h-[38px] w-[31.93px]" />
      </div>
    ),
  },
  {
    text: "Your ad creative and your landing pages do not match, so people bounce.",
    rowWidth: 856,
    textWidth: 536,
    icon: <img src={img("34961.svg")} alt="" className="size-[28px]" />,
  },
];

function Problem() {
  return (
    <section className="bg-ink py-20 max-lg:py-16">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-[38px] max-lg:gap-8">
          <div className="flex items-start gap-[70px] text-white max-lg:flex-col max-lg:gap-5">
            <Reveal className="min-w-px flex-1">
              <h2 className="text-[52px] font-medium leading-[1.24] tracking-[-2.6px] max-lg:text-[34px] max-lg:leading-[1.15] max-lg:tracking-[-1.2px]">
                Traffic is not your problem. <span className="text-white/40">Conversion is.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="w-[435px] shrink-0 max-lg:w-auto">
              <p className="text-[18px] leading-[1.4] max-lg:text-[16px]">
                Most growing brands spend on ads, SEO, and content, then send that traffic to a page that was never built
                to convert it. A confusing layout, a weak offer, or a slow checkout quietly costs more revenue than any ad
                budget increase ever recovers.
              </p>
            </Reveal>
          </div>
          <Divider className="bg-white/20" />
        </div>

        <ul className="flex flex-col gap-11 max-lg:gap-8">
          {problems.map((p, i) => (
            <Reveal as="li" key={p.text} delay={i * 0.1} className="group flex cursor-default flex-col gap-[22px]">
              <div className="flex items-center justify-between gap-4">
                <div
                  className="flex w-[var(--row-w)] items-center justify-between text-white max-lg:w-auto max-lg:items-start max-lg:gap-4"
                  style={{ "--row-w": `${p.rowWidth}px` } as CSSProperties}
                >
                  <span className="whitespace-nowrap text-[46px] font-medium leading-[1.24] tracking-[-1.84px] transition-colors duration-500 group-hover:text-brand max-lg:text-[28px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    className="w-[var(--text-w)] text-[28px] leading-[1.4] transition-transform duration-500 ease-out group-hover:translate-x-3 max-lg:w-auto max-lg:text-[20px]"
                    style={{ "--text-w": `${p.textWidth}px` } as CSSProperties}
                  >
                    {p.text}
                  </p>
                </div>
                <div className="flex shrink-0 items-center justify-center rounded-[45px] border border-white p-[19px] transition-[background-color,transform] duration-500 ease-out group-hover:rotate-[-12deg] group-hover:scale-110 group-hover:border-brand group-hover:bg-brand max-lg:scale-75">
                  {p.icon}
                </div>
              </div>
              {i < problems.length - 1 && (
                <div className="relative h-0 w-full">
                  <div className="absolute inset-x-0 -top-[0.5px] h-px bg-white/20" />
                  <div className="absolute inset-x-0 -top-[0.5px] h-px origin-left scale-x-0 bg-brand transition-transform duration-700 ease-out group-hover:scale-x-100" />
                </div>
              )}
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------ Video + process */

function Showreel() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const reduce = useReducedMotion();
  const scrollYProgress = useRectProgress(ref, enterToUpperQuarter);
  // Only fetch the video once the visitor scrolls near it.
  const near = useInView(ref, { once: true, margin: "600px 0px" });
  // function transforms keep this on the JS path (see ProcessSteps for why)
  const scale = useTransform(scrollYProgress, (v) => 0.82 + 0.18 * v);
  const radius = useTransform(scrollYProgress, (v) => 32 * (1 - v));

  const play = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.muted = false;
    videoRef.current.controls = true;
    void videoRef.current.play();
    setPlaying(true);
  };

  return (
    <section ref={ref} className="mt-40 w-full max-lg:mt-24">
      <motion.div
        className="relative h-[750px] w-full overflow-hidden bg-ink max-lg:h-[56vw]"
        style={reduce ? undefined : { scale, borderRadius: radius }}
      >
        {showreel.video ? (
          <video
            aria-label="Krow Labs showreel"
            ref={videoRef}
            src={near ? showreel.video : undefined}
            poster={showreel.poster}
            className="absolute inset-0 size-full object-cover"
            playsInline
            muted
            loop
            autoPlay
            preload="metadata"
          />
        ) : (
          <img src={showreel.poster} alt="Krow Labs showreel" className="absolute inset-0 size-full object-cover" />
        )}
        {!playing && (
          <motion.button
            type="button"
            aria-label="Play showreel with sound"
            onClick={play}
            disabled={!showreel.video}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-10 right-10 flex items-center justify-end overflow-hidden rounded-[66.621px] bg-white/75 px-[31.724px] py-[30.138px] backdrop-blur-sm disabled:cursor-default max-lg:bottom-3 max-lg:right-3 max-lg:origin-bottom-right max-lg:scale-[0.6]"
          >
            <img src={img("cb757.svg")} alt="" className="h-[31.724px] w-[28.552px]" />
          </motion.button>
        )}
      </motion.div>
    </section>
  );
}

function HowWeWork() {
  return (
    <ScrollPin id="how-we-work" screens={2.4} className="bg-white" innerClassName="max-lg:py-16">
      {(progress) => (
        <Container className="flex flex-col gap-[82px] max-lg:gap-8">
          <Reveal className="flex w-[316px] flex-col gap-[26px] max-lg:w-auto max-lg:gap-5">
            <h2 className="text-[52px] font-medium leading-[1.24] tracking-[-2.08px] text-ink max-lg:text-[34px] max-lg:tracking-[-1.2px]">
              How we <span className="accent">work</span>
            </h2>
            <div className="flex">
              <Button variant="outline-muted" size="md">
                Book a Discovery Call
              </Button>
            </div>
          </Reveal>
          <ProcessSteps
            progress={progress}
            steps={[
              { title: "Audit", description: "We map your funnel and rank every drop-off point by revenue impact, not opinion.", gap: 138 },
              { title: "Strategy", description: "You get a plan tied to your goals, priced and scoped before anything is billed.", gap: 138 },
              { title: "Design & Build", description: "We design and ship the fix, whether that is a page, a full site, or a brand system.", gap: 75 },
              { title: "Test & Optimize", description: "We measure what changed and keep refining, so the work keeps paying off after launch.", gap: 75 },
            ]}
          />
        </Container>
      )}
    </ScrollPin>
  );
}

/* ------------------------------------------------------------ Recent work */

const featuredWork = ["b2b-saas-website", "revsta-platform", "korax"];

/** The intro sticks while the case studies scroll past it. */
function RecentWork() {
  return (
    <section id="work" className="bg-navy pb-40 pt-20 max-lg:py-16">
      <Container className="flex items-start justify-between max-lg:flex-col max-lg:gap-10">
        <div className="sticky top-[calc(50%-120px)] flex w-[527px] flex-col justify-center gap-5 max-lg:static max-lg:w-auto">
          <Reveal>
            <h2 className="w-[492px] text-[60px] font-medium leading-[1.24] tracking-[-2.4px] text-white max-lg:w-auto max-lg:text-[36px] max-lg:tracking-[-1.2px]">
              Recent <span className="font-normal text-white/60">work</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="w-[576px] text-[18px] leading-[1.4] text-white/60 max-lg:w-auto max-lg:text-[16px]">
              A sample of what we have shipped for ecommerce, SaaS, and service brands.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="flex">
            <Button variant="outline-white" size="md" href="/work">
              View all work
            </Button>
          </Reveal>
        </div>

        <div className="flex w-[640px] flex-col gap-[60px] max-lg:w-full max-lg:gap-12">
          {featuredWork.map((slug) => {
            const study = getCaseStudy(slug);
            return study ? (
              <Reveal key={slug} y={60}>
                <WorkCard study={study} theme="dark" imageClassName="aspect-[4/3]" />
              </Reveal>
            ) : null;
          })}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------- Why Krow Labs */

type Reason = { title: string; text: string; icon: ReactNode };

const reasons: Record<string, Reason> = {
  team: {
    title: "One team, start to finish",
    text: "The same people who audit your funnel also design the fix, so nothing gets lost in a handoff between agencies.",
    icon: <img src={img("9c973.svg")} alt="" className="absolute inset-x-0 inset-y-[12.5%] h-[75%] w-full" />,
  },
  data: {
    title: "Data before opinions",
    text: "Every recommendation ties back to an audit finding, not a design trend.",
    icon: <img src={img("573a7.svg")} alt="" className="absolute inset-[10.94%] size-[78.12%]" />,
  },
  growing: {
    title: "Built for growing brands",
    text: "Our engagements are sized for teams past their first hire, not enterprise budgets.",
    icon: (
      <>
        <img src={img("d382f.svg")} alt="" className="absolute left-[9.38%] top-[9.38%] h-[81.25%] w-[81.24%]" />
        <img src={img("00a1a.svg")} alt="" className="absolute left-[9.38%] top-[23.07%] h-[67.55%] w-[67.55%]" />
      </>
    ),
  },
  fast: {
    title: "Fast senior work",
    text: "No account manager layer between you and the person actually doing the work.",
    icon: (
      <>
        <img src={img("e573d.svg")} alt="" className="absolute left-[34.34%] top-[15.49%] h-[68.41%] w-[57.85%]" />
        <img src={img("1a935.svg")} alt="" className="absolute left-[8.14%] top-[29.56%] h-[36.75%] w-[63.72%]" />
      </>
    ),
  },
};

function ReasonCard({ reason }: { reason: Reason }) {
  return (
    <div className="group flex h-[396px] w-[339px] shrink-0 flex-col items-start bg-white py-6 pl-6 pr-[59px] transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_30px_60px_-25px_rgba(0,0,0,0.25)] max-lg:h-auto max-lg:w-full max-lg:p-6">
      <div className="relative size-16 shrink-0 overflow-hidden transition-transform duration-500 group-hover:scale-110">{reason.icon}</div>
      <div className="mt-[120px] flex w-[256px] flex-col gap-3 max-lg:mt-10 max-lg:w-auto">
        <h3 className="text-[23px] uppercase leading-[1.4] tracking-[-0.69px] text-ink max-lg:text-[20px]">{reason.title}</h3>
        <p className="text-[16px] leading-[1.39] text-ink/60">{reason.text}</p>
      </div>
    </div>
  );
}

function Glow({ src, className }: { src: string; className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute size-[180px] max-lg:hidden", className)}>
      <img src={img(src)} alt="" className="absolute inset-[-158%] size-[416%] max-w-none" />
    </div>
  );
}

/** Slides in from the left or right when scrolled into view. */
function Slide({ from, children, className, delay = 0 }: { from: "left" | "right"; children: ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, x: from === "left" ? -120 : 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function WhyUs() {
  return (
    <section id="about" className="mt-40 max-lg:mt-24">
      <Container>
        <div className="relative h-[1090px] max-lg:flex max-lg:h-auto max-lg:flex-col max-lg:gap-6">
          <Glow src="3b89c.svg" className="left-[1230px] top-[373px]" />
          <Glow src="48178.svg" className="left-[677px] top-[495px]" />

          <Slide from="left" className="absolute left-0 top-0 w-[824px] max-lg:static max-lg:w-auto">
            <h2 className="text-[60px] font-medium leading-[1.24] tracking-[-2.4px] text-ink max-lg:text-[36px] max-lg:leading-[1.15] max-lg:tracking-[-1.2px]">
              Why teams choose <span className="accent">Krow Labs </span>
              <span className="text-[rgba(33,33,47,0.6)]">over a bigger</span> agency
            </h2>
          </Slide>

          <Slide from="left" delay={0.1} className="absolute left-0 top-[174px] flex w-[329px] flex-col gap-[30px] max-lg:static max-lg:mb-4 max-lg:w-auto max-lg:gap-5">
            <p className="h-[78px] text-[20px] capitalize leading-[1.28] tracking-[0.2px] text-ink/60 max-lg:h-auto max-lg:text-[17px]">
              Most engagements start around $499. Full pricing on a strategy call.
            </p>
            <div className="flex">
              <Button variant="brand">Book a Free Strategy Call</Button>
            </div>
          </Slide>

          <div className="absolute left-[621px] top-[255px] flex gap-5 max-lg:static max-lg:flex-col">
            <Slide from="right">
              <ReasonCard reason={reasons.team} />
            </Slide>
            <Slide from="right" delay={0.12}>
              <ReasonCard reason={reasons.data} />
            </Slide>
          </div>
          <div className="absolute left-0 top-[694px] flex gap-5 max-lg:static max-lg:flex-col">
            <Slide from="left">
              <ReasonCard reason={reasons.growing} />
            </Slide>
            <Slide from="left" delay={0.12}>
              <ReasonCard reason={reasons.fast} />
            </Slide>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------- Testimonials */

function Testimonials() {
  const items = featuredTestimonials;
  return (
    <section className="mt-40 overflow-x-clip bg-ink py-20 max-lg:mt-24 max-lg:py-16">
      <Container>
        <Reveal>
          <h2 className="w-full text-center text-[60px] font-medium leading-[1.24] tracking-[-2.4px] text-white max-lg:text-[36px] max-lg:tracking-[-1.2px]">
            What <span className="font-normal text-white/60">clients</span> say
          </h2>
        </Reveal>
      </Container>
      <TestimonialTicker items={items} className="mt-6" />
    </section>
  );
}

/* ------------------------------------------------------------------ Page */

export default function Index() {
  useSeo(staticPages["/"]);
  return (
    <main className="overflow-x-clip">
      <Hero />

      <div className="relative z-10 h-[268px] max-lg:h-[170px]">
        <img src={img("27e4e.svg")} alt="" aria-hidden className="absolute inset-x-0 top-[78.5px] h-[201.5px] w-full max-lg:hidden" />
        <CrossRibbons />
      </div>

      <Problem />
      <WhatWeDo />
      <Showreel />
      <HowWeWork />
      <RecentWork />
      <WhyUs />
      <Testimonials />

      <Container className="mt-[161px] max-lg:mt-24">
        <FaqSection
          heading={
            <h2 className="whitespace-nowrap text-[60px] font-medium leading-[1.24] tracking-[-2.4px] text-ink max-lg:whitespace-normal max-lg:text-[36px] max-lg:tracking-[-1.2px]">
              Common <span className="accent">questions</span>
            </h2>
          }
          items={homeFaq}
        />
      </Container>

      <CtaBanner
        className="mt-40 max-lg:mt-24"
        title="Ready to see what is costing you conversions?"
        subtitle="Book a free strategy call. No pitch deck, just a straight look at your funnel and where it is leaking."
        inset={78}
      />

      <Footer className="mt-[153px] h-[760px] max-lg:mt-24" />
    </main>
  );
}
