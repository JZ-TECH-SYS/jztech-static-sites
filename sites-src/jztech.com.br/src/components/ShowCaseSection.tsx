import { useState } from "react";
import type { ReactNode } from "react";
import {
  MdArrowBack,
  MdArrowForward,
  MdBolt,
  MdCheckCircle,
  MdFavorite,
  MdHandshake,
  MdRocketLaunch,
  MdVerified,
  MdVerifiedUser,
} from "react-icons/md";

const PROJECTS = [
  {
    title: "Hub Fazendas",
    description:
      "Marketplace de gado multi-tenant que conecta produtores rurais a compradores. Catálogo com dados genéticos, sanitários e documentação; venda completa com carrinho, pagamento, contrato digital e repasse automático para a fazenda; feed social e chat para negociação direta.",
    image: "/img/hub-fazendas.png",
    frame: "hubfazendas.com.br",
    tags: [
      "Marketplace Multi-tenant",
      "Pagamento & Repasse",
      "Feed Social",
      "Chat de Negociação",
    ],
    status: "Plataforma no ar em hubfazendas.com.br",
    badge: "Multi-tenant",
  },
  {
    title: "GTELog",
    description:
      "Plataforma de logística de transporte animal: da solicitação ao comprovante de entrega. Agrupamento em lotes, roteirização com paradas, rastreio em tempo real com link público de validade controlada, marketplace de frete com propostas de transportadoras e app para o motorista.",
    image: "/img/gte-log.png",
    frame: "gtelog.com.br/workspace",
    tags: [
      "Roteirização",
      "Rastreio em Tempo Real",
      "Marketplace de Frete",
      "App do Motorista",
    ],
    status: "Operação no ar em gtelog.com.br",
    badge: "Tempo real",
  },
  {
    title: "Click Jóias",
    description:
      "ERP completo para gestão de lojas físicas e online. Controle de estoque, produtos, pedidos, caixa, ordens de serviço e recebimentos em um só lugar, com emissão fiscal de NF-e/NFC-e ponta a ponta e integrações de pagamento PIX e Cielo.",
    image: "/img/click-joias.png",
    frame: "Click Jóias — ERP · Dashboard",
    tags: ["ERP Gestão", "NF-e / NFC-e", "PIX & Cielo", "PDV & Estoque"],
    status: "Sistema em produção ativa",
    badge: "Fiscal completo",
  },
  {
    title: "ClickExpress",
    description:
      "Plataforma de atendimento para lanchonetes que une balcão e delivery no mesmo fluxo. Pedidos com acompanhamento de status, catálogo, cupons e entrega por bairro, emissão automática de NFC-e, cardápio digital por QR Code e notificação do cliente pelo WhatsApp — com app próprio para iOS e Android.",
    image: "/img/click-express.png",
    frame: "ClickExpress — PDV · Comandas",
    tags: ["PDV & Delivery", "NFC-e", "App iOS/Android", "WhatsApp"],
    status: "Balcão e delivery no mesmo fluxo",
    badge: "PDV + App",
  },
];


type Reason = {
  icon: ReactNode;
  iconClass: string;
  title: string;
  description: string;
  footerIcon: ReactNode;
  footerClass: string;
  footer: string;
};

const REASONS: Reason[] = [
  {
    icon: <MdRocketLaunch className="text-[26px]" />,
    iconClass: "bg-brand-50 border-brand-100 text-brand-700",
    title: "Agilidade e Inovação",
    description:
      "Entregamos soluções rápidas e modernas, utilizando as melhores práticas de desenvolvimento.",
    footerIcon: <MdBolt className="text-[18px]" />,
    footerClass: "text-brand-700",
    footer: "Entrega rápida e contínua",
  },
  {
    icon: <MdVerifiedUser className="text-[26px]" />,
    iconClass: "bg-indigo-50 border-indigo-100 text-indigo-700",
    title: "Segurança e Qualidade",
    description:
      "Nossos sistemas são robustos, seguros e pensados para escala e performance.",
    footerIcon: <MdVerified className="text-[18px]" />,
    footerClass: "text-indigo-700",
    footer: "Qualidade comprovada",
  },
  {
    icon: <MdHandshake className="text-[26px]" />,
    iconClass: "bg-emerald-50 border-emerald-100 text-emerald-700",
    title: "Parceria e Compromisso",
    description:
      "Trabalhamos lado a lado com nossos clientes, focando no sucesso do projeto.",
    footerIcon: <MdFavorite className="text-[18px]" />,
    footerClass: "text-emerald-700",
    footer: "Foco no cliente",
  },
];

const CaseCarousel = () => {
  const [current, setCurrent] = useState(0);
  const go = (index: number) =>
    setCurrent((index + PROJECTS.length) % PROJECTS.length);

  return (
    <div className="relative rounded-3xl bg-[#FAFAFA] border border-slate-200/90 shadow-sm overflow-hidden p-6 sm:p-10 lg:p-12">
      {/* Slides empilhados com grid e trocados por opacidade. O translateX que
          havia aqui deixava um transform permanente na arvore: o Chrome promove
          a camada, desliga o antialias subpixel e o texto ganha um halo cinza. */}
      <div className="relative grid">
        {PROJECTS.map((project, index) => (
          <div
            key={project.title}
            aria-hidden={index !== current}
            className={`col-start-1 row-start-1 transition-opacity duration-500 ease-out ${
              index === current
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5 flex flex-col items-start">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100/70 text-brand-800 text-xs font-bold uppercase tracking-wider mb-4">
                    Case de Sucesso
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight mb-4">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed mb-6 text-left">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 w-full flex items-center justify-between gap-3 text-sm">
                    <div className="flex items-center gap-2 text-slate-700 font-medium text-left">
                      <MdCheckCircle className="text-emerald-600 text-xl shrink-0" />
                      <span>{project.status}</span>
                    </div>
                    <span className="font-mono text-xs text-slate-400 shrink-0">
                      {project.badge}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="rounded-2xl bg-white border border-slate-200 shadow-md shadow-slate-900/5 overflow-hidden">
                    <div className="px-4 py-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-slate-300" />
                        <span className="w-3 h-3 rounded-full bg-slate-300" />
                        <span className="w-3 h-3 rounded-full bg-slate-300" />
                      </div>
                      <div className="px-4 py-1 rounded bg-white border border-slate-200 font-mono text-xs text-slate-500 truncate max-w-[10rem] sm:max-w-md">
                        {project.frame}
                      </div>
                      <div className="w-10" />
                    </div>
                    <div className="group relative overflow-hidden bg-slate-50 aspect-video">
                      <img
                        alt={`Interface do projeto ${project.title}`}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                        src={project.image}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controles */}
      <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono font-medium text-slate-700 shadow-sm">
            <span className="font-bold text-brand-700">
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="text-slate-400">/</span>
            <span className="text-slate-500">
              {String(PROJECTS.length).padStart(2, "0")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {PROJECTS.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => go(index)}
                aria-label={`Ver ${project.title}`}
                aria-current={index === current}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-8 bg-brand-700"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => go(current - 1)}
            aria-label="Projeto anterior"
            className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-brand-700 hover:border-brand-500 shadow-sm hover:shadow active:scale-95 transition-all"
          >
            <MdArrowBack className="text-xl" />
          </button>
          <button
            type="button"
            onClick={() => go(current + 1)}
            aria-label="Próximo projeto"
            className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:text-brand-700 hover:border-brand-500 shadow-sm hover:shadow active:scale-95 transition-all"
          >
            <MdArrowForward className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const ShowcaseSection = () => (
  <>
    <section className="py-24 bg-white border-b border-slate-200/60" id="projetos">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div data-reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/60 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Nossos Projetos
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 mb-4">
            Cases de <span className="text-brand-700">Sucesso</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Conheça alguns dos projetos desenvolvidos com foco em performance e
            escalabilidade.
          </p>
        </div>

        <div data-reveal="zoom" style={{ transitionDelay: "120ms" }}>
          <CaseCarousel />
        </div>
      </div>
    </section>

    <section className="py-24 bg-[#FAFAFA] border-b border-slate-200/60" id="sobre">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div data-reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            Por que nos escolher?
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 mb-4">
            Razões para <span className="text-brand-700">Confiar em Nós</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Nosso compromisso vai além da entrega. Buscamos resultados reais e
            duradouros para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REASONS.map((reason, index) => (
            <div
              key={reason.title}
              data-reveal
              style={{ transitionDelay: `${index * 140}ms` }}
              className="group p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${reason.iconClass}`}
                >
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3">
                  {reason.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {reason.description}
                </p>
              </div>
              <div
                className={`pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold ${reason.footerClass}`}
              >
                {reason.footerIcon}
                <span>{reason.footer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);
