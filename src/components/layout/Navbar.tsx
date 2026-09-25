import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { img } from "@/lib/utils";

const links = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
];

export function Navbar() {
  return (
    <header className="absolute inset-x-0 top-[46px] z-30">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-[60px]">
        <Link to="/" aria-label="Krow Labs home">
          <img src={img("c73e4.svg")} alt="Krow Labs" width={178.622} height={26} className="h-[26px] w-[178.622px]" />
        </Link>
        <nav className="flex items-center gap-[50px] text-[18px] leading-[1.4] tracking-[-0.36px] text-ink">
          {links.map((l) => (
            <Link key={l.label} to={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Button variant="gradient" raised>
          Book a Free Strategy Call
        </Button>
      </div>
    </header>
  );
}
