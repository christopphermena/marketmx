import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
  const [expanded, setExpanded] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const closeMenu = () => setExpanded(false)

  const handleNav = (path) => {
    closeMenu()
    navigate(path)
  }

  const isLanding = location.pathname === '/'

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand fw-bold text-danger fs-4" href="/" onClick={(e) => { e.preventDefault(); handleNav('/') }}>
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
            {isLanding ? (
              <>
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
                <li className="nav-item">
                  <button className="nav-link btn btn-link text-white nav-link-hover fw-bold" onClick={() => handleNav('/ver')}>
                    Solicitudes
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button className="nav-link btn btn-link text-white nav-link-hover" onClick={() => handleNav('/')}>
                  ← Landing
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
