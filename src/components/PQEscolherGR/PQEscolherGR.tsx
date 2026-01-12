import React from 'react'
import { Award, Shield, Truck, Users, Clock, ThumbsUp } from 'lucide-react'

const PQEscolherGR = () => {
  const reasons = [
    {
      id: 1,
      title: 'Qualidade Certificada',
      description: 'Produtos aprovados conforme normas ABNT.',
      Icon: Award,
    },
    {
      id: 2,
      title: 'Garantia Total',
      description: 'Garantia em todos os pré-moldados.',
      Icon: Shield,
    },
    {
      id: 3,
      title: 'Entrega Pontual',
      description: 'Sua obra no prazo estabelecido.',
      Icon: Truck,
    },
    {
      id: 4,
      title: 'Equipe Especializada',
      description: 'Profissionais capacitados para seu projeto.',
      Icon: Users,
    },
    {
      id: 5,
      title: 'Atendimento Ágil',
      description: 'Resposta rápida e eficiente.',
      Icon: Clock,
    },
    {
      id: 6,
      title: 'Melhor Custo-Benefício',
      description: 'Preços justos com máxima qualidade.',
      Icon: ThumbsUp,
    },
  ]

  return (
    <section className='mt-32 py-16 px-4' style={{backgroundColor: '#f8f9fa'}}>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold mb-4'>
          Por que escolher a <span style={{color: '#1E40AF'}}>GR Pré Moldados</span>?
        </h2>
        <p className='text-gray-600 max-w-3xl mx-auto'>
          A escolha certa para sua obra
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
        {reasons.map((reason) => {
          const Icon = reason.Icon
          return (
            <div 
              key={reason.id}
              className='bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300'
            >
              <div className='w-16 h-16 mb-4 rounded-2xl flex items-center justify-center' style={{backgroundColor: '#1E40AF'}}>
                <Icon className='text-white' size={32} />
              </div>
              <h3 className='text-xl font-bold mb-3'>{reason.title}</h3>
              <p className='text-gray-600'>{reason.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default PQEscolherGR
