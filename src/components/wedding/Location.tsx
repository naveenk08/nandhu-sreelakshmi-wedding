import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin } from "lucide-react";

const Location = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 px-6 bg-background" ref={ref}>
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-3xl md:text-4xl text-accent mb-3">Venue Location</h2>
        <p className="font-body text-muted-foreground text-sm mb-8">Find your way to us</p>

        <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
          <iframe
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.755695879097!2d72.87765381490196!3d19.07598298709982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c627a20bfbab%3A0x94dc02c1b14ca3b8!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.4172407217998!2d76.71175079999999!3d9.899164400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07c40b46ceffbb%3A0x7461c97149e15037!2sSree%20Krishna%20Swami%20Temple%2C%20Thodupuzha!5e0!3m2!1sen!2sin!4v1775021883639!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Venue Location"
          />
          <div className="p-6">
            <p className="font-display text-foreground font-semibold">Sree Krishna Swamy Temple</p>
            <p className="font-body text-muted-foreground text-sm mt-1">Thodupuzha, Idukki</p>
            <motion.a
              href="https://www.google.com/maps/place/Sree+Krishna+Swami+Temple,+Thodupuzha/@9.8991697,76.7091759,17z/data=!3m1!4b1!4m6!3m5!1s0x3b07c40b46ceffbb:0x7461c97149e15037!8m2!3d9.8991644!4d76.7117508!16s%2Fg%2F11c5wj2gql?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-body text-sm shadow-md hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin className="w-4 h-4" /> Open in Maps
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Location;
