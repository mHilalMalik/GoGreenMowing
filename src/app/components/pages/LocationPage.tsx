import { useParams, Link, Navigate } from "react-router";
import { ChevronRight, Phone, CheckCircle2, MapPin } from "lucide-react";
import { locationsData } from "../../data/locationsData";
import { PageSeo } from "../PageSeo";
import { CTABand } from "../CTABand";
import { AnimatedSection, StaggerChild } from "../AnimatedSection";
import { LimeLabel } from "../LimeLabel";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { NAP } from "../schema";

export function LocationPage() {
    const { citySlug } = useParams();
    const location = citySlug ? locationsData[citySlug] : null;

    if (!location) {
        return <Navigate to="/services" replace />;
    }

    return (
        <>
            <PageSeo path={`/lawn-care/${location.slug}`} />

            {/* Hero */}
            <section className="relative pt-[68px]" style={{ backgroundColor: "#1C3A1C" }}>
                <div className="max-w-[1320px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
                    <div className="max-w-3xl">
                        <div
                            className="flex items-center gap-2 mb-6 flex-wrap"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "0.82rem",
                                color: "rgba(255,255,255,0.6)",
                            }}
                        >
                            <Link to="/" className="hover:text-white transition-colors">Home</Link>
                            <ChevronRight className="w-3 h-3" />
                            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                            <ChevronRight className="w-3 h-3" />
                            <span className="text-white font-medium">{location.city}</span>
                        </div>

                        <LimeLabel text={`Serving ${location.city}, BC`} />

                        <h1
                            className="text-white mb-6"
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                                fontWeight: 700,
                                lineHeight: 1.1,
                            }}
                        >
                            {location.heroHeadline}
                        </h1>

                        <p
                            className="mb-8"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "1.1rem",
                                lineHeight: 1.8,
                                color: "rgba(255,255,255,0.8)",
                            }}
                        >
                            {location.heroSubheadline}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 transition-all hover:-translate-y-0.5"
                                style={{
                                    backgroundColor: "#7AB648",
                                    color: "#1C3A1C",
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 600,
                                    fontSize: "0.95rem",
                                }}
                            >
                                Get a free estimate
                            </Link>
                            <a
                                href={`tel:${NAP.telephone}`}
                                className="inline-flex items-center gap-2 px-8 py-4 border transition-colors hover:bg-white/10"
                                style={{
                                    borderColor: "rgba(255,255,255,0.3)",
                                    color: "white",
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 600,
                                    fontSize: "0.95rem",
                                }}
                            >
                                <Phone className="w-4 h-4" /> {NAP.telephoneDisplay}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro + neighbourhoods */}
            <AnimatedSection className="py-20" style={{ backgroundColor: "#FDFCFA" }}>
                <div className="max-w-[900px] mx-auto px-6 lg:px-8">
                    {location.intro.map((para, i) => (
                        <p
                            key={i}
                            className="mb-5"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "1rem",
                                lineHeight: 1.85,
                                color: "#4A4A44",
                            }}
                        >
                            {para}
                        </p>
                    ))}

                    <div
                        className="mt-10 p-7 border"
                        style={{ backgroundColor: "white", borderColor: "rgba(0,0,0,0.07)" }}
                    >
                        <h2
                            className="mb-4 inline-flex items-center gap-2"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 600,
                                fontSize: "0.85rem",
                                letterSpacing: "0.05em",
                                textTransform: "uppercase" as const,
                                color: "#1C3A1C",
                            }}
                        >
                            <MapPin className="w-4 h-4" style={{ color: "#7AB648" }} />
                            {location.city} areas we serve
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {location.neighbourhoods.map((n) => (
                                <span
                                    key={n}
                                    className="px-3 py-1.5"
                                    style={{
                                        backgroundColor: "rgba(122, 182, 72, 0.1)",
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: "0.8rem",
                                        color: "#2D5A2D",
                                    }}
                                >
                                    {n}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Content sections */}
            <section className="pb-8" style={{ backgroundColor: "#FDFCFA" }}>
                <div className="max-w-[900px] mx-auto px-6 lg:px-8">
                    {location.sections.map((section) => (
                        <AnimatedSection key={section.heading} className="mb-14">
                            <h2
                                className="mb-5"
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
                                    fontWeight: 700,
                                    lineHeight: 1.25,
                                    color: "#1A1A18",
                                }}
                            >
                                {section.heading}
                            </h2>
                            {section.body.map((para, i) => (
                                <p
                                    key={i}
                                    className="mb-4"
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: "1rem",
                                        lineHeight: 1.85,
                                        color: "#4A4A44",
                                    }}
                                >
                                    {para}
                                </p>
                            ))}
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* Gallery */}
            <AnimatedSection className="py-16" style={{ backgroundColor: "#F7F4EE" }}>
                <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
                    <LimeLabel text="Recent Work" />
                    <h2
                        className="mb-10"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
                            fontWeight: 700,
                            color: "#1A1A18",
                        }}
                    >
                        Jobs around <em>{location.city}</em>
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {location.gallery.map((item, i) => (
                            <StaggerChild key={item.img} delay={i * 0.06}>
                                <figure>
                                    <div className="overflow-hidden h-56">
                                        <ImageWithFallback
                                            src={item.img}
                                            alt={item.alt}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                                        />
                                    </div>
                                    <figcaption
                                        className="mt-2.5"
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: "0.78rem",
                                            color: "#4A4A44",
                                        }}
                                    >
                                        {item.caption}
                                    </figcaption>
                                </figure>
                            </StaggerChild>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Service priorities */}
            <AnimatedSection className="py-20" style={{ backgroundColor: "#FDFCFA" }}>
                <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
                    <LimeLabel text="What We Focus On Here" />
                    <h2
                        className="mb-10"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
                            fontWeight: 700,
                            color: "#1A1A18",
                        }}
                    >
                        Services that matter most in <em>{location.city}</em>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-5">
                        {location.servicePriorities.map((service, i) => (
                            <StaggerChild key={service.slug} delay={i * 0.06}>
                                <Link
                                    to={`/services/${service.slug}`}
                                    className="group block h-full p-6 border transition-all hover:-translate-y-0.5 hover:shadow-md"
                                    style={{ backgroundColor: "white", borderColor: "rgba(0,0,0,0.07)" }}
                                >
                                    <h3
                                        className="mb-2 inline-flex items-center gap-2 group-hover:text-[#7AB648] transition-colors"
                                        style={{
                                            fontFamily: "'Playfair Display', serif",
                                            fontSize: "1.1rem",
                                            fontWeight: 600,
                                            color: "#1A1A18",
                                        }}
                                    >
                                        <CheckCircle2 className="w-4 h-4" style={{ color: "#7AB648" }} />
                                        {service.title}
                                    </h3>
                                    <p
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: "0.88rem",
                                            lineHeight: 1.75,
                                            color: "#4A4A44",
                                        }}
                                    >
                                        {service.why}
                                    </p>
                                </Link>
                            </StaggerChild>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* FAQs — visible on page, so the FAQPage schema is genuinely backed */}
            <AnimatedSection className="py-20" style={{ backgroundColor: "#F7F4EE" }}>
                <div className="max-w-[900px] mx-auto px-6 lg:px-8">
                    <LimeLabel text="FAQ" />
                    <h2
                        className="mb-10"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
                            fontWeight: 700,
                            color: "#1A1A18",
                        }}
                    >
                        {location.city} lawn care <em>questions</em>
                    </h2>
                    <div className="space-y-5">
                        {location.faqs.map((faq) => (
                            <div
                                key={faq.question}
                                className="p-6 border"
                                style={{ backgroundColor: "white", borderColor: "rgba(0,0,0,0.07)" }}
                            >
                                <h3
                                    className="mb-3"
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: 600,
                                        fontSize: "1rem",
                                        color: "#1A1A18",
                                    }}
                                >
                                    {faq.question}
                                </h3>
                                <p
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontSize: "0.92rem",
                                        lineHeight: 1.8,
                                        color: "#4A4A44",
                                    }}
                                >
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            <CTABand />
        </>
    );
}
