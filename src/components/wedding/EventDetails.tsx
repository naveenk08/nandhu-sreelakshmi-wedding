import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calendar, Clock, MapPin, Building } from "lucide-react";

const events = [
  { icon: Calendar, label: "Date", value: "May 03, 2026", highlight: true },
  { icon: Clock, label: "Time", value: "10:30 AM onwards" },
  { icon: Building, label: "Venue", value: "Sree Krishna Swamy Temple", highlight: true },
  { icon: MapPin, label: "Location", value: "Thodupuzha, Idukki" },
];

const EventDetails = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background"
      ref={ref}
    >
      {/* subtle decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />

      <motion.div
        className="relative max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <h2 className="font-display text-3xl md:text-5xl text-accent mb-4 tracking-wide">
          Wedding Details
        </h2>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-10 h-[1px] bg-accent/40" />
          <span className="w-2 h-2 rounded-full bg-accent" />
          <span className="w-10 h-[1px] bg-accent/40" />
        </div>

        <p className="font-body text-muted-foreground text-sm mb-12 italic">
          We look forward to celebrating this beautiful moment with you
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {events.map((e, i) => (
            <motion.div
              key={e.label}
              className={`group relative rounded-2xl p-[1px] ${
                e.highlight
                  ? "bg-gradient-to-br from-primary/40 to-accent/40"
                  : "bg-border/30"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -6 }}
            >
              <div className="rounded-2xl bg-card/80 backdrop-blur-md p-6 flex flex-col items-center text-center gap-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center ${
                    e.highlight
                      ? "bg-primary text-white shadow-md"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <e.icon className="w-6 h-6" />
                </div>

                {/* Label */}
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-body">
                  {e.label}
                </span>

                {/* Value */}
                <span
                  className={`font-display ${
                    e.highlight
                      ? "text-base text-accent"
                      : "text-sm text-foreground"
                  } font-semibold leading-snug`}
                >
                  {e.value}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EventDetails;