import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { HowWeWork } from "./HowWeWork";
import { Insights } from "./Insights";
import { LandingPage } from "./LandingPage";
import { Navbar } from "./Navbar";
import { OurStory } from "./OurStory";
import { Portfolio } from "./Portfolio";
import { Services } from "./Services";

export default function EryxionWebsite() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-[-10%] right-[-10%] h-[380px] w-[380px] rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <LandingPage />

      {/* Services */}
      <Services />

      {/* Our Story */}
      <OurStory />

      {/* Portfolio */}
      <Portfolio />

      {/* How We Work */}
      <HowWeWork />

      {/* Insights */}
      <Insights />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
