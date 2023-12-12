import React from "react";
import { Link } from "react-router-dom";
import '../css/biblioteca.css';
import banner from '../img/biblioteca/bannerBiblioteca.jpg';
import ebsco from '../img/biblioteca/ebsco.jpg';
import logoEbsco from '../img/biblioteca/EBSCO_logo.png';
import logoBanrepcultural from '../img/biblioteca/banrepcultural.png'
import revista from '../img/biblioteca/revista.jpg';
import DB from '../img/biblioteca/big-data.png';
import scielo from '../img/biblioteca/logo_scielo.jpg';
import bvs from '../img/biblioteca/bvs.png';
import plos from '../img/biblioteca/Logo_Plos.png';
import redalyc from '../img/biblioteca/redalyc.png';
import doaj from '../img/biblioteca/doaj.png';
import dialnet from '../img/biblioteca/dialnet.png';
import imprentaNacional from '../img/biblioteca/imprenta_nacional.png';
import boletin from '../img/biblioteca/boletin.png';
import boletin1 from '../img/biblioteca/Catalogo-boletin1.jpg';
import boletin2 from '../img/biblioteca/Catalogo-boletin2.jpg';
import boletin3 from '../img/biblioteca/Catalogo-boletin3.jpg';
import boletin4 from '../img/biblioteca/Catalogo-boletin4.jpg';
import boletin5 from '../documentos/biblioteca/Catalogo-boletin5.pdf';
import boletin6 from '../documentos/biblioteca/Catalogo-boletin6.pdf';

const Biblioteca = () => {

    return (
        <>
            <div className="bannerBiblioteca d-flex align-items-center" style={{backgroundImage: `url(${banner})`}}>
                <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade"></div>
            </div>
            <section id="biblioteca" className="col-lg-10 align-item-center mx-auto">
                <div className="inicioBiblioteca container text-center" data-aos="fade-up">
                    <h1>Biblioteca Fernando Tamayo Tamayo</h1>
                    <div className="">
                        <p>Horarios</p>
                        <p><strong>Lunes a viernes</strong> 1:00 pm a 9:00 pm</p>
                        <p><strong>Sábados</strong> 9:00 am a 6:00 pm</p>
                    </div>
                </div>
                <div className="boletinesBiblioteca">
                    <div>
                        <h1 className="text-center">Boletines informativos</h1>
                    </div>
                    <div className="row rowBanrepCultural">
                        <div className="col-lg-4 text-align-center">
                            <Link to={boletin1} target="_blank">
                                <div className="ebscoLogo" style={{backgroundImage: `url(${boletin})`}}></div>
                                <button className="btn btn-primary">Boletín informativo #1</button>
                            </Link>
                        </div>
                        <div className="col-lg-4 text-align-center">
                            <Link to={boletin2} target="_blank">
                                <div className="ebscoLogo" style={{backgroundImage: `url(${boletin})`}}></div>
                                <button className="btn btn-primary">Boletín informativo #2</button>
                            </Link>
                        </div>
                        <div className="col-lg-4 text-align-center">
                            <Link to={boletin3} target="_blank">
                                <div className="ebscoLogo" style={{backgroundImage: `url(${boletin})`}}></div>
                                <button className="btn btn-primary">Boletín informativo #3</button>
                            </Link>
                        </div>
                    </div>
                    <div className="row rowBanrepCultural">
                        <div className="col-lg-4 text-align-center">
                            <Link to={boletin4} target="_blank">
                                <div className="ebscoLogo" style={{backgroundImage: `url(${boletin})`}}></div>
                                <button className="btn btn-primary">Boletín informativo #4</button>
                            </Link>
                        </div>
                        <div className="col-lg-4 text-align-center">
                            <Link to={boletin5} target="_blank">
                                <div className="ebscoLogo" style={{backgroundImage: `url(${boletin})`}}></div>
                                <button className="btn btn-primary">Boletín informativo #5</button>
                            </Link>
                        </div>
                        <div className="col-lg-4 text-align-center">
                            <Link to={boletin6} target="_blank">
                                <div className="ebscoLogo" style={{backgroundImage: `url(${boletin})`}}></div>
                                <button className="btn btn-primary">Boletín informativo #6</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="coleccionesBiblioteca col-lg-10 align-item-center mx-auto">
                    <h1 className="text-center">Colecciones</h1>
                    <p>La Biblioteca cuenta con una colección conformada por libros, revistas, 
                        trabajos de grado, folletos, mapas y videos. Además de suscripciones al Diario El Tiempo y Portafolio.
                    </p>
                    <p><strong>Colección General: </strong> 
                        Material bibliográfico que incluye monografías, tratados, informes de investigaciones, libros de texto, ensayos, 
                        memorias de congresos, entre otros. Su consulta puede ser en sala o en préstamo externo hasta por 6 días no hábiles.
                    </p>
                    <p>
                        <strong>Colección de Reserva: </strong> 
                        Material bibliográfico de alta demanda y circulación. El préstamo externo se realiza solo por 24 horas; 
                        en algunos casos solo se permite la consulta en sala.
                    </p>
                    <p>
                        <strong>Hemeroteca: </strong> 
                        Colección de publicaciones periódicas (Revistas o Diarios), solo para préstamo en sala.
                    </p>
                    <p>
                        <strong>Colección de Referencia: </strong> 
                        Este material sirve para obtener información de manera inmediata, o remite a otras obras para conocer o ampliar un tema. 
                        Diccionarios, enciclopedias, manuales, directorios, bibliografías, entre otros, hacen parte de esta colección, solo para consulta en sala.
                    </p>
                    <p>
                        <strong>Colección Tesis y Trabajos de Grado: </strong> 
                        Material bibliográfico presentado por los estudiantes de la Universidad como requisito para obtener titulación en 
                        programas de pregrado y posgrado, el préstamo es exclusivamente para consulta en sala, solo se permite el préstamo 
                        externo con autorización del respectivo director de programa.
                    </p>
                </div>
                <div className="coleccionesEbsco col-lg-10 mx-auto">
                    <div className="row">
                        <div className="col-lg-6 ">
                            <div className="ebsco d-flex align-item-center" style={{backgroundImage: `url(${ebsco})`}}>
                                <div className="container position-relative d-flex flex-column align-item-center"></div>
                            </div>
                        </div>
                        <div className="col-lg-6 colEbsco2">
                            <h5 style={{color: "orange"}}>Disfruta de todas las bases de datos virtuales que tenemos para ti</h5>
                            <p>
                                Es una base de datos que ofrece textos completos, índices y publicaciones periódicas académicas 
                                cubriendo diferentes áreas de las ciencias y humanidades con la ayuda de herramientas de búsqueda y 
                                recuperación de información. Los resultados de estas búsquedas ofrecen enlaces a los textos completos 
                                de los artículos. Es accesible en línea a través de Internet.
                            </p>
                            <p>
                                EBSCO enlaza más de 150 bases de datos, bibliográficas, de referencia. 
                                Procesa miles de títulos de revistas y periódicos y tiene convenio con más de 60.000 casas editoras de todo el mundo.
                            </p>
                            <span>Ingresa con tú número de documento</span>
                            <Link to="https://search.ebscohost.com/" target="_blank">
                                <div className="ebscoLogo mx-auto" style={{backgroundImage: `url(${logoEbsco})`}}></div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="bibliotecaBanco col-lg-10 text-align-center mx-auto">
                    <h1>Red de Biblioteca Banco de la Republica</h1>
                    <div className="row">
                        <Link to="https://www.banrepcultural.org/multimedia/asi-puedes-acceder-al-catalogo-en-linea-de-la-red-de-bibliotecas-del-banco-de-la-0" target="_blank">
                            <div className="ebscoLogo mx-auto" style={{backgroundImage: `url(${logoBanrepcultural})`}}></div>
                        </Link>
                    </div>
                    <div className="row rowBanrepCultural">
                        <div className="col-lg-6 text-align-center">
                            <Link to="https://publicaciones.banrepcultural.org/" target="_blank">
                                <div className="ebscoLogo" style={{backgroundImage: `url(${revista})`}}></div>
                                <h4>Revistas</h4>
                            </Link>
                        </div>
                        <div className="col-lg-6 text-align-center">
                            <Link to="https://www.banrepcultural.org/biblioteca-virtual/recursos-electronicos" target="_blank">
                                <div className="ebscoLogo" style={{backgroundImage: `url(${DB})`}}></div>
                                <h4>Base de Datos</h4>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="accesoLibre text-center mx-auto">
                    <h1>Bases de datos de acceso libre</h1>
                    <div className="row rowBanrepCultural">
                        <div className="col-lg-3" >
                            <Link to="https://scielo.org/es/" target="_blank">
                                <div className="ebscoLogo" style={{backgroundImage: `url(${scielo})`}}></div>
                            </Link>
                        </div>
                        <div className="col-lg-3">
                            <Link to="https://bvsalud.org/" target="_blank">
                                <div className="ebscoLogo" style={{backgroundImage: `url(${bvs})`}}></div>
                            </Link>
                        </div>
                        <div className="col-lg-3">
                            <Link to="https://plos.org/" target="_blank">
                                <div className="ebscoLogo" style={{backgroundImage: `url(${plos})`}}></div>
                            </Link>
                        </div>
                        <div className="col-lg-3">
                            <Link to="https://www.redalyc.org/" target="_blank">
                                <div className="ebscoLogo" style={{backgroundImage: `url(${redalyc})`}}></div>
                            </Link>
                        </div>
                    </div>
                    <div className="row rowBanrepCultural">
                        <div className="col-lg-3">
                            <Link to="https://www.doaj.org/" target="_blank">
                                <div className="ebscoLogo" style={{backgroundImage: `url(${doaj})`}}></div>
                            </Link>
                        </div>
                        <div className="col-lg-3">
                            <Link to="https://dialnet.unirioja.es/" target="_blank">
                                <div className="ebscoLogo" style={{backgroundImage: `url(${dialnet})`}}></div>
                            </Link>
                        </div>
                        <div className="col-lg-3">
                            <Link to="https://www.imprenta.gov.co/" target="_blank">
                                <div className="ebscoLogo" style={{backgroundImage: `url(${imprentaNacional})`}}></div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="serviciosBiblioteca col-lg-10 text-center mx-auto">
                    <h1>Servicios</h1>
                    <ul>
                        <li><i class="bi bi-check-all"></i>Sala de consulta general y de lectura</li>
                        <li><i class="bi bi-check-all"></i>Hemeroteca</li>
                        <li><i class="bi bi-check-all"></i>Circulación y préstamo</li>
                        <li><i class="bi bi-check-all"></i>Sala para proyección audiovisual</li>
                        <li><i class="bi bi-check-all"></i>Préstamo equipos de computo</li>
                        <li><i class="bi bi-check-all"></i>Catálogo en línea para consulta de material bibliográfico</li>
                        <li><i class="bi bi-check-all"></i>Convenios interbibliotecarios</li>
                        <li><i class="bi bi-check-all"></i>Acceso a Wi-Fi</li>
                    </ul>
                </div>
                <div className="col-lg-10 col-md-12 text-center mx-auto">
                    <h1>Contáctanos</h1>
                    <div className="contactanos col-lg-5 col-md-8 text-align-left mx-auto">
                        <h3><i class="bi bi-envelope-at"></i> biblioteca@unihorizonte.edu.co</h3>
                        <h4><i class="bi bi-telephone"></i> (57) (601) 7437270 Ext. 133</h4>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Biblioteca