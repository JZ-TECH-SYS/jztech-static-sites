import { useEffect, useState } from "react";
import {
  CasesSection,
  ClientsSection,
  Footer,
  HeroSection,
  IaSection,
  Navbar,
  StepsSection,
  SystemsSection,
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

/* Fundo da página: o brilho da abertura acompanha a rolagem e muda de tom
   conforme a seção que está na tela (azul, ciano, violeta). */
const ZONAS: Record<string, string> = {
  clientes: "azul",
  sistemas: "ciano",
  cases: "ciano",
  ia: "violeta",
  como: "violeta",
  equipe: "azul",
};

function useZonaDoFundo() {
  const [zona, setZona] = useState("azul");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setZona(ZONAS[e.target.id] ?? "azul");
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    Object.keys(ZONAS).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return zona;
}

function App() {
  const zona = useZonaDoFundo();
  useRevealOnScroll();

  return (
    <div className="font-sans bg-[#FAFAFA] text-slate-900 antialiased selection:bg-brand-100 selection:text-brand-900">
      <div className="fundo" data-zona={zona} aria-hidden="true">
        <span className="fundo-azul" />
        <span className="fundo-ciano" />
        <span className="fundo-violeta" />
      </div>
      <Navbar />
      <main className="relative z-[1] w-full">
        <HeroSection />
        <ClientsSection />
        <SystemsSection />
        <CasesSection />
        <IaSection />
        <StepsSection />
        <TeamSection />
      </main>
      <div className="relative z-[1]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
