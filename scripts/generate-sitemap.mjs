/**
 * Generates dist/sitemap.xml and dist/llms.txt from the same routeMeta source
 * the prerenderer uses, so a new blog post or location page cannot be added
 * without both files picking it up.
 *
 * Replaces the hand-maintained public/sitemap.xml, where all 11 URLs shared an
 * identical lastmod — a signal Google learns to ignore.
 */

import { writeFile, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");
const serverEntry = path.join(ssrDir, "entry-server.js");

if (!existsSync(serverEntry)) {
    console.error(`\n[sitemap] Missing ${serverEntry}. Run the SSR build first.\n`);
    process.exit(1);
}

const { indexableRoutes } = await import(pathToFileURL(serverEntry).href);

const SITE = "https://gogreenmowing.ca";

/** Depth-based priority. Google mostly ignores it, but it costs nothing. */
function priorityFor(routePath) {
    if (routePath === "/") return "1.0";
    if (routePath === "/services") return "0.9";
    if (routePath.startsWith("/lawn-care/")) return "0.9";
    if (routePath.startsWith("/services/")) return "0.8";
    if (routePath === "/contact" || routePath === "/about") return "0.8";
    if (routePath === "/blog" || routePath === "/our-work") return "0.7";
    return "0.6";
}

const urls = indexableRoutes
    .map(
        (route) => `  <url>
    <loc>${SITE}${route.path === "/" ? "/" : route.path}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <priority>${priorityFor(route.path)}</priority>
  </url>`,
    )
    .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

await writeFile(path.join(distDir, "sitemap.xml"), sitemap, "utf8");
console.log(`[sitemap] wrote ${indexableRoutes.length} URLs to dist/sitemap.xml`);

// ---------------------------------------------------------------------------
// llms.txt — a real static markdown file. It previously 404'd into the SPA
// shell, returning HTML with a 200 status.
// ---------------------------------------------------------------------------

const bySection = (prefix) =>
    indexableRoutes.filter((r) => r.path.startsWith(prefix));

const list = (routes) =>
    routes
        .map((r) => `- [${r.title.split("|")[0].trim()}](${SITE}${r.path}): ${r.description}`)
        .join("\n");

const llms = `# Go Green Mowing

> Eco-friendly lawn care and property maintenance serving South Surrey, White Rock,
> Surrey, Delta and Langley, British Columbia. Family-run, fully insured and
> WorkSafe BC compliant. 100+ properties maintained. Free estimates.

Go Green Mowing provides residential and strata lawn care with an emphasis on
eco-friendly practices — organic slow-release fertilizers, grasscycling,
low-emission equipment and biodegradable cleaning solutions. We are based in
South Surrey, BC.

## Contact
- Address: 1959 165a St, Surrey, BC V3Z 1K3, Canada
- Phone: +1-778-558-0447
- Email: info@gogreenmowing.ca
- Hours: Monday to Saturday, 7:00am – 7:00pm
- Service area: South Surrey, White Rock, Surrey, Delta, Langley (BC)

## Services
${list(bySection("/services/"))}

## Areas We Serve
${list(bySection("/lawn-care/"))}

## Company
- [About](${SITE}/about)
- [Our Work](${SITE}/our-work)
- [Services overview](${SITE}/services)
- [Contact](${SITE}/contact)

## Blog
${list(bySection("/blog/"))}
`;

await writeFile(path.join(distDir, "llms.txt"), llms, "utf8");
console.log("[sitemap] wrote dist/llms.txt");

// This is the last consumer of the SSR bundle; it must not ship to Netlify.
await rm(ssrDir, { recursive: true, force: true });
console.log("[sitemap] cleaned dist-ssr");
