import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const LandingPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden"
    >
      <div className="mx-auto grid min-h-[88vh] max-w-[1180px] items-center gap-10 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
        {/* Left */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/10 bg-white/[0.03] px-4 py-2 backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/55">
              Elite Digital Transformation Agency
            </span>
          </div>

          <h1 className="mt-8 max-w-3xl text-[42px] font-black leading-[0.92] tracking-[-0.04em] sm:text-[54px] lg:text-[68px]">
            We build
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              {" "}
              Digital empire
            </span>
            <br />
            For ambitious
            <br />
            Brands
          </h1>

          <p className="mt-7 max-w-xl text-[15px] leading-8 text-white/48">
            Eryxion architects high-performance digital ecosystems — blending
            strategy, automation, analytics, design, and engineering into
            scalable systems that drive measurable business growth.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.03]">
              Start Your Project
            </button>

            <button className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/80 transition hover:border-cyan-400/20 hover:bg-white/[0.05] hover:text-white">
              Explore Services
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-7">
            {[
              {
                value: "120+",
                label: "Projects Delivered",
              },
              {
                value: "10x",
                label: "Growth Potential",
              },
              {
                value: "24/7",
                label: "Strategic Support",
              },
            ].map((item) => (
              <div key={item.label}>
                <h3 className="text-[28px] font-black tracking-tight">
                  {item.value}
                </h3>

                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/35">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative hidden lg:flex lg:justify-end">
          <div className="absolute right-10 top-10 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="relative w-full max-w-[440px] overflow-hidden rounded-[34px] border border-white/10 bg-white/[0.035] shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>

              <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
                Growth Intelligence
              </p>
            </div>

            <div className="space-y-5 p-5">
              <div className="rounded-[28px] border border-cyan-400/10 bg-gradient-to-br from-cyan-500/[0.08] to-blue-500/[0.03] p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-300">
                      Revenue Growth
                    </p>

                    <h2 className="mt-5 text-6xl font-black tracking-tight">
                      240%
                    </h2>
                  </div>

                  <div className="rounded-full border border-emerald-400/10 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    +18.2%
                  </div>
                </div>

                <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                    Automation
                  </p>

                  <h3 className="mt-3 text-xl font-bold">AI Powered</h3>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                    Analytics
                  </p>

                  <h3 className="mt-3 text-xl font-bold">Real-Time</h3>
                </div>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm leading-7 text-white/60">
                  Enterprise-grade digital systems designed to help ambitious
                  companies scale faster and operate smarter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
