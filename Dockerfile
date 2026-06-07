# JZ-TECH — imagem dos sites estaticos (servidos por 1 nginx, roteado por Host no Gateway)
FROM nginx:1.27-alpine

# Remove config default e aplica a nossa (map Host -> docroot)
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Conteudo estatico de todos os sites (perms da HostGator vinham 750/root -> nginx nao lia)
COPY sites/ /sites/
RUN chmod -R a+rX /sites

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=4s --retries=3 CMD wget -qO- http://localhost/nginx-health || exit 1
