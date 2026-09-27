import { Fragment, type ReactNode } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { PostCard } from "@/components/blog/PostCard";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Reveal } from "@/components/motion/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { HeroGrid } from "@/components/sections/HeroBackdrop";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WorkCard } from "@/components/work/WorkCard";
import { getCaseStudy } from "@/content/caseStudies";
import { postMeta } from "@/content/pages";
import { AUTHOR, formatDate, getPost, posts, readingMinutes, type PostBlock } from "@/content/posts";
import { services } from "@/content/services";
import { auditUrl } from "@/content/site";
import { useSeo } from "@/lib/seo";

/** Renders **bold** and [text](href) inside a line of post text. */
function Inline({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) {
      parts.push(
        <strong key={m.index} className="font-medium text-ink">
          {m[1]}
        </strong>,
      );
    } else {
      const [label, href] = [m[2], m[3]];
      const cls = "text-ink underline decoration-brand decoration-2 underline-offset-4 transition-colors hover:text-brand";
      parts.push(
        href.startsWith("/") ? (
          <Link key={m.index} to={href} className={cls}>
            {label}
          </Link>
        ) : (
          <a key={m.index} href={href} target="_blank" rel="noreferrer" className={cls}>
            {label}
          </a>
        ),
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts.map((p, i) => (typeof p === "string" ? <Fragment key={i}>{p}</Fragment> : p))}</>;
}

function Block({ block }: { block: PostBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-8 text-[34px] font-medium leading-[1.2] tracking-[-1px] text-ink max-lg:mt-4 max-lg:text-[26px]">
          <Inline text={block.text} />
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-4 text-[24px] font-medium leading-[1.3] tracking-[-0.5px] text-ink max-lg:text-[20px]">
          <Inline text={block.text} />
        </h3>
      );
    case "list": {
      const List = block.ordered ? "ol" : "ul";
      return (
        <List className={block.ordered ? "flex list-decimal flex-col gap-3 pl-6" : "flex flex-col gap-3"}>
          {block.items.map((item) => (
            <li key={item.slice(0, 32)} className={block.ordered ? "pl-2 marker:text-brand" : "flex gap-3"}>
              {!block.ordered && <span aria-hidden className="mt-[11px] size-2 shrink-0 rounded-full bg-brand" />}
              <span>
                <Inline text={item} />
              </span>
            </li>
          ))}
        </List>
      );
    }
    case "callout":
      return (
        <aside className="my-4 border-l-4 border-brand bg-white p-8 max-lg:p-5">
          {block.title && <p className="mb-2 text-[18px] font-medium text-ink">{block.title}</p>}
          <p>
            <Inline text={block.text} />
          </p>
        </aside>
      );
    default:
      return (
        <p>
          <Inline text={block.text} />
        </p>
      );
  }
}

export default function Post() {
  const { slug = "" } = useParams();
  const post = getPost(slug);
  useSeo(postMeta(slug) ?? { title: "Insights", description: "" });

  if (!post) return <Navigate to="/blog" replace />;

  const service = services[post.service];
  const related = post.related.map(getCaseStudy).filter((c) => c !== undefined);
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main className="overflow-x-clip">
      <section className="relative pb-16 pt-[200px] max-lg:pb-10 max-lg:pt-[120px]">
        <HeroGrid src="06d81.svg" />
        <Navbar />
        <Container className="relative flex max-w-[1000px] flex-col gap-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[16px] text-ink/60">
            <Link to="/blog" className="hover:text-ink">
              Insights
            </Link>
            <span>/</span>
            <Link to={service.path} className="hover:text-ink">
              {service.short}
            </Link>
          </nav>
          <Reveal immediate>
            <h1 className="text-[56px] font-medium leading-[1.1] tracking-[-2.6px] text-ink max-lg:text-[34px] max-lg:tracking-[-1.2px]">
              {post.title}
            </h1>
          </Reveal>
          <Reveal immediate delay={0.1}>
            <p className="text-[21px] leading-[1.45] text-ink/60 max-lg:text-[17px]">{post.description}</p>
          </Reveal>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink/15 pt-6 text-[15px] text-ink/60">
            <Link to="/about" className="font-medium text-ink hover:text-brand">
              {AUTHOR.name}
            </Link>
            <span>{AUTHOR.role}</span>
            <span>{formatDate(post.date)}</span>
            <span>{readingMinutes(post)} min read</span>
          </div>
        </Container>
      </section>

      <Container className="max-w-[1000px]">
        <Reveal immediate delay={0.2} y={40}>
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-ink/5">
            <img src={post.cover} alt="" className="absolute inset-0 size-full object-cover" />
          </div>
        </Reveal>
      </Container>

      <Container className="mt-16 max-w-[1000px] max-lg:mt-10">
        <article className="mx-auto flex max-w-[720px] flex-col gap-6 text-[19px] leading-[1.65] text-ink/75 max-lg:text-[17px]">
          {post.body.map((b, i) => (
            <Block key={i} block={b} />
          ))}
        </article>

        <div className="mx-auto mt-16 flex max-w-[720px] flex-col gap-5 bg-ink p-10 text-white max-lg:p-6">
          <p className="text-[28px] font-medium leading-[1.2] tracking-[-0.8px] max-lg:text-[22px]">
            Want to know what is costing <span className="accent">your</span> site conversions?
          </p>
          <p className="text-[17px] leading-[1.5] text-white/65">
            Get a free conversion audit of your key page by email, or talk it through on a free strategy call.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="gradient" size="md" href={auditUrl}>
              Get a free audit
            </Button>
            <Button variant="outline-white" size="md">
              Book a free strategy call
            </Button>
          </div>
        </div>
      </Container>

      {related.length > 0 && (
        <section className="mt-32 bg-ink py-20 max-lg:mt-20 max-lg:py-16">
          <Container className="flex flex-col gap-[60px]">
            <h2 className="text-[52px] font-medium leading-[1.24] tracking-[-2px] text-white max-lg:text-[34px] max-lg:tracking-[-1.2px]">
              Related <span className="font-normal text-white/60">work</span>
            </h2>
            <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1">
              {related.map((c) => (
                <WorkCard key={c.slug} study={c} theme="dark" imageClassName="aspect-[4/3]" />
              ))}
            </div>
          </Container>
        </section>
      )}

      {more.length > 0 && (
        <Container className="mt-32 flex flex-col gap-[60px] max-lg:mt-20">
          <div className="flex items-end justify-between max-lg:flex-col max-lg:items-start max-lg:gap-4">
            <h2 className="text-[52px] font-medium leading-[1.24] tracking-[-2px] text-ink max-lg:text-[34px] max-lg:tracking-[-1.2px]">
              More <span className="accent">insights</span>
            </h2>
            <Button variant="outline" size="md" href="/blog">
              All articles
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-10 max-lg:grid-cols-1">
            {more.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      )}

      <CtaBanner
        className="mt-40 max-lg:mt-24"
        title="Ready to see what is costing you conversions?"
        subtitle="Book a free strategy call. No pitch deck, just a straight look at your funnel and where it is leaking."
      />

      <Footer className="mt-40 max-lg:mt-24" />
    </main>
  );
}
