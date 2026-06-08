# Street Style - Landing Page "Link in Bio"

Uma landing page moderna e responsiva para a loja Street Style, com design streetwear e 3 CTAs principais.

## 🎯 Objetivo

Concentrar os principais links da loja Street Style em uma página única, leve e visualmente atrativa.

## ✨ Características

- **Design Streetwear**: Fundo escuro, tipografia forte, cores neon
- **Mobile-First**: Otimizada para dispositivos móveis
- **3 CTAs Principais**:
  - 🟢 Falar no WhatsApp
  - ⭐ Entrar no Grupo VIP
  - 🏠 Visitar o Site
- **Performance**: Página leve sem frameworks pesados
- **Acessibilidade**: Contraste AA, foco visível, aria-labels

## 🛠️ Stack Técnica

- **HTML5**: Estrutura semântica
- **CSS3**: Design responsivo com variáveis CSS
- **JavaScript**: Interatividade e animações
- **Google Fonts**: Tipografia Poppins

## 📁 Estrutura de Arquivos

```
street-style-landing/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── assets/             # Imagens
│   ├── hero-image.jpg  # Foto do grupo (hero)
│   └── logo-street-style.png # Logo da marca
├── README.md           # Documentação
├── todo.md             # Lista de tarefas
└── teste-resultados.md # Resultados dos testes
```

## 🔗 Configuração dos Links

Os links estão configurados no arquivo `script.js`:

```javascript
const LINKS = {
    WHATSAPP_URL: "https://wa.me/5544974199256?text=Olá%20Street%20Style!%20Vim%20através%20do%20link%20in%20bio.",
    GRUPO_VIP_URL: "https://chat.whatsapp.com/FynZ1aK2K0S2qAicxbYPuD?mode=ems_wa_t",
    SITE_URL: "https://click-joias.jztech.com.br/pedido/streetstyle"
};
```

## 🎨 Paleta de Cores

- **Primária**: `#000000` (Preto)
- **Secundária**: `#1a1a1a` (Cinza escuro)
- **Acento**: `#39FF14` (Verde neon)
- **Texto**: `#ffffff` (Branco)
- **Texto secundário**: `#999999` (Cinza claro)

## 📱 Responsividade

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Como Usar

1. **Abrir**: Acesse `index.html` em qualquer navegador
2. **Personalizar**: Edite os links no `script.js` conforme necessário
3. **Deploy**: Faça upload dos arquivos para seu servidor web

## ✅ Testes Realizados

- ✅ Carregamento da página
- ✅ Funcionalidade dos botões CTAs
- ✅ Responsividade mobile/desktop
- ✅ Acessibilidade (contraste, foco, aria-labels)
- ✅ Performance e otimização

## 📞 Contatos Configurados

- **WhatsApp**: +55 44 9741-9256
- **Grupo VIP**: Família Street Style 🤟🖤
- **Site**: click-joias.jztech.com.br/pedido/streetstyle

## 🔧 Manutenção

Para atualizar os links, edite apenas o objeto `LINKS` no arquivo `script.js`. Não é necessário modificar o HTML ou CSS.

## 📄 Licença

Projeto desenvolvido para Street Style. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para Street Style**

