import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import VerSolicitudes from './pages/VerSolicitudes'
import AgregarSolicitud from './pages/AgregarSolicitud'
import EditarSolicitud from './pages/EditarSolicitud'
import EliminarSolicitud from './pages/EliminarSolicitud'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ver" element={<VerSolicitudes />} />
        <Route path="/agregar" element={<AgregarSolicitud />} />
        <Route path="/editar/:id" element={<EditarSolicitud />} />
        <Route path="/eliminar/:id" element={<EliminarSolicitud />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
