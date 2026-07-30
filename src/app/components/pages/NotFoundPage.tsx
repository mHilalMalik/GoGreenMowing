import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { PageSeo } from "../PageSeo";

/**
 * Real "not found" view with a noindex directive.
 *
 * Netlify's SPA rewrite returns HTTP 200 for every URL, so without this every
 * nonexistent path was an indexable soft-404 serving the homepage shell. The
 * prerenderer also emits this as /404.html, which Netlify serves for unmatched
 * paths with a genuine 404 status.
 */
export function NotFoundPage() {
    return (
        <>
            <PageSeo path="/404" />
            <section
                className="pt-[68px] pb-24 flex-1"
                style={{ backgroundColor: "#FDFCFA" }}
            >
                <div className="max-w-[720px] mx-auto px-6 py-24 text-center">
                    <p
                        className="mb-4"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "4rem",
                            fontWeight: 700,
                            lineHeight: 1,
                            color: "#7AB648",
                        }}
                    >
                        404
                    </p>
                    <h1
                        className="mb-4"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                            fontWeight: 700,
                            color: "#1A1A18",
                        }}
                    >
                        We couldn't find that page
                    </h1>
                    <p
                        className="mb-10"
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "1rem",
                            lineHeight: 1.8,
                            color: "#4A4A44",
                        }}
                    >
                        The page may have moved or the link may be out of date. Here are
                        the places people usually want.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {[
                            { label: "Home", to: "/" },
                            { label: "Services", to: "/services" },
                            { label: "Our Work", to: "/our-work" },
                            { label: "Blog", to: "/blog" },
                            { label: "Contact", to: "/contact" },
                        ].map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="px-5 py-2.5 border transition-colors hover:border-[#7AB648] hover:text-[#7AB648]"
                                style={{
                                    borderColor: "rgba(0,0,0,0.12)",
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "0.85rem",
                                    fontWeight: 500,
                                    color: "#4A4A44",
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-7 py-3.5"
                        style={{
                            backgroundColor: "#1C3A1C",
                            color: "white",
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 600,
                            fontSize: "0.88rem",
                        }}
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to home
                    </Link>
                </div>
            </section>
        </>
    );
}
