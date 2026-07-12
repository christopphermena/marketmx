function SolicitudCard({ solicitud, onEditar, onEliminar }) {
  return (
    <div className="card h-100 shadow-sm border-0 card-hover">
      <div className="card-body">
        <h5 className="card-title">{solicitud.cliente?.nombre}</h5>
        <p className="card-text text-muted small mb-1">
          <strong>Email:</strong> {solicitud.cliente?.email}
        </p>
        <p className="card-text text-muted small mb-1">
          <strong>Teléfono:</strong> {solicitud.cliente?.telefono}
        </p>
        <p className="card-text text-muted small mb-1">
          <strong>Servicio:</strong> {solicitud.servicioNombre}
        </p>
        <p className="card-text small mb-2">
          {solicitud.mensaje}
        </p>
        <span className={`badge ${solicitud.estado === 'nuevo' ? 'bg-danger' : solicitud.estado === 'en_proceso' ? 'bg-warning text-dark' : solicitud.estado === 'completado' ? 'bg-success' : 'bg-secondary'}`}>
          {solicitud.estado?.replace('_', ' ')}
        </span>
        <small className="text-muted ms-2">{solicitud.fecha}</small>
      </div>
      <div className="card-footer bg-transparent d-flex gap-2 justify-content-center">
        <button className="btn btn-sm btn-outline-primary" onClick={() => onEditar(solicitud)}>
          Editar
        </button>
        <button className="btn btn-sm btn-outline-danger" onClick={() => onEliminar(solicitud)}>
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default SolicitudCard
