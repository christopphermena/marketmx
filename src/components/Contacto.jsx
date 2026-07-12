import { useState } from 'react'
import { crearSolicitud } from '../services/solicitudesApi'

const SERVICIOS = [
  { id: '665f1111111111', nombre: 'SEO' },
  { id: '665f2222222222', nombre: 'SEM' },
  { id: '665f3333333333', nombre: 'Redes Sociales' },
  { id: '665f4444444444', nombre: 'Email Marketing' },
  { id: '665f5555555555', nombre: 'Branding' }
]

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicioId: '',
    mensaje: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const validateForm = () => {
    const newErrors = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es requerido'
    } else if (!/^\d{9,}$/.test(formData.telefono.replace(/\D/g, ''))) {
      newErrors.telefono = 'Teléfono inválido'
    }

    if (!formData.servicioId) {
      newErrors.servicioId = 'Selecciona un servicio'
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido'
    }

    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)
    setErrorMsg('')

    try {
      const servicio = SERVICIOS.find(s => s.id === formData.servicioId)
      await crearSolicitud({
        cliente: {
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono
        },
        servicioId: formData.servicioId,
        servicioNombre: servicio ? servicio.nombre : '',
        mensaje: formData.mensaje,
        estado: 'nuevo',
        fecha: new Date().toISOString().slice(0, 10)
      })
      setSubmitted(true)
      setFormData({ nombre: '', email: '', telefono: '', servicioId: '', mensaje: '' })
      setTimeout(() => setSubmitted(false), 4000)
    } catch {
      setErrorMsg('Error al enviar la solicitud. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacto" className="py-3">
      <div className="container">
        <h2 className="text-center mb-3 fw-bold">Contacta con Nosotros</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            {submitted && (
              <div className="alert alert-success alert-dismissible fade show" role="alert">
                ¡Gracias! Nos pondremos en contacto pronto.
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setSubmitted(false)}
                ></button>
              </div>
            )}

            {errorMsg && (
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
                {errorMsg}
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setErrorMsg('')}
                ></button>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                  type="text"
                  className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                />
                {errors.nombre && (
                  <div className="invalid-feedback d-block">
                    {errors.nombre}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <div className="invalid-feedback d-block">
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input
                  type="tel"
                  className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+56 9 XXXX XXXX"
                />
                {errors.telefono && (
                  <div className="invalid-feedback d-block">
                    {errors.telefono}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="servicioId" className="form-label">Servicio de Interés</label>
                <select
                  id="servicioId"
                  name="servicioId"
                  className={`form-control ${errors.servicioId ? 'is-invalid' : ''}`}
                  value={formData.servicioId}
                  onChange={handleChange}
                >
                  <option value="">-- Seleccionar --</option>
                  {SERVICIOS.map(s => (
                    <option key={s.id} value={s.id}>{s.nombre}</option>
                  ))}
                </select>
                {errors.servicioId && (
                  <div className="invalid-feedback d-block">
                    {errors.servicioId}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea
                  className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`}
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos tu proyecto..."
                ></textarea>
                {errors.mensaje && (
                  <div className="invalid-feedback d-block">
                    {errors.mensaje}
                  </div>
                )}
              </div>

              <button type="submit" className="btn btn-danger btn-lg w-100" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
