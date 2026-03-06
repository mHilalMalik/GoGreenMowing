import { useParams, Link } from "react-router";
import { ArrowLeft, Clock, Tag, ChevronRight } from "lucide-react";
import { LimeLabel } from "../LimeLabel";
import { AnimatedSection } from "../AnimatedSection";
import { SEOHead } from "../SEOHead";
import { JsonLd } from "../JsonLd";
import {
    localBusinessSchema,
    breadcrumbSchema,
    articleSchema,
} from "../schema";
import { getPostBySlug, blogPosts } from "../blogData";

export function BlogPostPage() {
    const { slug } = useParams<{ slug: string }>();
    const post = slug ? getPostBySlug(slug) : undefined;

    if (!post) {
        return (
            <section className="pt-[68px] pb-24" style={{ backgroundColor: "#FDFCFA" }}>
                <div className="max-w-[800px] mx-auto px-6 py-24 text-center">
                    <h1
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "2rem",
                            fontWeight: 700,
                            color: "#1A1A18",
                        }}
                    >
                        Post Not Found
                    </h1>
                    <p
                        className="mt-4 mb-8"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A4A44" }}
                    >
                        The blog post you're looking for doesn't exist.
                    </p>
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3"
                        style={{
                            backgroundColor: "#7AB648",
                            color: "#1C3A1C",
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 600,
                        }}
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>
                </div>
            </section>
        );
    }

    // Render markdown-like content
    function renderContent(text: string) {
        const lines = text.split("\n");
        const elements: React.ReactElement[] = [];
        let key = 0;

        lines.forEach((line) => {
            if (line.startsWith("### ")) {
                elements.push(
                    <h3
                        key={key++}
                        className="mt-8 mb-3"
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "1.1rem",
                            fontWeight: 700,
                            color: "#1A1A18",
                        }}
                    >
                        {line.replace("### ", "")}
                    </h3>
                );
            } else if (line.startsWith("## ")) {
                elements.push(
                    <h2
                        key={key++}
                        className="mt-10 mb-4"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "1.4rem",
                            fontWeight: 700,
                            color: "#1A1A18",
                        }}
                    >
                        {line.replace("## ", "")}
                    </h2>
                );
            } else if (line.startsWith("- **")) {
                const match = line.match(/- \*\*(.*?)\*\*(.*)/);
                if (match) {
                    elements.push(
                        <li key={key++} className="ml-4 mb-2" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", lineHeight: 1.7, color: "#4A4A44" }}>
                            <strong style={{ color: "#1A1A18" }}>{match[1]}</strong>{match[2]}
                        </li>
                    );
                }
            } else if (line.startsWith("- ")) {
                elements.push(
                    <li key={key++} className="ml-4 mb-2" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", lineHeight: 1.7, color: "#4A4A44" }}>
                        {line.replace("- ", "")}
                    </li>
                );
            } else if (line.startsWith("| ")) {
                // Simple table detection — skip header separator
                if (line.startsWith("|---")) return;
                const cells = line.split("|").filter(Boolean).map((c) => c.trim());
                elements.push(
                    <div key={key++} className="flex border-b" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                        {cells.map((cell, ci) => (
                            <div
                                key={ci}
                                className="flex-1 py-2 px-3"
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "0.85rem",
                                    color: ci === 0 ? "#1A1A18" : "#4A4A44",
                                    fontWeight: ci === 0 ? 600 : 400,
                                }}
                            >
                                {cell}
                            </div>
                        ))}
                    </div>
                );
            } else if (line.match(/^\d+\. \*\*/)) {
                const match = line.match(/^\d+\. \*\*(.*?)\*\*(.*)/);
                if (match) {
                    elements.push(
                        <li key={key++} className="ml-4 mb-2" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.92rem", lineHeight: 1.7, color: "#4A4A44", listStyleType: "decimal" }}>
                            <strong style={{ color: "#1A1A18" }}>{match[1]}</strong>{match[2]}
                        </li>
                    );
                }
            } else if (line.trim() === "") {
                // skip empty lines
            } else {
                elements.push(
                    <p key={key++} className="mb-4" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.95rem", lineHeight: 1.8, color: "#4A4A44" }}>
                        {line}
                    </p>
                );
            }
        });

        return elements;
    }

    // Related posts
    const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

    return (
        <>
            <SEOHead
                title={`${post.title} | Go Green Mowing Blog`}
                description={post.excerpt}
                canonical={`/blog/${post.slug}`}
                type="article"
                publishedDate={post.dateISO}
                modifiedDate={post.dateISO}
            />
            <JsonLd
                data={[
                    localBusinessSchema,
                    breadcrumbSchema([
                        { name: "Home", url: "/" },
                        { name: "Blog", url: "/blog" },
                        { name: post.title, url: `/blog/${post.slug}` },
                    ]),
                    articleSchema({
                        title: post.title,
                        description: post.excerpt,
                        slug: post.slug,
                        datePublished: post.dateISO,
                        dateModified: post.dateISO,
                        author: post.author,
                    }),
                ]}
            />

            {/* Hero */}
            <section className="relative pt-[68px]" style={{ backgroundColor: "#1C3A1C" }}>
                <div className="max-w-[800px] mx-auto px-6 lg:px-8 py-16 lg:py-24">
                    {/* Breadcrumb */}
                    <div
                        className="flex items-center gap-2 mb-6 flex-wrap"
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.8rem",
                            color: "rgba(255,255,255,0.5)",
                        }}
                    >
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3" />
                        <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
                        <ChevronRight className="w-3 h-3" />
                        <span className="text-white">{post.category}</span>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-4">
                        <span
                            className="inline-flex items-center gap-1 px-2.5 py-1"
                            style={{
                                backgroundColor: "rgba(122, 182, 72, 0.2)",
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "0.7rem",
                                fontWeight: 600,
                                color: "#7AB648",
                                letterSpacing: "0.05em",
                            }}
                        >
                            <Tag className="w-3 h-3" />
                            {post.category}
                        </span>
                        <span
                            className="inline-flex items-center gap-1"
                            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}
                        >
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                        </span>
                    </div>

                    <h1
                        className="text-white mb-4"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                            fontWeight: 700,
                            lineHeight: 1.2,
                        }}
                    >
                        {post.title}
                    </h1>
                    <p
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.85rem",
                            color: "rgba(255,255,255,0.4)",
                        }}
                    >
                        By {post.author} · {post.date}
                    </p>
                </div>
            </section>

            {/* Article Content */}
            <AnimatedSection>
                <article className="py-16" style={{ backgroundColor: "#FDFCFA" }}>
                    <div className="max-w-[800px] mx-auto px-6 lg:px-8">
                        {post.content.map((block, i) => (
                            <div key={i}>{renderContent(block)}</div>
                        ))}

                        {/* FAQ Section - AI Search Optimization (GEO) */}
                        {post.faq.length > 0 && (
                            <div className="mt-16 pt-10 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                                <h2
                                    className="mb-8"
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: "1.4rem",
                                        fontWeight: 700,
                                        color: "#1A1A18",
                                    }}
                                >
                                    Frequently Asked Questions
                                </h2>
                                <div className="space-y-6">
                                    {post.faq.map((item, i) => (
                                        <div
                                            key={i}
                                            className="p-6"
                                            style={{
                                                backgroundColor: "white",
                                                border: "1px solid rgba(0,0,0,0.06)",
                                            }}
                                        >
                                            <h3
                                                className="mb-3"
                                                style={{
                                                    fontFamily: "'DM Sans', sans-serif",
                                                    fontSize: "0.95rem",
                                                    fontWeight: 700,
                                                    color: "#1A1A18",
                                                }}
                                            >
                                                {item.q}
                                            </h3>
                                            <p
                                                style={{
                                                    fontFamily: "'DM Sans', sans-serif",
                                                    fontSize: "0.9rem",
                                                    lineHeight: 1.7,
                                                    color: "#4A4A44",
                                                }}
                                            >
                                                {item.a}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Tags */}
                        <div className="mt-10 flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1"
                                    style={{
                                        backgroundColor: "rgba(122, 182, 72, 0.08)",
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: "0.75rem",
                                        fontWeight: 500,
                                        color: "#2D5A2D",
                                    }}
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* CTA */}
                        <div
                            className="mt-12 p-8 text-center"
                            style={{ backgroundColor: "#1C3A1C" }}
                        >
                            <h3
                                className="mb-3"
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "1.3rem",
                                    fontWeight: 700,
                                    color: "white",
                                }}
                            >
                                Need Professional Lawn Care in South Surrey?
                            </h3>
                            <p
                                className="mb-6"
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "0.88rem",
                                    color: "rgba(255,255,255,0.6)",
                                }}
                            >
                                Get a free estimate from Go Green Mowing. 500+ lawns maintained, 4.9★ rating.
                            </p>
                            <Link
                                to="/contact"
                                className="inline-block px-7 py-3 transition-all hover:-translate-y-0.5"
                                style={{
                                    backgroundColor: "#7AB648",
                                    color: "#1C3A1C",
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 600,
                                    fontSize: "0.88rem",
                                }}
                            >
                                Get a Free Quote →
                            </Link>
                        </div>

                        {/* Related Posts */}
                        {relatedPosts.length > 0 && (
                            <div className="mt-16">
                                <h3
                                    className="mb-6"
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: "1.2rem",
                                        fontWeight: 700,
                                        color: "#1A1A18",
                                    }}
                                >
                                    Related Articles
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    {relatedPosts.map((rp) => (
                                        <Link
                                            key={rp.slug}
                                            to={`/blog/${rp.slug}`}
                                            className="group p-5 border transition-all hover:-translate-y-0.5"
                                            style={{ borderColor: "rgba(0,0,0,0.06)", backgroundColor: "white" }}
                                        >
                                            <span
                                                className="block mb-2"
                                                style={{
                                                    fontFamily: "'DM Sans', sans-serif",
                                                    fontSize: "0.7rem",
                                                    fontWeight: 600,
                                                    color: "#7AB648",
                                                }}
                                            >
                                                {rp.category}
                                            </span>
                                            <h4
                                                className="mb-2 group-hover:text-[#7AB648] transition-colors"
                                                style={{
                                                    fontFamily: "'Playfair Display', serif",
                                                    fontSize: "1rem",
                                                    fontWeight: 700,
                                                    color: "#1A1A18",
                                                    lineHeight: 1.3,
                                                }}
                                            >
                                                {rp.title}
                                            </h4>
                                            <span
                                                style={{
                                                    fontFamily: "'DM Sans', sans-serif",
                                                    fontSize: "0.72rem",
                                                    color: "#999",
                                                }}
                                            >
                                                {rp.date} · {rp.readTime}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Back to blog */}
                        <div className="mt-10">
                            <Link
                                to="/blog"
                                className="inline-flex items-center gap-2 hover:text-[#7AB648] transition-colors"
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "0.88rem",
                                    fontWeight: 600,
                                    color: "#1A1A18",
                                }}
                            >
                                <ArrowLeft className="w-4 h-4" /> Back to all articles
                            </Link>
                        </div>
                    </div>
                </article>
            </AnimatedSection>
        </>
    );
}
