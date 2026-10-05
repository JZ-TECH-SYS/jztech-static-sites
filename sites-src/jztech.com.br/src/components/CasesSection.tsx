/* Cases de sucesso: os textos e as telas são os mesmos que o site já
   publicava (seção antiga ShowCaseSection); muda só a forma. */
const CASES = [
  {
    title: "Hub Fazendas",
    logo: "/img/clientes/hub-fazendas.png",
    description:
      "Marketplace de gado que conecta produtores rurais a compradores. Catálogo com dados genéticos, sanitários e documentação; venda completa com carrinho, pagamento, contrato digital e repasse automático para a fazenda; feed social e chat para negociação direta.",
    image: "/img/hub-fazendas.png",
    address: "hubfazendas.com.br",
    tags: ["Marketplace", "Pagamento e repasse", "Feed social", "Chat de negociação"],
  },
  {
    title: "GTELog",
    logo: "/img/clientes/gtelog.png",
    description:
      "Logística de transporte animal, da solicitação ao comprovante de entrega. Agrupamento em lotes, roteirização com paradas, rastreio com link público de validade controlada, marketplace de frete com propostas de transportadoras e app para o motorista.",
    image: "/img/gte-log.png",
    address: "gtelog.com.br",
    tags: ["Roteirização", "Rastreio", "Marketplace de frete", "App do motorista"],
  },
  {
    title: "ClickJoias",
    logo: "/img/sistemas/clickjoias.png",
    description:
      "Gestão completa para lojas físicas e online: estoque, produtos, pedidos, caixa, ordens de serviço e recebimentos num só lugar, com NF-e e NFC-e ponta a ponta e pagamento por PIX e Cielo.",
    image: "/img/click-joias.png",
    address: "click-joias.jztech.com.br",
    tags: ["Gestão de loja", "NF-e e NFC-e", "PIX e Cielo", "PDV e estoque"],
  },
  {
    title: "ClickExpress",
    logo: "/img/sistemas/clickexpress.png",
    description:
      "Atendimento para lanchonetes que une balcão e delivery no mesmo fluxo: pedidos com acompanhamento, cardápio digital por QR Code, entrega por bairro, NFC-e automática e aviso ao cliente pelo WhatsApp, com app próprio para iPhone e Android.",
    image: "/img/click-express.png",
    address: "clickexpress.jztech.com.br",
    tags: ["Balcão e delivery", "NFC-e", "App iPhone e Android", "WhatsApp"],
  },
];

export const CasesSection = () => (
  <section id="cases" className="py-24 sm:py-32 bg-white/60 border-y border-slate-200/70 overflow-x-clip">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div data-reveal className="max-w-2xl">
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-950 text-balance">
          Cases de sucesso
        </h2>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          Projetos que estão no ar, atendendo empresas de verdade todos os dias.
        </p>
      </div>

      <div className="mt-16 sm:mt-24 space-y-20 sm:space-y-32">
        {CASES.map((c, i) => (
          <article
            key={c.title}
            className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center"
          >
            <figure
              data-reveal={i % 2 ? "right" : "left"}
              className={`case-shot lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}
            >
              <div className="rounded-2xl overflow-hidden bg-slate-100 shadow-[0_24px_48px_-24px_rgba(15,23,42,0.35)]">
                <div className="h-9 px-4 flex items-center gap-3 bg-slate-50 border-b border-slate-200/80">
                  <span className="flex gap-1.5" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F87171]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FBBF24]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#34D399]" />
                  </span>
                  <span className="flex-1 min-w-0 text-center text-[12.5px] text-slate-500 truncate rounded-md bg-white border border-slate-200/80 px-3 py-0.5">
                    {c.address}
                  </span>
                </div>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={c.image}
                    alt={`Tela do ${c.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-[900ms] ease-out"
                  />
                </div>
              </div>
            </figure>

            <div data-reveal className={`lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`}>
              <p className="text-[13px] font-semibold uppercase tracking-wider text-brand-700">Case {String(i + 1).padStart(2, "0")}</p>
              <div className="mt-3 flex items-center gap-3">
                <img src={c.logo} alt="" className="w-11 h-11 rounded-xl object-cover border border-slate-200 bg-white" />
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">{c.title}</h3>
              </div>
              <p className="mt-4 text-[17px] text-slate-600 leading-relaxed">{c.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2 text-[13.5px] font-medium text-slate-700">
                {c.tags.map((t) => (
                  <li key={t} className="rounded-full border border-slate-200 bg-white px-3 py-1.5">
                    {t}
                  </li>
                ))}
              </ul>
              <a
                href={`https://${c.address}${c.address.endsWith("jztech.com.br") ? "/home" : ""}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-brand-700 hover:text-brand-800"
              >
                Ver no ar <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
