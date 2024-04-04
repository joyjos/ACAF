import "./InfoHome.css";

export default function InfoHome() {
  return (
    <div className="infoHomeContainer">
      <h3 className="infoHomeAssociationTitle">La Asociación</h3>
      <p className="infoHomeAssociationParagraph">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem.
      </p>
      <hr className="infoHomeLine" />
      <h3 className="infoHomeActualityTitle">Actualidad</h3>
      <section className="infoHomeImages">
        <img src="../../../../src/presentation/assets/imgActuality1.jpg" alt="" />
        <img src="../../../../src/presentation/assets/imgActuality2.jpg" alt="" />
        <img src="../../../../src/presentation/assets/imgActuality3.jpg" alt="" />
      </section>
    </div>
  );
}
