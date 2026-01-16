// src/sections/services/ServicesSection.jsx

import { services } from "./services.data";
import { motion } from "framer-motion";

/*
  ServicesSection

  Purpose:
  - Explain how I help teams through frontend expertise
  - Focus on problems and approach, not selling
  - Maintain a calm, professional, frontend-first tone

  Phase:
  - Phase 7.5C (Micro-polish only)

  Notes:
  - No new services added
  - No content rewritten
  - Only spacing, typography, and visual rhythm refined
*/

const ServicesSection = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-24 border-t border-white/10 min-h-[80vh] flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <h2
            id="services-heading"
            className="text-3xl font-semibold text-white mb-4"
          >
            How I can help
          </h2>
          <p className="text-gray-400 leading-relaxed">
            I work with founders, teams, and individuals who care about building
            clean, reliable, and thoughtful frontend products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 border border-white/10 rounded-lg"
            >
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  <span className="text-gray-300 font-medium">Problem:</span>{" "}
                  {service.problem}
                </p>

                <p className="text-gray-400 text-sm leading-relaxed">
                  <span className="text-gray-300 font-medium">Approach:</span>{" "}
                  {service.approach}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Line */}
        <div className="mt-16">
          <p className="text-gray-400">
            If you think my approach fits what you're building, we can talk.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
