import { Link } from "react-router-dom";
import acaf from "../../assets/ACAF.svg"
import "./Header.css";

export default function Header() {

  return (
    <div className="headerContainer">
      <Link to="/">
        <img src={acaf} alt="logo" />
      </Link>
      <section className="headerHomeOptions">
        <Link to="/aboutus">
          <p>Quiénes somos</p>
        </Link>
        <Link to="/events">
          <p>Fiestas</p>
        </Link>
        <Link to="/activities">
        <p>Actividades</p>
        </Link>
        <Link to="/news">
        <p>Noticias</p>
        </Link>
        <p>Multimedia</p>
        <p>Hazte socio</p>
      </section>
    </div>
  );
}
