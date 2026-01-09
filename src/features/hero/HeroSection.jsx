import { motion, useReducedMotion } from "framer-motion";
import { fade, stagger } from "../../components/motion";
import { Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();

const handleEmailClick = () => {
  navigator.clipboard.writeText("kadamnilu12@gmail.com");
  window.location.href = "mailto:kadamnilu12@gmail.com";
};

  return (
    <section
      id="home"
      className="min-h-[80vh] pt-28 flex items-center bg-black text-white"
      aria-labelledby="hero-heading"
    >
      <motion.div
        variants={stagger}
        initial={false}
        animate="show"
        className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center px-6"
      >
        {/* LEFT — IDENTITY & MESSAGE */}
        <div>
          {/* Name */}
          <motion.h1
            id="hero-heading"
            variants={fade}
            className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4"
          >
            I’m Nilu Kadam
          </motion.h1>

          {/* What you do */}
          <motion.p
            variants={fade}
            className="text-lg text-gray-300 max-w-xl mb-5"
          >
            I build clean, production-ready web applications with React and
            scalable backend architecture.
          </motion.p>

          {/* Availability */}
          <motion.div
            variants={fade}
            animate={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: [0.65, 1, 0.65] }
            }
            transition={
              prefersReducedMotion
                ? {}
                : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
            }
            className="inline-flex items-center mb-7 text-xs font-medium text-emerald-400"
          >
            <span className="w-2 h-2 mr-2 rounded-full bg-emerald-400" />
            Open for work · Freelancing ready
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fade} className="flex gap-4">
            <a
              href="#projects"
              aria-label="View projects"
              className="px-6 py-3 rounded-md bg-white text-black text-sm font-medium hover:bg-gray-200 transition"
            >
              View Work
            </a>

            <button
              disabled
              aria-label="Resume coming soon"
              title="Resume will be added soon"
              className="px-6 py-3 rounded-md border border-gray-600 text-sm text-gray-400 cursor-not-allowed"
            >
              Resume (Coming Soon)
            </button>
          </motion.div>
        </div>

        {/* RIGHT — PHOTO & CONNECTION */}
        <motion.div
          variants={fade}
          className="flex flex-col items-center md:items-end"
        >
          {/* Photo placeholder */}
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-500 text-sm mb-5">
            Photo
          </div>

          {/* Contact / Connect */}
          <div className="flex gap-6 text-gray-400">
            {/* Email */}
            <div className="relative group flex flex-col items-center">
              <button
                onClick={handleEmailClick}
                aria-label="Copy email address"
                className="transition-transform hover:scale-110 hover:text-white text-gray-400"
              >
                <Mail size={22} />
              </button>

              <span className="mt-1 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">
                Click to copy
              </span>
            </div>

            {/* GitHub */}
          <div className="relative group flex flex-col items-center">
           <a
             href="https://github.com/nilukadam"
             target="_blank"
             rel="noopener noreferrer"
             aria-label="GitHub"
              className="transition-transform hover:scale-110 hover:text-white"
            >
             <Github size={22} />
           </a>
           <span className="mt-1 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">
             GitHub
           </span>
          </div>

         {/* LinkedIn */}
         <div className="relative group flex flex-col items-center">
           <a
              href="https://linkedin.com/in/NiluKadam12"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-transform hover:scale-110 hover:text-white"
            >
              <Linkedin size={22} />
            </a>
            <span className="mt-1 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition">
              LinkedIn
           </span>
          </div>
         </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
