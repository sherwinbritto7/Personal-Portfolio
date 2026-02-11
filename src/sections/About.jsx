import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing clean, readable, and maintainable code with a focus on best practices.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Building fast and responsive interfaces with performance in mind.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Collaborating with designers and developers to turn ideas into reality.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description:
      "Actively learning new technologies and improving through hands-on projects.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase border-b-2 border-primary/30 pb-1">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Learning to build better web experiences,
              <span className="font-serif italic font-normal text-white block mt-2">
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 leading-relaxed">
              <p>
                I'm a passionate{" "}
                <span className="text-primary font-medium">Web Developer</span>{" "}
                with a strong focus on building modern, responsive, and
                user-friendly web applications. My journey started with a
                curiosity about how things work on the web, which quickly grew
                into a passion for creating meaningful digital experiences.
              </p>
              <p>
                I primarily work with React, Next.js, and JavaScript, crafting
                clean and efficient interfaces that prioritize usability and
                performance. I enjoy turning ideas into functional products
                through thoughtful design and clean code.
              </p>
              <p>
                When I'm not coding, I spend time learning new technologies,
                improving my skills through hands-on projects, and staying up to
                date with the latest trends in web development.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300 border border-white/10 bg-white/5">
              <p className="text-lg font-medium italic text-foreground/90">
                "My goal is to build clean, user-friendly digital experiences
                that are both functional and enjoyable to use, with code that is
                easy to understand and maintain."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="group relative glass p-8 rounded-2xl animate-fade-in transition-all duration-300 
                           hover:-translate-y-2 hover:bg-white/10 hover:shadow-xl hover:shadow-primary/5 
                           border border-white/5 hover:border-primary/50"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Icon Container */}
                <div
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 
                                transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Subtle Decorative Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
