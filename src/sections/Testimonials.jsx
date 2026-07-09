import { ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Sherwin's work on ZenAi demonstrates a sophisticated blend of AI integration and user-centric design. The seamless automation and intelligent features he implemented show a high level of technical maturity and innovative thinking.",
    author: "Project Mentor",
    role: "Senior Software Engineer",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Sherwin did an impressive job building ZenAura, an event management platform. The interface is intuitive, the QR ticket system works smoothly, and the project reflects his attention to detail and strong frontend skills.",
    author: "Project Mentor",
    role: "Web Developer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Sherwin is highly dedicated and consistently delivers clean, well-structured code. He approaches problems thoughtfully and is always eager to learn and improve.",
    author: "Project Teammate",
    role: "Web Developer",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Working with Sherwin was a great experience. He communicates clearly, takes feedback positively, and puts in real effort to build polished user interfaces.",
    author: "Peer Developer",
    role: "Frontend Developer",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Sherwin shows strong attention to detail and a genuine passion for web development. His willingness to learn and improve stands out.",
    author: "Mentor",
    role: "Software Engineer",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleStep = useCallback((stepDirection) => {
    const dir = stepDirection === "next" ? 1 : -1;
    setDirection(dir);
    setActiveIdx((prev) => {
      if (stepDirection === "next") {
        return (prev + 1) % testimonials.length;
      } else {
        return (prev - 1 + testimonials.length) % testimonials.length;
      }
    });
  }, []);

  const handleCardMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handleStep("prev");
      if (e.key === "ArrowRight") handleStep("next");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleStep]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.97,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 280, damping: 26 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.97,
      transition: {
        x: { type: "spring", stiffness: 280, damping: 26 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 },
      },
    }),
  };

  return (
    <section
      id="feedback"
      className="py-14 md:py-20 relative overflow-hidden bg-background"
    >
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 w-[350px] md:w-[800px] h-[350px] md:h-[800px] bg-primary/10 rounded-full blur-[130px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full lg-badge text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="w-3.5 h-3.5" />
              Recommendations
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Words from{" "}
            <span className="font-serif italic font-normal text-primary">
              peers & mentors.
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto group">
          <div className="relative">
            {/* Desktop Navigation buttons */}
            <div className="hidden md:block">
              <button
                onClick={() => handleStep("prev")}
                aria-label="Previous recommendation"
                className="absolute -left-24 top-1/2 -translate-y-1/2 p-4 rounded-full liquid-glass-pill hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => handleStep("next")}
                aria-label="Next recommendation"
                className="absolute -right-24 top-1/2 -translate-y-1/2 p-4 rounded-full liquid-glass-pill hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Testimonial Card */}
            <div className="relative min-h-[380px] md:min-h-[340px] flex items-stretch">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIdx}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  ref={cardRef}
                  onMouseMove={handleCardMouseMove}
                  className="w-full liquid-glass lg-clip p-8 md:p-14 rounded-[2rem] md:rounded-[3rem] flex flex-col justify-between relative overflow-hidden"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Radial Spotlight Overlay */}
                  <div
                    className="absolute inset-0 opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(32, 178, 166, 0.07), transparent 80%)`,
                    }}
                  />

                  {/* Ambient Glowing Quote Icon */}
                  <div className="absolute top-6 right-8 text-primary/10 select-none pointer-events-none group-hover:scale-105 group-hover:text-primary/15 transition-all duration-700">
                    <Quote className="w-24 h-24 md:w-32 md:h-32 rotate-180" />
                  </div>

                  {/* Top Quote Icon Container */}
                  <div 
                    className="absolute -top-6 left-10 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 rotate-3 group-hover:rotate-0 transition-transform duration-500"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <Quote className="w-6 h-6 text-primary-foreground" />
                  </div>

                  {/* Quote Body */}
                  <blockquote 
                    className="text-base md:text-xl font-medium leading-relaxed mt-4 mb-8 text-foreground/90 italic"
                    style={{ transform: "translateZ(10px)" }}
                  >
                    "{testimonials[activeIdx].quote}"
                  </blockquote>

                  {/* Author Meta Details + Fixed Avatar */}
                  <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/40 shadow-lg shadow-primary/10 group-hover:border-primary transition-colors duration-500">
                      <img
                        src={testimonials[activeIdx].avatar}
                        alt={testimonials[activeIdx].author}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-lg md:text-xl text-foreground">
                        {testimonials[activeIdx].author}
                      </div>
                      <div className="text-xs md:text-sm font-bold text-primary uppercase tracking-wider mt-0.5">
                        {testimonials[activeIdx].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center gap-3 mt-10">
              <button
                className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => handleStep("prev")}
                aria-label="Previous recommendation"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2.5 px-4 py-2 liquid-glass-pill rounded-full">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > activeIdx ? 1 : -1);
                      setActiveIdx(idx);
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-500 focus:outline-none ${
                      idx === activeIdx
                        ? "w-10 bg-primary shadow-md shadow-primary/20"
                        : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => handleStep("next")}
                aria-label="Next recommendation"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
