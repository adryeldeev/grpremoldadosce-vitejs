import imgHero from '../../assets/fotoHero-GRPremoldados.png';
const Hero = () => {
  return (
    <>
    <section 
      className='relative h-[750px] flex items-center px-12'
      style={{
        backgroundImage: `url(${imgHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
        <div className='max-w-xl'>
            <h1 className='text-2xl md:text-5xl font-bold mb-6 text-white'>
              Materiais de Construção de <span style={{color: '#1E40AF', textShadow: '0 4px 12px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(0, 0, 0, 0.2)'}}>Alta Qualidade</span>
            </h1>
            <p className='text-white mb-4 md:mb-6 md:text-lg'>
              Blocos, canaletas e pré-moldados para sua obra com excelência e durabilidade.
            </p>
            <button className='py-4 px-8 text-white rounded-lg cursor-pointer flex items-center gap-2' style={{backgroundColor: '#1E40AF'}}>
              Solicitar Orçamento →
            </button>
        </div>
    </section>

    <section className='flex flex-col md:flex-row md:justify-between items-start mt-4 gap-8 px-12  mx-auto'>
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