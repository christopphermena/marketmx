function Footer() {
  return (
    <footer className="bg-dark text-white py-3 border-top border-3 border-danger">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-4 col-12 mb-3">
            <h5 className="fw-bold text-danger">MarketMX</h5>
            <p>Agencia de marketing digital para tu éxito online.</p>
          </div>
          <div className="col-md-4 col-12 mb-3">
            <h6 className="fw-bold">Enlaces Rápidos</h6>
            <ul className="list-unstyled">
              <li><a href="#servicios" className="text-white-50 text-decoration-none footer-link">Servicios</a></li>
              <li><a href="#procesos" className="text-white-50 text-decoration-none footer-link">Procesos</a></li>
              <li><a href="#galeria" className="text-white-50 text-decoration-none footer-link">Casos Éxito</a></li>
              <li><a href="#contacto" className="text-white-50 text-decoration-none footer-link">Contacto</a></li>
            </ul>
          </div>
          <div className="col-md-4 col-12 mb-3">
            <h6 className="fw-bold">Ubicación</h6>
            <p className="text-white-50 mb-2">
              📍 Santiago, Chile<br/>
              📧 info@marketmx.cl<br/>
              📞 +56 9 XXXX XXXX
            </p>
          </div>
        </div>
        <hr className="border-light opacity-25" />
        <div className="row">
          <div className="col text-center text-white-50 small">
            <p>&copy; 2026 MarketMX - Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
