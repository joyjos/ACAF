import { Link } from "react-router-dom";
import "./HeaderHome.css";
import { useEffect, useState } from "react";

export default function HeaderHome() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== isSticky) {
        setIsSticky(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky]);

  return (
    <div className="headerRelative">
      <img
        className="headerHomeLogo"
        src="../../../../src/presentation/assets/ACAF.svg"
        alt="Logo ACAF"
      />
      <div className={`headerHomeContainer ${isSticky ? "sticky" : ""}`}>
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
          <Link to="/partners"></Link>
          <p>Hazte socio</p>
          <Link to="/login">
            <img
              className="headerHomeIcon"
              src="../../../../src/presentation/assets/userLogo.svg"
              alt="User"
            />
          </Link>
        </section>
      </div>
    </div>
  );
}
