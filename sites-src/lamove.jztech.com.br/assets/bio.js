// a abertura sai do caminho depois da cortina
setTimeout(() => document.querySelector('.cortina-bio')?.remove(), matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 2400);
// Bio: vídeo do tecido depois do primeiro desenho, pilha de looks e depoimento que troca sozinho
const calmoBio = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Vídeo: só entra depois que a página carregou (a 1ª tela fica com o poster); nunca com menos movimento ou economia de dados
(() => {
  const v = document.querySelector('.tecido video'); if (!v || calmoBio || navigator.connection?.saveData) return;
  const liga = () => {
    const tipo = v.canPlayType('video/webm; codecs="vp9"') ? v.dataset.webm : v.dataset.mp4;
    v.src = tipo;
    // desenha o vídeo num canvas do tamanho da área (efeito "cover"); o <video> fica invisível
    const tela = document.querySelector('.tela-tecido'), ctx = tela.getContext('2d');
    const mede = () => { const r = tela.getBoundingClientRect(), d = 1; tela.width = r.width * d; tela.height = r.height * d; };
    mede(); addEventListener('resize', mede);
    const desenha = () => {
      if (v.readyState >= 2) {
        const vw = v.videoWidth, vh = v.videoHeight, k = Math.max(tela.width / vw, tela.height / vh);
        const w = vw * k, h = vh * k; ctx.drawImage(v, (tela.width - w) / 2, (tela.height - h) / 2, w, h);
      }
      if (v.requestVideoFrameCallback) v.requestVideoFrameCallback(desenha); else requestAnimationFrame(desenha);
    };
    v.addEventListener('playing', () => { tela.classList.add('rodando'); desenha(); }, { once: true });
    v.play().catch(() => {});
  };
  if (document.readyState === 'complete') setTimeout(liga, 300); else addEventListener('load', () => setTimeout(liga, 300));
})();

// Arco de boutique: uma coleção por vez, troca lenta; clique/toque = próxima; arrastar = troca
(() => {
  const arco = document.querySelector('.arco'); if (!arco) return;
  const fotos = JSON.parse(document.getElementById('arco-fotos').textContent);
  const imgs = [...arco.querySelectorAll('.arco-img')], leg = document.querySelector('.arco-leg'), nome = document.querySelector('.arco-nome'), pos = [...document.querySelectorAll('.arco-pos i')];
  let i = 0, timer;
  const tam = innerWidth < 700 ? 360 : 720;
  const prepara = (n) => { const im = new Image(); im.src = `/assets/img/${fotos[n].k}-${tam}.webp`; im.decode?.().catch(() => {}); };
  addEventListener('load', () => setTimeout(() => prepara(1), 500), { once: true });
  const vai = (dir = 1) => {
    i = (i + dir + fotos.length) % fotos.length; const f = fotos[i];
    const velha = arco.querySelector('.arco-img.ativa'), nova = imgs.find((x) => x !== velha);
    nova.src = `/assets/img/${f.k}-360.webp`; nova.srcset = `/assets/img/${f.k}-360.webp 360w, /assets/img/${f.k}-720.webp 720w`; nova.sizes = velha.sizes; nova.alt = f.leg;
    const troca = () => { nova.classList.add('ativa'); nova.removeAttribute('aria-hidden'); velha.classList.remove('ativa'); velha.setAttribute('aria-hidden', 'true'); velha.alt = ''; };
    (nova.decode ? nova.decode() : Promise.resolve()).then(troca, troca);
    leg.classList.add('troca'); setTimeout(() => { nome.textContent = f.leg; leg.classList.remove('troca'); }, 350);
    pos.forEach((p, k) => p.classList.toggle('on', k === i));
    prepara((i + 1) % fotos.length);
  };
  const auto = () => { clearInterval(timer); if (!calmoBio) timer = setInterval(() => vai(), 5000); };
  let x0 = null;
  arco.addEventListener('pointerdown', (e) => { x0 = e.clientX; });
  arco.addEventListener('pointerup', (e) => { if (x0 === null) return; const dx = e.clientX - x0; x0 = null; vai(dx > 40 ? -1 : 1); auto(); });
  arco.addEventListener('pointercancel', () => { x0 = null; });
  arco.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') { e.preventDefault(); vai(); auto(); } if (e.key === 'ArrowLeft') { e.preventDefault(); vai(-1); auto(); } });
  auto();
})();

// Depoimento curto que troca sozinho: todos já estão empilhados no mesmo lugar, só troca qual aparece
(() => {
  const falas = [...document.querySelectorAll('.fala-b')]; if (falas.length < 2 || calmoBio) return;
  let i = 0, parado = false;
  // para com o mouse em cima e o dedo segurando; solta e volta a andar
  const fita = falas[0].parentElement;
  fita.addEventListener('pointerenter', () => { parado = true; }); fita.addEventListener('pointerleave', () => { parado = false; });
  setInterval(() => {
    if (parado) return;
    falas[i].classList.remove('ativa'); falas[i].setAttribute('aria-hidden', 'true');
    i = (i + 1) % falas.length;
    falas[i].classList.add('ativa'); falas[i].removeAttribute('aria-hidden');
  }, 5000);
})();

// Entrada em cascata termina e libera o transform: o hover passa a ser só transição
(() => {
  const ul = document.querySelector('.etiquetas'); if (!ul) return;
  const ultima = ul.lastElementChild;
  const fim = () => ul.classList.add('pronta');
  if (calmoBio) fim(); else { ultima?.addEventListener('animationend', fim, { once: true }); setTimeout(fim, 2700); }
})();

