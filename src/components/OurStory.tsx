import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const OurStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.section
      ref={ref}
      id="story"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mx-auto max-w-7xl px-6 py-24"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left Side */}
        <div className="lg:sticky lg:top-28">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
            Our Story
          </p>

          <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight">
            Built to Elevate.
            <br />
            Engineered to Scale.
          </h2>

          <div className="mt-8 h-px w-24 bg-gradient-to-r from-cyan-400 to-transparent" />
        </div>

        {/* Right Side */}
        <div>
          {/* Main Content */}
          <div className="rounded-[34px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl lg:p-10">
            <p className="text-[16px] leading-8 text-white/65">
              Eryxion was founded on a singular conviction: that every ambitious
              business deserves enterprise-grade digital intelligence,
              regardless of its stage. We are not a commodity agency — we are
              architects of long-term digital growth.
            </p>

            <p className="mt-7 text-[16px] leading-8 text-white/55">
              We combine deep strategic thinking with relentless execution —
              merging marketing science, automation engineering, creative
              excellence, and business intelligence into cohesive, scalable
              systems that compound value over time.
            </p>
          </div>

          {/* Principles */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {/* Card */}
            <div className="group rounded-[28px] border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.05]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                ✦
              </div>

              <h3 className="mt-6 text-lg font-bold">
                Integrity-First Approach
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/45">
                Every recommendation is grounded in data, transparency, and your
                best commercial interest.
              </p>
            </div>

            {/* Card */}
            <div className="group rounded-[28px] border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.05]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                ✦
              </div>

              <h3 className="mt-6 text-lg font-bold">
                Outcome-Driven Execution
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/45">
                We measure success by your business results — revenue, reach,
                retention, and return on investment.
              </p>
            </div>

            {/* Card */}
            <div className="group rounded-[28px] border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:border-cyan-400/20 hover:bg-white/[0.05]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                ✦
              </div>

              <h3 className="mt-6 text-lg font-bold">Always-On Partnership</h3>

              <p className="mt-4 text-sm leading-7 text-white/45">
                We function as an extension of your team, providing ongoing
                support, insights, and strategic guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
