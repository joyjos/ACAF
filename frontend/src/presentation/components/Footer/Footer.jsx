import "./Footer.css";

export default function Footer() {
    return (
        <div className="footerContainer">
            <section className="footerOptions">
                <p>Quiénes somos</p>
                <p>Fiestas</p>
                <p>Actividades</p>
                <p>Noticias</p>
                <p>Multimedia</p>
                <p>Hazte socio</p>
            </section>
            <section>
                <img
                    className="footerLogo"
                    src="../../../../src/presentation/assets/ACAF.svg"
                    alt="Logo ACAF"
                />
            </section>
        </div>
    );
}