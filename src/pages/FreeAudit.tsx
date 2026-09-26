import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Reveal } from "@/components/motion/Reveal";
import { HeroGrid } from "@/components/sections/HeroBackdrop";
import { TestimonialTicker } from "@/components/sections/TestimonialTicker";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { auditFormEndpoint, bookingUrl } from "@/content/site";
import { provenResults, testimonials } from "@/content/testimonials";
import { track } from "@/lib/analytics";
import { staticPages } from "@/content/pages";
import { useSeo } from "@/lib/seo";
import { cn } from "@/lib/utils";

const includes = [
  "A review of your key page (home, product or landing page) on desktop and mobile",
  "The 3–5 biggest conversion leaks, ranked by expected impact",
  "Concrete fixes for each one, not just a list of problems",
  "Delivered by email within a few business days, no call required",
];

const field =
  "w-full border border-ink/15 bg-white px-4 py-3.5 text-[16px] text-ink outline-none transition-colors placeholder:text-ink/35 focus:border-ink";

type Status = "idle" | "sending" | "sent" | "mailto" | "error";

export default function FreeAudit() {
  useSeo(staticPages["/free-audit"]);
  const [status, setStatus] = useState<Status>("idle");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    if (data.company) return; // honeypot: bots fill hidden fields
    track("audit_request", { website: data.website });

    if (!auditFormEndpoint) {
      // No form backend configured yet: hand off to the visitor's email app, pre-filled.
      const body = [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Website: ${data.website}`,
        "",
        "What's not converting:",
        data.problem || "-",
      ].join("\n");
      window.location.href = `mailto:sales@krowlabs.com?subject=${encodeURIComponent(
        `Free conversion audit: ${data.website}`,
      )}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(auditFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, source: "krowlabs.com/free-audit" }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const done = status === "sent" || status === "mailto";

  return (
    <main className="overflow-x-clip">
      <section className="relative pb-24 pt-[200px] max-lg:pb-16 max-lg:pt-[120px]">
        <HeroGrid src="06d81.svg" />
        <Navbar />
        <Container className="relative flex items-start justify-between gap-16 max-lg:flex-col max-lg:gap-10">
          <div className="flex w-[600px] flex-col gap-8 max-lg:w-auto">
            <Reveal immediate>
              <h1 className="text-[64px] font-medium leading-[1.1] tracking-[-3.2px] text-ink max-lg:text-[40px] max-lg:tracking-[-1.6px]">
                Get a free <span className="accent">conversion</span> audit.
              </h1>
            </Reveal>
            <Reveal immediate delay={0.1}>
              <p className="text-[20px] leading-[1.4] text-ink/60 max-lg:text-[17px]">
                Send us your site. We will find where it is losing customers and tell you exactly what to fix first.
              </p>
            </Reveal>
            <Reveal immediate delay={0.2}>
              <ul className="flex flex-col gap-4 border-t border-ink/15 pt-6">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[18px] leading-[1.4] text-ink max-lg:text-[16px]">
                    <span aria-hidden className="mt-2 size-2 shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal immediate delay={0.3}>
              <div className="grid grid-cols-3 gap-6 border-t border-ink/15 pt-6 max-sm:grid-cols-1">
                {provenResults.map((r) => (
                  <div key={r.value} className="flex flex-col gap-1">
                    <span className="text-[28px] font-medium leading-[1.2] tracking-[-0.8px] text-brand">{r.value}</span>
                    <span className="text-[14px] leading-[1.4] text-ink/60">{r.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal immediate delay={0.15} y={40} className="w-[560px] max-lg:w-full">
            <div className="bg-white p-10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.3)] max-lg:p-6">
              <AnimatePresence mode="wait">
                {done ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-start gap-4"
                  >
                    <h2 className="text-[32px] font-medium leading-[1.2] tracking-[-1px] text-ink">
                      {status === "sent" ? "Got it, thank you." : "Almost there."}
                    </h2>
                    <p className="text-[17px] leading-[1.5] text-ink/60">
                      {status === "sent"
                        ? "We will review your site and email your audit within a few business days."
                        : "Your email app should have opened with your request filled in. Hit send and we will get started. If nothing opened, email sales@krowlabs.com."}
                    </p>
                    <p className="text-[17px] leading-[1.5] text-ink/60">Rather talk it through now?</p>
                    <Button variant="brand" size="md" href={bookingUrl}>
                      Book a Free Strategy Call
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={submit} className="flex flex-col gap-5" exit={{ opacity: 0, y: -10 }}>
                    <h2 className="text-[28px] font-medium leading-[1.2] tracking-[-0.8px] text-ink">Request your audit</h2>
                    <label className="flex flex-col gap-2 text-[14px] font-medium text-ink">
                      Your name
                      <input name="name" required autoComplete="name" className={field} placeholder="Jane Doe" />
                    </label>
                    <label className="flex flex-col gap-2 text-[14px] font-medium text-ink">
                      Work email
                      <input name="email" type="email" required autoComplete="email" className={field} placeholder="jane@company.com" />
                    </label>
                    <label className="flex flex-col gap-2 text-[14px] font-medium text-ink">
                      Website or page to audit
                      <input name="website" type="url" required className={field} placeholder="https://yourstore.com" />
                    </label>
                    <label className="flex flex-col gap-2 text-[14px] font-medium text-ink">
                      What's not converting? <span className="font-normal text-ink/45">(optional)</span>
                      <textarea
                        name="problem"
                        rows={4}
                        className={cn(field, "resize-none")}
                        placeholder="e.g. lots of ad traffic to our product page but very few add-to-carts"
                      />
                    </label>
                    {/* honeypot, hidden from people */}
                    <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
                    {status === "error" && (
                      <p className="text-[15px] text-[#c0392b]">
                        Something went wrong sending the form. Please email sales@krowlabs.com instead.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="mt-2 bg-brand-button px-5 py-[14px] text-[18px] font-medium text-white transition-[filter,transform] duration-300 hover:-translate-y-0.5 hover:brightness-110 disabled:opacity-60"
                    >
                      {status === "sending" ? "Sending…" : "Get my free audit"}
                    </button>
                    <p className="text-[13px] leading-[1.4] text-ink/45">
                      No spam. We only use your details to send the audit.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="overflow-x-clip bg-ink py-16">
        <Container>
          <h2 className="text-center text-[36px] font-medium tracking-[-1.2px] text-white max-lg:text-[28px]">
            What <span className="font-normal text-white/60">clients</span> say
          </h2>
        </Container>
        <TestimonialTicker items={[testimonials.gkTraining, testimonials.contraLandingPage, testimonials.contraDeveloper]} />
      </section>

      <Footer className="mt-0" />
    </main>
  );
}
