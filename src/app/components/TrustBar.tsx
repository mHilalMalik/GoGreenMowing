import { Leaf, Star, MapPin, Recycle } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const stats = [
  { icon: Leaf, label: "500+ Lawns Maintained", sub: "And counting" },
  { icon: Star, label: "5-Star Rated", sub: "On Google Reviews" },
  { icon: MapPin, label: "Locally Owned", sub: "South Surrey, BC" },
  { icon: Recycle, label: "100% Eco-Friendly", sub: "Sustainable practices" },
];

export function TrustBar() {
  return (
    <AnimatedSection style={{ backgroundColor: "#F7F4EE" }}>
      <div className="max-w-[1320px] mx-auto px-6 lg:px-20 py-7">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-center gap-4 py-4 md:py-0 md:px-6 ${
                i < stats.length - 1 ? "md:border-r" : ""
              }`}
              style={{ borderColor: "rgba(28, 58, 28, 0.1)" }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center shrink-0 rounded-full"
                style={{ backgroundColor: "rgba(28, 58, 28, 0.08)" }}
              >
                <stat.icon className="w-4 h-4" style={{ color: "#2D5A2D" }} />
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    color: "#1A1A18",
                  }}
                >
                  {stat.label}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.72rem",
                    color: "#4A4A44",
                  }}
                >
                  {stat.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
