import { useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { eliminarSolicitud } from '../services/solicitudesApi'

function EliminarSolicitud() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const [cargando, setCargando] = useState(false)
  const [mensaje, setMensaje] = useState(null)

  const solicitud = location.state?.solicitud

  const mostrarMensaje = (tipo, texto) => {
    setMensaje({ tipo, texto })
    setTimeout(() => setMensaje(null), 4000)
  }

  const handleEliminar = async () => {
    setCargando(true)
    try {
      await eliminarSolicitud(id)
      mostrarMensaje('success', 'Solicitud eliminada correctamente')
      setTimeout(() => navigate('/ver'), 1200)
    } catch {
      mostrarMensaje('danger', 'Error al eliminar la solicitud')
      setCargando(false)
    }
  }

  if (!solicitud) {
    return (
      <div className="container py-4">
        <div className="alert alert-danger">Solicitud no encontrada</div>
        <button className="btn btn-secondary" onClick={() => navigate('/ver')}>Volver</button>
      </div>
    )
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">Eliminar Solicitud</h2>
        <button className="btn btn-outline-danger" onClick={() => navigate('/ver')}>
          ← Volver
        </button>
      </div>

      {mensaje && (
        <div className={`alert alert-${mensaje.tipo} alert-dismissible fade show`}>
          {mensaje.texto}
          <button type="button" className="btn-close" onClick={() => setMensaje(null)}></button>
        </div>
      )}

      <div className="card shadow-sm border-danger">
        <div className="card-header bg-danger text-white fw-bold">
          Confirmar Eliminación
        </div>
        <div className="card-body text-center py-4">
          <p className="fs-5 mb-3">
            ¿Estás seguro de eliminar la solicitud de <strong>{solicitud.cliente?.nombre}</strong>?
          </p>
          <p className="text-muted mb-4">
            Servicio: {solicitud.servicioNombre} | Email: {solicitud.cliente?.email}
          </p>
          <div className="d-flex gap-2 justify-content-center">
            <button
              className="btn btn-danger btn-lg"
              onClick={handleEliminar}
              disabled={cargando}
            >
              {cargando ? 'Eliminando...' : 'Sí, Eliminar'}
            </button>
            <button
              className="btn btn-secondary btn-lg"
              onClick={() => navigate('/ver')}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EliminarSolicitud
