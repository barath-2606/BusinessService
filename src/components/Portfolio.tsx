export const Portfolio = () => {
  const portfolio = [
    {
      title: "Luxury Real Estate Platform",
      category: "Web Development",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "AI Analytics Dashboard",
      category: "Analytics & Intelligence",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Premium Fashion Campaign",
      category: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    },
  ];
  return (
    <section id="portfolio" className="relative mx-auto max-w-7xl px-6 py-24">
      {/* Background Glow */}
      <div className="absolute right-0 top-20 -z-10 h-[320px] w-[320px] rounded-full bg-violet-500/10 blur-[120px]" />

      {/* Header */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
            Portfolio
          </p>

          <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight">
            Selected Work
            <br />& Case Studies.
          </h2>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="mt-16 grid gap-6 lg:grid-cols-12">
        {/* Large Featured Card */}
        <div className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] lg:col-span-6">
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={portfolio[0].image}
              alt={portfolio[0].title}
              className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 w-full p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
              {portfolio[0].category}
            </p>

            <h3 className="mt-4 max-w-md text-3xl font-black leading-tight">
              {portfolio[0].title}
            </h3>

            <button className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-cyan-300">
              View Case Study
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="grid gap-6 lg:col-span-6">
          {portfolio.slice(1).map((item) => (
            <div
              key={item.title}
              className="group grid overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.03] transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.05] md:grid-cols-[0.9fr_1.1fr]"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full min-h-[240px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-7">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                    {item.category}
                  </p>

                  <h3 className="mt-4 text-2xl font-black leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/45">
                    Premium execution focused on performance, scalability, and
                    long-term business growth.
                  </p>
                </div>

                <button className="mt-8 flex items-center gap-2 text-sm font-medium text-white/60 transition hover:text-cyan-300">
                  Explore Project
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
