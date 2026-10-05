import { useEffect, useRef, useState } from "react";
import { MdArrowDownward } from "react-icons/md";
import { criarCena, hex, type Cena } from "./abertura/CenaParticulas";

/* Abertura em três atos, presa na tela enquanto a pessoa rola — o mesmo padrão
   das landings dos sistemas: a logo JZ se forma (quem somos), se desfaz em
   papel, planilha e mensagem espalhados (o problema) e se organiza no hub JZ
   ligado aos 12 sistemas da vitrine (a solução). No fim, a câmera atravessa as
   partículas e a página segue. Sem WebGL, fica o texto sobre o fundo escuro. */
const ATOS = [
  { cor: ["#60A5FA", "#2563EB"] },
  {
    cor: ["#FB7185", "#E11D48"],
    titulo: "Caderno, planilha e WhatsApp. O dia passa e o trabalho não.",
    texto: "Pedido anotado no papel, cobrança de cabeça, nota perdida no e-mail e a equipe perguntando tudo no grupo.",
    itens: ["Retrabalho todo dia", "Informação espalhada", "Cliente esperando resposta"],
  },
  {
    cor: ["#22D3EE", "#0891B2"],
    titulo: "Um sistema para cada parte da sua empresa.",
    texto: "Vender, cobrar, atender, emitir nota, cuidar da equipe: 12 sistemas feitos por nós, com IA onde ela ajuda de verdade.",
    itens: ["Feitos e mantidos pela JZ Tech", "Suporte direto com quem fez", "1 mês de teste grátis"],
  },
] as const;

/* Os 12 sistemas da vitrine, na ordem dos círculos do hub (ato 3), com a logo da tela de login de
   cada um (public/img/sistemas). Cor = a do contorno do círculo. */
const SISTEMAS = [
  { nome: "ClickJoias", logo: "clickjoias", cor: "#3B82F6" },
  { nome: "ClickExpress", logo: "clickexpress", cor: "#2DD4BF" },
  { nome: "JZ TECH ZAP", logo: "zap", cor: "#8B5CF6" },
  { nome: "CobraFácil", logo: "cobrafacil", cor: "#34D399" },
  { nome: "ClickReserva", logo: "clickreserva", cor: "#2563EB" },
  { nome: "JZ Tech KYC", logo: "kyc", cor: "#F59E0B" },
  { nome: "ClickRH", logo: "clickrh", cor: "#F59E0B" },
  { nome: "Ponto-Check", logo: "pontocheck", cor: "#3B82F6" },
  { nome: "ClickCartaz", logo: "clickcartaz", cor: "#FBBF24" },
  { nome: "Ouvidoria", logo: "ouvidoria", cor: "#1E40AF" },
  { nome: "HubNotas", logo: "hubnotas", cor: "#6A5BFF" },
  { nome: "ZeroPapel", logo: "zeropapel", cor: "#0EA5E9", contido: true },
];

/* Etiquetas da bagunça (ato 2): uma em cada folha, planilha e balão. */
const BAGUNCA: [number, string][] = [
  [0, "PIX?"], [1, "pagou ou não?"], [2, "estoque: ???"], [3, "R$ ???"], [4, "vence hoje!"], [5, "pedido #12"],
  [6, "anotei no caderno"], [7, "cliente esperando"], [8, "cadê a nota?"], [9, "quem atendeu?"], [10, "manda de novo"],
  [11, "planilha_final_v3"],
];

const NUMEROS = [
  { valor: "12", rotulo: "sistemas próprios" },
  { valor: "IA", rotulo: "nos nossos sistemas" },
  { valor: "1 mês", rotulo: "de teste grátis" },
];

const reduzMovimento = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const HeroSection = () => {
  const palco = useRef<HTMLElement>(null);
  const tela = useRef<HTMLCanvasElement>(null);
  const cena = useRef<Cena | null>(null);
  const [ato, setAto] = useState(0);
  const [saida, setSaida] = useState(0);
  const [reduz] = useState(reduzMovimento);
  const marcasSistemas = useRef<(HTMLElement | null)[]>([]);
  const marcasBagunca = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!tela.current) return;
    cena.current = criarCena(tela.current, reduz);
    cena.current?.marcar("sistemas", marcasSistemas.current);
    const porIndice: (HTMLElement | null)[] = [];
    BAGUNCA.forEach(([k], i) => { porIndice[k] = marcasBagunca.current[i]; });
    cena.current?.marcar("bagunca", porIndice);
    return () => cena.current?.desmontar();
  }, [reduz]);

  useEffect(() => {
    const aoRolar = () => {
      const el = palco.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / (r.height - innerHeight)));
      const a = p < 0.3 ? 0 : p < 0.62 ? 1 : 2;
      setAto(a);
      const fim = p > 0.86 ? (p - 0.86) / 0.14 : 0;
      setSaida(fim);
      const c = cena.current;
      if (!c) return;
      c.alvo(p < 0.2 ? 1 : p < 0.34 ? 1 + (p - 0.2) / 0.14 : p < 0.52 ? 2 : p < 0.66 ? 2 + (p - 0.52) / 0.14 : 3);
      c.cor(hex(ATOS[a].cor[0]), hex(ATOS[a].cor[1]));
      c.mergulho(fim);
    };
    aoRolar();
    addEventListener("scroll", aoRolar, { passive: true });
    addEventListener("resize", aoRolar);
    return () => {
      removeEventListener("scroll", aoRolar);
      removeEventListener("resize", aoRolar);
    };
  }, []);

  const luz = ATOS[ato].cor[0];
  const bloco = (i: number) =>
    `absolute inset-0 flex flex-col justify-end pb-24 lg:pb-0 lg:justify-center transition-all duration-500 ${
      ato === i ? "opacity-100 translate-y-0 blur-0 visible" : "opacity-0 translate-y-4 blur-sm invisible"
    }`;

  return (
    <section id="inicio" ref={palco} aria-label="Apresentação" className="relative h-[420vh] bg-[#0B1120]">
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-[#0B1120]">
        {/* luz do ato e letreiro gigante ao fundo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none transition-[background] duration-700"
          style={{ background: `radial-gradient(circle at 70% 40%, color-mix(in srgb, ${luz} 18%, transparent), transparent 45%)` }}
        />
        <div aria-hidden="true" className="absolute inset-x-0 top-[30%] lg:top-1/2 -translate-y-1/2 overflow-hidden whitespace-nowrap pointer-events-none">
          <div className={`inline-flex ${reduz ? "" : "letreiro"}`}>
            {[0, 1, 2, 3].map((k) => (
              <span
                key={k}
                className="font-extrabold text-[7rem] lg:text-[20vw] tracking-[-0.035em] leading-none pr-[.35em] text-transparent transition-[-webkit-text-stroke-color] duration-700"
                style={{ WebkitTextStroke: `1.5px color-mix(in srgb, ${luz} 16%, transparent)` }}
              >
                JZ TECH
              </span>
            ))}
          </div>
        </div>
        <canvas
          ref={tela}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full block"
          style={{ opacity: saida > 0.6 ? 1 - (saida - 0.6) / 0.4 : 1 }}
        />
        {/* etiquetas presas às partículas: a bagunça (ato 2) e os 12 sistemas no hub (ato 3) */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ opacity: cena.current ? 1 - Math.min(1, saida * 2) : 0 }}>
          {BAGUNCA.map(([, t], i) => (
            <span
              key={t}
              ref={(el) => { marcasBagunca.current[i] = el; }}
              className="absolute left-0 top-0 whitespace-nowrap rounded-md bg-[#E11D48]/90 px-2 py-0.5 text-[11px] sm:text-xs font-bold text-white shadow-lg transition-opacity duration-500"
              style={{ opacity: ato === 1 ? 1 : 0, transitionDelay: ato === 1 ? `${350 + i * 90}ms` : "0ms" }}
            >
              {t}
            </span>
          ))}
          {SISTEMAS.map((s, i) => (
            <span
              key={s.nome}
              ref={(el) => { marcasSistemas.current[i] = el; }}
              className="absolute left-0 top-0 flex flex-col items-center gap-1 transition-[opacity,scale] duration-500"
              style={{ opacity: ato === 2 ? 1 : 0, scale: ato === 2 ? "1" : ".6", transitionDelay: ato === 2 ? `${400 + i * 60}ms` : "0ms" }}
            >
              <span className={`grid place-items-center w-9 h-9 lg:w-11 lg:h-11 rounded-full overflow-hidden ${s.contido ? "bg-white p-1" : "bg-[#0B1120]"}`} style={{ boxShadow: `0 0 0 1.5px ${s.cor}, 0 0 18px ${s.cor}66` }}>
                <img src={`/img/sistemas/${s.logo}.png`} alt="" className={`w-full h-full ${s.contido ? "object-contain" : "object-cover"}`} />
              </span>
              <span className="hidden lg:block text-[11.5px] font-semibold text-slate-200 whitespace-nowrap">{s.nome}</span>
            </span>
          ))}
        </div>
        {/* no celular, uma faixa escura atrás do texto garante a leitura sobre as partículas */}
        <div aria-hidden="true" className="lg:hidden absolute inset-x-0 bottom-0 h-[62%] pointer-events-none bg-gradient-to-b from-transparent via-[#0B1120]/95 to-[#0B1120]" />

        <div className="relative z-[2] h-full max-w-6xl mx-auto px-4 sm:px-6" style={{ opacity: 1 - Math.min(1, saida * 2.2) }}>
          <div className="relative h-full max-w-xl">
            {/* Ato 1 — quem somos */}
            <div className={bloco(0)}>
              <h1 className="text-[2.1rem] [@media(max-height:700px)]:text-[1.75rem] sm:text-5xl lg:text-[4rem] font-extrabold leading-[1.06] tracking-tight text-white text-balance">
                Sistemas que fazem o seu negócio{" "}
                <span className="transition-colors duration-700" style={{ color: luz }}>
                  andar sozinho.
                </span>
              </h1>
              <p className="mt-4 sm:mt-5 text-[15px] sm:text-lg text-slate-400 leading-relaxed max-w-lg [@media(max-height:700px)_and_(max-width:1023px)]:hidden">
                Criamos sistemas, sites e automações com IA para empresas do interior — do pedido no WhatsApp ao RH.
              </p>
              <div className="mt-6 sm:mt-7 flex flex-wrap gap-2.5 sm:gap-3">
                <a
                  href="#sistemas"
                  className="group inline-flex items-center gap-2 h-11 sm:h-12 px-5 sm:px-6 text-[15px] sm:text-base rounded-full bg-white text-slate-950 font-semibold hover:bg-slate-100 transition-colors"
                >
                  Conhecer os sistemas
                  <MdArrowDownward className="transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </div>
              <div className="mt-8 hidden sm:flex flex-wrap gap-x-10 gap-y-4">
                {NUMEROS.map((n) => (
                  <div key={n.rotulo}>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{n.valor}</div>
                    <div className="text-[13px] text-slate-500">{n.rotulo}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Atos 2 e 3 — o problema e a solução */}
            {[1, 2].map((i) => {
              const a = ATOS[i] as (typeof ATOS)[1];
              return (
                <div key={i} className={bloco(i)} aria-hidden={ato !== i}>
                  <h2 className="text-[2rem] sm:text-5xl lg:text-[3.1rem] lg:max-w-[30rem] font-extrabold leading-[1.08] tracking-tight text-white text-balance">
                    {a.titulo}
                  </h2>
                  <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg">{a.texto}</p>
                  <ul className="mt-6 flex flex-col gap-2.5">
                    {a.itens.map((t) => (
                      <li key={t} className="flex items-center gap-3 text-slate-200 text-[15px]">
                        <span className="w-[7px] h-[7px] rounded-full shrink-0" style={{ background: a.cor[0], boxShadow: `0 0 10px ${a.cor[0]}` }} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* "Role para ver", na cor do ato */}
          <a
            href="#clientes"
            className="absolute bottom-7 left-4 sm:left-6 hidden lg:inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            Role para ver
            <MdArrowDownward className={reduz ? "" : "descer"} style={{ color: luz }} />
          </a>
        </div>
      </div>
    </section>
  );
};
