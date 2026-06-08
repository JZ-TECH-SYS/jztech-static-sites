import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary-foreground text-primary py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">© 2024 JG Instalações. Todos os direitos reservados.</p>
        <p className="flex items-center justify-center gap-1 text-sm">
          Feito com <Heart className="w-4 h-4 text-red-500 animate-pulse" /> por{' '}
          <a
            href="https://joaosn.grsistemas.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors underline"
          >
            joãosn
          </a>
        </p>
      </div>
    </footer>
  );
}