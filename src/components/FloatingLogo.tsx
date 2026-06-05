import whatsapp from "../assets/whatsapp.png";

const FloatingLogo = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Outer Glow */}
      <div className="absolute inset-0 animate-ping rounded-full bg-green-500/30 blur-md" />

      {/* Constant Glow */}
      <div className="absolute inset-0 rounded-full bg-green-500/20 blur-xl" />

      <button
        className="
          relative
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          border
          border-green-400/30
          bg-[#111]
          shadow-[0_0_20px_rgba(34,197,94,0.5)]
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-[0_0_40px_rgba(34,197,94,0.8)]
          cursor-pointer
        "
      >
        <img
          src={whatsapp}
          alt="WhatsApp"
          className="h-10 w-10 object-contain"
        />
      </button>
    </div>
  );
};

export default FloatingLogo;