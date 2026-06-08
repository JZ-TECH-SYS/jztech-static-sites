import { FaRocket, FaShieldAlt, FaHandshake } from "react-icons/fa";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css/pagination";

export const ShowcaseSection = () => {
  const projects = [
    {
      title: "Zero Papel",
      description:
        "Plataforma inteligente para organização e armazenamento de documentos na nuvem. Elimine o papel, ganhe produtividade e acesse seus arquivos de forma segura e prática de qualquer lugar.",
      image: "/img/zero-papel.png",
    },
    {
      title: "Click Jóias",
      description:
        "ERP completo para gestão de lojas físicas e online. Controle eficiente de estoque, produtos, pedidos, caixa, ordens de serviço e recebimentos, tudo em um só lugar. Ideal para negócios que buscam integração e automação do dia a dia.",
      image: "/img/click-joias.png",
    },
    {
      title: "Ponto Check",
      description:
        "Sistema moderno para controle de ponto de funcionários, com recursos de marcação, relatórios detalhados e gestão de correções. Facilita o acompanhamento da jornada de trabalho e garante conformidade com a legislação.",
      image: "/img/ponto-check.png",
    },
  ];

  const reasons = [
    {
      icon: <FaRocket className="text-3xl text-white-400 mb-3" />,
      title: "Agilidade e Inovação",
      description:
        "Entregamos soluções rápidas e modernas, utilizando as melhores práticas de desenvolvimento.",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-white-400 mb-3" />,
      title: "Segurança e Qualidade",
      description:
        "Nossos sistemas são robustos, seguros e pensados para escala e performance.",
    },
    {
      icon: <FaHandshake className="text-3xl text-white-400 mb-3" />,
      title: "Parceria e Compromisso",
      description:
        "Trabalhamos lado a lado com nossos clientes, focando no sucesso do projeto.",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 bg-slate-900 overflow-hidden px-4"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/20 text-sm font-medium text-white/90 mb-6">
            Nossos Projetos
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Cases de </span>
            <span className="text-gradient">Sucesso</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-16">
            Conheça alguns dos projetos desenvolvidos com foco em performance e
            escalabilidade.
          </p>

          {/* Swiper Projects */}
          <div className="glass rounded-2xl p-6 border border-white/10">
            <Swiper
              grabCursor={true}
              slidesPerView={1}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="swiper-custom"
            >
              {projects.map((project, idx) => (
                <SwiperSlide key={idx} className="group">
                  <div className="rounded-xl overflow-hidden mb-6 max-w-4xl mx-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/20 text-sm font-medium text-white/90 mb-6">
              Por que nos escolher?
            </div>
            <h3 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-white">Razões para </span>
              <span className="text-gradient">Confiar em Nós</span>
            </h3>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-16">
              Nosso compromisso vai além da entrega. Buscamos resultados reais e
              duradouros para nossos clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="group relative glass rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 text-center"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-gradient-primary text-white shadow-lg">
                    {reason.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-gradient transition-colors duration-300">
                    {reason.title}
                  </h4>
                  <p className="text-white/70 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
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

        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }

        /* Swiper Custom Styles */
        .swiper-custom {
          padding: 20px 0 40px;
        }

        .swiper-pagination {
          bottom: 0 !important;
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: linear-gradient(90deg, #6a00ff, #00c3ff);
          width: 24px;
          border-radius: 5px;
        }

        .swiper-slide {
          opacity: 0.5;
          transform: scale(0.9);
          transition: all 0.3s ease;
        }

        .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </section>
  );
};
