import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Sobre from "./components/Sobre/Sobre"
import PQEscolherGR from "./components/PQEscolherGR/PQEscolherGR"
import Produtos from "./components/Produtos/Produtos"
import Solucoes from "./components/Solucoes/Solucoes"
import Depoimentos from "./components/Depoimentos/Depoimentos"
import Cta from "./components/Cta/Cta"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <div className="">
     <Header />
     <Hero />
     <Sobre/>
     <PQEscolherGR/>
     <Produtos/>
     <Solucoes/>
     <Depoimentos/>
     <Cta/>
     <Footer/>
    </div>
  )
}

export default App
