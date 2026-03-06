import { Link } from "react-router";
import { Check, Leaf, Heart, Shield, Award, Users, ArrowRight, Star } from "lucide-react";
import { LimeLabel } from "../LimeLabel";
import { AnimatedSection, StaggerChild } from "../AnimatedSection";
import { CTABand } from "../CTABand";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const values = [
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    desc: "We use only organic, eco-friendly products and sustainable practices that protect your family, pets, and the planet.",
  },
  {
    icon: Heart,
    title: "Passion For Excellence",
    desc: "Every lawn we maintain is treated as our own. We take genuine pride in delivering meticulous, beautiful results.",
  },
  {
    icon: Shield,
    title: "Reliability & Trust",
    desc: "We show up on time, every time. Our clients trust us with their properties because we consistently deliver on our promises.",
  },
  {
    icon: Users,
    title: "Community First",
    desc: "As a locally owned business, we're invested in our community. We support local initiatives and treat neighbors like family.",
  },
];

const milestones = [
  { year: "2014", title: "Founded in South Surrey", desc: "Started with a single mower and a vision for eco-friendly lawn care in our neighborhood." },
  { year: "2016", title: "100 Clients Milestone", desc: "Word of mouth spread quickly as our commitment to quality earned loyal customers." },
  { year: "2019", title: "Expanded Services", desc: "Added power washing, aeration, and full-season programs to serve clients year-round." },
  { year: "2022", title: "500+ Properties Maintained", desc: "Became one of the most trusted lawn care providers across South Surrey and Metro Vancouver." },
  { year: "2024", title: "10 Years Strong", desc: "A decade of transforming outdoor spaces with the same passion and integrity we started with." },
];

const team = [
  { name: "Jamie Holt", role: "Founder & Lead Technician", initials: "JH" },
  { name: "Marcus Chen", role: "Operations Manager", initials: "MC" },
  { name: "Priya Sharma", role: "Client Relations", initials: "PS" },
  { name: "Ryan Torres", role: "Senior Landscaper", initials: "RT" },
];

export function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-[68px]" style={{ backgroundColor: "#1C3A1C" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <div
              className="flex items-center gap-2 mb-4"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.82rem",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">About</span>
            </div>
            <LimeLabel text="Our Story" />
            <h1
              className="text-white mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.12,
              }}
            >
              About <em>Go Green Mowing</em>
            </h1>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              Over a decade of eco-friendly lawn care excellence in South Surrey and Metro Vancouver. Meet the team and values behind the work.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#FDFCFA" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image composition */}
            <StaggerChild delay={0.1} className="relative">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759497860802-9cba5782b455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBnYXJkZW5lciUyMHdvcmtpbmclMjBvdXRkb29ycyUyMHBvcnRyYWl0fGVufDF8fHx8MTc3Mjc3OTU1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional gardener working outdoors"
                  className="w-full h-[500px] lg:h-[580px] object-cover"
                />
                <div className="absolute -bottom-6 -right-4 lg:-right-8 w-40 h-40 lg:w-52 lg:h-52 border-[6px] border-white shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1687517133266-7d952efc3362?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGdyZWVuJTIwZW52aXJvbm1lbnQlMjBuYXR1cmV8ZW58MXx8fHwxNzcyNzgwMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Sustainable green environment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="absolute top-6 right-6 px-5 py-3 shadow-lg"
                  style={{ backgroundColor: "#7AB648" }}
                >
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      color: "white",
                      lineHeight: 1,
                    }}
                  >
                    10+
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      color: "rgba(255,255,255,0.85)",
                      textTransform: "uppercase" as const,
                    }}
                  >
                    Years Experience
                  </p>
                </div>
              </div>
            </StaggerChild>

            {/* Right - Story content */}
            <StaggerChild delay={0.3}>
              <LimeLabel text="Who We Are" />
              <h2
                className="mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "#1A1A18",
                }}
              >
                We Are <em>Dedicated</em> To Transforming Your Outdoor Spaces
              </h2>
              <p
                className="mb-4"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  color: "#4A4A44",
                }}
              >
                Go Green Mowing was founded in 2014 with a simple but powerful idea: lawn care should be beautiful, reliable, and environmentally responsible. What started as a one-person operation in South Surrey has grown into a trusted team of professionals serving hundreds of properties across Metro Vancouver.
              </p>
              <p
                className="mb-4"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  color: "#4A4A44",
                }}
              >
                We believe that a well-maintained lawn is more than just curb appeal — it's a reflection of care, community, and connection to nature. That's why every product we use is organic and eco-friendly, and every service we deliver meets the highest standards of craftsmanship.
              </p>
              <p
                className="mb-8"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  color: "#4A4A44",
                }}
              >
                From residential gardens to commercial complexes, our experienced team brings the same dedication and attention to detail to every project. We don't just mow lawns — we create outdoor spaces that people love.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { num: "500+", label: "Lawns Maintained" },
                  { num: "10+", label: "Years In Business" },
                  { num: "4.9", label: "Avg. Star Rating" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="mb-1"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.8rem",
                        fontWeight: 700,
                        color: "#1C3A1C",
                        lineHeight: 1,
                      }}
                    >
                      {stat.num}
                    </p>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.72rem",
                        letterSpacing: "0.08em",
                        color: "#4A4A44",
                        textTransform: "uppercase" as const,
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </StaggerChild>
          </div>
        </div>
      </section>

      {/* Meet the Owner */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#FDFCFA" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#1C3A1C] p-8 lg:p-16 rounded-2xl text-white">
            <StaggerChild>
              <h2
                className="mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "#FFFFFF",
                }}
              >
                Hello Neighbour!
              </h2>
              <p
                className="mb-6 text-lg"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                I'm <strong>Raminder Singh</strong>, your local Go Green Mowing specialist working in your neighbourhood every day.
              </p>
              <p
                className="mb-8 text-lg"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                I already serve many of your neighbours and I'd love the opportunity to give you a free quote!
              </p>

              <div className="mt-8">
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "#D4A843",
                  }}
                >
                  +1778 558 0447
                </p>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.7)",
                  }}
                >
                  Or book online at gogreenmowing.ca
                </p>
              </div>
            </StaggerChild>

            {/* Owner ImagePlaceholder / Van */}
            <StaggerChild className="relative h-[400px] w-full lg:h-full rounded-xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1592424005615-5c123ea39be7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW5lciUyMHBvcnRyYWl0fGVufDB8fHx8MTcyNDA5NTEzMnww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Raminder Singh - Owner of Go Green Mowing"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </StaggerChild>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F7F4EE" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <LimeLabel text="Our Core Values" withLine={false} />
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#1A1A18",
              }}
            >
              The Principles That <em>Guide Everything</em> We Do
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <StaggerChild key={value.title} delay={i * 0.1}>
                <div
                  className="p-7 h-full bg-white border transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderColor: "rgba(0,0,0,0.06)", borderRadius: "4px" }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-5"
                    style={{ backgroundColor: "rgba(122, 182, 72, 0.12)" }}
                  >
                    <value.icon className="w-5 h-5" style={{ color: "#2D5A2D" }} />
                  </div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: "#1A1A18",
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.82rem",
                      lineHeight: 1.7,
                      color: "#4A4A44",
                    }}
                  >
                    {value.desc}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey / Milestones */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#1C3A1C" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl mb-16">
            <LimeLabel text="Our Journey" />
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "white",
              }}
            >
              A Decade Of Growth, One <em>Lawn At A Time</em>
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-[1px] -translate-x-1/2"
              style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
            />

            <div className="space-y-12 lg:space-y-16">
              {milestones.map((milestone, i) => (
                <StaggerChild key={milestone.year} delay={i * 0.08}>
                  <div className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${i % 2 === 1 ? "" : ""}`}>
                    <div className={`${i % 2 === 1 ? "lg:order-2 lg:text-left" : "lg:text-right"} mb-4 lg:mb-0`}>
                      <span
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontStyle: "italic",
                          fontSize: "2.5rem",
                          fontWeight: 700,
                          color: "rgba(122, 182, 72, 0.3)",
                          lineHeight: 1,
                        }}
                      >
                        {milestone.year}
                      </span>
                    </div>
                    <div className={`${i % 2 === 1 ? "lg:order-1 lg:text-right" : ""} relative`}>
                      {/* Dot on timeline */}
                      <div
                        className={`hidden lg:block absolute top-3 ${i % 2 === 1 ? "right-0 translate-x-[calc(50%+2rem)]" : "left-0 -translate-x-[calc(50%+2rem)]"
                          } w-3 h-3 rounded-full border-2`}
                        style={{ borderColor: "#7AB648", backgroundColor: "#1C3A1C" }}
                      />
                      <h3
                        className="mb-2 text-white"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 600,
                          fontSize: "1.05rem",
                        }}
                      >
                        {milestone.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.85rem",
                          lineHeight: 1.7,
                          color: "rgba(255,255,255,0.5)",
                        }}
                      >
                        {milestone.desc}
                      </p>
                    </div>
                  </div>
                </StaggerChild>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet The Team */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#FDFCFA" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <LimeLabel text="Our Team" withLine={false} />
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#1A1A18",
              }}
            >
              The People Behind <em>Every Perfect Lawn</em>
            </h2>
            <p
              className="mt-4"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.8,
                color: "#4A4A44",
              }}
            >
              Our passionate, skilled team brings years of experience and a genuine love for the outdoors to every property we maintain.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <StaggerChild key={member.name} delay={i * 0.1}>
                <div
                  className="group text-center p-8 bg-white border transition-all hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderColor: "rgba(0,0,0,0.06)", borderRadius: "4px" }}
                >
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center transition-colors duration-300"
                    style={{ backgroundColor: "rgba(122, 182, 72, 0.12)" }}
                  >
                    <span
                      className="transition-colors duration-300"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700,
                        fontSize: "1.3rem",
                        color: "#2D5A2D",
                      }}
                    >
                      {member.initials}
                    </span>
                  </div>
                  <h4
                    className="mb-1"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: "#1A1A18",
                    }}
                  >
                    {member.name}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.78rem",
                      color: "#7AB648",
                      fontWeight: 500,
                    }}
                  >
                    {member.role}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose Us - mini section */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F7F4EE" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <StaggerChild delay={0.1}>
              <LimeLabel text="Why Clients Choose Us" />
              <h2
                className="mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "#1A1A18",
                }}
              >
                Trusted By Hundreds Of <em>Happy Homeowners</em>
              </h2>
              <p
                className="mb-8"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  color: "#4A4A44",
                }}
              >
                From the first phone call to every scheduled visit, our clients experience a level of care and professionalism that sets us apart.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Free, no-obligation estimates for every new client",
                  "Consistent scheduling — same day, same time, every visit",
                  "Fully insured and WorkSafe BC compliant",
                  "Only organic, eco-friendly products used",
                  "Responsive communication — call, text, or email",
                  "Flexible seasonal programs tailored to your property",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: "#7AB648" }}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.88rem",
                        fontWeight: 500,
                        color: "#1A1A18",
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: "#7AB648",
                  color: "#1C3A1C",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                }}
              >
                Get Your Free Estimate
                <ArrowRight className="w-4 h-4" />
              </Link>
            </StaggerChild>

            <StaggerChild delay={0.3} className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1767328796803-756a72608d5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXduJTIwY2FyZSUyMHByb2Zlc3Npb25hbCUyMG91dGRvb3IlMjBncmVlbnxlbnwxfHx8fDE3NzI3Nzk1NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional lawn care"
                className="w-full h-[480px] lg:h-[560px] object-cover"
              />
              <div
                className="absolute top-6 left-6 px-6 py-5 shadow-xl"
                style={{ backgroundColor: "#1C3A1C" }}
              >
                <p
                  className="mb-2"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    color: "rgba(255,255,255,0.5)",
                    textTransform: "uppercase" as const,
                  }}
                >
                  Client Reviews
                </p>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" style={{ color: "#D4A843" }} />
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.8rem",
                    color: "white",
                    fontWeight: 500,
                  }}
                >
                  4.9/5 from 120+ reviews
                </p>
              </div>
            </StaggerChild>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
