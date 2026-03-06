import { useEffect } from "react";

interface SEOHeadProps {
    title: string;
    description: string;
    canonical?: string;
    type?: "website" | "article";
    publishedDate?: string;
    modifiedDate?: string;
}

/**
 * Updates document head with SEO meta tags per page.
 * In a production app, consider react-helmet-async for SSR.
 */
export function SEOHead({
    title,
    description,
    canonical,
    type = "website",
    publishedDate,
    modifiedDate,
}: SEOHeadProps) {
    useEffect(() => {
        // Title
        document.title = title;

        // Meta description
        setMeta("description", description);

        // Open Graph
        setMeta("og:title", title, "property");
        setMeta("og:description", description, "property");
        setMeta("og:type", type, "property");
        setMeta("og:site_name", "Go Green Mowing", "property");

        if (canonical) {
            setMeta("og:url", `https://gogreenmowing.ca${canonical}`, "property");

            // Canonical link
            let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
            if (!link) {
                link = document.createElement("link");
                link.rel = "canonical";
                document.head.appendChild(link);
            }
            link.href = `https://gogreenmowing.ca${canonical}`;
        }

        // Article-specific
        if (type === "article") {
            if (publishedDate) setMeta("article:published_time", publishedDate, "property");
            if (modifiedDate) setMeta("article:modified_time", modifiedDate, "property");
            setMeta("article:author", "Go Green Mowing", "property");
        }

        // Cleanup
        return () => {
            document.title = "Go Green Mowing | Eco-Friendly Lawn Care – South Surrey, BC";
        };
    }, [title, description, canonical, type, publishedDate, modifiedDate]);

    return null;
}

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
    let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
    }
    el.content = content;
}
