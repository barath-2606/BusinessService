import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto max-w-[1180px] px-6 py-16 lg:py-24"
    >
      <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-white/[0.03] to-violet-500/10 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.18)] lg:p-10">
        <div className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
            Get In Touch
          </p>

          <h2 className="mt-4 text-[36px] font-black leading-tight">
            Let’s Build Something Exceptional.
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/50">
            Partner with Eryxion to engineer premium digital systems that
            accelerate growth and elevate your brand.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-105">
              Schedule Consultation
            </button>

            <button className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm transition hover:bg-white/[0.06]">
              hello@eryxion.com
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
