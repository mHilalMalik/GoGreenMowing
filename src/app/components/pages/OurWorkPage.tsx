import { useState } from "react";
import { Link } from "react-router";
import { LimeLabel } from "../LimeLabel";
import { AnimatedSection, StaggerChild } from "../AnimatedSection";
import { CTABand } from "../CTABand";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Residential", "Commercial", "Seasonal", "Luxury"];

const projects = [
  {
    title: "Residential Garden Makeover",
    category: "Residential",
    desc: "Complete front and backyard transformation for a family home in Morgan Crossing. Included lawn restoration, new garden beds, and seasonal planting.",
    img: "https://images.unsplash.com/photo-1760643491623-3de22e9980e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGdhcmRlbiUyMG1ha2VvdmVyJTIwYmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3Mjc3OTU1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Luxury Landscape Design",
    category: "Luxury",
    desc: "High-end landscape design for a Grandview Heights estate. Precision-mowed lawn, sculpted hedges, and eco-friendly maintenance program.",
    img: "https://images.unsplash.com/photo-1758612120966-b20c01160c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsYW5kc2NhcGUlMjBkZXNpZ24lMjBlc3RhdGUlMjBnYXJkZW58ZW58MXx8fHwxNzcyNzc5NTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Commercial Office Complex",
    category: "Commercial",
    desc: "Year-round lawn and landscape maintenance for a multi-building office complex. Weekly mowing, hedge trimming, and seasonal cleanups.",
    img: "https://images.unsplash.com/photo-1769311485529-46b3c90f760e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwbGFuZHNjYXBpbmclMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI3Nzk1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Eco-Friendly Urban Garden",
    category: "Residential",
    desc: "Transformed a small urban lot into a lush, sustainable garden oasis with native plants, organic lawn treatment, and rainwater-friendly landscaping.",
    img: "https://images.unsplash.com/photo-1713777571574-12e4b0ab5275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGdhcmRlbiUyMGdyZWVuJTIwZWNvLWZyaWVuZGx5fGVufDF8fHx8MTc3Mjc3OTU1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Spring Property Refresh",
    category: "Seasonal",
    desc: "Full spring cleanup including power raking, aeration, dethatching, and garden bed preparation for a Sunnyside Park residence.",
    img: "https://images.unsplash.com/photo-1772538620835-731723af362d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJpbmclMjBnYXJkZW4lMjBmcmVzaCUyMGdyZWVuJTIwZmxvd2VycyUyMHByb3BlcnR5fGVufDF8fHx8MTc3Mjc3OTU1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Backyard Patio Garden",
    category: "Residential",
    desc: "Designed and maintained a beautiful outdoor living area with manicured lawn, perennial borders, and a stepping stone pathway.",
    img: "https://images.unsplash.com/photo-1763220351706-d6f813ae6b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNreWFyZCUyMHBhdGlvJTIwZ2FyZGVuJTIwb3V0ZG9vciUyMGxpdmluZ3xlbnwxfHx8fDE3NzI3ODAyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Curb Appeal Transformation",
    category: "Residential",
    desc: "Front yard makeover featuring precision edging, fresh sod installation, hedge reshaping, and a comprehensive seasonal maintenance plan.",
    img: "https://images.unsplash.com/photo-1759355787114-09af8ee10783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcm9udCUyMHlhcmQlMjBsYW5kc2NhcGluZyUyMGN1cmIlMjBhcHBlYWwlMjBob3VzZXxlbnwxfHx8fDE3NzI3ODAyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Sculptured Hedge Artistry",
    category: "Luxury",
    desc: "Precision hedge sculpting and topiary work for a luxury property in South Surrey. Monthly maintenance keeps every edge perfect.",
    img: "https://images.unsplash.com/photo-1721569848997-7bf99ceb5d65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWRnZSUyMHRyaW1taW5nJTIwc2hhcGVkJTIwdG9waWFyeSUyMGdhcmRlbnxlbnwxfHx8fDE3NzI3ODAyNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Perennial Garden Installation",
    category: "Seasonal",
    desc: "Full garden bed redesign with colorful perennial plantings chosen for year-round interest and low-maintenance beauty.",
    img: "https://images.unsplash.com/photo-1759577453690-c19eec4c2a89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjBiZWQlMjBnYXJkZW4lMjBjb2xvcmZ1bCUyMHBlcmVubmlhbHN8ZW58MXx8fHwxNzcyNzgwMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Community Park Landscape",
    category: "Commercial",
    desc: "Ongoing maintenance and seasonal care for a neighborhood park including large lawn areas, walking paths, and communal green spaces.",
    img: "https://images.unsplash.com/photo-1765989502040-d5585e77988e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBwYXJrJTIwZ3JlZW4lMjBncmFzcyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzI3ODAyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Golden Hour Estate",
    category: "Luxury",
    desc: "Weekly premium lawn care for a sprawling estate property. Striped mowing patterns, perimeter hedges, and eco-friendly treatments.",
    img: "https://images.unsplash.com/photo-1747548747539-f523abfe6982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXNoJTIwZ3JlZW4lMjBsYXduJTIwbW93ZWQlMjBzdHJpcGVzJTIwZ29sZGVuJTIwaG91cnxlbnwxfHx8fDE3NzI3Nzk1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Fall Cleanup Campaign",
    category: "Seasonal",
    desc: "Comprehensive fall leaf removal, lawn overseeding, and winterization for a full block of residential properties in Elgin.",
    img: "https://images.unsplash.com/photo-1648214622423-07587f3b3bba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXduJTIwbW93ZXIlMjBlcXVpcG1lbnQlMjBnYXJkZW4lMjBzaGVkfGVufDF8fHx8MTc3Mjc4MDI2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function OurWorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
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
              A showcase of projects across South Surrey and Metro Vancouver. From cozy residential gardens to large commercial complexes — see the results for yourself.
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
                      alt={project.title}
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
                    <span
                      className="inline-flex items-center gap-1 transition-colors hover:text-[#2D5A2D]"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "#7AB648",
                      }}
                    >
                      View Details <ArrowRight className="w-3 h-3" />
                    </span>
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
                { num: "500+", label: "Properties Maintained" },
                { num: "12", label: "Active Projects" },
                { num: "98%", label: "Client Retention Rate" },
                { num: "10+", label: "Years Of Experience" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`text-center py-10 px-6 ${
                    i < 3 ? "border-r" : ""
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
