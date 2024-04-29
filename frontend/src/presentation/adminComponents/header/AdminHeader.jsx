import { Link, useNavigate } from "react-router-dom";
import arrowBack from "../../assets/img/arrowBack.png";
import "./AdminHeader.css"

export default function AdminHeader() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <header className="headerAdmin">
      <img onClick={goBack} src={arrowBack} alt="arrow Back" />

      <Link to="/">
      CERRAR SESIÓN
      </Link>
    </header>
  );
}
