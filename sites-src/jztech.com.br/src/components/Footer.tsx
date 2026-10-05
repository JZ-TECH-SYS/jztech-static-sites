import { useEffect, useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";
import { SYSTEMS } from "./SystemsSection";
import { WHATSAPP } from "./whatsapp";

const EMPRESA = [
  { href: "#cases", label: "Cases" },
  { href: "#ia", label: "JZ Tech IA" },
  { href: "#como", label: "Como trabalhamos" },
  { href: "#equipe", label: "Equipe" },
];

const linkClass =
  "nav-link w-fit text-[15px] text-slate-400 hover:text-white transition-colors";

/* Botão de subir: aparece depois da primeira dobra. */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`flutuante fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full cursor-pointer hover:-translate-y-0.5 bg-brand-700 text-white shadow-[0_10px_24px_-8px_rgba(29,78,216,0.6)] hover:bg-brand-800 transition-all duration-300 flex items-center justify-center ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <MdArrowUpward className="text-xl" />
    </button>
  );
};

/* WhatsApp flutuante: só no celular, acima do botão de subir quando ele aparece. */
const WhatsAppFlutuante = () => {
  const [subindo, setSubindo] = useState(false);
  useEffect(() => {
    const onScroll = () => setSubindo(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={`flutuante lg:hidden fixed right-5 z-40 w-12 h-12 rounded-full bg-[#25D366] text-white grid place-items-center shadow-[0_10px_24px_-8px_rgba(37,211,102,0.7)] transition-all duration-300 ${subindo ? "bottom-[5.25rem]" : "bottom-5"}`}
    >
      <FaWhatsapp className="text-[22px]" />
    </a>
  );
};

export const Footer = () => (
  <>
    <footer className="bg-[#0B1220] text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="flex items-center gap-2.5">
              <img src="/img/logo-jz.png" alt="" aria-hidden="true" className="w-9 h-9 object-contain" />
              <span className="text-lg font-bold tracking-tight text-white">
                JZ <span className="font-normal text-slate-400">TECH</span>
              </span>
            </span>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-slate-400">
              Criamos e cuidamos de sistemas de gestão, sites e automações com IA para lojas, restaurantes, arenas e
              equipes de RH.
            </p>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-slate-400">
              Cada sistema é montado para a rotina da empresa, e quem atende o suporte é quem desenvolve. De
              Douradina-PR, com clientes no Paraná e em São Paulo.
            </p>
          </div>

          <nav aria-label="Sistemas" className="md:col-span-4">
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-slate-500">Sistemas</h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {SYSTEMS.map((s) => (
                <li key={s.name}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-slate-500">Empresa</h3>
            <ul className="mt-5 space-y-3">
              {EMPRESA.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 pb-36 lg:pb-0 border-t border-white/10 flex flex-col-reverse sm:flex-row items-center justify-between gap-5">
          <p className="text-[14px] text-slate-500">© 2026 JZ Tech — Todos os direitos reservados</p>
          <div className="flex items-center gap-6">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-2`}>
              <FaWhatsapp className="text-base" /> WhatsApp
            </a>
            <a href="https://instagram.com/jz.tech.sys" target="_blank" rel="noopener noreferrer" className={`${linkClass} inline-flex items-center gap-2`}>
              <FaInstagram className="text-base" /> @jz.tech.sys
            </a>
          </div>
        </div>
      </div>
    </footer>
    <WhatsAppFlutuante />
    <BackToTop />
  </>
);
