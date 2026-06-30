import { useState } from 'react'

function Navbar() {
  const [expanded, setExpanded] = useState(false)

  const closeMenu = () => setExpanded(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand fw-bold text-danger fs-4" href="#">
          MarketMX
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-controls="navbarNav"
          aria-expanded={expanded}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white nav-link-hover" href="#servicios" onClick={closeMenu}>Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white nav-link-hover" href="#procesos" onClick={closeMenu}>Procesos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white nav-link-hover" href="#galeria" onClick={closeMenu}>Casos Éxito</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white nav-link-hover" href="#contacto" onClick={closeMenu}>Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
