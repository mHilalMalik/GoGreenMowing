import { Hero } from "../Hero";
import { TrustBar } from "../TrustBar";
import { AboutSection } from "../AboutSection";
import { ServicesSection } from "../ServicesSection";
import { Portfolio } from "../Portfolio";
import { WhyChooseUs } from "../WhyChooseUs";
import { ProcessSection } from "../ProcessSection";
import { Testimonials } from "../Testimonials";
import { CTABand } from "../CTABand";
import { SEOHead } from "../SEOHead";
import { JsonLd } from "../JsonLd";
import { localBusinessSchema, organizationSchema } from "../schema";

export function HomePage() {
  return (
    <>
      <SEOHead
        title="Go Green Mowing | Expert Eco-Friendly Lawn Care in South Surrey, BC"
        description="Professional, eco-friendly lawn care services for homes and businesses across South Surrey and Metro Vancouver. We specialize in mowing, hedge trimming, and seasonal cleanups."
        canonical="/"
      />
      <JsonLd data={[localBusinessSchema, organizationSchema]} />
      <Hero />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <Portfolio />
      <WhyChooseUs />
      <ProcessSection />
      <Testimonials />
      <CTABand />
    </>
  );
}
