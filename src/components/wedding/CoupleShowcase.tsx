import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const photos = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
];

const CoupleShowcase = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 px-6 bg-secondary/30" ref={ref}>
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-3xl md:text-4xl text-accent mb-3">Our Journey</h2>
        <p className="font-body text-muted-foreground text-sm mb-10">Moments we cherish forever</p>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-xl shadow-md group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <img
                src={src}
                alt={`Couple photo ${i + 1}`}
                className="w-full h-40 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CoupleShowcase;
