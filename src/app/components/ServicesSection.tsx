import { LimeLabel } from "./LimeLabel";
import { AnimatedSection, StaggerChild } from "./AnimatedSection";
import { Leaf, Scissors, Sprout, Wind, Droplets, Brush, ArrowRight } from "lucide-react";

const services = [
  { icon: Leaf, name: "Lawn Mowing", desc: "Regular professional mowing for a pristine, healthy lawn all season." },
  { icon: Scissors, name: "Hedge Trimming", desc: "Expert shaping and trimming for hedges, shrubs, and garden borders." },
  { icon: Sprout, name: "Fertilizing & Aeration", desc: "Eco-friendly fertilizers and core aeration for lush, green growth." },
  { icon: Wind, name: "Fall Cleanup", desc: "Complete leaf removal and garden prep for the coming winter months." },
  { icon: Droplets, name: "Power Washing", desc: "Restore driveways, patios, and walkways to like-new condition." },
  { icon: Brush, name: "Spring Clean & Power Raking", desc: "Clear winter debris and thatch to revive your lawn for spring." },
];

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#1C3A1C" }}>
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-lg">
            <LimeLabel text="Our Services" />
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "white",
              }}
            >
              Full-Service Lawn Care, <em>Year Round</em>
            </h2>
          </div>
          <p
            className="max-w-sm"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.5)",
            }}
          >
            From the first mow of spring to the final fall cleanup, we offer comprehensive lawn care solutions tailored to your property.
          </p>
        </AnimatedSection>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service, i) => (
            <StaggerChild key={service.name} delay={i * 0.08}>
              <div
                className="group p-7 border transition-all duration-300 hover:-translate-y-1 cursor-pointer relative overflow-hidden"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.06)",
                  borderRadius: "4px",
                }}
              >
                {/* Hover bottom border */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: "#7AB648" }}
                />

                <div
                  className="w-12 h-12 flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ backgroundColor: "rgba(122, 182, 72, 0.12)" }}
                >
                  <service.icon
                    className="w-5 h-5 transition-colors duration-300"
                    style={{ color: "rgba(122, 182, 72, 0.7)" }}
                  />
                </div>

                <h3
                  className="text-white mb-2"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "1rem",
                  }}
                >
                  {service.name}
                </h3>
                <p
                  className="mb-4"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.82rem",
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  {service.desc}
                </p>

                <span
                  className="inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "#7AB648",
                  }}
                >
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </StaggerChild>
          ))}
        </div>
      </div>
    </section>
  );
}
