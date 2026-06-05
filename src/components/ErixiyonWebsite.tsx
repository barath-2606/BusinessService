import { Contact } from "./Contact";
import FloatingLogo from "./FloatingLogo";
import { Footer } from "./Footer";
import { HowWeWork } from "./HowWeWork";
import { LandingPage } from "./LandingPage";
import { Navbar } from "./Navbar";
import { OurStory } from "./OurStory";
import { Portfolio } from "./Portfolio";
import { Services } from "./Services";

export default function EryxionWebsite() {
  return (
    <div className="min-h-screen bg-[#050505] text-white w-full">
      {/* Premium Background */}
      {/* <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#D4AF37]/10 blur-[180px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[450px] w-[450px] rounded-full bg-[#D4AF37]/8 blur-[180px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_85%)]" />
      </div> */}

      {/* Navigation */}
      <Navbar />

      <FloatingLogo />

      {/* Hero */}
      <LandingPage />

      {/* Services */}
      <Services />

      {/* About */}
      <OurStory />

      {/* Portfolio */}
      <Portfolio />

      {/* Process */}
      <HowWeWork />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}