import PageLayout from "./components/layout/PageLayout";
import AboutSection from "./features/about/AboutSection";
import HeroSection from "./features/hero/HeroSection";
import FeaturedProject from "./features/projects/FeaturedProject";
import ProjectsOverview from "./features/projects/ProjectOverview";
import ServicesSection from "./features/services/ServicesSection";
import SkillsSection from "./features/skills/SkillsSection";

function App() {
  return (
    <PageLayout>
      <HeroSection/>
      <AboutSection/>
      <SkillsSection/>
      <FeaturedProject/>
      <ProjectsOverview/>
      <ServicesSection/>
    </PageLayout>
  );
}

export default App;
