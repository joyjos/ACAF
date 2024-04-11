import { Link } from "react-router-dom";
import arrowBack from "../../assets/arrowBack.png";
import "./AdminHeader.css"

export default function AdminHeader() {
  return (
    <header className="headerAdmin">
      <img src={arrowBack} alt="arrow Back" />
      <Link to="/">
      CERRAR SESIÓN
      </Link>
    </header>
  );
}
