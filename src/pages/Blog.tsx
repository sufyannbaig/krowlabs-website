import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Reveal } from "@/components/motion/Reveal";
import { PostCard } from "@/components/blog/PostCard";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { HeroGrid } from "@/components/sections/HeroBackdrop";
import { Container } from "@/components/ui/Container";
import { staticPages } from "@/content/pages";
import { posts } from "@/content/posts";
import { useSeo } from "@/lib/seo";

export default function Blog() {
  useSeo(staticPages["/blog"]);
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="overflow-x-clip">
      <section className="relative pb-[60px] pt-[200px] max-lg:pb-10 max-lg:pt-[120px]">
        <HeroGrid src="06d81.svg" />
        <Navbar />
        <Container className="relative flex items-end justify-between gap-16 max-lg:flex-col max-lg:items-start max-lg:gap-4">
          <Reveal immediate>
            <h1 className="text-[72px] font-medium leading-[1.2] tracking-[-4px] text-ink max-lg:text-[44px] max-lg:tracking-[-1.8px]">
              Insights
            </h1>
          </Reveal>
          <Reveal immediate delay={0.1}>
            <p className="max-w-[520px] text-[18px] leading-[1.4] text-ink/60 max-lg:text-[16px]">
              What we have learned designing and fixing the pages customers actually see: conversion, landing pages,
              ecommerce, SaaS and ad creative.
            </p>
          </Reveal>
        </Container>
      </section>

      <Container className="grid grid-cols-2 gap-x-10 gap-y-20 max-lg:grid-cols-1 max-lg:gap-y-12">
        {sorted.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.1} y={40}>
            <PostCard post={p} />
          </Reveal>
        ))}
      </Container>

      <CtaBanner
        className="mt-40 max-lg:mt-24"
        title="Want us to look at your site?"
        subtitle="Book a free strategy call, or get a free conversion audit of your key page by email."
      />

      <Footer className="mt-40 max-lg:mt-24" />
    </main>
  );
}
