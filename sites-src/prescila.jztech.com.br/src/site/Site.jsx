import { useEffect, useRef, useState } from 'react';
import './site.css';
import hero from './img/hero.webp';
import sofa from './img/sofa.webp';
import livros from './img/livros.webp';
import criancas from './img/criancas.webp';
import palco from './img/palco.webp';
import turma from './img/turma.webp';
import sala from './img/sala.webp';
import campo from './img/campo.webp';
import treino from './img/treino.mp4';

// Site da Prescila — direção editorial: papel, serifa grande, fotos de ponta a ponta, linhas finas.
// Cada informação aparece uma vez só. Textos são dela (site antigo); sem preço e sem promessa de resultado
// (art. 20 do Código de Ética); nome completo + CRP no rodapé.
const ZAP = '5544988036966';
const zap = msg => `https://wa.me/${ZAP}?text=${encodeURIComponent('Olá, Prescila! Vi o seu site e ' + msg)}`;
const ext = { target: '_blank', rel: 'noopener' };

const FORMACAO = [
  ['Psicologia', 'Universidade Paranaense, 2008'],
  ['Neurociência', 'FGV'],
  ['Liderança Inspiradora', 'FRST Falconi'],
  ['Comunicação Assertiva', 'com Lena Souza'],
];

const Seta = () => (
  <svg className="seta" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
// título que entra linha a linha (cada linha sobe de dentro de uma máscara)
const Linhas = ({ as: Tag = 'h2', className = '', linhas }) => (
  <Tag className={'linhas ' + className}>{linhas.map((l, i) => <span key={i} className="ln"><span style={{ transitionDelay: i * 90 + 'ms' }}>{l}</span></span>)}</Tag>
);

export default function Site() {
  const [rolou, setRolou] = useState(false);
  const [ativa, setAtiva] = useState('');
  const [sobe, setSobe] = useState(false);
  const [aberto, setAberto] = useState(false);
  const vid = useRef(null);
  const [mudo, setMudo] = useState(true);
  const [pausado, setPausado] = useState(false);

  useEffect(() => {
    document.body.classList.add('site');
    // sempre abre no topo (o celular guardava a rolagem da visita anterior); a foto da abertura se revela sozinha
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    if (!location.hash) scrollTo(0, 0);
    const heroFoto = document.querySelector('.hero-foto'); requestAnimationFrame(() => heroFoto?.classList.add('visto'));
    const calmo = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visto'); obs.unobserve(e.target); } }), { rootMargin: '0px 0px -10% 0px' });
    document.querySelectorAll('.linhas, .surge, .foto:not(.hero-foto)').forEach(el => obs.observe(el));
    document.querySelectorAll('.hero .linhas, .hero .surge').forEach(el => requestAnimationFrame(() => el.classList.add('visto')));
    // fotos: leve deslocamento conforme a rolagem (paralaxe), só com a foto à vista
    const fotos = [...document.querySelectorAll('.foto img, .frase-fundo img')];
    let pend = false;
    const quadro = () => {
      pend = false; setRolou(scrollY > 40); setSobe(scrollY > innerHeight * .8);
      if (calmo) return;
      const h = innerHeight;
      fotos.forEach(img => { const r = img.parentElement.getBoundingClientRect(); if (r.bottom < 0 || r.top > h) return;
        const p = (r.top + r.height / 2 - h / 2) / h; img.style.transform = `translateY(${(p * -6).toFixed(2)}%) scale(1.12)`; });
    };
    const onScroll = () => { if (!pend) { pend = true; requestAnimationFrame(quadro); } };
    quadro(); addEventListener('scroll', onScroll, { passive: true }); addEventListener('resize', onScroll);
    const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setAtiva(e.target.id); }), { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(el => spy.observe(el));
    if (location.hash) setTimeout(() => document.querySelector(location.hash)?.scrollIntoView(), 50);
    const esc = e => { if (e.key === 'Escape') setAberto(false); }; addEventListener('keydown', esc);
    return () => { removeEventListener('keydown', esc); obs.disconnect(); spy.disconnect(); removeEventListener('scroll', onScroll); removeEventListener('resize', onScroll); };
  }, []);

  return (
    <>
      <header className={'topo' + (rolou ? ' rolou' : '')}>
        <a className="logo" href="#inicio">Prescila A. M. Carollo</a>
        <nav aria-label="Seções">
          {[['formacao', 'Formação'], ['sobre', 'Sobre'], ['atendimentos', 'Atendimentos'], ['empresas', 'Empresas']].map(([id, n]) => <a key={id} href={'#' + id} className={ativa === id ? 'ativo' : ''} aria-current={ativa === id ? 'true' : undefined}>{n}</a>)}
        </nav>
        <button type="button" className={'hamb' + (aberto ? ' x' : '')} aria-label={aberto ? 'Fechar menu' : 'Abrir menu'} aria-expanded={aberto} aria-controls="menu-cel" onClick={() => setAberto(a => !a)}><span /><span /></button>
        <a className={'cta-topo' + (sobe ? ' on' : '')} tabIndex={sobe ? 0 : -1} aria-hidden={!sobe} href={zap('gostaria de agendar uma consulta.')} {...ext}>Agendar</a>
      </header>
      <div id="menu-cel" className={'menu-cel' + (aberto ? ' on' : '')} aria-hidden={!aberto} onClick={e => { if (e.target.closest('a')) setAberto(false); }}>
        <nav aria-label="Menu">
          {[['formacao', 'Formação'], ['sobre', 'Sobre'], ['atendimentos', 'Atendimentos'], ['empresas', 'Empresas']].map(([id, n], k) => (
            <a key={id} href={'#' + id} tabIndex={aberto ? 0 : -1} style={{ transitionDelay: (aberto ? 80 + k * 50 : 0) + 'ms' }}>{n}</a>
          ))}
        </nav>
        <div className="mc-base">
          <a className="btn" href={zap('gostaria de agendar uma consulta.')} {...ext} tabIndex={aberto ? 0 : -1}>Agendar consulta <Seta /></a>
        </div>
      </div>
      <div className={'mc-veu' + (aberto ? ' on' : '')} onClick={() => setAberto(false)} aria-hidden="true" />

      <main>
        <section className="hero" id="inicio">
          <div className="hero-txt">
            <p className="sobrelinha surge">Psicóloga · CRP 08/28396</p>
            <Linhas as="h1" className="mega" linhas={['Cuidando da', <>sua <em>alma</em></>, 'humana.']} />
            <p className="hero-sub surge"><em>Acolher pessoas, despertar potencial e promover transformações.</em></p>
            <div className="hero-acoes surge">
              <a className="btn" href={zap('gostaria de agendar uma consulta.')} {...ext}>Agendar consulta <Seta /></a>
              <a className="link" href="#sobre">Conheça a Prescila</a>
            </div>
          </div>
          <figure className="hero-foto foto"><img src={hero} alt="Prescila A. M. Carollo sorrindo, de roupa clara" fetchPriority="high" /></figure>
        </section>

        <section className="sobre bloco" id="formacao">
          <figure className="sobre-foto foto"><img src={livros} alt="Prescila sorrindo, apoiada numa pilha de livros" loading="lazy" /></figure>
          <div>
            <h2 className="rotulo surge">Formação</h2>
            <ul className="forms surge">{FORMACAO.map(([n, d]) => <li key={n}><b>{n}</b><span>{d}</span></li>)}</ul>
          </div>
        </section>

        <section className="frase" aria-label="Frase da Prescila">
          <div className="frase-fundo" aria-hidden="true"><img src={campo} alt="" loading="lazy" /></div>
          <Linhas as="p" className="frase-txt" linhas={['“Minha principal missão', 'é iluminar caminhos.”']} />
          <p className="frase-sub surge">Na clínica, quero ajudar pessoas a olhar para suas dores, compreender suas histórias e reconhecer novas possibilidades. Nas empresas, quero contribuir para que pessoas descubram capacidades, desenvolvam competências e transformem a maneira como se relacionam, trabalham e lideram.</p>
        </section>

        <section className="sobre bloco" id="sobre">
          <figure className="sobre-foto foto"><img src={sofa} alt="Prescila sentada num sofá claro, sorrindo" loading="lazy" /></figure>
          <div className="sobre-txt">
            <h2 className="rotulo surge">Sobre</h2>
            <Linhas className="titulo" linhas={['Meu nome é Prescila,', <>sim, com <em>“E”</em>.</>]} />
            <div className="corpo surge">
              <p>Eu amo os girassóis. O girassol é uma flor servidora: alimenta outros seres e melhora o solo onde está plantado. Desde criança sou uma pessoa que serve, de energia afetiva, que ama sorrir. Sempre fui a amiga que escuta, e meus pais me chamavam de “psicóloga” e “professora”.</p>
              <p>Minha principal atuação foi na Psicologia Organizacional da Gazin, por 18 anos: treinamentos, desenvolvimento, lideranças, mediação de conflitos, comunicação, CNV, PNL e neurociência.</p>
              <p>Sou casada com o Luiz Vitório e mãe do Vittório e da Maria Flor. A maternidade e os momentos desafiadores em família ressignificaram o meu chamado como psicóloga.</p>
            </div>
            <p className="assina surge">“Cada pessoa que me procura me escolheu, e eu tenho como obrigação escolher ela também.”</p>
          </div>
        </section>

        <section className="sobre atend bloco" id="atendimentos">
          <div className="sobre-txt">
            <h2 className="rotulo surge">Atendimentos</h2>
            <Linhas className="titulo" linhas={['Um espaço seguro,', <>sem <em>julgamentos</em>.</>]} />
            <p className="corpo surge">Cada pessoa é única: as sessões seguem as suas necessidades. Escuta individual, familiar e organizacional, com supervisão e estudo de caso contínuos.</p>
            <a className="btn surge" href={zap('gostaria de agendar uma consulta.')} {...ext}>Agendar consulta <Seta /></a>
          </div>
          <figure className="foto foto-larga"><img src={criancas} alt="Prescila abraçada a quatro crianças, rindo" loading="lazy" /></figure>
        </section>

        <section className="empresas" id="empresas">
          <div className="emp-txt">
            <h2 className="rotulo surge">Para empresas</h2>
            <Linhas className="titulo" linhas={['Desenvolvimento', <>de <em>pessoas</em>.</>]} />
            <p className="corpo surge">Formada em Psicologia desde 2008, seu principal campo de atuação foi a Psicologia Organizacional: atuou na Gazin no Desenvolvimento Humano, onde construiu um vasto repertório de treinamentos e projetos corporativos, contribuindo com equipes, líderes e negócios. Sempre mantendo seu principal valor: “Se tem querer, tem jeito”.</p>
            <a className="btn btn-claro surge" href={zap('gostaria de conversar sobre assessoria, palestra ou treinamento para a minha empresa.')} {...ext}>Levar para a minha empresa <Seta /></a>
          </div>
          <div className="emp-fotos">
            <figure className="foto f1"><img src={palco} alt="Prescila palestrando com microfone" loading="lazy" /></figure>
            <figure className="foto f2 video">
              <video ref={vid} src={treino} muted loop playsInline autoPlay preload="metadata" aria-label="Vídeo de um treinamento" />
              <div className="v-ctl">
                <button type="button" onClick={() => { const v = vid.current; v.paused ? v.play() : v.pause(); setPausado(v.paused); }} aria-label={pausado ? 'Tocar o vídeo' : 'Pausar o vídeo'}>
                  {pausado ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor" /></svg>
                           : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5h3v14H8zM13 5h3v14h-3z" fill="currentColor" /></svg>}
                </button>
                <button type="button" onClick={() => { const v = vid.current; v.muted = !v.muted; if (!v.muted && v.paused) { v.play(); setPausado(false); } setMudo(v.muted); }} aria-label={mudo ? 'Ligar o som' : 'Desligar o som'}>
                  {mudo ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z" fill="currentColor" stroke="none" /><path d="m16 10 4 4M20 10l-4 4" /></svg>
                        : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 9.5h3.5L12 6v12l-4.5-3.5H4z" fill="currentColor" stroke="none" /><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" /></svg>}
                </button>
              </div>
            </figure>
            <figure className="foto f3"><img src={sala} alt="Prescila conduzindo um treinamento" loading="lazy" /></figure>
            <figure className="foto f4"><img src={turma} alt="Prescila com uma turma após o treinamento" loading="lazy" /></figure>
          </div>
        </section>

      </main>

      <footer className="rodape">
        <div className="r-base">
          <span>Prescila Aparecida Martins Carollo · Psicóloga · CRP 08/28396 · <a href={zap('gostaria de falar com você.')} {...ext}>(44) 98803-6966</a></span>
          <span className="r-dir"><a className="r-ig" href="https://instagram.com/premartinss" {...ext} aria-label="Instagram @premartinss">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>
            </a><span>Feito por <a href="https://jztech.com.br" {...ext}>JZ Tech</a></span></span>
        </div>
      </footer>
      <button type="button" className={'subir' + (sobe ? ' on' : '')} aria-label="Voltar ao topo" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" /></svg>
      </button>
    </>
  );
}
