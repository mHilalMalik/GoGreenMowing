import { Link } from "react-router";
import { LimeLabel } from "../LimeLabel";
import { AnimatedSection, StaggerChild } from "../AnimatedSection";
import { CTABand } from "../CTABand";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Leaf, Scissors, Sprout, Wind, Droplets, Brush, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Leaf,
    name: "Lawn Mowing",
    desc: "Our professional mowing service keeps your lawn looking pristine week after week. We use eco-friendly equipment and adjust cutting heights seasonally to promote healthy, thick grass growth. Whether you need weekly maintenance or bi-weekly visits, we've got you covered.",
    img: "https://images.unsplash.com/photo-1747548747539-f523abfe6982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXNoJTIwZ3JlZW4lMjBsYXduJTIwbW93ZWQlMjBzdHJpcGVzJTIwZ29sZGVuJTIwaG91cnxlbnwxfHx8fDE3NzI3Nzk1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Scissors,
    name: "Hedge Trimming",
    desc: "Expert hedge and shrub trimming to keep your property looking sharp. We shape and maintain all types of hedges including cedar, laurel, boxwood, and more. Clean lines and a polished appearance guaranteed with every visit.",
    img: "https://images.unsplash.com/photo-1760643491623-3de22e9980e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGdhcmRlbiUyMG1ha2VvdmVyJTIwYmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3Mjc3OTU1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Sprout,
    name: "Fertilizing & Aeration",
    desc: "Promote a lush, green lawn with our professional fertilizing and core aeration services. We use only organic and eco-friendly products to nourish your soil and strengthen your turf from the roots up for lasting results.",
    img: "https://images.unsplash.com/photo-1758612120966-b20c01160c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsYW5kc2NhcGUlMjBkZXNpZ24lMjBlc3RhdGUlMjBnYXJkZW58ZW58MXx8fHwxNzcyNzc5NTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Wind,
    name: "Fall Cleanup",
    desc: "Comprehensive fall cleanup service including leaf removal, garden bed clearing, and lawn preparation for winter. We ensure your property is tidy and ready to weather the colder months ahead beautifully.",
    img: "https://images.unsplash.com/photo-1713777571574-12e4b0ab5275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGdhcmRlbiUyMGdyZWVuJTIwZWNvLWZyaWVuZGx5fGVufDF8fHx8MTc3Mjc3OTU1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Droplets,
    name: "Power Washing",
    desc: "Restore your driveways, patios, walkways, fences, and decks to their original beauty. Our eco-friendly power washing removes dirt, moss, algae, and stains without harmful chemicals.",
    img: "https://images.unsplash.com/photo-1769311485529-46b3c90f760e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwbGFuZHNjYXBpbmclMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI3Nzk1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Brush,
    name: "Spring Clean & Power Raking",
    desc: "Kick off the growing season right with our spring cleanup and power raking service. We remove winter debris, dethatch your lawn, and prepare your garden beds for a beautiful spring bloom.",
    img: "https://images.unsplash.com/photo-1772538620835-731723af362d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJpbmclMjBnYXJkZW4lMjBmcmVzaCUyMGdyZWVuJTIwZmxvd2VycyUyMHByb3BlcnR5fGVufDF8fHx8MTc3Mjc3OTU1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function ServicesPage() {
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
          <div className="space-y-6">
            {services.map((service, i) => (
              <StaggerChild key={service.name} delay={i * 0.05}>
                <div
                  className={`grid lg:grid-cols-2 gap-0 overflow-hidden border transition-all hover:shadow-lg ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
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
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${i % 2 === 1 ? "lg:order-1" : ""}`} style={{ backgroundColor: "white" }}>
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
                      to="/contact"
                      className="inline-flex items-center gap-2 self-start px-6 py-3 transition-all hover:-translate-y-0.5"
                      style={{
                        backgroundColor: "#7AB648",
                        color: "#1C3A1C",
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.85rem",
                      }}
                    >
                      Get a Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
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
