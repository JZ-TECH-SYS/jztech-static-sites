import {
  Droplets,
  Instagram,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';
import Background from './components/Background';
import BrandHeader from './components/BrandHeader';
import Footer from './components/Footer';
import LinkCard from './components/LinkCard';

const brandName = 'Scooby Aqu\u00e1rios';
const brandSubtitle = 'Linha completa para montagem e cuidados do seu aqu\u00e1rio';

const websiteUrl = 'https://jztech.com.br/';

const whatsappNumber = '5519974046105';
const whatsappMessage = 'Ol\u00e1! Gostaria de saber mais sobre os produtos da Scooby Aqu\u00e1rios.';
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const highlights = [
  {
    title: 'Cuidados completos',
    description: 'Orienta\u00e7\u00e3o para \u00e1gua cristalina e bem-estar dos peixes.',
    icon: Droplets,
    accent: 'bg-sky-100 text-sky-700',
  },
  {
    title: 'Entrega segura',
    description: 'Produtos embalados, rastreados e com suporte p\u00f3s-venda.',
    icon: ShieldCheck,
    accent: 'bg-emerald-100 text-emerald-700',
  },
  {
    title: 'Curadoria premium',
    description: 'Marcas confi\u00e1veis e novidades selecionadas a dedo.',
    icon: Sparkles,
    accent: 'bg-indigo-100 text-indigo-700',
  },
];

const links = [
  {
    title: 'Loja online',
    description: 'Cat\u00e1logo atualizado, promo\u00e7\u00f5es e kits sob medida para o seu aqu\u00e1rio.',
    url: 'https://click-joias.jztech.com.br/pedido/scooby_aquarios',
    icon: ShoppingBag,
    pill: 'Cat\u00e1logo',
    gradient: 'from-sky-400 via-sky-500 to-blue-600',
  },
  {
    title: 'WhatsApp',
    description: 'Atendimento r\u00e1pido, or\u00e7amento e tira-d\u00favidas direto com a equipe.',
    url: whatsappUrl,
    icon: MessageCircle,
    pill: 'Atendimento',
    gradient: 'from-emerald-400 via-teal-500 to-emerald-600',
  },
  {
    title: 'Instagram',
    description: 'Acompanhe novidades, inspira\u00e7\u00f5es e bastidores do nosso dia a dia.',
    url: 'https://www.instagram.com/paulo_scooby_aquario/',
    icon: Instagram,
    pill: 'Social',
    gradient: 'from-fuchsia-500 via-rose-500 to-amber-500',
  },
];

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background />

      <main className="relative z-10 px-4 py-10 md:py-16">
        <div className="mx-auto w-full max-w-5xl space-y-8">
          <div className="glass-panel rounded-[28px] overflow-hidden shadow-2xl">
            <div className="relative overflow-hidden bg-gradient-to-br from-white/92 via-white/86 to-white/70">
              <div className="absolute -left-10 top-6 h-28 w-28 rounded-full bg-sky-100/60 blur-3xl" />
              <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-emerald-100/60 blur-3xl" />
              <div className="absolute left-16 bottom-4 h-16 w-16 rounded-full bg-sky-200/50 blur-2xl" />

              <div className="relative px-6 py-8 sm:px-10 sm:py-10">
                <BrandHeader
                  brand={brandName}
                  subtitle={brandSubtitle}
                />
              </div>
            </div>

            <div className="space-y-6 px-6 pb-8 pt-3 sm:px-10 sm:pb-10">
              <div className="grid gap-3 sm:grid-cols-2">
                {highlights.map(({ title, description, icon: Icon, accent }) => (
                  <div
                    key={title}
                    className="flex items-start gap-3 rounded-2xl bg-gradient-to-br from-white/92 to-white/80 p-4 shadow-inner ring-1 ring-white/70 transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${accent} ring-1 ring-white/70`}>
                      <Icon className="h-5 w-5" strokeWidth={2.4} />
                    </span>
                    <div className="leading-snug">
                      <p className="text-sm font-semibold text-slate-900">{title}</p>
                      <p className="text-xs text-slate-600">{description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-white/82 p-5 text-center shadow-sm ring-1 ring-white/70">
                <div className="flex flex-col items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                    <PhoneCall className="h-5 w-5" strokeWidth={2.4} />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                      Nossos canais
                    </p>
                    <p className="text-sm text-slate-700 sm:text-base">Escolha como prefere falar com a gente.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {links.map((link) => (
                  <LinkCard key={link.title} {...link} />
                ))}
              </div>

              <Footer brand={brandName} year={currentYear} websiteUrl={websiteUrl} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
