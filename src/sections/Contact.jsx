import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sherwinbritto232@gmail.com",
    href: "mailto:sherwinbritto232@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 79778 65176",
    href: "tel:+917977865176",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, India",
    href: "https://maps.app.goo.gl/7o6BAHTnrcEdC6eU9",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  // Simple Email Validation regex
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const getValidationState = (field) => {
    if (!touchedFields[field]) return "neutral";
    const value = formData[field].trim();
    if (field === "email") {
      return validateEmail(value) ? "valid" : "invalid";
    }
    return value.length > 0 ? "valid" : "invalid";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trigger touched for all fields
    setTouchedFields({ name: true, email: true, message: true });

    // Validate email
    if (!validateEmail(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables.",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setTouchedFields({ name: false, email: false, message: false });
    } catch (err) {
      console.error("EmailJS error:", err);
      setSubmitStatus({
        type: "error",
        message: err.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const isFloating = (field) => {
    return focusedField === field || formData[field] !== "";
  };

  const getInputStyles = (field) => {
    const state = getValidationState(field);
    const isFocused = focusedField === field;
    
    let borderClass = "";
    let glowClass = "";

    if (isFocused) {
      if (state === "invalid") {
        borderClass = "!border-red-500";
        glowClass = "!shadow-[inset_0_2px_6px_rgba(0,0,0,0.18),0_0_0_3px_rgba(239,68,68,0.14)]";
      } else if (state === "valid") {
        borderClass = "!border-emerald-500";
        glowClass = "!shadow-[inset_0_2px_6px_rgba(0,0,0,0.18),0_0_0_3px_rgba(16,185,129,0.14)]";
      }
    } else {
      if (state === "invalid") {
        borderClass = "!border-red-500/60";
      } else if (state === "valid") {
        borderClass = "!border-emerald-500/40";
      }
    }

    return `${borderClass} ${glowClass}`;
  };

  return (
    <section id="contact" className="py-14 md:py-20 relative overflow-hidden bg-background">
      {/* Background spotlights */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-highlight/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full lg-badge text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="w-3.5 h-3.5" />
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-primary">
              something great.
            </span>
          </h2>
          
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Have an idea, opportunity, or just want to chat? Drop a message 
            and let’s create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Left Column - Contact Form */}
          <div className="liquid-glass lg-clip p-8 rounded-3xl relative flex flex-col justify-between">
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              
              {/* Name Field */}
              <div className="relative">
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => {
                    setFocusedField(null);
                    setTouchedFields((prev) => ({ ...prev, name: true }));
                  }}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full px-4 py-3 lg-input rounded-xl outline-none transition-all duration-300 ${getInputStyles("name")}`}
                />
                <label
                  htmlFor="name"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none select-none ${
                    isFloating("name")
                      ? "-top-2.5 text-xs text-primary bg-transparent px-1.5 font-bold"
                      : "top-3.5 text-sm text-muted-foreground"
                  }`}
                >
                  Name
                </label>
                {getValidationState("name") === "invalid" && (
                  <p className="text-[11px] text-red-400 mt-1 pl-1">
                    Please provide your name.
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => {
                    setFocusedField(null);
                    setTouchedFields((prev) => ({ ...prev, email: true }));
                  }}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-4 py-3 lg-input rounded-xl outline-none transition-all duration-300 ${getInputStyles("email")}`}
                />
                <label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none select-none ${
                    isFloating("email")
                      ? "-top-2.5 text-xs text-primary bg-transparent px-1.5 font-bold"
                      : "top-3.5 text-sm text-muted-foreground"
                  }`}
                >
                  Email Address
                </label>
                {getValidationState("email") === "invalid" && (
                  <p className="text-[11px] text-red-400 mt-1 pl-1">
                    Please enter a valid email (e.g. name@example.com).
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => {
                    setFocusedField(null);
                    setTouchedFields((prev) => ({ ...prev, message: true }));
                  }}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`w-full px-4 py-3 lg-input rounded-xl outline-none transition-all duration-300 resize-none ${getInputStyles("message")}`}
                />
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none select-none ${
                    isFloating("message")
                      ? "-top-2.5 text-xs text-primary bg-transparent px-1.5 font-bold"
                      : "top-3.5 text-sm text-muted-foreground"
                  }`}
                >
                  Message
                </label>
                {getValidationState("message") === "invalid" && (
                  <p className="text-[11px] text-red-400 mt-1 pl-1">
                    Please type a message.
                  </p>
                )}
              </div>

              <Button
                className="w-full h-[54px] rounded-xl hover:scale-[1.01] active:scale-[0.99] transition-all"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>

              {/* Submission Status Alert Banner with Framer Motion */}
              <AnimatePresence>
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className={`flex items-start gap-3 p-4 rounded-xl relative ${
                      submitStatus.type === "success"
                        ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    )}
                    <div className="space-y-1">
                      <p className="text-sm font-semibold leading-none">
                        {submitStatus.type === "success" ? "Success!" : "Error!"}
                      </p>
                      <p className="text-xs opacity-90">{submitStatus.message}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* Right Column - Contact Info & Availability */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="liquid-glass lg-clip rounded-3xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-foreground">
                Contact Information
              </h3>
              
              <div className="space-y-2">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-surface border border-transparent hover:border-white/5 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="font-bold text-foreground mt-0.5 group-hover:text-primary transition-colors duration-300">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Banner */}
            <div className="liquid-glass lg-clip rounded-3xl p-8 space-y-3 relative overflow-hidden group hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3.5 w-3.5">
                  <span className="animate-ripple absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
                </span>
                <span className="font-bold text-foreground text-sm uppercase tracking-wider">
                  Currently Available
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I’m currently open to new roles, software engineering internships, 
                and freelance work. Let's create high-quality frontend environments together!
              </p>
              
              {/* Dynamic corner ornament */}
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/15 transition-all duration-500" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
