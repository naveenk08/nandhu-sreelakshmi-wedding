import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 5,
  duration: 6 + Math.random() * 6,
  size: 6 + Math.random() * 10,
  emoji: ["✿", "❀", "✦", "❋", "✧", "❁"][Math.floor(Math.random() * 6)],
}));

const Hero = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(t);
  }, []);

  const scrollDown = () => {
    document.getElementById("countdown")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream via-secondary to-pastel-pink">
      {/* Floating particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute text-primary/40 animate-float-up pointer-events-none select-none"
          style={{
            left: `${p.left}%`,
            bottom: "-20px",
            fontSize: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        >
          {p.emoji}
        </span>
      ))}

      {/* Confetti burst */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {Array.from({ length: 40 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: "50%",
                top: "40%",
                backgroundColor: ["#D4AF37", "#F8C8DC", "#800020", "#FFD700", "#FFF8E7"][i % 5],
              }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{
                x: (Math.random() - 0.5) * 600,
                y: (Math.random() - 0.5) * 600,
                opacity: 0,
                scale: 0,
                rotate: Math.random() * 720,
              }}
              transition={{ duration: 2 + Math.random() * 2, ease: "easeOut" }}
            />
          ))}
        </div>
      )}

      <motion.div
        className="relative z-20 text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.p
          className="text-muted-foreground text-sm md:text-base tracking-widest uppercase mb-4 font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Together with their families
        </motion.p>

        <motion.h1
          className="font-cursive text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-accent leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
        >
          Priya
        </motion.h1>

        <motion.p
          className="font-display text-2xl md:text-3xl text-primary my-2 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          &amp;
        </motion.p>

        <motion.h1
          className="font-cursive text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-accent leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        >
          Arjun
        </motion.h1>

        <motion.p
          className="font-display text-lg md:text-xl text-muted-foreground mt-6 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Request the pleasure of your company
        </motion.p>

        <motion.button
          onClick={scrollDown}
          className="mt-10 px-8 py-3 bg-primary text-primary-foreground rounded-full font-body text-sm tracking-wider uppercase shadow-lg hover:shadow-xl transition-all animate-pulse-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Open Invitation ↓
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
