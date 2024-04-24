import Foguera from "../../assets/FogueraSanJuandelaArena.jpg";
import playa from "../../assets/playa de la arena.jpg";
import "./Multimedia.css";

export default function Multimedia() {
  const multimediaImg =  Array.from({ length: 12 }, (_, index) => {
    return index % 2 === 0 ? Foguera : playa;
  });

  return (
    <main className="containerMultimedia">
      <h1>Multimedia</h1>
      <div>
        {multimediaImg.map((img, index) => (
          <article key={index} className="containerImage">
            <section>
              <img src={img} alt={index % 2 === 0 ? "Foguera" : "playa"}/>
            </section>
            <section className="containerText">
              <p>{index % 2 === 0 ? "Hoguera de San Juan" : "Playa"}</p>
            </section>
          </article>
        ))};
      </div>
    </main>
  );
}
