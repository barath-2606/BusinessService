import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7 }}
      className="relative mt-24 border-t border-[#D4AF37]/10"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* CTA Section */}

        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-black tracking-[0.3em] uppercase">
              Eryxion
            </h2>

            <p className="mt-5 text-sm leading-8 text-white/60">
              A premium digital transformation agency helping ambitious brands
              scale through technology, automation, strategy, and design.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Services
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>Website Development</li>
              <li>Digital Marketing</li>
              <li>Analytics & Intelligence</li>
              <li>Workflow Automation</li>
              <li>Business Consulting</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>
                <a href="#story">Our Story</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#process">How We Work</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white/60">
              <p>hello@eryxion.com</p>
              <p>+91 XXXXX XXXXX</p>
              <p>Tamil Nadu, India</p>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="transition hover:text-[#D4AF37]"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="transition hover:text-[#D4AF37]"
              >
                Instagram
              </a>

              <a
                href="#"
                className="transition hover:text-[#D4AF37]"
              >
                X
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#D4AF37]/10 py-6 text-sm text-white/40 md:flex-row">
          <p>
            © {new Date().getFullYear()} Eryxion. All rights reserved.
          </p>

          <p>
            Designed & Developed by Eryxion
          </p>
        </div>
      </div>
    </motion.footer>
  );
};