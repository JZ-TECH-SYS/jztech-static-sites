import {
  Fan,
  Hammer,
  Sparkles,
  ThermometerSun,
  Timer,
  Wrench,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const services = [
  {
    icon: <Fan className="w-6 h-6" />,
    title: 'Instalação',
    description:
      'Instalação profissional de ar condicionado split e janela, com garantia de serviço.',
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Manutenção Preventiva',
    description:
      'Serviços regulares para manter seu equipamento funcionando com eficiência.',
  },
  {
    icon: <Hammer className="w-6 h-6" />,
    title: 'Manutenção Corretiva',
    description:
      'Diagnóstico e reparo de problemas em sistemas de ar condicionado.',
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Limpeza e Higienização',
    description:
      'Limpeza completa do sistema para melhor qualidade do ar e eficiência.',
  },
  {
    icon: <ThermometerSun className="w-6 h-6" />,
    title: 'Análise de Eficiência',
    description:
      'Avaliação do desempenho do seu sistema para otimizar o consumo de energia.',
  },
  {
    icon: <Timer className="w-6 h-6" />,
    title: 'Atendimento Emergencial',
    description:
      'Serviço rápido para resolver problemas urgentes com seu ar condicionado.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}