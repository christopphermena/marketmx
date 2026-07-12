const BASE_URL = 'https://apiclases.inacode.cl/marketing'

export async function listarSolicitudes() {
  const res = await fetch(BASE_URL)
  if (!res.ok) throw new Error('Error al obtener solicitudes')
  return res.json()
}

export async function obtenerSolicitud(id) {
  const res = await fetch(`${BASE_URL}/${id}`)
  if (!res.ok) throw new Error('Error al obtener la solicitud')
  return res.json()
}

export async function crearSolicitud(data) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!res.ok) throw new Error('Error al crear la solicitud')
  return res.json()
}

export async function actualizarSolicitud(id, data) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!res.ok) throw new Error('Error al actualizar la solicitud')
  return res.json()
}

export async function eliminarSolicitud(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  })
  if (!res.ok) throw new Error('Error al eliminar la solicitud')
  return res.json()
}

export async function buscarSolicitudes(termino, solicitudes) {
  if (!termino.trim()) return solicitudes
  const lower = termino.toLowerCase()
  return solicitudes.filter(s =>
    s.cliente?.nombre?.toLowerCase().includes(lower) ||
    s.cliente?.email?.toLowerCase().includes(lower) ||
    s.servicioNombre?.toLowerCase().includes(lower)
  )
}
