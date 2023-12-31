import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../../componentes/BlogData";
import  '../../css/noticias_page.css';
import { Link } from "react-router-dom";
import imgside1 from '../../img/Noticias/new_1.jpg';
import imgside2 from '../../img/Noticias/new_2.jpg';
import imgside3 from '../../img/Noticias/new_3.jpg';


const BlogDetalle = () => {

  const ScrollToTop = () => {
    window.scrollTo({
      top: (0,0),
      behavior: 'smooth',
    });
  }

  const { id } = useParams();
  const blogId = parseInt(id);

  const blogSeleccionado = blogData.find((blog) => blog.id === blogId);

  if (!blogSeleccionado) {
    return <div>No se encontró la noticia</div>;
  }

  const { title, imgUrl, fecha, nombre, resumen, contenido, icono, categoria } = blogSeleccionado;

  const parrgrafosContenido = contenido.split('\n\n');

  const contenidoConEnlaces = parrgrafosContenido.map((parrafo, index) => {
    // Buscar URLs en el parrafo y reemplazarlas con enlaces
    const regex = /\[(.*?)\]/g;
    const parrafoConEnlaces = parrafo.replace(regex, (match, url) => {
      return <a key={index} href={url} target="_blank" rel="noopener noreferrer">{url}</a>;
    });

    return <p key={index}>{parrafoConEnlaces}</p>;
  });
    return(
        <>
        
        <section id="news" className="news">
      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row g-5">

          <div className="col-lg-8">

            <article className="news-details">

              <div className="post-img">
                <img src={imgUrl}alt="" className="img-fluid"/>
              </div>

              <h2 className="title">{title}</h2>

              <div className="meta-top">
                <ul>
                  <li className="d-flex align-items-center"><i className="bi bi-person"></i>{nombre}</li>
                  <li className="d-flex align-items-center"><i className="bi bi-clock"></i>{fecha}</li>
                
                </ul>
              </div>

              <div className="content">

                {parrgrafosContenido.map((parrafo, index) => (
                  <p key={index}>{parrafo}</p>

                ))}
              </div>

              <div className="meta-bottom">
                {icono}
                <ul className="cats">
                  <li><a href="#"> {categoria}</a></li>
                </ul>

              </div>

            </article>
            </div>
            

            <div className="col-lg-4">

<div className="sidebar">

  <div className="sidebar-item recent-posts">
    <h3 className="sidebar-title">Artículos relacionados</h3>

    <div className="mt-3">

      <div className="post-item">
        <img src={imgside1} alt=""/>
        <div>
          <h4><Link to={`/Horizontista/blog/1`}onClick={ScrollToTop}>El eje de la felicidad se refuerza Horizonte en la Fundación Universitaria con los nuevos torniquetes – ¡sino sonríes no entras!</Link></h4>
          <time >NOVIEMBRE 7,2023</time>
        </div>
      </div>

      <div className="post-item">
        <img src={imgside2} alt=""/>
        <div>
          <h4><Link to={`/Horizontista/blog/2`}onClick={ScrollToTop}>Las Emociones de los Alimentos: Un Viaje Desde el Placer al Significado</Link></h4>
          <time >OCTUBRE 24,2023</time>
        </div>
      </div>

      <div className="post-item">
        <img src={imgside3} alt=""/>
        <div>
          <h4><Link to={`/Horizontista/blog/3`}onClick={ScrollToTop}>Análisis de texto y lecturas en estudiantes universitarios: Explorando las causas de la falta de gusto</Link></h4>
          <time >OCTUBRE 9,2023</time>
        </div>
      </div>

     

    </div>

  </div>



</div>

</div>
</div>

            </div>
            </section>
            
        </>

    )
}

export default BlogDetalle