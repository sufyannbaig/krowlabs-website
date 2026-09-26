import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { HeroGrid } from "@/components/sections/HeroBackdrop";
import { TestimonialTicker } from "@/components/sections/TestimonialTicker";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { caseStudies } from "@/content/caseStudies";
import { featuredTestimonials } from "@/content/testimonials";
import { staticPages } from "@/content/pages";
import { useSeo } from "@/lib/seo";

// Update the numbers here as they grow.
const stats = [
  { value: "5+", label: "Years designing for ecommerce and SaaS brands" },
  { value: "25+", label: "Projects shipped for growing brands worldwide" },
  { value: "5", label: "Services under one roof, from brand to build" },
  { value: String(caseStudies.length), label: "Case studies across all five disciplines" },
];

const principles = [
  {
    title: "Outcome over decoration",
    text: "We don't do beautification for its own sake. Every design decision is explained in terms of what it does for the business: more sign-ups, more sales, more trust.",
  },
  {
    title: "One partner, not five freelancers",
    text: "Brand, UI/UX, landing pages, ad creative and development under one roof, so the ad, the page and the product all tell the same story.",
  },
  {
    title: "Audit first, then design",
    text: "We start by finding where your funnel leaks and rank fixes by expected impact, so the first thing we ship is the thing most likely to pay off.",
  },
  {
    title: "Senior hands on your project",
    text: "No account-manager layer. The people you talk to are the people designing and building your work.",
  },
];

/** Sufyan's own profiles (the company profiles live in the footer). */
const founderLinks = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/sufyanbaig/" },
  { label: "Behance", url: "https://www.behance.net/sufyannbaig" },
];
const founderCallUrl = "https://cal.com/sufyanbaig/15min";

const experience = ["Krow Labs · Creative Director", "Teqnite · Sr. Graphic & UI Designer", "Gexton · Graphic Designer"];

export default function About() {
  useSeo(staticPages["/about"]);

  return (
    <main className="overflow-x-clip">
      <section className="relative pb-20 pt-[200px] max-lg:pb-12 max-lg:pt-[120px]">
        <HeroGrid src="06d81.svg" />
        <Navbar />
        <Container className="relative flex flex-col gap-8">
          <Reveal immediate>
            <h1 className="max-w-[1000px] text-[72px] font-medium leading-[1.1] tracking-[-3.6px] text-ink max-lg:text-[42px] max-lg:tracking-[-1.8px]">
              A small senior team built around one goal: <span className="accent">conversions.</span>
            </h1>
          </Reveal>
          <Reveal immediate delay={0.1}>
            <p className="max-w-[720px] text-[20px] leading-[1.45] text-ink/60 max-lg:text-[17px]">
              Krow Labs designs and optimizes the pages your customers actually see. We are a creative partner with business
              sense, not a vendor that makes things look pretty and hopes for the best.
            </p>
          </Reveal>
        </Container>
      </section>

      <Container>
        <div className="grid grid-cols-4 gap-6 border-t border-ink/15 pt-8 max-lg:grid-cols-2">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="flex flex-col gap-2">
              <span className="text-[48px] font-medium leading-[1.1] tracking-[-1.8px] text-brand max-lg:text-[34px]">{s.value}</span>
              <span className="text-[16px] leading-[1.4] text-ink/60">{s.label}</span>
            </Reveal>
          ))}
        </div>
      </Container>

      <section className="mt-32 max-lg:mt-20">
        <Container className="flex items-center justify-between gap-16 max-lg:flex-col max-lg:items-start max-lg:gap-10">
          <Reveal y={40} className="w-[520px] shrink-0 max-lg:w-full">
            <img
              src="/images/team/sufyan-baig.webp"
              alt="Sufyan Baig, founder and creative director of Krow Labs"
              width={800}
              height={800}
              className="aspect-square w-full object-cover"
            />
          </Reveal>
          <div className="flex max-w-[640px] flex-col gap-6">
            <Reveal>
              <p className="text-[16px] uppercase tracking-[0.5px] text-ink/50">Founder & Creative Director</p>
              <h2 className="mt-2 text-[52px] font-medium leading-[1.15] tracking-[-2px] text-ink max-lg:text-[34px]">
                Sufyan <span className="accent">Baig</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col gap-4 text-[18px] leading-[1.55] text-ink/70 max-lg:text-[16px]">
              <p>
                Sufyan is a UX/UI and brand designer for SaaS and ecommerce teams, based in Hyderabad, Pakistan. He started
                Krow Labs to give growing brands one creative partner who can handle brand identity, product design,
                conversion-focused landing pages, ad creative and development, and explain the business reasoning behind
                every decision.
              </p>
              <p>
                Before Krow Labs he designed for studios including Teqnite and Gexton. Today he works with founders
                and growth teams from DTC stores on Shopify to SaaS platforms and AI startups, and holds the Google UX
                Design Professional Certificate.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="flex flex-wrap gap-2">
                {experience.map((e) => (
                  <li key={e} className="border border-ink/15 px-3 py-1.5 text-[14px] text-ink/70">
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.3} className="flex flex-wrap items-center gap-4">
              <Button variant="brand" size="md" href={founderCallUrl}>
                Talk 1:1 with Sufyan
              </Button>
              {founderLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[16px] text-ink/60 underline-offset-4 hover:text-ink hover:underline"
                >
                  {s.label} <span aria-hidden>↗</span>
                </a>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="mt-32 bg-ink py-24 max-lg:mt-20 max-lg:py-16">
        <Container className="flex flex-col gap-12">
          <Reveal>
            <h2 className="text-[52px] font-medium leading-[1.2] tracking-[-2px] text-white max-lg:text-[34px]">
              How we <span className="font-normal text-white/60">think</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-16 gap-y-12 max-lg:grid-cols-1 max-lg:gap-8">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.1} className="flex flex-col gap-3 border-t border-white/20 pt-6">
                <span className="text-[16px] text-white/40">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-[30px] font-medium leading-[1.2] tracking-[-0.8px] text-white max-lg:text-[24px]">{p.title}</h3>
                <p className="text-[17px] leading-[1.5] text-white/60">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="overflow-x-clip py-20 max-lg:py-16">
        <Container className="flex items-end justify-between gap-6 max-lg:flex-col max-lg:items-start">
          <Reveal>
            <h2 className="text-[52px] font-medium leading-[1.2] tracking-[-2px] text-ink max-lg:text-[34px]">
              What <span className="accent">clients</span> say
            </h2>
          </Reveal>
          <Button variant="outline" size="md" href="/work">
            See our work
          </Button>
        </Container>
        <TestimonialTicker items={featuredTestimonials} />
      </section>

      <CtaBanner
        className="mt-10"
        title="Ready to see what is costing you conversions?"
        subtitle="Book a free strategy call. No pitch deck, just a straight look at your funnel and where it is leaking."
        inset={78}
      />
      <Footer className="mt-40 max-lg:mt-24" />
    </main>
  );
}
