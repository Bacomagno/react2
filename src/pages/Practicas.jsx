import React from "react";
import '../css/investigacion.css';
import banner from '../../src/img/practicas/bannerPracticas.png';
import practicas1 from '../../src/img/practicas/practicas1.png';
import practicas2 from '../../src/img/practicas/practicas2.png';
import practicas3 from '../../src/img/practicas/practicas3.png';
import reglamentoPracticas from '../../src/documentos/Practicas/R-07-REGLAMENTO-DE-PRACTICAS-INSTITUCIONALES-R-VACIUNIHORIZONTE.pdf';
import evaluacionCondiciones from '../../src/documentos/Practicas/M-GPS-F-023 FORMATO EVALUACION DE LAS CONDICIONES DE PRACTICA_V4.docx';
import seguimientoPlan from '../../src/documentos/Practicas/M-GPS-F-024 SEGUIMIENTO PLAN DE TRABAJO_V4.docx';
import evaluacionPracticas from '../../src/documentos/Practicas/M-GPS-F-025 EVALUACION DE LA PRACTICA_V5.xlsx';
import actaSeguimiento from '../../src/documentos/Practicas/M-GPS-F-030 ACTA DE SEGUIMIENTO DE PRACTICA_V3.docx';
import informeFinalMejoramiento from '../../src/documentos/Practicas/M-GPS-F-032 INFORME FINAL PLAN DE MEJORAMIENTO PRACTICA_V1.docx';
import {GrDocumentDownload} from "react-icons/gr/index";
import '../css/practicas.css';
import { Link } from "react-router-dom";

const Practicas = () => {
    return(
        <>

        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${banner})`}}>
            <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
            </div>
        </div>

        <section id="investigacion" className="investigacion" >
            <div className="container" data-aos="fade-up">
                <div className="col-lg-12 col-md-12 text-center">
                    <h2 className="h1">Prácticas</h2>
                    <p className="descripcion text-justify">
                    La Fundación Universitaria Horizonte, concibe la Práctica a nivel institucional como una actividad de 
                    carácter académico que asume el estudiante en su proceso de formación. Es un proceso académico, formativo, 
                    complementario y sistemático de carácter obligatorio, que permite el afianzamiento de las competencias 
                    adquiridas por los estudiantes es su proceso de formación.
                    </p>
                    <h2>Reglamento</h2>
                    <div className="align-items-center d-flex justify-content-center">
                        <a href={reglamentoPracticas} className="d-flex align-item-center">
                            <i><GrDocumentDownload/></i>
                            <p className="ml-2" style={{marginLeft:5}} >Politica para realizar practicas</p>
                        </a>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 text-center">
                    <h2>Requisitos</h2>
                    <table className="tabla col-lg-10 col-md-12 mx-auto" border={5}>
                        <tr><th>Definición</th>
                          <td>
                            La práctica se define como una actividad de carácter académico que asume el estudiante en su proceso de formación y es obligatoria.
                          </td>
                        </tr>
                        <tr><th ROWSPAN="3">Requisitos</th>
                          <td>
                            El Estudiante debe estar matriculado en el momento de iniciar la práctica y 
                            haber realizado la inscripción su práctica previamente.
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>1. Nivel Técnico profesional:</strong>  El estudiante debe haber cursado y aprobado el 60% del total de los créditos académicos 
                            del programa (a partir del 3er semestre)<br></br>
                            <strong>2. Nivel Profesional:</strong> El estudiante debe haber cursado y aprobado el 75% del total de los créditos académicos del programa 
                            (a partir del 7° semestre)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            El Estudiante no debe encontrarse sancionado disciplinariamente o con suspensión alguna durante el semestre que 
                            adelantará la práctica Institucional.
                          </td>
                        </tr>
                        <tr><th>Duración</th>
                          <td>
                            Todas las modalidades de práctica deben cumplir con 460 horas.
                          </td>
                        </tr>
                    </table>
                </div>

                <div className="col-lg-12 col-md-12 text-center">
                    <h2>Modalidades</h2>
                    <p className="descripcion text-justify">
                      En la Fundación Universitaria Horizonte, el estudiante matriculado en la Institución y en desarrollo de la Práctica 
                      Institucional cuenta con la posibilidad de escoger entre las siguientes alternativas: 
                    </p>
                </div>
                <div id="practicas" className="col-lg-12 col-md-12 text-center">
                    <div className="practicas d-flex align-items-center" style={{backgroundImage:`url(${practicas1})`}}></div>
                    <div className="practicas d-flex align-items-center" style={{backgroundImage:`url(${practicas2})`}}></div>
                </div>        
            </div>  
            <div className="col-lg-9 col-sm-12 pias-item mx-auto" data-aos="zoom-in" data-aos-delay="200">
                <table className="tabla col-lg-10 col-md-12 mx-auto">
                    <thead>
                        <tr>
                          <th scope="col" className="text-center">Nombre Modalidad</th>
                          <th scope="col" className="text-center">Definición (R-07)</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th colSpan={2}>I. Práctica Empresarial</th>
                      </tr>
                      <tr>
                        <td>Contrato de Aprendizaje</td>
                        <td>
                          Es una forma especial dentro del Derecho Laboral, mediante la cual una persona natural desarrolla 
                          formación teórica práctica en una entidad autorizada, a cambio de que una empresa patrocinadora
                          proporcione los medios para adquirir formación profesional metódica y completa requerida en el oficio, 
                          actividad u ocupación.
                        </td>
                      </tr>
                      <tr>
                        <th colSpan={2}>II. Práctica Académica Aplicada</th>
                      </tr>
                      <tr>
                        <td>1. Práctica Disciplinar (pasantía)</td>
                        <td>
                          Es la oportunidad que tiene el estudiante para realizar actividades de su área de formación específica en el sector 
                          productivo que le permita ampliar su experiencia profesional. Esta modalidad cumple los mismos requisitos de la práctica empresarial.
                        </td>
                      </tr>
                      <tr>
                        <td>2. Prácticas en Entidades Sociales y Comunitarias</td>
                        <td>
                          Es la experiencia del estudiante en un sector donde desarrolle un proyecto de alto impacto social o comunitario, 
                          en pro del mejoramiento de las condiciones de vida de los grupos humanos. Este proyecto ha de estar orientado y 
                          sustentado en las competencias y conocimientos adquiridos en su proceso de formación.
                        </td>
                      </tr>
                      <tr>
                        <td>3. Práctica emprendedora</td>
                        <td>
                          Es la experiencia en la que el estudiante durante el transcurso de su proceso académico constituye 
                          una empresa o establecimiento de comercio afín a su formación.
                        </td>
                      </tr>
                      <tr>
                        <td>4. Práctica por investigación </td>
                        <td>
                          Es la experiencia realizada por el estudiante a través de la presentación de un ejercicio de 
                          investigación aplicada desde su experticia y saber disciplinar, dando respuesta a una necesidad 
                          del sector productivo, Se desarrolla en el marco de los lineamientos definidos desde la Coordinación 
                          de Investigación, que es quien analizará junto con el director del respectivo programa su pertinencia 
                          y dará el aval correspondiente.
                        </td>
                      </tr>
                      <tr>
                        <td>5. Práctica por Validación Experiencia Profesional</td>
                        <td>
                          El estudiante que acredite durante el último año y como mínimo seis (6) mes de vinculación 
                          a una actividad laboral relacionada con su área específica de formación, podría solicitar la validación de esta
                        </td>
                      </tr>
                      <tr>
                        <td>6. Prácticas Estudiantes de Derecho</td>
                        <td>
                          Son consideradas como un método de enseñanza personalizado en el desempeño que realiza el estudiante 
                          en la Entidad y donde el funcionario superior lo orienta y entrega labores a realizar de índole 
                          jurídico en las diferentes áreas.
                        </td>
                      </tr>
                    </tbody>
                    <span><strong>Fuente: R-7 Reglamento de Práctica Capítulo III. 2019</strong></span>
                </table>
            </div>

            <div className="col-lg-10 col-md-12 text-center mx-auto">
                <h2>Cómo aplicar</h2>
                <div className="listaPracticas col-lg-8 mx-auto">
                  <ul>
                    <h5>1.	Decidir realizar la Práctica. </h5>
                    <h5>2.	Verificar los requisitos. </h5>
                    <h5>3.	Identificar la Modalidad de Interés.</h5>
                    <h5>4.	Registrarse y seleccionar la Modalidad. <a href="https://forms.office.com/r/6Uiu2L5ZTA" target="_blank">aqui</a></h5>
                    <h5>5.	Asistir a la Reunión de Inducción.</h5>
                    <h5>6.	Estar atento a los comunicados que se enviarán a correos institucionales.</h5>
                    <h5>7.	Ponerse en contacto con el docente designado del programa.</h5>
                  </ul>
                </div>
            </div>
            <div className="col-lg-10 col-md-12 text-center mx-auto">
              <h2>Ruta de seguimiento</h2>
              <p>
                El docente te dará las indicaciones de los formatos que deben diligenciarse, el entregable final y la periodicidad de estos. 
                Los documentos son los siguientes:
              </p>
              <div id="practicas" className="col-lg-12 col-md-12 text-center">
                    <div className="practicasImg3 d-flex align-items-center" style={{backgroundImage:`url(${practicas3})`}}></div>
                </div>    
            </div>
            <div className="col-lg-10 col-md-12 text-center mx-auto">
              <h2>Formatos e instructivos</h2>
              <div className="col-lg-10 col-md-6 col-ms-10 mx-auto align-items-center d-flex justify-content-center">
                  <a href={evaluacionCondiciones} className="d-flex align-item-center">
                      <i><GrDocumentDownload/></i>
                      <p className="ml-2" style={{marginLeft:5, marginRight:15 }} >F-023 Formato de Evaluación de las Condiciones de la Práctica</p>
                  </a>
                  <a href={seguimientoPlan} className="d-flex align-item-center">
                      <i><GrDocumentDownload/></i>
                      <p className="ml-2" style={{marginLeft:5, marginRight:15 }} >F-024 Formato de Seguimiento Plan de Trabajo</p>
                  </a>
                  <a href={evaluacionPracticas} className="d-flex align-item-center">
                      <i><GrDocumentDownload/></i>
                      <p className="ml-2" style={{marginLeft:5, marginRight:15 }} >F-025 Formato de Evaluación de Práctica Institucional</p>
                  </a>
                  <a href={actaSeguimiento} className="d-flex align-item-center">
                      <i><GrDocumentDownload/></i>
                      <p className="ml-2" style={{marginLeft:5, marginRight:15 }} >F-030 Formato de Acta de Seguimiento de Práctica</p>
                  </a>
                  <a href={informeFinalMejoramiento} className="d-flex align-item-center">
                      <i><GrDocumentDownload/></i>
                      <p className="ml-2" style={{marginLeft:5, marginRight:15 }} >F-032 Formato Informe Final Plan de Mejoramiento</p>
                  </a>
              </div>
            </div>
            <div className="col-lg-10 col-md-12 text-center mx-auto">
              <h2>Contáctanos</h2>
              <div className="contactanos col-lg-5 col-md-8 text-align-left mx-auto">
                <h3><i class="bi bi-envelope-at"></i> practica@unihorizonte.edu.co</h3>
                <h4><i class="bi bi-telephone"></i> (57) (601) 7437270 Ext. 140</h4>
                <h4><i class="bi bi-whatsapp"></i> (57) 318 225 8276</h4>
              </div>
            </div>

        </section>
        </>
    )
}

export default Practicas