import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const TEAM = [
  {
    name: "João Vitor N. Silva",
    role: "Desenvolvedor de Software",
    image: "/img/jv.jpg",
    linkedin: "https://www.linkedin.com/in/jo%C3%A3o-vitor-734a94193",
    whatsapp: "5544997633866",
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
  {
    name: "Gabriel S. Silva",
    role: "Desenvolvedor de Software",
    image: "/img/gabriel.jpeg",
    linkedin: "https://www.linkedin.com/in/gabriel-dos-santos-silva-005a19213",
    whatsapp: "5544988248507",
  },
];

const whatsappLink = (phone: string, name: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(
    `Olá ${name}! Vi seu perfil no site da JZ Tech e gostaria de conversar com você.`
  )}`;

export const TeamSection = () => (
  <section className="py-24 bg-white border-b border-slate-200/60" id="equipe">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div data-reveal className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/60 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-3">
          Nossa Equipe
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 mb-4">
          Conheça <span className="text-brand-700">Nosso Time</span>
        </h2>
        <p className="text-slate-600 text-base sm:text-lg">
          Uma equipe apaixonada por tecnologia e dedicada a entregar as melhores
          soluções para nossos clientes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {TEAM.map((member, index) => (
          <div
            key={member.name}
            data-reveal
            style={{ transitionDelay: `${index * 140}ms` }}
            className="group p-8 rounded-2xl bg-[#FAFAFA] border border-slate-200/80 shadow-sm text-center flex flex-col items-center hover:border-brand-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-24 h-24 rounded-full bg-white border-2 border-brand-500/30 p-1 mb-5 shadow-sm">
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-lg font-bold text-slate-950">{member.name}</h3>
            <span className="text-xs font-medium text-brand-700 uppercase tracking-wider mt-1 mb-4">
              {member.role}
            </span>
            <div className="flex items-center gap-3 mt-auto">
              <a
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-brand-700 hover:border-brand-500 shadow-sm transition-all"
                href={member.linkedin}
                rel="noopener noreferrer"
                target="_blank"
                title={`LinkedIn de ${member.name}`}
              >
                <FaLinkedinIn className="text-base" />
              </a>
              <a
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:border-emerald-500 shadow-sm transition-all"
                href={whatsappLink(member.whatsapp, member.name)}
                rel="noopener noreferrer"
                target="_blank"
                title={`Conversar com ${member.name} no WhatsApp`}
              >
                <FaWhatsapp className="text-base" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
