import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-20 bg-slate-900 overflow-hidden px-4"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/20 text-sm font-medium text-white/90 mb-6">
            Fale Conosco
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Entre em </span>
            <span className="text-gradient">Contato</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Textos à esquerda */}
          <div className="group relative glass rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <p className="text-white/70 text-lg mb-4">
                Nós valorizamos cada detalhe da sua empresa e acreditamos que
                sua marca merece atenção especial. Nosso objetivo é entender
                suas necessidades e construir soluções que realmente façam
                diferença para o seu negócio.
              </p>
              <p className="text-white/70 text-lg">
                Conte para nós quais são seus desafios e vamos trabalhar juntos
                para encontrar o melhor caminho para alcançar os seus
                resultados.
              </p>
            </div>
          </div>

          {/* Informações à direita */}
          <div className="group relative glass rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 space-y-6">
              {/* E-mail */}
              <a
                href="mailto:jz.tech.digital@gmail.com"
                className="flex items-center gap-4 group-hover:text-white/100 text-white/90 transition"
              >
                <FiMail className="text-xl text-purple-400" />
                <span className="text-lg">jz.tech.digital@gmail.com</span>
              </a>

              {/* Telefones */}
              <a
                href="tel:+5544997633866"
                className="flex items-center gap-4 group-hover:text-white/100 text-white/90 transition"
              >
                <FiPhone className="text-xl text-blue-400" />
                <span className="text-lg">+55 (44) 99763-3866</span>
              </a>
              <a
                href="tel:+5518981114238"
                className="flex items-center gap-4 group-hover:text-white/100 text-white/90 transition"
              >
                <FiPhone className="text-xl text-blue-400" />
                <span className="text-lg">+55 (18) 98111-4238</span>
              </a>

              {/* Endereço */}
              <div className="flex items-center gap-4 text-white/90">
                <FiMapPin className="text-xl text-cyan-400" />
                <span className="text-lg">Douradina/PR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Redes sociais */}
        <div className="flex justify-center gap-8 flex-wrap">
          <a
            onClick={() => {
              const msg = encodeURIComponent(
                `Olá, estava visitando o site de vocês e gostaria de conversar com vocês sobre um projeto.`
              );
              window.open(`https://wa.me/554497633866?text=${msg}`, "_blank");
            }}
            className="group relative glass rounded-full p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <FaWhatsapp className="text-2xl text-white/90 relative z-10" />
          </a>
          <a
            href="https://www.linkedin.com/company/jz-tech-sys"
            target="_blank"
            className="group relative glass rounded-full p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <FaLinkedinIn className="text-2xl text-white/90 relative z-10" />
          </a>
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
      `}</style>
    </section>
  );
};
