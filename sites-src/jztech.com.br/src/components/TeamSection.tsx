import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const TEAM = [
  { name: "João Vitor N. Silva", role: "Desenvolvedor de Software", image: "/img/jv.jpg", whatsapp: "5544997633866", linkedin: "https://www.linkedin.com/in/jo%C3%A3o-vitor-734a94193" },
  { name: "José Henrique F. N.", role: "Desenvolvedor de Software", image: "/img/jh.png", whatsapp: "5518981114238", linkedin: "https://www.linkedin.com/in/zehenrique0822" },
  { name: "Jean Felipe F. N.", role: "Desenvolvedor de Software", image: "/img/jean.jpg", whatsapp: "5518997086342", linkedin: "https://www.linkedin.com/in/jean-felipe123/" },
  { name: "Gabriel dos Santos S.", role: "Desenvolvedor de Software", image: "/img/gabriel.jpeg", whatsapp: "5544988248507", linkedin: "https://www.linkedin.com/in/gabriel-dos-santos-silva-005a19213" },
];

export const TeamSection = () => (
  <section id="equipe" className="py-24 sm:py-32 bg-white/60 border-y border-slate-200/70">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div data-reveal className="max-w-2xl mb-14">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950">Quem faz</h2>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          O mesmo time que cria os sistemas é o que atende você. Sem central, sem robô no meio: chama no WhatsApp e
          fala direto com quem fez.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-8">
        {TEAM.map((m, i) => (
          <div key={m.name} data-reveal style={{ transitionDelay: `${i * 80}ms` }} className="group rounded-3xl bg-white border border-slate-200/80 p-3 sm:p-4 hover:shadow-[0_20px_40px_-24px_rgba(15,23,42,0.35)] transition-shadow">
            <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100">
              <img
                src={m.image}
                alt={m.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>
            <div className="mt-4 px-1 flex flex-col gap-3">
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-slate-950">{m.name}</h3>
                <p className="text-sm text-slate-500">{m.role}</p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <a
                  href={`https://wa.me/${m.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp de ${m.name}`}
                  className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-emerald-700 hover:border-emerald-500 transition-colors"
                >
                  <FaWhatsapp className="text-sm" />
                </a>
              <a
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn de ${m.name}`}
                className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-700 hover:border-brand-500 transition-colors"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
