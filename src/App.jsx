import { useState } from 'react'

const rutasIniciales = ['Ruta 44', 'Ruta 30', 'Ruta 101']

function App() {
  const [sheetOpen, setSheetOpen] = useState(true)

  return (
    <div className="app">
      <header className="search-bar">
        <input type="text" placeholder="¿A dónde vas?" aria-label="Buscar destino" />
      </header>

      <main className="map-area" aria-label="Mapa">
        <div className="map-placeholder" draggable="true">
          <p>Mapa (arrastra este bloque para simular movimiento)</p>
        </div>
      </main>

      <section className={`bottom-sheet ${sheetOpen ? 'open' : ''}`}>
        <button className="sheet-handle" onClick={() => setSheetOpen(!sheetOpen)}>
          {sheetOpen ? 'Ocultar rutas' : 'Mostrar rutas'}
        </button>

        <h2>Rutas disponibles</h2>
        <ul>
          {rutasIniciales.map((ruta) => (
            <li key={ruta}>{ruta}</li>
          ))}
        </ul>
      </section>

      <nav className="bottom-nav" aria-label="Navegación inferior">
        <button>Mapa</button>
        <button>Rutas</button>
        <button>Configuración</button>
      </nav>
    </div>
  )
}

export default App
