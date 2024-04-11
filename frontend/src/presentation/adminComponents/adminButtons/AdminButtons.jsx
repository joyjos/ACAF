import './AdminButtons.css';
import { Link } from 'react-router-dom'

export const AdminButtons = () => {
  return (
    <main className="container_buttons">
        <Link to="/addMember"><button>Añadir Socio</button></Link>
        <button>Listado de socios</button>
    </main>
  )
}
