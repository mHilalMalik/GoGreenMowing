/**
 * Single source of truth for per-route SEO metadata.
 *
 * Consumed by two callers:
 *   1. <PageSeo> at runtime, for client-side navigation.
 *   2. scripts/prerender.mjs at build time, which bakes the title, description,
 *      canonical, Open Graph tags and JSON-LD directly into the static HTML for
 *      every route — so crawlers and AI bots that do not execute JavaScript see
 *      real content.
 *
 * Anything added here must also be added to scripts/generate-sitemap.mjs via
 * `indexableRoutes`, which reads from this module.
 */

import { blogPosts } from "../components/blogData";
import { servicesData } from "../data/servicesData";
import { locationsData } from "../data/locationsData";
import {
    SITE_URL,
    articleSchema,
    breadcrumbSchema,
    buildGraph,
    faqSchema,
    serviceSchema,
    webPageSchema,
} from "../components/schema";

export interface RouteMeta {
    path: string;
    title: string;
    description: string;
    /** Absolute canonical URL. */
    canonical: string;
    ogType: "website" | "article";
    /** Absolute URL of the social preview image. */
    ogImage: string;
    /** ISO date of the last meaningful change — feeds sitemap lastmod. */
    lastmod: string;
    /** Keep out of the index and out of the sitemap. */
    noindex?: boolean;
    publishedTime?: string;
    modifiedTime?: string;
    /** Fully-formed JSON-LD @graph for this page. */
    jsonLd: object;
}

const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

/** Site-content change date used for pages without their own natural date. */
const SITE_LASTMOD = "2026-07-29";

function abs(path: string) {
    return `${SITE_URL}${path === "/" ? "/" : path}`;
}

function meta(input: Omit<RouteMeta, "canonical" | "ogType" | "ogImage"> &
    Partial<Pick<RouteMeta, "canonical" | "ogType" | "ogImage">>): RouteMeta {
    return {
        ogType: "website",
        ogImage: DEFAULT_OG_IMAGE,
        canonical: abs(input.path),
        ...input,
    };
}

const home = meta({
    path: "/",
    title: "Go Green Mowing | Eco-Friendly Lawn Care – South Surrey, BC",
    description:
        "Eco-friendly lawn care for homes and businesses across South Surrey, White Rock, Surrey, Delta and Langley. Mowing, aeration, hedge trimming, power washing and seasonal cleanups. Free estimates.",
    lastmod: SITE_LASTMOD,
    jsonLd: buildGraph([
        webPageSchema({
            url: "/",
            name: "Go Green Mowing | Eco-Friendly Lawn Care – South Surrey, BC",
            description:
                "Eco-friendly lawn care for homes and businesses across South Surrey, White Rock, Surrey, Delta and Langley.",
            hasBreadcrumb: true,
        }),
        breadcrumbSchema([{ name: "Home", url: "/" }], "/"),
    ]),
});

const about = meta({
    path: "/about",
    title: "About Go Green Mowing | Local, Insured Lawn Care in South Surrey",
    description:
        "Go Green Mowing is a family-run, fully insured and WorkSafe BC compliant lawn care company based in South Surrey, BC. Meet the team and learn how we work.",
    lastmod: SITE_LASTMOD,
    jsonLd: buildGraph([
        webPageSchema({
            url: "/about",
            name: "About Go Green Mowing",
            description:
                "A family-run, fully insured lawn care company based in South Surrey, BC.",
            hasBreadcrumb: true,
        }),
        breadcrumbSchema(
            [
                { name: "Home", url: "/" },
                { name: "About", url: "/about" },
            ],
            "/about",
        ),
    ]),
});

const services = meta({
    path: "/services",
    title: "Lawn & Garden Services | South Surrey & White Rock | Go Green Mowing",
    description:
        "Twelve lawn and garden services across South Surrey, White Rock, Surrey, Delta and Langley — mowing, aeration, fertilizing, power raking, hedge trimming, pruning, cleanups, landscaping, gutters, power washing and green waste removal.",
    lastmod: SITE_LASTMOD,
    jsonLd: buildGraph([
        webPageSchema({
            url: "/services",
            name: "Lawn & Garden Services",
            description:
                "Full list of lawn and garden services offered across South Surrey and Metro Vancouver.",
            hasBreadcrumb: true,
        }),
        breadcrumbSchema(
            [
                { name: "Home", url: "/" },
                { name: "Services", url: "/services" },
            ],
            "/services",
        ),
    ]),
});

const ourWork = meta({
    path: "/our-work",
    title: "Our Work | Lawn Care Project Photos | Go Green Mowing",
    description:
        "Photos of real lawn care, hedge trimming, seasonal cleanup, landscaping and power washing jobs across South Surrey, White Rock, Surrey, Delta and Langley.",
    lastmod: SITE_LASTMOD,
    jsonLd: buildGraph([
        webPageSchema({
            url: "/our-work",
            name: "Our Work",
            description:
                "Portfolio of completed lawn and garden work across South Surrey and Metro Vancouver.",
            hasBreadcrumb: true,
        }),
        breadcrumbSchema(
            [
                { name: "Home", url: "/" },
                { name: "Our Work", url: "/our-work" },
            ],
            "/our-work",
        ),
    ]),
});

const contact = meta({
    path: "/contact",
    title: "Contact Go Green Mowing | Free Lawn Care Estimates in South Surrey",
    description:
        "Get a free, no-obligation lawn care estimate. Call 778-558-0447 or send us a message. Serving South Surrey, White Rock, Surrey, Delta and Langley, BC.",
    lastmod: SITE_LASTMOD,
    jsonLd: buildGraph([
        {
            "@type": "ContactPage",
            "@id": `${SITE_URL}/contact#webpage`,
            url: `${SITE_URL}/contact`,
            name: "Contact Go Green Mowing",
            description: "Contact details and free estimate request form.",
            inLanguage: "en-CA",
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#business` },
            breadcrumb: { "@id": `${SITE_URL}/contact#breadcrumb` },
        },
        breadcrumbSchema(
            [
                { name: "Home", url: "/" },
                { name: "Contact", url: "/contact" },
            ],
            "/contact",
        ),
    ]),
});

/** Newest post date drives the blog index's lastmod. */
const newestPostDate = blogPosts
    .map((p) => p.updatedISO ?? p.dateISO)
    .sort()
    .reverse()[0];

const blogIndex = meta({
    path: "/blog",
    title: "Lawn Care Blog | Go Green Mowing – South Surrey, BC",
    description:
        "Practical lawn care guides for South Surrey and Metro Vancouver: mowing frequency, hedge trimming timing, moss control, aeration, fertilizing schedules and seasonal cleanups.",
    lastmod: newestPostDate,
    jsonLd: buildGraph([
        {
            "@type": "Blog",
            "@id": `${SITE_URL}/blog#webpage`,
            url: `${SITE_URL}/blog`,
            name: "Go Green Mowing Lawn Care Blog",
            description:
                "Lawn care guides for South Surrey and Metro Vancouver homeowners.",
            inLanguage: "en-CA",
            isPartOf: { "@id": `${SITE_URL}/#website` },
            publisher: { "@id": `${SITE_URL}/#organization` },
            breadcrumb: { "@id": `${SITE_URL}/blog#breadcrumb` },
            blogPost: blogPosts.map((post) => ({
                "@id": `${SITE_URL}/blog/${post.slug}#article`,
            })),
        },
        breadcrumbSchema(
            [
                { name: "Home", url: "/" },
                { name: "Blog", url: "/blog" },
            ],
            "/blog",
        ),
    ]),
});

const blogPostRoutes: RouteMeta[] = blogPosts.map((post) => {
    const path = `/blog/${post.slug}`;
    const modified = post.updatedISO ?? post.dateISO;
    return meta({
        path,
        title: `${post.title} | Go Green Mowing`,
        description: post.excerpt,
        ogType: "article",
        ogImage: post.image ? `${SITE_URL}${post.image}` : DEFAULT_OG_IMAGE,
        lastmod: modified,
        publishedTime: post.dateISO,
        modifiedTime: modified,
        jsonLd: buildGraph([
            webPageSchema({
                url: path,
                name: post.title,
                description: post.excerpt,
                hasBreadcrumb: true,
            }),
            articleSchema({
                title: post.title,
                description: post.excerpt,
                slug: post.slug,
                datePublished: post.dateISO,
                dateModified: modified,
                image: post.image,
            }),
            faqSchema(
                post.faq.map((f) => ({ question: f.q, answer: f.a })),
                path,
            ),
            breadcrumbSchema(
                [
                    { name: "Home", url: "/" },
                    { name: "Blog", url: "/blog" },
                    { name: post.title, url: path },
                ],
                path,
            ),
        ]),
    });
});

const serviceRoutes: RouteMeta[] = Object.values(servicesData).map((service) => {
    const path = `/services/${service.slug}`;
    return meta({
        path,
        title: service.metaTitle,
        description: service.metaDescription,
        lastmod: SITE_LASTMOD,
        jsonLd: buildGraph([
            webPageSchema({
                url: path,
                name: service.title,
                description: service.metaDescription,
                hasBreadcrumb: true,
            }),
            serviceSchema({
                name: service.title,
                description: service.metaDescription,
                slug: service.slug,
                areasServed: service.areasServed,
            }),
            faqSchema(service.faqs, path),
            breadcrumbSchema(
                [
                    { name: "Home", url: "/" },
                    { name: "Services", url: "/services" },
                    { name: service.title, url: path },
                ],
                path,
            ),
        ]),
    });
});

const locationRoutes: RouteMeta[] = Object.values(locationsData).map((loc) => {
    const path = `/lawn-care/${loc.slug}`;
    return meta({
        path,
        title: loc.metaTitle,
        description: loc.metaDescription,
        ogImage: `${SITE_URL}${loc.gallery[0]?.img ?? "/logo.png"}`,
        lastmod: SITE_LASTMOD,
        jsonLd: buildGraph([
            webPageSchema({
                url: path,
                name: `${loc.city} Lawn Care`,
                description: loc.metaDescription,
                hasBreadcrumb: true,
            }),
            faqSchema(loc.faqs, path),
            breadcrumbSchema(
                [
                    { name: "Home", url: "/" },
                    { name: "Services", url: "/services" },
                    { name: `${loc.city} Lawn Care`, url: path },
                ],
                path,
            ),
        ]),
    });
});

/** Rendered for any URL that does not match a route. Must never be indexed. */
export const notFoundMeta: RouteMeta = meta({
    path: "/404",
    title: "Page Not Found | Go Green Mowing",
    description: "The page you are looking for does not exist.",
    lastmod: SITE_LASTMOD,
    noindex: true,
    jsonLd: buildGraph([]),
});

export const routeMetaList: RouteMeta[] = [
    home,
    about,
    services,
    ...serviceRoutes,
    ...locationRoutes,
    ourWork,
    contact,
    blogIndex,
    ...blogPostRoutes,
];

const byPath = new Map(routeMetaList.map((r) => [r.path, r]));

/** Look up metadata for a path. Trailing slashes are normalised away. */
export function getRouteMeta(path: string): RouteMeta | undefined {
    const normalised =
        path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
    return byPath.get(normalised);
}

/** Every path the prerenderer should emit — indexable routes plus the 404. */
export const prerenderPaths: string[] = [
    ...routeMetaList.map((r) => r.path),
    notFoundMeta.path,
];

/** Paths that belong in sitemap.xml. */
export const indexableRoutes: RouteMeta[] = routeMetaList.filter(
    (r) => !r.noindex,
);
