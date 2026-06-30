# MarketMX - Landing Page

Landing page para agencia de marketing digital. Construido con React + Vite y Bootstrap 5.3.8 desde CDN.

## Requisitos Previos

- **Node.js** (versión 14+): https://nodejs.org/
- **pnpm** (más rápido que npm): `npm install -g pnpm`

## Inicio Rápido

```bash
# 1. Clonar o descargar proyecto
cd mi-landing

# 2. Instalar dependencias
pnpm install

# 3. Levantar servidor local
pnpm dev
```

Abre en el navegador: **http://localhost:5173**

## Comandos

```bash
pnpm dev       # Desarrollo (¡usa esto normalmente!)
pnpm build     # Compilar para producción (genera dist/)
pnpm preview   # Ver preview del build
pnpm lint      # Verificar código
```

**Nota:** `dist/` se genera automáticamente con `pnpm build` y no ocupa espacio en desarrollo.

## Estructura del Proyecto

```
mi-landing/
├── src/
│   ├── components/         # Componentes React
│   │   ├── Navbar.jsx      # Navegación
│   │   ├── Hero.jsx        # Sección principal
│   │   ├── Servicios.jsx   # Servicios con modal
│   │   ├── Procesos.jsx    # Accordion con pasos
│   │   ├── Galeria.jsx     # Casos de éxito
│   │   ├── Contacto.jsx    # Formulario
│   │   └── Footer.jsx      # Pie de página
│   ├── App.jsx             # App principal
│   ├── main.jsx            # Entrada React
│   ├── style.css           # Estilos
│   └── assets/             # Imágenes
├── public/                 # Archivos públicos
├── index.html              # HTML con Bootstrap CDN
├── vite.config.js          # Config Vite
└── package.json            # Dependencias
```

## Funcionalidades

✅ Navbar responsivo con hover rojo  
✅ Hero section con CTA  
✅ Servicios con modal  
✅ Procesos con accordion  
✅ Galería de casos  
✅ Formulario de contacto  
✅ Footer  

## Personalización

### Cambiar Colores

Edita `src/style.css`:

```css
:root {
  --color-danger: #dc3545;   /* Rojo */
  --color-dark: #212529;     /* Oscuro */
}
```

### Agregar Contenido

- Textos: `src/components/`
- Imágenes: `src/assets/`
- Estilos: `src/style.css`

## Tecnologías

- React 19.2.6
- Vite 8.0.12
- Bootstrap 5.3.8 (CDN)
- CSS Vanilla

## Solución de Problemas

```bash
# Reset completo
rm -rf node_modules pnpm-lock.yaml .vite
pnpm install
pnpm dev
```

## Licencia

MarketMX 2026
