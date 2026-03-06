import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="min-h-screen grid lg:grid-cols-2">
      {/* Left Column */}
      <div
        className="relative flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-20 pt-28 pb-16 lg:pt-0 lg:pb-0"
        style={{ backgroundColor: "#1C3A1C" }}
      >
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-8 h-[2px]" style={{ backgroundColor: "#7AB648" }} />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                color: "#7AB648",
              }}
            >
              SOUTH SURREY, BC · ECO-FRIENDLY LAWN CARE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-white mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
              fontWeight: 700,
              lineHeight: 1.12,
            }}
          >
            Bringing Nature's{" "}
            <em style={{ color: "rgba(122, 182, 72, 0.9)" }}>Beauty</em> To Your Backyard
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-10"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Professional, eco-friendly lawn care services for homes and businesses across South Surrey and Metro Vancouver. We bring expertise, reliability, and a deep respect for the environment to every project.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 mb-12"
          >
            <a
              href="tel:7785580447"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: "#7AB648",
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
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border transition-all hover:bg-white/5"
              style={{
                borderColor: "rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.8)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: "0.88rem",
              }}
            >
              Our Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
          >
            <div
              className="w-full h-[1px] mb-8"
              style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            />
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: "500+", label: "Lawns Maintained" },
                { num: "5★", label: "Google Rating" },
                { num: "100%", label: "Eco-Friendly" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-white mb-1"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                    }}
                  >
                    {stat.num}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      color: "rgba(255,255,255,0.4)",
                      textTransform: "uppercase" as const,
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Column - Image */}
      <div className="relative hidden lg:block">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1747548747539-f523abfe6982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXNoJTIwZ3JlZW4lMjBsYXduJTIwbW93ZWQlMjBzdHJpcGVzJTIwZ29sZGVuJTIwaG91cnxlbnwxfHx8fDE3NzI3Nzk1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Lush green lawn with mowed stripes"
          className="w-full h-full object-cover"
        />
        {/* Floating card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="absolute bottom-8 left-8 bg-white px-5 py-3.5 shadow-xl flex items-center gap-3"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "#7AB648" }} />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: "#7AB648" }} />
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "#1A1A18",
            }}
          >
            Accepting New Clients — South Surrey & Metro Vancouver
          </span>
        </motion.div>
      </div>
    </section>
  );
}
