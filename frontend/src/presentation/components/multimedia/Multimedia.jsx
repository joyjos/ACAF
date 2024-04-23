import Foguera from "../../assets/FogueraSanJuandelaArena.jpg";
import playa from "../../assets/playa de la arena.jpg";
import "./Multimedia.css";

export default function Multimedia() {
  return (
    <main className="containerMultimedia">
      <p>Multimedia</p>
      <div>
        <section>
          <img src={Foguera} alt="Foguera" />
        </section>

        <img src={playa} alt="playa" />
        <img src={Foguera} alt="Foguera" />
        <img src={playa} alt="playa" />
        <img src={Foguera} alt="Foguera" />
        <img src={playa} alt="playa" />
        <img src={Foguera} alt="Foguera" />
        <img src={playa} alt="playa" />
        <img src={Foguera} alt="Foguera" />
        <img src={playa} alt="playa" />
        <img src={Foguera} alt="Foguera" />
        <img src={playa} alt="playa" />
      </div>
    </main>
  );
}
