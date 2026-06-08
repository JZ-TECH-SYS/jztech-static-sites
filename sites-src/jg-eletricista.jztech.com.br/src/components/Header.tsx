import { Menu, Phone, X, Zap, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sendWhatsAppMessage = () => {
    const message = `⚡ *Olá João Gabriel!* ⚡\n\n` +
      `Gostaria de solicitar um orçamento para seus serviços.\n\n` + 
      `Aguardo seu retorno! 🤝\n\n` +
      `🔧 _Enviado através do seu site_`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=5518998167412&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary animate-lightning" />
            <div className="text-2xl font-bold text-primary">JG Instalações</div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-primary transition-colors">Início</a>
            <a href="#about" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#services" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Depoimentos</a>
            <ThemeToggle />
            <Button 
              variant="outline"
              className="group"
              onClick={sendWhatsAppMessage}
            >
              <MessageCircle className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Orçamento
            </Button>
            <Button 
             asChild
             onClick={sendWhatsAppMessage} 
             >
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (18) 99816-7412
              </p>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4">
            <a href="#home" className="hover:text-primary transition-colors">Início</a>
            <a href="#about" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#services" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Depoimentos</a>
            <Button 
              variant="outline"
              className="group"
              onClick={sendWhatsAppMessage}
            >
              <MessageCircle className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Solicitar Orçamento
            </Button>
            <Button 
              onClick={sendWhatsAppMessage}
              asChild>
              <p className="flex items-center gap-2 justify-center">
                <Phone className="w-4 h-4" />
                (18) 99816-7412
              </p>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}