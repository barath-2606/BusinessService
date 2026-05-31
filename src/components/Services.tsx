export const Services = () => {
  const services = [
    "Digital Marketing",
    "Analytics & Intelligence",
    "Website Development",
    "Creative Design",
    "Workflow Automation",
    "Business Consulting",
  ];
  return (
    <section
      id="services"
      className="mx-auto max-w-[1180px] px-6 py-16 lg:py-24"
    >
      <div className="relative z-10 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
          Services
        </p>

        <h2 className="mt-4 text-[36px] font-black leading-tight">
          Premium Solutions
          <br />
          Built For Scale.
        </h2>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <div
            key={service}
            className="h-full rounded-[26px] border border-white/10 bg-white/[0.03] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.18)] transition hover:border-cyan-400/20 hover:bg-white/[0.05]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
              ✦
            </div>

            <h3 className="mt-6 text-xl font-bold">{service}</h3>

            <p className="mt-4 text-sm leading-7 text-white/45">
              Enterprise-grade execution engineered for measurable business
              growth.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
