import "./InfoEvents.css";
import procesion from "../../assets/img/procesionSanJuan.jpg";
import foguera from "../../assets/img/FogueraSanJuan.jpg";
import redes from "../../assets/img/redesProcesion.jpg";

export default function InfoEvents() {
  return (
    <div className="eventsContainter">
      <div>
        <article>
          <h1 className="titleEvents">Fiestas</h1>
        </article>
        <p className="contentEvents">
          San Juan de la Arena venera a dos patrones: San Juan y San Telmo. Cada
          año, ambas festividades se celebran con gran entusiasmo, marcando el
          inicio y el final del verano.
        </p>
        <h3>San Juan</h3>
        <p className="contentEvents">
          Las fiestas de San Juan son las primeras del año, con varios días de
          festejos que dan la bienvenida al verano. La noche de San Juan, la más
          especial del año, tiene un toque marinero en nuestro pueblo: la quema
          de un barco. Minutos antes de prenderle fuego, un espectáculo de
          fuegos artificiales ilumina el cielo, deleitando a vecinos y
          visitantes. La traca final da inicio a la quema del barco, tras la
          cual, las orquestas animan la noche en el prao de la rula. La mañana
          del 24, la fiesta continúa en nuestro pueblo con un marcado sabor
          marinero. Engalanados con sus trajes de marineros, los vecinos salen a
          las calles. Los santos son sacados en procesion, recorriendo las
          calles del pueblo en un ambiente de fervor y alegría. Tenemos
          charanga, gaitas y orquesta para la hora del vermut, no creo que
          exista un plan mejor ¿verdad?
        </p>
        <div className="containerImgs">
          <img src={foguera} alt="foguera" />
          <img src={procesion} alt="procesion" />
        </div>
        <h3>San Telmo</h3>
        <p className="contentEvents">
          Las fiestas de San Telmo son el broche de oro del verano en San Juan
          de la Arena. Un fin de semana cargado de música, bailes, procesiones
          y, sobre todo, unión entre vecinos y visitantes. En esta procesion, a
          diferencia de la que se celebra en San Juan, las redes tienen un papel
          protagonista. Llevadas por los marineros del pueblo, simbolizan la
          importancia de la pesca para San Juan de la Arena y rinden homenaje a
          su larga tradición marinera. Un gesto que emociona a los vecinos y
          recuerda el estrecho vínculo que une al pueblo con el mar. Cuando la
          procesion pasa cerca de la ria, algunos de los santos se acercan a
          ella y los marineros que los llevan, tiran al agua flores en una señal
          de homenajear a los marineros caidos en la mar.
        </p>
        <div className="containerImgs">
          <img src={redes} alt="foguera" />
        </div>
      </div>
    </div>
  );
}
