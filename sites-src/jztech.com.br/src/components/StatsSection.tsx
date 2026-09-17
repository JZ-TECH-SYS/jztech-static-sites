const STATS = [
  {
    value: "+30",
    label: "Projetos entregues",
    note: "100% no prazo acordado",
    highlight: true,
  },
  {
    value: "+10",
    label: "Clientes atendidos",
    note: "Em diversas frentes do mercado",
    highlight: false,
  },
  {
    value: "3+",
    label: "Anos de experiência",
    note: "Evolução técnica contínua",
    highlight: true,
  },
];

export const StatsSection = () => (
  <section
    className="py-24 bg-[#FAFAFA] border-b border-slate-200/60"
    id="resultados"
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
      <div data-reveal className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
        Nossos Números
      </div>
      <h2 data-reveal style={{ transitionDelay: "80ms" }} className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 mb-4">
        Resultados <span className="text-brand-700">Que Inspiram</span>
      </h2>
      <p data-reveal style={{ transitionDelay: "160ms" }} className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg mb-16 leading-relaxed">
        Ao longo da nossa jornada, conquistamos resultados que demonstram nosso
        compromisso com a excelência.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STATS.map((stat, index) => (
          <div
            key={stat.label}
            data-reveal="zoom"
            style={{ transitionDelay: `${index * 140}ms` }}
            className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center"
          >
            <span
              className={`text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 ${
                stat.highlight ? "text-brand-700" : "text-slate-900"
              }`}
            >
              {stat.value}
            </span>
            <span className="text-base font-semibold text-slate-800">
              {stat.label}
            </span>
            <span className="text-xs text-slate-400 mt-1 font-mono">
              {stat.note}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
