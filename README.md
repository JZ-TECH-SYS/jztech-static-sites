# jztech-static-sites

**Fonte única** + deploy **unificado** dos sites **estáticos** da JZ Tech (páginas de apresentação + sites de
clientes): **1 nginx no GKE**, roteado por Host no **Gateway compartilhado** (IP `35.201.93.142`) — mais barato que
1 deploy/LB por site no GCP.

> O fonte de cada site fica em **`sites-src/<dominio>/`** (consolidado aqui = fonte da verdade). Os repositórios
> antigos de cada site foram esvaziados e apontam pra cá. `sites/` (o build) é gerado, não versionado.

## Sites (origem)
| Domínio | Origem original | Tipo |
|---|---|---|
| jztech.com.br (+ www) | JZ-TECH-SYS/landing-page | Vite |
| joaosn.jztech.com.br | joaosn/joaosn-portifolio | Vite |
| prescila.jztech.com.br | joaosn/land-page-prescila | Vite |
| scooby.aquarios.link.jztech.com.br | joaosn/scooby_aquario | Vite |
| jg-eletricista.jztech.com.br | joaosn/JG-eletricista | Vite |
| juninho-mototaxi.jztech.com.br | joaosn/junio-moto-taxi | Vite |
| leticia.jztech.com.br | joaosn/niverleticia | estático |
| street.style.links.jztech.com.br | joaosn/street-style-landing | estático |
| jean.jztech.com.br | JeanFelipe10/Portifolio (cliente) | estático |
| clientecelularis.jztech.com.br | — | placeholder |

## Build / deploy
```bash
./build.sh          # builda do sites-src/ (Vite via docker node) e monta a imagem
./build.sh --push   # idem + push no Artifact Registry + rollout no GKE
```
- `nginx.conf` — `map $host -> /sites/<dominio>` (1 server roteia por Host) + bloqueio de dotfiles.
- `Dockerfile` — nginx:alpine + COPY sites + `chmod -R a+rX /sites`.
- `k8s.yaml` — ns `static-sites`, Deployment (2 réplicas), Service, HTTPRoute (todos os hosts).

## Editar / adicionar site
1. Edite em `sites-src/<dominio>/` (ou crie a pasta nova).
2. (site novo) adicione no `MAP` do `build.sh` + no `map` do `nginx.conf` + nos `hostnames` do HTTPRoute (`k8s.yaml`)
   + cert no `jztech-infra/gateway.tf` (DNS-auth p/ subdomínio; LB-auth p/ apex) + A no DNS → `35.201.93.142`.
3. `./build.sh --push`.
