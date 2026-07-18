import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "MongoDB",
  "Convex",
  "Vercel",
  "Git",
];

export const Hero = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    sectionRef.current.style.setProperty("--mouse-x", `${x}px`);
    sectionRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleCardMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Smooth responsive 3D tilt
    const rX = -(mouseY / height) * 15;
    const rY = (mouseX / width) * 15;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleCardMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  // Framer Motion Variants for Staggered Load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, filter: "blur(4px)" },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 90, damping: 14 },
    },
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden group/hero"
    >
      {/* Background Grid & Spotlight */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none opacity-40 group-hover/hero:opacity-90 transition-opacity duration-500"
          style={{
            background: `radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 30%), rgba(32, 178, 166, 0.15), transparent 80%)`,
          }}
        />
        <img
          src="/hero-bg.jpg"
          alt="hero background"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/60 to-background" />
      </div>

      {/* Floating Particles using Framer Motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/40 blur-[0.5px]"
            initial={{
              x: `${(i * 13) % 100}vw`,
              y: `${(i * 17) % 100}vh`,
              opacity: 0.2 + Math.random() * 0.4,
            }}
            animate={{
              x: [
                `${(i * 13) % 100}vw`,
                `${((i * 13) + 12) % 100}vw`,
                `${((i * 13) - 8) % 100}vw`,
                `${(i * 13) % 100}vw`,
              ],
              y: [
                `${(i * 17) % 100}vh`,
                `${((i * 17) - 15) % 100}vh`,
                `${((i * 17) + 10) % 100}vh`,
                `${(i * 17) % 100}vh`,
              ],
            }}
            transition={{
              duration: 25 + Math.random() * 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-28 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full lg-badge text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Web Developer - React Specialist
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm <span className="text-primary glow-text">Sherwin Britto</span>,
                <br />
                a <span className="font-serif italic font-normal text-white">Web Developer.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Sherwin Britto is a professional web developer building modern,
                responsive web applications using React, Tailwind CSS, Node.js,
                and modern technologies.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button size="lg">
                  Contact Me
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <a
                href="/Sherwin_Britto_Resume.pdf"
                download="Sherwin_Britto_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: Github, href: "https://github.com/sherwinbritto7" },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/sherwinb7",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/sherwinnn.7",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full liquid-glass-pill hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-110"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image with 3D perspective */}
          <div className="relative flex justify-center items-center animate-fade-in animation-delay-300">
            {/* Background spotlight blur behind profile */}
            <div className="absolute w-[80%] h-[80%] rounded-full bg-primary/20 blur-3xl opacity-60 animate-pulse pointer-events-none" />

            {/* Tilt Perspective Wrapper */}
            <div className="relative max-w-md w-full" style={{ perspective: "1000px" }}>
             

              <div
                className="relative liquid-glass rounded-3xl p-2.5 cursor-default group shadow-2xl hover:border-primary/30 transition-colors duration-300"
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/profile.png"
                    alt="Sherwin Britto"
                    className="w-full aspect-[4/5] object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Marquee - Masked Smooth Fading Edges */}
        <div className="mt-16 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-8 text-center tracking-wider uppercase font-medium opacity-80">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden mask-marquee">
            <div className="flex animate-marquee py-2">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-4">
                  <span className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl lg-badge text-base font-semibold text-muted-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
