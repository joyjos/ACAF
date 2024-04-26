import { Link } from "react-router-dom";
import "./HeaderHome.css";
import { useEffect, useState } from "react";

export default function HeaderHome() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== isSticky) {
        setIsSticky(isScrolled);
      }
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isSticky, isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="headerRelative">
      <img
        className="headerHomeLogo"
        src="../../../../src/presentation/assets/img/ACAF.svg"
        alt="Logo ACAF"
      />
      <div className={`headerHomeContainer ${isSticky ? "sticky" : ""}`}>
        <section
          className={`headerHomeOptions ${isMobileMenuOpen ? "open" : ""}`}
        >
          <Link to="/aboutus">
            <p>Quiénes somos</p>
          </Link>
          <Link to="/events">
            <p>Fiestas</p>
          </Link>
          <Link to="/news">
            <p>Noticias</p>
          </Link>
          <Link to="/multimedia">
            <p>Multimedia</p>
          </Link>
          <Link to="/login">
            <img
              className="headerHomeIcon"
              src="../../../../src/presentation/assets/img/userLogo.svg"
              alt="User"
            />
          </Link>
        </section>
        <div className="hamburgerButtonContainer">
          <button className="hamburgerButton" onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>
      </div>
    </div>
  );
}
