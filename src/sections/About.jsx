import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Lightbulb,
  Rocket,
  Users,
  Cpu,
  Terminal,
  Settings,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing clean, readable, and maintainable code with a focus on best practices.",
    glowColor: "rgba(32, 178, 166, 0.15)",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Building fast and responsive interfaces with performance in mind.",
    glowColor: "rgba(245, 166, 35, 0.15)",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Collaborating with designers and developers to turn ideas into reality.",
    glowColor: "rgba(32, 178, 166, 0.15)",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Actively learning new technologies and improving through hands-on projects.",
    glowColor: "rgba(245, 166, 35, 0.15)",
  },
];

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Tech",
    icon: Cpu,
    skills: [
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "HTML5 / CSS3", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "JavaScript", level: "Expert" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Data",
    icon: Terminal,
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "Convex", level: "Intermediate" },
      { name: "Supabase", level: "Advanced" },
      { name: "REST APIs", level: "Expert" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Extras",
    icon: Settings,
    skills: [
      { name: "Git & GitHub", level: "Expert" },
      { name: "Vercel", level: "Expert" },
      { name: "Clerk Auth", level: "Advanced" },
      { name: "Cloudinary", level: "Intermediate" },
      { name: "OpenAI Integration", level: "Advanced" },
      { name: "Firecrawl Scraping", level: "Advanced" },
    ],
  },
];

const stats = [
  { value: "15+", label: "Projects Completed", description: "Realized web apps" },
  { value: "99%", label: "Code Reliability", description: "Clean & tested code" },
  { value: "100%", label: "Commitment Rate", description: "On-time delivery" },
];

export const About = () => {
  const [activeTab, setActiveTab] = useState("values"); // 'values' or 'skills'

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-background">
      {/* Background Ornaments */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-highlight/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Biography & Stats */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary">
                  <Sparkles className="w-3.5 h-3.5" />
                  About Me
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                Building better web experiences,
                <span className="font-serif italic font-normal text-primary block mt-2">
                  one component at a time.
                </span>
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate{" "}
                  <span className="text-foreground font-semibold border-b border-primary/30 pb-0.5">
                    Web Developer
                  </span>{" "}
                  focused on building modern, responsive, and user-friendly web
                  applications that blend clean aesthetics with optimized performance.
                </p>

                <p>
                  I work mainly with React, Next.js, and JavaScript, creating
                  clean, intuitive interfaces that prioritize accessibility and
                  speed. I thrive at the intersection of complex coding and creative design.
                </p>

                <p>
                  Outside of programming, I dedicate time to mastering fresh tools,
                  exploring open-source frameworks, and experimenting with cloud
                  architectures through hands-on hacking.
                </p>
              </div>
            </div>

            {/* Dynamic Interactive Stats Banner */}
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass p-3 md:p-4 rounded-2xl text-center border border-white/5 bg-white/5 relative overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="font-serif text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-xs font-medium text-foreground/80 mt-1 leading-tight">
                    {stat.label}
                  </div>
                  <div className="text-[9px] md:text-[10px] text-muted-foreground mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                    {stat.description}
                  </div>
                  {/* Glowing background bubble */}
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Tabs Switcher & Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Pill Tab Switcher */}
            <div className="flex justify-center sm:justify-start">
              <div className="relative flex p-1 bg-surface rounded-full border border-border/80 max-w-md w-full shadow-inner">
                {/* My Values Tab Button */}
                <button
                  onClick={() => setActiveTab("values")}
                  className={`relative flex-1 py-3 text-sm font-semibold rounded-full transition-all duration-300 focus:outline-none z-10 ${
                    activeTab === "values" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeTab === "values" && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-primary rounded-full -z-10 shadow-lg shadow-primary/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  My Principles
                </button>

                {/* Tech Stack Tab Button */}
                <button
                  onClick={() => setActiveTab("skills")}
                  className={`relative flex-1 py-3 text-sm font-semibold rounded-full transition-all duration-300 focus:outline-none z-10 ${
                    activeTab === "skills" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeTab === "skills" && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-primary rounded-full -z-10 shadow-lg shadow-primary/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  Tech Toolbox
                </button>
              </div>
            </div>

            {/* Render Tab Content with Framer Motion AnimatePresence */}
            <div className="min-h-0 md:min-h-[450px]">
              <AnimatePresence mode="wait">
                {activeTab === "values" ? (
                  <motion.div
                    key="values-panel"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -10 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                  >
                    {highlights.map((item, idx) => (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        whileHover={{ y: -6, scale: 1.01 }}
                        className="group relative glass p-5 sm:p-8 rounded-2xl border border-white/5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 bg-white/5"
                      >
                        {/* Glowing Background Overlay */}
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                          style={{
                            background: `radial-gradient(150px circle at 50% 50%, ${item.glowColor}, transparent 80%)`,
                          }}
                        />

                        {/* Icon Container */}
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                          <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                        </div>

                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="skills-panel"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    {skillCategories.map((cat, idx) => (
                      <motion.div
                        key={cat.id}
                        variants={itemVariants}
                        className="glass rounded-2xl p-6 border border-white/5 bg-white/5 relative overflow-hidden"
                      >
                        {/* Title Header with Category Icon */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-primary/10 text-primary">
                            <cat.icon className="w-5 h-5" />
                          </div>
                          <h3 className="text-lg font-bold text-foreground">
                            {cat.title}
                          </h3>
                        </div>

                        {/* Skills Bubble Grid */}
                        <div className="flex flex-wrap gap-2.5">
                          {cat.skills.map((skill, sIdx) => (
                            <div
                              key={sIdx}
                              className="group relative cursor-default px-4 py-2 rounded-xl bg-surface border border-border/80 text-sm font-semibold text-muted-foreground hover:text-primary hover:border-primary/40 hover:scale-105 transition-all duration-300"
                            >
                              <span>{skill.name}</span>
                              
                              {/* Hover mini-badge popover */}
                              <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-primary text-[10px] font-bold text-white opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-top-8 transition-all duration-300 shadow-md whitespace-nowrap">
                                {skill.level}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
