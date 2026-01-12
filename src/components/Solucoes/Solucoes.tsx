import React from 'react'
import { Factory, Home, Building2, Construction } from 'lucide-react'
import residencial from '../../assets/residencial.jpg';
import infraestrutura from '../../assets/infraestrutura.jpg';
import comercial from '../../assets/comercial.jpg';
import industrial from '../../assets/industrial.jpg';

const Solucoes = () => {
  const solutions = [
    {
      id: 1,
      title: 'Soluções Industriais',
      description: 'Produtos para construções industriais com alta resistência e durabilidade.',
      Icon: Factory,
      image: industrial,
    },
    {
      id: 2,
      title: 'Projetos Residenciais',
      description: 'Materiais ideais para casas, sobrados e condomínios residenciais.',
      Icon: Home,
      image: residencial,
    },
    {
      id: 3,
      title: 'Obras Comerciais',
      description: 'Soluções para lojas, edifícios comerciais e espaços corporativos.',
      Icon: Building2,
      image: comercial,
    },
    {
      id: 4,
      title: 'Infraestrutura',
      description: 'Produtos para obras de pavimentação, drenagem e contenção.',
      Icon: Construction,
      image: infraestrutura,
    },
  ]

  return (
    <section className='py-16 px-4 bg-white' id='solucoes'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold mb-4'>
          Soluções para <span style={{color: '#1E40AF'}}><br className='block md:hidden'/>Sua Obra</span>
        </h2>
        <p className='text-gray-600 max-w-3xl mx-auto'>
          Atendemos diversos segmentos da construção civil
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto'>
        {solutions.map((solution) => {
          const Icon = solution.Icon
          return (
            <div 
              key={solution.id}
              className='group cursor-pointer'
            >
              <div className='relative h-64 rounded-3xl overflow-hidden mb-6 bg-gray-200'>
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className='absolute inset-0 w-full h-full object-cover'
                />
                <div className='absolute inset-0 flex items-center justify-center z-10'>
                  <div className='w-32 h-32 rounded-full  flex items-center justify-center'>
                    <div className='w-20 h-20 rounded-2xl flex items-center justify-center' style={{backgroundColor: '#1E40AF'}}>
                      <Icon className='text-white' size={40} />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className='text-xl font-bold mb-2 text-gray-900'>{solution.title}</h3>
              <p className='text-gray-600 text-sm'>{solution.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Solucoes