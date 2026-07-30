import { useEffect } from "react";
import { getRouteMeta, notFoundMeta, type RouteMeta } from "../seo/routeMeta";

interface PageSeoProps {
    /** Route path, e.g. "/blog/best-lawn-mowing-practices-bc". */
    path: string;
}

/**
 * Applies per-route <title>, meta, canonical and JSON-LD.
 *
 * At build time the prerenderer bakes all of this into the static HTML from the
 * same `routeMeta` source, so crawlers see it without running JavaScript. This
 * component keeps the head correct during client-side navigation, and replaces
 * whatever the prerenderer wrote rather than appending to it.
 */
export function PageSeo({ path }: PageSeoProps) {
    const route = getRouteMeta(path) ?? notFoundMeta;

    useEffect(() => {
        applyRouteMeta(route);
    }, [route]);

    return null;
}

function applyRouteMeta(route: RouteMeta) {
    document.title = route.title;

    setMeta("description", route.description);
    setMeta("robots", route.noindex ? "noindex, nofollow" : "index, follow");

    setMeta("og:title", route.title, "property");
    setMeta("og:description", route.description, "property");
    setMeta("og:type", route.ogType, "property");
    setMeta("og:url", route.canonical, "property");
    setMeta("og:image", route.ogImage, "property");
    setMeta("og:site_name", "Go Green Mowing", "property");
    setMeta("og:locale", "en_CA", "property");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", route.title);
    setMeta("twitter:description", route.description);
    setMeta("twitter:image", route.ogImage);

    if (route.ogType === "article") {
        if (route.publishedTime)
            setMeta("article:published_time", route.publishedTime, "property");
        if (route.modifiedTime)
            setMeta("article:modified_time", route.modifiedTime, "property");
        setMeta("article:author", "Go Green Mowing", "property");
    } else {
        removeMeta("article:published_time", "property");
        removeMeta("article:modified_time", "property");
        removeMeta("article:author", "property");
    }

    setCanonical(route.canonical);
    setJsonLd(route.jsonLd);
}

function setMeta(
    name: string,
    content: string,
    attr: "name" | "property" = "name",
) {
    let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
    }
    el.setAttribute("content", content);
}

function removeMeta(name: string, attr: "name" | "property" = "name") {
    document.querySelector(`meta[${attr}="${name}"]`)?.remove();
}

function setCanonical(href: string) {
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
    }
    link.href = href;
}

/**
 * Replaces the page's JSON-LD. The prerenderer marks its own script with
 * data-route-schema so we swap that exact node instead of stacking a second
 * graph on top of it, which would give crawlers two conflicting descriptions.
 */
function setJsonLd(data: object) {
    let script = document.querySelector<HTMLScriptElement>(
        'script[type="application/ld+json"][data-route-schema]',
    );
    if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-route-schema", "");
        document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
}
