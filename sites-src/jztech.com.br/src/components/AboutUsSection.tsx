import type { ReactNode } from "react";
import {
  MdCloudQueue,
  MdCode,
  MdHub,
  MdLanguage,
  MdSmartphone,
  MdVerifiedUser,
} from "react-icons/md";

type Service = {
  icon: ReactNode;
  /* classes completas: o Tailwind so gera o que aparece literal no codigo */
  iconClass: string;
  title: string;
  description: string;
  features: string[];
};

const SERVICES: Service[] = [
  {
    icon: <MdLanguage className="text-2xl" />,
    iconClass:
      "bg-brand-50 border-brand-100 text-brand-700 group-hover:bg-brand-700 group-hover:text-white",
    title: "Websites Profissionais",
    description:
      "Sites modernos, responsivos e otimizados para conversão com foco na experiência do usuário.",
    features: ["Design Responsivo", "SEO Otimizado", "Performance"],
  },
  {
    icon: <MdCode className="text-2xl" />,
    iconClass:
      "bg-indigo-50 border-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white",
    title: "Sistemas Sob Medida",
    description:
      "Desenvolvimento de sistemas completos para gestão, vendas e operações empresariais.",
    features: ["Arquitetura Escalável", "Interface Intuitiva", "Suporte Técnico"],
  },
  {
    icon: <MdHub className="text-2xl" />,
    iconClass:
      "bg-cyan-50 border-cyan-100 text-cyan-700 group-hover:bg-cyan-600 group-hover:text-white",
    title: "Integrações e APIs",
    description:
      "Conectamos sua empresa com ERPs, marketplaces e outras plataformas essenciais.",
    features: ["APIs RESTful", "Webhooks", "Sincronização"],
  },
  {
    icon: <MdSmartphone className="text-2xl" />,
    iconClass:
      "bg-blue-50 border-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white",
    title: "Apps Mobile",
    description:
      "Aplicativos nativos e híbridos para iOS e Android com excelente performance.",
    features: ["React Native", "Flutter", "PWA"],
  },
  {
    icon: <MdCloudQueue className="text-2xl" />,
    iconClass:
      "bg-sky-50 border-sky-100 text-sky-700 group-hover:bg-sky-600 group-hover:text-white",
    title: "Cloud & DevOps",
    description:
      "Infraestrutura em nuvem, CI/CD e monitoramento para máxima disponibilidade.",
    features: ["AWS/Azure", "Docker", "Kubernetes"],
  },
  {
    icon: <MdVerifiedUser className="text-2xl" />,
    iconClass:
      "bg-violet-50 border-violet-100 text-violet-700 group-hover:bg-violet-600 group-hover:text-white",
    title: "Segurança Digital",
    description:
      "Implementação de melhores práticas de segurança e proteção de dados.",
    features: ["LGPD", "SSL/TLS", "Backup"],
  },
];

export const AboutUsSection = () => (
  <section className="py-24 bg-white border-b border-slate-200/60" id="servicos">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div data-reveal className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/60 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-3">
          Nossos Serviços
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 mb-4">
          Soluções Digitais Completas
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Transformamos ideias em realidade digital através de tecnologias
          modernas e metodologias ágeis. Nossa expertise abrange todo o ciclo de
          desenvolvimento de software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {SERVICES.map((service, index) => (
          <div
            key={service.title}
            data-reveal
            style={{ transitionDelay: `${(index % 3) * 120}ms` }}
            className="group p-8 rounded-2xl bg-[#FAFAFA] border border-slate-200/80 hover:border-brand-500/40 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div
                className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${service.iconClass}`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
            </div>
            <div className="pt-5 border-t border-slate-200/80 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
              {service.features.map((feature) => (
                <span
                  key={feature}
                  className="px-2.5 py-1 rounded-md bg-white border border-slate-200"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Callout intermediário */}
      <div data-reveal="zoom" className="mt-16 rounded-2xl bg-gradient-to-r from-brand-700 via-brand-800 to-slate-900 p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
            Pronto para começar seu projeto?
          </h3>
          <p className="text-brand-100 text-sm sm:text-base">
            Entre em contato conosco e vamos transformar sua ideia em realidade
            digital.
          </p>
        </div>
        <a
          className="px-6 py-3.5 rounded-xl bg-white text-brand-800 font-semibold text-sm hover:bg-brand-50 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 shrink-0"
          href="#contato"
        >
          Falar com Especialista
        </a>
      </div>
    </div>
  </section>
);
