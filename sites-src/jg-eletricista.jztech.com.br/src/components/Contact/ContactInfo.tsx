import { Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';

export function ContactInfo() {
  const sendDirectWhatsApp = () => {
    const message = `⚡ *Olá João Gabriel!* ⚡\n\n` +
      `Gostaria de solicitar um orçamento para seus serviços.\n\n` + 
      `Aguardo seu retorno! 🤝\n\n` +
      `🔧 _Enviado através do seu site_`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=5518998167412&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
      <p className="text-muted-foreground mb-8">
        Precisa dos nossos serviços? Entre em contato para um orçamento sem
        compromisso.
      </p>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <Phone className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold">Telefone</p>
            <a 
              href="tel:+5518998167412" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              (18) 99816-7412
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-semibold">Localização</p>
            <p className="text-muted-foreground">
              Pirapozinho - SP
            </p>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button
            onClick={sendDirectWhatsApp}
            className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors transform hover:scale-110"
            title="WhatsApp"
          >
            <MessageCircle className="w-5 h-5 text-primary" />
          </button>
          <a
            href="https://www.instagram.com/gabriel.jaum?igsh=azB3bWIzbTR5ZXA="
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors transform hover:scale-110"
            title="Instagram"
          >
            <Instagram className="w-5 h-5 text-primary" />
          </a>
        </div>
      </div>
    </div>
  );
}