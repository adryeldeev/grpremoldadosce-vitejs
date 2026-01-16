import imgHero from '../../assets/unsplash_lY_1_64r5Bo.png';
const Hero = () => {
  const numberWhatsapp = '558592895924'; // Substitua pelo número de WhatsApp desejado

  const handleWhatsAppClick = () => {
    const message = 'Olá! Gostaria de solicitar um orçamento.'
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${numberWhatsapp}?text=${encodedMessage}`, '_blank')
  };
  return (
    <>
    <section 
      className='relative h-116 md:h-[550px] flex items-center justify-center px-12 animate-on-scroll' id='inicio'
      style={{
        backgroundImage: `url(${imgHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
        <div className='max-w-xl text-center'>
            <h1 className='text-2xl md:text-4xl font-bold mb-6 text-white'>
              Fornecimento de Pré-Moldados de <span className='bg-[#1E40AF] text-transparent bg-clip-text '>Alta Qualidade</span>
            </h1>
            <p className='text-white mb-4 md:mb-6 md:text-lg'>
              Conectamos sua obra às melhores fábricas de pré-moldados da região.
            </p>
            <button onClick={handleWhatsAppClick} className='py-4 px-8 text-white rounded-lg cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto' style={{backgroundColor: '#1E40AF'}}>
              Solicitar Orçamento →
            </button>
        </div>
    </section>

    <section className='flex flex-col md:flex-row md:justify-between items-start  gap-8 px-12  mx-auto bg-[#F9FAFB] py-8 rounded-lg  '>
        <div>
            <h2 className='text-2xl  md:text-4xl font-bold' style={{color: '#1E40AF'}}>Fábricas</h2>
            <p className='text-gray-600'>Parceiras Certificadas</p>
        </div>
        <div>
            <h2 className='text-2xl  md:text-4xl font-bold' style={{color: '#1E40AF'}}>500+</h2>
            <p className='text-gray-600'>Obras Atendidas</p>
        </div>
        <div>
            <h2 className='text-2xl  md:text-4xl font-bold' style={{color: '#1E40AF'}}>100%</h2>
            <p className='text-gray-600'>Produtos Certificados</p>
        </div>
        <div>
            <h2 className='text-2xl  md:text-4xl font-bold' style={{color: '#1E40AF'}}>Melhor Preço</h2>
            <p className='text-gray-600'>Direto das fábricas</p>
        </div>
    </section>
    </>
  )
}

export default Hero