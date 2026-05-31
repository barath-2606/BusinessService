export const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-8 px-6 py-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-black tracking-[0.35em] uppercase">
            Eryxion
          </h2>

          <p className="mt-3 text-sm text-white/45">
            Premium digital transformation agency.
          </p>
        </div>

        <div className="flex gap-8 text-sm text-white/45">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
};
