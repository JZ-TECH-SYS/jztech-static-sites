import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const TeamSection = () => {
  const team = [
    {
      name: "João Vitor N. Silva",
      role: "Desenvolvedor de Software",
      image: "/img/jv.jpg",
      linkedin:
        "https://www.linkedin.com/in/jo%C3%A3o-vitor-734a94193?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", // Adicione o link real do LinkedIn do João Vitor
      whatsapp: "554497633866",
    },
    {
      name: "José Henrique F. N.",
      role: "Desenvolvedor de Software",
      image: "/img/jh.png",
      linkedin: "https://www.linkedin.com/in/zehenrique0822",
      whatsapp: "5518981114238",
    },
    {
      name: "Jean Felipe F. N.",
      role: "Desenvolvedor de Software",
      image: "/img/jean.jpg",
      linkedin: "https://www.linkedin.com/in/jean-felipe123/",
      whatsapp: "5518997086342",
    },
  ];

  const handleWhatsAppClick = (phone: string, name: string) => {
    const msg = encodeURIComponent(
      `Olá ${name}! Vi seu perfil no site da JZ Tech e gostaria de conversar com você.`
    );
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
  };

  return (
    <section
      id="team"
      className="relative py-24 bg-slate-900 overflow-hidden px-4"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/20 text-sm font-medium text-white/90 mb-6">
            Nossa Equipe
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Conheça </span>
            <span className="text-gradient">Nosso Time</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
            Uma equipe apaixonada por tecnologia e dedicada a entregar as
            melhores soluções para nossos clientes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group relative glass rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-40 h-40 rounded-full mb-6 overflow-hidden border-4 border-white/10 group-hover:border-white/30 transition-all duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-white/70 mb-6">{member.role}</p>
                <div className="flex gap-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass p-3 rounded-full border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110 group"
                      title={`LinkedIn de ${member.name}`}
                    >
                      <FaLinkedin className="text-white/90 text-xl" />
                    </a>
                  )}
                  <button
                    onClick={() =>
                      handleWhatsAppClick(member.whatsapp, member.name)
                    }
                    className="glass p-3 rounded-full border border-green-500/30 hover:border-green-500/50 transition-all duration-300 hover:scale-110 group"
                    title={`Conversar com ${member.name} no WhatsApp`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <FaWhatsapp className="text-white/90 text-xl relative z-10" />
                  </button>
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
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
      `}</style>
    </section>
  );
};
