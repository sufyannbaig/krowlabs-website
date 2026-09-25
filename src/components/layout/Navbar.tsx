import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";
import { img } from "@/lib/utils";

const links = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
];

const serviceBlurbs: Record<string, string> = {
  "/services/cro": "Audits and fixes ranked by revenue impact",
  "/services/web-development": "Landing pages and marketing sites, fast",
  "/services/ui-ux-design": "SaaS and mobile product design",
  "/services/brand-identity": "Logos, identity systems and guidelines",
  "/services/digital-advertising": "Ad creative that matches the landing page",
};

/** "Services ⌄" with a dropdown that opens on hover (and on keyboard focus). */
function ServicesMenu({ href }: { href: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget as Node) && setOpen(false)}
    >
      <Link to={href} aria-haspopup="true" aria-expanded={open} className="flex items-center gap-1.5 transition-colors hover:text-brand">
        Services
        <motion.svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </Link>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute left-1/2 top-full z-40 -translate-x-1/2 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="w-[380px] border border-ink/10 bg-white p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)]">
              {Object.values(services).map((s) => (
                <li key={s.path}>
                  <Link to={s.path} className="group/item flex flex-col px-4 py-3 transition-colors hover:bg-page">
                    <span className="text-[17px] text-ink transition-colors group-hover/item:text-brand">{s.name}</span>
                    <span className="text-[14px] tracking-normal text-ink/50">{serviceBlurbs[s.path]}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-[46px] z-30 max-lg:top-5">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-[60px] max-lg:px-5">
        <Link to="/" aria-label="Krow Labs home" className="relative z-50">
          <img
            src={img("c73e4.svg")}
            alt="Krow Labs"
            width={178.622}
            height={26}
            className="h-[26px] w-[178.622px] max-lg:h-[22px] max-lg:w-[151px]"
          />
        </Link>
        <nav className="flex items-center gap-[50px] text-[18px] leading-[1.4] tracking-[-0.36px] text-ink max-lg:hidden">
          {links.map((l) =>
            l.label === "Services" ? (
              <ServicesMenu key={l.label} href={l.href} />
            ) : (
              <Link key={l.label} to={l.href} className="transition-colors hover:text-brand">
                {l.label}
              </Link>
            ),
          )}
        </nav>
        <Button variant="gradient" raised className="max-lg:hidden">
          Book a Free Strategy Call
        </Button>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex size-11 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-[4px] rotate-45" : ""}`}
          />
          <span
            className={`h-[2px] w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-page px-5 pb-10 pt-[100px] lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.05, duration: 0.4 }}
                >
                  <Link to={l.href} onClick={close} className="block py-2 text-[40px] font-medium leading-[1.1] tracking-[-1.6px] text-ink">
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3 border-t border-ink/15 pt-6">
              <p className="text-[14px] uppercase tracking-[0.5px] text-ink/50">Services</p>
              {Object.values(services).map((s) => (
                <Link key={s.path} to={s.path} onClick={close} className="text-[18px] text-ink/80">
                  {s.name}
                </Link>
              ))}
            </div>
            <Button variant="gradient" onClick={close} className="mt-10 self-start">
              Book a Free Strategy Call
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
