// Google Analytics 4 Integration
// Substitua 'G-XXXXXXXXXX' pelo seu ID real do Google Analytics

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = 'G-XWPR7DKZZR';
export const GOOGLE_ADS_ID = 'AW-17873278222';
export const GOOGLE_ADS_CONVERSION_LABEL = 'YYYYYYYYYY'; // Substitua pelo label quando criar as conversões

// Inicializar Google Analytics e Google Ads
export const initGA = () => {
  if (typeof window !== 'undefined') {
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}', {
        page_path: window.location.pathname,
      });
      gtag('config', '${GOOGLE_ADS_ID}');
    `;
    document.head.appendChild(script2);
  }
};

// Rastrear visualizações de página
export const pageview = (url: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Rastrear eventos
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Eventos personalizados para GR Pré Moldados
export const trackWhatsAppClick = () => {
  event({
    action: 'click',
    category: 'Contact',
    label: 'WhatsApp Button',
  });
};

export const trackOrcamentoRequest = () => {
  event({
    action: 'request',
    category: 'Conversion',
    label: 'Orçamento Solicitado',
  });
};

export const trackProductView = (productName: string) => {
  event({
    action: 'view',
    category: 'Product',
    label: productName,
  });
};

export const trackPhoneClick = () => {
  event({
    action: 'click',
    category: 'Contact',
    label: 'Phone Number',
  });
};

export const trackSectionView = (sectionName: string) => {
  event({
    action: 'view',
    category: 'Section',
    label: sectionName,
  });
};

// Google Ads Conversion Tracking
export const trackConversion = (conversionLabel?: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/${conversionLabel || GOOGLE_ADS_CONVERSION_LABEL}`,
    });
  }
};

// Rastrear conversão de orçamento (lead)
export const trackOrcamentoConversion = () => {
  trackConversion();
  trackOrcamentoRequest();
};

// Rastrear clique no WhatsApp como conversão
export const trackWhatsAppConversion = () => {
  trackWhatsAppClick();
  // Você pode criar uma conversão específica para WhatsApp se desejar
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/whatsapp_click`,
      value: 1.0,
      currency: 'BRL',
    });
  }
};

// Rastrear clique no telefone como conversão
export const trackPhoneConversion = () => {
  trackPhoneClick();
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', 'conversion', {
      send_to: `${GOOGLE_ADS_ID}/phone_click`,
      value: 1.0,
      currency: 'BRL',
    });
  }
};
