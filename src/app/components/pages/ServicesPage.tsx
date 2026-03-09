import { Link } from "react-router";
import { LimeLabel } from "../LimeLabel";
import { AnimatedSection, StaggerChild } from "../AnimatedSection";
import { CTABand } from "../CTABand";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  Leaf, Scissors, Sprout, Wind, Droplets, ArrowRight,
  Flower2, Shovel, TreeDeciduous, Pipette, Trash2
} from "lucide-react";
import { SEOHead } from "../SEOHead";
import { JsonLd } from "../JsonLd";
import { serviceSchemas, breadcrumbSchema } from "../schema";

const serviceCategories = [
  {
    category: "Lawn Care Services",
    services: [
      {
        slug: "lawn-mowing",
        icon: Leaf,
        name: "Lawn Mowing",
        desc: "Our professional mowing service keeps your lawn looking pristine week after week. We use eco-friendly equipment and adjust cutting heights seasonally to promote healthy, thick grass growth.",
        img: "/images/services/lawn-mowing.png",
      },
      {
        slug: "aeration",
        icon: Wind,
        name: "Aeration",
        desc: "Core aeration loosens compacted soil, allowing water, air, and nutrients to reach grass roots for a thicker, healthier lawn.",
        img: "/images/services/fertilizer.png",
      },
      {
        slug: "fertilizing",
        icon: Sprout,
        name: "Fertilizing",
        desc: "Promote a lush, green lawn with our organic and eco-friendly fertilizing program. We nourish your soil and strengthen turf from the roots up.",
        img: "/images/services/fertilizer.png",
      },
      {
        slug: "power-raking",
        icon: Pipette,
        name: "Power Raking",
        desc: "Remove thatch buildup and revive your lawn's health. Power raking promotes better nutrient absorption and prepares your lawn for the growing season.",
        img: "/images/services/seasonal-cleanup.png",
      },
      {
        slug: "hedge-trimming",
        icon: Scissors,
        name: "Hedge Trimming",
        desc: "Expert hedge and shrub trimming to keep your property looking sharp. We shape and maintain all types of hedges including cedar, laurel, boxwood, and more.",
        img: "/images/services/hedge-trimming.png",
      },
      {
        slug: "pruning",
        icon: TreeDeciduous,
        name: "Pruning",
        desc: "Professional pruning for trees and shrubs to promote healthy growth, improve shape, and remove dead or damaged branches safely.",
        img: "/images/services/hedge-trimming.png",
      },
      {
        slug: "gardening",
        icon: Flower2,
        name: "Gardening",
        desc: "Complete garden care including planting, weeding, mulching, and garden bed maintenance. We keep your flower beds and garden spaces beautiful year-round.",
        img: "/images/services/seasonal-cleanup.png",
      },
      {
        slug: "spring-fall-cleanup",
        icon: Wind,
        name: "Spring & Fall Cleanup",
        desc: "Comprehensive seasonal cleanups to prepare your garden for winter or kick off the growing season. Includes leaf removal, garden bed clearing, and debris removal.",
        img: "/images/services/seasonal-cleanup.png",
      },
      {
        slug: "landscaping",
        icon: Shovel,
        name: "Landscaping",
        desc: "Transform your outdoor space with professional landscaping services. From garden design to installation, we create beautiful, functional landscapes.",
        img: "/images/services/lawn-mowing.png",
      },
      {
        slug: "gutter-cleaning",
        icon: Droplets,
        name: "Gutter Cleaning",
        desc: "Keep your gutters clean and free-flowing. We remove leaves, debris, and buildup to prevent water damage and protect your home's foundation.",
        img: "/images/services/power-washing.png",
      },
      {
        slug: "power-washing",
        icon: Droplets,
        name: "Power Washing",
        desc: "Restore your driveways, patios, walkways, fences, and decks to their original beauty. Our eco-friendly power washing removes dirt, moss, algae, and stains.",
        img: "/images/services/power-washing.png",
      },
    ],
  },
  {
    category: "Junk Removal Services",
    services: [
      {
        slug: "green-waste-removal",
        icon: Trash2,
        name: "Green Waste Removal",
        desc: "Eco-friendly removal and disposal of green waste, yard trimmings, branches, and organic debris. We handle the heavy lifting so you don't have to.",
        img: "/images/services/seasonal-cleanup.png",
      },
    ],
  },
];

export function ServicesPage() {
  return (
    <>
      <SEOHead
        title="Lawn Care Services | Go Green Mowing – South Surrey, BC"
        description="Professional lawn mowing, hedge trimming, aeration, fertilizing, power washing, landscaping, gutter cleaning, and seasonal cleanups. Eco-friendly lawn care in South Surrey and Metro Vancouver."
        canonical="/services"
      />
      <JsonLd
        data={[
          ...serviceSchemas,
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
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
              <span className="text-white">Services</span>
            </div>
            <LimeLabel text="What We Offer" />
            <h1
              className="text-white mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.12,
              }}
            >
              Our <em>Services</em>
            </h1>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              Comprehensive lawn care solutions tailored to the unique needs of every property. Free estimates — contact us today.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24" style={{ backgroundColor: "#FDFCFA" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          {serviceCategories.map((cat, catIdx) => (
            <div key={cat.category} className={catIdx > 0 ? "mt-20" : ""}>
              {/* Category Header */}
              <AnimatedSection className="mb-10">
                <LimeLabel text={cat.category} />
                <div
                  className="mt-2 w-16 h-[2px]"
                  style={{ backgroundColor: "#7AB648" }}
                />
              </AnimatedSection>

              {/* Service Cards */}
              <div className="space-y-6">
                {cat.services.map((service, i) => (
                  <StaggerChild key={service.name} delay={i * 0.05}>
                    <div
                      className={`grid lg:grid-cols-2 gap-0 overflow-hidden border transition-all hover:shadow-lg ${i % 2 === 1 ? "lg:direction-rtl" : ""
                        }`}
                      style={{ borderColor: "rgba(0,0,0,0.06)", borderRadius: "4px" }}
                    >
                      <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                        <ImageWithFallback
                          src={service.img}
                          alt={service.name}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                      </div>
                      <div
                        className={`p-8 lg:p-12 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""
                          }`}
                        style={{ backgroundColor: "white" }}
                      >
                        <div className="flex items-center gap-4 mb-5">
                          <div
                            className="w-12 h-12 flex items-center justify-center"
                            style={{ backgroundColor: "rgba(122, 182, 72, 0.12)" }}
                          >
                            <service.icon className="w-5 h-5" style={{ color: "#2D5A2D" }} />
                          </div>
                          <h3
                            style={{
                              fontFamily: "'Playfair Display', serif",
                              fontSize: "1.5rem",
                              fontWeight: 700,
                              color: "#1A1A18",
                            }}
                          >
                            {service.name}
                          </h3>
                        </div>
                        <p
                          className="mb-8"
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.92rem",
                            lineHeight: 1.8,
                            color: "#4A4A44",
                          }}
                        >
                          {service.desc}
                        </p>
                        <Link
                          to={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 self-start px-6 py-3 transition-all hover:-translate-y-0.5"
                          style={{
                            backgroundColor: "#7AB648",
                            color: "#1C3A1C",
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 600,
                            fontSize: "0.85rem",
                          }}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </StaggerChild>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
