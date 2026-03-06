import { Star } from "lucide-react";
import { LimeLabel } from "./LimeLabel";
import { AnimatedSection, StaggerChild } from "./AnimatedSection";

const testimonials = [
  {
    quote: "Go Green Mowing transformed our backyard into something truly special. The team is professional, punctual, and truly cares about quality. We couldn't be happier with the results.",
    name: "Sarah Mitchell",
    area: "Morgan Crossing",
    initials: "SM",
  },
  {
    quote: "Finally found a lawn care service that uses eco-friendly products without compromising on results. Our lawn has never looked better, and we feel good about the environmental impact.",
    name: "David Lee",
    area: "Grandview Heights",
    initials: "DL",
  },
  {
    quote: "Reliable, affordable, and the results speak for themselves. From the first consultation to every maintenance visit, Go Green has exceeded our expectations consistently.",
    name: "Priya Kapoor",
    area: "Sunnyside Park",
    initials: "PK",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: "#1C3A1C" }}>
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-14">
          <LimeLabel text="Testimonials" />
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "white",
            }}
          >
            Hear From Our <em>Satisfied Customers</em>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-3">
          {testimonials.map((t, i) => (
            <StaggerChild key={t.name} delay={i * 0.1}>
              <div
                className="p-7 h-full flex flex-col border"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.06)",
                  borderRadius: "4px",
                }}
              >
                {/* Decorative quote */}
                <span
                  className="block mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "3.5rem",
                    lineHeight: 0.8,
                    color: "rgba(122, 182, 72, 0.2)",
                    fontWeight: 700,
                  }}
                >
                  "
                </span>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-current" style={{ color: "#D4A843" }} />
                  ))}
                </div>

                <p
                  className="flex-1 mb-6"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.88rem",
                    lineHeight: 1.75,
                    color: "rgba(255,255,255,0.7)",
                    fontStyle: "italic",
                  }}
                >
                  {t.quote}
                </p>

                <div
                  className="pt-5 border-t flex items-center gap-3"
                  style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "#7AB648",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.7rem",
                      color: "#1C3A1C",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        color: "white",
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.72rem",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      {t.area}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerChild>
          ))}
        </div>
      </div>
    </section>
  );
}
