import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/Faq";
import { HeroGrid, LogoStrip } from "@/components/sections/HeroBackdrop";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CrossRibbons } from "@/components/sections/Ribbons";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn, img } from "@/lib/utils";

/* ------------------------------------------------------------------ Hero */

const collage = [
  // [left, top, boxW, boxH, rotate, image, bordered]
  { left: 1206, top: 137, w: 315.562, h: 206.517, rotate: 1.97, src: "5cd9b.jpg", border: true },
  { left: 1046.36, top: 475.31, w: 318.834, h: 211.903, rotate: -3, src: "b1c3a.jpg" },
  { left: 1206.28, top: 547.75, w: 315.555, h: 206.506, rotate: -1.97, src: "5cd24.jpg" },
  { left: 1047.72, top: 206.74, w: 315.562, h: 206.517, rotate: 1.97, src: "78229.jpg" },
  { left: 948, top: 321, w: 309, h: 196, rotate: 0, src: "7eefb.jpg", border: true },
];

function Hero() {
  return (
    <section className="relative h-[1052px]">
      <div className="absolute inset-0 mx-auto max-w-[1440px]">
        {/* dark texture behind the word "website" */}
        <img src={img("9d808.png")} alt="" className="absolute left-[455px] top-[264px] h-[79px] w-[256px] object-cover" />
      </div>
      <HeroGrid src="d403b.svg" />
      <Navbar />

      <div className="relative mx-auto h-full max-w-[1440px]">
        <div className="absolute left-[60px] top-[254px] flex w-[892px] flex-col gap-[17px]">
          <div className="flex flex-col gap-4">
            <h1 className="text-[72px] font-medium leading-[1.3] tracking-[-4.32px] text-ink">
              We turn your <span className="text-white">website</span> into your best{" "}
              <span className="accent">salesperson.</span>
            </h1>
            <p className="h-[74px] w-[676px] text-[18px] leading-[1.4] text-ink/60">
              Krow Labs designs and optimizes the pages your customers actually see: sales pages, product pages, and
              apps, so they convert more of the traffic you are already paying for.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <Button variant="gradient" raised>
              Book a Free Strategy Call
            </Button>
            <Button variant="outline">Get a Free Conversion Audit</Button>
          </div>
        </div>

        {collage.map((c) => (
          <div
            key={c.src}
            className="absolute flex items-center justify-center"
            style={{ left: c.left, top: c.top, width: c.w, height: c.h }}
          >
            <div
              className={cn(
                "relative h-[196px] w-[309px] shrink-0 overflow-hidden",
                c.border && "border-[1.322px] border-white/[0.81]",
              )}
              style={{ transform: `rotate(${c.rotate}deg)` }}
            >
              <img src={img(c.src)} alt="" className="absolute inset-0 size-full object-cover" />
            </div>
          </div>
        ))}
      </div>

      <LogoStrip className="top-[855px]" />
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
    <section className="bg-ink py-20">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col gap-[38px]">
          <div className="flex items-start gap-[70px] text-white">
            <h2 className="min-w-px flex-1 text-[52px] font-medium leading-[1.24] tracking-[-2.6px]">
              Traffic is not your problem. <span className="text-white/40">Conversion is.</span>
            </h2>
            <p className="w-[435px] shrink-0 text-[18px] leading-[1.4]">
              Most growing brands spend on ads, SEO, and content, then send that traffic to a page that was never built
              to convert it. A confusing layout, a weak offer, or a slow checkout quietly costs more revenue than any ad
              budget increase ever recovers.
            </p>
          </div>
          <Divider className="bg-white/20" />
        </div>

        <ul className="flex flex-col gap-11">
          {problems.map((p, i) => (
            <li key={p.text} className="flex flex-col gap-[22px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-between text-white" style={{ width: p.rowWidth }}>
                  <span className="whitespace-nowrap text-[46px] font-medium leading-[1.24] tracking-[-1.84px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[28px] leading-[1.4]" style={{ width: p.textWidth }}>
                    {p.text}
                  </p>
                </div>
                <div className="flex items-center justify-center rounded-[45px] border border-white p-[19px]">{p.icon}</div>
              </div>
              {i < problems.length - 1 && <Divider className="bg-white/20" />}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ What we do */

const services = [
  {
    title: "CRO & Conversion-Focused Design",
    text: "Full audits of your sales pages, product pages, and checkout flow, with a prioritized fix list ranked by expected impact.",
    href: "/services/cro",
  },
  {
    title: "Website Development",
    text: "Landing pages and full marketing sites, built fast with a vibe-coding, AI-assisted workflow and reviewed by a senior designer at every step.",
    href: "/services/web-development",
    active: true,
  },
  {
    title: "UI/UX Design",
    text: "Product design for SaaS platforms and mobile apps, from first wireframe to a design system your team can keep building on.",
    href: "/services/ui-ux-design",
  },
  {
    title: "Digital Advertising & Creative",
    text: "Static ad creative for Google Ads and social, designed to match the landing page it sends traffic to.",
    href: "/services/digital-advertising",
  },
  {
    title: "Brand Identity",
    text: "Logo, visual identity, and brand guidelines, extended into packaging, menus, signage, and other physical touchpoints.",
    href: "/services/brand-identity",
  },
];

function WhatWeDo() {
  return (
    <section id="services" className="mx-auto mt-40 w-full max-w-[1440px] pl-[57px] pr-[63px]">
      <div className="flex flex-col gap-[100px]">
        <div className="flex flex-col gap-10">
          <div className="flex items-start justify-between">
            <h2 className="mt-[11px] text-[52px] font-medium leading-[1.24] tracking-[-2.08px] text-ink">
              What <span className="accent">we do</span>
            </h2>
            <p className="w-[385px] text-[18px] leading-[1.4] text-ink/60">
              Five disciplines, one team, built around a single goal: more of your visitors becoming customers.
            </p>
          </div>

          <div className="flex items-start justify-between">
            <ul className="flex w-[640px] flex-col gap-10">
              {services.map((s) => (
                <li key={s.title} className="flex flex-col gap-[30px]">
                  <div className="relative h-0 w-full">
                    <div className={cn("absolute inset-x-0 -top-[2px] h-[2px]", s.active ? "bg-ink" : "bg-ink/10")} />
                  </div>
                  <Link to={s.href} className={cn("flex flex-col gap-3", !s.active && "text-ink/30")}>
                    <h3
                      className={cn(
                        "w-[394px] text-[40px] font-medium leading-[1.24] tracking-[-1.6px]",
                        s.active && "text-ink",
                      )}
                    >
                      {s.title}
                    </h3>
                    <p className={cn("text-[18px] leading-[1.4]", s.active && "text-ink/60")}>{s.text}</p>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="relative h-[358px] w-[563px] shrink-0 overflow-hidden">
              <img src={img("0d0be.jpg")} alt="" className="absolute left-0 top-[-8.98%] h-[117.97%] w-full max-w-none" />
            </div>
          </div>
        </div>

        <div className="relative flex h-[131px] items-center justify-center overflow-hidden px-[58px]">
          <img
            src={img("9d808.png")}
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-[-131.21%] top-[0.12%] h-[1991.77%] w-[362.44%] max-w-none"
          />
          <div className="relative flex w-[1164px] items-center justify-between">
            <p className="w-[570px] text-[30px] font-medium leading-[1.24] tracking-[-1.2px] text-white">
              Not sure which one you need?
            </p>
            <Button variant="brand">Book a Free Strategy Call</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------ Video + process */

function Showreel() {
  return (
    <section className="relative mt-40 h-[750px] w-full">
      <img src={img("7eefb.jpg")} alt="" className="absolute inset-0 size-full object-cover" />
      <button
        type="button"
        aria-label="Play showreel"
        className="absolute left-1/2 top-[329px] flex -translate-x-1/2 items-center justify-end overflow-hidden rounded-[66.621px] bg-white/75 px-[31.724px] py-[30.138px]"
      >
        <img src={img("cb757.svg")} alt="" className="h-[31.724px] w-[28.552px]" />
      </button>
    </section>
  );
}

function HowWeWork() {
  return (
    <section className="h-[649px] bg-white pt-[47px]">
      <Container className="flex flex-col gap-[82px]">
        <div className="flex w-[316px] flex-col gap-[26px]">
          <h2 className="text-[52px] font-medium leading-[1.24] tracking-[-2.08px] text-ink">
            How we <span className="accent">work</span>
          </h2>
          <div className="flex">
            <Button variant="outline-muted" size="md">
              Book a Discovery Call
            </Button>
          </div>
        </div>
        <ProcessSteps
          steps={[
            { title: "Audit", description: "We map your funnel and rank every drop-off point by revenue impact, not opinion.", gap: 138 },
            { title: "Strategy", description: "You get a plan tied to your goals, priced and scoped before anything is billed.", gap: 138 },
            { title: "Design & Build", description: "We design and ship the fix, whether that is a page, a full site, or a brand system.", gap: 75 },
            { title: "Test & Optimize", description: "We measure what changed and keep refining, so the work keeps paying off after launch.", gap: 75 },
          ]}
        />
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ Recent work */

const projects = [
  {
    title: "Lumina Skincare",
    text: "Redesigned a slow storefront to fix high drop-offs on mobile product pages.",
    textClass: "text-[16px] font-normal",
    metric: "Mobile Conversions",
    value: "+42%",
    image: <img src={img("e1121.jpg")} alt="" className="absolute inset-0 size-full object-cover" />,
  },
  {
    title: "FlowPulse Analytics",
    text: "Rebuilt a complex onboarding flow to reduce drop-offs during initial signup.",
    textClass: "text-[20px] tracking-[-0.8px]",
    metric: "Trial To Paid",
    value: "+35%",
    image: (
      <>
        <div className="absolute inset-0 bg-[#27262b]" />
        <img src={img("e0218.jpg")} alt="" className="absolute left-[7.14%] top-[-8.83%] h-[121.22%] w-[85.63%] max-w-none" />
      </>
    ),
  },
  {
    title: "Nexus Digital",
    text: "Re-architected a cluttered agency site into a clean, high-converting funnel.",
    textClass: "text-[20px] tracking-[-0.8px]",
    metric: "Inbound Leads",
    value: "2.8x",
    image: <img src={img("c3366.jpg")} alt="" className="absolute inset-0 size-full object-cover" />,
  },
];

function RecentWork() {
  return (
    <section id="work" className="h-[2107px] bg-navy py-20">
      <Container className="flex items-start justify-between">
        <div className="flex w-[527px] flex-col justify-center gap-5">
          <h2 className="w-[492px] text-[60px] font-medium leading-[1.24] tracking-[-2.4px] text-white">
            Recent <span className="font-normal text-white/60">work</span>
          </h2>
          <p className="w-[576px] text-[18px] leading-[1.4] text-white/60">
            A sample of what we have shipped for ecommerce, SaaS, and service brands.
          </p>
        </div>

        <div className="flex w-[640px] flex-col gap-[60px]">
          {projects.map((p) => (
            <article key={p.title} className="flex flex-col gap-[30px]">
              <div className="relative h-[454px] w-full overflow-hidden">{p.image}</div>
              <div className="flex items-start justify-between font-medium">
                <div className="flex w-[300px] flex-col gap-[11px] leading-[1.4]">
                  <h3 className="text-[26px] text-white">{p.title}</h3>
                  <p className={cn("text-white/60", p.textClass)}>{p.text}</p>
                </div>
                <p className="whitespace-pre text-right leading-[1.4] tracking-[-0.8px] text-white/60">
                  <span className="text-[20px]">{p.metric}  </span>
                  <span className="text-[36px] text-brand-stat">{p.value}</span>
                </p>
              </div>
            </article>
          ))}
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
    <div className="flex h-[396px] w-[339px] shrink-0 flex-col items-start bg-white py-6 pl-6 pr-[59px]">
      <div className="relative size-16 shrink-0 overflow-hidden">{reason.icon}</div>
      <div className="mt-[120px] flex w-[256px] flex-col gap-3">
        <h3 className="text-[23px] uppercase leading-[1.4] tracking-[-0.69px] text-ink">{reason.title}</h3>
        <p className="text-[16px] leading-[1.39] text-ink/60">{reason.text}</p>
      </div>
    </div>
  );
}

function Glow({ src, className }: { src: string; className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute size-[180px]", className)}>
      <img src={img(src)} alt="" className="absolute inset-[-158%] size-[416%] max-w-none" />
    </div>
  );
}

function WhyUs() {
  return (
    <section id="about" className="mt-40">
      <Container>
        <div className="relative h-[1090px]">
          <Glow src="3b89c.svg" className="left-[1230px] top-[373px]" />
          <Glow src="48178.svg" className="left-[677px] top-[495px]" />

          <h2 className="absolute left-0 top-0 w-[824px] text-[60px] font-medium leading-[1.24] tracking-[-2.4px] text-ink">
            Why teams choose <span className="accent">Krow Labs </span>
            <span className="text-[rgba(33,33,47,0.6)]">over a bigger</span> agency
          </h2>

          <div className="absolute left-0 top-[174px] flex w-[329px] flex-col gap-[30px]">
            <p className="h-[78px] text-[20px] capitalize leading-[1.28] tracking-[0.2px] text-ink/60">
              Most engagements start around [YOUR PRICE]. Full pricing on a strategy call.
            </p>
            <div className="flex">
              <Button variant="brand">Book a Free Strategy Call</Button>
            </div>
          </div>

          <div className="absolute left-[621px] top-[255px] flex gap-5">
            <ReasonCard reason={reasons.team} />
            <ReasonCard reason={reasons.data} />
          </div>
          <div className="absolute left-0 top-[694px] flex gap-5">
            <ReasonCard reason={reasons.growing} />
            <ReasonCard reason={reasons.fast} />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------- Testimonials */

const homeQuote =
  ' "No fluff, no endless account manager check-ins—just high-level strategy and fast execution that fixed our onboarding drop-offs."';

function Testimonials() {
  const avatars = ["cc230.png", "5ecdd.png", "bc556.png", "cc230.png"];
  return (
    <section className="mt-40 overflow-hidden bg-ink py-20">
      <div className="relative left-1/2 flex w-[1720px] -translate-x-1/2 flex-col items-center gap-5">
        <div className="flex w-full flex-col items-center gap-10">
          <h2 className="w-full text-center text-[60px] font-medium leading-[1.24] tracking-[-2.4px] text-white">
            What <span className="font-normal text-white/60">clients</span> say
          </h2>
          <div className="flex w-full items-center gap-10">
            {avatars.map((a, i) => (
              <TestimonialCard
                key={i}
                className="w-[400px]"
                quote={homeQuote}
                name="Jenkins"
                role="Product Lead at FlowPulse"
                avatar={a}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-[26px]">
          <button type="button" aria-label="Previous" className="flex size-[54px] -scale-x-100 items-center justify-center border-[0.75px] border-white p-[11.25px] opacity-30">
            <ArrowIcon src="8427d.svg" />
          </button>
          <button type="button" aria-label="Next" className="flex size-[54px] items-center justify-center border-[0.75px] border-white p-[11.25px]">
            <ArrowIcon src="b2bef.svg" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon({ src }: { src: string }) {
  return (
    <span className="flex size-[36.986px] items-center justify-center">
      <span className="relative size-[26.153px] rotate-45 overflow-hidden">
        <img src={img(src)} alt="" className="absolute left-1/4 top-[25.01%] h-1/2 w-1/2" />
      </span>
    </span>
  );
}

/* ------------------------------------------------------------------ Page */

export default function Index() {
  return (
    <main className="overflow-x-clip">
      <Hero />

      <div className="relative z-10 h-[268px]">
        <img src={img("27e4e.svg")} alt="" aria-hidden className="absolute inset-x-0 top-[78.5px] h-[201.5px] w-full" />
        <CrossRibbons />
      </div>

      <Problem />
      <WhatWeDo />
      <Showreel />
      <HowWeWork />
      <RecentWork />
      <WhyUs />
      <Testimonials />

      <Container className="mt-[161px]">
        <FaqSection
          heading={
            <h2 className="whitespace-nowrap text-[60px] font-medium leading-[1.24] tracking-[-2.4px] text-ink">
              Common <span className="accent">questions</span>
            </h2>
          }
          items={[
            {
              question: "How much does this cost?",
              answer:
                "[YOUR PRICE RANGE]. Book a free strategy call and we will scope it against your goals before anything is billed.",
            },
            { question: "How fast can we start?", align: "end" },
            { question: "Do you work with SaaS or ecommerce?", align: "end", questionWidth: 504 },
            {
              question: "Do I need a full redesign, or can you just fix what is not converting?",
              align: "center",
            },
          ]}
        />
      </Container>

      <CtaBanner
        className="mt-40"
        title="Ready to see what is costing you conversions?"
        subtitle="Book a free strategy call. No pitch deck, just a straight look at your funnel and where it is leaking."
        inset={78}
      />

      <Footer className="mt-[153px] h-[760px]" />
    </main>
  );
}
