import PropTypes from 'prop-types';

const PeliculaCard = ({ titulo, genero, duracion, clasificacion, sinopsis, horarios, funcionHoy }) => {
  // Estilo condicional para resaltar funciones de hoy
  const cardStyle = {
    border: funcionHoy ? '2px solid #FFD700' : '1px solid #ccc',
    padding: '15px',
    margin: '10px',
    borderRadius: '8px',
    backgroundColor: funcionHoy ? '#fff9e6' : '#fff'
  };

  return (
    <div style={cardStyle}>
      {funcionHoy && <span style={{ color: '#d4ac0d', fontWeight: 'bold' }}>★ HOY ★</span>}
      <h3>{titulo}</h3>
      <p><strong>Género:</strong> {genero}</p>
      <p><strong>Duración:</strong> {duracion} min</p>
      <p><strong>Clasificación:</strong> {clasificacion}</p>
      <p>{sinopsis}</p>
      <p><strong>Horarios:</strong> {horarios.join(', ')}</p>
    </div>
  );
};

PeliculaCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  genero: PropTypes.string.isRequired,
  duracion: PropTypes.number.isRequired,
  clasificacion: PropTypes.string.isRequired,
  sinopsis: PropTypes.string.isRequired,
  horarios: PropTypes.arrayOf(PropTypes.string).isRequired,
  funcionHoy: PropTypes.bool.isRequired
};

export default PeliculaCard;