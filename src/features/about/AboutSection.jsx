import { motion } from "framer-motion";
import { fade, stagger } from "../../components/motion";

/*
  AboutSection

  Purpose:
  - Communicate thinking style and approach
  - Build recruiter trust through clarity and intent
  - Reflect a calm, professional frontend identity

  Phase:
  - Phase 7.5C (About & Services Micro-Polish)

  Notes:
  - No content rewrite
  - No new animations
  - Focused only on spacing, readability, and structure
*/

const AboutSection = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 border-t border-white/10 min-h-[80vh] flex items-center"
    >
      {/* Content Wrapper */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-6"
      >
        {/* Section Heading */}
        <motion.h2
          variants={fade}
          id="about-heading"
          className="text-3xl font-semibold text-white mb-6"
        >
          About
        </motion.h2>

        {/* About Content */}
        <div className="space-y-6">
          <motion.p
            variants={fade}
            className="text-gray-400 leading-relaxed"
          >
            I approach frontend development as a problem-solving discipline,
            not just a visual one. My focus is on understanding the intent behind
            a feature, the users who will interact with it, and the long-term
            maintainability of the code that supports it.
          </motion.p>

          <motion.p
            variants={fade}
            className="text-gray-400 leading-relaxed"
          >
            I prefer building systems that are clear, predictable, and scalable.
            This means choosing simplicity over cleverness, writing readable
            components, and designing interfaces that communicate without
            unnecessary decoration.
          </motion.p>

          <motion.p
            variants={fade}
            className="text-gray-400 leading-relaxed"
          >
            My goal is to create interfaces that feel stable and intentional —
            products that teams can confidently extend and users can intuitively
            trust.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
