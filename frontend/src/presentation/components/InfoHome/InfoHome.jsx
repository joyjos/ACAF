import "./InfoHome.css";

export default function InfoHome() {
  return (
    <div className="infoHomeContainer">
      <h3 className="infoHomeAssociationTitle">La Asociación</h3>
      <p className="infoHomeAssociationParagraph">
        Bienvenidos a ACAF, una asociación de festejos formada por un grupo de jóvenes llenos de entusiasmo y determinación, unidos
        por el propósito común de organizar y llevar a cabo las fiestas
        patronales de San Juan de la Arena. Nos motiva el deseo profundo de
        hacer de nuestro pueblo un lugar mejor, y estamos decididos a hacer todo
        lo que esté en nuestras manos para lograrlo. Estamos emocionados por la
        oportunidad de contribuir al bienestar de nuestra comunidad y estamos
        comprometidos a trabajar muy duro para ofrecer unas celebraciones
        memorables. Desde la planificación meticulosa de cada detalle hasta la
        ejecución impecable de cada actividad, pondremos todo nuestro empeño
        para asegurarnos de que las fiestas sean un verdadero éxito. Nos mueve
        una fuerte convicción de que nuestras acciones pueden marcar la
        diferencia y promover un sentido de unión y orgullo entre los habitantes
        de San Juan de la Arena. Estamos aquí para inspirar y para dejar un
        legado positivo que perdure en el tiempo, contribuyendo al florecimiento
        de nuestro querido pueblo, bienvenidos y que puxa La Arena.
      </p>
      <hr className="infoHomeLine" />
      <h3 className="infoHomeActualityTitle">Actualidad</h3>
      <section className="infoHomeImages">
        <img
          src="../../../../src/presentation/assets/imgActuality1.jpg"
          alt=""
        />
        <img
          src="../../../../src/presentation/assets/imgActuality2.jpg"
          alt=""
        />
        <img
          src="../../../../src/presentation/assets/imgActuality3.jpg"
          alt=""
        />
      </section>
    </div>
  );
}
