import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer
} from "../../motion/presets";

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
      className="min-h-[80vh] flex items-center"
      aria-labelledby="hero-heading"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="max-w-3xl"
      >
        {/* Status Indicator */}
        <motion.span
          variants={fadeUp}
          className="inline-block mb-4 text-sm font-medium text-emerald-600"
        >
          ● Open to work · Freelance available
        </motion.span>

        {/* Main Headline */}
        <motion.h1
          id="hero-heading"
          variants={fadeUp}
          className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900"
        >
          Building scalable, high-quality web experiences
        </motion.h1>

        {/* Supporting Subheading */}
        <motion.h2
          variants={fadeUp}
          className="mt-5 text-lg text-gray-600 leading-relaxed"
        >
          Frontend developer focused on clean UI, performance,
          and maintainable React architecture.
        </motion.h2>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap gap-4"
        >
          <button
            className="px-6 py-3 text-sm font-medium rounded-md
                       bg-gray-900 text-white hover:bg-gray-800
                       transition"
          >
            View Work
          </button>

          <button
            className="px-6 py-3 text-sm font-medium rounded-md
                       border border-gray-300 text-gray-700
                       hover:border-gray-400 transition"
          >
            Download Resume
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
