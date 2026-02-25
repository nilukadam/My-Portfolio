import Navbar from "./Navbar";
import Footer from "./Footer";

/*
  PageLayout — Final Production Version

  - Stable vertical structure
  - Clean background consistency
  - No layout shift risk
  - Controlled content width behavior
*/

function PageLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f0f] text-white antialiased">
      <Navbar />

      {/* Main content area */}
      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default PageLayout;