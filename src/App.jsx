import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PageLayout from "./components/layout/PageLayout";
import AboutSection from "./features/about/AboutSection";
import ContactSection from "./features/contact/ContactSection";
import HeroSection from "./features/hero/HeroSection";
import StructuredQnA from "./features/projects/StructuredQnA";
import ProjectsOverview from "./features/projects/ProjectOverview";
import ServicesSection from "./features/services/ServicesSection";
import SkillsSection from "./features/skills/SkillsSection";
import BookNest from "./features/projects/BookNest";

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsOverview />
      <ServicesSection />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          {/* Home (scroll-based landing page) */}
          <Route path="/" element={<HomePage />} />

          {/* Featured Project (dedicated page) */}
          <Route
            path="/projects/structured-qna"
            element={<StructuredQnA />}
          />
          <Route
          path="/projects/booknest"
          element={<BookNest/>}
          />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
