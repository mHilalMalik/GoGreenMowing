/**
 * JSON-LD Structured Data for Go Green Mowing
 *
 * Structured as a single @id-linked @graph so the business, organization and
 * webpage entities are unambiguous to crawlers. Page-specific nodes
 * (breadcrumb, article, service, FAQ) are generated per route and appended.
 *
 * NOTE: aggregateRating is intentionally absent. Google requires it to reflect
 * genuine reviews that are visible on the page (or pulled live). A hardcoded
 * rating with no on-page Review markup risks a review-spam manual action.
 */

export const SITE_URL = "https://gogreenmowing.ca";

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const NAP = {
    name: "Go Green Mowing",
    telephone: "+1-778-558-0447",
    telephoneDisplay: "778-558-0447",
    email: "info@gogreenmowing.ca",
    streetAddress: "1959 165a St",
    addressLocality: "Surrey",
    addressRegion: "BC",
    postalCode: "V3Z 1K3",
    addressCountry: "CA",
    /** Single-line form — keep byte-identical everywhere it is displayed. */
    full: "1959 165a St, Surrey, BC V3Z 1K3",
} as const;

const postalAddress = {
    "@type": "PostalAddress",
    streetAddress: NAP.streetAddress,
    addressLocality: NAP.addressLocality,
    addressRegion: NAP.addressRegion,
    postalCode: NAP.postalCode,
    addressCountry: NAP.addressCountry,
};

export const areaServedCities = [
    "South Surrey",
    "Surrey",
    "White Rock",
    "Delta",
    "Langley",
];

/** Every service we offer, used to build the OfferCatalog. */
const serviceCatalog: { slug: string; name: string; description: string }[] = [
    {
        slug: "lawn-mowing",
        name: "Lawn Mowing",
        description:
            "Weekly and bi-weekly lawn mowing with low-emission equipment and grasscycling across South Surrey and White Rock.",
    },
    {
        slug: "aeration",
        name: "Core Aeration",
        description:
            "Core aeration to relieve the soil compaction caused by BC's heavy winter rainfall and clay-heavy soils.",
    },
    {
        slug: "fertilizing",
        name: "Organic Fertilizing",
        description:
            "Slow-release organic fertilizing programs that feed the soil ecosystem and are safe for kids and pets.",
    },
    {
        slug: "power-raking",
        name: "Power Raking",
        description:
            "Dethatching and moss removal to clear the thatch layer that builds up over a wet Pacific Northwest winter.",
    },
    {
        slug: "hedge-trimming",
        name: "Hedge Trimming",
        description:
            "Shaping and maintenance for cedar, laurel, boxwood and mixed hedges on residential and strata properties.",
    },
    {
        slug: "pruning",
        name: "Pruning",
        description:
            "Seasonal pruning of shrubs, ornamentals and small trees to maintain shape, health and sightlines.",
    },
    {
        slug: "gardening",
        name: "Garden Maintenance",
        description:
            "Ongoing garden bed care including weeding, edging, mulching and seasonal planting.",
    },
    {
        slug: "spring-fall-cleanup",
        name: "Spring & Fall Cleanups",
        description:
            "Seasonal property cleanups: leaf removal, bed clearing, winter prep and spring reset.",
    },
    {
        slug: "landscaping",
        name: "Landscaping & Garden Design",
        description:
            "Landscape and garden design, planting plans and installation for Metro Vancouver properties.",
    },
    {
        slug: "gutter-cleaning",
        name: "Gutter Cleaning",
        description:
            "Gutter and downspout clearing to prevent overflow damage through the rainy season.",
    },
    {
        slug: "power-washing",
        name: "Power Washing",
        description:
            "Eco-friendly power washing for driveways, patios, decks, walkways and fences.",
    },
    {
        slug: "green-waste-removal",
        name: "Green Waste Removal",
        description:
            "Hauling and responsible disposal or composting of yard and green waste.",
    },
];

/**
 * The primary business entity. LawnAndGardenService is the correct specific
 * type; LocalBusiness is included so generic consumers still resolve it.
 */
export const localBusinessSchema = {
    "@type": ["LawnAndGardenService", "LocalBusiness"],
    "@id": BUSINESS_ID,
    name: NAP.name,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/logo.png`,
    description:
        "Professional, eco-friendly lawn care for homes and businesses across South Surrey, White Rock, Surrey, Delta and Langley. Mowing, hedge trimming, aeration, power washing and seasonal cleanups.",
    telephone: NAP.telephone,
    email: NAP.email,
    address: postalAddress,
    geo: {
        "@type": "GeoCoordinates",
        latitude: 49.0345,
        longitude: -122.8407,
    },
    areaServed: areaServedCities.map((name) => ({
        "@type": "City",
        name,
        containedInPlace: {
            "@type": "AdministrativeArea",
            name: "British Columbia",
        },
    })),
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ],
            opens: "07:00",
            closes: "19:00",
        },
    ],
    contactPoint: {
        "@type": "ContactPoint",
        telephone: NAP.telephone,
        email: NAP.email,
        contactType: "customer service",
        availableLanguage: "English",
        areaServed: "CA",
    },
    priceRange: "$$",
    currenciesAccepted: "CAD",
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Lawn & Garden Services",
        itemListElement: serviceCatalog.map((service) => ({
            "@type": "Offer",
            itemOffered: {
                "@type": "Service",
                "@id": `${SITE_URL}/services/${service.slug}/#service`,
                name: service.name,
                serviceType: service.name,
                description: service.description,
                provider: { "@id": BUSINESS_ID },
                areaServed: { "@id": BUSINESS_ID },
                url: `${SITE_URL}/services/${service.slug}`,
            },
        })),
    },
    foundingDate: "2023",
    slogan: "Eco-Friendly Lawn Care You Can Trust",
    knowsAbout: serviceCatalog.map((s) => s.name).concat(["Eco-Friendly Lawn Care"]),
    parentOrganization: { "@id": ORGANIZATION_ID },
};

export const organizationSchema = {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: NAP.name,
    url: `${SITE_URL}/`,
    logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
    },
    email: NAP.email,
    telephone: NAP.telephone,
    address: postalAddress,
    sameAs: [
        "https://www.instagram.com/gogreenmowing",
        "https://www.facebook.com/gogreenmowing",
    ],
};

/** WebSite node — lets search engines resolve the site as an entity. */
export const webSiteSchema = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: NAP.name,
    inLanguage: "en-CA",
    publisher: { "@id": ORGANIZATION_ID },
};

/** Nodes present on every page. */
export const siteGraphNodes = [
    localBusinessSchema,
    organizationSchema,
    webSiteSchema,
];

export function webPageSchema(page: {
    url: string;
    name: string;
    description: string;
    hasBreadcrumb?: boolean;
}) {
    return {
        "@type": "WebPage",
        "@id": `${SITE_URL}${page.url}#webpage`,
        url: `${SITE_URL}${page.url}`,
        name: page.name,
        description: page.description,
        inLanguage: "en-CA",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": BUSINESS_ID },
        ...(page.hasBreadcrumb
            ? { breadcrumb: { "@id": `${SITE_URL}${page.url}#breadcrumb` } }
            : {}),
    };
}

/** Generate a BreadcrumbList node. `pageUrl` scopes its @id to the page. */
export function breadcrumbSchema(
    items: { name: string; url: string }[],
    pageUrl?: string,
) {
    const scope = pageUrl ?? items[items.length - 1]?.url ?? "/";
    return {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}${scope}#breadcrumb`,
        itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: `${SITE_URL}${item.url}`,
        })),
    };
}

/** Blog post (Article) schema. */
export function articleSchema(post: {
    title: string;
    description: string;
    slug: string;
    datePublished: string;
    dateModified: string;
    image?: string;
}) {
    const url = `${SITE_URL}/blog/${post.slug}`;
    return {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.description,
        url,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        inLanguage: "en-CA",
        image: post.image ? `${SITE_URL}${post.image}` : `${SITE_URL}/logo.png`,
        author: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
        mainEntityOfPage: { "@id": `${url}#webpage` },
    };
}

/** FAQPage node. Google retired FAQ rich results, but this still aids AI citation. */
export function faqSchema(
    faqs: { question: string; answer: string }[],
    pageUrl: string,
) {
    return {
        "@type": "FAQPage",
        "@id": `${SITE_URL}${pageUrl}#faq`,
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };
}

/** A single Service node, linked back to the business. */
export function serviceSchema(service: {
    name: string;
    description: string;
    slug: string;
    areasServed?: string[];
}) {
    return {
        "@type": "Service",
        "@id": `${SITE_URL}/services/${service.slug}/#service`,
        name: service.name,
        serviceType: service.name,
        description: service.description,
        url: `${SITE_URL}/services/${service.slug}`,
        provider: { "@id": BUSINESS_ID },
        areaServed: (service.areasServed ?? areaServedCities).map((name) => ({
            "@type": "City",
            name,
        })),
    };
}

/** Wrap page-specific nodes together with the site-wide nodes into one @graph. */
export function buildGraph(pageNodes: object[] = []) {
    return {
        "@context": "https://schema.org",
        "@graph": [...siteGraphNodes, ...pageNodes],
    };
}
