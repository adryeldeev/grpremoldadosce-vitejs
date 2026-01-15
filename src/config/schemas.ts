// Exemplos de Structured Data (JSON-LD) para diferentes páginas
// Adicione estes scripts no <head> de páginas específicas

// =============================================================================
// 1. FAQ PAGE SCHEMA - Para página de Perguntas Frequentes
// =============================================================================
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qual a diferença entre bloco estrutural e bloco de vedação?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Blocos estruturais têm resistência mínima de 4 MPa e são usados em paredes que suportam carga. Blocos de vedação têm resistência de 2,5 MPa e são usados apenas para fechar vãos, sem função estrutural."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto custa o bloco de concreto em Fortaleza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O preço varia entre R$ 2,50 e R$ 5,00 por unidade, dependendo do tipo. Blocos de vedação custam entre R$ 2,50-R$ 3,50, enquanto blocos estruturais custam R$ 3,50-R$ 5,00."
      }
    },
    {
      "@type": "Question",
      "name": "A GR Pré Moldados faz entrega em Fortaleza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, realizamos entregas em toda Fortaleza e região metropolitana, incluindo Caucaia, Maracanaú, Eusébio e Aquiraz. Entre em contato para calcular o frete."
      }
    },
    {
      "@type": "Question",
      "name": "Quantos blocos preciso por metro quadrado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para blocos de 14x19x39cm, são necessários aproximadamente 12,5 blocos por metro quadrado de parede. Recomendamos adicionar 10% para perdas e quebras."
      }
    }
  ]
};

// =============================================================================
// 2. PRODUCT SCHEMA - Para página de produto específico (Blocos)
// =============================================================================
export const productBlocosSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Blocos de Concreto Estrutural",
  "description": "Blocos de concreto estrutural de alta resistência (4-12 MPa), ideais para construção de paredes que suportam carga. Fabricação própria com controle de qualidade.",
  "image": [
    "https://grpremoldadosce.com.br/images/blocos-estruturais-1.jpg",
    "https://grpremoldadosce.com.br/images/blocos-estruturais-2.jpg",
    "https://grpremoldadosce.com.br/images/blocos-estruturais-3.jpg"
  ],
  "brand": {
    "@type": "Brand",
    "name": "GR Pré Moldados"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "GR Pré Moldados",
    "url": "https://grpremoldadosce.com.br"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://grpremoldadosce.com.br/produtos/blocos-estruturais",
    "priceCurrency": "BRL",
    "price": "4.50",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "GR Pré Moldados"
    },
    "itemCondition": "https://schema.org/NewCondition"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "João Silva"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Blocos de excelente qualidade! Usamos em toda a construção e não tivemos problemas. Resistência excepcional."
    }
  ],
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Dimensões",
      "value": "14x19x39cm"
    },
    {
      "@type": "PropertyValue",
      "name": "Resistência",
      "value": "4-12 MPa"
    },
    {
      "@type": "PropertyValue",
      "name": "Material",
      "value": "Concreto"
    }
  ]
};

// =============================================================================
// 3. SERVICE SCHEMA - Para serviços oferecidos
// =============================================================================
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Fornecimento de Materiais de Construção",
  "provider": {
    "@type": "LocalBusiness",
    "name": "GR Pré Moldados",
    "image": "https://grpremoldadosce.com.br/logo.jpg",
    "telephone": "+558592895924",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Fortaleza",
      "addressRegion": "CE",
      "addressCountry": "BR"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Fortaleza"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Produtos em Pré-Moldados",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Blocos de Concreto"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Canaletas Pré-Moldadas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lajes Pré-Moldadas"
        }
      }
    ]
  }
};

// =============================================================================
// 4. ARTICLE SCHEMA - Para artigos de blog
// =============================================================================
export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Como Escolher Blocos de Concreto para Sua Obra",
  "alternativeHeadline": "Guia Completo: Blocos Estruturais vs Blocos de Vedação",
  "image": "https://grpremoldadosce.com.br/blog/como-escolher-blocos.jpg",
  "author": {
    "@type": "Organization",
    "name": "GR Pré Moldados",
    "url": "https://grpremoldadosce.com.br"
  },
  "publisher": {
    "@type": "Organization",
    "name": "GR Pré Moldados",
    "logo": {
      "@type": "ImageObject",
      "url": "https://grpremoldadosce.com.br/logo.jpg"
    }
  },
  "datePublished": "2026-01-15",
  "dateModified": "2026-01-15",
  "description": "Aprenda a escolher o bloco de concreto ideal para sua construção. Descubra as diferenças entre blocos estruturais e de vedação.",
  "articleBody": "Texto completo do artigo aqui...",
  "wordCount": 1200,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://grpremoldadosce.com.br/blog/como-escolher-blocos"
  }
};

// =============================================================================
// 5. VIDEO SCHEMA - Para vídeos (YouTube, etc)
// =============================================================================
export const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Como são Fabricados os Blocos de Concreto - GR Pré Moldados",
  "description": "Conheça o processo de fabricação dos blocos de concreto na GR Pré Moldados. Veja nosso rigoroso controle de qualidade.",
  "thumbnailUrl": "https://grpremoldadosce.com.br/videos/fabricacao-thumb.jpg",
  "uploadDate": "2026-01-15",
  "duration": "PT5M30S",
  "contentUrl": "https://www.youtube.com/watch?v=XXXXXXXXX",
  "embedUrl": "https://www.youtube.com/embed/XXXXXXXXX",
  "publisher": {
    "@type": "Organization",
    "name": "GR Pré Moldados",
    "logo": {
      "@type": "ImageObject",
      "url": "https://grpremoldadosce.com.br/logo.jpg"
    }
  }
};

// =============================================================================
// 6. HOWTO SCHEMA - Para tutoriais e guias passo a passo
// =============================================================================
export const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Calcular a Quantidade de Blocos para Construção",
  "description": "Aprenda a calcular quantos blocos de concreto você precisa para sua obra de forma precisa.",
  "image": "https://grpremoldadosce.com.br/blog/calcular-blocos.jpg",
  "totalTime": "PT10M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "BRL",
    "value": "0"
  },
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Trena"
    },
    {
      "@type": "HowToTool",
      "name": "Calculadora"
    }
  ],
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "Papel e caneta para anotações"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Medir a área",
      "text": "Meça a largura e altura da parede em metros usando uma trena.",
      "image": "https://grpremoldadosce.com.br/tutorial/passo1.jpg",
      "url": "https://grpremoldadosce.com.br/tutorial#passo1"
    },
    {
      "@type": "HowToStep",
      "name": "Calcular área total",
      "text": "Multiplique largura x altura para obter a área em metros quadrados.",
      "image": "https://grpremoldadosce.com.br/tutorial/passo2.jpg",
      "url": "https://grpremoldadosce.com.br/tutorial#passo2"
    },
    {
      "@type": "HowToStep",
      "name": "Multiplicar por 12,5",
      "text": "Para blocos de 14x19x39cm, multiplique a área por 12,5 para saber quantos blocos precisa.",
      "image": "https://grpremoldadosce.com.br/tutorial/passo3.jpg",
      "url": "https://grpremoldadosce.com.br/tutorial#passo3"
    },
    {
      "@type": "HowToStep",
      "name": "Adicionar margem",
      "text": "Adicione 10% ao total para cobrir perdas e quebras durante a construção.",
      "image": "https://grpremoldadosce.com.br/tutorial/passo4.jpg",
      "url": "https://grpremoldadosce.com.br/tutorial#passo4"
    }
  ]
};

// =============================================================================
// 7. REVIEW SCHEMA - Para depoimentos de clientes
// =============================================================================
export const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GR Pré Moldados",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Maria Santos"
      },
      "datePublished": "2025-12-10",
      "reviewBody": "Excelente qualidade dos blocos e ótimo atendimento. Recomendo!",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Pedro Oliveira"
      },
      "datePublished": "2025-11-25",
      "reviewBody": "Melhor fornecedor de pré-moldados em Fortaleza. Entrega rápida e produtos de primeira.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  ]
};

// =============================================================================
// 8. EVENT SCHEMA - Para eventos/promoções
// =============================================================================
export const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Promoção de Blocos de Concreto - Janeiro 2026",
  "description": "Desconto especial em blocos estruturais e de vedação durante todo o mês de janeiro.",
  "image": "https://grpremoldadosce.com.br/promocoes/janeiro-2026.jpg",
  "startDate": "2026-01-01T08:00",
  "endDate": "2026-01-31T18:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "GR Pré Moldados",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Fortaleza",
      "addressRegion": "CE",
      "addressCountry": "BR"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "GR Pré Moldados",
    "url": "https://grpremoldadosce.com.br"
  },
  "offers": {
    "@type": "Offer",
    "price": "3.50",
    "priceCurrency": "BRL",
    "availability": "https://schema.org/InStock",
    "validFrom": "2026-01-01"
  }
};

// =============================================================================
// 9. ITEMLIST SCHEMA - Para listagem de produtos/categorias
// =============================================================================
export const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Produtos GR Pré Moldados",
  "description": "Linha completa de produtos pré-moldados para construção civil",
  "numberOfItems": 3,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Blocos de Concreto",
      "url": "https://grpremoldadosce.com.br/produtos/blocos"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Canaletas Pré-Moldadas",
      "url": "https://grpremoldadosce.com.br/produtos/canaletas"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Lajes Pré-Moldadas",
      "url": "https://grpremoldadosce.com.br/produtos/lajes"
    }
  ]
};

// =============================================================================
// 10. SPEAKABLE SCHEMA - Para busca por voz
// =============================================================================
export const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Blocos de Concreto em Fortaleza",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [
      ".headline",
      ".summary"
    ]
  },
  "url": "https://grpremoldadosce.com.br/produtos/blocos"
};

// =============================================================================
// Como usar estes schemas:
// =============================================================================

/*
1. Adicione no <head> de cada página:

<script type="application/ld+json">
  {JSON.stringify(faqSchema)}
</script>

2. Ou dinamicamente em React:

import { useEffect } from 'react';

function ProductPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(productBlocosSchema);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
  return (
    // Seu componente
  );
}

3. Validar schemas em:
https://search.google.com/test/rich-results
https://validator.schema.org/
*/

export default {
  faqSchema,
  productBlocosSchema,
  serviceSchema,
  articleSchema,
  videoSchema,
  howToSchema,
  reviewsSchema,
  eventSchema,
  itemListSchema,
  speakableSchema
};
