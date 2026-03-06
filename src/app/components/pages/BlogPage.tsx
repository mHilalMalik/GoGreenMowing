import { Link } from "react-router";
import { Clock, ArrowRight, Tag } from "lucide-react";
import { LimeLabel } from "../LimeLabel";
import { AnimatedSection, StaggerChild } from "../AnimatedSection";
import { SEOHead } from "../SEOHead";
import { JsonLd } from "../JsonLd";
import { localBusinessSchema, breadcrumbSchema } from "../schema";
import { blogPosts } from "../blogData";

export function BlogPage() {
    return (
        <>
            <SEOHead
                title="Lawn Care Blog | Go Green Mowing – South Surrey, BC"
                description="Expert lawn care tips, seasonal guides, and eco-friendly gardening advice for South Surrey and Metro Vancouver homeowners. From Go Green Mowing."
                canonical="/blog"
            />
            <JsonLd
                data={[
                    localBusinessSchema,
                    breadcrumbSchema([
                        { name: "Home", url: "/" },
                        { name: "Blog", url: "/blog" },
                    ]),
                ]}
            />

            {/* Hero Banner */}
            <section className="relative pt-[68px]" style={{ backgroundColor: "#1C3A1C" }}>
                <div className="max-w-[1320px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
                    <div className="max-w-2xl">
                        <div
                            className="flex items-center gap-2 mb-4"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "0.82rem",
                                color: "rgba(255,255,255,0.5)",
                            }}
                        >
                            <Link to="/" className="hover:text-white transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-white">Blog</span>
                        </div>
                        <LimeLabel text="Lawn Care Tips & Insights" />
                        <h1
                            className="text-white mb-4"
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
                                fontWeight: 700,
                                lineHeight: 1.12,
                            }}
                        >
                            Our <em>Blog</em>
                        </h1>
                        <p
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "1rem",
                                lineHeight: 1.8,
                                color: "rgba(255,255,255,0.55)",
                            }}
                        >
                            Expert lawn care advice, seasonal tips, and eco-friendly insights for South Surrey and Metro Vancouver homeowners.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-24" style={{ backgroundColor: "#FDFCFA" }}>
                <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
                    <AnimatedSection>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {blogPosts.map((post, i) => (
                                <StaggerChild key={post.slug} delay={i * 0.08}>
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="group block h-full"
                                    >
                                        <article
                                            className="p-7 h-full flex flex-col border transition-all duration-300 hover:-translate-y-1"
                                            style={{
                                                backgroundColor: "white",
                                                borderColor: "rgba(0,0,0,0.06)",
                                            }}
                                        >
                                            {/* Category + Read time */}
                                            <div className="flex items-center justify-between mb-4">
                                                <span
                                                    className="inline-flex items-center gap-1 px-2.5 py-1"
                                                    style={{
                                                        backgroundColor: "rgba(122, 182, 72, 0.1)",
                                                        fontFamily: "'DM Sans', sans-serif",
                                                        fontSize: "0.7rem",
                                                        fontWeight: 600,
                                                        color: "#2D5A2D",
                                                        letterSpacing: "0.05em",
                                                    }}
                                                >
                                                    <Tag className="w-3 h-3" />
                                                    {post.category}
                                                </span>
                                                <span
                                                    className="inline-flex items-center gap-1"
                                                    style={{
                                                        fontFamily: "'DM Sans', sans-serif",
                                                        fontSize: "0.72rem",
                                                        color: "#999",
                                                    }}
                                                >
                                                    <Clock className="w-3 h-3" />
                                                    {post.readTime}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h2
                                                className="mb-3 group-hover:text-[#7AB648] transition-colors"
                                                style={{
                                                    fontFamily: "'Playfair Display', serif",
                                                    fontSize: "1.15rem",
                                                    fontWeight: 700,
                                                    lineHeight: 1.3,
                                                    color: "#1A1A18",
                                                }}
                                            >
                                                {post.title}
                                            </h2>

                                            {/* Excerpt */}
                                            <p
                                                className="flex-1 mb-5"
                                                style={{
                                                    fontFamily: "'DM Sans', sans-serif",
                                                    fontSize: "0.85rem",
                                                    lineHeight: 1.7,
                                                    color: "#4A4A44",
                                                }}
                                            >
                                                {post.excerpt}
                                            </p>

                                            {/* Footer */}
                                            <div
                                                className="flex items-center justify-between pt-5 border-t"
                                                style={{ borderColor: "rgba(0,0,0,0.06)" }}
                                            >
                                                <span
                                                    style={{
                                                        fontFamily: "'DM Sans', sans-serif",
                                                        fontSize: "0.75rem",
                                                        color: "#999",
                                                    }}
                                                >
                                                    {post.date}
                                                </span>
                                                <span
                                                    className="inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                                                    style={{
                                                        fontFamily: "'DM Sans', sans-serif",
                                                        fontSize: "0.8rem",
                                                        fontWeight: 600,
                                                        color: "#7AB648",
                                                    }}
                                                >
                                                    Read more <ArrowRight className="w-3.5 h-3.5" />
                                                </span>
                                            </div>
                                        </article>
                                    </Link>
                                </StaggerChild>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </>
    );
}
