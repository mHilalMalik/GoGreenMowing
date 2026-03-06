import { Phone } from "lucide-react";
import { Link } from "react-router";
import { AnimatedSection } from "./AnimatedSection";

export function CTABand() {
  return (
    <AnimatedSection>
      <section className="relative overflow-hidden" style={{ backgroundColor: "#7AB648" }}>
        {/* Subtle background circles */}
        <div
          className="absolute top-1/2 left-[15%] -translate-y-1/2 w-[400px] h-[400px] rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
        />
        <div
          className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[280px] h-[280px] rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
        />

        <div className="max-w-[1320px] mx-auto px-6 lg:px-8 py-16 lg:py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-lg">
              <p
                className="mb-3"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.7)",
                  textTransform: "uppercase" as const,
                }}
              >
                Get Started Today
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "white",
                }}
              >
                Ready For A Greener, More <em>Beautiful Yard?</em>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:7785580447"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: "white",
                  color: "#1C3A1C",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                }}
              >
                <Phone className="w-4 h-4" />
                Call 778-558-0447
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 border transition-all hover:bg-white/10"
                style={{
                  borderColor: "white",
                  color: "white",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                }}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
