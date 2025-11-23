// src/App.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SkillsGrid from "./components/SkillsGrid";
import Projects from "./components/Projects";
import GamingShowcase from "./components/GamingShowcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import resumeData from "./data/resumeData";

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero profile={resumeData.profile} />

        <Section id="about" title="About Me">
          <p className="body-text">
            I’m Aditya, a{" "}
            <strong>Project Engineer & Team Lead at Wipro Technologies</strong>{" "}
            with hands-on experience in{" "}
            <strong>
              full-stack development, identity & access management, Microsoft
              365, and cloud
            </strong>
            . I enjoy designing reliable systems, leading high-impact
            initiatives, and solving complex problems under pressure.
            <br />
            <br />
            Outside work, you’ll usually find me immersed in story-driven and
            competitive games like <em>Ghost of Tsushima</em> and{" "}
            <em>Assassin’s Creed</em>, which sharpen my reflexes and strategic
            thinking.
          </p>
        </Section>

        <Section id="experience" title="Experience">
          <ExperienceTimeline experience={resumeData.experience} />
        </Section>

        <Section id="skills" title="Skills">
          <SkillsGrid skills={resumeData.skills} />
        </Section>

        <Section id="projects" title="Projects & Thesis">
          <Projects projects={resumeData.projects} />
        </Section>

        <Section id="gaming" title="Gaming Corner 🎮">
          <GamingShowcase />
        </Section>

        <Section id="contact" title="Contact">
          <Contact profile={resumeData.profile} />
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
