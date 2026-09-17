import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// libera o estado inicial escondido do [data-reveal] (ver index.css):
// sem JS a classe nunca entra e o conteudo aparece normalmente
document.documentElement.classList.add('js')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
