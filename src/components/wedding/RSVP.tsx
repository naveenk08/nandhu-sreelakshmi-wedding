import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageCircle, Mail, Phone } from "lucide-react";

const RSVP = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 px-6 bg-background" ref={ref}>
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-3xl md:text-4xl text-accent mb-3">RSVP</h2>
        <p className="font-body text-muted-foreground text-sm mb-8">We'd love to hear from you</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <motion.a
            href="https://wa.me/919876543210?text=We%20are%20excited%20to%20attend%20your%20wedding!%20🎉"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-body text-sm shadow-md hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp RSVP
          </motion.a>

          <motion.a
            href="tel:+919876543210"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-body text-sm shadow-md hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-4 h-4" /> Call Us
          </motion.a>
        </div>

        <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm font-body">
          <Mail className="w-4 h-4" />
          <span>priya.arjun.wedding@email.com</span>
        </div>
      </motion.div>
    </section>
  );
};

export default RSVP;
