# jztech-static-sites

Deploy **unificado** dos sites **estáticos** da JZ Tech (páginas de apresentação + sites de clientes):
**1 nginx no GKE**, roteado por Host no **Gateway compartilhado** (IP `35.201.93.142`) — mais barato que 1
deploy/LB por site no GCP.

> Cada site continua tendo o **SEU próprio repositório** (fonte da verdade). Este repo é só o **orquestrador**:
> o `build.sh` clona cada repo-fonte, builda os que são Vite/React e monta a imagem nginx unificada.
> Por isso `sites/` é gerado (não versionado aqui).

## Sites e seus repos-fonte
| Domínio | Repo-fonte | Tipo |
|---|---|---|
| jztech.com.br (+ www) | JZ-TECH-SYS/landing-page | Vite |
| joaosn.jztech.com.br | joaosn/joaosn-portifolio | Vite |
| prescila.jztech.com.br | joaosn/land-page-prescila | Vite |
| scooby.aquarios.link.jztech.com.br | joaosn/scooby_aquario | Vite |
| jg-eletricista.jztech.com.br | joaosn/JG-eletricista | Vite |
| juninho-mototaxi.jztech.com.br | joaosn/junio-moto-taxi | Vite |
| leticia.jztech.com.br | joaosn/niverleticia | estático |
| street.style.links.jztech.com.br | joaosn/street-style-landing | estático |
| jean.jztech.com.br | JeanFelipe10/Portifolio | estático |
| clientecelularis.jztech.com.br | (sem repo) | placeholder |

## Build / deploy
```bash
./build.sh          # clona fontes, builda, monta a imagem
./build.sh --push   # idem + push no Artifact Registry + rollout no GKE
```
- `nginx.conf` — `map $host -> /sites/<dominio>` (1 server roteia por Host) + bloqueio de dotfiles.
- `Dockerfile` — nginx:alpine + COPY sites + `chmod -R a+rX /sites` (perms da HG vinham 750 → 403).
- `k8s.yaml` — namespace `static-sites`, Deployment (2 réplicas), Service, HTTPRoute (todos os hosts).

## Adicionar um site novo
1. Tenha o site no seu repo (Vite ou estático).
2. Adicione a linha no `MAP` do `build.sh` + no `map` do `nginx.conf` + nos `hostnames` do HTTPRoute (`k8s.yaml`).
3. Cert no `jztech-infra/gateway.tf` (DNS-auth p/ subdomínio; LB-auth p/ apex) + cutover do A no DNS → `35.201.93.142`.
4. `./build.sh --push`.
