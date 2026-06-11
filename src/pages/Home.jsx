import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import StatsStrip from "../components/sections/StatsStrip";
import Services from "../components/sections/Services";
import Offering from "../components/sections/Offering";
import Roadmap from "../components/sections/Roadmap";
import ReliableEngineering from "../components/sections/ReliableEngineering";
import OurProcess from "../components/sections/OurProcess";
import ContactCTA from "../components/sections/ContactCTA";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Header />
      <div className="text-white p-10"></div>
      <main>
        <div className="relative">
          <Hero />
          <StatsStrip />
        </div>
        <Services />
        <Offering />
        <Roadmap />
        <ReliableEngineering />
        <OurProcess />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
