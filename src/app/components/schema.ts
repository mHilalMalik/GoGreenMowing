/**
 * JSON-LD Structured Data for Go Green Mowing
 * Following Google's supported schema types and claude-seo best practices.
 */

// LocalBusiness schema (appears on every page)
export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LawnAndGardenService",
    "@id": "https://gogreenmowing.ca/#business",
    name: "Go Green Mowing",
    url: "https://gogreenmowing.ca",
    logo: "https://gogreenmowing.ca/logo.png",
    image: "https://gogreenmowing.ca/logo.png",
    description:
        "Professional, eco-friendly lawn care services for homes and businesses across South Surrey and Metro Vancouver. Mowing, hedge trimming, aeration, power washing, and seasonal cleanups.",
    telephone: "+1-778-558-0447",
    email: "info@gogreenmowing.ca",
    address: {
        "@type": "PostalAddress",
        addressLocality: "South Surrey",
        addressRegion: "BC",
        addressCountry: "CA",
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: 49.0345,
        longitude: -122.8407,
    },
    areaServed: [
        { "@type": "City", name: "South Surrey", containedIn: "British Columbia" },
        { "@type": "City", name: "White Rock", containedIn: "British Columbia" },
        { "@type": "City", name: "Surrey", containedIn: "British Columbia" },
        { "@type": "City", name: "Langley", containedIn: "British Columbia" },
        { "@type": "City", name: "Delta", containedIn: "British Columbia" },
        { "@type": "AdministrativeArea", name: "Metro Vancouver" },
    ],
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "07:00",
            closes: "19:00",
        },
    ],
    priceRange: "$$",
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "120",
        bestRating: "5",
    },
    sameAs: [
        "https://www.facebook.com/gogreenmowing",
        "https://www.instagram.com/gogreenmowing",
    ],
    foundingDate: "2014",
    slogan: "Eco-Friendly Lawn Care You Can Trust",
    knowsAbout: [
        "Lawn Mowing",
        "Hedge Trimming",
        "Lawn Aeration",
        "Fertilizing",
        "Power Washing",
        "Fall Cleanup",
        "Spring Clean",
        "Power Raking",
        "Eco-Friendly Lawn Care",
    ],
};

// Organization schema
export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Go Green Mowing",
    url: "https://gogreenmowing.ca",
    logo: "https://gogreenmowing.ca/logo.png",
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-778-558-0447",
        contactType: "customer service",
        availableLanguage: "English",
        areaServed: "CA",
    },
};

// Service schemas
export const serviceSchemas = [
    {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Lawn Mowing",
        provider: { "@id": "https://gogreenmowing.ca/#business" },
        areaServed: { "@type": "City", name: "South Surrey" },
        description: "Professional lawn mowing with eco-friendly equipment. Weekly and bi-weekly service available.",
    },
    {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Hedge Trimming",
        provider: { "@id": "https://gogreenmowing.ca/#business" },
        areaServed: { "@type": "City", name: "South Surrey" },
        description: "Expert hedge and shrub trimming for cedar, laurel, boxwood, and more.",
    },
    {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Lawn Aeration and Fertilizing",
        provider: { "@id": "https://gogreenmowing.ca/#business" },
        areaServed: { "@type": "City", name: "South Surrey" },
        description: "Core aeration and organic fertilizing to promote lush, healthy lawn growth.",
    },
    {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Power Washing",
        provider: { "@id": "https://gogreenmowing.ca/#business" },
        areaServed: { "@type": "City", name: "South Surrey" },
        description: "Eco-friendly power washing for driveways, patios, decks, and fences.",
    },
    {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Fall Cleanup",
        provider: { "@id": "https://gogreenmowing.ca/#business" },
        areaServed: { "@type": "City", name: "South Surrey" },
        description: "Comprehensive fall leaf removal, garden bed clearing, and winter preparation.",
    },
    {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Spring Clean and Power Raking",
        provider: { "@id": "https://gogreenmowing.ca/#business" },
        areaServed: { "@type": "City", name: "South Surrey" },
        description: "Spring cleanup, dethatching, and garden bed preparation for the growing season.",
    },
];

// Generate BreadcrumbList schema
export function breadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: `https://gogreenmowing.ca${item.url}`,
        })),
    };
}

// Blog post (Article) schema
export function articleSchema(post: {
    title: string;
    description: string;
    slug: string;
    datePublished: string;
    dateModified: string;
    author: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        url: `https://gogreenmowing.ca/blog/${post.slug}`,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        author: {
            "@type": "Organization",
            name: post.author,
            url: "https://gogreenmowing.ca",
        },
        publisher: {
            "@type": "Organization",
            name: "Go Green Mowing",
            logo: {
                "@type": "ImageObject",
                url: "https://gogreenmowing.ca/logo.png",
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://gogreenmowing.ca/blog/${post.slug}`,
        },
    };
}
