import React from "react";
import '../css/investigacion.css';
import bannercadmon from '../../src/img/investigacion/banner.jpg';
import revista1 from '../img/investigacion/revista_stylus/vol2.png';
import revista2 from '../img/investigacion/revista_teckne/vol17.JPG';
import logopia from '../img/investigacion/logo_pias.png';
import documpia from '../../src/documentos/investigacion/formato_PIA_2023_VF.docx';
import docuproyinvesti from '../../src/documentos/investigacion/4_F-165 PROYECTO INVESTIGACION_VF.docx';
import docuanteproyecto from '../../src/documentos/investigacion/3_F-051 ANTEPROYECTO_VF.doc';
import prueba from '../img/investigacion/inves1.jpg';
import prueba1 from '../img/investigacion/invest2.jpg';
import prueba2 from '../img/investigacion/galericopy.jpg';
import prueba4 from '../img/investigacion/galeri3.jpeg';
import prueba5 from '../img/investigacion/galeri6.jpg';
import prueba6 from '../img/investigacion/galeri_copy.jpg';
import prueba7 from '../img/investigacion/invest8.jpg';
import logoImg from '../img/investigacion/logo_gcena.svg';
import logoImg1 from '../img/investigacion/logo-sisom.svg';
import logoImg4 from '../img/investigacion/logo-gastro.svg';
import logoImg5 from '../img/investigacion/logo_vertice.svg';
import logoImg6 from '../img/investigacion/logo-tech.svg';
import logoImg7 from '../img/investigacion/logo_dione.svg';
import info1 from '../img/investigacion/infografia_proyecto_de_grado.jpg';
import info2 from '../img/investigacion/infografia-01.jpg';
import info3 from '../img/investigacion/infografia-02.jpg';
import {CardInvestigacion} from '../componentes/investigacion/CardInvestigacion';
import {GrDocumentDownload} from "react-icons/gr";
import {GiVideoConference} from "react-icons/gi"
import {Galeria} from "../componentes/investigacion/Gallery";
import { Link } from "react-router-dom";


const Investigación = () => {

  const ScrollToTop = () =>{
    window.scrollTo({
      top: (0,0),
      behavior: "smooth",
    });
    return null
  }

  const Cardinvestigacion = [
    {
      title: "Grupo de investigación en Seguridad Industrial, Salud Ocupacional y Medio Ambiente",
      imgUrl: logoImg1,
      imgback: prueba1,
      categoria: "COL0107136- Categoría C",
      depto: "Facultad de ingeniería –Ingeniería en Seguridad Industrial e Higiene Ocupacional y Técnico Profesional en Seguridad y Salud en el trabajo",
      lider: "Líder(es): Diana Tamayo-Camilo Torres",
      email: "dirinvestigaciones@unihorizonte.edu.co",
    },
    {
      title: "Grupo de Investigación en Enseñanza de las Ciencias Exactas y Naturales Aplicadas",
      imgUrl: logoImg,
      imgback: prueba6,
      categoria: "COL0199192-Categoría C",
      depto: "Facultad de ingeniería",
      lider: "Líder(es): Luisa García-Diana Tamayo",
      email: "garcia_luisa@unihorizonte.edu.co",
    },
    {
      title: "Grupo de Investigación DIONE",
      imgUrl: logoImg7,
      imgback: prueba,
      categoria: "COL0202304",
      depto: "Facultad de Ciencias Administrativas",
      lider: "Líder: Efrén Antonio Calderón",
      email: "efren_calderon20212@unihorizonte.edu.co",
    },
    {
      title: "Grupo de Investigación Horizonte Cultural Gastronómico",
      imgUrl: logoImg4,
      imgback: prueba4,
      categoria: "COL0231754",
      depto: "Facultad de Gastronomía",
      lider: "Líder: Edy Mayerly González",
      email: "gastronomia@unihorizonte.edu.co",
    },
    {
      title: "Grupo de Investigación Vértice",
      imgUrl: logoImg5,
      imgback: prueba5,
      categoria: "COL0232223",
      depto: "Facultad de Comunicación y Marketing Digital-Diseño gráfico, comunicación y mercadeo",
      lider: "Líder: Martha Cristina Ramírez",
      email: "comunicacionsocial@unihorizonte.edu.co",
    },
    {
      title: "Grupo de Investigación TECH-INNOVA",
      imgUrl: logoImg6,
      imgback: prueba2,
      categoria: "COL0229658",
      depto: "Facultad de ingeniería – ingeniería de Software",
      lider: "Líder: Diana Patricia Camargo",
      email: "rectoria@unihorizonte.edu.co",
    },
    {
      title: "Grupo de Investigación NANSHE",
      imgUrl: "",
      imgback: prueba7,
      categoria: "COL0233982",
      depto: "Facultad de Ciencias Jurídicas",
      lider: "Líder: Jayme Baez",
      email: "derecho@unihorizonte.edu.co",
    },
  ];
    return(
        <>
          <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannercadmon})`}}>
            <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
            </div>
          </div>
          <section id="investigacion" className="investigacion">
            <div className="container" data-aos="fade-up">
              <div className="col-lg-12 col-md-12 text-center">
                <h2>Investigación</h2>
                <p className="descripcion text-justify">
                  En la Fundación Universitaria Horizonte la investigación se constituye como fuente de saber, generadora y soporte del ejercicio docente, que como propósito principal tiene la producción y validación de nuevo conocimiento para impulsar el desarrollo académico, científico, tecnológico, cultural y social del país. Para lograr este fin, el Proyecto Educativo Institucional (PEI) de la fundación Universitaria Horizonte propone desde la óptica de la investigación, “una universidad comprometida con la cultura investigativa, el pensamiento científico y tecnológico” a través de un modelo pedagógico de desarrollo humano, que está orientado a “visibilizar el conocimiento y los actores que se encuentran tras las huellas de este.”
                </p>
              </div>
              <div className="container d-flex">
                <div className="col-lg-6 col-sm-12" data-aos="zoom-in" data-aos-delay="200">
                  <img src={info1} className="img-fluid revistas" alt=""/>
                  <div className="pia-descarga ">
                    <div className="pia-descarga-item d-flex justify-content-center">
                      <a href={docuproyinvesti}><i><GrDocumentDownload/></i>
                      <p>formato proyecto de investigación</p></a>
                      <a href={docuanteproyecto}><i><GrDocumentDownload/></i>
                      <p>formato de anteproyecto</p></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12" data-aos="zoom-in" data-aos-delay="200">          
                  <img src={info3} className="img-fluid revistas" alt=""/>
                </div>
              </div>
              <div className="row gy-5">
                <div className="col-lg-12 col-md-12 text-center align-items-center">
                  <h2 className="title-grupos">Nuestros Grupos de investigación</h2>
                </div>
                  {
                    Cardinvestigacion.map((container, index) => {
                      return (
                        <CardInvestigacion
                          key={index}
                          {...container}
                          />
                      )
                    })
                  }
              </div>
              <div className="container" data-aos="fade-up">
                <div className="col-lg-12 col-md-12 text-center align-items-center">
                  <h2 className="title-grupos">Divulgación de la investigación</h2>
                </div>
              </div>
              <div className="container d-flex">
                <div className="col-lg-6 col-sm-12" data-aos="zoom-in" data-aos-delay="200">
                    <h3 className="text-center">Enlace a Stylus</h3>
                    <Link to='/investigacion/stylus' onClick={ScrollToTop} ><img src={revista1} className="img-fluid revistas" alt=""/></Link>
                </div>
                <div className="col-lg-6 col-sm-12" data-aos="zoom-in" data-aos-delay="200">
                  <h3 className="text-center ">Enlace a TECKNE</h3>
                  <Link to='/investigacion/teckne' onClick={ScrollToTop}><img src={revista2} className="img-fluid revistas" alt=""/></Link>
                </div>
              </div>
              <div className="container" data-aos="fade-up">
                <div className="col-lg-12 col-md-12 text-center align-items-center">
                  <h2 className="title-grupos">Nuestros eventos</h2>
                </div>
              </div>
              <div className="container galeria_investigacion">
                <div className="col-xl-12 col-md-12" data-aos="zoom-in" data-aos-delay="200">
                  <Galeria/>  
                </div>
              </div>
            </div>
            <div className=" bg-section pias" >
              <div className="col-lg-12 col-md-12 text-center align-items-center justify-content-center">
                <h2 className="title-pias">Proyectos Integrados de Aula</h2>
                <img src={logopia} alt="logo_pia" className="logo_pias"/>
              </div>
              <div className="container d-flex">
                <div className="col-lg-6 col-sm-12 pias-item" data-aos="zoom-in" data-aos-delay="200">
                  <p className="text-pias">Proyectos de investigación formativa elaborados bajo el Aprendizaje Basado en Proyectos como trabajos educativos prolongados que se realizan a lo largo del semestre, en los cuales se integran conocimientos y conceptos de diferentes asignaturas para su construcción. Estos se socializan y evalúan durante la semana Horizontista.</p>
                </div>
                <div className="col-lg-6 col-sm-12 pias-item" data-aos="zoom-in" data-aos-delay="200">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col" className="text-center">Actividad Desarrollo de PIAs</th>
                        <th scope="col" className="text-center">Fecha Semestre académico</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Sesiones de acompañamiento  </td>
                        <td>30 de octubre – 15 de noviembre de 2023</td>
                      </tr>
                      <tr>
                        <td>Inscripción encuentro (Pre-inscripción)</td>
                        <td>Semana 1 – 10 de noviembre</td>
                      </tr>
                      <tr>
                        <td>Entrega de PIAs seleccionados</td>
                        <td>16 de noviembre de 2023</td>
                      </tr>
                      <tr>
                        <td>Socialización Rúbrica de evaluación</td>
                        <td>14-18 de noviembre de 2023</td>
                      </tr>
                      <tr>
                        <td>Presentación PIAs</td>
                        <td>23, 24, 25 de noviembre de 2023</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className=" container col-lg-12 col-sm-12 align-items-center justify-content-center">
                <div className="pia-descarga ">
                  <div className="pia-descarga-item d-flex justify-content-center ">
                    <a href={documpia}><i><GrDocumentDownload/></i>
                    <p>Archivo pia</p></a>
                    <a href={documpia}><i><GrDocumentDownload/></i>
                    <p>Poster pia</p></a>
                  </div>
                  <div className="pia-descarga-item d-flex justify-content-center">
                    <a href="https://outlook.office365.com/owa/calendar/AsesoraspostersPIAS@unihorizonte.edu.co/bookings/" target="_blank"><i><GiVideoConference/></i>
                    <p>Sesiones de acompañamiento</p></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    )
}

export default Investigación