import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { JsonLd } from "./JsonLd";
import { localBusinessSchema, organizationSchema } from "./schema";

const pageTitles: Record<string, string> = {
  "/": "Go Green Mowing | Eco-Friendly Lawn Care – South Surrey, BC",
  "/about": "About Us | Go Green Mowing",
  "/services": "Our Services | Go Green Mowing",
  "/our-work": "Our Work | Go Green Mowing",
  "/blog": "Lawn Care Blog | Go Green Mowing",
  "/contact": "Contact Us | Go Green Mowing",
};

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = pageTitles[pathname] || "Go Green Mowing";
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FDFCFA" }}>
      {/* Global structured data */}
      <JsonLd data={[localBusinessSchema, organizationSchema]} />

      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-white focus:text-[#1C3A1C] focus:font-semibold focus:shadow-lg"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
