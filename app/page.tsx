import HeroSection from "@components/HeroSection";
import AboutUs from "@components/AboutUs";
import Portfolio from "@components/Portfolio";
import OurTeam from "@components/OurTeam";
import Contact from "@components/Contact";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <main>
      <header>
        <HeroSection />
      </header>
      <section className="w-container mx-auto">
        <AboutUs />
      </section>
      <section>
        <Portfolio />
      </section>
      <section className="w-container mx-auto">
        <OurTeam />
      </section>
      <section className="w-container mx-auto">
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
