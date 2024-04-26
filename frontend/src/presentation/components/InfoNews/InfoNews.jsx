import "./InfoNews.css";
import foto1 from "../../../../src/presentation/assets/img/procesionSanJuan.jpg"
import foto2 from "../../../../src/presentation/assets/img/FogueraSanJuan.jpg"
import foto3 from "../../../../src/presentation/assets/img/boat.jpg"

export default function InfoNews() {
  const noticias = [
    {
      img: `${foto1}` ,
      titulo:
        "Procesión marinera de San Juan de la Arena: Un homenaje a la Virgen del Carmen y a los marineros",
      contenido: (
        <>
          <p>
            San Juan de la Arena, 24 de junio de 2024 - Miles de personas se
            congregaron hoy en San Juan de la Arena para presenciar la
            tradicional procesión marinera, uno de los actos más destacados de
            las fiestas patronales en honor a San Juan Bautista y a la Virgen
            del Carmen.
          </p>
          <p>
            La procesión comenzó a las 13:00 horas desde la iglesia parroquial
            de San Juan Bautista, donde se encuentra la imagen del santo. La
            comitiva, acompañada por las autoridades locales, cofradías, grupos
            folclóricos y numeroso público, recorrió las calles céntricas del
            pueblo hasta llegar a la ría del Nalón.
          </p>
          <p>
            A su llegada al puerto, las imágenes de San Juan Bautista y la
            Virgen del Carmen fueron embarcadas en dos embarcaciones engalanadas
            para realizar una procesión marítima por la ría. Numerosas
            embarcaciones pesqueras y deportivas se unieron a la procesión,
            creando un colorido espectáculo en el mar.
          </p>
          <p>
            Tras la procesión marítima, las imágenes regresaron a la iglesia
            parroquial, donde se celebró una misa solemne. La jornada festiva
            concluyó con una verbena popular en la plaza del pueblo.
          </p>
          <p>
            La procesión marinera de San Juan de la Arena es una tradición
            centenaria que tiene un profundo significado para los vecinos del
            pueblo. Este acto religioso rinde homenaje a la Virgen del Carmen,
            patrona de los marineros, y a San Juan Bautista, patrón del pueblo.
          </p>
        </>
      ),
    },
    {
      img: `${foto2}`,
      titulo:
        "San Juan de la Arena prepara una hoguera de récord para celebrar San Juan",
      contenido: (
        <>
          <p>
            Los vecinos de San Juan de la Arena están ultimando los detalles
            para la celebración de la hoguera de San Juan, que tendrá lugar el
            próximo domingo 23 de junio.
          </p>
          <p>
            Este año, la fiesta tendrá un carácter especial, ya que se pretende
            batir el récord de altura de la hoguera. La hoguera, que se
            construirá con más de 20 toneladas de madera, medirá 15 metros de
            altura, superando así el récord actual de 12 metros. El objetivo es
            que la hoguera de San Juan de la Arena se convierta en un referente
            en toda Asturias.
          </p>
          <p>
            Los actos de la fiesta comenzarán a las 20:00 horas con una verbena
            popular en la que se podrá disfrutar de música tradicional asturiana
            y una chocolatada para todos los asistentes. A las 22:00 horas se
            procederá al encendido de la hoguera, que estará amenizado por un
            espectáculo de fuegos artificiales.
          </p>
          <p>
            Se espera que la fiesta de San Juan de la Arena atraiga a miles de
            visitantes de toda Asturias. Las autoridades locales han hecho un
            llamamiento a la responsabilidad y al civismo para que la fiesta se
            desarrolle en un ambiente seguro y agradable.
          </p>
        </>
      ),
    },
    {
      img: `${foto3}`,
      titulo:
        "Los marineros de San Juan de la Arena se preparan para la costera del bonito",
      contenido: (
        <>
          <p>
            San Juan de la Arena, 22 de abril de 2024 - Los marineros de San
            Juan de la Arena, en el concejo de Soto del Barco, se preparan para
            la costera del bonito, que dará comienzo el próximo 1 de junio. Este
            año, las expectativas son buenas, ya que se espera una buena
            temporada en lo que a capturas se refiere.
          </p>
          <p>
            La costera del bonito es una de las épocas más importantes del año
            para los marineros de San Juan de la Arena. Durante estos meses, los
            barcos salen a la mar en busca del bonito, un pez muy apreciado en
            la gastronomía asturiana.
          </p>
          <p>
            La preparación para la costera del bonito comienza con la revisión
            de los barcos y los aparejos. Los marineros se aseguran de que todo
            esté en perfectas condiciones para afrontar la dura travesía en
            busca del preciado pez.
          </p>
          <p>
            El bonito se pesca con caña, una técnica que requiere mucha
            experiencia y habilidad. Los marineros pasan horas y horas en el
            mar, faenando bajo el sol y la lluvia, para conseguir las mejores
            capturas.
          </p>
        </>
      ),
    }
  ];

  return (
    <div className="pagesDisplay">
      <section className="newsContainer">
        <h1 className="titleNews">Noticias</h1>
        {noticias.map((noticia, index) => (
          <section key={index} className="newsCard">
            <img src={noticia.img} alt={noticia.titulo} className="newsImg" />
            <h3 className="newsTitle">{noticia.titulo}</h3>
            <div className="newsContent">{noticia.contenido}</div>
          </section>
        ))}
      </section>
    </div>
  );
}
