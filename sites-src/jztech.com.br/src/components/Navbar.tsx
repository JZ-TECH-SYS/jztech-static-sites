import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Altura do navbar
      const elementPosition = element.offsetTop - offset;

      // Scroll suave mais fluido
      const startPosition = window.pageYOffset;
      const distance = elementPosition - startPosition;
      const duration = Math.abs(distance) > 1000 ? 1200 : 800; // Duração baseada na distância
      let start: number | null = null;

      function animation(currentTime: number) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      // Função de easing para movimento mais suave
      function ease(t: number, b: number, c: number, d: number): number {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);

      // Fechar menu mobile se estiver aberto
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-dark shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-lg rotate-45"></div>
              <div className="absolute inset-1 bg-slate-900 rounded-lg rotate-45 flex items-center justify-center">
                <span className="text-white font-bold text-lg lg:text-xl -rotate-45">
                  JZ
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xl lg:text-2xl font-bold text-gradient leading-none -mb-1">
                JZ-TECH
              </h1>
              <p className="text-[9px] lg:text-[10px] text-white/50 tracking-[0.2em] font-medium uppercase">
                SOFTWARE DEVELOPMENT
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-white/80 hover:text-white font-medium transition-all duration-300 hover:scale-105 hover:text-gradient relative group"
            >
              Sobre nós
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white/80 hover:text-white font-medium transition-all duration-300 hover:scale-105 hover:text-gradient relative group"
            >
              Projetos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-white/80 hover:text-white font-medium transition-all duration-300 hover:scale-105 hover:text-gradient relative group"
            >
              Equipe
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-primary text-sm hover:scale-105 transition-all duration-300"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg glass transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-1"
                    : "-translate-y-1"
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-1"
                    : "translate-y-1"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 space-y-3 glass-dark rounded-lg mt-2 mb-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="block w-full text-left px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200"
            >
              Equipe
            </button>
            <div className="px-4 pt-2">
              <button
                onClick={() => scrollToSection("contact")}
                className="btn-primary w-full text-sm"
              >
                Contato
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
