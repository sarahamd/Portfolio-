import { ArrowUp } from "lucide-react";
import AboutMe from "../Components/AboutMe";
import { ContactSection } from "../Components/ContactSection";
import { Footer } from "../Components/Footer";
import Hero from "../Components/Hero";
import { Navbar } from "../Components/Navbar";
import { SkillsSection } from "../Components/SkillsSection";
import { StarBackground } from "../Components/StarBackground";
import { ThemeToggle } from "../Components/ThemeToggle";
import { Projects } from "../Components/Projects";

export const Home = () => {
  return (
    <div className="min-h-screenn bg-background text-foreground overflow-x ">
      {/* // theme toggle */}
      <ThemeToggle />
      {/* // background effects */}
      <StarBackground />
      {/* // navbar */}
      <Navbar />
      {/* // maincontent */}
      <main>
        <Hero />
        <AboutMe />
        <SkillsSection />
        <Projects />
        <ContactSection />
      </main>
      <footer>
        <Footer />
      </footer>
      {/* // footer */}
    </div>
  );
};
