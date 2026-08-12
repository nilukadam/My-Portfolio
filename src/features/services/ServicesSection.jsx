import { motion } from "framer-motion";
import { services } from "./services.data";

/*
  ServicesSection — Final Production Version

  Positioning:
  - Frontend development remains the primary offering
  - Services are focused on realistic junior/freelance capabilities
  - Messaging avoids exaggerated senior-level claims
*/

const ServicesSection = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            How I can help
          </h2>

          <p className="text-white/75 leading-relaxed mt-4">
            I work with founders, teams, and individuals who care about
            building clean, reliable, and thoughtful frontend products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              className="
                rounded-2xl
                border border-white/10
                bg-[#141414]
                p-6
                transition-colors duration-200
                hover:border-white/20
              "
            >
              <div className="space-y-4">

                <h3 className="text-lg font-semibold">
                  {service.title}
                </h3>

                <p className="text-white/75 text-sm leading-relaxed">
                  <span className="text-white/90 font-medium">
                    Problem:
                  </span>{" "}
                  {service.problem}
                </p>

                <p className="text-white/75 text-sm leading-relaxed">
                  <span className="text-white/90 font-medium">
                    Approach:
                  </span>{" "}
                  {service.approach}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Line */}
        <div className="mt-16 max-w-3xl">
          <p className="text-white/75 leading-relaxed">
            If you think my approach fits what you're building, we can talk.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;