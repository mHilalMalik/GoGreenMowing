import { useState } from "react";
import { LimeLabel } from "./LimeLabel";
import { AnimatedSection, StaggerChild } from "./AnimatedSection";

const steps = [
  { num: "01", title: "Request a Quote", desc: "Contact us by phone or through our form to discuss your lawn care needs." },
  { num: "02", title: "Property Assessment", desc: "We visit your property to assess the scope and provide a detailed estimate." },
  { num: "03", title: "We Get To Work", desc: "Our professional team arrives on schedule with eco-friendly equipment and products." },
  { num: "04", title: "Enjoy Your Lawn", desc: "Sit back, relax, and enjoy a beautifully maintained outdoor space." },
];

export function ProcessSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <AnimatedSection className="py-24 lg:py-32" style={{ backgroundColor: "#FDFCFA" }}>
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <LimeLabel text="How It Works" withLine={false} />
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#1A1A18",
            }}
          >
            Creating Stunning Landscapes In Just A Few <em>Simple Steps</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line */}
          <div
            className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-[1px]"
            style={{ backgroundColor: "rgba(0,0,0,0.08)" }}
          />

          {steps.map((step, i) => (
            <StaggerChild key={step.num} delay={i * 0.1} className="text-center relative">
              <div
                className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center border-2 transition-all duration-300 cursor-pointer relative z-10"
                style={{
                  borderColor: hovered === i ? "#7AB648" : "rgba(0,0,0,0.12)",
                  backgroundColor: hovered === i ? "#7AB648" : "#FDFCFA",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span
                  className="transition-colors duration-300"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: hovered === i ? "white" : "#1A1A18",
                  }}
                >
                  {step.num}
                </span>
              </div>

              <h4
                className="mb-2"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "#1A1A18",
                }}
              >
                {step.title}
              </h4>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.82rem",
                  lineHeight: 1.6,
                  color: "#4A4A44",
                }}
              >
                {step.desc}
              </p>
            </StaggerChild>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
