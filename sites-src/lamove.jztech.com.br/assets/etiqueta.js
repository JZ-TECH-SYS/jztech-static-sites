// Etiqueta gigante: gira (rotateY) para mostrar a próxima coleção; clique, toque, arrasto ou teclado; troca sozinha a cada 5 s
// rótulo de cada etiqueta: o tipo de cada coleção, como a loja passou (24/11/2026)
const ROTULO = { 'Vibra': 'Lifestyle fitness', 'Play': 'Beach tennis', 'Pace': 'Corrida' };
(() => {
  const calma = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('.etq-caixa').forEach((caixa) => {
    const lista = JSON.parse(caixa.dataset.fotos); // [nome, foto principal, foto secundária]
    const etqs = [...caixa.querySelectorAll('.etq')], pos = [...caixa.querySelectorAll('.etq-pos i')];
    const larg = innerWidth < 700 ? 360 : 720;
    let i = 0, timer;
    const estado = etqs.map(() => ({ graus: 0 }));
    let principal;
    const preenche = (face, n, qual) => {
      const [nome, k1, k2] = lista[n], k = qual === 2 ? k2 : k1, img = face.querySelector('img');
      img.src = `/assets/img/${k}-360.webp`; img.srcset = `/assets/img/${k}-360.webp 360w, /assets/img/${k}-720.webp 720w`;
      img.alt = qual === 2 ? '' : nome;
      const nm = face.querySelector('.etq-nome'), cd = face.querySelector('.etq-cod');
      if (nm) nm.textContent = nome; if (cd) cd.textContent = ROTULO[nome] || '';
    };
    const prepara = (n) => lista[n].slice(1).forEach((k) => { const im = new Image(); im.src = `/assets/img/${k}-${larg}.webp`; im.decode?.().catch(() => {}); });
    addEventListener('load', () => { prepara(1); prepara(lista.length - 1); }, { once: true });
    const vira = (dir = 1) => {
      i = (i + dir + lista.length) % lista.length;
      etqs.forEach((e, k) => {
        const qual = +(e.dataset.qual || 1), st = estado[k], gira = e.querySelector('.etq-gira');
        const faces = e.querySelectorAll('.etq-face'), mostrando = Math.round(st.graus / 180) % 2 === 0 ? 0 : 1;
        const oculta = faces[1 - mostrando];
        if (calma) { preenche(faces[mostrando], (i + (+(e.dataset.desloc || 0))) % lista.length, qual); return; }
        const n = (i + (+(e.dataset.desloc || 0))) % lista.length;
        preenche(oculta, n, qual);
        // gira no mesmo quadro do toque; a etiqueta menor só tem um atraso de CSS (efeito em cascata)
        st.graus += 180 * dir; gira.style.transitionDelay = e === principal ? '0s' : '.08s'; gira.style.transform = `rotateY(${st.graus}deg)`;
      });
      pos.forEach((p, k) => p.classList.toggle('on', k === i));
      // o nome lido pelo leitor de tela (e pelo comando de voz) começa pelo texto que está à vista
      principal.setAttribute('aria-label', `${ROTULO[lista[i][0]] || ''} ${lista[i][0]}: virar a etiqueta e ver a próxima coleção`.trim());
      prepara((i + 1) % lista.length); prepara((i - 1 + lista.length) % lista.length);
    };
    // para com o mouse em cima, o dedo segurando e o foco do teclado; solta e volta a andar
    let parado = false; const para = (v) => () => { parado = v; };
    caixa.addEventListener('pointerenter', para(true)); caixa.addEventListener('pointerleave', para(false));
    caixa.addEventListener('focusin', para(true)); caixa.addEventListener('focusout', para(false));
    const auto = () => { clearInterval(timer); if (!calma) timer = setInterval(() => { if (!parado) vira(); }, 5000); };
    principal = caixa.querySelector('.etq-g') || etqs[0];
    let x0 = null;
    principal.addEventListener('pointerdown', (e) => { x0 = e.clientX; });
    principal.addEventListener('pointerup', (e) => { if (x0 === null) return; const dx = e.clientX - x0; x0 = null; vira(dx > 40 ? -1 : 1); auto(); });
    principal.addEventListener('pointercancel', () => { x0 = null; });
    principal.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') { e.preventDefault(); vira(); auto(); } if (e.key === 'ArrowLeft') { e.preventDefault(); vira(-1); auto(); } });
    // inclina na direção do mouse
    if (!calma && matchMedia('(hover: hover)').matches) {
      principal.addEventListener('pointermove', (e) => { const r = principal.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; principal.querySelector('.etq-tilt').style.transform = `rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 10).toFixed(2)}deg)`; });
      principal.addEventListener('pointerleave', () => { principal.querySelector('.etq-tilt').style.transform = ''; });
    }
    auto();
  });
})();
