import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PositionMap from "../../components/PositionMap/PositionMap";
import nosotros from "../../assets/IMG_7853.jpg";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="pagesDisplay">
      <Header />
      <section className="aboutContainer">
        <h1 className="titleAbout">Quiénes somos</h1>
        <div>
         <article className="contentAbout">
          <p>
            En el corazón de nuestro querido pueblo, un grupo de amigos unidos
            por un profundo amor a nuestras tradiciones hemos decidido tomar las
            riendas de la Asociación de Festejos. Desde hace tiempo, esta
            entidad tan importante para la comunidad se encontraba desamparada,
            y no podíamos permitir que las fiestas que tanto nos unen se
            desvanecieran.
          </p>
          <p>
            Motivados por un sueño común y un compromiso inquebrantable con
            nuestro pueblo, decidimos dar un paso al frente. Irene, Aitor,
            Lucía, Diego, Nicolás, Salma, Natalia, Sergio y Oriol,
            conformamos este equipo entusiasta y decidido a dar un nuevo impulso
            a las celebraciones que tanto significado tienen para todos
            nosotros.
          </p>
          <p>
            Las fiestas de nuestro pueblo siempre han sido un pilar fundamental
            de nuestra identidad. Son un espacio donde se celebran nuestras
            tradiciones, se fortalecen los lazos de vecindad y se crea un
            ambiente de sana diversión y camaradería. Desde pequeños, hemos
            disfrutado de cada momento, cada baile, cada comida y cada canción
            que ha llenado las calles de alegría y unión.
          </p>
          <p>
            Es por eso que, al tomar el cargo en la Asociación de Festejos,
            sentimos una enorme responsabilidad y, al mismo tiempo, una gran
            ilusión. Somos conscientes del importante papel que estas fiestas
            juegan en la vida de nuestro pueblo, y por ello nos hemos
            comprometido a mantener viva su llama y enriquecerlas con nuevas
            ideas y propuestas.
          </p>
          <p>
            Llenos de optimismo y con la energía que nos caracteriza, nos
            embarcamos en esta nueva etapa con un objetivo claro: organizar unas
            fiestas aún más participativas, inclusivas y memorables. Queremos
            que todos los vecinos y visitantes disfruten de cada segundo de las
            celebraciones, sintiendo el orgullo de pertenecer a este maravilloso
            pueblo.
          </p>
          <p>
            Para ello, estamos trabajando incansablemente en la planificación de
            actividades, buscando nuevas propuestas que sorprendan y diviertan a
            todos. Queremos que las fiestas sean un reflejo de la diversidad y
            la riqueza cultural de nuestro pueblo, un espacio donde todos se
            sientan bienvenidos y puedan disfrutar en familia y con amigos.
          </p>
          </article>
          <img src={nosotros} alt="nosotros" />
        </div>
        <section className="mapContainer">
          <PositionMap />
        </section>
      </section>
      <Footer />
    </div>
  );
}
