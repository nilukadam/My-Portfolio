/*
  ContactSection — Step 2 Visual Depth Upgrade

  Goals:
  - Align with dark theme system
  - Remove forced height & divider
  - Improve input contrast
  - Maintain clean, professional tone
*/

const ContactSection = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-28"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mb-16">
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            Get in touch
          </h2>

          <p className="text-white/70 mt-4 leading-relaxed">
            If you’d like to discuss a project, role, or collaboration,
            feel free to leave a message. I’ll get back to you.
          </p>
        </div>

        <form className="max-w-3xl space-y-8" noValidate>

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className="
                w-full rounded-xl
                border border-white/10
                bg-[#141414]
                px-4 py-3
                text-white
                placeholder:text-white/40
                focus:outline-none
                focus:ring-2 focus:ring-white/20
              "
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="
                w-full rounded-xl
                border border-white/10
                bg-[#141414]
                px-4 py-3
                text-white
                placeholder:text-white/40
                focus:outline-none
                focus:ring-2 focus:ring-white/20
              "
              placeholder="you@example.com"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white/80 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="
                w-full rounded-xl
                border border-white/10
                bg-[#141414]
                px-4 py-3
                text-white
                placeholder:text-white/40
                focus:outline-none
                focus:ring-2 focus:ring-white/20
              "
              placeholder="Briefly describe what you’d like to discuss"
            />
          </div>

          <button
            type="submit"
            className="
              inline-flex items-center rounded-xl
              bg-white text-black
              px-6 py-3 text-sm font-medium
              transition-all duration-200
              hover:bg-white/90
              hover:scale-[1.02]
              active:scale-[0.98]
            "
          >
            Send message
          </button>

        </form>
      </div>
    </section>
  );
};

export default ContactSection;