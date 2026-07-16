import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const projects = [
  {
    title: "ZenResume",
    description:
      "A modern resume builder that allows users to create and customize professional resumes with ease.",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind CSS", "MongoDB"],
    link: "https://zenresume.vercel.app",
    github: "https://github.com/sherwinbritto7/zenresume",
    category: "React / Next.js",
  },
  {
    title: "ZenAura",
    description:
      "An event management platform for discovering and managing events with authentication and real-time features.",
    image: "/projects/project2.png",
    tags: ["Next.js", "Tailwind CSS", "Convex"],
    link: "https://zenaura-events.vercel.app",
    github: "https://github.com/sherwinbritto7/zenaura",
    category: "Full Stack",
  },
  {
    title: "SaaS Landing Page-Light",
    description:
      "A modern SaaS landing page built with Next.js, Tailwind CSS, and Framer Motion, featuring smooth animations and a conversion-focused experience.",
    image: "/projects/project3.png",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://zenpage-light.vercel.app",
    github: "https://github.com/sherwinbritto7/zenpage-light",
    category: "SaaS / UI",
  },
  {
    title: "SaaS Landing Page-Dark",
    description:
      "A premium dark-themed SaaS landing page built with Next.js and Framer Motion. Features sophisticated scroll-linked animations and interactive elements.",
    image: "/projects/project4.png",
    tags: ["Next.js", "Framer Motion", "Interactivity", "Dark Mode"],
    link: "https://zenpage-dark.vercel.app",
    github: "https://github.com/sherwinbritto7/zenpage-dark",
    category: "SaaS / UI",
  },
  {
    title: "ZenAi - AI-Tools Suite",
    description:
      "A comprehensive AI productivity platform built on the PERN stack. Integrates LLMs for content generation and Cloudinary-powered image manipulation.",
    image: "/projects/project5.png",
    tags: ["PERN Stack", "OpenAI", "Cloudinary", "Clerk Auth"],
    link: "https://zenai.vercel.app",
    github: "https://github.com/sherwinbritto7/zenai",
    category: "Full Stack",
  },
  {
    title: "ZenTrack - Price Tracker",
    description:
      "A price tracking dashboard monitoring product prices in real-time. Built with Next.js and Supabase, utilizing Firecrawl web scraping.",
    image: "/projects/project6.png",
    tags: ["Next.js", "Supabase", "Firecrawl", "Recharts"],
    link: "https://zentrackpro.vercel.app",
    github: "https://github.com/sherwinbritto7/zentrack",
    category: "Full Stack",
  },
  {
    title: "ZenTask - Project Management",
    description:
      "A modern project management tool designed for speed and simplicity. Features a beautifully designed workspace to manage team tasks.",
    image: "/projects/project7.png",
    tags: ["React Router", "React", "Tailwind CSS", "Zod"],
    link: "https://zentaskpjm.vercel.app",
    github: "https://github.com/sherwinbritto7/zentask",
    category: "React / Next.js",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-14 md:py-20 relative overflow-hidden bg-background"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-highlight/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-16 space-y-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full lg-badge text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="w-3.5 h-3.5" />
              Featured Work
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-primary">
              showcase my skills.
            </span>
          </h2>

          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto text-sm md:text-base">
            A curated selection of my recent creations, showcasing expertise in
            building responsive, high-performance, and delightful web
            applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 md:gap-8 lg:gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="group relative lg-card rounded-2xl md:rounded-3xl overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/8 transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Elegant Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 pointer-events-none" />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Category Ribbon */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4">
                  <span className="px-2.5 py-0.5 md:px-3 md:py-1 rounded-md md:rounded-lg lg-badge text-[9px] md:text-[10px] uppercase font-bold tracking-wider text-primary">
                    {project.category}
                  </span>
                </div>

                {/* Floating CTA Link on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full glass bg-primary hover:bg-primary/95 text-white text-xs font-semibold shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300"
                  >
                    Live Demo
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6 md:p-8 space-y-3 md:space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                    className="p-1 rounded-full text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    <ArrowUpRight className="w-5 h-5 sm:w-5.5 sm:h-5.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>

                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 md:gap-2 pt-1 md:pt-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-0.5 md:px-3.5 md:py-1 rounded-md md:rounded-lg lg-badge text-[10px] md:text-[11px] font-semibold text-muted-foreground group-hover:border-primary/25 group-hover:text-primary/80 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile/Tablet CTA Links (Visible when not hovered/always on mobile) */}
                <div className="flex items-center pt-1 md:hidden">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary text-white text-xs font-semibold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all duration-300"
                  >
                    Live Demo
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
