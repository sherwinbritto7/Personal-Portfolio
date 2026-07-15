import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1600; // total animation time in ms
    const intervalTime = 20; // update frequency
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      // Easing function for satisfying speed acceleration at the end
      const t = currentStep / steps;
      const easedProgress = Math.min(Math.round((t * t * t) * 100), 100);
      
      setProgress(easedProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 300); // short delay after hitting 100%
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: "-100%",
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
      }}
      className="fixed inset-0 bg-[#07070a] z-[9999] flex flex-col items-center justify-center px-4"
    >
      {/* Background radial glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-sm flex flex-col items-center gap-8 relative z-10">
        {/* Glowing Logo Name */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <img
            src="/logo.png"
            alt="Sherwin."
            className="h-10 w-auto object-contain"
          />
        </motion.div>

        {/* Counter and Progress Bar container */}
        <div className="w-full flex flex-col gap-3">
          <div className="flex justify-between items-end">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-semibold">
              Loading Portfolio
            </span>
            <span className="text-xl font-bold font-mono text-white/90">
              {progress}%
            </span>
          </div>

          {/* Progress Bar Track */}
          <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
