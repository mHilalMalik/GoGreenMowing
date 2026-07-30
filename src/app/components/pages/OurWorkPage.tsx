import { useState } from "react";
import { Link } from "react-router";
import { LimeLabel } from "../LimeLabel";
import { AnimatedSection, StaggerChild } from "../AnimatedSection";
import { CTABand } from "../CTABand";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { MapPin } from "lucide-react";
import { PageSeo } from "../PageSeo";
import { portfolioProjects, portfolioCategories } from "../../data/portfolioData";

const categories = ["All", ...portfolioCategories];

export function OurWorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <>
      <PageSeo path="/our-work" />
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
              <span className="text-white">Our Work</span>
            </div>
            <LimeLabel text="Portfolio" />
            <h1
              className="text-white mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.12,
              }}
            >
              Our <em>Work</em>
            </h1>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              Real jobs on real properties across South Surrey, White Rock, Surrey, Delta and Langley — mowing programs, hedge work, seasonal cleanups, landscaping and exterior cleaning. Filter by the kind of work you need.
            </p>
          </div>
        </div>
      </section>

      {/* Filter + Gallery */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#FDFCFA" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          {/* Category Filter */}
          <AnimatedSection className="flex flex-wrap gap-2 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 border transition-all duration-200"
                style={{
                  backgroundColor: activeCategory === cat ? "#1C3A1C" : "transparent",
                  borderColor: activeCategory === cat ? "#1C3A1C" : "rgba(0,0,0,0.12)",
                  color: activeCategory === cat ? "white" : "#4A4A44",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.82rem",
                }}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Project Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project, i) => (
              <StaggerChild key={project.title} delay={i * 0.06}>
                <div
                  className="group border overflow-hidden transition-all hover:shadow-xl"
                  style={{ borderColor: "rgba(0,0,0,0.06)", borderRadius: "4px" }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-64">
                    <ImageWithFallback
                      src={project.img}
                      alt={project.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{
                        background: "linear-gradient(to top, rgba(28, 58, 28, 0.7) 0%, transparent 60%)",
                      }}
                    />
                    {/* Category badge */}
                    <span
                      className="absolute top-4 left-4 px-3 py-1"
                      style={{
                        backgroundColor: "rgba(28, 58, 28, 0.85)",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        color: "#7AB648",
                        textTransform: "uppercase" as const,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6" style={{ backgroundColor: "white" }}>
                    <h3
                      className="mb-2"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.15rem",
                        fontWeight: 600,
                        color: "#1A1A18",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="mb-3 inline-flex items-center gap-1"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        color: "#7AB648",
                      }}
                    >
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </p>
                    <p
                      className="mb-4"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.82rem",
                        lineHeight: 1.7,
                        color: "#4A4A44",
                      }}
                    >
                      {project.desc}
                    </p>
                  </div>
                </div>
              </StaggerChild>
            ))}
          </div>

          {/* Stats Bar */}
          <AnimatedSection className="mt-20">
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-0"
              style={{ backgroundColor: "#1C3A1C" }}
            >
              {[
                { num: "100+", label: "Properties Maintained" },
                { num: "12", label: "Active Projects" },
                { num: "98%", label: "Client Retention Rate" },
                { num: "3", label: "Years Of Experience" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`text-center py-10 px-6 ${i < 3 ? "border-r" : ""
                    }`}
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <p
                    className="text-white mb-1"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "2rem",
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    {stat.num}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      color: "rgba(255,255,255,0.4)",
                      textTransform: "uppercase" as const,
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTABand />
    </>
  );
}
