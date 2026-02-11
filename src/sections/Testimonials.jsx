import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

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
  const [isExiting, setIsExiting] = useState(false);

  // Removed explicit TS types to ensure compatibility across all Vite setups
  const handleStep = useCallback((direction) => {
    setIsExiting(true);
    setTimeout(() => {
      if (direction === "next") {
        setActiveIdx((prev) => (prev + 1) % testimonials.length);
      } else {
        setActiveIdx(
          (prev) => (prev - 1 + testimonials.length) % testimonials.length,
        );
      }
      setIsExiting(false);
    }, 200);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handleStep("prev");
      if (e.key === "ArrowRight") handleStep("next");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleStep]);

  return (
    <section
      id="feedback"
      className="py-24 md:py-32 relative overflow-hidden bg-background"
    >
      <div className="absolute top-1/2 left-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Words from{" "}
            <span className="font-serif italic font-normal text-white">
              peers & mentors.
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto group">
          <div className="relative">
            {/* Desktop Nav */}
            <div className="hidden md:block">
              <button
                onClick={() => handleStep("prev")}
                className="absolute -left-20 top-1/2 -translate-y-1/2 p-4 rounded-full border border-white/10 bg-white/5 hover:bg-primary hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => handleStep("next")}
                className="absolute -right-20 top-1/2 -translate-y-1/2 p-4 rounded-full border border-white/10 bg-white/5 hover:bg-primary hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Card */}
            <div
              className={`glass p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-2xl transition-all duration-300 transform 
              ${isExiting ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
            >
              <div className="absolute -top-6 left-10 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
              </div>

              <blockquote className="text-lg md:text-2xl font-medium leading-relaxed mb-10 text-foreground/90 italic">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-5 border-t border-white/5 pt-8">
                <div>
                  <div className="font-bold text-lg md:text-xl text-foreground">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm md:text-base font-medium text-primary uppercase tracking-tight">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-3 mt-10">
              <button
                className="md:hidden p-2 text-muted-foreground"
                onClick={() => handleStep("prev")}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2.5 px-4 py-2 bg-white/5 rounded-full border border-white/5">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setIsExiting(true);
                      setTimeout(() => {
                        setActiveIdx(idx);
                        setIsExiting(false);
                      }, 200);
                    }}
                    className={`h-2.5 rounded-full transition-all duration-500 ${
                      idx === activeIdx
                        ? "w-10 bg-primary"
                        : "w-2.5 bg-muted-foreground/20"
                    }`}
                  />
                ))}
              </div>

              <button
                className="md:hidden p-2 text-muted-foreground"
                onClick={() => handleStep("next")}
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
