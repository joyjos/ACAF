import "./Footer.css";
import logoFacebook from "../../assets/img/facebook.svg";
import logoInstagram from "../../assets/img/instagram.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <section className="footerOptions">
        <section className="linkContainer">
          <Link to="/aboutus">Quiénes somos</Link>
          <Link to="/events">Fiestas</Link>
          <Link to="/news">Noticias</Link>
          <Link to="/multimedia">Multimedia</Link>
          <Link to="mailto:asociacionculturalarenesca@gmail.com?subject=Dudas o sugerencias">
            asociacionculturalarenesca@gmail.com
          </Link>
        </section>
        <section className="derContainer">
          <p>
            {" "}
            © 2024 ACAF. Todos los derechos reservados.{" "}
            <strong>AVISO LEGAL</strong>
          </p>
        </section>
      </section>
      <section className="socialNetworks">
        <Link
          target="_blank"
          to="https://www.facebook.com/ASOCIACIONCULTURALARENESCADEFESTEJOS"
        >
          <img src={logoFacebook} className="logoFacebook"></img>
        </Link>
        <Link target="_blank" to="https://www.instagram.com/acaf_larena">
          <img src={logoInstagram} className="logoInstagram"></img>
        </Link>
      </section>
      <section className="footerLogo">
        <img
          className="footerLogo"
          src="../../../../src/presentation/assets/ACAF.svg"
          alt="Logo ACAF"
        />
      </section>
    </footer>
  );
}
