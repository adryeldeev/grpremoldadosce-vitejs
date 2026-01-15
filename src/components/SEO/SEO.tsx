import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({ 
  title, 
  description, 
  keywords,
  image = 'https://grpremoldadosce.com.br/og-image.jpg',
  url = 'https://grpremoldadosce.com.br',
  type = 'website'
}: SEOProps) => {
  useEffect(() => {
    // Atualizar título
    if (title) {
      document.title = title;
    }

    // Atualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }

    // Atualizar meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Atualizar Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogType = document.querySelector('meta[property="og:type"]');

    if (ogTitle && title) ogTitle.setAttribute('content', title);
    if (ogDescription && description) ogDescription.setAttribute('content', description);
    if (ogImage && image) ogImage.setAttribute('content', image);
    if (ogUrl && url) ogUrl.setAttribute('content', url);
    if (ogType && type) ogType.setAttribute('content', type);

    // Atualizar Twitter Card
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    const twitterUrl = document.querySelector('meta[name="twitter:url"]');

    if (twitterTitle && title) twitterTitle.setAttribute('content', title);
    if (twitterDescription && description) twitterDescription.setAttribute('content', description);
    if (twitterImage && image) twitterImage.setAttribute('content', image);
    if (twitterUrl && url) twitterUrl.setAttribute('content', url);

    // Atualizar canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    if (url) canonical.setAttribute('href', url);

  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEO;
