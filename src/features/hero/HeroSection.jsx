import { motion } from "framer-motion";
import { fade, stagger } from "../../components/motion";

/*
  HeroSection
  Purpose:
  - First impression for recruiters & clients
  - Clear role positioning
  - Calm, professional entry animation
*/

const HeroSection = () => {
  return (
    <section
    id="home"
      className="min-h-[80vh] flex items-center "
      aria-labelledby="hero-heading"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto px-6"
      >
        {/* Status Indicator */}
        <motion.span
          variants={fade}
          className="inline-block mb-4 text-sm font-medium text-emerald-600"
        >
          ● Open to work · Freelance available
        </motion.span>

        {/* Main Headline */}
        <motion.h1
          id="hero-heading"
          variants={fade}
          className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight"
        >
          Building scalable, high-quality web experiences
        </motion.h1>

        {/* Supporting Subheading */}
        <motion.h2
          variants={fade}
          className="mt-5 text-lg text-gray-400 leading-relaxed"
        >
          Frontend developer focused on clean UI, performance,
          and maintainable React architecture.
        </motion.h2>

        {/* CTA Buttons */}
        <motion.div
          variants={fade}
          className="mt-10 flex flex-wrap gap-4"
        >
          <button
            className="
              px-6 py-3 text-sm font-medium rounded-md
              bg-white text-black 
              hover:bg-gray-300
              transition-colors duration-200
              "
          >
            View Work
          </button>

          <button
            className="
              px-6 py-3 text-sm font-medium rounded-md
              border border-gray-500 text-gray-200
              hover:border-white hover-text-white
              hover:bg-white/5
              transition-colors duration-200
              "
          >
            Download Resume
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
 