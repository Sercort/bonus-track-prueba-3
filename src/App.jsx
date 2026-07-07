import { peliculas } from './data/peliculas';
import PeliculaCard from './components/PeliculaCard';

function App() {
  const p = peliculas[0]; // Tomamos la primera película para probar
  return (
    <div style={{ padding: '20px' }}>
      <h1>Cartelera de Cine</h1>
      <PeliculaCard {...p} />
    </div>
  );
}
export default App;