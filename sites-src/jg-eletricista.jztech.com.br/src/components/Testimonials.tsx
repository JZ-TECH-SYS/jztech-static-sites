import { Star } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from './ui/card';

const testimonials = [
  {
    name: 'João Silva',
    role: 'Proprietário de Restaurante',
    content:
      'Excelente serviço! Resolveu o problema do ar condicionado do meu restaurante rapidamente e com muita qualidade.',
    rating: 5,
  },
  {
    name: 'Maria Santos',
    role: 'Moradora',
    content:
      'Muito profissional e pontual. Fez a instalação do ar condicionado na minha casa com perfeição.',
    rating: 5,
  },
  {
    name: 'Pedro Oliveira',
    role: 'Gerente Comercial',
    content:
      'Ótimo atendimento e preço justo. Recomendo para quem precisa de serviços de qualidade em ar condicionado.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          O que nossos clientes dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardHeader>
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{testimonial.content}</p>
              </CardContent>
              <CardFooter>
                <div>
                  <p className="font-semibold text-black">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}