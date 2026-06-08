
// ===== CONFIGURAÇÃO DOS LINKS =====
const LINKS = {
    WHATSAPP_URL: "https://wa.me/554498212703?text=Olá%20Street%20Style!%20Vim%20através%20do%20link%20in%20bio.",
    GRUPO_VIP_URL: "https://chat.whatsapp.com/FynZ1aK2K0S2qAicxbYPuD?mode=ems_wa_t",
    SITE_URL: "https://streetstyle.com.br/",
    INSTAGRAM_URL: "https://www.instagram.com/street_style.044?igsh=cWdqcHcxbzdvamti"
};

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    initializeLinks();
    initializeAnimations();
    initializeInteractions();
});

// ===== CONFIGURAR LINKS DOS BOTÕES =====
function initializeLinks() {
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const vipBtn = document.getElementById('vip-btn');
    const siteBtn = document.getElementById('site-btn');
    const instagramBtn = document.getElementById('instagram-btn');

    if (whatsappBtn) {
        whatsappBtn.href = LINKS.WHATSAPP_URL;
        whatsappBtn.addEventListener('click', function(e) {
            trackClick('whatsapp');
        });
    }

    if (vipBtn) {
        vipBtn.href = LINKS.GRUPO_VIP_URL;
        vipBtn.addEventListener('click', function(e) {
            trackClick('grupo_vip');
        });
    }

    if (siteBtn) {
        siteBtn.href = LINKS.SITE_URL;
        siteBtn.addEventListener('click', function(e) {
            trackClick('site');
        });
    }

    if (instagramBtn) {
        instagramBtn.href = LINKS.INSTAGRAM_URL;
        instagramBtn.addEventListener('click', function(e) {
            trackClick('instagram');
        });
    }
}

// ===== ANIMAÇÕES E INTERAÇÕES =====
function initializeAnimations() {
    // Animação de entrada para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.hero-content, .cta-button, .destaque-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

function initializeInteractions() {
    // Efeito de ripple nos botões
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            createRippleEffect(e, this);
        });

        // Efeito de hover melhorado
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Efeito parallax suave no hero
    const heroImage = document.querySelector('.hero-img');
    if (heroImage) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            heroImage.style.transform = `translateY(${rate}px)`;
        });
    }

    // Efeito de glow no logo
    const logo = document.querySelector('.logo-img');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.filter = 'drop-shadow(0 0 30px rgba(57, 255, 20, 0.8))';
        });

        logo.addEventListener('mouseleave', function() {
            this.style.filter = 'drop-shadow(0 0 10px rgba(57, 255, 20, 0.3))';
        });
    }
}

// ===== EFEITO RIPPLE =====
function createRippleEffect(event, element) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    // Adicionar CSS para o ripple se não existir
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                pointer-events: none;
            }
            
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    element.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// ===== TRACKING DE CLIQUES =====
function trackClick(buttonType) {
    // Analytics simples - pode ser expandido com Google Analytics, etc.
    console.log(`Clique no botão: ${buttonType}`);
    
    // Feedback visual
    showClickFeedback(buttonType);
}

function showClickFeedback(buttonType) {
    const messages = {
        'whatsapp': 'Redirecionando para WhatsApp...',
        'grupo_vip': 'Abrindo Grupo VIP...',
        'site': 'Acessando o site...',
        'instagram': 'Abrindo Instagram...'
    };

    const message = messages[buttonType] || 'Redirecionando...';
    
    // Criar notificação temporária
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #39FF14, #2ECC40);
        color: #000;
        padding: 12px 20px;
        border-radius: 8px;
        font-weight: 600;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease-out;
        box-shadow: 0 4px 15px rgba(57, 255, 20, 0.3);
    `;

    document.body.appendChild(notification);

    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ===== UTILITÁRIOS =====
// Smooth scroll para links internos (se houver)
function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Detectar dispositivo móvel
function isMobile() {
    return window.innerWidth <= 768;
}

// Otimizações para performance
function optimizeForPerformance() {
    // Lazy loading para imagens (se necessário)
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}

// ===== INICIALIZAÇÃO ADICIONAL =====
window.addEventListener('load', function() {
    optimizeForPerformance();
    initializeSmoothScroll();
    
    // Remover loading se houver
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 300);
    }
});

// ===== EXPORT PARA TESTES =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        LINKS,
        trackClick,
        createRippleEffect
    };
}

