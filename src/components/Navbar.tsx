import { useState } from "react";
import { Menu, X } from "lucide-react";
import { scheduleConsultation } from "./utils";
import logo from "../assets/EryxionLogo.jpeg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const formUrl = import.meta.env.VITE_CONFIG_FORM_URL;

  const bookACall = () => {
    scheduleConsultation(formUrl);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#D4AF37]/10 bg-black/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          {/* <div className="h-2.5 w-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.8)]" /> */}
          <img src={logo} className="h-12 w-12" alt="" />
          <h1 className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            Eryxion
          </h1>
        </div>

        <nav className="hidden items-center gap-8 text-[13px] lg:flex">
          {["Services", "About", "Portfolio", "Process", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="group relative"
            >
              <span className="text-white/60 transition-colors duration-300 group-hover:text-[#D4AF37]">
                {item}
              </span>

              <span
                className="
          absolute
          -bottom-1
          left-1/2
          h-[1.5px]
          w-0
          -translate-x-1/2
          bg-[#D4AF37]
          transition-all
          duration-300
          group-hover:w-full
        "
              />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <button
          onClick={bookACall}
          className="hidden rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-5 py-2 text-xs font-medium text-[#D4AF37] transition hover:bg-[#D4AF37]/20 lg:block"
        >
          Book a Call
        </button>

        {/* Mobile Hamburger */}
        <button
          className="text-[#D4AF37] lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-[#D4AF37]/10 bg-[#0d0d0d] lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            <a
              href="#services"
              className="py-3 text-white/70 hover:text-[#D4AF37]"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>

            <a
              href="#story"
              className="py-3 text-white/70 hover:text-[#D4AF37]"
              onClick={() => setIsOpen(false)}
            >
              Story
            </a>

            <a
              href="#portfolio"
              className="py-3 text-white/70 hover:text-[#D4AF37]"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>

            <a
              href="#contact"
              className="py-3 text-white/70 hover:text-[#D4AF37]"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                bookACall();
              }}
              className="mt-4 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-5 py-3 text-sm font-medium text-[#D4AF37]"
            >
              Book a Call
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
