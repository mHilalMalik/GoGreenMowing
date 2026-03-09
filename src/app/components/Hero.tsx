import { Link } from "react-router";
import { Phone, ArrowRight, Shield } from "lucide-react";
import { LimeLabel } from "./LimeLabel";
import { motion } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { brand, headingStyle, bodyStyle, labelStyle } from "../brand-guidelines";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[68px]" style={{ backgroundColor: brand.colors.primary.forest }}>
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <LimeLabel text="South Surrey, BC · Eco-Friendly Lawn Care" />
            <h1
              className="mb-6"
              style={{
                ...headingStyle("hero", brand.colors.onDark.text),
                lineHeight: brand.lineHeights.tight,
              }}
            >
              Bringing Nature's{" "}
              <em style={{ color: brand.colors.primary.lime }}>Beauty</em> To Your
              Backyard
            </h1>
            <p
              className="mb-10 max-w-lg"
              style={bodyStyle("bodyLg", brand.colors.onDark.textMuted)}
            >
              Professional, eco-friendly lawn care services for homes and businesses across South Surrey and Metro Vancouver. We bring expertise, reliability, and a deep respect for the environment to every project.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href={brand.business.phoneHref}
                className="inline-flex items-center gap-2 px-7 py-3.5 transition-all hover:-translate-y-0.5"
                style={brand.components.buttonPrimary}
              >
                <Phone className="w-4 h-4" />
                Call {brand.business.phone}
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 transition-all hover:-translate-y-0.5"
                style={brand.components.buttonOutline}
              >
                Our Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats */}
            <div
              className="flex gap-10 pt-8 border-t"
              style={{ borderColor: brand.colors.onDark.border }}
            >
              {[
                { value: "500+", label: "Lawns Maintained" },
                { value: "5★", label: "Google Rating" },
                { value: "100%", label: "Eco-Friendly" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    style={{
                      fontFamily: brand.fonts.heading,
                      fontStyle: "italic",
                      fontSize: "1.8rem",
                      fontWeight: brand.weights.bold,
                      color: brand.colors.onDark.text,
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="mt-1"
                    style={{
                      fontFamily: brand.fonts.body,
                      fontSize: brand.fontSizes.micro,
                      fontWeight: brand.weights.semibold,
                      letterSpacing: "0.1em",
                      color: brand.colors.onDark.textFaint,
                      textTransform: "uppercase",
                    }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* WCB Badge */}
            <div className="mt-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5">
                <Shield className="w-4 h-4" style={{ color: brand.colors.primary.lime }} />
                <span style={labelStyle(brand.colors.onDark.text)}>
                  WCB COVERED & FULLY INSURED
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-[560px] flex items-center justify-center pt-10">
              {/* Soft glow behind mascot */}
              <div
                className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[80px] opacity-40 mix-blend-screen"
                style={{ backgroundColor: brand.colors.primary.lime }}
              />
              <ImageWithFallback
                src="/images/mascot.png"
                alt="Go Green Mowing Friendly Mascot"
                className="w-[85%] h-auto max-h-full object-contain relative z-10 drop-shadow-2xl"
              />
            </div>
            {/* Availability badge */}
            <div
              className="absolute bottom-6 right-6 px-5 py-3 shadow-lg flex items-center gap-2 z-20"
              style={{ backgroundColor: brand.colors.background.white }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: brand.colors.primary.lime }}
              />
              <span
                style={{
                  fontFamily: brand.fonts.body,
                  fontSize: brand.fontSizes.caption,
                  fontWeight: brand.weights.medium,
                  color: brand.colors.neutral.black,
                }}
              >
                Accepting New Clients — South Surrey & Metro Vancouver
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
