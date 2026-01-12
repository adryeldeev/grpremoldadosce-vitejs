import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Sobre from "./components/Sobre/Sobre"
import PQEscolherGR from "./components/PQEscolherGR/PQEscolherGR"
import Produtos from "./components/Produtos/Produtos"

function App() {

  return (
    <div className="m-4">
     <Header />
     <Hero />
     <Sobre/>
     <PQEscolherGR/>
     <Produtos/>
    </div>
  )
}

export default App
