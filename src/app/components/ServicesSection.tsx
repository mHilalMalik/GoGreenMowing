import { Link } from "react-router";
import { LimeLabel } from "./LimeLabel";
import { AnimatedSection, StaggerChild } from "./AnimatedSection";
import {
  Leaf, Scissors, Sprout, Wind, Droplets, ArrowRight,
  Flower2, Shovel, TreeDeciduous, Pipette, Trash2
} from "lucide-react";

const serviceCategories = [
  {
    category: "Lawn Care Services",
    services: [
      { slug: "lawn-mowing", icon: Leaf, name: "Lawn Mowing", img: "/images/services/lawn_mowing_service.png" },
      { slug: "aeration", icon: Wind, name: "Aeration", img: "/images/services/aeration_service.png" },
      { slug: "fertilizing", icon: Sprout, name: "Fertilizing", img: "/images/services/fertilizing_service.png" },
      { slug: "power-raking", icon: Pipette, name: "Power Raking", img: "/images/services/power_raking_service.png" },
      { slug: "hedge-trimming", icon: Scissors, name: "Hedge Trimming", img: "/images/services/hedge_trimming_service.png" },
      { slug: "pruning", icon: TreeDeciduous, name: "Pruning", img: "/images/services/pruning_service.png" },
      { slug: "gardening", icon: Flower2, name: "Gardening", img: "/images/services/gardening_service.png" },
      { slug: "spring-fall-cleanup", icon: Wind, name: "Spring & Fall Cleanup", img: "/images/services/seasonal_cleanup_service.png" },
      { slug: "landscaping", icon: Shovel, name: "Landscaping", img: "/images/services/landscaping_service.png" },
      { slug: "gutter-cleaning", icon: Droplets, name: "Gutter Cleaning", img: "/images/services/gutter_cleaning_service.png" },
      { slug: "power-washing", icon: Droplets, name: "Power Washing", img: "/images/services/power_washing_service.png" },
    ],
  },
  {
    category: "Junk Removal Services",
    services: [
      { slug: "green-waste-removal", icon: Trash2, name: "Green Waste Removal", img: "/images/services/green_waste_removal_service_v2.png" },
    ],
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#1C3A1C" }}>
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-lg relative">
            {/* Small Mascot Decoration */}
            <div className="absolute -top-12 -left-12 opacity-90 hidden sm:block">
              <img src="/images/mascot.png" alt="Mascot" className="w-20 h-20 object-contain drop-shadow-md" />
            </div>
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

        {/* Service Categories */}
        {serviceCategories.map((cat, catIdx) => (
          <div key={cat.category} className={catIdx > 0 ? "mt-14" : ""}>
            {/* Category Label */}
            <StaggerChild delay={catIdx * 0.1}>
              <h3
                className="mb-6 pb-3 border-b"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#7AB648",
                  borderColor: "rgba(122, 182, 72, 0.2)",
                  letterSpacing: "0.02em",
                }}
              >
                {cat.category}
              </h3>
            </StaggerChild>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {cat.services.map((service, i) => (
                <StaggerChild key={service.name} delay={(catIdx * 0.1) + (i * 0.04)}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="block group p-5 border transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
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

                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 flex items-center justify-center transition-colors duration-300 shrink-0"
                        style={{ backgroundColor: "rgba(122, 182, 72, 0.12)" }}
                      >
                        <service.icon
                          className="w-4 h-4 transition-colors duration-300"
                          style={{ color: "rgba(122, 182, 72, 0.7)" }}
                        />
                      </div>
                    </div>

                    <h4
                      className="text-white"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                      }}
                    >
                      {service.name}
                    </h4>
                  </Link>
                </StaggerChild>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <AnimatedSection className="mt-14 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-7 py-3 transition-all hover:-translate-y-0.5"
            style={{
              backgroundColor: "#7AB648",
              color: "#1C3A1C",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.88rem",
            }}
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
