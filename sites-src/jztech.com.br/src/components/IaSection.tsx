import { useEffect, useRef, useState } from "react";
import { MdAutoAwesome, MdArrowForward, MdLockOutline, MdTune, MdHowToReg } from "react-icons/md";

/* Só exemplos que a IA já faz em sistema nosso — cada um conferido no código
   (04/10/2026): pedido por áudio e lembrete do cliente sumido (ClickExpress),
   nota de despesa pela foto (api-service), comprovante lido (ClickJoias), nota
   fiscal lida (HubNotas, ExtracaoService), selfie x documento (KYC), extrato
   lido para a baixa e análise do Raio-X do crédito (ccfle, ConciliacaoHandler e
   RaioXInsightsHandler), descrição de produto (Hub Faci Lar,
   ProdutosController::iaGerarDescricao) e a IA da loja no WhatsApp pelo
   JZ TECH ZAP (Magazine do Povo, docs/integracoes do api-zap-ofc). */
const CASOS = [
  { area: "Vendas e atendimento", caso: "Pedido por áudio", sistema: "Delivery", chega: "🎤 Áudio · 0:08 — \"me vê dois x-salada e uma coca\"", ia: "Pedido anotado: 2 X-Salada + 1 Coca-Cola. Confirma o endereço de sempre?" },
  { area: "Vendas e atendimento", caso: "Cliente que sumiu", sistema: "Delivery", chega: "Cliente sem pedir há 30 dias", ia: "Oi, Ana! Faz tempo que você não pede. Hoje tem o seu lanche favorito esperando 😉" },
  { area: "Vendas e atendimento", caso: "Atendente no WhatsApp", sistema: "WhatsApp da loja", chega: "💬 \"Vocês têm celular em 10x sem juros?\"", ia: "Temos sim! Te mando as opções agora e, se quiser, chamo um vendedor da loja mais perto." },
  { area: "Vendas e atendimento", caso: "Descrição de produto", sistema: "Loja virtual", chega: "🏷️ Geladeira Frost Free 375L · cadastro novo", ia: "Descrição pronta: espaçosa, econômica e sem gelo acumulado. Revise e publique." },
  { area: "Financeiro", caso: "Comprovante de PIX", sistema: "Joalheria", chega: "📎 Comprovante do PIX enviado pela cliente", ia: "Li o comprovante: R$ 350,00 em 03/10, de Maria S. Pagamento conferido na venda." },
  { area: "Financeiro", caso: "Extrato do banco", sistema: "Conciliação", chega: "📑 Extrato do banco em PDF", ia: "Li 42 lançamentos e achei 38 parcelas que batem. Separei para você dar a baixa." },
  { area: "Financeiro", caso: "Nota de despesa", sistema: "Despesas", chega: "📷 Foto da nota do posto", ia: "Li a nota: R$ 180,00 · Combustível · 02/10. Lançado nas despesas." },
  { area: "Notas e documentos", caso: "Nota fiscal em PDF", sistema: "Notas fiscais", chega: "📄 nota-000418.pdf", ia: "Nota 418 · R$ 3.480,00 · competência 09/2026. Cliente achado pelo CNPJ: Auto Peças Veloz." },
  { area: "Crédito e cadastro", caso: "Selfie x documento", sistema: "Cadastro", chega: "🤳 Selfie + foto do RG", ia: "O rosto da selfie confere com o do documento. Cadastro segue para a análise." },
  { area: "Crédito e cadastro", caso: "Raio-X da carteira", sistema: "Crédito", chega: "📊 Raio-X da carteira do mês", ia: "A inadimplência subiu nos contratos de 12x. Vale olhar a entrada mínima nessa faixa." },
];
const AREAS = [...new Set(CASOS.map((c) => c.area))];

const GARANTIAS = [
  { Icone: MdHowToReg, titulo: "A IA ajuda, quem decide é você", texto: "Ela lê, separa e sugere. O que vira registro passa por uma pessoa." },
  { Icone: MdLockOutline, titulo: "Os seus dados ficam com a sua empresa", texto: "Cada empresa enxerga só o que é dela, no sistema que já usa." },
  { Icone: MdTune, titulo: "Sob medida para a sua rotina", texto: "Você conta o trabalho que se repete; a gente monta a IA para ele." },
];

const reduz = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const TEMPO = 5600;

export const IaSection = () => {
  const [i, setI] = useState(0);
  const [respondida, setRespondida] = useState(false);
  const [pausa, setPausa] = useState(false);
  const raiz = useRef<HTMLElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = raiz.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisivel(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* a cada caso: a mensagem chega, a IA "digita" e responde; depois passa ao próximo */
  useEffect(() => {
    setRespondida(false);
    if (reduz()) { setRespondida(true); return; }
    const t = window.setTimeout(() => setRespondida(true), 1500);
    return () => window.clearTimeout(t);
  }, [i]);

  useEffect(() => {
    if (!visivel || pausa || reduz()) return;
    const t = window.setTimeout(() => setI((v) => (v + 1) % CASOS.length), TEMPO);
    return () => window.clearTimeout(t);
  }, [i, visivel, pausa]);

  const c = CASOS[i];

  return (
    <section id="ia" ref={raiz} className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div data-reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
            <MdAutoAwesome /> JZ Tech IA
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 text-balance">
            Inteligência artificial que já trabalha nos nossos sistemas
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Não é promessa: são tarefas que a IA faz hoje para os nossos clientes. Escolha um caso e veja como fica.
          </p>
        </div>

        <div
          data-reveal
          onMouseEnter={() => setPausa(true)}
          onMouseLeave={() => setPausa(false)}
          className="mt-12 grid lg:grid-cols-[1fr_1.15fr] rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.25)]"
        >
          {/* No celular: os casos numa faixa de pílulas que corre de lado, e a conversa logo abaixo */}
          <div className="lg:hidden flex gap-2 overflow-x-auto px-4 py-3 border-b border-slate-200 [scrollbar-width:none]">
            {CASOS.map((caso, k) => (
              <button
                key={caso.caso}
                type="button"
                onClick={(e) => { setI(k); e.currentTarget.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" }); }}
                aria-pressed={k === i}
                className={`shrink-0 rounded-full px-3.5 py-2 text-[13.5px] font-medium whitespace-nowrap transition-colors ${
                  k === i ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600"
                }`}
              >
                {caso.caso}
              </button>
            ))}
          </div>

          {/* Os casos, por área */}
          <div className="hidden lg:block p-5 sm:p-7 lg:border-r border-slate-200">
            {AREAS.map((area) => (
              <div key={area} className="mb-4 last:mb-0">
                <p className="text-[11.5px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">{area}</p>
                <div className="flex flex-wrap lg:flex-col gap-1.5 lg:gap-0.5">
                  {CASOS.map((caso, k) =>
                    caso.area !== area ? null : (
                      <button
                        key={caso.caso}
                        type="button"
                        onClick={() => setI(k)}
                        aria-pressed={k === i}
                        className={`relative text-left rounded-xl px-3 py-2 text-[14.5px] font-medium transition-colors ${
                          k === i ? "bg-brand-50 text-brand-800" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        {k === i && <span className="hidden lg:block absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-brand-600" />}
                        {caso.caso}
                        {k === i && !pausa && visivel && (
                          <span className="hidden lg:block absolute left-3 right-3 bottom-1 h-[2px] rounded-full bg-brand-200 overflow-hidden">
                            <span key={i} className="block h-full bg-brand-600 ia-progresso" style={{ animationDuration: `${TEMPO}ms` }} />
                          </span>
                        )}
                      </button>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* A conversa */}
          <div className="ia-card relative flex flex-col p-5 sm:p-8 min-h-[340px] lg:min-h-[380px]" aria-live="polite">
            <div className="flex items-center justify-between text-white/85 text-[13px] font-semibold">
              <span className="uppercase tracking-wider">{c.sistema}</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1">
                <MdAutoAwesome /> IA ligada
              </span>
            </div>
            <div key={i} className="flex-1 flex flex-col justify-center gap-4 py-6">
              <p className="ia-entra self-start max-w-[88%] rounded-2xl rounded-bl-md bg-white/15 backdrop-blur-sm px-4 py-3 text-white text-[15.5px] leading-relaxed">
                {c.chega}
              </p>
              {respondida ? (
                <div className="ia-entra self-end max-w-[88%] rounded-2xl rounded-br-md bg-white text-slate-900 px-4 py-3 text-[15.5px] leading-relaxed shadow-[0_16px_32px_-16px_rgba(2,6,23,0.5)]">
                  <span className="flex items-center gap-1.5 text-[13px] font-semibold text-brand-700 mb-1">
                    <MdAutoAwesome /> IA
                  </span>
                  {c.ia}
                </div>
              ) : (
                <div className="ia-entra self-end rounded-2xl rounded-br-md bg-white/90 px-4 py-3.5 flex gap-1.5" aria-label="A IA está escrevendo">
                  {[0, 1, 2].map((d) => (
                    <span key={d} className="ia-ponto w-2 h-2 rounded-full bg-brand-500" style={{ animationDelay: `${d * 0.15}s` }} />
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center justify-between text-white/80 text-[13px]">
              <span>Caso {i + 1} de {CASOS.length}</span>
              <div className="flex gap-1.5">
                <button type="button" aria-label="Caso anterior" onClick={() => setI((v) => (v - 1 + CASOS.length) % CASOS.length)} className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 text-white">‹</button>
                <button type="button" aria-label="Próximo caso" onClick={() => setI((v) => (v + 1) % CASOS.length)} className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 text-white">›</button>
              </div>
            </div>
          </div>
        </div>

        {/* As garantias e o convite */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {GARANTIAS.map((g, k) => (
            <div key={g.titulo} data-reveal style={{ transitionDelay: `${k * 100}ms` }} className="rounded-2xl border border-slate-200 bg-white/80 p-5">
              <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-700 grid place-items-center">
                <g.Icone className="text-xl" />
              </span>
              <h3 className="mt-4 font-semibold text-slate-950">{g.titulo}</h3>
              <p className="mt-1.5 text-[14.5px] text-slate-600 leading-relaxed">{g.texto}</p>
            </div>
          ))}
        </div>
        <div data-reveal className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl bg-slate-950 text-white px-6 py-5">
          <p className="text-[15.5px] text-slate-300">
            <span className="text-white font-semibold">Tem um trabalho que se repete todo dia?</span> A gente monta a IA para ele.
          </p>
          <a
            href="https://www.jztech.com.br/ia"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-white text-slate-950 font-semibold hover:bg-brand-50 transition-colors shrink-0"
          >
            Conhecer a JZ Tech IA
            <MdArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
