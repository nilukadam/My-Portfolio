import Navbar from "./Navbar";
import Footer from "./Footer";

function PageLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div> 
  );
}

export default PageLayout;
 