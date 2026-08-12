import { motion } from "framer-motion";
import { fade, stagger } from "../../components/motion";
import { Github, Linkedin, Mail } from "lucide-react";
import resumePDF from "../../assets/images/MyResume.pdf";
import profileImage from "../../assets/images/myPic.png";

/*
  HeroSection — B3 Trust & Conversation Version

  Purpose:
  - Establish immediate professional identity
  - Communicate a credible frontend focus
  - Show current availability clearly
  - Provide direct access to work and resume
  - Provide trusted professional contact channels
*/

const HeroSection = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-24 text-white"
      aria-labelledby="hero-heading"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="
          max-w-6xl mx-auto
          px-4 sm:px-6 lg:px-8
          grid grid-cols-1 lg:grid-cols-2
          gap-12 lg:gap-16
          items-center
        "
      >
        {/* LEFT — MESSAGE */}
        <div className="space-y-8">

          {/* Headline */}
          <motion.h1
            id="hero-heading"
            variants={fade}
            className="
              text-3xl sm:text-4xl lg:text-6xl
              font-bold tracking-tight
              leading-[1.08]
              max-w-3xl
            "
          >
            I Build Clean, Reliable Frontend Experiences.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fade}
            className="
              text-white/75
              text-lg sm:text-xl
              leading-relaxed
              max-w-2xl
            "
          >
            I’m Nilu Kadam — a React-focused frontend developer
            building structured, production-ready web applications
            with clear interfaces, reusable components, and reliable
            user experiences.
          </motion.p>

          {/* Availability */}
          <motion.div
            variants={fade}
            className="
              inline-flex items-center
              text-sm font-medium
              text-emerald-400
            "
          >
            <span
              aria-hidden="true"
              className="w-2 h-2 mr-2 rounded-full bg-emerald-400"
            />

            Open to frontend roles and freelance opportunities
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
                px-6 py-3
                rounded-xl
                bg-white
                text-black
                text-sm font-medium
                transition-all duration-200
                hover:bg-white/90
                active:scale-[0.98]
              "
            >
              View Work
            </a>

            {/* Resume CTA */}
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3
                rounded-xl
                border border-white/20
                text-sm font-medium
                transition-all duration-200
                hover:border-white/40
                hover:bg-white/5
                active:scale-[0.98]
              "
            >
              View Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT — PHOTO + SOCIAL */}
        <motion.div
          variants={fade}
          className="flex flex-col items-center lg:items-end"
        >
          <div
            className="
              w-56 sm:w-64 lg:w-72
              mx-auto lg:mx-0
              space-y-6
            "
          >
            {/* Profile Photo */}
            <div
              className="
                rounded-2xl
                overflow-hidden
                border border-white/10
                shadow-lg shadow-black/30
                transition-shadow duration-300
              "
            >
              <img
                src={profileImage}
                alt="Nilu Kadam profile photo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Social Icons */}
            <div
              className="
                flex justify-center
                gap-6
                text-white/70
                pt-2
              "
            >
              {/* Email */}
              <div className="relative group">
                <a
                  href="mailto:kadamnilu12@gmail.com?subject=Frontend%20Opportunity"
                  aria-label="Email Nilu Kadam"
                  className="
                    hover:text-white
                    transition-colors duration-200
                  "
                >
                  <Mail size={26} />
                </a>

                <span
                  aria-hidden="true"
                  className="
                    absolute -top-8 left-1/2
                    -translate-x-1/2
                    text-xs px-2 py-1
                    rounded-md
                    bg-white text-black
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-200
                    pointer-events-none
                  "
                >
                  Email
                </span>
              </div>

              {/* GitHub */}
              <div className="relative group">
                <a
                  href="https://github.com/nilukadam"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="
                    hover:text-white
                    transition-colors duration-200
                  "
                >
                  <Github size={26} />
                </a>

                <span
                  aria-hidden="true"
                  className="
                    absolute -top-8 left-1/2
                    -translate-x-1/2
                    text-xs px-2 py-1
                    rounded-md
                    bg-white text-black
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-200
                    pointer-events-none
                  "
                >
                  GitHub
                </span>
              </div>

              {/* LinkedIn */}
              <div className="relative group">
                <a
                  href="https://www.linkedin.com/in/nilu12/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="
                    hover:text-white
                    transition-colors duration-200
                  "
                >
                  <Linkedin size={26} />
                </a>

                <span
                  aria-hidden="true"
                  className="
                    absolute -top-8 left-1/2
                    -translate-x-1/2
                    text-xs px-2 py-1
                    rounded-md
                    bg-white text-black
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-200
                    pointer-events-none
                  "
                >
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