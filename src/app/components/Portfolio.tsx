import { LimeLabel } from "./LimeLabel";
import { AnimatedSection } from "./AnimatedSection";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { featuredProjects, type PortfolioProject } from "../data/portfolioData";
import { Link } from "react-router";

function ProjectCard({ project }: { project: PortfolioProject }) {
  return (
    <div className="group relative overflow-hidden cursor-pointer h-full">
      <ImageWithFallback
        src={project.img}
        alt={project.alt}
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
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          {project.location}
        </p>
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
            <ProjectCard project={featuredProjects[0]} />
          </div>
          {/* Top right 2 cards */}
          <div>
            <ProjectCard project={featuredProjects[1]} />
          </div>
          <div>
            <ProjectCard project={featuredProjects[2]} />
          </div>
          {/* Bottom right 2 cards */}
          <div>
            <ProjectCard project={featuredProjects[3]} />
          </div>
          <div>
            <ProjectCard project={featuredProjects[4]} />
          </div>
        </div>

        <div className="mt-10">
          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 px-7 py-3.5 transition-colors hover:opacity-90"
            style={{
              backgroundColor: "#1C3A1C",
              color: "white",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "0.85rem",
            }}
          >
            View all projects
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
