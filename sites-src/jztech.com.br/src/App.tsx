import {
  AboutUsSection,
  ContactSection,
  Footer,
  HeroSection,
  Navbar,
  ShowcaseSection,
  StatsSection,
  TeamSection,
} from "./components";

function App() {
  return (
    <div className="font-sans text-white">
      <Navbar />
      <HeroSection />
      <div id="services">
        <AboutUsSection />
      </div>
      <StatsSection />
      <div id="projects">
        <ShowcaseSection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
