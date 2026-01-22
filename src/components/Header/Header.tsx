import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoGR from '../../assets/logoGR.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const phoneNumber = '558592895924';
  const message = 'Olá! Gostaria de solicitar um orçamento.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleCTAClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Rastrear conversão do Google Ads
    if (typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion(whatsappUrl);
    } else {
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logoGR} alt="GR Pré Moldados" className="h-12 w-auto" />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold text-slate-700">
          <a href="#" className="hover:text-[#1E40AF] transition">Início</a>
          <a href="#produtos" className="hover:text-[#1E40AF] transition">Produtos</a>
          <a href="#solucoes" className="hover:text-[#1E40AF] transition">Soluções</a>
          <a href="#depoimentos" className="hover:text-[#1E40AF] transition">Depoimentos</a>
        </div>

        {/* Desktop CTA Button */}
        <button 
          onClick={handleCTAClick}
          className="hidden md:block bg-[#1E40AF] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-[#1E3A8A] transition-all shadow-md cursor-pointer"
        >
          Orçamento Rápido
        </button>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-slate-900 hover:text-[#1E40AF] transition"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-6 space-y-4">
            <a href="#" className="block text-sm font-semibold text-slate-700 hover:text-[#1E40AF] transition">
              Início
            </a>
            <a href="#produtos" className="block text-sm font-semibold text-slate-700 hover:text-[#1E40AF] transition">
              Produtos
            </a>
            <a href="#solucoes" className="block text-sm font-semibold text-slate-700 hover:text-[#1E40AF] transition">
              Soluções
            </a>
            <a href="#depoimentos" className="block text-sm font-semibold text-slate-700 hover:text-[#1E40AF] transition">
              Depoimentos
            </a>
            <button 
              onClick={handleCTAClick}
              className="w-full bg-[#1E40AF] text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wide hover:bg-[#1E3A8A] transition-all cursor-pointer"
            >
              Orçamento Rápido
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;