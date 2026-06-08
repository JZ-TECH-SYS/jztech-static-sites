export interface Certificate {
  id: string;
  name: string;
  imageUrl: string;
  realImageUrl: string;
  fallbackImageUrl: string;
}

// Configuração de imagens
const USE_REAL_IMAGES = true; // Altere para true para usar imagens reais
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?q=80&w=800&auto=format&fit=crop";

// Função helper para pegar a URL da imagem
const getImageUrl = (realUrl: string) => {
  if (USE_REAL_IMAGES) {
    console.log(import.meta.url);
    // Importa a imagem usando o caminho relativo à pasta src
    return new URL(`../assets/img/${realUrl}`, import.meta.url).href;
  }
  return FALLBACK_IMAGE;
};

export const certificates: Certificate[] = [
  { 
    id: "angular", 
    name: "Angular", 
    realImageUrl: "angular-min.jpg",
    fallbackImageUrl: FALLBACK_IMAGE,
    imageUrl: ""
  },
  { 
    id: "bootstrap", 
    name: "Bootstrap", 
    realImageUrl: "boots-min.jpg",
    fallbackImageUrl: FALLBACK_IMAGE,
    imageUrl: ""
  },
  { 
    id: "docker", 
    name: "Docker", 
    realImageUrl: "docker-min.jpg",
    fallbackImageUrl: FALLBACK_IMAGE,
    imageUrl: ""
  },
  { 
    id: "frameworks", 
    name: "Frameworks", 
    realImageUrl: "framo-min.jpg",
    fallbackImageUrl: FALLBACK_IMAGE,
    imageUrl: ""
  },
  { 
    id: "git", 
    name: "Git", 
    realImageUrl: "git-min.jpg",
    fallbackImageUrl: FALLBACK_IMAGE,
    imageUrl: ""
  },
  { 
    id: "github", 
    name: "GitHub", 
    realImageUrl: "github-min.jpg",
    fallbackImageUrl: FALLBACK_IMAGE,
    imageUrl: ""
  },
  { 
    id: "html", 
    name: "HTML", 
    realImageUrl: "html-min.jpg",
    fallbackImageUrl: FALLBACK_IMAGE,
    imageUrl: ""
  },
  { 
    id: "htmlcss2", 
    name: "HTML & CSS", 
    realImageUrl: "htmlcss2-min.jpg",
    fallbackImageUrl: FALLBACK_IMAGE,
    imageUrl: ""
  },
  { 
    id: "js", 
    name: "JavaScript", 
    realImageUrl: "js-min.jpg",
    fallbackImageUrl: FALLBACK_IMAGE,
    imageUrl: ""
  },
  { 
    id: "jsav", 
    name: "JavaScript Avançado", 
    realImageUrl: "jsav-min.jpg",
    fallbackImageUrl: FALLBACK_IMAGE,
    imageUrl: ""
  },
  { 
    id: "jsbasico", 
    name: "JavaScript Básico", 
    realImageUrl: "jsbasico-min.jpg",
    fallbackImageUrl: FALLBACK_IMAGE,
    imageUrl: ""
  },
  { 
    id: "jsniv1", 
    name: "JavaScript Nível 1", 
    realImageUrl: "jsl-nv-1-min.jpg",
    fallbackImageUrl: FALLBACK_IMAGE,
    imageUrl: ""
  },
  { 
    id: "mysql", 
    name: "MySQL", 
    realImageUrl: "mysql-min.jpg",
    fallbackImageUrl: FALLBACK_IMAGE,
    imageUrl: ""
  },
  { 
    id: "phpbasico", 
    name: "PHP Básico", 
    realImageUrl: "phpbasico-min.jpg",
    fallbackImageUrl: FALLBACK_IMAGE,
    imageUrl: ""
  },
  { 
    id: "phpoo", 
    name: "PHP Orientado a Objetos", 
    realImageUrl: "phpoo-min.jpg",
    fallbackImageUrl: FALLBACK_IMAGE,
    imageUrl: ""
  },
  { 
    id: "plugin1", 
    name: "Plugin 1", 
    realImageUrl: "plugin1-min.jpg",
    fallbackImageUrl: FALLBACK_IMAGE,
    imageUrl: ""
  },
  { 
    id: "plugin2", 
    name: "Plugin 2", 
    realImageUrl: "plugin2-min.jpg",
    fallbackImageUrl: FALLBACK_IMAGE,
    imageUrl: ""
  },
  { 
    id: "productividade", 
    name: "Produtividade", 
    realImageUrl: "produtividade-min.jpg",
    fallbackImageUrl: FALLBACK_IMAGE,
    imageUrl: ""
  },
  { 
    id: "tema1", 
    name: "Tema 1", 
    realImageUrl: "tema1-min.jpg",
    fallbackImageUrl: FALLBACK_IMAGE,
    imageUrl: ""
  },
  { 
    id: "tema2", 
    name: "Tema 2", 
    realImageUrl: "tema2-min.jpg",
    fallbackImageUrl: FALLBACK_IMAGE,
    imageUrl: ""
  },
  { 
    id: "typescript", 
    name: "TypeScript", 
    realImageUrl: "typescript-min.jpg",
    fallbackImageUrl: FALLBACK_IMAGE,
    imageUrl: ""
  },
  { 
    id: "webservice", 
    name: "Web Service", 
    realImageUrl: "webservice-min.jpg",
    fallbackImageUrl: FALLBACK_IMAGE,
    imageUrl: ""
  }
].map(cert => ({
  ...cert,
  imageUrl: getImageUrl(cert.realImageUrl)
}));
