import bloco from '../../assets/blocoConcreto.png';
import paver from '../../assets/paver.png';
import canaleta from '../../assets/caneletas.png';
import meioFio from '../../assets/meiofio-removebg.png';

const Produtos = () => {
  const products = [
    {
      id: 1,
      name: 'Blocos de Concreto',
      description: 'Blocos estruturais e de vedação em diversas medidas. Alta resistência e durabilidade para sua obra.',
      image: bloco,
      sizes: ['9x19x39cm', '14x19x39cm', '19x19x39cm'],

      whatsappMessage: 'Olá, estou interessado em Blocos de Concreto. Gostaria de mais informações.',
    },
    {
      id: 2,
      name: 'Meio Fio',
      description: 'Peças pré-moldadas de concreto para delimitação de vias e calçadas. Acabamento perfeito.',
      image: meioFio,
      sizes: ['100x15x30cm', '100x15x25cm', 'Medidas especiais'],
      whatsappMessage: 'Olá, estou interessado em Meio Fio. Gostaria de mais informações.',
    },
    {
      id: 3,
      name: 'Canaletas',
      description: 'Canaletas de concreto para estruturas, perfeitas para obras que exigem resistência e facilidade de instalação.',
      image: canaleta,
      sizes: ['09x19x39cm', '14x19x39cm', '19x19x39cm'],
      whatsappMessage: 'Olá, estou interessado em Canaletas. Gostaria de mais informações.',
    },
    {
      id: 4,
      name: 'Paver',
      description: 'Peças de concreto para pavimentação. Ideal para calçadas, estacionamentos e áreas externas.',
      image: paver,
      sizes: ['Vários formatos', 'Cores diversas', 'Espessuras variadas'],
      whatsappMessage: 'Olá, estou interessado em Paver. Gostaria de mais informações.',
    },
  ]

  const handleWhatsAppClick = (message: string) => {
    const phoneNumber = '5585999289524' // Substitua pelo número de WhatsApp
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <section className='py-16 px-4' id='produtos'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold mb-4'>
          Nossos <span style={{color: '#1E40AF'}}>Produtos</span>
        </h2>
        <p className='text-gray-600 max-w-3xl mx-auto'>
          Linha completa de pré-moldados para sua obra
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto'>
        {products.map((product) => (
          <div 
            key={product.id}
            className='rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300'
            style={{border: '3px solid #E5E7EB'}}
          >
            <div className='h-64 overflow-hidden bg-gray-100 flex items-center justify-center'>
              <img 
                src={product.image} 
                alt={product.name}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='p-6 bg-white'>
              <h3 className='text-2xl font-bold mb-3 text-gray-900'>{product.name}</h3>
              <p className='text-gray-600 text-sm mb-4'>{product.description}</p>
              
              <div className='mb-4'>
                <p className='font-bold mb-2' style={{color: '#F97316'}}>Medidas disponíveis:</p>
                <ul className='space-y-1'>
                  {product.sizes.map((size, index) => (
                    <li key={index} className='text-sm text-gray-700 flex items-center gap-2'>
                      <span className='w-2 h-2 rounded-full' style={{backgroundColor: '#F97316'}}></span>
                      {size}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                onClick={() => handleWhatsAppClick(product.whatsappMessage)}
                className='w-full py-3 px-6 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer' 
                style={{backgroundColor: '#1E40AF'}}
              >
                Solicitar Orçamento →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Produtos