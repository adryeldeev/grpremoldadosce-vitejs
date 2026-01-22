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
      title: 'Fábricas Especializadas',
      description: 'Parcerias com fábricas certificadas e experientes.',
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
    <section className='py-16 sm:py-20 px-4 bg-white'>
      <div className='text-center mb-12 sm:mb-16'>
        <span className='inline-block px-4 py-2 bg-[#1E40AF]/10 text-[#1E40AF] rounded-md font-semibold text-sm mb-4'>
          NOSSOS DIFERENCIAIS
        </span>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4'>
          Por que escolher a <span className='text-[#1E40AF]'>GR Pré Moldados</span>?
        </h2>
        <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
          Excelência e confiança em cada etapa do seu projeto
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
        {reasons.map((reason) => {
          const Icon = reason.Icon
          return (
            <div 
              key={reason.id}
              className='bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-xl hover:scale-105 hover:bg-[#1E40AF] hover:border-[#1E40AF] transition-all duration-300 group'
            >
              <div className='w-14 h-14 mb-5 rounded-lg bg-[#1E40AF]/10 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300'>
                <Icon className='text-[#1E40AF] group-hover:text-white transition-colors duration-300' size={28} />
              </div>
              <h3 className='text-lg font-semibold text-slate-900 group-hover:text-white mb-2 transition-colors duration-300'>{reason.title}</h3>
              <p className='text-slate-600 group-hover:text-white/90 text-sm leading-relaxed transition-colors duration-300'>{reason.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default PQEscolherGR
