import PropTypes from 'prop-types';

const FiltroClasificacion = ({ filtro, setFiltro }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label htmlFor="clasificacion">Filtrar por clasificación: </label>
      <select 
        id="clasificacion" 
        value={filtro} 
        onChange={(e) => setFiltro(e.target.value)}
      >
        <option value="Todas">Todas</option>
        <option value="TE">TE</option>
        <option value="+14">+14</option>
        <option value="+18">+18</option>
      </select>
    </div>
  );
};

FiltroClasificacion.propTypes = {
  filtro: PropTypes.string.isRequired,
  setFiltro: PropTypes.func.isRequired
};

export default FiltroClasificacion;