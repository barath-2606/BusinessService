export const Insights = () => {
  const insights = [
    {
      title: "How Intelligent Automation Multiplies Operational Efficiency",
      category: "Automation",
    },
    {
      title: "Building a Premium Digital Presence That Commands Authority",
      category: "Digital Strategy",
    },
    {
      title: "The KPI Architecture Behind Scalable Business Growth",
      category: "Analytics",
    },
  ];
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      {/* Glow */}
      <div className="absolute left-0 top-20 -z-10 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Header */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
            Insights
          </p>

          <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight">
            Intelligence
            <br />& Perspectives.
          </h2>

          <p className="mt-6 max-w-2xl text-[15px] leading-8 text-white/45">
            Strategic frameworks, digital intelligence, and actionable insights
            for businesses navigating modern growth.
          </p>
        </div>

        <button className="w-fit rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/75 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.06] hover:text-white">
          View All Articles
        </button>
      </div>

      {/* Articles */}
      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {insights.map((item, index) => (
          <div
            key={item.title}
            className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.05]"
          >
            {/* Hover Glow */}
            <div className="absolute right-0 top-0 h-32 w-32 bg-cyan-500/0 blur-3xl transition duration-500 group-hover:bg-cyan-500/10" />

            {/* Number */}
            <div className="absolute right-6 top-6 text-5xl font-black text-white/[0.04]">
              0{index + 1}
            </div>

            {/* Category */}
            <p className="relative z-10 text-xs uppercase tracking-[0.35em] text-cyan-300">
              {item.category}
            </p>

            {/* Title */}
            <h3 className="relative z-10 mt-6 text-[26px] font-black leading-[1.25] tracking-tight text-white transition duration-300 group-hover:text-cyan-100">
              {item.title}
            </h3>

            {/* Bottom */}
            <div className="relative z-10 mt-10 flex items-center justify-between border-t border-white/10 pt-5">
              <p className="text-sm text-white/35">Read Article</p>

              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/60 transition duration-300 group-hover:border-cyan-400/20 group-hover:text-cyan-300">
                →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
