import PeliculaCard from './PeliculaCard';
import PropTypes from 'prop-types';

const ListaPeliculas = ({ peliculas }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {peliculas.map((p) => (
        <PeliculaCard 
          key={p.id} 
          titulo={p.titulo}
          genero={p.genero}
          duracion={p.duracion}
          clasificacion={p.clasificacion}
          sinopsis={p.sinopsis}
          horarios={p.horarios}
          funcionHoy={p.funcionHoy}
        />
      ))}
    </div>
  );
};

ListaPeliculas.propTypes = {
  peliculas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      titulo: PropTypes.string.isRequired,
      genero: PropTypes.string.isRequired,
      duracion: PropTypes.number.isRequired,
      clasificacion: PropTypes.string.isRequired,
      sinopsis: PropTypes.string.isRequired,
      horarios: PropTypes.arrayOf(PropTypes.string).isRequired,
      funcionHoy: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default ListaPeliculas;