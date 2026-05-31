export const HowWeWork = () => {
    return (
        <section id="process" className="relative mx-auto max-w-7xl px-6 py-24">
        {/* Background Glow */}
        <div className="absolute left-1/2 top-20 -z-10 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
            How We Work
          </p>

          <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight">
            Our Proven Process
          </h2>

          <p className="mt-6 text-[15px] leading-8 text-white/45">
            A disciplined four-stage methodology that transforms ambition into
            measurable, scalable results.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative mt-20">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/30 via-white/10 to-transparent lg:block" />

          <div className="space-y-10">
            {[
              {
                number: "01",
                title: "Discovery",
                desc: "We conduct deep-dive audits of your business, market landscape, competitors, and digital presence to establish a precise baseline and identify leverage opportunities.",
              },
              {
                number: "02",
                title: "Strategy",
                desc: "We architect a bespoke growth blueprint — integrating marketing, automation, analytics, and consulting into a cohesive, prioritised roadmap aligned to your goals.",
              },
              {
                number: "03",
                title: "Execution",
                desc: "Our specialist teams deploy campaigns, build systems, launch automations, and create assets with meticulous precision, hitting deadlines and quality benchmarks.",
              },
              {
                number: "04",
                title: "Optimisation",
                desc: "We continuously analyse performance data, refine strategies, scale what works, and pivot what doesn't — ensuring compounding growth over the long term.",
              },
            ].map((step, index) => (
              <div
                key={step.number}
                className={`grid items-center gap-6 lg:grid-cols-2 ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Empty Side */}
                <div className="hidden lg:block" />

                {/* Card */}
                <div className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-62px] top-10 hidden h-5 w-5 rounded-full border border-cyan-400/40 bg-[#050816] shadow-[0_0_30px_rgba(34,211,238,0.3)] lg:block" />

                  <div className="group relative overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:border-cyan-400/20 hover:bg-white/[0.05]">
                    {/* Hover Glow */}
                    <div className="absolute right-0 top-0 h-40 w-40 bg-cyan-500/0 blur-3xl transition duration-500 group-hover:bg-cyan-500/10" />

                    {/* Number */}
                    <div className="absolute right-7 top-6 text-6xl font-black text-white/[0.04]">
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                        Step {step.number}
                      </p>

                      <h3 className="mt-5 text-3xl font-black tracking-tight">
                        {step.title}
                      </h3>

                      <p className="mt-6 text-[15px] leading-8 text-white/45">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}