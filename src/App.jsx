import PageLayout from "./components/layout/PageLayout";
import AboutSection from "./features/about/AboutSection";
import HeroSection from "./features/hero/HeroSection";

function App() {
  return (
    <PageLayout>
      <HeroSection/>
      <AboutSection/>
    </PageLayout>
  );
}

export default App;
