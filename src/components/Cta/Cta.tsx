import { CheckCircle2, MessageCircle } from 'lucide-react'
import cta from '../../assets/ctaGRPreMoldados.jpg'

const Cta = () => {
  const benefits = [
    'Orçamento sem compromisso em até 24h',
    'Assessoria técnica especializada',
    'Entrega programada conforme sua necessidade',
    'Produtos com garantia de qualidade',
  ]

  const handleWhatsAppClick = () => {
    const phoneNumber = '558592895924' // Substitua pelo número real
    const message = 'Olá! Gostaria de solicitar um orçamento.'
    const encodedMessage = encodeURIComponent(message)
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
    // Rastrear conversão do Google Ads
    if (typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion(url)
    } else {
      window.open(url, '_blank')
    }
  }

  return (
    <section className='py-16 px-4' id='contato'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-2xl overflow-hidden'>
          {/* Imagem */}
          <div className='h-full'>
            <img 
              src={cta} 
              alt="Contato GR Pré Moldados"
              className='w-full h-full object-cover min-h-[200px] object-[30%_center] lg:object-center'
            />
          </div>

          {/* Conteúdo */}
          <div className='p-8 lg:p-12'>
            <h2 className='text-4xl font-bold mb-4'>
              Pronto para iniciar <span style={{color: '#1E40AF'}}><br className='hidden md:block'/>seu projeto</span>?
            </h2>
            <p className='text-gray-600 mb-8 text-lg'>
              Entre em contato e receba seu orçamento personalizado
            </p>

            <div className='space-y-4 mb-8'>
              {benefits.map((benefit, index) => (
                <div key={index} className='flex items-start gap-3'>
                  <CheckCircle2 className='text-green-500 flex-shrink-0 mt-1' size={24} />
                  <p className='text-gray-700 text-lg'>{benefit}</p>
                </div>
              ))}
            </div>

            <button
              onClick={handleWhatsAppClick}
              className='w-full py-3 md:py-4 px-4 md:px-8 text-white rounded-lg font-semibold flex items-center justify-center gap-2 md:gap-3 hover:opacity-90 transition-opacity text-base md:text-lg  hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer'
              style={{backgroundColor: '#25D366'}}
            >
              <MessageCircle className='flex-shrink-0' size={20} />
              <span>Falar com Especialista no WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta