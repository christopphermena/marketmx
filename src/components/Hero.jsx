import heroImage from '../assets/hero.png'

function Hero() {
  return (
    <section className="hero-gradient" id="hero">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-md-6 col-12 text-center text-md-start">
            <h1 className="display-4 fw-bold mb-3">
              Potencia Tu <span className="text-danger">Presencia Online</span>
            </h1>
            <p className="lead mb-4">
              Soluciones de marketing digital que transforman tu negocio. SEO, SEM y redes sociales.
            </p>
            <button
              className="btn btn-lg btn-danger me-2 mb-2 btn-hover-scale"
              onClick={() => document.getElementById('contacto').scrollIntoView({behavior: 'smooth'})}
            >
              Contactar Ahora
            </button>
            <button
              className="btn btn-lg btn-danger mb-2 btn-hover-scale"
              onClick={() => document.getElementById('servicios').scrollIntoView({behavior: 'smooth'})}
            >
              Ver Servicios
            </button>
          </div>
          <div className="col-md-6 col-12 text-center">
            <img src={heroImage} alt="Marketing Digital" className="w-100 shadow-lg rounded-4" style={{ maxWidth: 500 }} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
