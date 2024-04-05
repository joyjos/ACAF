import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div className="headerContainer">
      <section className="headerHomeOptions">
        <Link to="/aboutus">
          <p>Quiénes somos</p>
        </Link>
        <Link to="/events">
          <p>Fiestas</p>
        </Link>
        <p>Actividades</p>
        <p>Noticias</p>
        <p>Multimedia</p>
        <p>Hazte socio</p>
      </section>
    </div>
  );
}
