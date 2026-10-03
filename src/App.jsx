import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <main>
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default App;
