import "./Footer.css";
import logoFacebook from "../../assets/facebook.svg";
import logoInstagram from "../../assets/instagram.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <section className="footerOptions">
        <section className="linkContainer">
          <Link to="/aboutus">
            <p>Quiénes somos</p>
          </Link>
          <Link to="/events">
            <p>Fiestas</p>
          </Link>
          <Link to="/news">
            <p>Noticias</p>
          </Link>
          <Link>
            <p>Multimedia</p>
          </Link>
        </section>
        <section className="derContainer">
        <Link to="mailto:asociacionculturalarenesca@gmail.com?subject=Dudas o sugerencias" className="contactFooter">asociacionculturalarenesca@gmail.com</Link>
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
      <section>
        <img
          className="footerLogo"
          src="../../../../src/presentation/assets/ACAF.svg"
          alt="Logo ACAF"
        />
      </section>
    </footer>
  );
}
