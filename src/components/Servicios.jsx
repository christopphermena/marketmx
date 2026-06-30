import { useState } from 'react'

function Servicios() {
  const [modalShow, setModalShow] = useState(false)
  const [selectedServicio, setSelectedServicio] = useState(null)

  const servicios = [
    {
      id: 1,
      titulo: 'SEO',
      descripcion: 'Posiciona tu web en buscadores',
      detalles: 'Optimizamos tu sitio para aparecer en los primeros resultados de Google'
    },
    {
      id: 2,
      titulo: 'SEM',
      descripcion: 'Publicidad en buscadores',
      detalles: 'Campañas pagadas efectivas en Google Ads y Bing'
    },
    {
      id: 3,
      titulo: 'Redes Sociales',
      descripcion: 'Gestión y estrategia',
      detalles: 'Contenido, publicidad y engagement en Instagram, Facebook y TikTok'
    }
  ]

  const handleVerDetalles = (servicio) => {
    setSelectedServicio(servicio)
    setModalShow(true)
  }

  const handleSolicitarPresupuesto = () => {
    setModalShow(false)
    setTimeout(() => {
      document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })
    }, 200)
  }

  return (
    <>
      <section id="servicios" className="py-3 bg-light">
        <div className="container">
          <h2 className="text-center mb-3 fw-bold">Nuestros Servicios</h2>
          <div className="row g-3">
            {servicios.map(servicio => (
              <div className="col-md-4" key={servicio.id}>
                <div className="card h-100 shadow-sm border-0 card-hover">
                  <div className="card-body text-center">
                    <h5 className="card-title mb-3">{servicio.titulo}</h5>
                    <p className="card-text text-muted">{servicio.descripcion}</p>
                    <button
                      className="btn btn-danger btn-hover-scale"
                      onClick={() => handleVerDetalles(servicio)}
                    >
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalShow && (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-bottom border-2 border-danger">
                <h5 className="modal-title text-danger fw-bold">{selectedServicio?.titulo}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setModalShow(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>{selectedServicio?.detalles}</p>
                <ul>
                  <li>Análisis profundo de tu industria</li>
                  <li>Estrategia personalizada</li>
                  <li>Implementación y seguimiento</li>
                  <li>Reportes mensuales</li>
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setModalShow(false)}
                >
                  Cerrar
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-hover-scale"
                  onClick={handleSolicitarPresupuesto}
                >
                  Solicitar Presupuesto
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Servicios
