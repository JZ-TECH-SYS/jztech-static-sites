import { MdArrowDownward, MdArrowForward } from "react-icons/md";

const METRICS = [
  { value: "+30", label: "Projetos Entregues", highlight: true },
  { value: "3+", label: "Anos de Experiência", highlight: false },
  { value: "100%", label: "Dedicação", highlight: false },
];

export const HeroSection = () => (
  <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 grid-bg border-b border-slate-200/60">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-[#FAFAFA] pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <h1
            data-reveal
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 leading-[1.12] mb-6"
          >
            Transformamos ideias em{" "}
            <span className="text-brand-700 underline decoration-brand-200 underline-offset-4">
              soluções digitais
            </span>
          </h1>

          <p
            data-reveal
            style={{ transitionDelay: "120ms" }}
            className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-8"
          >
            Desenvolvemos software moderno e escalável que acelera o crescimento
            do seu negócio. Da concepção ao deploy, criamos experiências digitais
            excepcionais.
          </p>

          <div
            data-reveal
            style={{ transitionDelay: "240ms" }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <a
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-700 text-white font-semibold text-sm hover:bg-brand-800 shadow-md shadow-brand-700/20 hover:shadow-lg hover:shadow-brand-700/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              href="#contato"
            >
              <span>Iniciar Projeto</span>
              <MdArrowForward className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-700 font-semibold text-sm border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              href="#projetos"
            >
              <span>Ver Portfólio</span>
              <MdArrowDownward className="text-lg text-slate-400 group-hover:translate-y-1 transition-transform duration-300" />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200/80 w-full max-w-xl">
            {METRICS.map((metric, index) => (
              <div
                key={metric.label}
                data-reveal
                style={{ transitionDelay: `${360 + index * 100}ms` }}
              >
                <div
                  className={`text-2xl sm:text-3xl font-bold tracking-tight ${
                    metric.highlight ? "text-brand-700" : "text-slate-950"
                  }`}
                >
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div
          className="lg:col-span-5 relative"
          data-reveal="right"
          style={{ transitionDelay: "200ms" }}
        >
          <div className="relative rounded-2xl bg-white border border-slate-200/80 shadow-xl overflow-hidden group hover:border-brand-500/40 hover:shadow-2xl hover:shadow-brand-700/10 transition-all duration-500">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50">
              <img
                alt="Visualização moderna de arquitetura de software e interfaces digitais JZ Tech"
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                src="/img/hero-arch.jpg"
                loading="eager"
                width={1200}
                height={896}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Brilhos decorativos */}
          <div className="absolute -top-6 -right-6 w-48 h-48 bg-brand-100/50 rounded-full blur-2xl -z-10 pointer-events-none" />
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-emerald-100/40 rounded-full blur-2xl -z-10 pointer-events-none" />
        </div>
      </div>
    </div>
  </section>
);
