import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const WEDDING_DATE = new Date("2026-05-03T10:30:00");

const Countdown = () => {
  const [time, setTime] = useState(getTimeLeft());
  const { ref, isVisible } = useScrollReveal();

  function getTimeLeft() {
    const diff = WEDDING_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Mins", value: time.minutes },
    { label: "Sec", value: time.seconds },
  ];

  return (
    <section id="countdown" className="py-20 px-6 bg-background" ref={ref}>
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-3xl md:text-4xl text-accent mb-2">Save the Date</h2>
        <p className="font-body text-muted-foreground mb-10 text-sm">May 03, 2026</p>

        <div className="flex justify-center gap-3 sm:gap-6">
          {units.map((u, i) => (
            <motion.div
              key={u.label}
              className="bg-card rounded-xl shadow-md p-4 sm:p-6 min-w-[70px] sm:min-w-[90px]"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <motion.span
                key={u.value}
                className="block font-display text-3xl sm:text-4xl text-primary font-bold"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {String(u.value).padStart(2, "0")}
              </motion.span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-body mt-1 block">
                {u.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Countdown;
