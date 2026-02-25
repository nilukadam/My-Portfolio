import { motion, useReducedMotion } from "framer-motion";
import { fade, stagger } from "../../components/motion";
import { Github, Linkedin, Mail } from "lucide-react";
import resumePDF from "../../assets/images/MyResume.pdf";
import profileImage from "../../assets/images/myPic.png";

const HeroSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="pt-24 pb-24 text-white" // tightened vertical rhythm
      aria-labelledby="hero-heading"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 
                   grid grid-cols-1 lg:grid-cols-2 
                   gap-12 lg:gap-16 items-center" // balanced grid spacing
      >
        {/* LEFT — MESSAGE */}
        <div className="space-y-8">

          {/* Headline */}
          <motion.h1
            id="hero-heading"
            variants={fade}
            className="text-3xl sm:text-4xl lg:text-6xl 
                       font-bold tracking-tight 
                       leading-[1.08] max-w-3xl" 
            // stronger weight + better reading width
          >
            I Engineer Clean, Scalable Frontend Experiences.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fade}
            className="text-white/75 text-lg sm:text-xl 
                       leading-relaxed max-w-2xl"
          >
            I’m Nilu Kadam — a React & Tailwind focused frontend developer
            building structured, production-ready web applications with clarity,
            performance, and maintainability in mind.
          </motion.p>

          {/* Availability Badge */}
          <motion.div
            variants={fade}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1 }}
            className="inline-flex items-center text-sm font-medium text-emerald-400"
          >
            <span
              aria-hidden="true"
              className="w-2 h-2 mr-2 rounded-full bg-emerald-400"
            />
            Open for work · Freelancing ready
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fade}
            className="flex flex-wrap gap-4 pt-2"
          >
            {/* Primary CTA */}
            <a
              href="#projects"
              className="
                px-6 py-3 rounded-xl bg-white
                text-black text-sm font-medium
                transition-all duration-200
                hover:bg-white/90
                active:scale-[0.98]
              "
            >
              View Work
            </a>

            {/* Secondary CTA */}
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3 rounded-xl
                border border-white/20 text-sm font-medium
                transition-all duration-200
                hover:border-white/40 hover:bg-white/5
                active:scale-[0.98]
              "
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT — PHOTO + SOCIAL */}
        <motion.div
          variants={fade}
          className="flex flex-col items-center lg:items-end"
        >
          <div className="w-56 sm:w-64 lg:w-72 mx-auto lg:mx-0 space-y-6">

            {/* Profile Photo */}
            <div className="rounded-2xl overflow-hidden 
                            border border-white/10 
                            shadow-lg shadow-black/30 
                            transition-shadow duration-300">
              <img
                src={profileImage}
                alt="Nilu Kadam profile photo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 text-white/70 pt-2">

              {/* Email */}
              <div className="relative group">
                <a
                  href="mailto:kadamnilu12@gmail.com?subject=Frontend%20Opportunity"
                  aria-label="Email"
                  className="hover:text-white transition-colors duration-200"
                >
                  <Mail size={26} />
                </a>
                <span className="
                  absolute -top-8 left-1/2 -translate-x-1/2
                  text-xs px-2 py-1 rounded-md
                  bg-white text-black
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-200
                  pointer-events-none
                ">
                  Email
                </span>
              </div>

              {/* GitHub */}
              <div className="relative group">
                <a
                  href="https://github.com/nilukadam"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-white transition-colors duration-200"
                >
                  <Github size={26} />
                </a>
                <span className="
                  absolute -top-8 left-1/2 -translate-x-1/2
                  text-xs px-2 py-1 rounded-md
                  bg-white text-black
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-200
                  pointer-events-none
                ">
                  GitHub
                </span>
              </div>

              {/* LinkedIn */}
              <div className="relative group">
                <a
                  href="https://linkedin.com/in/NiluKadam12"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-white transition-colors duration-200"
                >
                  <Linkedin size={26} />
                </a>
                <span className="
                  absolute -top-8 left-1/2 -translate-x-1/2
                  text-xs px-2 py-1 rounded-md
                  bg-white text-black
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-200
                  pointer-events-none
                ">
                  LinkedIn
                </span>
              </div>

            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default HeroSection;