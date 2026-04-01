import Hero from "@/components/wedding/Hero";
import Countdown from "@/components/wedding/Countdown";
import CoupleShowcase from "@/components/wedding/CoupleShowcase";
import InvitationMessage from "@/components/wedding/InvitationMessage";
import EventDetails from "@/components/wedding/EventDetails";
import Location from "@/components/wedding/Location";
import Gallery from "@/components/wedding/Gallery";
import RSVP from "@/components/wedding/RSVP";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Countdown />
      <CoupleShowcase />
      <InvitationMessage />
      <EventDetails />
      <Location />
      <Gallery />
      {/* <RSVP /> */}
      <Footer />
    </main>
  );
};

export default Index;
