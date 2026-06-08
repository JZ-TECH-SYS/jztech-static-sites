#!/usr/bin/env bash
# Monta a imagem UNIFICADA dos sites estaticos a partir do FONTE em sites-src/ (fonte unica da verdade).
# Vite -> builda (node22+npm, num tmp pra nao sujar sites-src); estatico -> copia. Uso: ./build.sh [--push]
set -uo pipefail
export PATH="/home/jvzyz/google-cloud-sdk/bin:$PATH"
IMG="southamerica-east1-docker.pkg.dev/jztech-490722/jztech-docker-prod/static-sites:latest"
HERE="$(cd "$(dirname "$0")" && pwd)"; cd "$HERE"
rm -rf sites; mkdir -p sites

# dominio (= docroot) | tipo (vite|static)
MAP='
jztech.com.br|vite
joaosn.jztech.com.br|vite
prescila.jztech.com.br|vite
scooby.aquarios.link.jztech.com.br|vite
jg-eletricista.jztech.com.br|vite
juninho-mototaxi.jztech.com.br|vite
leticia.jztech.com.br|static
street.style.links.jztech.com.br|static
jean.jztech.com.br|static
'
echo "$MAP" | while IFS='|' read -r site type; do
  [ -z "$site" ] && continue
  src="sites-src/$site"; [ -d "$src" ] || { echo "  !! sem fonte $src"; continue; }
  echo "== $site ($type) =="
  if [ "$type" = vite ]; then
    tmp="$(mktemp -d)"
    rsync -a --exclude=node_modules --exclude=dist --exclude=.pnpm-store "$src/" "$tmp/"
    docker run --rm -v "$tmp":/app -w /app node:22-alpine sh -c \
      'npm install --no-audit --no-fund >/dev/null 2>&1 && npm run build >/dev/null 2>&1' || true
    if [ -d "$tmp/dist" ]; then mkdir -p "sites/$site"; cp -r "$tmp/dist/." "sites/$site/"; else echo "  !! BUILD FALHOU ($site)"; fi
    rm -rf "$tmp"
  else
    mkdir -p "sites/$site"; rsync -a --exclude=node_modules "$src/" "sites/$site/"
  fi
  echo "  -> $(find "sites/$site" -type f 2>/dev/null | wc -l) arq"
done

# clientecelularis: sem repo (era lixo na HG) -> placeholder
mkdir -p sites/clientecelularis.jztech.com.br
printf '<!doctype html><html lang=pt-BR><meta charset=utf-8><title>Em breve</title><body style="font-family:sans-serif;text-align:center;padding:4rem"><h1>Em construção</h1></body></html>' \
  > sites/clientecelularis.jztech.com.br/index.html

echo "== docker build =="; docker build -t "$IMG" .
if [ "${1:-}" = "--push" ]; then
  docker push "$IMG"
  USE_GKE_GCLOUD_AUTH_PLUGIN=True kubectl rollout restart deployment/static-sites -n static-sites
fi
rm -rf sites
echo "OK."
