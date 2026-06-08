import { useState, useEffect } from 'react';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    const phone = "554497633866";
    const msg = encodeURIComponent(
      "Olá! Acessei o site da JZ Tech e tenho interesse no serviço de vocês."
    );
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80; // Altura do navbar
      const elementPosition = element.offsetTop - offset;
      
      // Scroll suave mais fluido
      const startPosition = window.pageYOffset;
      const distance = elementPosition - startPosition;
      const duration = Math.abs(distance) > 1000 ? 1200 : 800;
      let start: number | null = null;

      function animation(currentTime: number) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t: number, b: number, c: number, d: number): number {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className={`text-center lg:text-left space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-white/20 text-sm font-medium text-white/90">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Disponível para novos projetos
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-white">Transformamos</span>
                <span className="block text-gradient">ideias em</span>
                <span className="block text-white">soluções digitais</span>
              </h1>
              
              <p className="text-xl text-white/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Desenvolvemos software moderno e escalável que acelera o crescimento do seu negócio. 
                Da concepção ao deploy, criamos experiências digitais excepcionais.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleWhatsAppClick}
                className="btn-primary group flex items-center justify-center space-x-2"
              >
                <span>Iniciar Projeto</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button
                onClick={scrollToContact}
                className="btn-secondary group flex items-center justify-center space-x-2"
              >
                <span>Ver Portfólio</span>
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">15+</div>
                <div className="text-sm text-white/60">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">3+</div>
                <div className="text-sm text-white/60">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">100%</div>
                <div className="text-sm text-white/60">Dedicação</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative max-w-lg mx-auto">
              
              {/* Main Card */}
              <div className="glass rounded-2xl p-8 border border-white/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                
                <div className="relative z-10 space-y-6">
                  {/* Code Preview */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-white/60 ml-2">app.tsx</span>
                    </div>
                    
                    <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm">
                      <div className="text-blue-400">const</div>
                      <div className="text-white"> solution = </div>
                      <div className="text-green-400">createApp</div>
                      <div className="text-white">(</div>
                      <div className="text-orange-400 ml-4">{`{`}</div>
                      <div className="text-white ml-8">innovation: </div>
                      <div className="text-green-400">true</div>
                      <div className="text-white">,</div>
                      <div className="text-white ml-8">quality: </div>
                      <div className="text-green-400">'premium'</div>
                      <div className="text-orange-400 ml-4">{`}`}</div>
                      <div className="text-white">)</div>
                    </div>
                  </div>

                  {/* Tech Stack Icons */}
                  <div className="grid grid-cols-4 gap-4">
                    {['React', 'Node', 'PHP', 'Google Cloud'].map((tech) => (
                      <div key={tech} className="glass rounded-lg p-3 text-center border border-white/10 hover:border-white/30 transition-colors">
                        <div className="w-8 h-8 mx-auto mb-2 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-xs">
                          {tech[0]}
                        </div>
                        <div className="text-xs text-white/70">{tech}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass rounded-xl p-4 border border-white/20 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-white/80">Online</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 glass rounded-xl p-4 border border-white/20 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm text-white/80">5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

