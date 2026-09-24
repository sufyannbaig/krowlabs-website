import { Button, type ButtonVariant } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { img } from "@/lib/utils";

type Props = {
  title: string;
  subtitle?: string;
  buttonVariant?: ButtonVariant;
  /** Left inset of the copy inside the orange panel. */
  inset?: number;
  contentWidth?: number;
  titleWidth?: number;
  className?: string;
};

/** Orange gradient "Ready to…" panel with a diagonal texture overlay. */
export function CtaBanner({
  title,
  subtitle,
  buttonVariant = "white",
  inset = 72,
  contentWidth = 751,
  titleWidth = 708,
  className,
}: Props) {
  return (
    <Container className={className}>
      <div className="relative flex h-[509px] items-center overflow-hidden bg-brand-cta">
        <img
          src={img("c959a.jpg")}
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-[-0.03%] top-[-51.98%] h-[402.9%] w-[100.03%] max-w-none opacity-[0.26]"
        />
        <div className="relative flex flex-col items-start gap-5" style={{ marginLeft: inset, width: contentWidth }}>
          <div className="flex flex-col gap-5 text-white" style={{ width: titleWidth }}>
            <h2 className="text-[60px] font-medium leading-[1.11] tracking-[-2.4px]">{title}</h2>
            {subtitle && (
              <p className="h-[78px] text-[20px] capitalize leading-[1.28] tracking-[0.2px]">{subtitle}</p>
            )}
          </div>
          <Button variant={buttonVariant} size="md">
            Book a Free Strategy Call
          </Button>
        </div>
      </div>
    </Container>
  );
}
