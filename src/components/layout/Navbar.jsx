import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

/* ----------------------------------------
   Navigation Configuration
----------------------------------------- */
const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

/*
  The navbar uses Tailwind's h-16 utility,
  which equals 64px.
*/
const NAVBAR_HEIGHT = 64;

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const pendingSectionRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  /* ----------------------------------------
     Section Observer (Homepage Only)
  ----------------------------------------- */
  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  /* ----------------------------------------
     Smooth Scroll Utility
  ----------------------------------------- */
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) {
      return;
    }

    const y =
      section.getBoundingClientRect().top +
      window.scrollY -
      NAVBAR_HEIGHT;

    window.scrollTo({
      top: Math.max(0, y),
      behavior: "smooth",
    });
  };

  /* ----------------------------------------
     Complete Pending Route Navigation
  ----------------------------------------- */
  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const pendingSection = pendingSectionRef.current;

    if (!pendingSection) {
      return;
    }

    const section = document.getElementById(pendingSection);

    if (!section) {
      return;
    }

    scrollToSection(pendingSection);
    pendingSectionRef.current = null;
  }, [location.pathname]);

  /* ----------------------------------------
     Hybrid Navigation
     Route + Scroll
  ----------------------------------------- */
  const handleNavClick = (id) => {
    setIsOpen(false);

    if (location.pathname !== "/") {
      pendingSectionRef.current = id;
      navigate("/");
      return;
    }

    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-white/10">
      {/* Main Nav Container */}
      <nav
        className="
          max-w-6xl mx-auto
          px-4 sm:px-6 lg:px-8
          h-16
          flex items-center justify-between
        "
      >
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("home")}
          className="text-lg font-semibold tracking-tight text-white"
          aria-label="Go to homepage"
        >
          NK{" "}
          <span className="text-white/50 font-normal">
            | Frontend
          </span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => handleNavClick(id)}
                className={`relative px-1 py-2 transition-colors duration-200 ${
                  activeSection === id && location.pathname === "/"
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {label}

                {/* Active Underline */}
                {activeSection === id &&
                  location.pathname === "/" && (
                    <span
                      aria-hidden="true"
                      className="
                        absolute left-0 -bottom-1
                        w-full h-[2px]
                        bg-white rounded-full
                      "
                    />
                  )}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="
            md:hidden
            text-white/70
            hover:text-white
            transition-colors
          "
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={
            isOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide Panel */}
      <div
        id="mobile-navigation"
        className={`
          fixed top-0 right-0 z-[60]
          w-72 h-screen
          bg-[#111111]
          shadow-2xl
          border-l border-white/10
          transform
          transition-transform duration-300 ease-out
          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
          <span className="text-white font-medium tracking-wide">
            Menu
          </span>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="
              text-white/60
              hover:text-white
              transition-colors
            "
            aria-label="Close navigation menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col px-8 py-8 space-y-6 text-base">
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => handleNavClick(id)}
                className="
                  w-full
                  text-left
                  font-medium
                  tracking-wide
                  text-white/60
                  hover:text-white
                  transition-colors
                "
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;