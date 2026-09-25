import { Link, Navigate, useParams } from "react-router-dom";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/motion/Reveal";
import { Navbar } from "@/components/layout/Navbar";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { HeroGrid } from "@/components/sections/HeroBackdrop";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/work/Media";
import { WorkCard } from "@/components/work/WorkCard";
import { caseStudies, getCaseStudy, mediaFor, statFor } from "@/content/caseStudies";
import { services } from "@/content/services";
import { useSeo } from "@/lib/seo";

export default function CaseStudy() {
  const { slug = "" } = useParams();
  const study = getCaseStudy(slug);
  const media = mediaFor(slug);

  useSeo({
    title: study ? `${study.client} case study` : "Case study",
    description: study?.summary ?? "",
    image: media.cover?.type === "image" ? media.cover.src : undefined,
  });

  if (!study) return <Navigate to="/work" replace />;

  const stat = statFor(study);
  const primary = services[study.services[0]];
  const related = [
    ...caseStudies.filter((c) => c.slug !== slug && c.services.includes(study.services[0])),
    ...caseStudies.filter((c) => c.slug !== slug && !c.services.includes(study.services[0])),
  ].slice(0, 2);

  const meta = [
    { label: "Client", value: study.client },
    { label: "Industry", value: study.industry },
    { label: "Services", value: study.services.map((s) => services[s].short).join(", ") },
    { label: "Year", value: study.year },
  ];

  return (
    <main className="overflow-x-clip">
      <section className="relative pb-20 pt-[200px] max-lg:pb-10 max-lg:pt-[120px]">
        <HeroGrid src="06d81.svg" />
        <Navbar />
        <Container className="relative flex flex-col gap-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[16px] text-ink/60">
            <Link to="/work" className="hover:text-ink">
              Work
            </Link>
            <span>/</span>
            <Link to={primary.path} className="hover:text-ink">
              {primary.short}
            </Link>
          </nav>
          <div className="flex items-end justify-between gap-16 max-lg:flex-col max-lg:items-start max-lg:gap-6">
            <div className="flex max-w-[900px] flex-col gap-5">
              <Reveal immediate>
                <h1 className="text-[64px] font-medium leading-[1.1] tracking-[-3.2px] text-ink max-lg:text-[38px] max-lg:tracking-[-1.5px]">
                  {study.title}
                </h1>
              </Reveal>
              <Reveal immediate delay={0.1}>
                <p className="max-w-[720px] text-[20px] leading-[1.4] text-ink/60 max-lg:text-[17px]">{study.summary}</p>
              </Reveal>
            </div>
            <p className="flex shrink-0 flex-col items-end gap-1 text-right font-medium max-lg:items-start max-lg:text-left">
              <span className="text-[48px] leading-[1.1] tracking-[-1.5px] text-brand">{stat.value}</span>
              <span className="max-w-[260px] text-[16px] text-ink/60">{stat.label}</span>
            </p>
          </div>
          <dl className="grid grid-cols-4 gap-10 border-t border-ink/15 pt-6 max-lg:grid-cols-2 max-lg:gap-6">
            {meta.map((m) => (
              <div key={m.label} className="flex flex-col gap-2">
                <dt className="text-[14px] uppercase tracking-[0.5px] text-ink/50">{m.label}</dt>
                <dd className="text-[18px] text-ink">{m.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <Container>
        <Reveal immediate delay={0.2} y={50}>
          <Media item={media.cover} alt={study.title} eager className="aspect-[16/9] w-full" />
        </Reveal>
      </Container>

      <Container className="mt-[120px] flex flex-col gap-[72px] max-lg:mt-16 max-lg:gap-10">
        {study.sections.map((s) => (
          <Reveal as="section" key={s.heading} className="flex items-start justify-between gap-16 border-t border-ink/15 pt-8 max-lg:flex-col max-lg:gap-4">
            <h2 className="w-[400px] shrink-0 text-[40px] font-medium leading-[1.24] tracking-[-1.6px] text-ink max-lg:w-auto max-lg:text-[28px]">
              {s.heading}
            </h2>
            <div className="flex max-w-[760px] flex-col gap-5 text-[20px] leading-[1.5] text-ink/70 max-lg:text-[17px]">
              {s.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>
        ))}

        <Reveal as="section" className="flex items-start justify-between gap-16 border-t border-ink/15 pt-8 max-lg:flex-col max-lg:gap-4">
          <h2 className="w-[400px] shrink-0 text-[40px] font-medium leading-[1.24] tracking-[-1.6px] text-ink max-lg:w-auto max-lg:text-[28px]">
            Deliverables
          </h2>
          <div className="flex max-w-[760px] flex-1 flex-col gap-8">
            <ul className="flex flex-wrap gap-3">
              {study.deliverables.map((d) => (
                <li key={d} className="border border-ink/20 px-4 py-2 text-[16px] text-ink">
                  {d}
                </li>
              ))}
            </ul>
            <p className="text-[16px] text-ink/60">Tools: {study.tools.join(", ")}</p>
          </div>
        </Reveal>
      </Container>

      {media.gallery.length > 0 && (
        <Container className="mt-[120px] flex flex-col gap-6 max-lg:mt-16 max-lg:gap-3">
          {media.gallery.map((item, i) => (
            <Reveal key={item.src} y={50}>
            <Media
              item={item}
              alt={`${study.client}: project image ${i + 1}`}
              fit={item.type === "video" ? "cover" : "natural"}
              eager={i < 2}
              className={item.type === "video" ? "aspect-[16/9] w-full" : "w-full"}
            />
            </Reveal>
          ))}
        </Container>
      )}

      <Container className="mt-20 flex justify-center">
        <Button variant="outline" href={study.source.url} target="_blank" rel="noreferrer">
          {study.source.label}
        </Button>
      </Container>

      <section className="mt-40 bg-ink py-20 max-lg:mt-24 max-lg:py-16">
        <Container className="flex flex-col gap-[60px]">
          <div className="flex items-end justify-between max-lg:flex-col max-lg:items-start max-lg:gap-4">
            <h2 className="text-[60px] font-medium leading-[1.24] tracking-[-2.4px] text-white max-lg:text-[36px] max-lg:tracking-[-1.2px]">
              More <span className="font-normal text-white/60">work</span>
            </h2>
            <Button variant="outline-white" size="md" href="/work">
              View all work
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1">
            {related.map((c) => (
              <WorkCard key={c.slug} study={c} theme="dark" imageClassName="aspect-[4/3]" />
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        className="mt-40 max-lg:mt-24"
        title="Want results like this for your brand?"
        subtitle="Book a free strategy call. No pitch deck, just a straight look at what is holding you back."
      />

      <Footer className="mt-40 max-lg:mt-24" />
    </main>
  );
}
