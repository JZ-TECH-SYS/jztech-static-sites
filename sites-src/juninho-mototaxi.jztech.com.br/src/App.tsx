import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <footer className="bg-black text-white py-8 border-t border-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 text-lg">&copy; {new Date().getFullYear()} Juninho MotoTáxi. Todos os direitos reservados.</p>
          <div className="flex items-center justify-center gap-2 text-sm">
            <span>Desenvolvido com</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse fill-current" />
            <span>por</span>
            <a
              href="https://joaosn.grsistemas.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-400 transition-colors font-semibold"
            >
              joãosn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;