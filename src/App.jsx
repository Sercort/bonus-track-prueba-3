import { useState } from 'react';
import { peliculas } from './data/peliculas';
import ListaPeliculas from './components/ListaPeliculas';
import FiltroClasificacion from './components/FiltroClasificacion';

function App() {
  const [filtro, setFiltro] = useState('Todas');

  // Lógica de filtrado
  const peliculasFiltradas = filtro === 'Todas' 
    ? peliculas 
    : peliculas.filter(p => p.clasificacion === filtro);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Cartelera de Cine</h1>
      <FiltroClasificacion filtro={filtro} setFiltro={setFiltro} />
      <ListaPeliculas peliculas={peliculasFiltradas} />
    </div>
  );
}
export default App;