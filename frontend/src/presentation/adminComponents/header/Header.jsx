import { Link } from "react-router-dom";
import arrowBack from "../../assets/arrowBack.png";

export default function Header() {
  return (
    <header>
      <img src={arrowBack} alt="arrow Back" />
      <Link to="/">
        CERRAR SESIÓN
      </Link>
    </header>
  );
}
