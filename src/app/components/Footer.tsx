import { Leaf, Phone, MapPin, Globe, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#1A1A18", borderTop: "2px solid #7AB648" }}>
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 - Logo */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Leaf className="w-4 h-4" style={{ color: "#7AB648" }} />
              <span
                className="text-white"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 600 }}
              >
                Go Green Mowing
              </span>
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
              {[Instagram, Facebook, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-[34px] h-[34px] border flex items-center justify-center transition-colors hover:border-[#7AB648] hover:text-[#7AB648]"
                  style={{ borderColor: "rgba(255,255,255,0.15)" }}
                >
                  <Icon className="w-3.5 h-3.5 text-white" />
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
            <div className="space-y-2.5">
              {["Lawn Mowing", "Hedge Trimming", "Fertilizing & Aeration", "Fall Cleanup", "Power Washing", "Spring Clean"].map(
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
                { icon: Phone, label: "778-558-0447", href: "tel:7785580447" },
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
          &copy; 2025 Go Green Mowing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}