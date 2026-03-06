import { Link } from "react-router";
import { Phone } from "lucide-react";
import { LimeLabel } from "./LimeLabel";
import { AnimatedSection } from "./AnimatedSection";
import { brand, headingStyle } from "../brand-guidelines";

export function CTABand() {
  return (
    <AnimatedSection style={{ backgroundColor: brand.colors.primary.lime }}>
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Text */}
          <div className="max-w-xl">
            <LimeLabel text="CALL TODAY FOR YOUR FREE QUOTE" />
            <h2
              style={headingStyle("h2", brand.colors.primary.forest)}
            >
              BOOK YOUR SPOT <em>NOW!</em>
            </h2>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={brand.business.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 transition-all hover:-translate-y-0.5"
              style={{
                border: `1px solid ${brand.colors.primary.forest}`,
                color: brand.colors.primary.forest,
                fontFamily: brand.fonts.body,
                fontWeight: brand.weights.semibold,
                fontSize: brand.fontSizes.bodySm,
                backgroundColor: "transparent",
              }}
            >
              <Phone className="w-4 h-4" />
              Call {brand.business.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 transition-all hover:-translate-y-0.5"
              style={{
                backgroundColor: brand.colors.primary.forest,
                color: brand.colors.onDark.text,
                fontFamily: brand.fonts.body,
                fontWeight: brand.weights.semibold,
                fontSize: brand.fontSizes.bodySm,
              }}
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
