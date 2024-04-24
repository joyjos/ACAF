import { Link, useNavigate } from "react-router-dom";
import arrowBack from "../../assets/img/arrowBack.png";
import "./AdminHeader.css"

export default function AdminHeader() {
  const navigate = useNavigate();

  // Call this function when you want to go back
  const goBack = () => {
    navigate(-1);
  };
  return (
    <header className="headerAdmin">
      {/* <button onClick={goBack}> */}
      <img onClick={goBack} src={arrowBack} alt="arrow Back" />

      {/* </button> */}
      <Link to="/">
      CERRAR SESIÓN
      </Link>
    </header>
  );
}
