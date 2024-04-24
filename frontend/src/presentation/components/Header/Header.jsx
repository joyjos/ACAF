import { Link } from "react-router-dom";
import acaf from "../../assets/ACAF.svg";
import "./Header.css";
import { useEffect, useState } from "react";

export default function Header() {
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
    <div className="headerContainer">
      <Link to="/">
        <img src={acaf} alt="logo" className="headerLogo" />
      </Link>
      <div className={`headerContainer ${isSticky ? "sticky" : ""}`}>
        <section className={`headerOptions ${isMobileMenuOpen ? "open" : ""}`}>
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
