import { useState } from "react";
import { Link } from "react-router";
import { Phone, MapPin, Globe, Clock, Send, CheckCircle } from "lucide-react";
import { LimeLabel } from "../LimeLabel";
import { AnimatedSection, StaggerChild } from "../AnimatedSection";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", phone: "", email: "", address: "", service: "", message: "" });
  };

  const inputStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.88rem",
    backgroundColor: "#F7F4EE",
    borderColor: "rgba(0,0,0,0.08)",
  };

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
              <span className="text-white">Contact</span>
            </div>
            <LimeLabel text="Get In Touch" />
            <h1
              className="text-white mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.4rem, 5vw, 3.5rem)",
                fontWeight: 700,
                lineHeight: 1.12,
              }}
            >
              Let's <em>Talk</em>
            </h1>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              Ready to transform your outdoor space? Get in touch for a free consultation and estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24" style={{ backgroundColor: "#FDFCFA" }}>
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left - Contact Info (2 cols) */}
            <StaggerChild delay={0.1} className="lg:col-span-2">
              <LimeLabel text="Contact Information" />
              <h2
                className="mb-8"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.6rem, 2.5vw, 2rem)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "#1A1A18",
                }}
              >
                We'd Love To <em>Hear From You</em>
              </h2>

              <div className="space-y-5 mb-10">
                {[
                  { icon: Phone, label: "Phone", value: "778-558-0447", href: "tel:7785580447" },
                  { icon: MapPin, label: "Location", value: "South Surrey, BC, Canada" },
                  { icon: Globe, label: "Website", value: "gogreenmowing.ca", href: "https://gogreenmowing.ca" },
                  { icon: Clock, label: "Hours", value: "Monday – Saturday, 7am – 7pm" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(122, 182, 72, 0.12)" }}
                    >
                      <item.icon className="w-4 h-4" style={{ color: "#2D5A2D" }} />
                    </div>
                    <div>
                      <p
                        className="mb-0.5"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.7rem",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          color: "#999",
                          textTransform: "uppercase" as const,
                        }}
                      >
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="hover:text-[#7AB648] transition-colors"
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.92rem",
                            fontWeight: 500,
                            color: "#1A1A18",
                          }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.92rem",
                            fontWeight: 500,
                            color: "#1A1A18",
                          }}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div
                className="w-full h-56 flex items-center justify-center"
                style={{ backgroundColor: "#F7F4EE", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div className="text-center">
                  <MapPin className="w-6 h-6 mx-auto mb-2" style={{ color: "#2D5A2D" }} />
                  <p
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: "#4A4A44", fontSize: "0.85rem" }}
                  >
                    South Surrey, BC
                  </p>
                  <p
                    className="mt-1"
                    style={{ fontFamily: "'DM Sans', sans-serif", color: "#999", fontSize: "0.72rem" }}
                  >
                    Google Maps embed placeholder
                  </p>
                </div>
              </div>
            </StaggerChild>

            {/* Right - Form (3 cols) */}
            <StaggerChild delay={0.25} className="lg:col-span-3">
              <div
                className="p-8 lg:p-10"
                style={{ backgroundColor: "white", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#1A1A18",
                  }}
                >
                  Request a Free Quote
                </h3>
                <p
                  className="mb-8"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    color: "#4A4A44",
                  }}
                >
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { name: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                      { name: "phone", label: "Phone Number", type: "tel", placeholder: "Your phone" },
                      { name: "email", label: "Email Address", type: "email", placeholder: "Your email" },
                      { name: "address", label: "Service Address", type: "text", placeholder: "Property address" },
                    ].map((field) => (
                      <div key={field.name}>
                        <label
                          className="block mb-1.5"
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 600,
                            fontSize: "0.8rem",
                            color: "#1A1A18",
                          }}
                        >
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                          className="w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-[#7AB648]/30 focus:border-[#7AB648] transition-colors"
                          style={inputStyle}
                          required
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label
                      className="block mb-1.5"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        color: "#1A1A18",
                      }}
                    >
                      Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-[#7AB648]/30 focus:border-[#7AB648] transition-colors"
                      style={inputStyle}
                      required
                    >
                      <option value="">Select a service</option>
                      <option>Lawn Mowing</option>
                      <option>Hedge Trimming</option>
                      <option>Fertilizing & Aeration</option>
                      <option>Fall Cleanup</option>
                      <option>Power Washing</option>
                      <option>Spring Clean & Power Raking</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block mb-1.5"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        color: "#1A1A18",
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      placeholder="Tell us about your lawn care needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 border resize-none focus:outline-none focus:ring-2 focus:ring-[#7AB648]/30 focus:border-[#7AB648] transition-colors"
                      style={inputStyle}
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 transition-all hover:-translate-y-0.5 w-full sm:w-auto"
                    style={{
                      backgroundColor: "#7AB648",
                      color: "#1C3A1C",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.88rem",
                    }}
                  >
                    {submitted ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Request
                      </>
                    )}
                  </button>

                  {submitted && (
                    <p
                      className="mt-3"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.85rem",
                        color: "#2D5A2D",
                        fontWeight: 500,
                      }}
                    >
                      Thank you! We'll get back to you within 24 hours.
                    </p>
                  )}
                </form>
              </div>
            </StaggerChild>
          </div>
        </div>
      </section>
    </>
  );
}
