import './InfoNews.css';

export default function InfoNews() {
    const noticias = [
        {
            img: "../../../../src/presentation/assets/imgNews1.jpg",
            titulo: "Título de la noticia 1",
            contenido: "Este es un contenido de noticia más largo. Puedes agregar tanto texto como desees aquí. Recuerda que el contenido de la noticia debe ser informativo y relevante para tus lectores. Puedes hablar sobre los últimos acontecimientos, proporcionar actualizaciones sobre un tema específico, o incluso compartir tus propias opiniones y análisis. Asegúrate de que tu contenido sea fácil de leer y entender, y trata de mantener a tus lectores interesados con un lenguaje claro y conciso."
        },
        {
            img: "../../../../src/presentation/assets/imgNews2.jpg",
            titulo: "Título de la noticia 2",
            contenido: "Este es un contenido de noticia más largo. Puedes agregar tanto texto como desees aquí. Recuerda que el contenido de la noticia debe ser informativo y relevante para tus lectores. Puedes hablar sobre los últimos acontecimientos, proporcionar actualizaciones sobre un tema específico, o incluso compartir tus propias opiniones y análisis. Asegúrate de que tu contenido sea fácil de leer y entender, y trata de mantener a tus lectores interesados con un lenguaje claro y conciso."
        },
        {
            img: "../../../../src/presentation/assets/imgNews2.jpg",
            titulo: "Título de la noticia 3",
            contenido: "Este es un contenido de noticia más largo. Puedes agregar tanto texto como desees aquí. Recuerda que el contenido de la noticia debe ser informativo y relevante para tus lectores. Puedes hablar sobre los últimos acontecimientos, proporcionar actualizaciones sobre un tema específico, o incluso compartir tus propias opiniones y análisis. Asegúrate de que tu contenido sea fácil de leer y entender, y trata de mantener a tus lectores interesados con un lenguaje claro y conciso."
        },
        {
            img: "../../../../src/presentation/assets/imgNews2.jpg",
            titulo: "Título de la noticia 4",
            contenido: "Este es un contenido de noticia más largo. Puedes agregar tanto texto como desees aquí. Recuerda que el contenido de la noticia debe ser informativo y relevante para tus lectores. Puedes hablar sobre los últimos acontecimientos, proporcionar actualizaciones sobre un tema específico, o incluso compartir tus propias opiniones y análisis. Asegúrate de que tu contenido sea fácil de leer y entender, y trata de mantener a tus lectores interesados con un lenguaje claro y conciso."
        },
    ];

    return (
        <div className="pagesDisplay">
            <section className="newsContainer">
                <h1 className="titleNews">Noticias</h1>
                {noticias.map((noticia, index) => (
                    <section key={index} className="newsCard">
                        <img src={noticia.img} alt="" />
                        <h3 className="newsTitle">{noticia.titulo}</h3>
                        <p className="newsContent">{noticia.contenido}</p>
                    </section>
                ))}
            </section>
        </div>
    );
}