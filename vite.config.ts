import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL, URL } from "node:url";
import react from "@vitejs/plugin-react";
import { build, defineConfig, type Plugin } from "vite";
import { absoluteUrl, allPages, fullTitle, metaImage, structuredData } from "./src/content/pages";
import { llmsTxt, robotsTxt } from "./src/content/llms";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * After the build, writes one HTML file per route with its own title, description, canonical URL,
 * Open Graph/Twitter tags, JSON-LD and the fully prerendered page content (so crawlers that do not
 * run JavaScript see everything), plus sitemap.xml, robots.txt and llms.txt. The browser app then
 * hydrates the prerendered HTML. Page metadata lives in src/content/pages.ts.
 */
function seoPages(): Plugin {
  let outDir = "dist";
  return {
    name: "krowlabs-seo-pages",
    apply: "build",
    configResolved(config) {
      outDir = config.build.outDir;
    },
    async closeBundle() {
      const template = readFileSync(join(outDir, "index.html"), "utf-8");
      const pages = allPages();
      const render = await loadPrerender();
      const withBody = async (html: string, path: string) => {
        if (!render) return html;
        try {
          const body = await render(path);
          return html.replace('<div id="root"></div>', `<div id="root" data-prerendered="${path}">${body}</div>`);
        } catch (err) {
          console.warn(`[seoPages] could not prerender ${path}, shipping it without body HTML:`, err);
          return html;
        }
      };

      for (const { path, meta } of pages) {
        const title = esc(fullTitle(meta.title));
        const description = esc(meta.description);
        const url = absoluteUrl(path);
        const head = [
          `<meta name="description" content="${description}" />`,
          `<link rel="canonical" href="${url}" />`,
          `<meta property="og:type" content="website" />`,
          `<meta property="og:site_name" content="Krow Labs" />`,
          `<meta property="og:title" content="${title}" />`,
          `<meta property="og:description" content="${description}" />`,
          `<meta property="og:url" content="${url}" />`,
          `<meta property="og:image" content="${metaImage(meta)}" />`,
          `<meta property="og:image:width" content="1200" />`,
          `<meta property="og:image:height" content="630" />`,
          `<meta property="og:image:alt" content="${title}" />`,
          `<meta name="twitter:card" content="summary_large_image" />`,
          `<meta name="twitter:title" content="${title}" />`,
          `<meta name="twitter:description" content="${description}" />`,
          `<meta name="twitter:image" content="${metaImage(meta)}" />`,
          `<script type="application/ld+json">${JSON.stringify(structuredData(path, meta))}</script>`,
        ].join("\n    ");

        const html = template
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
          .replace(/\s*<meta\s+name="description"[\s\S]*?\/>/, "")
          .replace("</head>", `    ${head}\n  </head>`);

        const file = path === "/" ? join(outDir, "index.html") : join(outDir, path, "index.html");
        mkdirSync(dirname(file), { recursive: true });
        writeFileSync(file, await withBody(html, path));
      }

      // Static hosts serve this for unknown URLs. It is left without prerendered content: the host
      // may serve it for any path, so React renders whichever page (or the 404) matches the real URL.
      writeFileSync(
        join(outDir, "404.html"),
        template.replace("</head>", `    <meta name="robots" content="noindex" />\n  </head>`),
      );

      const today = new Date().toISOString().slice(0, 10);
      const urls = pages
        .map(({ path }: { path: string }) => {
          const priority = path === "/" ? "1.0" : path.startsWith("/services") ? "0.9" : "0.7";
          return `  <url><loc>${absoluteUrl(path)}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`;
        })
        .join("\n");
      writeFileSync(
        join(outDir, "sitemap.xml"),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      );
      writeFileSync(join(outDir, "robots.txt"), robotsTxt());
      writeFileSync(join(outDir, "llms.txt"), llmsTxt());
    },
  };
}

/**
 * Builds src/entry-server.tsx for Node and returns its render(url) function, which turns a route into
 * static HTML. Returns null (pages ship without body HTML, as before) if anything goes wrong, so a
 * prerendering problem can never break a deploy.
 */
async function loadPrerender(): Promise<((url: string) => Promise<string>) | null> {
  const root = fileURLToPath(new URL(".", import.meta.url));
  const ssrOut = join(root, "node_modules", ".krowlabs-ssr");
  try {
    await build({
      configFile: false,
      root,
      logLevel: "warn",
      mode: "production",
      plugins: [react()],
      resolve: { alias: { "@": join(root, "src") } },
      build: { ssr: "src/entry-server.tsx", outDir: ssrOut, emptyOutDir: true, minify: false },
    });
    const entry = readdirSync(ssrOut).find((f) => /^entry-server\.(m?js)$/.test(f));
    if (!entry) throw new Error("entry-server bundle not found");
    const mod = await import(`${pathToFileURL(join(ssrOut, entry)).href}?t=${Date.now()}`);
    return mod.render;
  } catch (err) {
    console.warn("[seoPages] prerendering disabled for this build:", err);
    return null;
  }
}

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), seoPages()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
