import { useEffect, useRef } from "react";
const IG = "https://www.instagram.com/";

// foto: arquivo em /img/clientes; sem foto real = iniciais. href: só endereço público conferido.
const CLIENTS: { name: string; img?: string; href?: string }[] = [
  { name: "Faci Lar Eletro", img: "faci-lar.png", href: "https://facilareletro.com.br/" },
  { name: "Magazine do Povo", img: "magazine-do-povo.jpg", href: "https://www.magazinedopovo.com.br/" },
  { name: "Celularis", img: "celularis.png", href: "https://www.acelularis.com.br/" },
  { name: "Street Style", img: "street-style.jpg", href: "https://streetstyle.com.br/" },
  { name: "Grupo Sonhare", img: "sonhare.jpg", href: "https://moveissonhare.com.br/" },
  { name: "Lucimar Colombo Semi Joias", img: "lucimar-colombo.jpg", href: IG + "lucimarcolombosemijoias/" },
  { name: "Bambinos", img: "bambinos.jpg", href: IG + "bambinosdv/" },
  { name: "Orla44", img: "orla44.jpg", href: IG + "orla.44douradina/" },
  { name: "Capucho Lanches", img: "capucho.jpg", href: IG + "capucholanches/" },
  { name: "Tereré Station", img: "terere-station.jpg", href: IG + "_tererestation/" },
  { name: "Luna Gelateria", img: "luna.jpg", href: IG + "luna.gelateria/" },
  { name: "Vaqueiro Pizzaria", img: "vaqueiro.jpg", href: IG + "vaqueiropizza/" },
  { name: "O Rancho", img: "o-rancho.jpg", href: IG + "oranchoivate/" },
  { name: "Taaki Seu Sushi", img: "taaki.jpg", href: IG + "taaki.seu.sushi/" },
  { name: "Black Sushi", img: "black-sushi.jpg", href: IG + "__blacksushi/" },
  { name: "Pizzaria Ditali", img: "pizzaria-ditali.jpg", href: IG + "pizzariaditali/" },
  { name: "JB Corte&Fogo", img: "jb-corte-e-fogo.jpg", href: IG + "jbjulianabarbosabbq/" },
  { name: "Arena Adema", img: "arena-adema.jpg", href: IG + "arenaademarbeachclub/" },
  { name: "Quintal", img: "quintal.png", href: "https://clickexpress.jztech.com.br/pedido/Quintal" },
  { name: "Zeus Lanches", href: "https://clickexpress.jztech.com.br/pedido/ZeusLanches" },
  { name: "Scooby Aquários", img: "scooby-aquarios.jpg", href: IG + "paulo_scooby_aquarios/" },
  { name: "Hub Fazendas", img: "hub-fazendas.png", href: "https://hubfazendas.com.br/" },
  { name: "GTELog", img: "gtelog.png", href: "https://gtelog.com.br/" },
];

const initials = (n: string) => n.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();

/* A faixa roda sozinha (a lista vem duas vezes; ao passar da metade, volta meia faixa
   sem a pessoa perceber) e dá para arrastar com o dedo ou com a rodinha: enquanto
   alguém mexe, ela espera, e depois continua de onde a pessoa deixou. */
function useFaixaQueRoda() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let espera = 0, raf = 0, ultimo = performance.now(), pos = el.scrollLeft;
    const parar = () => { espera = performance.now() + 2500; };
    const quadro = (agora: number) => {
      const dt = Math.min(64, agora - ultimo); ultimo = agora;
      const metade = el.scrollWidth / 2;
      if (agora > espera && !reduz) { pos += dt * 0.045; el.scrollLeft = pos; } else pos = el.scrollLeft;
      if (metade > 0 && el.scrollLeft >= metade) { pos = el.scrollLeft - metade; el.scrollLeft = pos; }
      if (el.scrollLeft <= 0 && agora <= espera) { pos = metade; el.scrollLeft = pos; }
      raf = requestAnimationFrame(quadro);
    };
    raf = requestAnimationFrame(quadro);
    ["pointerdown", "touchstart", "wheel", "mouseenter"].forEach((e) => el.addEventListener(e, parar, { passive: true }));
    el.addEventListener("mousemove", parar, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      ["pointerdown", "touchstart", "wheel", "mouseenter", "mousemove"].forEach((e) => el.removeEventListener(e, parar));
    };
  }, []);
  return ref;
}

export const ClientsSection = () => {
  const faixa = useFaixaQueRoda();
  return (
  <section id="clientes" className="py-16 border-y border-slate-200/70 bg-white/60">
    <div data-reveal className="text-center px-4">
      <p className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-950">
        Mais de <span className="text-brand-600">20 empresas</span> já usam os nossos sistemas
      </p>
      <p className="mt-2 text-[15px] sm:text-base text-slate-600">Restaurantes, lojas, joalherias, arenas, fazendas e transportadoras.</p>
    </div>
    <div ref={faixa} className="marquee mt-8">
      <ul className="marquee-track">
        {[...CLIENTS, ...CLIENTS].map((c, i) => {
          const copy = i >= CLIENTS.length;
          const body = (
            <>
              {c.img ? (
                <img src={`/img/clientes/${c.img}`} alt="" width={40} height={40} loading="lazy"
                  className="w-11 h-11 rounded-full object-cover border border-slate-200 bg-white shrink-0" />
              ) : (
                <span className="w-11 h-11 rounded-full bg-slate-200 text-slate-600 text-[13px] font-semibold grid place-items-center shrink-0">
                  {initials(c.name)}
                </span>
              )}
              <span className={c.href ? "nav-link" : undefined}>{c.name}</span>
            </>
          );
          const cls = "flex items-center gap-3 text-lg sm:text-xl font-semibold text-slate-700 whitespace-nowrap";
          return (
            <li key={i} aria-hidden={copy || undefined}>
              {c.href ? (
                <a href={c.href} target="_blank" rel="noopener noreferrer" tabIndex={copy ? -1 : undefined}
                  className={cls + " hover:text-slate-900 transition-colors"}>
                  {body}
                </a>
              ) : (
                <span className={cls}>{body}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  </section>
  );
};
