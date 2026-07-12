function Buscador({ termino, onChange }) {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar por cliente, email o servicio..."
        value={termino}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default Buscador
