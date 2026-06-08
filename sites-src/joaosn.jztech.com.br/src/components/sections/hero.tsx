import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { BinaryRain } from '@/components/binary-rain';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center py-20"
    >
      <div className="absolute inset-0">
        <BinaryRain />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/80" />
      <div className="container px-4 mx-auto relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 relative">
            <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              João Vitor
            </span>
            <span className="text-primary"> Nascimento</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Desenvolvedor Full Stack Senior em
            Douradina‑PR
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#contact">Entre em Contato</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-primary/20 hover:bg-primary/10">
              <a href="#about">
                Saiba Mais <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
