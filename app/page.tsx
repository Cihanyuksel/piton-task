import AboutUs from "@components/AboutUs";
import Contact from "@components/Contact";
import HeroSection from "@components/HeroSection";
import OurTeam from "@components/OurTeam";
import Portfolio from "@components/Portfolio";
import HomeContainer from "../container/HomeContainer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="w-[90%] mx-auto">
        <AboutUs />
      </section>
      <section>
        <Portfolio />
      </section>
      <section className="w-[90%] mx-auto">
        <OurTeam />
      </section>
      <section className="w-[90%] mx-auto">
        <Contact />
      </section>
    </main>
  );
}
