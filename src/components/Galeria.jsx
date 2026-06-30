function Galeria() {
  const casos = [
    {
      id: 1,
      titulo: 'E-commerce Ropa',
      resultado: '+250% en ventas',
      descripcion: 'SEO + SEM'
    },
    {
      id: 2,
      titulo: 'Restaurante Local',
      resultado: '+150% en reservas',
      descripcion: 'Google My Business + Facebook'
    },
    {
      id: 3,
      titulo: 'Agencia Inmobiliaria',
      resultado: '+300% en leads',
      descripcion: 'Instagram + TikTok'
    },
    {
      id: 4,
      titulo: 'Consultoría TI',
      resultado: '+180% en clientes',
      descripcion: 'LinkedIn + Google Ads'
    },
    {
      id: 5,
      titulo: 'Boutique de Accesorios',
      resultado: '+200% en followers',
      descripcion: 'Redes Sociales Integral'
    },
    {
      id: 6,
      titulo: 'Clínica Dental',
      resultado: '+120% en citas',
      descripcion: 'Local SEO + Email Marketing'
    }
  ]

  return (
    <section id="galeria" className="py-3 bg-light">
      <div className="container">
        <h2 className="text-center mb-3 fw-bold">Casos de Éxito</h2>
        <div className="row g-3">
          {casos.map(caso => (
            <div className="col-md-4 col-12" key={caso.id}>
              <div className="card h-100 shadow-sm text-center border-0 card-hover">
                <div className="card-body">
                  <h5 className="card-title">{caso.titulo}</h5>
                  <p className="text-danger fw-bold fs-5">{caso.resultado}</p>
                  <p className="text-muted small">{caso.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Galeria
