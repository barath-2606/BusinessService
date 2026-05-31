export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050816]/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />

          <h1 className="text-sm font-semibold tracking-[0.35em] uppercase">
            Eryxion
          </h1>
        </div>

        <nav className="hidden items-center gap-8 text-[13px] text-white/45 lg:flex">
          <a href="#services" className="transition hover:text-white">
            Services
          </a>

          <a href="#story" className="transition hover:text-white">
            Story
          </a>

          <a href="#portfolio" className="transition hover:text-white">
            Portfolio
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>

        <button className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-xs font-medium transition hover:bg-white/[0.08]">
          Book a Call
        </button>
      </div>
    </header>
  );
};
