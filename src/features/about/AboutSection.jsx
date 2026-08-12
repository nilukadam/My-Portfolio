import { motion } from "framer-motion";
import { fade, stagger } from "../../components/motion";

/*
  AboutSection — Final B1 Version

  Positioning:
  - Frontend Developer remains the primary identity
  - React and JavaScript are clearly represented
  - Emphasis stays on maintainable, responsive interfaces
  - Content remains grounded and avoids exaggerated claims
*/

const AboutSection = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl space-y-8">

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
              I’m a frontend developer focused on building responsive,
              component-based web applications with React and JavaScript. I
              care about creating interfaces that are clear, usable, and
              maintainable rather than adding complexity for its own sake.
            </motion.p>

            <motion.p variants={fade}>
              My approach is centered on reusable components, clean structure,
              thoughtful UI states, and reliable user interactions. I enjoy
              turning product requirements and designs into interfaces that
              work consistently across different screen sizes.
            </motion.p>

            <motion.p variants={fade}>
              Alongside frontend development, I have hands-on experience
              working with Node.js, Express, MongoDB, and REST APIs through
              full-stack projects. My primary focus, however, remains
              frontend development and creating dependable user experiences.
            </motion.p>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;