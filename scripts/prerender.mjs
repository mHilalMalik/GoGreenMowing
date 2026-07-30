/**
 * Build-time prerenderer.
 *
 * The site was previously a pure client-rendered SPA: every URL returned the
 * same ~1.6 KB empty shell, so crawlers that do not execute JavaScript (Bing,
 * GPTBot, ClaudeBot, PerplexityBot, social unfurlers) saw nothing at all, and
 * every route shared the homepage's title and description.
 *
 * This script renders each route to real HTML and injects the per-route head
 * tags and JSON-LD from src/app/seo/routeMeta.ts, writing dist/<route>/index.html.
 * Netlify serves an existing static file before applying the SPA rewrite, so
 * these files win and the rewrite only catches genuinely unmatched paths.
 *
 * Run via `npm run build` (vite build -> vite build --ssr -> this).
 */

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const templatePath = path.join(distDir, "index.html");
const serverEntry = path.join(root, "dist-ssr", "entry-server.js");

function fail(message) {
    console.error(`\n[prerender] ${message}\n`);
    process.exit(1);
}

if (!existsSync(templatePath)) fail(`Missing ${templatePath}. Run the client build first.`);
if (!existsSync(serverEntry)) fail(`Missing ${serverEntry}. Run the SSR build first.`);

const { render, prerenderPaths, getRouteMeta, notFoundMeta } = await import(
    pathToFileURL(serverEntry).href
);

const template = await readFile(templatePath, "utf8");

/** Escape for safe interpolation into an HTML attribute. */
function attr(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

/** Escape for text content. */
function text(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

/**
 * JSON-LD lives inside a <script> block, so the only sequence that can break
 * out is a literal "</script". Escaping the slash keeps the JSON valid.
 */
function jsonLdSafe(data) {
    return JSON.stringify(data).replace(/<\/(script)/gi, "<\\/$1");
}

function headFor(meta) {
    const tags = [
        `<title>${text(meta.title)}</title>`,
        `<meta name="description" content="${attr(meta.description)}" />`,
        `<link rel="canonical" href="${attr(meta.canonical)}" />`,
        `<meta name="robots" content="${meta.noindex ? "noindex, nofollow" : "index, follow"}" />`,
        `<meta property="og:title" content="${attr(meta.title)}" />`,
        `<meta property="og:description" content="${attr(meta.description)}" />`,
        `<meta property="og:type" content="${attr(meta.ogType)}" />`,
        `<meta property="og:url" content="${attr(meta.canonical)}" />`,
        `<meta property="og:image" content="${attr(meta.ogImage)}" />`,
        `<meta property="og:site_name" content="Go Green Mowing" />`,
        `<meta property="og:locale" content="en_CA" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${attr(meta.title)}" />`,
        `<meta name="twitter:description" content="${attr(meta.description)}" />`,
        `<meta name="twitter:image" content="${attr(meta.ogImage)}" />`,
    ];

    if (meta.ogType === "article") {
        if (meta.publishedTime)
            tags.push(
                `<meta property="article:published_time" content="${attr(meta.publishedTime)}" />`,
            );
        if (meta.modifiedTime)
            tags.push(
                `<meta property="article:modified_time" content="${attr(meta.modifiedTime)}" />`,
            );
        tags.push(`<meta property="article:author" content="Go Green Mowing" />`);
    }

    tags.push(
        `<script type="application/ld+json" data-route-schema>${jsonLdSafe(meta.jsonLd)}</script>`,
    );

    return tags.join("\n  ");
}

/** Strip the template's build-time head tags; routeMeta is authoritative. */
function stripTemplateHead(html) {
    return html
        .replace(/\s*<title>[\s\S]*?<\/title>/i, "")
        .replace(/\s*<meta\s+name="description"[^>]*>/gi, "")
        .replace(/\s*<meta\s+property="og:[^"]*"[^>]*>/gi, "")
        .replace(/\s*<link\s+rel="canonical"[^>]*>/gi, "");
}

function outputPathFor(routePath) {
    if (routePath === "/") return path.join(distDir, "index.html");
    if (routePath === "/404") return path.join(distDir, "404.html");
    return path.join(distDir, routePath.replace(/^\//, ""), "index.html");
}

let written = 0;
const failures = [];

for (const routePath of prerenderPaths) {
    const meta =
        routePath === "/404" ? notFoundMeta : getRouteMeta(routePath);

    if (!meta) {
        failures.push(`${routePath}: no routeMeta entry`);
        continue;
    }

    let appHtml;
    try {
        appHtml = await render(routePath);
    } catch (error) {
        failures.push(`${routePath}: render failed — ${error.message}`);
        continue;
    }

    if (!appHtml || appHtml.length < 500) {
        failures.push(
            `${routePath}: rendered only ${appHtml?.length ?? 0} chars — looks empty`,
        );
        continue;
    }

    let html = stripTemplateHead(template);
    html = html.replace("</head>", `  ${headFor(meta)}\n</head>`);
    html = html.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`,
    );

    if (!html.includes('data-route-schema')) {
        failures.push(`${routePath}: JSON-LD injection failed`);
        continue;
    }

    const outPath = outputPathFor(routePath);
    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, html, "utf8");
    written += 1;
    console.log(
        `[prerender] ${routePath.padEnd(48)} ${(html.length / 1024).toFixed(1)} KB`,
    );
}

if (failures.length) {
    console.error(`\n[prerender] ${failures.length} route(s) failed:`);
    for (const f of failures) console.error(`  - ${f}`);
    process.exit(1);
}

console.log(`\n[prerender] wrote ${written} static pages.`);
