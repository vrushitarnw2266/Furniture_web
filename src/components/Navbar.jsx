import { Menu, X, Hammer } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleLogoClick = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-[#05070a]/60 text-white backdrop-blur-2xl border-b border-white/10 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-8 lg:px-12">
        {/* Logo */}
        <div
          onClick={handleLogoClick}
          className="flex items-center gap-4 cursor-pointer select-none group"
        >
          <div className="relative h-11 w-11 flex items-center justify-center bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl shadow-[0_0_20px_rgba(251,191,36,0.2)] group-hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] transition-all duration-500 transform group-hover:-rotate-6">
            <Hammer className="text-black h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-black tracking-tighter text-white group-hover:text-amber-400 transition-colors duration-300">
              AMIT PANCHAL
            </h1>
            <span className="text-[9px] uppercase tracking-[0.3em] text-amber-400/80 font-bold -mt-0.5">Architectural Carpentry</span>
          </div>
        </div>

        {/* Desktop Menu - Reordered: Home, About, Service, Contact */}
        <div className="hidden md:flex gap-8">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-base font-medium hover:text-amber-400 transition-colors duration-300 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors duration-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-md text-center pb-6 space-y-1 border-t border-slate-800 animate-fadeIn">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-3 px-6 hover:bg-slate-800 hover:text-amber-400 transition-all duration-300 text-base font-medium"
              onClick={handleNavClick}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
