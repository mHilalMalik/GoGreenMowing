import { useParams, Link, Navigate } from "react-router";
import { ArrowRight, CheckCircle2, ChevronRight, Phone } from "lucide-react";
import { servicesData } from "../../data/servicesData";
import { SEOHead } from "../SEOHead";
import { JsonLd } from "../JsonLd";
import { CTABand } from "../CTABand";
import { AnimatedSection, StaggerChild } from "../AnimatedSection";
import { LimeLabel } from "../LimeLabel";

export function ServiceDetailPage() {
    const { serviceSlug } = useParams();

    // Handled undefined/invalid slug
    const service = serviceSlug ? servicesData[serviceSlug] : null;

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    // Generate Service Schema Dynamically for this local page
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: service.title,
        provider: {
            "@type": "LocalBusiness",
            name: "Go Green Mowing",
            url: "https://gogreenmowing.ca",
            image: "https://gogreenmowing.ca/logo.png",
            telephone: "+1-778-558-0447"
        },
        areaServed: service.areasServed.map((area) => ({
            "@type": "City",
            name: area,
            containedInPlace: { "@type": "AdministrativeArea", name: "British Columbia", addressRegion: "BC" }
        })),
        description: service.metaDescription,
        url: `https://gogreenmowing.ca/services/${service.slug}`
    };

    // Generate FAQ Schema Dynamically
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer
            }
        }))
    };

    return (
        <>
            <SEOHead
                title={service.metaTitle}
                description={service.metaDescription}
                canonical={`/services/${service.slug}`}
            />
            <JsonLd data={[serviceSchema, faqSchema]} />

            {/* Hero Banner */}
            <section className="relative pt-[68px]" style={{ backgroundColor: "#1C3A1C" }}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/clean-textile.png')" }}></div>
                <div className="max-w-[1320px] mx-auto px-6 lg:px-8 py-20 lg:py-28 relative z-10">
                    <div className="max-w-3xl">
                        <div
                            className="flex items-center gap-2 mb-6"
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
                            <span className="text-white font-medium">{service.title}</span>
                        </div>

                        <LimeLabel text="Professional Service" />

                        <h1
                            className="text-white mb-6"
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                                fontWeight: 700,
                                lineHeight: 1.1,
                            }}
                        >
                            {service.heroHeadline}
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
                            {service.heroSubheadline}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded transition-all hover:-translate-y-1 hover:shadow-lg"
                                style={{
                                    backgroundColor: "#7AB648",
                                    color: "#1C3A1C",
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 600,
                                    fontSize: "0.95rem",
                                }}
                            >
                                Get a Free Estimate
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a
                                href="tel:7785580447"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded border border-white/20 transition-all hover:bg-white/10"
                                style={{
                                    color: "white",
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 600,
                                    fontSize: "0.95rem",
                                }}
                            >
                                <Phone className="w-4 h-4" />
                                Call (778) 558-0447
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Sections */}
            <section className="py-20 lg:py-28" style={{ backgroundColor: "#FDFCFA" }}>
                <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-16">

                        {/* Left Column: Content */}
                        <div className="lg:col-span-8">
                            <AnimatedSection>
                                {service.contentSections.map((section, index) => (
                                    <div key={index} className="mb-14 last:mb-0">
                                        <h2
                                            className="mb-6"
                                            style={{
                                                fontFamily: "'Playfair Display', serif",
                                                fontSize: "clamp(1.8rem, 3vw, 2.2rem)",
                                                fontWeight: 700,
                                                lineHeight: 1.2,
                                                color: "#1A1A18",
                                            }}
                                        >
                                            {section.heading}
                                        </h2>
                                        <p
                                            style={{
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontSize: "1.05rem",
                                                lineHeight: 1.8,
                                                color: "#4A4A44",
                                            }}
                                        >
                                            {section.body}
                                        </p>
                                    </div>
                                ))}
                            </AnimatedSection>
                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="lg:col-span-4">
                            <StaggerChild delay={0.2} className="sticky top-24">
                                {/* Service Area Box */}
                                <div className="p-8 rounded-lg mb-8" style={{ backgroundColor: "#F7F4EE", border: "1px solid rgba(0,0,0,0.05)" }}>
                                    <h3
                                        className="mb-4"
                                        style={{
                                            fontFamily: "'Playfair Display', serif",
                                            fontSize: "1.4rem",
                                            fontWeight: 700,
                                            color: "#1A1A18",
                                        }}
                                    >
                                        Areas We Serve
                                    </h3>
                                    <ul className="space-y-3">
                                        {service.areasServed.map((area, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: "#7AB648" }} />
                                                <span style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A4A44", fontSize: "0.95rem" }}>
                                                    {area}, BC
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Quick Contact Box */}
                                <div className="p-8 rounded-lg text-white" style={{ backgroundColor: "#1C3A1C" }}>
                                    <h3
                                        className="mb-3"
                                        style={{
                                            fontFamily: "'Playfair Display', serif",
                                            fontSize: "1.4rem",
                                            fontWeight: 700,
                                        }}
                                    >
                                        Need Commercial Service?
                                    </h3>
                                    <p
                                        className="mb-6"
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: "0.9rem",
                                            lineHeight: 1.6,
                                            color: "rgba(255,255,255,0.7)",
                                        }}
                                    >
                                        We provide extensive maintenance packages for commercial properties and stratas across Metro Vancouver.
                                    </p>
                                    <Link
                                        to="/contact"
                                        className="inline-flex w-full justify-center items-center py-3 rounded text-center transition-colors hover:bg-white/90"
                                        style={{
                                            backgroundColor: "white",
                                            color: "#1C3A1C",
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontWeight: 700,
                                            fontSize: "0.9rem",
                                        }}
                                    >
                                        Request Commercial Quote
                                    </Link>
                                </div>
                            </StaggerChild>
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 lg:py-28" style={{ backgroundColor: "#F7F4EE" }}>
                <div className="max-w-[800px] mx-auto px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <LimeLabel text="FAQ" withLine={false} />
                        <h2
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: "clamp(2rem, 3vw, 2.5rem)",
                                fontWeight: 700,
                                color: "#1A1A18",
                            }}
                        >
                            Frequently Asked Questions
                        </h2>
                    </AnimatedSection>

                    <div className="space-y-6">
                        {service.faqs.map((faq, index) => (
                            <StaggerChild key={index} delay={0.1 * index}>
                                <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-100 shadow-sm">
                                    <h4
                                        className="mb-3"
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: "1.1rem",
                                            fontWeight: 700,
                                            color: "#1A1A18",
                                        }}
                                    >
                                        {faq.question}
                                    </h4>
                                    <p
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontSize: "0.95rem",
                                            lineHeight: 1.7,
                                            color: "#4A4A44",
                                        }}
                                    >
                                        {faq.answer}
                                    </p>
                                </div>
                            </StaggerChild>
                        ))}
                    </div>
                </div>
            </section>

            <CTABand />
        </>
    );
}
