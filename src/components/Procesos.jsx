import { useState } from 'react'

function Procesos() {
  const [activeIdx, setActiveIdx] = useState(-1)

  const procesos = [
    {
      num: 1,
      titulo: 'Análisis y Diagnóstico',
      contenido: 'Evaluamos tu situación actual, competencia y oportunidades de mercado'
    },
    {
      num: 2,
      titulo: 'Estrategia Personalizada',
      contenido: 'Desarrollamos un plan específico para tus objetivos y presupuesto'
    },
    {
      num: 3,
      titulo: 'Implementación',
      contenido: 'Ejecutamos la estrategia en todas las plataformas seleccionadas'
    },
    {
      num: 4,
      titulo: 'Monitoreo y Optimización',
      contenido: 'Medimos resultados y ajustamos constantemente para mejores resultados'
    }
  ]

  return (
    <section id="procesos" className="py-3">
      <div className="container">
        <h2 className="text-center mb-3 fw-bold">Nuestro Proceso</h2>
        <div className="accordion" id="accordionProcesos">
          {procesos.map((proceso, idx) => (
            <div className="accordion-item" key={idx}>
              <h2 className="accordion-header">
                <button 
                  className={`accordion-button ${activeIdx !== idx ? 'collapsed' : ''}`}
                  type="button"
                  onClick={() => setActiveIdx(activeIdx === idx ? -1 : idx)}
                  aria-expanded={activeIdx === idx ? 'true' : 'false'}
                  aria-controls={`collapse${idx}`}
                >
                  <strong>Paso {proceso.num}</strong>: {proceso.titulo}
                </button>
              </h2>
              <div 
                id={`collapse${idx}`}
                className={`accordion-collapse collapse ${activeIdx === idx ? 'show' : ''}`}
              >
                <div className="accordion-body">
                  {proceso.contenido}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Procesos
