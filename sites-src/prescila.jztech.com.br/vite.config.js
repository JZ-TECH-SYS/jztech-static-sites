import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// No ar o nginx entrega public/bio/index.html em /bio/; o servidor de desenvolvimento cairia no site (rota do React).
const bioNoDev = {
  name: 'bio-no-dev',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => { if (/^\/bio\/?(\?.*)?$/.test(req.url)) req.url = '/bio/index.html'; next(); });
  },
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), bioNoDev],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
