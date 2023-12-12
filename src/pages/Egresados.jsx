import React from "react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../css/investigacion.css';
import '../css/Egresados.css';
import videoEgresados from '../../src/documentos/Documentos general/Momentos para Recordar Evento de Egresados 20 Octubre de 2023 VFOficial.mp4';
import politicaEgresados from '../../src/documentos/Egresados/P-10-POLITICA-DE-GRADUADOS-R-VACI.pdf';
import mapa1 from '../../src/img/egresados/egresados_mapa1.png';
import mapa2 from '../../src/img/egresados/egresados_mapa2.png';
import {GrDocumentDownload} from "react-icons/gr/index";
import {Galeria} from '../componentes/egresados/galeria';


const Egresados = () => {
    const ScrollToTop = () => {
        window.scrollTo({
          top: (0,0),
          behavior: 'smooth',
        });    
      return null;
    }
    
    const [isMobileNavActive, setIsMobileNavActive] = useState(false);

        useEffect(() => {
        if (isMobileNavActive) {
            document.body.classList.add('mobile-nav-active');
        } else {
            document.body.classList.remove('mobile-nav-active');
        }
        }, [isMobileNavActive]);

    const toggleMobileNav = () => {
      setIsMobileNavActive(!isMobileNavActive);
    };

    const toggleDropdown = (event) => {
      if (isMobileNavActive) {
        event.preventDefault();
        const targetElement = event.target;
        const nextElement = targetElement.nextElementSibling;
        const dropDownIndicator = targetElement.querySelector('.dropdown-indicator');

        if  (targetElement && nextElement && dropDownIndicator) {
          targetElement.classList.toggle('active');
          nextElement.classList.toggle('dropdown-active');
          dropDownIndicator.classList.toggle('bi-chevron-up');
          dropDownIndicator.classList.toggle('bi-chevron-down');
        }
      }
    };

    const handleNavlinkClick = () => {
      if (isMobileNavActive) {
        // Cerrar la navegación móvil cuando se hace clic en un enlace
        closeMobileNav();
      }
    };

    const closeMobileNav = () => {
        setIsMobileNavActive(false);
    };
    return(
        <>
        <div className="d-flex align-items-center" style={{marginTop: 100, marginBottom:50 }} >
            <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
                <video className="video" autoPlay muted loop embed-responsive-item="true" controls>
                    <source src={videoEgresados} type="video/mp4"></source>
                </video>
            </div>
        </div>

        <section id="investigacion" className="investigacion" >
            <div className="container" data-aos="fade-up">
                <div className="col-lg-12 col-md-12 text-center">
                    <h2>Egresados</h2>
                    <p className="descripcion text-justify">
                        La FUNDACIÓN UNIVERSITARIA HORIZONTE, a través de los años ha venido fortaleciendo la relación con sus egresados, 
                        con procesos de seguimiento, de apoyo a la continuidad de su formación profesional y para la vida, de favorecer su encuentro en espacios académicos, 
                        deportivos, culturales y sociales.
                    </p>
                    <h2>Politica</h2>
                    <div className="align-items-center d-flex justify-content-center">
                        <a href={politicaEgresados} className="d-flex align-item-center">
                            <i><GrDocumentDownload/></i>
                            <p className="ml-2" style={{marginLeft:5}} >P-10-POLITICA-DE-GRADUADOS-R-VACI</p>
                        </a>
                    </div>
                    <div className="col-lg-10- col-md-12 text-center mx-auto">
                        <h2>Nuestras metas</h2>
                        <ul>
                            <h5>Realizar Seguimiento a la actividad profesional de los egresados.</h5>
                            <h5>Contribuir al Aprendizaje del egresado a lo largo de la vida.</h5>
                            <h5>Ofrecer Experiencias al  egresado en la dinámica institucional.</h5>
                            <h5>Consolidar Evidencias e indicadores de seguimiento del programa de egresados.</h5>
                        </ul>
                    </div>
                </div>
                <div id="egresados" className="col-lg-12 col-md-12 text-center">
                    <h2>Nuestras lineas de acción</h2>
                    <div className="egresados d-flex align-items-center" style={{backgroundImage:`url(${mapa1})`}}></div>
                    <div className="egresados d-flex align-items-center" style={{backgroundImage:`url(${mapa2})`}}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div>
                        <h2 className="col-lg-12 col-md-12 text-center">Programación de actividades</h2>
                        <div id="egresados">
                            <ul className="col-lg-8 col-md-6 text-left">
                                <h4>
                                    <li onClick={handleNavlinkClick}><i class="bi bi-check2-square"></i><Link to="/educacionContinua" onClick={ScrollToTop}> Educación Continuada</Link></li>
                                    <li onClick={handleNavlinkClick}><i class="bi bi-check2-square"></i><Link to="/posgrados" onClick={ScrollToTop}> Especializaciones</Link></li>
                                    <li onClick={handleNavlinkClick}><i class="bi bi-check2-square"></i><Link to="/Bienestar" onClick={ScrollToTop}> Bienestar</Link></li>
                                    <li><i class="bi bi-check2-square"></i><Link> Coordinación de sociohumanística</Link></li>
                                </h4>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container" data-aos="fade-up">
                    <div className="col-lg-12 col-md-12 text-center align-items-center">
                        <h2 className="title-grupos">Nuestra galeria</h2>
                    </div>
                </div>
                <div className="container galeria_investigacion">
                    <div className="col-xl-12 col-md-12" data-aos="zoom-in" data-aos-delay="200">
                        <Galeria/>
                    </div>
                </div>
                <br></br>
                <div className="egresadosContactCard row gy-2" data-aos="fade-up" data-aos-delay="100">
                    <div className="d-flex justify-content-center">
                        <h2>Contáctanos</h2>
                    </div>
                    <div className="col-lg-6 d-flex">
                        <ul>
                            <h3><i class="bi bi-envelope-at"></i> egresados@unihorizonte.edu.co</h3>
                            <h4><i class="bi bi-telephone"></i> (57) (601) 7437270 Ext. 140</h4>
                            <h4><i class="bi bi-whatsapp"></i>  (57) 318 225 8276</h4>
                        </ul>
                    </div>
                </div>
            </div>  
        </section>
        </>
    )
}

export default Egresados