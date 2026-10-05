import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

/* frases tiradas do titulo (h1) e da descricao de cada landing no ar (02/10/2026) */
export const SYSTEMS = [
  { name: "ClickJoias", text: "Sua loja inteira num sistema só: balcão e site, estoque peça por peça, nota fiscal, crediário e financeiro.", url: "https://click-joias.jztech.com.br/home", color: "#b45309" },
  { name: "ClickExpress", text: "Pedidos, delivery, notas fiscais, estoque e financeiro do seu negócio, no celular e no computador.", url: "https://clickexpress.jztech.com.br/home", color: "#1976d2" },
  { name: "JZ TECH ZAP", text: "O WhatsApp da empresa em equipe: vários atendentes, campanhas e automação num painel só.", url: "https://web-zap.jztech.com.br/", color: "#22c55e" },
  { name: "CobraFácil", text: "Cobrança automática pelo WhatsApp: lembrete antes do vencimento, aviso no dia e cobrança do atraso, com a chave PIX.", url: "https://cobrafacil.jztech.com.br/home", color: "#059669" },
  { name: "ClickReserva", text: "Reserva de quadra pelo link da sua arena: o jogador escolhe o horário e paga por PIX ou cartão, sem mensalidade para a arena.", url: "https://clickreservas.jztech.com.br/", color: "#16a34a" },
  { name: "JZ Tech KYC", text: "Confirme quem é o seu cliente antes de ele assinar: selfie comparada com o documento, prova de vida e assinatura pelo celular.", url: "https://jztechkyc.jztech.com.br/home", color: "#4f46e5" },
  { name: "ClickRH", text: "Gestão de pessoas do jeito simples: treinamento, avaliação, PDI, documentos e relatórios num só lugar.", url: "https://click-rh.jztech.com.br/home", color: "#f59e0b" },
  { name: "Ponto-Check", text: "O ponto da sua equipe sem papel e sem planilha: batida pelo navegador, banco de horas e relatórios.", url: "https://pontocheck.jztech.com.br/home", color: "#0f4c81" },
  { name: "ClickCartaz", text: "Cartazes de oferta e encartes com as cores da sua loja, prontos para imprimir ou postar.", url: "https://click-cartaz.jztech.com.br/home", color: "#ea580c" },
  { name: "Ouvidoria", text: "Canal de denúncias e ouvidoria anônimo, com a marca da sua empresa e acompanhamento dos prazos.", url: "https://ouvidoria.jztech.com.br/home", color: "#7c3aed" },
  { name: "HubNotas", text: "Notas fiscais enviadas ao cliente por e-mail e WhatsApp, guardadas na nuvem, com portal para ele baixar.", url: "https://hubnotas.jztech.com.br/home", color: "#0284c7" },
  { name: "ZeroPapel", text: "Documentos organizados por pessoa e enviados pelo WhatsApp ou e-mail, com busca e envio agendado.", url: "https://zero-papel.jztech.com.br/home", color: "#0d9488" },
];

/* Arquivo de cada sistema: a abertura da landing (public/img/sistemas/telas, a mesma página que o
   cartão abre) e a logo da tela de entrada (public/img/sistemas). */
const TELA: Record<string, string> = {
  ClickJoias: "clickjoias", ClickExpress: "clickexpress", "JZ TECH ZAP": "zap", "CobraFácil": "cobrafacil",
  ClickReserva: "clickreserva", "JZ Tech KYC": "kyc", ClickRH: "clickrh", "Ponto-Check": "pontocheck",
  ClickCartaz: "clickcartaz", Ouvidoria: "ouvidoria", HubNotas: "hubnotas", ZeroPapel: "zeropapel",
};

/* No celular a vitrine é um carrossel INFINITO: a lista vem três vezes e a pessoa fica sempre
   na do meio — ao chegar numa ponta, o trilho pula, sem animação, para o mesmo cartão da cópia
   do meio. Passa sozinho de um em um, para quando a pessoa arrasta ou toca, e as bolinhas
   mostram onde está e levam ao cartão. Do tablet para cima é grade e as cópias somem. */
function useCarrossel(total: number) {
  const trilho = useRef<HTMLDivElement>(null);
  const [atual, setAtual] = useState(total);
  const atualRef = useRef(total);
  atualRef.current = atual;
  const pausaAte = useRef(0);

  const passo = () => {
    const el = trilho.current;
    const a = el?.children[0] as HTMLElement | undefined, b = el?.children[1] as HTMLElement | undefined;
    return a && b ? b.offsetLeft - a.offsetLeft : 1;
  };
  const irPara = (i: number, suave = true) => {
    const el = trilho.current;
    if (el) el.scrollTo({ left: i * passo(), behavior: suave ? "smooth" : "auto" });
  };

  useEffect(() => {
    const el = trilho.current;
    if (!el) return;
    const comecar = () => { if (window.innerWidth < 640) irPara(total, false); };
    comecar();
    let fim = 0;
    const aoRolar = () => {
      const i = Math.round(el.scrollLeft / passo());
      setAtual(i);
      window.clearTimeout(fim);
      fim = window.setTimeout(() => {
        // passou para uma das cópias: volta para a do meio no mesmo cartão
        if (i < total) irPara(i + total, false);
        else if (i >= total * 2) irPara(i - total, false);
      }, 140);
    };
    const parar = () => { pausaAte.current = Date.now() + 7000; };
    el.addEventListener("scroll", aoRolar, { passive: true });
    el.addEventListener("pointerdown", parar);
    el.addEventListener("touchstart", parar, { passive: true });
    addEventListener("resize", comecar);
    return () => {
      el.removeEventListener("scroll", aoRolar);
      el.removeEventListener("pointerdown", parar);
      el.removeEventListener("touchstart", parar);
      removeEventListener("resize", comecar);
    };
  }, [total]);

  useEffect(() => {
    const t = window.setInterval(() => {
      if (window.innerWidth >= 640 || Date.now() < pausaAte.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const r = trilho.current?.getBoundingClientRect();
      if (!r || r.bottom < 0 || r.top > innerHeight) return;
      irPara(atualRef.current + 1);
    }, 3500);
    return () => window.clearInterval(t);
  }, [total]);

  return {
    trilho,
    atual: ((atual % total) + total) % total,
    irPara: (i: number) => { pausaAte.current = Date.now() + 7000; irPara(total + i); },
  };
}

export const SystemsSection = () => {
  const { trilho, atual, irPara } = useCarrossel(SYSTEMS.length);
  return (
  <section id="sistemas" className="py-24 sm:py-32">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div data-reveal className="max-w-2xl mb-14">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950">Nossos sistemas</h2>
        <p className="mt-4 text-lg text-slate-600">
          Cada um resolve uma parte do dia a dia da empresa. Também fazemos sites, apps e integrações sob medida.
        </p>
      </div>
      {/* no celular vira carrossel de lado; do tablet para cima, grade */}
      <div ref={trilho} className="-mx-4 px-4 sm:mx-0 sm:px-0 flex sm:grid gap-3 sm:grid-cols-2 lg:grid-cols-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scroll-px-4 pb-3 sm:pb-0 [scrollbar-width:none]">
        {[...SYSTEMS, ...SYSTEMS, ...SYSTEMS].map((s, k) => { const i = k % SYSTEMS.length; const copia = k < SYSTEMS.length || k >= SYSTEMS.length * 2; return (
          <a
            key={k}
            aria-hidden={copia || undefined}
            tabIndex={copia ? -1 : undefined}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            style={{ "--c": s.color, transitionDelay: `${(i % 4) * 60}ms` } as CSSProperties}
            className={`system-card group flex flex-col rounded-2xl bg-white border border-slate-200/80 overflow-hidden shrink-0 w-[80%] sm:w-auto snap-start ${copia ? "sm:hidden" : ""}`}
          >
            <span className="block aspect-[16/9] overflow-hidden bg-slate-100 border-b border-slate-200/80">
              <img
                src={`/img/sistemas/telas/${TELA[s.name]}.jpg`}
                alt={`Tela do ${s.name}`}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </span>
            <span className="flex flex-col flex-1 p-5">
            <h3 className="flex items-center gap-2.5 text-[17px] font-semibold text-slate-950">
              <img
                src={`/img/sistemas/${TELA[s.name]}.png`}
                alt=""
                className={`w-7 h-7 rounded-lg shrink-0 ${TELA[s.name] === "zeropapel" ? "object-contain bg-white border border-slate-200 p-0.5" : "object-cover"}`}
              />
              {s.name}
            </h3>
            <p className="mt-2 text-[14px] text-slate-600 leading-relaxed flex-1">{s.text}</p>
            <span className="mt-4 text-[13px] font-medium text-slate-900 group-hover:text-[var(--c)] transition-colors">
              Ver o sistema →
            </span>
            </span>
          </a>
        ); })}
      </div>
      <div className="sm:hidden mt-4 flex justify-center gap-1.5">
        {SYSTEMS.map((s, i) => (
          <button
            key={s.name}
            type="button"
            aria-label={`Ver ${s.name}`}
            onClick={() => irPara(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i === atual ? "w-6 bg-brand-600" : "w-2 bg-slate-300"}`}
          />
        ))}
      </div>
    </div>
  </section>
  );
};
