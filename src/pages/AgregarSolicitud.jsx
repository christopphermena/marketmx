import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SolicitudForm from '../components/SolicitudForm'
import { crearSolicitud } from '../services/solicitudesApi'

function AgregarSolicitud() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [mensaje, setMensaje] = useState(null)

  const mostrarMensaje = (tipo, texto) => {
    setMensaje({ tipo, texto })
    setTimeout(() => setMensaje(null), 4000)
  }

  const guardar = async (formData) => {
    setLoading(true)
    try {
      await crearSolicitud(formData)
      mostrarMensaje('success', 'Solicitud creada correctamente')
      setTimeout(() => navigate('/ver'), 1200)
    } catch {
      mostrarMensaje('danger', 'Error al crear la solicitud')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0">Agregar Solicitud</h2>
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

      <div className="card shadow-sm">
        <div className="card-header bg-danger text-white fw-bold">
          Nueva Solicitud de Contacto
        </div>
        <div className="card-body">
          <SolicitudForm
            onSave={guardar}
            onCancel={() => navigate('/ver')}
            loading={loading}
          />
        </div>
      </div>
    </div>
  )
}

export default AgregarSolicitud
