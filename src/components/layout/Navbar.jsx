function Navbar() {
    return (
      <header className="w-full border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="text-lg font-semibold tracking-wide">
            MyPortfolio
          </div>
  
          {/* Nav links */}
          <nav className="hidden md:flex gap-6 text-sm text-white/70">
            <span className="cursor-pointer hover:text-white">Home</span>
            <span className="cursor-pointer hover:text-white">Projects</span>
            <span className="cursor-pointer hover:text-white">Services</span>
            <span className="cursor-pointer hover:text-white">Contact</span>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Navbar;
  