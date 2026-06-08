import { FaArrowUp, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleWhatsAppClick = () => {
    const phone = "554497633866";
    const msg = encodeURIComponent(
      "Olá! Acessei o site da JZ Tech e tenho interesse nos serviços de vocês."
    );
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white/70 text-sm text-center py-8 border-t border-white/10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Botão Voltar ao Topo */}
      <button
        onClick={scrollToTop}
        className="absolute top-4 right-4 glass p-3 rounded-full border border-white/10 hover:border-white/30 hover:scale-110 transition-all duration-300 group"
        title="Voltar ao topo"
      >
        <FaArrowUp className="text-white/90 group-hover:-translate-y-1 transition-transform duration-300" />
      </button>

      {/* Botão WhatsApp Flutuante */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 glass p-4 rounded-full border border-green-500 hover:border-green-500 hover:scale-110 transition-all duration-300 z-50 group"
        title="Conversar no WhatsApp"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-full"></div>
        <FaWhatsapp className="text-xl text-white/90 relative z-10" />
      </button>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <p className="mb-2 text-white/80">
          © {new Date().getFullYear()} JZ Tech — Todos os direitos reservados.
        </p>
        <p className="text-xs text-white/60">
          Desenvolvido com ❤️ pela equipe JZ Tech
        </p>
      </div>

      <style>{`
        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }
      `}</style>
    </footer>
  );
};
