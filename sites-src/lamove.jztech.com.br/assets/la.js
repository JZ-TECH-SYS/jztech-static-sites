// Camada extra: sem este arquivo a página continua inteira e clicável.
const raiz = document.documentElement;
const calmo = matchMedia('(prefers-reduced-motion: reduce)').matches;
requestAnimationFrame(() => requestAnimationFrame(() => raiz.classList.add('pronto')));
// a abertura sai do caminho depois da cortina
setTimeout(() => document.querySelector('.abertura')?.remove(), calmo ? 0 : 1500);

// Linhas dos títulos: numera cada linha para a cascata
document.querySelectorAll('.linhas').forEach((h) => h.querySelectorAll('.ln > span').forEach((s, i) => s.style.setProperty('--i', i)));

// Entradas ao aparecer na tela (uma vez)
const io = new IntersectionObserver((its) => its.forEach((it) => { if (it.isIntersecting) { it.target.classList.add('ve'); io.unobserve(it.target); } }), { rootMargin: '0px 0px -10% 0px' });
document.querySelectorAll('.linhas,.revela,.foto,.rod-gigante').forEach((el) => io.observe(el));

// Topo, progresso, voltar ao topo, seção ativa e parallax das fotos (um só laço por quadro)
(() => {
  const topo = document.querySelector('.topo'), barra = document.querySelector('.progresso'), subir = document.querySelector('.subir');
  const links = [...document.querySelectorAll('.menu a')], alvos = links.map((a) => document.querySelector(a.getAttribute('href')));
  const fotos = [...document.querySelectorAll('.foto > img:not(.tela-bio):not(.poster)')];
  const gavLinks = [...document.querySelectorAll('.gaveta-links a')];
  let pedido = false;
  const quadro = () => {
    pedido = false; const y = scrollY, h = innerHeight;
    topo.classList.toggle('rolou', y > 10);
    barra.style.transform = `scaleX(${y / Math.max(1, raiz.scrollHeight - h)})`;
    subir.classList.toggle('on', y > h * 1.5);
    // some se ficar por cima de qualquer botão ou link visível
    if (subir.classList.contains('on')) {
      const b = subir.getBoundingClientRect(), m = 8;
      const cobre = [...document.querySelectorAll('main a, main button, footer a')].some((el) => { const r = el.getBoundingClientRect(); return r.width && r.right > b.left - m && r.left < b.right + m && r.bottom > b.top - m && r.top < b.bottom + m; });
      subir.classList.toggle('cobre', cobre);
    }
    let ativo = -1; alvos.forEach((s, i) => { if (s && s.getBoundingClientRect().top < h * .35) ativo = i; });
    links.forEach((a, i) => a.classList.toggle('ativo', i === ativo));
    gavLinks.forEach((a, i) => { a.classList.toggle('ativo', i === ativo); if (i === ativo) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current'); });
    if (!calmo) document.querySelectorAll('.nada-vel').forEach((el) => { const r = el.getBoundingClientRect(); if (r.bottom < 0 || r.top > h) return; el.style.setProperty('--pv', ((r.top + r.height / 2 - h / 2) * +el.dataset.vel).toFixed(1) + 'px'); });
    if (!calmo) fotos.forEach((im) => { const r = im.parentElement.getBoundingClientRect(); if (r.bottom < 0 || r.top > h) return; im.style.setProperty('--py', ((r.top + r.height / 2 - h / 2) / h * -14).toFixed(1) + 'px'); });
  };
  addEventListener('scroll', () => { if (!pedido) { pedido = true; requestAnimationFrame(quadro); } }, { passive: true });
  quadro();
})();

// Menu do celular: gaveta pela direita
(() => {
  const b = document.querySelector('.hamb'), g = document.querySelector('.gaveta'), v = document.querySelector('.veu-menu'), f = g?.querySelector('.fecha');
  if (!b || !g) return;
  const set = (on) => { g.classList.toggle('on', on); v.classList.toggle('on', on); b.setAttribute('aria-expanded', on); document.body.style.overflow = on ? 'hidden' : ''; if (on) f.focus(); else b.focus(); };
  b.addEventListener('click', () => set(true)); f.addEventListener('click', () => set(false)); v.addEventListener('click', () => set(false));
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && g.classList.contains('on')) set(false); });
  g.addEventListener('click', (e) => { if (e.target.closest('.gaveta-links a')) set(false); });
})();

// Carrosséis: arrastar com o mouse (com impulso), setas e encaixe
document.querySelectorAll('.carrossel').forEach((t) => {
  const passo = () => (t.firstElementChild?.getBoundingClientRect().width || 300) + 24;
  const nav = t.previousElementSibling?.querySelectorAll?.('.car-btn') || [];
  nav.forEach((b) => b.addEventListener('click', () => t.scrollBy({ left: passo() * +b.dataset.dir, behavior: calmo ? 'auto' : 'smooth' })));
  let x0, s0, vel = 0, lx, lt, raf, mexeu = false;
  t.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'mouse') return; cancelAnimationFrame(raf); t.classList.add('arrasta'); x0 = lx = e.clientX; s0 = t.scrollLeft; lt = performance.now(); mexeu = false; t.setPointerCapture(e.pointerId); });
  t.addEventListener('pointermove', (e) => { if (!t.classList.contains('arrasta')) return; const n = performance.now(); vel = (lx - e.clientX) / Math.max(1, n - lt); lx = e.clientX; lt = n; if (Math.abs(e.clientX - x0) > 4) mexeu = true; t.scrollLeft = s0 - (e.clientX - x0); });
  const solta = () => { if (!t.classList.contains('arrasta')) return; let v = vel * 16; const anda = () => { t.scrollLeft += v; v *= .92; if (Math.abs(v) > .5 && !calmo) raf = requestAnimationFrame(anda); else t.classList.remove('arrasta'); }; anda(); };
  t.addEventListener('pointerup', solta); t.addEventListener('pointercancel', solta);
  t.addEventListener('click', (e) => { if (mexeu) { e.preventDefault(); e.stopPropagation(); } }, true);
});

// Perguntas: uma aberta por vez
(() => {
  const itens = [...document.querySelectorAll('.faq .item')];
  itens.forEach((it) => it.querySelector('button').addEventListener('click', () => {
    const abrir = !it.classList.contains('aberta');
    itens.forEach((o) => { o.classList.remove('aberta'); o.querySelector('button').setAttribute('aria-expanded', 'false'); });
    if (abrir) { it.classList.add('aberta'); it.querySelector('button').setAttribute('aria-expanded', 'true'); }
  }));
})();

// Vídeos desenhados em canvas (o navegador não põe botões por cima), só tocam na tela
document.querySelectorAll('.vid-fonte').forEach((v) => {
  const tela = v.parentElement.querySelector('.vid-tela'); if (!tela || calmo || navigator.connection?.saveData) return;
  const ctx = tela.getContext('2d');
  const telaBio = v.parentElement.querySelector('.tela-bio');
  const verde = v.dataset.tela ? v.dataset.tela.split(',').map(Number) : null; // x1,y1,x2,y2,larguraOriginal,alturaOriginal
  let ligado = false, visivel = false, t0 = performance.now();
  const mede = () => { const r = tela.getBoundingClientRect(), d = 1; tela.width = r.width * d; tela.height = r.height * d; };
  const desenha = () => {
    if (!visivel) return;
    if (v.readyState >= 2) {
      const k = Math.max(tela.width / v.videoWidth, tela.height / v.videoHeight), w = v.videoWidth * k, h = v.videoHeight * k, x0 = (tela.width - w) / 2, y0 = (tela.height - h) / 2;
      ctx.drawImage(v, x0, y0, w, h);
      if (verde && telaBio?.complete) {
        // a tela verde não se mexe no vídeo: desenha a bio da La Movê rolando devagar por cima, com cantos arredondados
        const e = w / verde[4], x = x0 + verde[0] * e - 2, y = y0 + verde[1] * e - 2, cw = (verde[2] - verde[0]) * e + 4, ch = (verde[3] - verde[1]) * e + 4;
        const esc = cw / telaBio.naturalWidth, total = telaBio.naturalHeight * esc - ch;
        const ciclo = 14000, f = ((performance.now() - t0) % ciclo) / ciclo, ida = f < .5 ? f * 2 : 2 - f * 2, desl = (ida * ida * (3 - 2 * ida)) * Math.max(0, total);
        ctx.save(); ctx.beginPath(); ctx.roundRect(x, y, cw, ch, 14 * e * 1.6); ctx.clip();
        ctx.drawImage(telaBio, x, y - desl, cw, telaBio.naturalHeight * esc);
        // a tela recebe a mesma luz do ambiente (um pouco mais quente e menos brilhante) e um reflexo suave
        ctx.fillStyle = 'rgba(40,30,20,.10)'; ctx.fillRect(x, y, cw, ch);
        const rf = ctx.createLinearGradient(x, y, x + cw, y + ch); rf.addColorStop(0, 'rgba(255,255,255,.10)'); rf.addColorStop(.4, 'rgba(255,255,255,0)'); ctx.fillStyle = rf; ctx.fillRect(x, y, cw, ch);
        ctx.restore();
      }
    }
    if (v.dataset.grade) {
      // grade de cor igual em tudo: leve tom verde-marca e vinheta, para mão, celular e fundo parecerem do mesmo lugar
      ctx.fillStyle = 'rgba(4,40,38,.12)'; ctx.fillRect(0, 0, tela.width, tela.height);
      const vg = ctx.createRadialGradient(tela.width / 2, tela.height / 2, tela.width * .25, tela.width / 2, tela.height / 2, tela.width * .75);
      vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(0,0,0,.38)'); ctx.fillStyle = vg; ctx.fillRect(0, 0, tela.width, tela.height);
    }
    // sem a tela da bio, só redesenha quando chega quadro novo do vídeo
    if (!verde && v.requestVideoFrameCallback) v.requestVideoFrameCallback(desenha); else requestAnimationFrame(desenha);
  };
  const liga = () => {
    if (ligado) return; ligado = true; mede(); addEventListener('resize', mede);
    if (telaBio) { telaBio.loading = 'eager'; telaBio.decode?.().catch(() => {}); }
    v.src = v.canPlayType('video/webm; codecs="vp9"') ? v.dataset.webm : v.dataset.mp4;
    v.addEventListener('playing', () => tela.classList.add('rodando'), { once: true });
    if (v.dataset.grade) v.playbackRate = .7; // fundo mais calmo
  };
  new IntersectionObserver(([it]) => {
    visivel = it.isIntersecting;
    if (visivel) { const vai = () => { liga(); v.play().catch(() => {}); requestAnimationFrame(desenha); };
      // vídeo só baixa depois que a cortina saiu: a primeira tela (foto parada do tecido) fica pronta antes
      const depois = () => setTimeout(vai, Math.max(0, 1500 - performance.now()));
      if (document.readyState === 'complete') depois(); else addEventListener('load', depois, { once: true }); }
    else v.pause();
  }, { rootMargin: '120px' }).observe(v.parentElement);
});

// Faixas infinitas (coleções e depoimentos): rolam sozinhas, arrastam com mouse ou dedo, pausam só com o mouse em cima ou segurando
document.querySelectorAll('.marquee').forEach((mq) => {
  const tr = mq.querySelector('.trilho'); if (!tr) return;
  const orig = [...tr.children]; orig.forEach((c) => { const k = c.cloneNode(true); k.setAttribute('aria-hidden', 'true'); k.querySelectorAll('a,button').forEach((a) => a.tabIndex = -1); tr.appendChild(k); });
  let x = 0, vel = calmo ? 0 : 0.45 * (mq.dataset.dir === '-1' ? -1 : 1), sobre = false, segura = false, x0 = 0, xs = 0, ultimo = performance.now(), larg = 0;
  const mede = () => { larg = tr.scrollWidth / 2; }; mede(); addEventListener('resize', mede); addEventListener('load', mede);
  const quadro = (t) => { const dt = Math.min(48, t - ultimo); ultimo = t; if (!sobre && !segura) x -= vel * dt / 16.7; if (larg) { if (x <= -larg) x += larg; if (x > 0) x -= larg; } tr.style.transform = `translate3d(${x}px,0,0)`; requestAnimationFrame(quadro); };
  requestAnimationFrame(quadro);
  mq.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') sobre = true; });
  mq.addEventListener('pointerleave', () => { sobre = false; });
  mq.addEventListener('pointerdown', (e) => { segura = true; x0 = e.clientX; xs = x; mq.classList.add('segura'); mq.setPointerCapture(e.pointerId); });
  mq.addEventListener('pointermove', (e) => { if (segura) x = xs + (e.clientX - x0); });
  const solta = () => { segura = false; mq.classList.remove('segura'); };
  mq.addEventListener('pointerup', solta); mq.addEventListener('pointercancel', solta);
});

// medida da linha dos passos para a sacola percorrer
(() => { return; const tr = document.querySelector('.trilha'); if (!tr) return; const m = () => { const r = tr.getBoundingClientRect(); tr.style.setProperty('--tw', (r.width) + 'px'); tr.style.setProperty('--th', Math.max(0, r.height - 36) + 'px'); }; m(); addEventListener('resize', m); addEventListener('load', m); })();
// a linha enche exatamente até onde a sacola está (lê a posição dela a cada quadro só com a seção na tela)
(() => {
  return;
  let ver = false; new IntersectionObserver(([e]) => { ver = e.isIntersecting; if (ver) requestAnimationFrame(passo); }).observe(tr);
  const passo = () => {
    if (!ver) return;
    const m = new DOMMatrix(getComputedStyle(pc).transform), vert = innerWidth <= 960;
    const tot = parseFloat(getComputedStyle(tr).getPropertyValue(vert ? '--th' : '--tw')) || 1;
    ch.style.setProperty('--f', Math.min(1, Math.max(0, (vert ? m.m42 : m.m41) / tot)).toFixed(3));
    ch.style.opacity = getComputedStyle(pc).opacity < .5 && (vert ? m.m42 : m.m41) > tot * .9 ? getComputedStyle(pc).opacity * 2 : 1;
    requestAnimationFrame(passo);
  };
})();

// Prove em casa: a sacola sai do centro do círculo 1, passa por dentro do 2, chega ao centro do 3, some e recomeça
(() => {
  const tj = document.querySelector('.trajeto'); if (!tj) return;
  const linha = tj.querySelector('.t-linha'), cheia = linha.querySelector('.trilha-cheia'), caixa = tj.querySelector('.t-sacola'), saco = caixa.querySelector('.pacote');
  const nums = [...tj.querySelectorAll('.passo .num')];
  let pts = [], vert = false;
  const mede = () => {
    const b = tj.getBoundingClientRect();
    pts = nums.map((n) => { const r = n.getBoundingClientRect(); return [r.left + r.width / 2 - b.left, r.top + r.height / 2 - b.top]; });
    vert = Math.abs(pts[2][0] - pts[0][0]) < 10;
    const len = vert ? pts[2][1] - pts[0][1] : pts[2][0] - pts[0][0];
    [linha, caixa].forEach((el) => { el.style.setProperty('--x1', pts[0][0] + 'px'); el.style.setProperty('--y1', pts[0][1] + 'px'); });
    linha.style.setProperty('--len', len + 'px');
    // corrige qualquer deslocamento: a sacola parada tem que ficar exatamente no centro do círculo 1
    const tr0 = saco.style.transform; saco.style.transform = 'none';
    const s = saco.getBoundingClientRect(), n0 = nums[0].getBoundingClientRect();
    corr = [n0.left + n0.width / 2 - (s.left + s.width / 2), n0.top + n0.height / 2 - (s.top + s.height / 2)];
    saco.style.transform = tr0;
  };
  var corr = [0, 0];
  mede(); addEventListener('resize', mede); addEventListener('load', mede);
  // roteiro em ms: aparece no 1, anda até o 2, para, anda até o 3, para, some
  const R = [[0, 0, 0], [500, 0, 1], [1300, 0, 1], [2900, .5, 1], [3700, .5, 1], [5300, 1, 1], [6100, 1, 1], [6700, 1, 0]], T = 7000;
  const ease = (t) => t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  const no = (f) => { const a = pts[0], c = f <= .5 ? [pts[0], pts[1], f * 2] : [pts[1], pts[2], (f - .5) * 2]; return [c[0][0] + (c[1][0] - c[0][0]) * c[2] - a[0], c[0][1] + (c[1][1] - c[0][1]) * c[2] - a[1]]; };
  if (calmo) { saco.style.opacity = 1; cheia.style.transform = 'none'; return; }
  let ver = false, t0 = performance.now();
  function passo(now) {
    if (!ver || !pts.length) return;
    // os passos entram subindo 24 px: mede de novo de tempos em tempos para seguir os centros reais
    if ((passo.n = (passo.n || 0) + 1) % 20 === 0) mede();
    const t = (now - t0) % T; let k = 0; while (k < R.length - 1 && R[k + 1][0] <= t) k++;
    const A = R[k], B = R[k + 1] || A, u = B[0] > A[0] ? ease((t - A[0]) / (B[0] - A[0])) : 1;
    const f = A[1] + (B[1] - A[1]) * u, op = A[2] + (B[2] - A[2]) * u, xy = no(f); xy[0] += corr[0]; xy[1] += corr[1];
    saco.style.transform = 'translate(' + xy[0].toFixed(1) + 'px,' + xy[1].toFixed(1) + 'px) scale(' + (0.6 + 0.4 * op).toFixed(3) + ')'; saco.style.opacity = op.toFixed(3);
    cheia.style.transform = vert ? 'scaleY(' + f + ')' : 'scaleX(' + f + ')';
    cheia.style.opacity = t > 6100 ? (1 - (t - 6100) / 600).toFixed(3) : 1;
    nums.forEach((n, i) => n.classList.toggle('acesa', Math.abs(f - i * 0.5) < 0.04 && op > 0.5));
    requestAnimationFrame(passo);
  }
  new IntersectionObserver((es) => { ver = es[0].isIntersecting; if (ver) { mede(); t0 = performance.now(); requestAnimationFrame(passo); } }).observe(tj);
})();

// Celular na mão: quadro nítido do vídeo + a bio rolando na tela verde (só com a seção na tela)
(() => {
  const tela = document.querySelector('.cel-tela'); if (!tela) return;
  const base = new Image(); const bio = tela.parentElement.querySelector('.tela-bio');
  const g = tela.dataset.tela.split(',').map(Number), ctx = tela.getContext('2d');
  let ver = false; const t0 = performance.now();
  let vg; const mede = () => { const r = tela.getBoundingClientRect(); tela.width = r.width; tela.height = r.height; vg = ctx.createRadialGradient(tela.width / 2, tela.height / 2, tela.width * 0.25, tela.width / 2, tela.height / 2, tela.width * 0.75); vg.addColorStop(0, 'rgba(0,0,0,0)'); vg.addColorStop(1, 'rgba(0,0,0,.36)'); };
  const desenha = () => {
    if (!ver) return;
    if (base.complete && base.naturalWidth && bio && bio.complete) {
      const k = Math.max(tela.width / base.naturalWidth, tela.height / base.naturalHeight), w = base.naturalWidth * k, h = base.naturalHeight * k, ox = (tela.width - w) / 2, oy = (tela.height - h) / 2;
      // aproximação lenta (ida e volta em 28 s) feita aqui, no mesmo desenho: nada de CSS escalando o canvas
      const kf = calmo ? 0 : ((performance.now() - t0) % 28000) / 28000, ki = kf < 0.5 ? kf * 2 : 2 - kf * 2, ke = ki * ki * (3 - 2 * ki), z = 1 + 0.06 * ke;
      ctx.setTransform(z, 0, 0, z, tela.width * 0.52 * (1 - z) - tela.width * 0.01 * ke, tela.height * 0.48 * (1 - z) - tela.height * 0.006 * ke);
      ctx.drawImage(base, ox, oy, w, h);
      const e = w / g[4], x = ox + g[0] * e - 2, y = oy + g[1] * e - 2, cw = (g[2] - g[0]) * e + 4, ch = (g[3] - g[1]) * e + 4, esc = cw / bio.naturalWidth, tot = bio.naturalHeight * esc - ch;
      const f = calmo ? 0 : ((performance.now() - t0) % 14000) / 14000, ida = f < 0.5 ? f * 2 : 2 - f * 2, d = ida * ida * (3 - 2 * ida) * Math.max(0, tot);
      ctx.save(); ctx.beginPath(); ctx.roundRect(x, y, cw, ch, 22 * e); ctx.clip(); ctx.drawImage(bio, x, y - d, cw, bio.naturalHeight * esc);
      ctx.fillStyle = 'rgba(40,30,20,.10)'; ctx.fillRect(x, y, cw, ch); ctx.restore();
      // mesma grade de cor e vinheta por cima de tudo (mão, celular e fundo)
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = 'rgba(4,40,38,.12)'; ctx.fillRect(0, 0, tela.width, tela.height);
      ctx.fillStyle = vg; ctx.fillRect(0, 0, tela.width, tela.height);
    }
    if (!calmo) requestAnimationFrame(desenha);
  };
  new IntersectionObserver((es) => { ver = es[0].isIntersecting; if (ver) { if (!base.src) base.src = tela.dataset.quadro; if (bio) { bio.loading = 'eager'; if (bio.decode) bio.decode().catch(() => {}); } mede(); requestAnimationFrame(desenha); } }, { rootMargin: '100px' }).observe(tela);
  addEventListener('resize', mede);
})();

// Studio: fotos trocam sozinhas a cada 3 s; clique/toque passa na hora (a próxima já fica aberta)
(() => {
  const c = document.querySelector('.studio-car'); if (!c) return;
  const imgs = [...c.querySelectorAll('.sc-img')], pos = [...c.querySelectorAll('.sc-pos i')];
  let i = 0, timer;
  const abre = (n) => { const im = imgs[n]; im.loading = 'eager'; if (im.decode) im.decode().catch(() => {}); };
  const vai = () => { imgs[i].classList.remove('ativa'); imgs[i].alt = ''; i = (i + 1) % imgs.length; imgs[i].classList.add('ativa'); pos.forEach((p, k) => p.classList.toggle('on', k === i)); abre((i + 1) % imgs.length); };
  // para com o mouse em cima, o dedo segurando e o foco do teclado; solta e volta a andar
  let parado = false; const para = (v) => () => { parado = v; };
  c.addEventListener('pointerenter', para(true)); c.addEventListener('pointerleave', para(false));
  c.addEventListener('focusin', para(true)); c.addEventListener('focusout', para(false));
  const auto = () => { clearInterval(timer); if (!calmo) timer = setInterval(() => { if (!parado) vai(); }, 3000); };
  new IntersectionObserver((es) => { if (es[0].isIntersecting) { abre(1); auto(); } else clearInterval(timer); }).observe(c);
  c.addEventListener('pointerup', () => { vai(); auto(); });
  c.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); vai(); auto(); } });
})();

// animações em laço só rodam com a seção na tela
(() => {
  const io = new IntersectionObserver((its) => its.forEach((it) => it.target.classList.toggle('parado', !it.isIntersecting)));
  document.querySelectorAll('.sec, .rodape').forEach((s) => io.observe(s));
})();
