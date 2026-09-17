import {
  MdArrowForward,
  MdCall,
  MdChat,
  MdForum,
  MdLocationOn,
  MdMailOutline,
} from "react-icons/md";

const PHONES = [
  { display: "+55 (44) 99763-3866", number: "5544997633866" },
  { display: "+55 (18) 98111-4238", number: "5518981114238" },
];

export const ContactSection = () => (
  <section className="py-24 bg-[#FAFAFA] border-b border-slate-200/60" id="contato">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div data-reveal className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
          Fale Conosco
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 mb-4">
          Entre em <span className="text-brand-700">Contato</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
        {/* Narrativa */}
        <div data-reveal="left" className="lg:col-span-6 p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
          <h3 className="text-xl font-bold text-slate-950 mb-4">
            Construímos soluções com propósito
          </h3>
          <p className="text-slate-600 text-base leading-relaxed mb-6">
            Nós valorizamos cada detalhe da sua empresa e acreditamos que sua
            marca merece atenção especial. Nosso objetivo é entender suas
            necessidades e construir soluções que realmente façam diferença para
            o seu negócio.
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Conte para nós quais são seus desafios e vamos trabalhar juntos para
            encontrar o melhor caminho para alcançar os seus resultados.
          </p>
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-600 shrink-0">
              <MdForum className="text-xl" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Atendimento humanizado e ágil
              </p>
              <p className="text-xs text-slate-500">
                Conversa direta com nossos desenvolvedores
              </p>
            </div>
          </div>
        </div>

        {/* Canais */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <a
            data-reveal="right"
            className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-brand-500/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between gap-3 group"
            href="mailto:jz.tech.digital@gmail.com"
          >
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center group-hover:bg-brand-700 group-hover:text-white transition-colors shrink-0">
                <MdMailOutline className="text-[22px]" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  E-mail
                </span>
                <span className="text-sm sm:text-base font-semibold text-slate-900 break-all">
                  jz.tech.digital@gmail.com
                </span>
              </div>
            </div>
            <MdArrowForward className="text-xl text-slate-400 group-hover:text-brand-700 transition-colors shrink-0" />
          </a>

          {PHONES.map((phone, index) => (
            <a
              key={phone.number}
              data-reveal="right"
              style={{ transitionDelay: `${(index + 1) * 120}ms` }}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-emerald-500/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between gap-3 group"
              href={`https://wa.me/${phone.number}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                  <MdCall className="text-[22px]" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    WhatsApp &amp; Telefone
                  </span>
                  <span className="text-base font-semibold text-slate-900">
                    {phone.display}
                  </span>
                </div>
              </div>
              <MdChat className="text-xl text-slate-400 group-hover:text-emerald-600 transition-colors shrink-0" />
            </a>
          ))}

          <div
            data-reveal="right"
            style={{ transitionDelay: "360ms" }}
            className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
              <MdLocationOn className="text-[22px]" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Localização
              </span>
              <span className="text-base font-semibold text-slate-900">
                Douradina / PR — Brasil
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
