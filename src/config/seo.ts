// Meta Tags Dinâmicas para SEO
// Este arquivo pode ser importado em componentes para atualizar meta tags dinamicamente

export const seoConfig = {
  siteName: 'GR Pré Moldados',
  siteUrl: 'https://www.grpremoldadosce.com.br',
  defaultTitle: 'GR Pré Moldados Fortaleza - Blocos, Canaletas e Pré-Moldados CE',
  defaultDescription: 'GR Pré Moldados em Fortaleza-CE: Fabricante de blocos de concreto, canaletas e pré-moldados com 15+ anos de experiência. Qualidade superior para sua obra. Solicite orçamento!',
  defaultKeywords: 'pré moldados fortaleza, blocos de concreto fortaleza, canaletas fortaleza, materiais de construção fortaleza, blocos estruturais ceará',
  social: {
    instagram: '@grpremoldados',
    facebook: 'grpremoldados',
    whatsapp: '558592895924',
  },
  business: {
    name: 'GR Pré Moldados',
    phone: '+558592895924',
    city: 'Fortaleza',
    state: 'CE',
    country: 'BR',
  }
};

// Função para atualizar título da página
export const updatePageTitle = (title: string) => {
  document.title = title ? `${title} | ${seoConfig.siteName}` : seoConfig.defaultTitle;
};

// Função para atualizar meta description
export const updateMetaDescription = (description: string) => {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description);
  }
};

// Função para atualizar Open Graph tags
export const updateOGTags = (title: string, description: string, image?: string) => {
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  const ogImage = document.querySelector('meta[property="og:image"]');
  
  if (ogTitle) ogTitle.setAttribute('content', title);
  if (ogDescription) ogDescription.setAttribute('content', description);
  if (ogImage && image) ogImage.setAttribute('content', image);
};

// Palavras-chave alvo para conteúdo
export const targetKeywords = {
  primary: [
    'blocos de concreto fortaleza',
    'pré moldados fortaleza',
    'canaletas fortaleza',
    'blocos estruturais fortaleza',
  ],
  secondary: [
    'blocos de vedação fortaleza',
    'lajes pré moldadas fortaleza',
    'materiais de construção fortaleza',
    'fábrica de blocos ceará',
  ],
  longTail: [
    'onde comprar blocos de concreto em fortaleza',
    'melhor fábrica de pré moldados fortaleza',
    'preço de bloco estrutural fortaleza',
    'canaletas pré moldadas em fortaleza ce',
  ]
};

// SEO para produtos específicos
export const productSEO = {
  blocos: {
    title: 'Blocos de Concreto em Fortaleza | GR Pré Moldados',
    description: 'Blocos de concreto estruturais e de vedação com padrão industrial. Qualidade garantida para sua obra em Fortaleza-CE. Solicite orçamento!',
    keywords: 'blocos de concreto, blocos estruturais, blocos de vedação, fortaleza',
  },
  canaletas: {
    title: 'Canaletas Pré-Moldadas Fortaleza | GR Pré Moldados',
    description: 'Canaletas pré-moldadas de alta resistência para sistemas de drenagem. Fabricação própria em Fortaleza-CE. Peça seu orçamento!',
    keywords: 'canaletas, canaletas pré moldadas, drenagem, fortaleza',
  },
  lajes: {
    title: 'Lajes Pré-Moldadas Fortaleza | GR Pré Moldados',
    description: 'Lajes pré-moldadas com qualidade industrial. Segurança e durabilidade para sua construção em Fortaleza. Consulte!',
    keywords: 'lajes pré moldadas, lajes, construção civil, fortaleza',
  }
};

export default seoConfig;
