import { Phone, MapPin, Globe, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#1A1A18", borderTop: "2px solid #7AB648" }}>
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 - Logo */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/logo.png"
                alt="Go Green Mowing"
                className="h-10 w-auto"
              />
            </div>
            <p
              className="mb-6"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.82rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.4)",
              }}
            >
              Eco-friendly lawn care you can trust. Proudly serving South Surrey and Metro Vancouver since 2014.
            </p>
            <div className="flex gap-2">
              {[
                { Icon: Instagram, label: "Follow us on Instagram" },
                { Icon: Facebook, label: "Follow us on Facebook" },
                { Icon: Globe, label: "Visit our website" },
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={item.label}
                  className="w-[34px] h-[34px] border flex items-center justify-center transition-colors hover:border-[#7AB648] hover:text-[#7AB648]"
                  style={{ borderColor: "rgba(255,255,255,0.15)" }}
                >
                  <item.Icon className="w-3.5 h-3.5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 - Quick Links */}
          <div>
            <h4
              className="text-white mb-5"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.85rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase" as const,
              }}
            >
              Quick Links
            </h4>
            <div className="space-y-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Our Work", path: "/our-work" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="block transition-colors hover:text-[#7AB648]"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.82rem",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 - Services */}
          <div>
            <h4
              className="text-white mb-5"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.85rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase" as const,
              }}
            >
              Services
            </h4>
            <div className="space-y-2.5 max-h-[250px] flex flex-col flex-wrap gap-x-8 pr-4">
              {[
                "Lawn Care", "Lawn Mowing", "Aeration", "Fertilizing",
                "Power Raking", "Hedge Trimming", "Pruning", "Gardening",
                "Spring Cleanup", "Landscaping", "Gutter Cleaning",
                "Power Washing", "Fall Cleanup", "Junk/Green Waste Removal"
              ].map(
                (s) => (
                  <p
                    key={s}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.82rem",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    {s}
                  </p>
                )
              )}
            </div>
          </div>

          {/* Col 4 - Contact */}
          <div>
            <h4
              className="text-white mb-5"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.85rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase" as const,
              }}
            >
              Contact
            </h4>
            <div className="space-y-4">
              {[
                { icon: Phone, label: "+1778 558 0447", href: "tel:+17785580447" },
                { icon: Globe, label: "info@gogreenmowing.ca", href: "mailto:info@gogreenmowing.ca" },
                { icon: MapPin, label: "South Surrey, BC" },
                { icon: Globe, label: "gogreenmowing.ca", href: "https://gogreenmowing.ca" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(122, 182, 72, 0.12)" }}
                  >
                    <item.icon className="w-3.5 h-3.5" style={{ color: "#7AB648" }} />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="transition-colors hover:text-white"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.82rem",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.82rem",
                        fontWeight: 500,
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      {item.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-5"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <p
          className="text-center"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          &copy; 2026 Go Green Mowing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}