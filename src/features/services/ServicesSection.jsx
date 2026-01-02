// src/sections/services/ServicesSection.jsx

import { services } from "./services.data";
import { motion } from "framer-motion";

/*
  ServicesSection
  Purpose:
  - Clearly explain how I help clients and teams
  - Focus on problems + approach (not selling)
*/

const ServicesSection = () => {
  return (
    <section
    id="services"
      className="py-20 border-t border-gray-200 min-h-[80vh] flex items-center"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="max-w-2xl mb-14">
          <h2
            id="services-heading"
            className="text-3xl font-semibold text-gray-900 mb-4"
          >
            How I can help
          </h2>
          <p className="text-gray-600 leading-relaxed">
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
              className="p-6 border border-gray-200 rounded-lg"
            >
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-700 mb-3">
                <span className="font-medium">Problem:</span>{" "}
                {service.problem}
              </p>

              <p className="text-gray-700">
                <span className="font-medium">Approach:</span>{" "}
                {service.approach}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <p className="text-gray-700 mb-4">
            If you think my approach fits what you're building, we can talk.
          </p>
          <a
            href="#contact"
            className="inline-block text-emerald-600 font-medium hover:underline"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
