import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calendar, Clock, MapPin, Building } from "lucide-react";

const events = [
  { icon: Calendar, label: "Date", value: "December 20, 2025" },
  { icon: Clock, label: "Time", value: "10:00 AM onwards" },
  { icon: Building, label: "Venue", value: "The Grand Palace Hall" },
  { icon: MapPin, label: "Address", value: "123 Royal Garden Road, Mumbai" },
];

const EventDetails = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 px-6 bg-secondary/30" ref={ref}>
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-3xl md:text-4xl text-accent mb-3">Wedding Details</h2>
        <p className="font-body text-muted-foreground text-sm mb-10">Mark your calendar</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {events.map((e, i) => (
            <motion.div
              key={e.label}
              className="bg-card rounded-xl shadow-md p-6 flex flex-col items-center gap-3 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <e.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-body">{e.label}</span>
              <span className="font-display text-foreground font-semibold text-sm">{e.value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default EventDetails;
