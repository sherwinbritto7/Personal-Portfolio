import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, Sparkles, ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "Mar 2026 – Present",
    duration: "5 mos",
    role: "Web Developer",
    company: "Destino Infotech Pvt Ltd",
    type: "Full-time",
    location: "Mumbai, Maharashtra, India",
    workMode: "On-site",
    logo: "DI",
    logoColor: "from-blue-500 to-cyan-500",
    description:
      "Building and maintaining modern web applications as a full-time Web Developer. Working on responsive UIs, integrating APIs, and collaborating with the product and design teams to deliver high-quality frontend solutions.",
    technologies: ["React", "JavaScript", "HTML5 / CSS3", "REST APIs"],
    current: true,
    link: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0, filter: "blur(4px)" },
  visible: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 90, damping: 14 },
  },
};

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-14 md:py-20 relative overflow-hidden bg-background"
    >
      {/* Background orbs */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-primary/6 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-500/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full lg-badge text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="w-3.5 h-3.5" />
              Career
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            Where I've{" "}
            <span className="font-serif italic font-normal text-primary">
              worked.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground leading-relaxed max-w-xl mx-auto text-sm md:text-base"
          >
            My professional journey — building real-world products and growing
            as a developer in fast-paced environments.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-10"
            >
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="relative pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 w-5 h-5 -translate-x-1/2">
                    <span className="absolute inset-0 rounded-full bg-primary" />
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                    )}
                  </div>

                  {/* Card */}
                  <div className="lg-card rounded-3xl p-6 md:p-8 group hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-5">

                      {/* Company Logo */}
                      <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.logoColor} flex items-center justify-center shadow-lg text-white font-bold text-lg select-none`}>
                        {exp.logo}
                      </div>

                      {/* Main Content */}
                      <div className="flex-1 min-w-0 space-y-3">
                        {/* Role + current badge */}
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>

                        {/* Company + type */}
                        <div className="flex flex-wrap items-center gap-2 text-sm">
                          <span className="font-semibold text-foreground/90">
                            {exp.company}
                          </span>
                          <span className="text-muted-foreground">·</span>
                          <span className="text-muted-foreground">
                            {exp.type}
                          </span>
                        </div>

                        {/* Period + location */}
                        <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-primary/60" />
                            {exp.period}
                            <span className="px-1.5 py-0.5 rounded-md lg-badge text-muted-foreground font-medium">
                              {exp.duration}
                            </span>
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-primary/60" />
                            {exp.location}
                            <span className="px-1.5 py-0.5 rounded-md lg-badge text-muted-foreground font-medium">
                              {exp.workMode}
                            </span>
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Tech tags + optional link */}
                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          {exp.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-3 py-1 rounded-lg lg-badge text-xs font-semibold text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                          {exp.link && (
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-auto p-1.5 rounded-full liquid-glass-pill hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* "More coming soon" placeholder */}
              <motion.div variants={itemVariants} className="relative pl-16">
                <div className="absolute left-4 top-5 w-5 h-5 -translate-x-1/2 rounded-full border-2 border-dashed border-primary/30" />
                <div className="flex items-center gap-3 py-3">
                  <Briefcase className="w-4 h-4 text-muted-foreground/40" />
                  <p className="text-sm text-muted-foreground/50 italic">
                    More chapters being written…
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
