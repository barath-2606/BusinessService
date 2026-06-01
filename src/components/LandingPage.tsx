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
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative overflow-hidden bg-black text-white"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      <div className="mx-auto grid min-h-[88vh] max-w-[1180px] items-center gap-10 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
        {/* LEFT */}
        <div className="relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2 backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.8)]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#D4AF37]">
              Premium Digital Transformation Agency
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 max-w-3xl text-[42px] font-extrabold leading-[0.92] tracking-[-0.05em] sm:text-[58px] lg:text-[74px]">
            Building Elite
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#FFF8DC] bg-clip-text text-transparent">
              {" "}
              Digital Experiences
            </span>
            <br />
            For Visionary
            <br />
            Brands
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-[15px] leading-8 text-white/65">
            Eryxion crafts high-performance digital ecosystems that blend
            strategy, technology, automation, design, and analytics into
            scalable solutions that accelerate business growth and create
            lasting competitive advantage.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button className="rounded-full bg-[#D4AF37] px-7 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(212,175,55,0.45)]">
              Start Your Project
            </button>

            <button className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-7 py-3 text-sm font-medium text-[#D4AF37] transition hover:bg-[#D4AF37]/10">
              Explore Services
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-10 border-t border-[#D4AF37]/10 pt-8">
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
                <h3 className="text-[30px] font-black tracking-tight text-[#D4AF37]">
                  {item.value}
                </h3>

                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-white/40">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative hidden lg:flex lg:justify-end">
          {/* Glow */}
          <div className="absolute right-10 top-10 h-[350px] w-[350px] rounded-full bg-[#D4AF37]/15 blur-[140px]" />

          {/* Dashboard */}
          <div className="relative w-full max-w-[460px] overflow-hidden rounded-[34px] border border-[#D4AF37]/15 bg-[#111111] shadow-[0_20px_100px_rgba(0,0,0,0.65)]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#D4AF37]/10 px-6 py-5">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>

              <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/70">
                Growth Intelligence
              </p>
            </div>

            <div className="space-y-5 p-5">
              {/* Revenue Card */}
              <div className="rounded-[28px] border border-[#D4AF37]/15 bg-gradient-to-br from-[#D4AF37]/15 to-[#D4AF37]/5 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]">
                      Revenue Growth
                    </p>

                    <h2 className="mt-5 text-6xl font-black tracking-tight">
                      240%
                    </h2>
                  </div>

                  <div className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-3 py-1 text-xs font-medium text-[#D4AF37]">
                    +18.2%
                  </div>
                </div>

                <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]" />
                </div>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-[24px] border border-[#D4AF37]/10 bg-[#161616] p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Automation
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-[#D4AF37]">
                    AI Powered
                  </h3>
                </div>

                <div className="rounded-[24px] border border-[#D4AF37]/10 bg-[#161616] p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Analytics
                  </p>

                  <h3 className="mt-3 text-xl font-bold text-[#D4AF37]">
                    Real-Time
                  </h3>
                </div>
              </div>

              {/* Description Card */}
              <div className="rounded-[24px] border border-[#D4AF37]/10 bg-[#161616] p-5">
                <p className="text-sm leading-7 text-white/65">
                  Enterprise-grade digital systems designed for ambitious
                  businesses seeking sustainable growth, operational excellence,
                  and market leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};