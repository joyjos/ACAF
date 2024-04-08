import './Searcher.css';

import PersonIcon from '@mui/icons-material/Person';
const Searcher = () => {

  return (
    <section className="userSearchContainer">
      <div className='userSearchContainer__Field'>
        <div className="userButton">
        <PersonIcon className='userIcon' />
        </div>
      
        <input
          type="search"
          className="userSearchContainer__Field-Input"
          placeholder=" Buscar socio por nombre, apellido, nº de socio"
        />
        <button className="userSearchContainer__Field-Button">
          <img src="/src/assets/searchIcon.svg" alt="búsqueda" />
        </button>        
      </div>
    </section>
  )
}
export default Searcher;