import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Our Work", path: "/our-work" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(28, 58, 28, 0.97)" : "#1C3A1C",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="Go Green Mowing"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="transition-colors duration-200 hover:text-white"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  color: location.pathname === link.path ? "white" : "rgba(255,255,255,0.7)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:7785580447"
              className="flex items-center gap-2 transition-colors hover:text-white"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              <Phone className="w-3.5 h-3.5" />
              778-558-0447
            </a>
            <Link
              to="/contact"
              className="px-5 py-2 transition-all duration-200 hover:-translate-y-0.5"
              style={{
                backgroundColor: "#7AB648",
                color: "#1C3A1C",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.82rem",
              }}
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{ backgroundColor: "#1C3A1C", borderColor: "rgba(255,255,255,0.06)" }}
        >
          <div className="px-6 py-5 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="block py-2.5 transition-colors hover:text-white"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.7)",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="tel:7785580447"
                className="flex items-center gap-2"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                <Phone className="w-3.5 h-3.5" />
                778-558-0447
              </a>
              <Link
                to="/contact"
                className="text-center py-3"
                style={{
                  backgroundColor: "#7AB648",
                  color: "#1C3A1C",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                }}
                onClick={() => setMobileOpen(false)}
              >
                Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}