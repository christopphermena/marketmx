import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Buscador from '../components/Buscador'
import SolicitudCard from '../components/SolicitudCard'
import { listarSolicitudes, eliminarSolicitud, buscarSolicitudes } from '../services/solicitudesApi'

function VerSolicitudes() {
  const navigate = useNavigate()
  const [solicitudes, setSolicitudes] = useState([])
  const [filtradas, setFiltradas] = useState([])
  const [termino, setTermino] = useState('')
  const [cargando, setCargando] = useState(true)
  const [mensaje, setMensaje] = useState(null)

  const mostrarMensaje = (tipo, texto) => {
    setMensaje({ tipo, texto })
    setTimeout(() => setMensaje(null), 4000)
  }

  const cargar = useCallback(async () => {
    setCargando(true)
    try {
      const data = await listarSolicitudes()
      const lista = data.datos || data
      setSolicitudes(lista)
      setFiltradas(lista)
    } catch {
      mostrarMensaje('danger', 'Error al cargar solicitudes')
    } finally {
      setCargando(false)
    }
  }, [])

  useEffect(() => { cargar() }, [cargar])

  useEffect(() => {
    const filtrar = async () => {
      const resultado = await buscarSolicitudes(termino, solicitudes)
      setFiltradas(resultado)
    }
    filtrar()
  }, [termino, solicitudes])

  const handleEliminar = async (solicitud) => {
    navigate(`/eliminar/${solicitud._id}`, { state: { solicitud } })
  }

  const handleEditar = (solicitud) => {
    navigate(`/editar/${solicitud._id}`, { state: { solicitud } })
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Solicitudes</h2>
          <p className="text-muted mb-0">Todas las solicitudes de contacto</p>
        </div>
        <div>
          <button className="btn btn-outline-danger me-2" onClick={() => navigate('/')}>
            ← Landing
          </button>
          <button className="btn btn-danger" onClick={() => navigate('/agregar')}>
            + Agregar
          </button>
        </div>
      </div>

      {mensaje && (
        <div className={`alert alert-${mensaje.tipo} alert-dismissible fade show`}>
          {mensaje.texto}
          <button type="button" className="btn-close" onClick={() => setMensaje(null)}></button>
        </div>
      )}

      <Buscador termino={termino} onChange={setTermino} />

      {cargando ? (
        <div className="text-center py-5">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-2 text-muted">Cargando solicitudes...</p>
        </div>
      ) : filtradas.length === 0 ? (
        <div className="alert alert-info text-center">
          {termino ? 'Sin resultados para esa búsqueda.' : 'No hay solicitudes registradas.'}
        </div>
      ) : (
        <div className="row g-3">
          {filtradas.map(s => (
            <div className="col-md-6 col-lg-4" key={s._id}>
              <SolicitudCard
                solicitud={s}
                onEditar={handleEditar}
                onEliminar={handleEliminar}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default VerSolicitudes
