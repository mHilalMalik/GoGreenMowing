import { LimeLabel } from "./LimeLabel";
import { AnimatedSection } from "./AnimatedSection";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "Residential Garden Makeover",
    category: "Residential",
    img: "https://images.unsplash.com/photo-1760643491623-3de22e9980e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGdhcmRlbiUyMG1ha2VvdmVyJTIwYmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3Mjc3OTU1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tall: true,
  },
  {
    title: "Luxury Landscape Design",
    category: "Luxury Estate",
    img: "https://images.unsplash.com/photo-1758612120966-b20c01160c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsYW5kc2NhcGUlMjBkZXNpZ24lMjBlc3RhdGUlMjBnYXJkZW58ZW58MXx8fHwxNzcyNzc5NTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Commercial Office Complex",
    category: "Commercial",
    img: "https://images.unsplash.com/photo-1769311485529-46b3c90f760e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwbGFuZHNjYXBpbmclMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzI3Nzk1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Eco-Friendly Urban Garden",
    category: "Urban",
    img: "https://images.unsplash.com/photo-1713777571574-12e4b0ab5275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGdhcmRlbiUyMGdyZWVuJTIwZWNvLWZyaWVuZGx5fGVufDF8fHx8MTc3Mjc3OTU1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Spring Property Refresh",
    category: "Seasonal",
    img: "https://images.unsplash.com/photo-1772538620835-731723af362d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJpbmclMjBnYXJkZW4lMjBmcmVzaCUyMGdyZWVuJTIwZmxvd2VycyUyMHByb3BlcnR5fGVufDF8fHx8MTc3Mjc3OTU1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="group relative overflow-hidden cursor-pointer h-full">
      <ImageWithFallback
        src={project.img}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      {/* Hover overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6"
        style={{
          background: "linear-gradient(to top, rgba(28, 58, 28, 0.9) 0%, rgba(28, 58, 28, 0.3) 50%, transparent 100%)",
        }}
      >
        <span
          className="mb-1"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            color: "#7AB648",
            textTransform: "uppercase" as const,
          }}
        >
          {project.category}
        </span>
        <h3
          className="text-white"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.15rem",
            fontWeight: 600,
          }}
        >
          {project.title}
        </h3>
      </div>
    </div>
  );
}

export function Portfolio() {
  return (
    <AnimatedSection
      id="portfolio"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "#FDFCFA" }}
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <LimeLabel text="From Concept To Creation" />
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#1A1A18",
            }}
          >
            Discover The Art Of Lawn Care Through
            <br className="hidden md:block" /> Our <em>Completed Projects</em>
          </h2>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid md:grid-cols-3 gap-3" style={{ gridAutoRows: "220px" }}>
          {/* Tall left card */}
          <div className="md:row-span-2">
            <ProjectCard project={projects[0]} />
          </div>
          {/* Top right 2 cards */}
          <div>
            <ProjectCard project={projects[1]} />
          </div>
          <div>
            <ProjectCard project={projects[2]} />
          </div>
          {/* Bottom right 2 cards */}
          <div>
            <ProjectCard project={projects[3]} />
          </div>
          <div>
            <ProjectCard project={projects[4]} />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
