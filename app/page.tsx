import HeroSection from "@components/HeroSection";
import AboutUs from "@components/AboutUs";
import Portfolio from "@components/Portfolio";
import OurTeam from "@components/OurTeam";
import Contact from "@components/Contact";
import Footer from "@components/Footer";
import HomeContainer from "../container/HomeContainer";

export default function Home() {
  return (
    <main>
      <header>
        <HeroSection />
      </header>
      <HomeContainer>
        <AboutUs />
      </HomeContainer>
      <Portfolio />
      <HomeContainer>
        <OurTeam />
      </HomeContainer>
      <HomeContainer>
        <Contact />
      </HomeContainer>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
