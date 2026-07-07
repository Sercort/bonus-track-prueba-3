import { peliculas } from './data/peliculas';
import ListaPeliculas from './components/ListaPeliculas';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Cartelera de Cine</h1>
      {/* Pasamos el arreglo completo al componente de lista */}
      <ListaPeliculas peliculas={peliculas} />
    </div>
  );
}
export default App;