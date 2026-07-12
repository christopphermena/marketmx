import { useState } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import SolicitudForm from '../components/SolicitudForm'
import { actualizarSolicitud } from '../services/solicitudesApi'

function EditarSolicitud() {
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

  const guardar = async (formData) => {
    setCargando(true)
    try {
      await actualizarSolicitud(id, formData)
      mostrarMensaje('success', 'Solicitud actualizada correctamente')
      setTimeout(() => navigate('/ver'), 1200)
    } catch {
      mostrarMensaje('danger', 'Error al actualizar la solicitud')
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">Editar Solicitud</h2>
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

      {!solicitud ? (
        <div className="alert alert-danger">Solicitud no encontrada</div>
      ) : (
        <div className="card shadow-sm">
          <div className="card-header bg-danger text-white fw-bold">
            Editando: {solicitud.cliente?.nombre}
          </div>
          <div className="card-body">
            <SolicitudForm
              solicitud={solicitud}
              onSave={guardar}
              onCancel={() => navigate('/ver')}
              loading={cargando}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default EditarSolicitud
