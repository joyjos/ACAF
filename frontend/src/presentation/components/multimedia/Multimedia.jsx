import Foguera from "../../assets/img/FogueraSanJuandelaArena.jpg";
import Barco from "../../assets/img/boat.jpg";
import BarcoHundido from "../../assets/img/barcoHundido.jpg";
import FiestaMarinera from "../../assets/img/fiestaMarinera.jpg";
import IglesiaSanJuan from "../../assets/img/iglesiaSanJuan.jpg";
import LaRula from "../../assets/img/laRula.jpg";
import ProcesionMarinera from "../../assets/img/procesionMarinera.jpg";
import SanTelmo from "../../assets/img/sanTelmo.jpg";
import SurfPhoto from "../../assets/img/surfPhoto.jpg";
import Playa from "../../assets/img/playa.jpg";
import VillaSanJuanArena from "../../assets/img/villaSanJuanArena.jpg";
import HogueraSanJuan from "../../assets/img/hogueraSanJuan.jpg";

import "./Multimedia.css";

export default function Multimedia() {
  const multimediaImg = [
    { name: "Foguera", image: Foguera },
    { name: "Barco", image: Barco },
    { name: "Barco Hundido", image: BarcoHundido },
    { name: "Fiesta Marinera", image: FiestaMarinera },
    { name: "Iglesia San Juan", image: IglesiaSanJuan },
    { name: "La Rula", image: LaRula },
    { name: "Procesión Marinera", image: ProcesionMarinera },
    { name: "San Telmo", image: SanTelmo },
    { name: "Surf Photo", image: SurfPhoto },
    { name: "Playa", image: Playa },
    { name: "Villa San Juan Arena", image: VillaSanJuanArena },
    { name: "Hoguera San Juan", image: HogueraSanJuan },
  ];

  return (
    <main className="containerMultimedia">
      <h1>Multimedia</h1>
      <div>
        {multimediaImg.map((imagen, index) => (
          <article key={index} className="containerImage">
            <section>
              <img src={imagen.image} alt={imagen.name} />
            </section>
            <section className="containerText">
              <p>{imagen.name}</p>
            </section>
          </article>
        ))}
      </div>
    </main>
  );
}
