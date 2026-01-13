import { MapPin, Phone, Mail } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
import logo from '../../assets/logoGR.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='text-white' style={{backgroundColor: '#1E40AF'}}>
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
          {/* Coluna 1 - Logo e Descrição */}
          <div>
            <img src={logo} alt="GR Pré Moldados" className='h-16 mb-4 bg-white rounded-lg p-2' />
            <p className='text-white text-sm opacity-90'>
              Referência em Fortaleza na fabricação de pré-moldados para construção civil com qualidade e durabilidade.
            </p>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h3 className='font-bold text-lg mb-4'>Links Rápidos</h3>
            <ul className='space-y-2'>
              <li><a href="#inicio" className='hover:text-gray-200 transition-colors'>Início</a></li>
              <li><a href="#sobre" className='hover:text-gray-200 transition-colors'>Sobre</a></li>
              <li><a href="#produtos" className='hover:text-gray-200 transition-colors'>Produtos</a></li>
              <li><a href="#solucoes" className='hover:text-gray-200 transition-colors'>Soluções</a></li>
              <li><a href="#depoimentos" className='hover:text-gray-200 transition-colors'>Depoimentos</a></li>
              <li><a href="#contato" className='hover:text-gray-200 transition-colors'>Contato</a></li>
            </ul>
          </div>

          {/* Coluna 3 - Produtos */}
          <div>
            <h3 className='font-bold text-lg mb-4'>Produtos</h3>
            <ul className='space-y-2'>
              <li className='hover:text-gray-200 transition-colors'>Blocos de Concreto</li>
              <li className='hover:text-gray-200 transition-colors'>Meio Fio</li>
              <li className='hover:text-gray-200 transition-colors'>Canaletas</li>
              <li className='hover:text-gray-200 transition-colors'>Paver</li>
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div>
            <h3 className='font-bold text-lg mb-4'>Contato</h3>
            <ul className='space-y-3'>
              <li className='flex items-start gap-2'>
                <MapPin className='flex-shrink-0 mt-1' size={18} />
                <span className='text-sm'>Fortaleza, Ceará</span>
              </li>
              <li className='flex items-center gap-2'>
                <Phone className='flex-shrink-0' size={18} />
                <a href='tel:+5585999289524' className='text-sm hover:text-gray-200 transition-colors'>(85) 99289-5924</a>
              </li>
              <li className='flex items-center gap-2'>
                <Mail className='flex-shrink-0' size={18} />
                <a href='mailto:grpremoldadosce@gmail.com' className='text-sm hover:text-gray-200 transition-colors'>grpremoldadosce@gmail.com</a>
              </li>
            </ul>

            {/* Redes Sociais */}
            <div className='mt-6'>
              <h4 className='font-semibold mb-3'>Redes Sociais</h4>
              <div className='flex gap-3'>
               
                <a href='https://www.instagram.com/grpremoldadosce/' className='w-10 h-10  bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all'>
                  <FaInstagram size={20} className='text-white' />
                </a>
               
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t border-white border-opacity-20 pt-6 mt-6'>
          <p className='text-center text-sm opacity-90'>
            © {currentYear} GR Pré Moldados. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer