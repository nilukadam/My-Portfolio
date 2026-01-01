/*
  ContactSection
  Purpose:
  - Give recruiters & clients a clean way to reach out
  - No sales language, no pressure
  - Simple, accessible, professional
*/

const ContactSection = () => {
    return (
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="py-24 border-t border-gray-200"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2
            id="contact-heading"
            className="text-3xl font-semibold text-gray-900 mb-4"
          >
            Get in touch
          </h2>
  
          <p className="text-gray-600 mb-10">
            If you’d like to discuss a project, role, or collaboration,
            feel free to leave a message. I’ll get back to you.
          </p>
  
          <form className="space-y-6" noValidate>
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-md border border-gray-300 px-4 py-2
                           focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="Your name"
              />
            </div>
  
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-md border border-gray-300 px-4 py-2
                           focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="you@example.com"
              />
            </div>
  
            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full rounded-md border border-gray-300 px-4 py-2
                           focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="Briefly describe what you’d like to discuss"
              />
            </div>
  
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-gray-900
                         px-6 py-2 text-white text-sm font-medium
                         hover:bg-gray-800 transition-colors"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  