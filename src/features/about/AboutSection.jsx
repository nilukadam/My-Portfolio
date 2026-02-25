import { motion } from "framer-motion";
import { fade, stagger } from "../../components/motion";

/*
  AboutSection — Final Production Rhythm Version

  - Section spacing aligned with global system
  - Typography contrast improved
  - Controlled vertical hierarchy
*/

const AboutSection = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24" // aligned with Hero & Projects
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl space-y-8"> {/* tightened from 10 → 8 */}

          {/* Section Heading */}
          <motion.h2
            variants={fade}
            id="about-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            About
          </motion.h2>

          {/* About Content */}
          <div className="space-y-6 text-white/75 leading-relaxed">
            <motion.p variants={fade}>
              I approach frontend development as a problem-solving discipline,
              not just a visual one. My focus is on understanding the intent behind
              a feature, the users who will interact with it, and the long-term
              maintainability of the code that supports it.
            </motion.p>

            <motion.p variants={fade}>
              I prefer building systems that are clear, predictable, and scalable.
              This means choosing simplicity over cleverness, writing readable
              components, and designing interfaces that communicate without
              unnecessary decoration.
            </motion.p>

            <motion.p variants={fade}>
              My goal is to create interfaces that feel stable and intentional —
              products that teams can confidently extend and users can intuitively
              trust.
            </motion.p>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;