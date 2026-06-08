type BrandHeaderProps = {
  brand: string;
  subtitle: string;
};

export default function BrandHeader({
  brand,
  subtitle,
}: BrandHeaderProps) {
  return (
    <section className="space-y-4 sm:space-y-5">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="gradient-outline rounded-2xl bg-white/85 p-4 shadow-lg ring-1 ring-white/70 sm:p-5">
          <img
            src="/image.png"
            alt={`Logo ${brand}`}
            className="h-16 w-16 object-contain sm:h-20 sm:w-20"
          />
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-900/70">
            Especialistas em aquarismo
          </p>
          <h1 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">{brand}</h1>
          <p className="max-w-xl text-sm font-semibold leading-snug text-slate-700 sm:text-base">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
