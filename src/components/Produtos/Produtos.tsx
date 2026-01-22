import React from 'react';
import blocoConcreto from '../../assets/blocoConcreto.png';
import caneletas from '../../assets/caneletas.png';
import meioFio from '../../assets/meiofio-removebg.png';
import paver from '../../assets/paver.png';

const products = [
  {
    title: "Blocos de Concreto",
    description: "Alta resistência e precisão dimensional para vedação e estrutura em conformidade com a ABNT.",
    image: blocoConcreto,
  },
  {
    title: "Canaletas",
    description: "Agilidade na execução de cintas e vergas, garantindo uniformidade à sua obra.",
    image: caneletas,
  },
  {
    title: "Meio-Fio",
    description: "Durabilidade e alinhamento perfeito para projetos de urbanização e vias públicas.",
    image: meioFio,
  },
  {
    title: "Pisos Intertravados",
    description: "Soluções drenantes e estéticas para pavimentação de calçadas e estacionamentos modernos.",
    image: paver,
  }
];

const ProductsSection = () => {
  const phoneNumber = '558592895924';

  const handleOrcamentoClick = (productName: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de solicitar um orçamento de ${productName}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    if (typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion(whatsappUrl);
    } else {
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section id="produtos" className="bg-white py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header da Seção */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Nossas Soluções em Concreto
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
            Tecnologia e rigor técnico na fabricação de pré-moldados para garantir a solidez do seu projeto.
          </p>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 overflow-hidden"
            >
              <div className="h-48 overflow-hidden bg-slate-100">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {product.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
                
                <button 
                  onClick={handleOrcamentoClick(product.title)}
                  className="w-full bg-[#1E40AF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1E3A8A] transition-all shadow-md cursor-pointer text-sm"
                >
                  Pedir Orçamento →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;