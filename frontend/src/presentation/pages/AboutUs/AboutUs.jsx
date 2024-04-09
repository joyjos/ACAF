import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PositionMap from "../../components/PositionMap/PositionMap";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="pagesDisplay">
      <Header />
      <section className="aboutContainer">
        <h1 className="titleAbout">Quiénes somos</h1>
        <p className="contentAbout">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem.
        </p>
        <section className="mapContainer">
          <PositionMap />
        </section>
      </section>
      <Footer />
    </div>
  );
}
