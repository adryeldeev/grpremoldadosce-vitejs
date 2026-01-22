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
    <section className='py-16 sm:py-20 px-4 bg-slate-50' id='depoimentos'>
      <div className='text-center mb-12 sm:mb-16'>
        <span className='inline-block px-4 py-2 bg-[#1E40AF]/10 text-[#1E40AF] rounded-md font-semibold text-sm mb-4'>
          DEPOIMENTOS
        </span>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4'>
          O que dizem <span className='text-[#1E40AF]'>Nossos Clientes</span>
        </h2>
        <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
          Confira a experiência de quem já confia na GR Pré Moldados
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id}
            className='bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#1E40AF]/30 transition-all duration-300'
          >
            <div className='flex gap-1 mb-5'>
              {[...Array(testimonial.rating)].map((_, index) => (
                <Star key={index} className='text-[#1E40AF] fill-[#1E40AF]' size={18} />
              ))}
            </div>
            
            <p className='text-slate-700 mb-6 leading-relaxed'>"{testimonial.text}"</p>
            
            <div className='border-t border-slate-200 pt-4'>
              <h4 className='font-semibold text-slate-900'>{testimonial.name}</h4>
              <p className='text-sm text-slate-600'>{testimonial.role}</p>
              <p className='text-sm font-medium text-[#1E40AF]'>{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Depoimentos