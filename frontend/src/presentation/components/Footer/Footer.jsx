import "./Footer.css";
import logoFacebook from "../../assets/facebook.svg";
import logoInstagram from "../../assets/instagram.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <section className="footerOptions">
        <section className="linkContainer">
          <p>Quiénes somos</p>
          <p>Fiestas</p>
          <p>Actividades</p>
          <p>Noticias</p>
          <p>Multimedia</p>
          <p>Hazte socio</p>
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
        <Link target="_blank" to="https://www.facebook.com/ASOCIACIONCULTURALARENESCADEFESTEJOS">
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
