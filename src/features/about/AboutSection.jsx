import { motion } from "framer-motion";
import { fade, stagger } from "../../components/motion";

/*
  AboutSection
  Purpose:
  - Communicate thinking style and approach
  - Build recruiter trust
  - Stay calm, clear, and professional
*/


const AboutSection = () => {      
  return (
    <section
    id="about"
      className="py-24 border-t border-white/10 min-h-[80vh] flex items-center"
      aria-labelledby="about-heading"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl max-auto px-6"
      >
        {/* Section Heading */}
        <motion.h2
          variants={fade}
          id="about-heading"
          className="text-3xl font-semibold text-white mb-6"
        >
          About
        </motion.h2>

        {/* Paragraph 1 */}
        <motion.p
          variants={fade}
          className="text-gray-400 leading-loose mb-4"
        >
          I approach frontend development as a problem-solving discipline,
          not just a visual one. My focus is on understanding the intent behind
          a feature, the users who will interact with it, and the long-term
          maintainability of the code that supports it.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          variants={fade}
          className="text-gray-400 leading-loose mb-4"
        >
          I prefer building systems that are clear, predictable, and scalable.
          This means choosing simplicity over cleverness, writing readable
          components, and designing interfaces that communicate without
          unnecessary decoration.
        </motion.p>

        {/* Paragraph 3 */}
        <motion.p
          variants={fade}
          className="text-gray-400 leading-loose"
        >
          My goal is to create interfaces that feel stable and intentional —
          products that teams can confidently extend and users can intuitively
          trust.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
