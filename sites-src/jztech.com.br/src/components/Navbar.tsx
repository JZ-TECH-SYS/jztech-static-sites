import { useEffect, useState } from "react";
import { MdArrowForward, MdClose, MdMenu } from "react-icons/md";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre nós" },
  { href: "#servicos", label: "Serviços" },
  { href: "#resultados", label: "Resultados" },
  { href: "#projetos", label: "Projetos" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
];

/* logo-nova-96.png e a logo-nova.png redimensionada: a original tem 370KB,
   pesado demais para um logo de 36px no topo de toda pagina */
export const Wordmark = ({ className = "text-lg", logoClass = "w-9 h-9" }) => (
  <span className="flex items-center gap-2.5">
    <img
      src="/img/logo-nova-96.png"
      alt=""
      aria-hidden="true"
      className={`${logoClass} object-contain shrink-0`}
    />
    <span
      className={`${className} font-bold tracking-tight text-slate-950 flex items-center gap-1`}
    >
      JZ <span className="text-slate-500 font-normal">TECH</span>
    </span>
  </span>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // trava o scroll do body enquanto o menu mobile esta aberto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b transition-all duration-300 ${
        isScrolled
          ? "border-slate-200/80 shadow-sm shadow-slate-200/60"
          : "border-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-16" : "h-20"
        }`}
      >
        <a
          className="flex items-center focus:outline-none hover:opacity-80 transition-opacity"
          href="#"
          aria-label="JZ Tech — início"
        >
          <Wordmark className="text-lg" />
        </a>

        {/* Navegação desktop */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className="relative py-1 transition-colors hover:text-brand-700 after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-brand-700 after:transition-transform after:duration-300 hover:after:scale-x-100"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-brand-700 text-white text-sm font-medium hover:bg-brand-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
            href="#contato"
          >
            <span>Contato</span>
            <MdArrowForward className="text-base ml-1 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            className="lg:hidden w-10 h-10 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:border-brand-500 hover:text-brand-700 active:scale-95 transition-all"
          >
            {isOpen ? <MdClose className="text-xl" /> : <MdMenu className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Navegação mobile */}
      <nav
        className={`lg:hidden overflow-hidden border-slate-200/80 bg-white/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 ease-out ${
          isOpen ? "max-h-96 opacity-100 border-t" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
              className="py-3 text-sm font-medium text-slate-700 border-b border-slate-100 last:border-0 hover:text-brand-700 hover:translate-x-1 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
