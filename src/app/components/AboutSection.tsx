import { Check } from "lucide-react";
import { Link } from "react-router";
import { LimeLabel } from "./LimeLabel";
import { AnimatedSection, StaggerChild } from "./AnimatedSection";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  "Expert Design & Custom Solutions",
  "Sustainable Practices & Eco-Friendly",
  "Reliable Year-Round Service",
  "100% Satisfaction Guaranteed",
];

export function AboutSection() {
  return (
    <AnimatedSection
      id="about"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#FDFCFA" }}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Photos */}
          <StaggerChild delay={0.1} className="relative">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759497860802-9cba5782b455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnYXJkZW5lciUyMHdvcmtpbmclMjBvdXRkb29ycyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3Mjc3OTU1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional gardener working outdoors"
                className="w-full h-[500px] lg:h-[580px] object-cover"
              />
              {/* Overlapping small photo */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 w-40 h-40 lg:w-52 lg:h-52 border-[6px] border-white shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1705521680204-0f156bb0660e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBjbG9zZS11cCUyMHBsYW50cyUyMGVjby1mcmllbmRseXxlbnwxfHx8fDE3NzI3Nzk1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Close-up garden detail"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Experience badge */}
              <div
                className="absolute top-6 right-6 px-5 py-3 shadow-lg"
                style={{ backgroundColor: "#7AB648" }}
              >
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    color: "white",
                    lineHeight: 1,
                  }}
                >
                  10+
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.85)",
                    textTransform: "uppercase" as const,
                  }}
                >
                  Years Experience
                </p>
              </div>
            </div>
          </StaggerChild>

          {/* Right - Content */}
          <StaggerChild delay={0.3}>
            <LimeLabel text="About Go Green Mowing" />
            <h2
              className="mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#1A1A18",
              }}
            >
              We Are <em>Dedicated</em> To Transforming Your Outdoor Spaces
            </h2>
            <p
              className="mb-4"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "#4A4A44",
              }}
            >
              Go Green Mowing is a locally owned and operated lawn care company based in South Surrey, BC. We specialize in eco-friendly lawn maintenance, using sustainable products and practices that keep your lawn healthy and our environment protected.
            </p>
            <p
              className="mb-8"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "#4A4A44",
              }}
            >
              From residential properties to commercial complexes, our experienced team delivers meticulous results with every visit.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feat) => (
                <div key={feat} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "#7AB648" }}
                  >
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      color: "#1A1A18",
                    }}
                  >
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-block px-7 py-3 transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: "#7AB648",
                color: "#1C3A1C",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.88rem",
              }}
            >
              Schedule a Consultation →
            </Link>
          </StaggerChild>
        </div>
      </div>
    </AnimatedSection>
  );
}
