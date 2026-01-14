import imgHero from '../../assets/unsplash_lY_1_64r5Bo.png';
const Hero = () => {
  const numberWhatsapp = '55859289524'; // Substitua pelo número de WhatsApp desejado

  const handleWhatsAppClick = () => {
    const message = 'Olá! Gostaria de solicitar um orçamento.'
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${numberWhatsapp}?text=${encodedMessage}`, '_blank')
  };
  return (
    <>
    <section 
      className='relative h-[550px] flex items-center justify-center px-12 animate-on-scroll' id='inicio'
      style={{
        backgroundImage: `url(${imgHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
        <div className='max-w-xl text-center'>
            <h1 className='text-2xl md:text-5xl font-bold mb-6 text-white'>
              Materiais de Construção de <span className='bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]'>Alta Qualidade</span>
            </h1>
            <p className='text-white mb-4 md:mb-6 md:text-lg'>
              Blocos, canaletas e pré-moldados para sua obra com excelência e durabilidade.
            </p>
            <button onClick={handleWhatsAppClick} className='py-4 px-8 text-white rounded-lg cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto' style={{backgroundColor: '#1E40AF'}}>
              Solicitar Orçamento →
            </button>
        </div>
    </section>

    <section className='flex flex-col md:flex-row md:justify-between items-start  gap-8 px-12  mx-auto bg-[#F9FAFB] py-8 rounded-lg  '>
        <div>
            <h2 className='text-2xl  md:text-4xl font-bold' style={{color: '#1E40AF'}}>15+</h2>
            <p className='text-gray-600'>Anos de Experiência</p>
        </div>
        <div>
            <h2 className='text-2xl  md:text-4xl font-bold' style={{color: '#1E40AF'}}>500+</h2>
            <p className='text-gray-600'>Obras Atendidas</p>
        </div>
        <div>
            <h2 className='text-2xl  md:text-4xl font-bold' style={{color: '#1E40AF'}}>100%</h2>
            <p className='text-gray-600'>controle de qualidade</p>
        </div>
        <div>
            <h2 className='text-2xl  md:text-4xl font-bold' style={{color: '#1E40AF'}}>Produção própria</h2>
            <p className='text-gray-600'>Padrão industrial e controle de qualidade</p>
        </div>
    </section>
    </>
  )
}

export default Hero