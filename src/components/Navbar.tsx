export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-[#D4AF37]/10 bg-black/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.8)]" />

          <h1 className="text-sm font-semibold tracking-[0.35em] uppercase text-[#D4AF37]">
            Eryxion
          </h1>
        </div>

        <nav className="hidden items-center gap-8 text-[13px] text-white/60 lg:flex">
          <a href="#services" className="transition hover:text-[#D4AF37]">
            Services
          </a>

          <a href="#story" className="transition hover:text-[#D4AF37]">
            Story
          </a>

          <a href="#portfolio" className="transition hover:text-[#D4AF37]">
            Portfolio
          </a>

          <a href="#contact" className="transition hover:text-[#D4AF37]">
            Contact
          </a>
        </nav>

        <button className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-5 py-2 text-xs font-medium text-[#D4AF37] transition hover:bg-[#D4AF37]/20">
          Book a Call
        </button>
      </div>
    </header>
  );
};