import './Searcher.css';
import SearchIcon from '@mui/icons-material/Search';
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
        <SearchIcon style={{ color: '#6BC8E6', fontSize: 30 }} />
        </button>        
      </div>
    </section>
  )
}
export default Searcher;