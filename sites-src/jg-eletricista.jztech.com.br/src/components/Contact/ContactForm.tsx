import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `⚡ *Nova Solicitação de Orçamento* ⚡\n\n` +
      `Olá João Gabriel!\n\n` +
      `👤 *Dados do Cliente:*\n` +
      `📝 Nome: ${formData.name}\n` +
      `📱 Telefone: ${formData.phone}\n\n` +
      `💬 *Mensagem:*\n${formData.message}\n\n` +
      `🔧 _Enviado através do seu site_`;
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5518998167412&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <Input 
          placeholder="Nome completo" 
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
      </div>
      <div>
        <Input 
          type="tel" 
          placeholder="Telefone"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          required
        />
      </div>
      <div>
        <Textarea
          placeholder="Digite sua mensagem aqui..."
          className="min-h-[150px]"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          required
        />
      </div>
      <Button 
        type="submit" 
        className="w-full group hover:scale-105 transition-transform duration-200"
      >
        Enviar MSG 
        <MessageCircle className="w-4 h-4 ml-2 group-hover:animate-bounce" />
      </Button>
    </form>
  );
}