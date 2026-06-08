export const StatsSection = () => {
  const stats = [
    {
      value: "+15",
      label: "Projetos entregues",
      animation: "floatX",
      duration: "2s",
    },
    {
      value: "+10",
      label: "Clientes atendidos",
      animation: "floatY",
      duration: "2s",
    },
    {
      value: "3+",
      label: "Anos de experiência",
      animation: "floatXY",
      duration: "2s",
    },
  ];

  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/20 text-sm font-medium text-white/90 mb-6">
          Nossos Números
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
          <span className="text-white">Resultados </span>
          <span className="text-gradient">Que Inspiram</span>
        </h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          Ao longo da nossa jornada, conquistamos resultados que demonstram
          nosso compromisso com a excelência.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`group relative glass rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105 animate-${stat.animation}`}
              style={{
                animationDuration: stat.duration,
                animationIterationCount: "infinite",
                animationTimingFunction: "ease-in-out",
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70 text-base font-medium">
                  {stat.label}
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Animações personalizadas */}
      <style>{`
        @keyframes floatX {
          0% { transform: translateX(0); }
          50% { transform: translateX(8px); }
          100% { transform: translateX(0); }
        }

        @keyframes floatY {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        @keyframes floatXY {
          0% { transform: translate(0, 0); }
          50% { transform: translate(8px, -10px); }
          100% { transform: translate(0, 0); }
        }

        .animate-floatX {
          animation-name: floatX;
        }

        .animate-floatY {
          animation-name: floatY;
        }

        .animate-floatXY {
          animation-name: floatXY;
        }

        .text-gradient {
          background: linear-gradient(90deg, #6a00ff, #00c3ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .bg-gradient-primary {
          background: linear-gradient(90deg, #6a00ff 0%, #00c3ff 100%);
        }
      `}</style>
    </section>
  );
};
