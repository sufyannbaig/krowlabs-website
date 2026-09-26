import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, URL } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import { absoluteUrl, allPages, fullTitle, metaImage, structuredData } from "./src/content/pages";
import { siteUrl } from "./src/content/site";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * After the build, writes one HTML file per route with its own title, description, canonical URL,
 * Open Graph/Twitter tags and JSON-LD, plus sitemap.xml and robots.txt. The page content is still
 * rendered by React; this makes every route's metadata visible to crawlers and link previews
 * without JavaScript. Page metadata lives in src/content/pages.ts.
 */
function seoPages(): Plugin {
  let outDir = "dist";
  return {
    name: "krowlabs-seo-pages",
    apply: "build",
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      const template = readFileSync(join(outDir, "index.html"), "utf-8");
      const pages = allPages();

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
        writeFileSync(file, html);
      }

      // Static hosts serve this for unknown URLs; the React app then shows the 404 page.
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
      writeFileSync(join(outDir, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
    },
  };
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
