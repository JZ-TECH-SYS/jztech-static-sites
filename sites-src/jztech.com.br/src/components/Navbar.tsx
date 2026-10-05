import { useEffect, useState } from "react";
import { MdClose, MdMenu, MdHome } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP } from "./whatsapp";

// Na mesma ordem da página.
const NAV_LINKS = [
  { href: "#clientes", label: "Clientes" },
  { href: "#sistemas", label: "Sistemas" },
  { href: "#cases", label: "Cases" },
  { href: "#ia", label: "IA" },
  { href: "#como", label: "Como trabalhamos" },
  { href: "#equipe", label: "Equipe" },
];

/* logo-jz.png = a logo-nova.png reduzida para 192px, COM fundo transparente (a
   logo-nova-96.png antiga tinha fundo branco colado e ficava um quadrado no topo) */
export const Wordmark = ({ className = "text-lg", logoClass = "w-9 h-9", claro = false }) => (
  <span className="flex items-center gap-2.5">
    <img src="/img/logo-jz.png" alt="" aria-hidden="true" className={`${logoClass} object-contain shrink-0`} />
    <span className={`${className} font-bold tracking-tight flex items-center gap-1 transition-colors ${claro ? "text-white" : "text-slate-950"}`}>
      JZ <span className={`font-normal ${claro ? "text-slate-400" : "text-slate-500"}`}>TECH</span>
    </span>
  </span>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // Sobre a abertura escura o menu fica transparente e claro, como nas landings.
  const [naAbertura, setNaAbertura] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
      const abertura = document.getElementById("inicio");
      setNaAbertura(!!abertura && abertura.getBoundingClientRect().bottom > 64);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // trava o scroll do body enquanto o menu do celular está aberto e avisa a página
  // (classe no <html>) para esconder o WhatsApp flutuante e o botão de subir
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    document.documentElement.classList.toggle("menu-aberto", isOpen);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("menu-aberto");
      removeEventListener("keydown", esc);
    };
  }, [isOpen]);

  // Seção que está na tela agora: fica marcada no menu (computador e gaveta do celular).
  const [ativa, setAtiva] = useState("#");
  useEffect(() => {
    const aoRolar = () => {
      const linha = innerHeight * 0.35;
      let atual = "#";
      for (const l of NAV_LINKS) {
        const el = document.querySelector(l.href);
        if (el && el.getBoundingClientRect().top <= linha) atual = l.href;
      }
      setAtiva(atual);
    };
    aoRolar();
    addEventListener("scroll", aoRolar, { passive: true });
    return () => removeEventListener("scroll", aoRolar);
  }, []);

  const escuro = naAbertura;
  const solid = !escuro && isScrolled;

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        solid ? "bg-white/95 backdrop-blur-xl border-slate-200/80" : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a href="#" aria-label="JZ Tech — início" className="hover:opacity-80 transition-opacity">
          <Wordmark className="text-lg" claro={escuro} />
        </a>

        <nav className={`hidden lg:flex items-center gap-8 text-[15px] font-medium transition-colors ${escuro ? "text-slate-300" : "text-slate-600"}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} aria-current={ativa === link.href ? "true" : undefined}
              className={`nav-link py-1 transition-colors ${ativa === link.href ? (escuro ? "text-white" : "text-brand-700") : ""} ${escuro ? "hover:text-white" : "hover:text-slate-950"}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            className={`lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors ${escuro ? "text-white hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"}`}
          >
            {isOpen ? <MdClose className="text-xl" /> : <MdMenu className="text-xl" />}
          </button>
        </div>
      </div>


    </header>
      {/* Menu do celular: gaveta pela direita, como nas landings */}
      <div
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
        className={`lg:hidden fixed inset-0 z-[60] bg-slate-950/50 backdrop-blur-[2px] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />
      <nav
        aria-label="Menu"
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-[61] w-[288px] max-w-[85vw] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="h-16 px-5 flex items-center justify-between border-b border-slate-100">
          <Wordmark className="text-base" logoClass="w-8 h-8" />
          <button type="button" onClick={() => setIsOpen(false)} aria-label="Fechar menu" tabIndex={isOpen ? 0 : -1} className="w-10 h-10 rounded-full grid place-items-center text-slate-700 hover:bg-slate-100">
            <MdClose className="text-xl" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col">
          {[{ href: "#", label: "Início" }, ...NAV_LINKS].map((link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
              aria-current={ativa === link.href ? "true" : undefined}
              className={`relative flex items-center gap-3 px-3 py-3.5 rounded-xl text-base transition-colors ${
                ativa === link.href ? "bg-brand-50 text-brand-700 font-semibold" : "font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-700"
              }`}
            >
              {ativa === link.href && <span className="absolute left-0 top-2.5 bottom-2.5 w-[3px] rounded-full bg-brand-600" />}
              {link.href === "#" && <MdHome className="text-lg text-brand-600" />}
              {link.label}
            </a>
          ))}
        </div>
        <div className="p-4 border-t border-slate-100">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isOpen ? 0 : -1}
            className="flex items-center justify-center gap-2 h-12 rounded-full bg-[#25D366] text-white font-semibold hover:brightness-95 transition"
          >
            <FaWhatsapp className="text-lg" /> Falar no WhatsApp
          </a>
        </div>
      </nav>
    </>
  );
};
