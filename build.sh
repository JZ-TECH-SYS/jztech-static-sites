#!/usr/bin/env bash
# Monta a imagem UNIFICADA dos sites estaticos a partir dos REPOS-FONTE (cada site no seu repo).
# Vite -> builda (npm) e usa dist/; plain static -> copia a raiz. clientecelularis = placeholder (sem repo).
# Uso: ./build.sh [--push]   (--push tambem faz rollout no GKE)
set -uo pipefail
export PATH="/home/jvzyz/google-cloud-sdk/bin:$PATH"
IMG="southamerica-east1-docker.pkg.dev/jztech-490722/jztech-docker-prod/static-sites:latest"
HERE="$(cd "$(dirname "$0")" && pwd)"; cd "$HERE"
WORK="$(mktemp -d)"; rm -rf sites; mkdir -p sites

# site (= dominio/docroot) | repo-fonte | tipo (vite|static)
MAP='
jztech.com.br|JZ-TECH-SYS/landing-page|vite
joaosn.jztech.com.br|joaosn/joaosn-portifolio|vite
prescila.jztech.com.br|joaosn/land-page-prescila|vite
scooby.aquarios.link.jztech.com.br|joaosn/scooby_aquario|vite
jg-eletricista.jztech.com.br|joaosn/JG-eletricista|vite
juninho-mototaxi.jztech.com.br|joaosn/junio-moto-taxi|vite
leticia.jztech.com.br|joaosn/niverleticia|static
street.style.links.jztech.com.br|joaosn/street-style-landing|static
jean.jztech.com.br|JeanFelipe10/Portifolio|static
'
echo "$MAP" | while IFS='|' read -r site repo type; do
  [ -z "$site" ] && continue
  echo "== $site ($repo, $type) =="
  gh repo clone "$repo" "$WORK/$site" -- -q --depth 1 || { echo "  ERRO clone $repo"; continue; }
  if [ "$type" = vite ]; then
    # builda fresh (node 22 + npm). Se falhar, usa o dist/ commitado como fallback.
    docker run --rm -v "$WORK/$site":/app -w /app node:22-alpine sh -c \
      'rm -rf node_modules; npm install --no-audit --no-fund >/dev/null 2>&1 && npm run build >/dev/null 2>&1' || true
    if [ -d "$WORK/$site/dist" ]; then cp -r "$WORK/$site/dist/." "sites/$site/" 2>/dev/null || { mkdir -p "sites/$site"; cp -r "$WORK/$site/dist/." "sites/$site/"; }
    else echo "  !! sem dist (build falhou e sem dist commitado)"; fi
  else
    mkdir -p "sites/$site"
    rsync -a --exclude='.git' --exclude='.github' --exclude='node_modules' --exclude='*.md' \
      --exclude='.ftp-deploy-sync-state.json' "$WORK/$site/" "sites/$site/"
  fi
  echo "  -> $(find "sites/$site" -type f 2>/dev/null | wc -l) arquivos"
done

# clientecelularis: sem repo (era placeholder lixo na HG) -> placeholder limpo
mkdir -p sites/clientecelularis.jztech.com.br
printf '<!doctype html><html lang=pt-BR><meta charset=utf-8><title>Em breve</title><body style="font-family:sans-serif;text-align:center;padding:4rem"><h1>Em construção</h1></body></html>' \
  > sites/clientecelularis.jztech.com.br/index.html

echo "== docker build =="; docker build -t "$IMG" .
if [ "${1:-}" = "--push" ]; then
  docker push "$IMG"
  USE_GKE_GCLOUD_AUTH_PLUGIN=True kubectl rollout restart deployment/static-sites -n static-sites
fi
rm -rf "$WORK"
echo "OK."
