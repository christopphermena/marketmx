import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Procesos from './components/Procesos'
import Galeria from './components/Galeria'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Servicios />
      <Procesos />
      <Galeria />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App
