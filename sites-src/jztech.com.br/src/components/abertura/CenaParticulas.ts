/**
 * Cena de partículas da abertura (WebGL puro, sem biblioteca) — site da JZ Tech.
 *
 * As mesmas partículas mudam de forma conforme a rolagem: 0 nuvem solta →
 * 1 a logo JZ (o hexágono com o J e o Z) → 2 folhas, planilhas e mensagens
 * soltas e tortas (a bagunça) → 3 o hub JZ no meio ligado aos 12 sistemas, com
 * os dados viajando pelos raios. Motor copiado das landings (molde do ClickRH);
 * as formas são próprias.
 *
 * Se o aparelho não tiver WebGL, devolve null e a abertura segue só com o texto.
 */

type Vec3 = [number, number, number];
export type Rgb = [number, number, number];

export interface Cena {
  /** 0..3 — a forma que a seção atual pede. */
  alvo(forma: number): void;
  /** Cor das partículas (duas pontas do degradê). */
  cor(a: Rgb, b: Rgb): void;
  /** Aproxima a câmera no fim da abertura (0 = longe, 1 = atravessou). */
  mergulho(v: number): void;
  /** Prende elementos da página a pontos da cena (etiquetas que acompanham as partículas). */
  marcar(grupo: 'bagunca' | 'sistemas', els: (HTMLElement | null)[]): void;
  desmontar(): void;
}

export const hex = (h: string): Rgb => [
  parseInt(h.slice(1, 3), 16) / 255,
  parseInt(h.slice(3, 5), 16) / 255,
  parseInt(h.slice(5, 7), 16) / 255,
];

const VS = `
attribute vec3 a0,a1,a2,a3; attribute vec2 aSem;
uniform float uMorph,uTempo,uCamZ,uAspecto,uTam,uDpr,uMov,uMouseOn,uChoqueT;
uniform vec2 uRot,uMouse,uChoque,uDesloc; uniform mat4 uProj; uniform vec3 uCorA,uCorB;
varying vec3 vCor; varying float vAlfa;
float stag(float t,float s){return smoothstep(0.,1.,clamp((t-s*.35)/.65,0.,1.));}
mat3 rY(float a){float c=cos(a),s=sin(a);return mat3(c,0.,-s,0.,1.,0.,s,0.,c);}
mat3 rX(float a){float c=cos(a),s=sin(a);return mat3(1.,0.,0.,0.,c,s,0.,-s,c);}
void main(){
  float s=aSem.x;
  float w1=stag(clamp(uMorph,0.,1.),s),w2=stag(clamp(uMorph-1.,0.,1.),s),w3=stag(clamp(uMorph-2.,0.,1.),s);
  vec3 p=mix(a0,a1,w1);
  p=mix(p,a2,w2);
  p=mix(p,a3,w3);
  p=rX(uRot.y)*rY(uRot.x)*p;
  float amp=(1.-w1)*.35+.018;
  p+=amp*uMov*vec3(sin(uTempo*.6+s*40.),cos(uTempo*.5+s*23.),sin(uTempo*.4+s*57.));
  vec3 v=p; v.xy+=uDesloc; v.z-=uCamZ;
  vec4 c=uProj*vec4(v,1.); vec2 n=c.xy/c.w;
  vec2 d=(n-uMouse)*vec2(uAspecto,1.); float L=length(d)+1e-4;
  v.xy+=d/L*uMouseOn*smoothstep(.3,0.,L)*.07*(-v.z);
  vec2 ds=(n-uChoque)*vec2(uAspecto,1.); float Ls=length(ds)+1e-4;
  float sh=uChoqueT>=0.?exp(-pow((Ls-uChoqueT*1.6)*8.,2.))*exp(-uChoqueT*2.):0.;
  v.xy+=ds/Ls*sh*.05*(-v.z);
  gl_Position=uProj*vec4(v,1.);
  float prof=-v.z;
  gl_PointSize=uTam*uDpr*(.55+aSem.y*.9)/max(prof,.2)*(1.+sh*1.4);
  vCor=mix(uCorA,uCorB,aSem.y)*(.5+.5*aSem.y)+sh*.6;
  vAlfa=.9*smoothstep(.15,1.4,prof);
}`;
const FS = `precision mediump float; varying vec3 vCor; varying float vAlfa;
void main(){float d=length(gl_PointCoord-.5); if(d>.5)discard; float a=smoothstep(.5,0.,d); a*=a; gl_FragColor=vec4(vCor*a*vAlfa,a*vAlfa);}`;

/** Gera as quatro formas. Semente fixa: a cena sai igual em toda visita. */
function formas(N: number) {
  let seed = 41;
  const rnd = () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const j = (k = 0.03) => (rnd() - 0.5) * k;
  const lerp = (a: number[], b: number[], u: number) => [a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u];
  /** ponto ao longo de uma polilinha (por comprimento) */
  const naLinha = (pts: number[][]) => {
    const seg = pts.slice(1).map((b, i) => [pts[i], b, Math.hypot(b[0] - pts[i][0], b[1] - pts[i][1])] as const);
    let t = rnd() * seg.reduce((s, x) => s + x[2], 0);
    for (const [a, b, l] of seg) { if (t <= l) return lerp(a, b, t / l); t -= l; }
    return pts[pts.length - 1];
  };
  const hexagono = (r: number) => Array.from({ length: 7 }, (_, k) => { const a = Math.PI / 2 + (k * Math.PI) / 3; return [Math.cos(a) * r, Math.sin(a) * r]; });

  // Logo JZ: o hexágono da marca com o J e o Z dentro (escala 1 ≈ raio 1.45).
  const HEX = hexagono(1.45);
  // O J tem a barra no alto e o gancho virado para a ESQUERDA — com o gancho para a
  // direita ele lia "L" (Jean, 04/10).
  const J = [[-0.36, 0.55], [-0.36, -0.3], [-0.5, -0.54], [-0.74, -0.54], [-0.88, -0.32]];
  const J_TOPO = [[-0.62, 0.55], [-0.12, 0.55]];
  const Z = [[0.02, 0.55], [0.86, 0.55], [0.06, -0.54], [0.86, -0.54]];
  function logo(): Vec3 {
    const u = rnd();
    const p = u < 0.48 ? naLinha(HEX) : u < 0.68 ? naLinha(J) : u < 0.74 ? naLinha(J_TOPO) : naLinha(Z);
    return [p[0] + j(), p[1] + j(), j(0.08)];
  }

  // Ato 2: a bagunça — folhas de papel, planilhas e balões de mensagem soltos e tortos.
  const FOLHA = [[-0.42, 0.55], [0.42, 0.55], [0.42, -0.55], [-0.42, -0.55], [-0.42, 0.55]];
  const LINHAS_F = [0.3, 0.1, -0.1, -0.3].map((y, i) => [[-0.26, y], [i === 3 ? 0.05 : 0.26, y]]);
  const PLAN = [[-0.6, 0.4], [0.6, 0.4], [0.6, -0.4], [-0.6, -0.4], [-0.6, 0.4]];
  const GRADE = [[[-0.6, 0.22], [0.6, 0.22]], [[-0.6, 0.0], [0.6, 0.0]], [[-0.6, -0.2], [0.6, -0.2]], [[-0.25, 0.4], [-0.25, -0.4]], [[0.15, 0.4], [0.15, -0.4]]];
  const BALAO = [[-0.6, 0.38], [0.6, 0.38], [0.6, -0.28], [-0.08, -0.28], [-0.42, -0.56], [-0.3, -0.28], [-0.6, -0.28], [-0.6, 0.38]];
  const LINHAS_B = [[[-0.38, 0.14], [0.38, 0.14]], [[-0.38, -0.06], [0.1, -0.06]]];
  function bagunca(tipo: number): number[] {
    const u = rnd();
    if (tipo === 0) return u < 0.65 ? naLinha(FOLHA) : naLinha(LINHAS_F[(rnd() * 4) | 0]);
    if (tipo === 1) return u < 0.42 ? naLinha(PLAN) : u < 0.62 ? [-0.6 + rnd() * 1.2, 0.24 + rnd() * 0.15] : naLinha(GRADE[(rnd() * 5) | 0]); // o cabeçalho é cheio
    return u < 0.7 ? naLinha(BALAO) : naLinha(LINHAS_B[(rnd() * 2) | 0]);
  }
  const SOLTAS = [[-2.0, 0.95], [-0.7, 1.25], [0.7, 1.05], [2.0, 1.15], [-1.5, -0.1], [0.05, 0.05], [1.45, -0.05], [-2.05, -1.2], [-0.6, -1.15], [0.85, -1.25], [2.05, -1.0], [-1.25, 0.55]]
    .map(([x, y], k) => ({ c: [x * 0.82 + 0.3 + j(0.12), y * 0.95 + j(0.1), (rnd() * 2 - 1) * 0.35], a: (rnd() - 0.5) * 1.1, e: 0.4 + rnd() * 0.12, tipo: k % 3 }));

  // Ato 3: o hub JZ no meio, ligado por raios aos 12 sistemas; dados viajam nos raios.
  const SISTEMAS = Array.from({ length: 12 }, (_, k) => { const a = (k / 12) * Math.PI * 2 + Math.PI / 12; return [Math.cos(a) * 1.32, Math.sin(a) * 1.1]; });
  const circulo = (cx: number, cy: number, r: number) => { const a = rnd() * Math.PI * 2; return [cx + Math.cos(a) * r, cy + Math.sin(a) * r]; };
  const HEX_HUB = hexagono(0.5);

  const A0 = new Float32Array(N * 3), A1 = new Float32Array(N * 3), A2 = new Float32Array(N * 3), A3 = new Float32Array(N * 3), SEM = new Float32Array(N * 2);
  for (let i = 0; i < N; i++) {
    const o = i * 3;
    A0.set([(rnd() * 2 - 1) * 4.4, (rnd() * 2 - 1) * 2.8, (rnd() * 2 - 1) * 3], o);
    A1.set(logo(), o);

    const s = SOLTAS[(rnd() * SOLTAS.length) | 0], q0 = bagunca(s.tipo), q = [q0[0] * s.e, q0[1] * s.e], ca = Math.cos(s.a), sa = Math.sin(s.a);
    A2.set([q[0] * ca - q[1] * sa + s.c[0] + j(0.015), q[0] * sa + q[1] * ca + s.c[1] + j(0.015), s.c[2] + j(0.03)], o);

    const u = rnd(), k = (rnd() * SISTEMAS.length) | 0, [cx, cy] = SISTEMAS[k];
    let p: number[];
    if (u < 0.16) p = naLinha(HEX_HUB);                                              // o hexágono do hub
    else if (u < 0.24) { const l = rnd() < 0.5 ? J : Z; const n = naLinha(l); p = [n[0] * 0.3, n[1] * 0.3]; } // o JZ dentro dele
    else if (u < 0.5) p = circulo(cx, cy, 0.15 + j(0.02));                           // cada sistema
    else if (u < 0.8) p = lerp([cx * 0.27, cy * 0.27], [cx * 0.9, cy * 0.9], rnd());  // o raio até ele
    else { const t = 0.35 + ((k * 0.11 + rnd() * 0.05) % 0.5), n = circulo(0, 0, 0.05); p = [cx * t + n[0], cy * t + n[1]]; } // dado a caminho
    A3.set([p[0] + 0.25 + j(0.015), p[1] + j(0.015), j(0.04)], o);
    SEM.set([rnd(), rnd()], i * 2);
  }
  // Onde ficam, no plano da cena, as etiquetas da bagunça e os 12 sistemas (o +0.25 é o mesmo das partículas).
  const pontos = {
    bagunca: SOLTAS.map((x) => [x.c[0], x.c[1], x.c[2]]),
    sistemas: SISTEMAS.map(([x, y]) => [x + 0.25, y, 0]),
  };
  return { A0, A1, A2, A3, SEM, pontos };
}

export function criarCena(canvas: HTMLCanvasElement, reduzido: boolean): Cena | null {
  const gl = canvas.getContext('webgl', { antialias: false, alpha: true, premultipliedAlpha: true });
  if (!gl) return null;
  const toque = matchMedia('(pointer: coarse)').matches || (navigator.hardwareConcurrency || 8) <= 4;
  const N = toque ? 4500 : 13000;
  const { A0, A1, A2, A3, SEM, pontos } = formas(N);
  const marcados: { [g: string]: (HTMLElement | null)[] } = {};
  let desloc = [0, 0], fProj = 1;

  const sh = (t: number, src: string) => { const s = gl.createShader(t)!; gl.shaderSource(s, src); gl.compileShader(s); return s; };
  const prog = gl.createProgram()!;
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
  gl.useProgram(prog);
  const attr = (nome: string, dados: Float32Array, tam: number) => {
    const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, dados, gl.STATIC_DRAW);
    const l = gl.getAttribLocation(prog, nome); gl.enableVertexAttribArray(l); gl.vertexAttribPointer(l, tam, gl.FLOAT, false, 0, 0);
  };
  attr('a0', A0, 3); attr('a1', A1, 3); attr('a2', A2, 3); attr('a3', A3, 3); attr('aSem', SEM, 2);
  const U = (n: string) => gl.getUniformLocation(prog, n);
  const u = Object.fromEntries(['uMorph', 'uTempo', 'uCamZ', 'uAspecto', 'uTam', 'uDpr', 'uMov', 'uMouseOn', 'uChoqueT', 'uRot', 'uMouse', 'uChoque', 'uDesloc', 'uProj', 'uCorA', 'uCorB'].map((n) => [n, U(n)]));
  gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE); gl.clearColor(0, 0, 0, 0);

  let aspecto = 1, camBase = 5.4;
  function redimensiona() {
    const celular = innerWidth < 900;
    const dpr = Math.min(devicePixelRatio || 1, toque ? 1.25 : 1.75);
    const w = canvas.clientWidth, h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    gl!.viewport(0, 0, canvas.width, canvas.height);
    aspecto = canvas.width / canvas.height;
    const meia = Math.tan((20 * Math.PI) / 180), f = 1 / meia, near = 0.1, far = 60;
    gl!.uniformMatrix4fv(u.uProj, false, new Float32Array([f / aspecto, 0, 0, 0, 0, f, 0, 0, 0, 0, (far + near) / (near - far), -1, 0, 0, (2 * far * near) / (near - far), 0]));
    // tela baixa (celular pequeno): cena menor e mais para cima, para o texto caber embaixo
    const baixa = celular && innerHeight < 720;
    camBase = celular ? Math.max(5.4, 1.9 / (meia * aspecto)) * (baixa ? 1.45 : 1) : 5.4;
    desloc = celular ? [0, meia * camBase * (baixa ? 0.5 : 0.34)] : [Math.min(1.55, meia * camBase * aspecto * 0.4), 0.02];
    fProj = f;
    gl!.uniform2fv(u.uDesloc, desloc);
    gl!.uniform1f(u.uAspecto, aspecto); gl!.uniform1f(u.uDpr, dpr); gl!.uniform1f(u.uTam, (toque ? 26 : 19) * (camBase / 5.4));
  }
  redimensiona();
  const aoRedimensionar = () => redimensiona();
  addEventListener('resize', aoRedimensionar);

  let mouse = [9, 9], mouseAlvo = [9, 9], mouseOn = 0, mouseOnAlvo = 0, choque = [0, 0], choqueT = -1, inc = [0, 0];
  const mover = (e: PointerEvent) => { mouseAlvo = [(e.clientX / innerWidth) * 2 - 1, 1 - (e.clientY / innerHeight) * 2]; mouseOnAlvo = e.pointerType === 'mouse' ? 1 : 0; };
  const tocar = (e: PointerEvent) => { if ((e.target as Element).closest('a,button,input,textarea,select') || reduzido) return; choque = [(e.clientX / innerWidth) * 2 - 1, 1 - (e.clientY / innerHeight) * 2]; choqueT = 0; };
  addEventListener('pointermove', mover); addEventListener('pointerdown', tocar);

  let alvo = 1, morph = reduzido ? 1 : 0, mergulhoAlvo = 0, mergulhoV = 0, tempo = 0, ultimo = performance.now(), raf = 0, cont = N, amostras: number[] = [];
  let corA = hex('#A79BFF'), corB = hex('#5046E5'), corAAlvo = corA, corBAlvo = corB;
  function quadro(agora: number) {
    const dt = Math.min(0.05, (agora - ultimo) / 1000); ultimo = agora;
    const visivel = canvas.getBoundingClientRect().bottom > 0 && document.visibilityState === 'visible';
    if (visivel) {
      const k = reduzido ? 1 : 1 - Math.exp(-dt * 3.2);
      morph += (alvo - morph) * k;
      mergulhoV += (mergulhoAlvo - mergulhoV) * (reduzido ? 1 : 1 - Math.exp(-dt * 6));
      const kc = reduzido ? 1 : 1 - Math.exp(-dt * 2.5);
      corA = corA.map((v, i) => v + (corAAlvo[i] - v) * kc) as Rgb; corB = corB.map((v, i) => v + (corBAlvo[i] - v) * kc) as Rgb;
      if (!reduzido) tempo += dt;
      mouse = [mouse[0] + (mouseAlvo[0] - mouse[0]) * 0.08, mouse[1] + (mouseAlvo[1] - mouse[1]) * 0.08];
      mouseOn += (mouseOnAlvo * (reduzido ? 0 : 1) - mouseOn) * 0.06;
      inc = [inc[0] + ((mouseOn ? mouse[0] * 0.3 : 0) - inc[0]) * 0.05, inc[1] + ((mouseOn ? -mouse[1] * 0.2 : 0) - inc[1]) * 0.05];
      if (choqueT >= 0) { choqueT += dt; if (choqueT > 2.5) choqueT = -1; }
      if (amostras.length < 120) { amostras.push(dt); if (amostras.length === 120 && amostras.slice(30).filter((x) => x > 0.024).length > 45) cont = N >> 1; }
      const giro = reduzido ? 0 : Math.sin(tempo * 0.35) * 0.35;
      const z = mergulhoV * mergulhoV * (3 - 2 * mergulhoV);
      gl!.uniform1f(u.uMorph, morph); gl!.uniform1f(u.uTempo, tempo); gl!.uniform1f(u.uCamZ, camBase - (camBase - 0.2) * z);
      gl!.uniform1f(u.uMov, reduzido ? 0 : 1); gl!.uniform1f(u.uMouseOn, mouseOn); gl!.uniform1f(u.uChoqueT, choqueT);
      gl!.uniform2f(u.uRot, giro + inc[0], 0.06 + inc[1]); gl!.uniform2fv(u.uMouse, mouse); gl!.uniform2fv(u.uChoque, choque);
      gl!.uniform3fv(u.uCorA, corA); gl!.uniform3fv(u.uCorB, corB);
      gl!.clear(gl!.COLOR_BUFFER_BIT); gl!.drawArrays(gl!.POINTS, 0, cont);
      // as etiquetas seguem a mesma conta do shader: giro (rY depois rX), deslocamento, câmera e projeção
      const camZ = camBase - (camBase - 0.2) * z, ax = giro + inc[0], ay = 0.06 + inc[1];
      const cy1 = Math.cos(ax), sy1 = Math.sin(ax), cx1 = Math.cos(ay), sx1 = Math.sin(ay);
      const W = canvas.clientWidth, H = canvas.clientHeight;
      for (const g in marcados) {
        const lista = (pontos as Record<string, number[][]>)[g];
        marcados[g].forEach((el, i) => {
          if (!el || !lista[i]) return;
          const [x0, y0, z0] = lista[i];
          const x1 = cy1 * x0 + sy1 * z0, z1 = -sy1 * x0 + cy1 * z0;
          const y2 = cx1 * y0 - sx1 * z1, z2 = sx1 * y0 + cx1 * z1;
          const vx = x1 + desloc[0], vy = y2 + desloc[1], vz = z2 - camZ;
          const nx = (fProj / aspecto) * vx / -vz, ny = fProj * vy / -vz;
          el.style.transform = `translate(${((nx + 1) / 2) * W}px, ${((1 - ny) / 2) * H}px) translate(-50%, -50%)`;
        });
      }
    }
    raf = requestAnimationFrame(quadro);
  }
  raf = requestAnimationFrame(quadro);
  const perdeu = (e: Event) => e.preventDefault();
  canvas.addEventListener('webglcontextlost', perdeu);

  return {
    alvo: (f) => { alvo = f; },
    cor: (a, b) => { corAAlvo = a; corBAlvo = b; },
    mergulho: (v) => { mergulhoAlvo = v; },
    marcar: (g, els) => { marcados[g] = els; },
    desmontar: () => {
      cancelAnimationFrame(raf);
      removeEventListener('resize', aoRedimensionar); removeEventListener('pointermove', mover); removeEventListener('pointerdown', tocar);
      canvas.removeEventListener('webglcontextlost', perdeu);
    },
  };
}
