// Camada extra: sem este arquivo a página continua inteira e clicável.
const raiz = document.documentElement;
const calmo = matchMedia('(prefers-reduced-motion: reduce)').matches;
const mouse = matchMedia('(hover: hover) and (pointer: fine)').matches;
requestAnimationFrame(() => requestAnimationFrame(() => raiz.classList.add('pronto')));

// Título: cada letra sobe por trás da linha, em cascata
document.querySelectorAll('.letras').forEach((el) => {
  let i = +(el.dataset.atraso || 0);
  el.querySelectorAll('.mascara > span').forEach((linha) => {
    const txt = linha.textContent; linha.textContent = '';
    linha.setAttribute('aria-hidden', 'true');
    [...txt].forEach((c) => {
      const s = document.createElement('span'); s.className = 'l';
      s.textContent = c === ' ' ? ' ' : c; s.style.transitionDelay = (i++ * 38) + 'ms';
      linha.appendChild(s);
    });
  });
});

// Revelação ao rolar, com cascata dentro do grupo
const io = new IntersectionObserver((itens) => itens.forEach((it) => {
  if (!it.isIntersecting) return;
  it.target.classList.add('ve'); io.unobserve(it.target);
}), { rootMargin: '0px 0px -10% 0px' });
document.querySelectorAll('.sobe,.cortina,.gigante').forEach((el) => {
  if (el.dataset.atraso) el.style.transitionDelay = el.dataset.atraso + 'ms';
  io.observe(el);
});
document.querySelectorAll('.gigante span').forEach((s, i) => { s.style.transitionDelay = (i * 70) + 'ms'; });

// Números dos passos contam ao aparecer
const ioNum = new IntersectionObserver((itens) => itens.forEach((it) => {
  if (!it.isIntersecting) return; ioNum.unobserve(it.target);
  const el = it.target, fim = +el.dataset.conta, t0 = performance.now(), dur = 1200;
  if (calmo) return;
  const passo = (t) => { const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3); el.textContent = String(Math.max(1, Math.round(fim * e))).padStart(2, '0'); if (p < 1) requestAnimationFrame(passo); };
  requestAnimationFrame(passo);
}), { threshold: .6 });
document.querySelectorAll('[data-conta]').forEach((n) => ioNum.observe(n));

// Rolagem: topo, barra, palavras que acendem e parallax (um só laço, amortecido)
const topo = document.querySelector('.topo'), barra = document.querySelector('.progresso');
const palavras = [...document.querySelectorAll('.declara .p')];
const declara = document.querySelector('.declara');
const moveis = [...document.querySelectorAll('[data-vel]')];
const espelho = document.querySelector('.espelho img');
let alvo = scrollY, atual = scrollY, ocupado = false;
const quadro = () => {
  atual += (alvo - atual) * 0.14;
  if (Math.abs(alvo - atual) < 0.5) atual = alvo;
  const h = innerHeight;
  topo?.classList.toggle('rolou', alvo > 30);
  if (barra) barra.style.transform = `scaleX(${alvo / Math.max(1, raiz.scrollHeight - h)})`;
  if (declara && palavras.length) {
    const r = declara.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (h * 0.85 - r.top) / (r.height + h * 0.35)));
    const n = Math.round(p * palavras.length);
    palavras.forEach((w, i) => w.classList.toggle('acesa', i < n));
  }
  if (!calmo) {
    moveis.forEach((el) => { const r = el.getBoundingClientRect(); const c = (r.top + r.height / 2 - h / 2) / h; el.style.translate = `0 ${(c * +el.dataset.vel * 100).toFixed(1)}px`; });
    if (espelho && atual < h) espelho.parentElement.style.translate = `0 ${(atual * 0.12).toFixed(1)}px`;
  }
  if (atual !== alvo) requestAnimationFrame(quadro); else ocupado = false;
};
const pede = () => { alvo = scrollY; if (!ocupado) { ocupado = true; requestAnimationFrame(quadro); } };
addEventListener('scroll', pede, { passive: true }); addEventListener('resize', pede); pede();

// Mouse: luz que segue, cursor, inclinação e brilho nos cartões
if (mouse && !calmo) {
  const luz = document.querySelector('.luz'), cur = document.querySelector('.cursor');
  let mx = innerWidth / 2, my = innerHeight / 3, lx = mx, ly = my, cx = mx, cy = my;
  addEventListener('pointermove', (e) => { mx = e.clientX; my = e.clientY; }, { passive: true });
  const segue = () => {
    lx += (mx - lx) * 0.06; ly += (my - ly) * 0.06; cx += (mx - cx) * 0.25; cy += (my - cy) * 0.25;
    if (luz) luz.style.transform = `translate3d(${lx}px,${ly}px,0)`;
    if (cur) cur.style.transform = `translate3d(${cx}px,${cy}px,0)`;
    requestAnimationFrame(segue);
  };
  segue();
  document.querySelectorAll('a,button').forEach((el) => {
    el.addEventListener('pointerenter', () => cur?.classList.add('sobre'));
    el.addEventListener('pointerleave', () => cur?.classList.remove('sobre'));
  });
  document.querySelectorAll('.card,.fala').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      if (el.classList.contains('card')) { el.style.setProperty('--rx', (-y * 6).toFixed(2) + 'deg'); el.style.setProperty('--ry', (x * 8).toFixed(2) + 'deg'); }
      el.style.setProperty('--lx', ((x + .5) * 100).toFixed(1) + '%'); el.style.setProperty('--ly', ((y + .5) * 100).toFixed(1) + '%');
    });
    el.addEventListener('pointerleave', () => { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); });
  });
}

// Faixa que corre: dá para segurar e arrastar
document.querySelectorAll('.faixa').forEach((f) => {
  let x = 0, seg = false;
  f.addEventListener('pointerdown', (e) => { seg = true; x = e.clientX; f.classList.add('segurando'); f.setPointerCapture(e.pointerId); });
  f.addEventListener('pointermove', (e) => {
    if (!seg) return; const t = f.querySelector('.trilho'), w = t.offsetWidth / 2;
    t.getAnimations().forEach((a) => { const d = +a.effect.getTiming().duration; a.currentTime = (((+a.currentTime - ((e.clientX - x) / w) * d) % d) + d) % d; });
    x = e.clientX;
  });
  const solta = () => { seg = false; f.classList.remove('segurando'); };
  f.addEventListener('pointerup', solta); f.addEventListener('pointercancel', solta);
});

// Modalidade escolhida: marca o cartão e monta a mensagem do WhatsApp
const ZAP = 'https://wa.me/5569993105648?text=';
const cartoes = document.querySelectorAll('.card');
const nomeEscolhido = document.getElementById('modal-escolhida');
const botaoEscolha = document.getElementById('modal-zap');
cartoes.forEach((c) => c.addEventListener('click', () => {
  cartoes.forEach((o) => o.setAttribute('aria-pressed', String(o === c)));
  const m = c.dataset.modal;
  if (nomeEscolhido) nomeEscolhido.textContent = m;
  if (botaoEscolha) {
    botaoEscolha.href = ZAP + encodeURIComponent(`Oi, La Movê! Quero ver looks para ${m}.`);
    botaoEscolha.querySelector('.txt').textContent = `Ver looks de ${m}`;
  }
}));


// Do Instagram para o seu provador: a rolagem presa escolhe a tela; com vídeo, mistura 2 quadros vizinhos
(() => {
  const sec = document.querySelector('.provador'); if (!sec) return;
  const telas = [...sec.querySelectorAll('.tela')], passos = [...sec.querySelectorAll('.prov-passos li')];
  const N = +sec.dataset.quadros || 0, caixa = sec.querySelector('.prov-quadros'), imgs = [], aberto = [];
  if (N > 0) {
    sec.classList.add('com-video');
    const celular = innerWidth < 860, pasta = sec.dataset.pasta + (celular ? 'm/' : '');
    for (let i = 0; i < N; i++) { const im = new Image(); im.alt = ''; im.decoding = 'async'; caixa.appendChild(im); imgs.push(im); }
    // um quadro só entra na mistura depois de aberto (decode), senão pisca; fila de 4 por vez
    let prox = 0; const fila = () => { if (prox >= N) return; const i = prox++; const im = imgs[i];
      im.src = pasta + String(i + 1).padStart(3, '0') + '.webp';
      im.decode().then(() => { aberto[i] = true; }).catch(() => {}).finally(fila); };
    for (let k = 0; k < 4; k++) fila();
  }
  let ultima = -1;
  const quadro = () => {
    const r = sec.getBoundingClientRect(), curso = r.height - innerHeight;
    const p = Math.min(1, Math.max(0, -r.top / curso));
    const t = Math.min(telas.length - 1, Math.floor(p * telas.length));
    if (t !== ultima) { telas.forEach((el, i) => el.classList.toggle('ativa', i === t)); passos.forEach((el, i) => el.classList.toggle('ativo', i === t)); ultima = t; }
    if (N > 0) {
      const f = p * (N - 1), a = Math.floor(f), b = Math.min(N - 1, a + 1), m = f - a;
      imgs.forEach((im, i) => { const o = i === a && aberto[a] ? 1 : i === b && aberto[b] ? m : 0; if (im.style.opacity != o) im.style.opacity = o; });
    }
  };
  addEventListener('scroll', () => requestAnimationFrame(quadro), { passive: true }); quadro();
})();

// Cor de fundo que muda ao rolar: cada folha chega com a cor da seção de cima e assume a sua ao entrar
(() => {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const folhas = [...document.querySelectorAll('.folha, .rodape')];
  const cores = folhas.map((f) => getComputedStyle(f).backgroundColor);
  const io = new IntersectionObserver((itens) => itens.forEach((it) => {
    const i = folhas.indexOf(it.target);
    it.target.style.backgroundColor = it.isIntersecting ? '' : (cores[i - 1] || cores[i]);
  }), { rootMargin: '0px 0px -30% 0px' });
  folhas.forEach((f, i) => { if (f.getBoundingClientRect().top > innerHeight * .7) f.style.backgroundColor = cores[i - 1] || cores[i]; io.observe(f); });
})();
