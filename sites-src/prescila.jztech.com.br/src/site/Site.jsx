import { useEffect, useRef, useState } from 'react';
import './site.css';
import hero from './img/hero.webp';
import familia from './img/familia.webp';
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

const ATENDIMENTOS = [
  ['Adultos', 'Terapia individual.', 'gostaria de saber sobre a terapia para adultos.'],
  ['Maternidade', 'Acolhimento para gestantes e mães.', 'gostaria de saber sobre o acompanhamento na maternidade.'],
  ['Crianças e adolescentes', 'Atendimento infantil e juvenil.', 'gostaria de saber sobre o atendimento infantil.'],
  ['Casais', 'Terapia para fortalecer a relação.', 'gostaria de saber sobre a terapia de casal.'],
];
const TEMAS = [
  ['Maternidade Leve', 'Desafios emocionais, a transição para a maternidade e o autocuidado.'],
  ['Cuidando da Sua Saúde Mental', 'Estratégias para o dia a dia contra o estresse e a ansiedade.'],
  ['Relacionamentos Saudáveis', 'Comunicação, empatia e resolução de conflitos.'],
  ['Onde o Girassol Acolhe a Alma', 'Luz interior, superação e autoconhecimento.'],
];
const FORMACAO = [
  ['Psicologia', 'Universidade Paranaense, 2018'],
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
        <a className="logo" href="#inicio">Prescila Martins</a>
        <nav aria-label="Seções">
          {[['sobre', 'Sobre'], ['atendimentos', 'Atendimentos'], ['empresas', 'Empresas'], ['pacotes', 'Pacotes']].map(([id, n]) => <a key={id} href={'#' + id} className={ativa === id ? 'ativo' : ''} aria-current={ativa === id ? 'true' : undefined}>{n}</a>)}
        </nav>
        <button type="button" className={'hamb' + (aberto ? ' x' : '')} aria-label={aberto ? 'Fechar menu' : 'Abrir menu'} aria-expanded={aberto} aria-controls="menu-cel" onClick={() => setAberto(a => !a)}><span /><span /></button>
        <a className={'cta-topo' + (sobe ? ' on' : '')} tabIndex={sobe ? 0 : -1} aria-hidden={!sobe} href={zap('gostaria de agendar uma consulta.')} {...ext}>Agendar</a>
      </header>
      <div id="menu-cel" className={'menu-cel' + (aberto ? ' on' : '')} aria-hidden={!aberto} onClick={e => { if (e.target.closest('a')) setAberto(false); }}>
        <nav aria-label="Menu">
          {[['sobre', 'Sobre'], ['atendimentos', 'Atendimentos'], ['empresas', 'Empresas'], ['pacotes', 'Pacotes']].map(([id, n], k) => (
            <a key={id} href={'#' + id} tabIndex={aberto ? 0 : -1} style={{ transitionDelay: (aberto ? 80 + k * 50 : 0) + 'ms' }}>{n}</a>
          ))}
        </nav>
        <div className="mc-base">
          <a className="btn" href={zap('gostaria de agendar uma consulta.')} {...ext} tabIndex={aberto ? 0 : -1}>Agendar consulta <Seta /></a>
          <a className="mc-zap" href={zap('gostaria de falar com você.')} {...ext} tabIndex={aberto ? 0 : -1}>WhatsApp (44) 98803-6966</a>
        </div>
      </div>
      <div className={'mc-veu' + (aberto ? ' on' : '')} onClick={() => setAberto(false)} aria-hidden="true" />

      <main>
        <section className="hero" id="inicio">
          <div className="hero-txt">
            <p className="sobrelinha surge">Psicóloga · CRP 08/28396</p>
            <Linhas as="h1" className="mega" linhas={['Cuidando da', <>sua <em>alma</em></>, 'humana.']} />
            <p className="hero-sub surge">Psicologia integrada, humanizada e cristã. Online ou presencial.</p>
            <div className="hero-acoes surge">
              <a className="btn" href={zap('gostaria de agendar uma consulta.')} {...ext}>Agendar consulta <Seta /></a>
              <a className="link" href="#sobre">Conheça a Prescila</a>
            </div>
          </div>
          <figure className="hero-foto foto"><img src={hero} alt="Prescila Martins sorrindo, de roupa clara" fetchPriority="high" /></figure>
        </section>

        <section className="frase" aria-label="Frase da Prescila">
          <div className="frase-fundo" aria-hidden="true"><img src={campo} alt="" loading="lazy" /></div>
          <Linhas as="p" className="frase-txt" linhas={['“Eu quero ser um girassol', 'para a alma dos que', 'me buscam.”']} />
          <p className="frase-sub surge">Assim como os girassóis buscam o sol, a sua alma busca a luz, e essa luz está em você. Cuidar de si mesmo é um ato de amor e de coragem.</p>
        </section>

        <section className="sobre bloco" id="sobre">
          <figure className="sobre-foto foto"><img src={familia} alt="Prescila com a filha no colo" loading="lazy" /></figure>
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

        <section className="bloco" id="atendimentos">
          <div className="cab">
            <h2 className="rotulo surge">Atendimentos</h2>
            <Linhas className="titulo" linhas={['Um espaço seguro,', <>sem <em>julgamentos</em>.</>]} />
            <p className="cab-sub surge">Cada pessoa é única: as sessões seguem as suas necessidades. Escuta individual, familiar e organizacional, com supervisão e estudo de caso contínuos.</p>
          </div>
          <ul className="lista">
            {ATENDIMENTOS.map(([nome, desc, msg]) => (
              <li key={nome} className="surge">
                <a href={zap(msg)} {...ext}>
                  <span className="l-nome">{nome}</span>
                  <span className="l-desc">{desc}</span>
                  <span className="l-ir">Conversar <Seta /></span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="empresas" id="empresas">
          <div className="emp-txt">
            <h2 className="rotulo surge">Para empresas</h2>
            <Linhas className="titulo" linhas={['Desenvolvimento', <>de <em>pessoas</em>.</>]} />
            <p className="corpo surge">Assessoria, palestras e treinamentos para empresas, eventos e grupos, com o tema ajustado à sua necessidade.</p>
            <ol className="temas surge">{TEMAS.map(([t, d]) => <li key={t}><span><b>{t}</b><small>{d}</small></span></li>)}</ol>
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

        <section className="bloco duas" id="pacotes">
          <div>
            <h2 className="rotulo surge">Formação</h2>
            <ul className="forms surge">{FORMACAO.map(([n, d]) => <li key={n}><b>{n}</b><span>{d}</span></li>)}</ul>
          </div>
          <div>
            <h2 className="rotulo surge">Pacotes</h2>
            <Linhas className="titulo" linhas={['Acompanhamento', <><em>contínuo</em>.</>]} />
            <div className="pacotes">
              {[['Quinzenal', '2 encontros por mês', 'pacote quinzenal (2 encontros por mês)'], ['Semanal', '4 encontros por mês · prioridade no agendamento', 'pacote semanal (4 encontros por mês)']].map(([n, q, m]) => (
                <a key={n} className="pacote surge" href={zap(`gostaria de saber sobre o ${m}. Pode me passar os valores?`)} {...ext}>
                  <span className="p-nome">{n}</span><span className="p-q">{q}</span><span className="l-ir">Consultar valores <Seta /></span>
                </a>
              ))}
            </div>
            <p className="nota surge">Materiais terapêuticos inclusos, escuta familiar sem custo adicional e horários flexíveis.</p>
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
