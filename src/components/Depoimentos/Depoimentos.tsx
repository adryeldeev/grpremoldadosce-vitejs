import { Star } from 'lucide-react'

const Depoimentos = () => {
  const testimonials = [
    {
      id: 1,
      name: 'João Silva',
      role: 'Engenheiro Civil',
      company: 'Construtora Horizonte',
      rating: 5,
      text: 'Excelente qualidade nos blocos de concreto. Já utilizamos em diversas obras e nunca tivemos problemas. Recomendo!',
    },
    {
      id: 2,
      name: 'Maria Santos',
      role: 'Arquiteta',
      company: 'MS Arquitetura',
      rating: 5,
      text: 'Atendimento impecável e produtos de primeira linha. A entrega foi pontual e os materiais chegaram em perfeito estado.',
    },
    {
      id: 3,
      name: 'Pedro Costa',
      role: 'Mestre de Obras',
      company: 'Obras Premium',
      rating: 5,
      text: 'Trabalho com a GR há mais de 5 anos. Qualidade consistente e preços justos. São minha primeira opção em pré-moldados.',
    },
  ]

  return (
    <section className='py-16 px-4 bg-[#F9FAFB]' id='depoimentos'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold mb-4'>
          O que dizem <span style={{color: '#1E40AF'}}>Nossos Clientes</span>
        </h2>
        <p className='text-gray-600 max-w-3xl mx-auto'>
          Confira a experiência de quem já confia na GR Pré Moldados
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id}
            className='bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300'
          >
            <div className='flex gap-1 mb-4'>
              {[...Array(testimonial.rating)].map((_, index) => (
                <Star key={index} className='text-yellow-400 fill-yellow-400' size={20} />
              ))}
            </div>
            
            <p className='text-gray-700 mb-6 italic'>"{testimonial.text}"</p>
            
            <div className='border-t pt-4'>
              <h4 className='font-bold text-gray-900'>{testimonial.name}</h4>
              <p className='text-sm text-gray-600'>{testimonial.role}</p>
              <p className='text-sm' style={{color: '#1E40AF'}}>{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Depoimentos