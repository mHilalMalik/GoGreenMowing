import { Hero } from "../Hero";
import { TrustBar } from "../TrustBar";
import { AboutSection } from "../AboutSection";
import { ServicesSection } from "../ServicesSection";
import { Portfolio } from "../Portfolio";
import { WhyChooseUs } from "../WhyChooseUs";
import { ProcessSection } from "../ProcessSection";
import { Testimonials } from "../Testimonials";
import { CTABand } from "../CTABand";
import { PageSeo } from "../PageSeo";

export function HomePage() {
  return (
    <>
      <PageSeo path="/" />
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
