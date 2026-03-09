import { Star } from "lucide-react";
import { LimeLabel } from "./LimeLabel";
import { AnimatedSection, StaggerChild } from "./AnimatedSection";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const pillars = [
  { num: "01", title: "Expertise & Experience", desc: "Over a decade of professional lawn care across South Surrey and Metro Vancouver." },
  { num: "02", title: "Quality & Reliability", desc: "Consistent, punctual service with meticulous attention to every detail." },
  { num: "03", title: "Eco-Friendly Practices", desc: "Sustainable products and methods that protect both your lawn and the environment." },
  { num: "04", title: "Satisfaction Guaranteed", desc: "We stand behind every project with our commitment to your complete satisfaction." },
];

export function WhyChooseUs() {
  return (
    <AnimatedSection className="py-24 lg:py-32" style={{ backgroundColor: "#F7F4EE" }}>
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content */}
          <StaggerChild delay={0.1}>
            <LimeLabel text="Why Choose Us" />
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
              Transforming Your Outdoors With <em>Creativity And Care</em>
            </h2>
            <p
              className="mb-10"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "#4A4A44",
              }}
            >
              Every lawn tells a story. Ours is one of dedication, sustainability, and exceptional craftsmanship that has earned the trust of hundreds of clients.
            </p>

            <div className="space-y-0">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.num}
                  className={`flex gap-6 py-6 ${i < pillars.length - 1 ? "border-b" : ""}`}
                  style={{ borderColor: "rgba(0,0,0,0.08)" }}
                >
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: "italic",
                      fontSize: "1.4rem",
                      fontWeight: 600,
                      color: "#7AB648",
                      lineHeight: 1,
                      minWidth: "32px",
                    }}
                  >
                    {pillar.num}
                  </span>
                  <div>
                    <h4
                      className="mb-1"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        color: "#1A1A18",
                      }}
                    >
                      {pillar.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.82rem",
                        lineHeight: 1.6,
                        color: "#4A4A44",
                      }}
                    >
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </StaggerChild>

          {/* Right - Photo */}
          <StaggerChild delay={0.3} className="relative">
            <ImageWithFallback
              src="/images/owner-portrait.png"
              alt="Lawn care professional at work"
              className="w-full h-[520px] lg:h-[620px] object-cover"
            />
            {/* Reviews floating card */}
            <div
              className="absolute top-6 left-6 px-6 py-5 shadow-xl"
              style={{ backgroundColor: "#1C3A1C" }}
            >
              <p
                className="mb-2"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase" as const,
                }}
              >
                Client Reviews
              </p>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: "#D4A843" }} />
                ))}
              </div>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.8rem",
                  color: "white",
                  fontWeight: 500,
                }}
              >
                Rated 5 Stars on Google
              </p>
            </div>
          </StaggerChild>
        </div>
      </div>
    </AnimatedSection>
  );
}
