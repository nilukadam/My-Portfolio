import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" }
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0
      }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 
     bg-white/95 backdrop-blur-md 
     border-b border-gray-200/60">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <button
          onClick={() => handleNavClick("home")}
          className="text-lg font-semibold tracking-tight text-gray-900"
        >
          NK <span className="text-gray-400 font-normal">| Frontend</span>
        </button>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => handleNavClick(id)}
                className={`relative px-1 py-2 transition-colors
                  ${
                    activeSection === id
                      ? "text-gray-900 font-medium"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
              >
                {label}
                {activeSection === id && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gray-900 rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
