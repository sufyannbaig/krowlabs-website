import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Reveal } from "@/components/motion/Reveal";
import { HeroGrid } from "@/components/sections/HeroBackdrop";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useSeo } from "@/lib/seo";

export default function NotFound() {
  useSeo({ title: "Page not found", description: "This page doesn't exist. Head back to Krow Labs." });
  return (
    <main className="overflow-x-clip">
      <section className="relative flex min-h-[80vh] items-center pb-24 pt-[200px] max-lg:pt-[140px]">
        <HeroGrid src="06d81.svg" />
        <Navbar />
        <Container className="relative flex flex-col items-start gap-6">
          <Reveal immediate>
            <p className="text-[140px] font-medium leading-none tracking-[-6px] text-ink max-lg:text-[90px]">
              4<span className="accent">0</span>4
            </p>
          </Reveal>
          <Reveal immediate delay={0.1}>
            <h1 className="text-[40px] font-medium leading-[1.15] tracking-[-1.4px] text-ink max-lg:text-[28px]">
              This page is not converting. Mostly because it doesn't exist.
            </h1>
          </Reveal>
          <Reveal immediate delay={0.2} className="flex flex-wrap gap-4">
            <Button variant="brand" size="md" href="/">
              Back to home
            </Button>
            <Button variant="outline" size="md" href="/work">
              See our work
            </Button>
          </Reveal>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
