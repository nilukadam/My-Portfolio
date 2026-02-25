function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* Left Side */}
          <div className="space-y-2 max-w-md">
            <p className="text-white/85 font-medium">
              Structured frontend systems. Built with clarity and intent.
            </p>
            <p className="text-white/65 text-sm">
              Open to frontend roles and product-focused collaborations.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-start md:items-end space-y-3 text-sm">
            <div className="flex gap-6 text-white/65">
              <a
                href="https://github.com/nilukadam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/NiluKadam12"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>

              <a
                href="mailto:kadamnilu12@gmail.com"
                className="hover:text-white transition-colors duration-200"
              >
                Email
              </a>
            </div>

            <p className="text-white/50">
              © {new Date().getFullYear()} Nilu Kadam
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;