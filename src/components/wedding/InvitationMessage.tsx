import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const InvitationMessage = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 px-6 bg-background" ref={ref}>
      <motion.div
        className="max-w-xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <div className="bg-card rounded-2xl shadow-lg p-8 sm:p-12 border border-primary/20 relative overflow-hidden">
          {/* Decorative corners */}
          <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-lg" />
          <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-lg" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-lg" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-lg" />

          <motion.span
            className="text-primary text-4xl block mb-4"
            initial={{ rotate: -10, opacity: 0 }}
            animate={isVisible ? { rotate: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            💌
          </motion.span>

          <h2 className="font-display text-2xl sm:text-3xl text-accent mb-6">
  Together with their families, joyfully invite you
</h2>

<p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base">
  With hearts full of love and gratitude, we warmly invite you to witness
  and celebrate the sacred union of{" "}
  <span className="font-cursive text-xl text-accent">Nandhukrishna</span> &{" "}
  <span className="font-cursive text-xl text-accent">Sreelakshmi</span>, as they
  embark on a beautiful journey of togetherness, love, and lifelong companionship.
</p>

<p className="font-body text-muted-foreground mt-4 text-sm italic">
  Your presence and blessings will make this joyous occasion truly memorable.
</p>
        </div>
      </motion.div>
    </section>
  );
};

export default InvitationMessage;
