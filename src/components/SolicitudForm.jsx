import { useState, useEffect } from 'react'

const SERVICIOS = [
  { id: '665f1111111111', nombre: 'SEO' },
  { id: '665f2222222222', nombre: 'SEM' },
  { id: '665f3333333333', nombre: 'Redes Sociales' },
  { id: '665f4444444444', nombre: 'Email Marketing' },
  { id: '665f5555555555', nombre: 'Branding' }
]

const ESTADOS = ['nuevo', 'en_proceso', 'completado', 'cerrado']

const initialForm = {
  cliente: { nombre: '', email: '', telefono: '' },
  servicioId: '',
  servicioNombre: '',
  mensaje: '',
  estado: 'nuevo',
  fecha: new Date().toISOString().slice(0, 10)
}

function SolicitudForm({ solicitud, onSave, onCancel, loading }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (solicitud) {
      setForm({
        cliente: { ...solicitud.cliente },
        servicioId: solicitud.servicioId || '',
        servicioNombre: solicitud.servicioNombre || '',
        mensaje: solicitud.mensaje || '',
        estado: solicitud.estado || 'nuevo',
        fecha: solicitud.fecha || new Date().toISOString().slice(0, 10)
      })
    } else {
      setForm(initialForm)
    }
  }, [solicitud])

  const handleClienteChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      cliente: { ...prev.cliente, [name]: value }
    }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'servicioId') {
      const servicio = SERVICIOS.find(s => s.id === value)
      setForm(prev => ({
        ...prev,
        servicioId: value,
        servicioNombre: servicio ? servicio.nombre : ''
      }))
    } else {
      setForm(prev => ({ ...prev, [name]: value }))
    }
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const newErrors = {}
    if (!form.cliente.nombre.trim()) newErrors.nombre = 'Requerido'
    if (!form.cliente.email.trim()) newErrors.email = 'Requerido'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.cliente.email)) newErrors.email = 'Email inválido'
    if (!form.cliente.telefono.trim()) newErrors.telefono = 'Requerido'
    if (!form.servicioId) newErrors.servicioId = 'Selecciona un servicio'
    if (!form.mensaje.trim()) newErrors.mensaje = 'Requerido'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    onSave(form)
  }

  const inputClass = (field) => `form-control ${errors[field] ? 'is-invalid' : ''}`

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="row">
        <div className="col-md-4 mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="nombre"
            className={inputClass('nombre')}
            value={form.cliente.nombre}
            onChange={handleClienteChange}
            placeholder="Nombre del cliente"
          />
          {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className={inputClass('email')}
            value={form.cliente.email}
            onChange={handleClienteChange}
            placeholder="correo@ejemplo.cl"
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">Teléfono</label>
          <input
            type="tel"
            name="telefono"
            className={inputClass('telefono')}
            value={form.cliente.telefono}
            onChange={handleClienteChange}
            placeholder="+56 9 XXXX XXXX"
          />
          {errors.telefono && <div className="invalid-feedback">{errors.telefono}</div>}
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Servicio</label>
          <select
            name="servicioId"
            className={inputClass('servicioId')}
            value={form.servicioId}
            onChange={handleChange}
          >
            <option value="">-- Seleccionar --</option>
            {SERVICIOS.map(s => (
              <option key={s.id} value={s.id}>{s.nombre}</option>
            ))}
          </select>
          {errors.servicioId && <div className="invalid-feedback">{errors.servicioId}</div>}
        </div>

        <div className="col-md-3 mb-3">
          <label className="form-label">Estado</label>
          <select
            name="estado"
            className="form-control"
            value={form.estado}
            onChange={handleChange}
          >
            {ESTADOS.map(e => (
              <option key={e} value={e}>{e.replace('_', ' ')}</option>
            ))}
          </select>
        </div>

        <div className="col-md-3 mb-3">
          <label className="form-label">Fecha</label>
          <input
            type="date"
            name="fecha"
            className="form-control"
            value={form.fecha}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Mensaje</label>
        <textarea
          name="mensaje"
          rows="3"
          className={inputClass('mensaje')}
          value={form.mensaje}
          onChange={handleChange}
          placeholder="Describe el proyecto..."
        />
        {errors.mensaje && <div className="invalid-feedback">{errors.mensaje}</div>}
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-danger" disabled={loading}>
          {loading ? 'Guardando...' : solicitud ? 'Actualizar Solicitud' : 'Crear Solicitud'}
        </button>
        {onCancel && (
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  )
}

export default SolicitudForm
