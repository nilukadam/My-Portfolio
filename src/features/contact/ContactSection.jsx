/*
  ContactSection — Final Production Version

  Purpose:
  - Provide a clear recruiter/client contact path
  - Keep the implementation lightweight and dependency-free
  - Use the visitor's default email client for message delivery
  - Preserve the existing visual system
*/

const CONTACT_EMAIL = "kadamnilu12@gmail.com";

const ContactSection = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
      return;
    }

    const subject = `Portfolio Contact — ${name}`;

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const mailtoUrl =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            Get in touch
          </h2>

          <p className="text-white/75 mt-4 leading-relaxed">
            If you’d like to discuss a project, role, or collaboration,
            feel free to leave a message. I’ll get back to you.
          </p>
        </div>

        {/* Contact Form */}
        <form
          className="max-w-3xl space-y-6"
          onSubmit={handleSubmit}
        >

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
              name="name"
              type="text"
              required
              autoComplete="name"
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
              name="email"
              type="email"
              required
              autoComplete="email"
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
              name="message"
              rows="5"
              required
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

          {/* Submit */}
          <button
            type="submit"
            className="
              inline-flex items-center rounded-xl
              bg-white text-black
              px-6 py-3
              text-sm font-medium
              transition-all duration-200
              hover:bg-white/90
              active:scale-[0.98]
            "
          >
            Send message
          </button>

        </form>

        {/* Direct Email Fallback */}
        <p className="max-w-3xl mt-6 text-sm text-white/50">
          Prefer email?{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-white/70 hover:text-white transition-colors duration-200"
          >
            Contact me directly
          </a>
        </p>

      </div>
    </section>
  );
};

export default ContactSection;