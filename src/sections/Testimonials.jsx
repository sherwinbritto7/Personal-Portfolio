import { ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Sherwin's work on ZenAi demonstrates a sophisticated blend of AI integration and user-centric design. The seamless automation and intelligent features he implemented show a high level of technical maturity and innovative thinking.",
    author: "Project Mentor",
    role: "Senior Software Engineer",
  },
  {
    quote:
      "Sherwin did an impressive job building ZenAura, an event management platform. The interface is intuitive, the QR ticket system works smoothly, and the project reflects his attention to detail and strong frontend skills.",
    author: "Project Mentor",
    role: "Web Developer",
  },
  {
    quote:
      "Sherwin is highly dedicated and consistently delivers clean, well-structured code. He approaches problems thoughtfully and is always eager to learn and improve.",
    author: "Project Teammate",
    role: "Web Developer",
  },
  {
    quote:
      "Working with Sherwin was a great experience. He communicates clearly, takes feedback positively, and puts in real effort to build polished user interfaces.",
    author: "Peer Developer",
    role: "Frontend Developer",
  },
  {
    quote:
      "Sherwin shows strong attention to detail and a genuine passion for web development. His willingness to learn and improve stands out.",
    author: "Mentor",
    role: "Software Engineer",
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

        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 md:gap-8 group">
          {/* Desktop Prev Button */}
          <button
            onClick={() => handleStep("prev")}
            aria-label="Previous recommendation"
            className="hidden md:flex flex-shrink-0 p-4 rounded-full liquid-glass-pill hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6 relative z-10" />
          </button>

          {/* Testimonial Card Wrapper */}
          <div className="flex-1 min-w-0 relative min-h-[300px] sm:min-h-[340px] flex items-stretch">
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
                className="w-full liquid-glass lg-clip p-4 sm:p-8 md:p-14 rounded-2xl sm:rounded-[2rem] md:rounded-[3rem] flex flex-col justify-between relative overflow-hidden"
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
                <div className="absolute top-4 right-6 text-primary/10 select-none pointer-events-none group-hover:scale-105 group-hover:text-primary/15 transition-all duration-700">
                  <Quote className="w-12 h-12 md:w-32 md:h-32 rotate-180" />
                </div>

                {/* Quote Content */}
                <div className="relative z-10 space-y-3 md:space-y-4" style={{ transform: "translateZ(40px)" }}>
                  <div className="flex gap-0.5 md:gap-1 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm sm:text-lg md:text-xl text-foreground/90 font-medium leading-relaxed italic">
                    "{testimonials[activeIdx].quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div
                  className="flex items-center gap-3 md:gap-4 mt-6 pt-4 md:mt-8 md:pt-6 border-t border-white/5 relative z-10"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 text-primary border border-primary/20 font-bold text-xs sm:text-sm md:text-base select-none shadow-sm shadow-primary/10 flex-shrink-0">
                    {testimonials[activeIdx].author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm sm:text-base md:text-lg">
                      {testimonials[activeIdx].author}
                    </h4>
                    <p className="text-[10px] sm:text-xs md:text-sm text-primary font-semibold tracking-wider uppercase mt-0.5">
                      {testimonials[activeIdx].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop Next Button */}
          <button
            onClick={() => handleStep("next")}
            aria-label="Next recommendation"
            className="hidden md:flex flex-shrink-0 p-4 rounded-full liquid-glass-pill hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 items-center justify-center"
          >
            <ChevronRight className="w-6 h-6 relative z-10" />
          </button>
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
    </section>
  );
};
