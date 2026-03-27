import { useState } from "react";
import { motion } from "framer-motion";
import { Share2, CalendarPlus, Volume2, VolumeX, Heart } from "lucide-react";

const Footer = () => {
  const [muted, setMuted] = useState(true);

  const saveTheDate = () => {
    const ics = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:20251220T100000
DTEND:20251220T230000
SUMMARY:Priya & Arjun's Wedding
LOCATION:The Grand Palace Hall, 123 Royal Garden Road, Mumbai
DESCRIPTION:Join us to celebrate the wedding of Priya & Arjun
END:VEVENT
END:VCALENDAR`;
    const blob = new Blob([ics], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "priya-arjun-wedding.ics";
    a.click();
    URL.revokeObjectURL(url);
  };

  const share = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Priya & Arjun's Wedding",
        text: "You're invited to our wedding! 💍",
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <footer className="py-12 px-6 bg-accent text-accent-foreground text-center">
      <div className="max-w-lg mx-auto">
        <h3 className="font-cursive text-4xl mb-4">Priya & Arjun</h3>
        <p className="font-body text-sm opacity-80 mb-8">December 20, 2025</p>

        <div className="flex justify-center gap-3 mb-8">
          <motion.button
            onClick={saveTheDate}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/20 rounded-full text-sm font-body backdrop-blur-sm hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CalendarPlus className="w-4 h-4" /> Save the Date
          </motion.button>

          <motion.button
            onClick={share}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/20 rounded-full text-sm font-body backdrop-blur-sm hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Share2 className="w-4 h-4" /> Share
          </motion.button>

          <motion.button
            onClick={() => setMuted(!muted)}
            className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </motion.button>
        </div>

        <div className="flex items-center justify-center gap-1 text-sm opacity-60 font-body">
          Made with <Heart className="w-3 h-3 fill-current" /> Love
        </div>
      </div>
    </footer>
  );
};

export default Footer;
