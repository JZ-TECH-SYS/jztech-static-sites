import { useEffect } from "react";
import {
  AboutUsSection,
  ContactSection,
  Footer,
  HeroSection,
  Navbar,
  ShowcaseSection,
  StatsSection,
  TeamSection,
} from "./components";

/* Revela tudo que tem [data-reveal] quando entra na viewport.
   Um observer so para a pagina inteira; o conteudo e estatico,
   entao uma varredura na montagem cobre todos os elementos. */
function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      // sem rootMargin negativo: no fim da pagina nao da mais pra rolar, e o
      // que cai na ultima faixa da viewport (rodape) nunca revelaria
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function App() {
  useRevealOnScroll();

  return (
    <div className="font-sans bg-[#FAFAFA] text-slate-900 antialiased selection:bg-brand-100 selection:text-brand-900">
      <Navbar />
      <main className="w-full pt-20">
        <HeroSection />
        <AboutUsSection />
        <StatsSection />
        <ShowcaseSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
