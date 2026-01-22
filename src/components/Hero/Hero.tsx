import fotoHero from '../../assets/fotoHero-GRPremoldados.png';

const Hero = () => {
  const phoneNumber = '558592895924';
  const message = 'Olá! Gostaria de solicitar um atendimento.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleCatalogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const produtosSection = document.getElementById('produtos');
    if (produtosSection) {
      produtosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAtendimentoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion(whatsappUrl);
    } else {
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <section className="relative bg-white pt-8 sm:pt-16 pb-16 sm:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <span className="inline-block py-2 px-4 rounded-md bg-[#1E40AF]/10 text-[#1E40AF] text-xs font-semibold uppercase tracking-wide mb-4 sm:mb-6">
            Líder em Pré-moldados no Ceará
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6 sm:mb-8">
            A base sólida para a sua <span className="text-[#1E40AF]">obra bruta.</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-lg">
            Fornecemos blocos, intertravados e meios-fios com rigor técnico e entrega pontual para grandes empreendimentos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleCatalogoClick}
              className="bg-[#1E40AF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1E3A8A] transition shadow-lg cursor-pointer"
            >
              Ver Nossos Produtos
            </button>
            <button 
              onClick={handleAtendimentoClick}
              className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition cursor-pointer"
            >
              Solicitar Atendimento
            </button>
          </div>
        </div>
        
        <div className="relative mt-8 md:mt-0">
          <div className="absolute -inset-4 bg-[#1E40AF]/10 rounded-3xl -rotate-3"></div>
          <img 
            src={fotoHero} 
            alt="Obra de Engenharia" 
            className="relative rounded-2xl shadow-2xl object-cover w-full h-[300px] sm:h-[400px] md:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;