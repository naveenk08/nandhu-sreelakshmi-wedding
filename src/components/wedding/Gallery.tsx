import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { X } from "lucide-react";

const galleryImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=800&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=800&fit=crop",
];

const Gallery = () => {
  const { ref, isVisible } = useScrollReveal();
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 bg-secondary/30" ref={ref}>
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-3xl md:text-4xl text-accent mb-3">Gallery</h2>
        <p className="font-body text-muted-foreground text-sm mb-10">Beautiful memories</p>

        <div className="columns-2 sm:columns-3 gap-3 space-y-3">
          {galleryImages.map((src, i) => (
            <motion.div
              key={i}
              className="break-inside-avoid overflow-hidden rounded-xl shadow-md cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              onClick={() => setLightbox(src)}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.img
              src={lightbox.replace("w=600", "w=1200")}
              alt="Enlarged"
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white"
              onClick={() => setLightbox(null)}
            >
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
