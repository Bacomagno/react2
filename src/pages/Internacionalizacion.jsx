import React from "react";
import '../css/internacionalizacion.css';
import bannerInter from '../../src/img/Internacionalizacion/bannerInter.jpg';
import imgInter1 from '../../src/img/Internacionalizacion/imagenInter1.png';
import imgInter2 from '../../src/img/Internacionalizacion/imagenInter2.png';
import imgInter3 from '../../src/img/Internacionalizacion/imagenInter3.jpg';
import imgInter4 from '../../src/img/Internacionalizacion/imagenInter4.jpg';
import imgInter5 from '../../src/img/Internacionalizacion/imagenInter5.png';
import politicaInternacionalizacion from '../../src/documentos/Internacionalizacion/P-05-Politicas-Proyeccion-Social web V2 2023.pdf';
import {GrDocumentDownload} from "react-icons/gr/index";


const Egresados = () => {
    return(
        <>

        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannerInter})`}}>
            <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
            </div>
        </div>

        <section id="investigacion" className="investigacion" >
            <div className="container" data-aos="fade-up">
                <div className="col-lg-12 col-md-12 text-center">
                    <h2>Internacionalización</h2>
                    <p>
                        De acuerdo con las disposiciones y reglamentaciones dictadas por el Ministerio de Educación Nacional en dónde 
                        plantea que las IES necesitan de sus pares para reconocerse en el nuevo entorno global y entender al mundo, 
                        FUNDACIÓN UNIVERSITARIA HORIZONTE ha definido su plan de trabajo y lineamientos desde la visión de la Cooperación 
                        Interinstitucional y la generación de lazos con otras Instituciones y Organizaciones de otras partes del mundo que 
                        faciliten la generación de alianzas para el desarrollo, La Internacionalización en casa y la Movilidad docente y estudiantil.
                    </p>
                    <h2>Reglamento</h2>
                    <div className="align-items-center d-flex justify-content-center">
                        <a href={politicaInternacionalizacion} className="d-flex align-item-center">
                            <i><GrDocumentDownload/></i>
                            <p className="ml-2" style={{marginLeft:5}} >P-05-Politicas-Proyeccion-Social web V2 2023</p>
                        </a>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 text-center">
                    <h2>Líneas de acción</h2>
                    <div className="internacImg1 d-flex align-items-center" style={{backgroundImage:`url(${imgInter1})`}}></div>
                </div>

                <div className="col-lg-12 col-md-12 text-center mx-auto">
                    <h2>Plan de acción</h2>
                    <div className="internacImg2 d-flex align-items-center" style={{backgroundImage:`url(${imgInter2})`}}></div>
                </div>
                <div className="col-lg-10 col-md-10 text-center mx-auto">
                    <h2>Convenios</h2>
                    <p>
                        Se refiere al establecimiento de vínculos con entes del orden local, nacional e internacional para la realización 
                        de convenios y alianzas estratégicas en aspectos relacionados con la Misión y Visión tanto de proyección social como de la Institución. 
                    </p>
                    <p>
                        El propósito de estos convenios y alianzas es el de fortalecer el posicionamiento de la Institución y su razón de ser, 
                        en el contexto universitario logrando una transferencia de la tecnología y/o de los recursos que existen en el entorno, 
                        y que pueden ser canalizados en una perspectiva de doble vía, es decir, desde y hacia la Institución o la comunidad.
                    </p>
                </div>
                <div className="rowInternac col-lg-6 col-md-8 mx-auto">
                    <div className="column">

                    <div className="internacImg3 d-flex align-items-center" style={{backgroundImage:`url(${imgInter3})`}}></div>
                    </div>
                    <div className="column">

                    <div className="internacImg4 d-flex align-items-center" style={{backgroundImage:`url(${imgInter4})`}}></div>
                    </div>
                </div>
                    <div className="col-lg-4 col-md-6 mx-auto">

                    <div className="internacImg5 d-flex align-items-center" style={{backgroundImage:`url(${imgInter5})`}}></div>
                    </div>
                <div className="col-lg-10 col-md-10 text-center mx-auto">
                <h2>Contáctanos</h2>
                <div className="contactanos col-lg-6 col-md-8 text-align-left mx-auto">
                    <h3><i class="bi bi-envelope-at"></i> sectorexterno@unihorizonte.edu.co </h3>
                    <h4><i class="bi bi-telephone"></i> (57) (601) 7437270 Ext. 140</h4>
                    <h4><i class="bi bi-whatsapp"></i> (57) 318 225 8276</h4>
                </div>
                </div>
            </div>  
        </section>
        </>
    )
}

export default Egresados