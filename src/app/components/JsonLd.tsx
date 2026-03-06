import { useEffect } from "react";

interface JsonLdProps {
    data: object | object[];
}

/**
 * Renders JSON-LD structured data into the document head.
 * Accepts a single schema object or an array of schemas.
 */
export function JsonLd({ data }: JsonLdProps) {
    useEffect(() => {
        const schemas = Array.isArray(data) ? data : [data];
        const scripts: HTMLScriptElement[] = [];

        schemas.forEach((schema) => {
            const script = document.createElement("script");
            script.type = "application/ld+json";
            script.textContent = JSON.stringify(schema);
            document.head.appendChild(script);
            scripts.push(script);
        });

        return () => {
            scripts.forEach((s) => s.remove());
        };
    }, [data]);

    return null;
}
