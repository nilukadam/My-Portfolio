import { motion } from "framer-motion";
import { fade, stagger } from "../../components/motion";

/*
  AboutSection — B3 Trust & Conversation Version

  Purpose:
  - Establish professional credibility
  - Explain frontend focus and working approach
  - Connect technical experience with real project work
  - Keep full-stack experience secondary but credible
  - Create a natural bridge toward professional conversation
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
              turning product requirements into interfaces that work
              consistently across different screen sizes and feel predictable
              for the people using them.
            </motion.p>

            <motion.p variants={fade}>
              My project work includes frontend systems such as the Structured
              Q&A Platform, along with full-stack applications such as
              BookNest, where I’ve worked with Node.js, Express, MongoDB, REST
              APIs, and authentication. While I have hands-on full-stack
              experience, my primary professional focus remains frontend
              development.
            </motion.p>

            <motion.p variants={fade}>
              I’m currently open to frontend developer opportunities and
              collaborations where I can contribute, keep improving, and build
              dependable products with a team.
            </motion.p>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;