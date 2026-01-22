import { MessageCircle, FileText, Truck, CheckCircle } from 'lucide-react'

const ComoFunciona = () => {
  const phoneNumber = '558592895924';
  const message = 'Olá! Gostaria de solicitar um orçamento.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleOrcamentoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion(whatsappUrl);
    } else {
      window.open(whatsappUrl, '_blank');
    }
  };

  const steps = [
    {
      id: 1,
      title: 'Escolha o Produto',
      description: 'Navegue pelos nossos produtos e escolha o que precisa para sua obra.',
      Icon: FileText,
    },
    {
      id: 2,
      title: 'Solicite Orçamento',
      description: 'Entre em contato via WhatsApp e envie suas especificações.',
      Icon: MessageCircle,
    },
    {
      id: 3,
      title: 'Receba a Proposta',
      description: 'Nossa equipe analisa e envia um orçamento personalizado rapidamente.',
      Icon: CheckCircle,
    },
    {
      id: 4,
      title: 'Entrega no Prazo',
      description: 'Aprovado? Garantimos entrega pontual na sua obra.',
      Icon: Truck,
    },
  ]

  return (
    <section className='py-16 sm:py-20 px-4 bg-slate-900' id='como-funciona'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12 sm:mb-16'>
          <span className='inline-block px-4 py-2 bg-[#1E40AF]/20 text-[#1E40AF] rounded-md font-semibold text-sm mb-4'>
            PROCESSO SIMPLES
          </span>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>
            Como Funciona?
          </h2>
          <p className='text-lg text-slate-300 max-w-2xl mx-auto'>
            4 passos simples para receber pré-moldados de qualidade na sua obra
          </p>
        </div>

        {/* Grid de passos */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          {steps.map((step) => {
            const Icon = step.Icon
            return (
              <div 
                key={step.id} 
                className='bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 text-center'
              >
                <div className='relative mb-4'>
                  <div className='w-16 h-16 mx-auto rounded-full bg-[#1E40AF] flex items-center justify-center shadow-md'>
                    <Icon className='text-white' size={32} />
                  </div>
                  <div className='absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-2.5 py-0.5 rounded-full border-2 border-[#1E40AF] text-sm font-bold text-[#1E40AF]'>
                    {step.id}
                  </div>
                </div>
                <h3 className='text-lg font-semibold text-slate-900 mb-2'>{step.title}</h3>
                <p className='text-slate-600 text-sm leading-relaxed'>{step.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className='text-center'>
          <button 
            onClick={handleOrcamentoClick}
            className='inline-flex items-center gap-3 bg-[#1E40AF] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#1E3A8A] transition-all shadow-lg hover:shadow-xl cursor-pointer'
          >
            <MessageCircle size={20} />
            Solicitar Orçamento Agora
          </button>
          <p className='text-slate-500 text-sm mt-4'>Resposta rápida em até 24 horas</p>
        </div>
      </div>
    </section>
  )
}

export default ComoFunciona
