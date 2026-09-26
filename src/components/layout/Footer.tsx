import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, type MouseEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { socials } from "@/content/site";
import { cn } from "@/lib/utils";

const columns = [
  { title: "Site", width: "w-[118px]", links: [["Services", "/#services"], ["Work", "/work"], ["About", "/about"], ["Free audit", "/free-audit"]] },
  { title: "Careers", links: [["hr@krowlabs.com", "mailto:hr@krowlabs.com"]] },
  {
    title: "Connect",
    width: "w-[118px]",
    links: socials.filter((l) => l.url).map((l) => [l.label, l.url as string]),
  },
];

/**
 * Footer block: 6px brand line, white panel and the oversized "Krow Labs" wordmark,
 * which is cropped by the bottom edge of the page like in the design.
 */
export function Footer({ className }: { className?: string }) {
  return (
    <footer id="contact" className={cn("relative h-[753px] overflow-hidden max-lg:h-auto max-lg:bg-white", className)}>
      <div className="h-[6px] w-full bg-brand-line" />
      <div className="absolute inset-x-0 top-[7px] h-[747px] bg-white max-lg:hidden" />

      <div className="relative mx-auto h-full max-w-[1440px] max-lg:flex max-lg:flex-col">
        <MobileFooter />

        <div className="absolute left-[60px] top-[93px] flex w-[1298px] flex-col gap-10 max-lg:hidden">
          <Reveal className="flex items-center justify-between max-lg:flex-col max-lg:items-start max-lg:gap-5">
            <a
              href="mailto:sales@krowlabs.com"
              className="bg-gradient-to-r from-black to-brand to-[78.846%] bg-clip-text text-[48px] leading-[1.3] tracking-[-0.48px] text-transparent max-lg:text-[30px]"
            >
              sales@krowlabs.com
            </a>
            <Button variant="brand" size="md">
              Book a Free Strategy Call
            </Button>
          </Reveal>
          <div className="relative h-0 w-[1243.5px] max-lg:w-full">
            <div className="absolute inset-x-0 -top-[0.5px] h-px bg-black/[0.19]" />
          </div>
        </div>

        <p className="absolute left-[62px] top-[242px] w-[445px] text-[22px] capitalize leading-[1.28] tracking-[0.22px] text-black/60 max-lg:hidden">
          © 2026 Krow Labs. All rights reserved.
        </p>
        <p className="absolute left-[62px] top-[312px] w-[358px] text-[20px] font-medium leading-[1.3] tracking-[-0.4px] text-black/60 max-lg:hidden">
          We design, develop, and deliver digital experiences that help businesses innovate, grow, and lead with confidence.
        </p>

        <div className="absolute left-[863px] top-[242px] flex w-[517px] items-start gap-[50px] max-lg:hidden">
          {columns.map((col, i) => (
            <Reveal key={col.title} delay={0.1 + i * 0.08} className={cn("flex flex-col gap-[25px] leading-[1.3]", col.width)}>
              <p className="whitespace-nowrap text-[24px] capitalize tracking-[0.24px] text-black">{col.title}</p>
              <ul className="flex flex-col gap-3 text-[16px] tracking-[-0.16px] text-black/60">
                {col.links.map(([label, href]) => (
                  <li key={label} className="whitespace-nowrap">
                    <FooterLink href={href} className="transition-colors hover:text-brand">
                      {label}
                    </FooterLink>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Wordmark />
      </div>
    </footer>
  );
}

function FooterLink({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  if (href.startsWith("/")) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
      {children}
    </a>
  );
}

/** Phone layout: a dark call-to-action card, link groups, social chips and the wordmark. */
function MobileFooter() {
  const [site, careers, connect] = columns;
  return (
    <div className="flex flex-col gap-10 px-5 pt-10 lg:hidden">
      <Reveal className="relative overflow-hidden bg-ink p-6 text-white">
        <div aria-hidden className="absolute -right-16 -top-16 size-48 rounded-full bg-brand/30 blur-3xl" />
        <p className="relative text-[13px] font-medium uppercase tracking-[1.2px] text-white/50">Have a project in mind?</p>
        <p className="relative mt-3 text-[32px] font-medium leading-[1.1] tracking-[-1.2px]">
          Let’s make your site <span className="accent">sell.</span>
        </p>
        <Button variant="gradient" className="relative mt-6 w-full">
          Book a Free Strategy Call
        </Button>
        <a href="mailto:sales@krowlabs.com" className="relative mt-4 flex items-center justify-center gap-2 text-[16px] text-white/70">
          or email <span className="text-white underline decoration-white/30 underline-offset-4">sales@krowlabs.com</span>
        </a>
      </Reveal>

      <p className="text-[17px] font-medium leading-[1.4] tracking-[-0.3px] text-black/60">
        We design, develop, and deliver digital experiences that help businesses innovate, grow, and lead with confidence.
      </p>

      <div className="grid grid-cols-2 gap-6 border-t border-black/10 pt-8">
        {[site, careers].map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <p className="text-[13px] font-medium uppercase tracking-[1.2px] text-black/40">{col.title}</p>
            <ul className="flex flex-col gap-2.5 text-[17px] text-ink">
              {col.links.map(([label, href]) => (
                <li key={label}>
                  <FooterLink href={href} className="break-all">
                    {label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-[13px] font-medium uppercase tracking-[1.2px] text-black/40">{connect.title}</p>
        <ul className="flex flex-wrap gap-2">
          {connect.links.map(([label, href]) => (
            <li key={label}>
              <FooterLink
                href={href}
                className="inline-flex items-center gap-1.5 rounded-full border border-black/15 px-4 py-2 text-[15px] text-ink transition-colors active:bg-ink active:text-white"
              >
                {label} <span aria-hidden className="text-black/40">↗</span>
              </FooterLink>
            </li>
          ))}
        </ul>
      </div>

      <p className="border-t border-black/10 pt-6 text-[14px] text-black/50">© 2026 Krow Labs. All rights reserved.</p>
    </div>
  );
}

/**
 * Oversized "KrowLabs" wordmark, cropped by the page bottom. On hover an orange
 * "Let's talk" bubble follows the cursor; clicking starts an email.
 */
function Wordmark() {
  const [hover, setHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 350, damping: 30, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 350, damping: 30, mass: 0.5 });

  const move = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    // Convert viewport px to the element's own px (the page may be zoomed on laptops).
    const k = el.offsetWidth / r.width;
    x.set((e.clientX - r.left) * k);
    y.set((e.clientY - r.top) * k);
  };

  return (
    <a
      href="mailto:sales@krowlabs.com"
      aria-label="Let's talk: email sales@krowlabs.com"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={move}
      className="absolute left-[calc(50%-747px)] top-[471px] block cursor-none whitespace-nowrap text-[344.398px] font-semibold leading-[1.11] tracking-[-13.7759px] text-ink max-lg:static max-lg:-mb-[4vw] max-lg:mt-6 max-lg:cursor-pointer max-lg:px-3 max-lg:text-[21.5vw] max-lg:tracking-[-0.045em]"
    >
      <span aria-hidden>
        Krow<span className="font-serif font-normal italic leading-none">Labs</span>
      </span>
      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 flex size-[150px] items-center justify-center rounded-full bg-brand text-[20px] font-medium leading-none tracking-[-0.4px] text-white max-lg:hidden"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
        initial={false}
        animate={{ scale: hover ? 1 : 0, opacity: hover ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      >
        Let’s talk
      </motion.span>
    </a>
  );
}
