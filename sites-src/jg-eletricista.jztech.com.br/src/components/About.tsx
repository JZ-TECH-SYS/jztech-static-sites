import { Award, ThumbsUp, Timer } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800"
              alt="Técnico profissional"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Sobre Mim</h2>
            <p className="text-muted-foreground mb-8">
              Com mais de 15 anos de experiência no mercado, sou especialista em
              instalação e manutenção de sistemas de ar condicionado. Meu
              compromisso é oferecer soluções eficientes e duradouras para
              garantir o conforto térmico ideal para sua casa ou empresa.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Timer className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">15+ Anos</h3>
                <p className="text-sm text-muted-foreground">de Experiência</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <ThumbsUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">1000+</h3>
                <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1">Certificado</h3>
                <p className="text-sm text-muted-foreground">Profissional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}