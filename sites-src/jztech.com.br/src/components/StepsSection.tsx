import { useEffect, useRef, useState, type CSSProperties } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdDescription, MdBuild, MdSchool, MdSupportAgent, MdArrowForward } from "react-icons/md";
import { WHATSAPP } from "./whatsapp";

/* Como trabalhamos — do primeiro contato ao suporte, em 5 etapas. Cada uma diz o
   que a empresa faz e o que a JZ Tech faz. A linha do tempo enche conforme a
   rolagem e cada etapa acende quando a linha chega nela. */
const ETAPAS = [
  {
    Icone: FaWhatsapp,
    titulo: "Conversa",
    voce: "Conta pelo WhatsApp como a empresa funciona e o que está travando.",
    nos: "Entendemos a rotina, as pessoas envolvidas e onde o tempo está indo embora.",
  },
  {
    Icone: MdDescription,
    titulo: "Proposta",
    voce: "Recebe uma proposta clara, sem letra miúda.",
    nos: "Indicamos o sistema que resolve, o que precisa de ajuste, o prazo e o valor da mensalidade.",
  },
  {
    Icone: MdBuild,
    titulo: "Montagem",
    voce: "Passa os dados que já tem: cadastros, produtos, clientes e equipe.",
    nos: "Configuramos a sua empresa, importamos os dados, criamos os usuários e ajustamos ao seu jeito.",
  },
  {
    Icone: MdSchool,
    titulo: "Treinamento e 1 mês grátis",
    voce: "A equipe usa no dia a dia, com o sistema rodando de verdade.",
    nos: "Treinamos quem vai usar e acompanhamos de perto o primeiro mês. Você decide depois.",
  },
  {
    Icone: MdSupportAgent,
    titulo: "Suporte contínuo",
    voce: "Chama no WhatsApp quando precisar.",
    nos: "Você fala direto com quem fez o sistema, e ele continua melhorando com o seu uso.",
  },
];

export const StepsSection = () => {
  const lista = useRef<HTMLOListElement>(null);
  const [enche, setEnche] = useState(0);

  useEffect(() => {
    const aoRolar = () => {
      const el = lista.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const meio = innerHeight * 0.6;
      setEnche(Math.min(1, Math.max(0, (meio - r.top) / r.height)));
    };
    aoRolar();
    addEventListener("scroll", aoRolar, { passive: true });
    addEventListener("resize", aoRolar);
    return () => {
      removeEventListener("scroll", aoRolar);
      removeEventListener("resize", aoRolar);
    };
  }, []);

  return (
    <section id="como" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16">
        <div data-reveal className="lg:sticky lg:top-28 self-start">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950">Como trabalhamos</h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Do primeiro contato ao suporte, você sabe sempre o que vem a seguir — e fala com as mesmas pessoas do começo
            ao fim.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2.5 h-12 px-6 rounded-full bg-slate-950 text-white font-semibold hover:bg-slate-800 transition-colors"
          >
            <FaWhatsapp className="text-[#25D366] text-lg" /> Começar pela conversa
            <MdArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <ol ref={lista} className="relative" style={{ "--enche": enche } as CSSProperties}>
          <span aria-hidden="true" className="absolute left-[21px] top-2 bottom-2 w-[2px] bg-slate-200 rounded-full" />
          <span aria-hidden="true" className="etapas-linha absolute left-[21px] top-2 bottom-2 w-[2px] bg-brand-600 rounded-full" />
          {ETAPAS.map((e, k) => {
            const acesa = enche >= (k + 0.15) / ETAPAS.length;
            return (
              <li key={e.titulo} className="relative pl-16 pb-10 last:pb-0">
                <span
                  className={`absolute left-0 top-0 w-11 h-11 rounded-xl grid place-items-center transition-all duration-500 ${
                    acesa ? "bg-brand-600 text-white shadow-[0_10px_24px_-8px_rgba(37,99,235,0.6)]" : "bg-white text-slate-400 border border-slate-200"
                  }`}
                >
                  <e.Icone className="text-xl" />
                </span>
                <p className={`text-[12px] font-semibold uppercase tracking-wider transition-colors ${acesa ? "text-brand-700" : "text-slate-400"}`}>
                  Etapa {k + 1}
                </p>
                <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-slate-950">{e.titulo}</h3>
                <div className="mt-4 grid sm:grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
                    <p className="text-[12px] font-semibold uppercase tracking-wider text-slate-400">Você</p>
                    <p className="mt-1.5 text-[15px] text-slate-700 leading-relaxed">{e.voce}</p>
                  </div>
                  <div className={`rounded-2xl border p-4 transition-colors duration-500 ${acesa ? "border-brand-200 bg-brand-50/70" : "border-slate-200 bg-white/80"}`}>
                    <p className="text-[12px] font-semibold uppercase tracking-wider text-brand-700">JZ Tech</p>
                    <p className="mt-1.5 text-[15px] text-slate-700 leading-relaxed">{e.nos}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
