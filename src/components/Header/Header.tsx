import { useState } from 'react';
import logo from '../../assets/logoGR.png'
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className='flex justify-between items-center relative p-4 md:p-4'>
        <img src={logo} alt="Logo" className='h-16' />
       
       {/* Desktop Menu */}
       <ul className='hidden md:flex justify-between w-2/5 items-center'>
        <li><a href="#inicio" className='hover:text-[#1E40AF]'>Início</a></li>
        <li><a href="#sobre" className='hover:text-[#1E40AF]'>Sobre</a></li>
        <li><a href="#depoimentos" className='hover:text-[#1E40AF]'>Depoimentos</a></li>
        <li><a href="#produtos" className='hover:text-[#1E40AF]'>Produtos</a></li>
        <li><a href="#contato" className='hover:text-[#1E40AF]'>Contato</a></li>
       </ul>
       
       <button className='hidden md:block py-4 px-8 text-white rounded-lg hover:bg-secondary cursor-pointer' style={{backgroundColor: '#1E40AF'}}>Orçamento</button>
       
       {/* Mobile Menu Button */}
       <button 
         className='md:hidden text-3xl cursor-pointer' 
         onClick={toggleMobileMenu}
         aria-label="Toggle menu"
       >
         {mobileMenuOpen ? '✕' : '☰'}
       </button>
       
       {/* Mobile Menu */}
       {mobileMenuOpen && (
         <div className='absolute top-20 left-0 right-0 bg-white shadow-lg rounded-lg p-6 md:hidden z-50'>
           <ul className='flex flex-col gap-4'>
             <li><a href="#inicio" className='hover:text-[#1E40AF] block' onClick={toggleMobileMenu}>Início</a></li>
             <li><a href="#sobre" className='hover:text-[#1E40AF] block' onClick={toggleMobileMenu}>Sobre</a></li>
             <li><a href="#depoimentos" className='hover:text-[#1E40AF] block' onClick={toggleMobileMenu}>Depoimentos</a></li>
             <li><a href="#produtos" className='hover:text-[#1E40AF] block' onClick={toggleMobileMenu}>Produtos</a></li>
             <li><a href="#contato" className='hover:text-[#1E40AF] block' onClick={toggleMobileMenu}>Contato</a></li>
           </ul>
           <button className='w-full mt-4 py-4 px-8 text-white rounded-lg cursor-pointer' style={{backgroundColor: '#1E40AF'}}>Orçamento</button>
         </div>
       )}
    </nav>


    
  )
}

export default Header