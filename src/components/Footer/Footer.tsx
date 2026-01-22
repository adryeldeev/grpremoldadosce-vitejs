import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import logoGR from '../../assets/logoGR.png';

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <img src={logoGR} alt="GR Pré Moldados" className="h-16 w-auto mb-4" />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Referência em pré-moldados de concreto no Ceará. Qualidade, resistência e entrega pontual para sua obra.
            </p>
            {/* Redes Sociais */}
            <div className="flex gap-3">
              <a 
                href="https://www.instagram.com/grpremoldadosce/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-[#1E40AF] flex items-center justify-center transition-colors cursor-pointer"
              >
                <Instagram size={20} className="text-white" />
              </a>
            
            </div>
          </div>

          {/* Produtos */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wide">Produtos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#produtos" className="text-slate-400 hover:text-[#1E40AF] transition-colors">
                  Blocos de Concreto
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-slate-400 hover:text-[#1E40AF] transition-colors">
                  Canaletas
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-slate-400 hover:text-[#1E40AF] transition-colors">
                  Meio-Fio
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-slate-400 hover:text-[#1E40AF] transition-colors">
                  Pisos Intertravados
                </a>
              </li>
            </ul>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wide">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-slate-400 hover:text-[#1E40AF] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-slate-400 hover:text-[#1E40AF] transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="text-slate-400 hover:text-[#1E40AF] transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="text-slate-400 hover:text-[#1E40AF] transition-colors">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wide">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#1E40AF] mt-0.5 flex-shrink-0" />
                <a href="tel:+558592895924" className="text-slate-400 hover:text-white transition-colors">
                  (85) 9 2895-924
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#1E40AF] mt-0.5 flex-shrink-0" />
                <a href="mailto:contato@grpremoldadosce.com.br" className="text-slate-400 hover:text-white transition-colors">
                 grpremoldadosce@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#1E40AF] mt-0.5 flex-shrink-0" />
                <span className="text-slate-400">
                  Fortaleza, Ceará - Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} GR Pré Moldados. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-xs text-slate-500">
              <a href="#" className="hover:text-[#1E40AF] transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-[#1E40AF] transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;