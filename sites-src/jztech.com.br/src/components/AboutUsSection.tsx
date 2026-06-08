import {
  FaCode,
  FaLaptopCode,
  FaCogs,
  FaMobile,
  FaCloud,
  FaShieldAlt,
} from "react-icons/fa";

export const AboutUsSection = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Websites Profissionais",
      description:
        "Sites modernos, responsivos e otimizados para conversão com foco na experiência do usuário.",
      features: ["Design Responsivo", "SEO Otimizado", "Performance"],
    },
    {
      icon: <FaCode />,
      title: "Sistemas Sob Medida",
      description:
        "Desenvolvimento de sistemas completos para gestão, vendas e operações empresariais.",
      features: [
        "Arquitetura Escalável",
        "Interface Intuitiva",
        "Suporte Técnico",
      ],
    },
    {
      icon: <FaCogs />,
      title: "Integrações e APIs",
      description:
        "Conectamos sua empresa com ERPs, marketplaces e outras plataformas essenciais.",
      features: ["APIs RESTful", "Webhooks", "Sincronização"],
    },
    {
      icon: <FaMobile />,
      title: "Apps Mobile",
      description:
        "Aplicativos nativos e híbridos para iOS e Android com excelente performance.",
      features: ["React Native", "Flutter", "PWA"],
    },
    {
      icon: <FaCloud />,
      title: "Cloud & DevOps",
      description:
        "Infraestrutura em nuvem, CI/CD e monitoramento para máxima disponibilidade.",
      features: ["AWS/Azure", "Docker", "Kubernetes"],
    },
    {
      icon: <FaShieldAlt />,
      title: "Segurança Digital",
      description:
        "Implementação de melhores práticas de segurança e proteção de dados.",
      features: ["LGPD", "SSL/TLS", "Backup"],
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/20 text-sm font-medium text-white/90 mb-6">
            <FaCode className="mr-2" />
            Nossos Serviços
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Soluções </span>
            <span className="text-gradient">Digitais Completas</span>
          </h2>

          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Transformamos ideias em realidade digital através de tecnologias
            modernas e metodologias ágeis. Nossa expertise abrange todo o ciclo
            de desenvolvimento de software.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative glass rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-gradient-primary text-white text-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gradient transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-white/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-white/60"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats Section
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "15+", label: "Projetos Entregues" },
            { number: "3+", label: "Anos de Experiência" },
            { number: "100%", label: "Dedicação" },
            { number: "24/7", label: "Suporte Técnico" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div> */}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-white/70 mb-6">
              Entre em contato conosco e vamos transformar sua ideia em
              realidade digital.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-primary"
            >
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
