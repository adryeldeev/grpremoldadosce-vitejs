import { MessageCircle, ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="relative bg-slate-900 rounded-[2rem] p-8 md:p-16 overflow-hidden shadow-2xl">
          
          {/* Elementos decorativos de fundo para o ar "Moderno" */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#1E40AF]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-[#1E40AF]/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                Pronto para dar o próximo passo na sua <span className="text-[#1E40AF]">obra?</span>
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                Não arrisque a estrutura do seu projeto. Garanta pré-moldados com certificação técnica e entrega programada.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/558592895924" 
                  className="flex items-center justify-center gap-3 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg"
                >
                  <MessageCircle size={20} />
                  Solicitar Orçamento Grátis
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg">
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-[#1E40AF] rounded-full animate-pulse"></div>
                Atendimento Rápido
              </h4>
              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex items-center gap-3">
                  <ArrowRight size={16} className="text-[#1E40AF]" />
                  Suporte técnico para cálculos de material.
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight size={16} className="text-[#1E40AF]" />
                  Envio de catálogo técnico em PDF.
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRight size={16} className="text-[#1E40AF]" />
                  Condições especiais para grandes volumes.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;