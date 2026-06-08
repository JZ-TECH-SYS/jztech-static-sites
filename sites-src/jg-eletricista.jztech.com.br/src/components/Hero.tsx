import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Carousel } from './ui/carousel';

import {
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

import foto1 from './img/foto1.webp';
import foto2 from './img/foto2.webp';
import foto3 from './img/foto3.webp';
import foto4 from './img/foto4.webp';

const images = [foto1, foto2, foto3, foto4];

export function Hero() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="home" className="pt-20">
      <Carousel className="w-full max-w-5xl mx-auto" setApi={setApi}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[60vh] w-full overflow-hidden">
                <img
                  src={image}
                  alt={`Serviço Elétrico ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-all duration-500 translate-y-0 hover:translate-y-[-8px]">
                  <h1 className="text-4xl font-bold mb-4 animate-fade-up">
                    Instalações Elétricas e Ar Condicionados em Geral
                  </h1>
                  <p className="text-lg mb-6 animate-fade-up animation-delay-100">
                    Serviços elétricos profissionais com qualidade e segurança
                  </p>
                  <Button size="lg" asChild className="animate-fade-up animation-delay-100">
                    <a href="tel:+5518998167412">
                      Faça já seu Orçamento
                    </a>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                current === index ? 'bg-white w-4' : 'bg-white/50'
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}