import { FaWhatsapp } from "react-icons/fa";
import { Wordmark } from "./Navbar";

export const Footer = () => (
  <>
    <footer className="bg-white border-t border-slate-200 py-12">
      <div data-reveal className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Wordmark className="text-base" logoClass="w-8 h-8" />
        <div className="text-xs text-slate-500 text-center sm:text-right">
          <p>© {new Date().getFullYear()} JZ Tech — Todos os direitos reservados.</p>
          <p className="text-slate-400 mt-1">
            Desenvolvido com carinho pela equipe JZ Tech.
          </p>
        </div>
      </div>
    </footer>

    <a
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center focus:outline-none"
      href={`https://wa.me/5544997633866?text=${encodeURIComponent(
        "Olá! Acessei o site da JZ Tech e tenho interesse no serviço de vocês."
      )}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  </>
);
