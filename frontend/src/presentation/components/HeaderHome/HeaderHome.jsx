import "./HeaderHome.css";

export default function HeaderHome() {
  return (
    <div className="headerHomeContainer">
      <section>
        <img
          className="headerHomeLogo"
          src="../../../../src/presentation/assets/ACAF.svg"
          alt="Logo ACAF"
        />
      </section>
      <section className="headerHomeOptions">
        <p>Quiénes somos</p>
        <p>Fiestas</p>
        <p>Actividades</p>
        <p>Noticias</p>
        <p>Multimedia</p>
        <p>Hazte socio</p>
        <img
          className="headerHomeIcon"
          src="../../../../src/presentation/assets/userLogo.svg"
          alt="User"
        />
      </section>
    </div>
  );
}
