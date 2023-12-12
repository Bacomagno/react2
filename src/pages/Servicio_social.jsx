import React from "react";
import '../css/servicioSocial.css';
import bannerServSocial from '../../src/img/ServicioSocial/bannerServicioSocial.png';
import imagenSerSocial1 from '../../src/img/ServicioSocial/imagen1_ServicioSocial.png';
import imagenSerSocial2 from '../../src/img/ServicioSocial/imagen2_ServicioSocial.png';
import reglamentoPracticas from '../../src/documentos/Servicio Social/P-05-Politicas-Proyeccion-Social web V2 2023.pdf';
import informeFinalServicioComunitario from '../../src/documentos/Servicio Social/F-19 FORMATO DE INFORME FINALSERVICIO SOCIAL.docx';
import registroHorasServicio from '../../src/documentos/Servicio Social/F-020-RHSS REGISTRO DE HORAS SERVICIO SOCIAL.pdf';
import evaluacionServicioSocial from '../../src/documentos/Servicio Social/F-021-ESS EVALUACION DE SERVICIO SOCIAL.pdf';
import informeFinalServicioFunciones from '../../src/documentos/Servicio Social/F-022 FORMATO DE INFORME FINALSERVICIO SOCIAL FUNCIONES SUSTANTIVAS.docx';
import exencionServicioSocial from '../../src/documentos/Servicio Social/F-035 FORMATO DE EXENCION SERVICIO SOCIAL POR CONVENIO.pdf';
import {GrDocumentDownload} from "react-icons/gr/index";


const Practicas = () => {
    return(
        <>

        <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage:`url(${bannerServSocial})`}}>
            <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
            </div>
        </div>

        <section id="investigacion" className="investigacion" >
            <div className="container" data-aos="fade-up">
                <div className="col-lg-12 col-md-12 text-center">
                    <h2>Servicio social</h2>
                    <p>
                      Son los proyectos que se asumen y lideran de manera institucional y que se desarrollan buscando favorecer una obra social específica. 
                      El trabajo de la comunidad universitaria es de Voluntariado y no necesariamente relacionado con la formación académica que poseen y 
                      tienen como población objetivo, comunidades que requieren de los servicios, competencias y conocimientos de los profesionales en 
                      formación, con privilegio de aquellas denominadas poblaciones en condición de vulnerabilidad y en las cuales se pueda potencializar 
                      la acción social como apoyo al logro de una mejor calidad de vida y el desarrollo social de las mismas. 
                    </p>
                    <h2>Reglamento</h2>
                    <div className="align-items-center d-flex justify-content-center">
                        <a href={reglamentoPracticas} className="d-flex align-item-center">
                            <i><GrDocumentDownload/></i>
                            <p className="ml-2" style={{marginLeft:5}} >Reglamento para realizar servicio social</p>
                        </a>
                    </div>
                </div>
                <div className="col-lg-10 col-md-10 text-center mx-auto">
                    <h2>Requisitos</h2>
                    <table>
                      <tbody>
                        <tr><th>Definición Servicio Social</th>
                          <td>
                            Se relaciona con Proyectos que se asumen y lideran de manera institucional, y que se desarrollan 
                            buscando favorecer una obra social específica. El trabajo de la Comunidad Universitaria es de 
                            Voluntariado y no necesariamente relacionado con la formación académica que tienen como población 
                            objetivo comunidades que requieren de los servicios, competencias y conocimientos de los profesionales 
                            en formación, con privilegio de aquellas identificadas como poblaciones en condición de vulnerabilidad, 
                            y en las cuales se logre potencializar la acción social como apoyo al beneficio de una mejor calidad 
                            de vida y el desarrollo social de las mismas 
                          </td>
                        </tr>
                        <tr><th rowSpan={3}>Requisitos </th>
                        <td>
                          El Estudiante debe estar matriculado en el momento de iniciar el Servicio Social y haber realizado la inscripción previamente. 
                        </td>
                        </tr>
                        <tr>
                          <td>
                            Las horas de Servicio Social son de carácter obligatorio y hace parte de los requisitos de grado.  
                          </td>
                        </tr>
                        <tr>
                          <td>
                            El Estudiante no debe encontrarse sancionado disciplinariamente o con suspensión alguna durante el semestre que adelantará su servicio social. 
                          </td>
                        </tr>
                        <tr><th>Duración</th>
                          <td>
                            Se distribuyen de la siguiente manera para toda la población estudiantil: 
                            <br></br>
                          <table className="tableInt mx-auto">
                          <tr>
                            <th className="tableThInt">Programa académico – presencial o virtual </th>
                            <th className="">Horas para realizar </th>
                          </tr>
                          <tr>
                            <td>Técnico Profesional y Tecnológico</td>
                            <td>100 horas</td>
                          </tr>
                          <tr>
                            <td>Profesional Universitario</td>
                            <td>150 horas </td>
                          </tr>
                          </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                </div>

                <div className="col-lg-12 col-md-12 text-center">
                  <h2>Opciones de realización del servicio social</h2>
                  <div id="servicioSocial" className="col-lg-12 col-md-12 text-center">
                    <div className="servicioSocial d-flex align-items-center" style={{backgroundImage:`url(${imagenSerSocial1})`}}></div>
                  </div>   
                </div>            
            </div>  
            <div className="col-lg-10 col-md-10 col-sm-12 text-center mx-auto">
              <h2>Modalidades</h2>
                <table class="col-lg-6 col-md-8 mx-auto">
                    <thead>
                        <tr>
                          <th className="text-center colIzq">Modalidad</th>
                          <th className="text-center">Definición P-05</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="colIzq"><strong>Red de divulgadores</strong></td>
                        <td>
                          El estudiante adquiere competencias que le posibilitan el desenvolvimiento eficiente ante todo tipo de público 
                          y presenta ante diferentes comunidades la experiencia de la Educación 
                        </td>
                      </tr>
                      <tr>
                        <td className="colIzq"><strong>Apoyo al patrocinador</strong></td>
                        <td>
                          El estudiante asume la posibilidad de retribuir el auxilio académico que le fue otorgado, 
                          desarrollando funciones que contribuyan a la mejora misional de la organización 
                        </td>
                      </tr>
                      <tr>
                        <td className="colIzq"><strong>Tutorías o Monitorias</strong></td>
                        <td>
                          El estudiante de último año realizará actividades de apoyo y complemento disciplinar a 
                          estudiantes que se encuentren en los dos primeros años de su formación, bajo la dirección de un Docente titular. 
                        </td>
                      </tr>
                      <tr>
                        <td className="colIzq"><strong>Talleres y capacitaciones</strong></td>
                        <td>
                          Los estudiantes que demuestren experiencia específica de más de 10 años, previa aprobación escrita del Director de Carrera, 
                          estarán en condiciones de desarrollar talleres y capacitaciones a los estudiantes de la Institución. 
                        </td>
                      </tr>
                      <tr>
                        <td className="colIzq"><strong>Apoyo a mi Institución</strong></td>
                        <td>
                          El estudiante podrá apoyar los procesos que contribuyan a la Misión de la Institución en cualquiera de sus 
                          áreas estratégicas como Docencia, Investigación o Proyección Social. 
                        </td>
                      </tr>
                      <tr>
                        <td className="colIzq"><strong>Apoyo Comunitario</strong></td>
                        <td>
                          El estudiante podrá realizar su voluntariado con las instituciones, sin ánimo de lucro, en convenio, 
                          con la institución o con otras entidades, organizaciones u ONG con las que el estudiante establezca relación.
                        </td>
                      </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-lg-10 col-md-10 text-center mx-auto">
              <h2>Cómo aplicar</h2>
              <ul className="ulAplicar col-lg-8 col-md-10 mx-auto">
                <h5>1.	Decidir realizar el Servicio Social.</h5>
                <h5>2.	Verificar los requisitos. </h5>
                <h5>3.	Identificar la Modalidad de Interés.</h5>
                <h5>4.	Registrarse y seleccionar la Modalidad. <a href="https://forms.office.com/r/HwniQkaWfp" target="_blank">aqui</a></h5>
                <h5>5.	Asistir a la Reunión de Inducción.</h5>
                <h5>6.	Estar atento a los comunicados que se enviarán a correos institucionales.</h5>
                <h5>7.	Ponerse en contacto con el docente designado del programa.</h5>
              </ul>
            </div>
            <div className="col-lg-10 col-md-10 text-center mx-auto">
              <h2>Ruta de seguimiento</h2>
              <p>
                Desde la Dirección de Sector Externo se te dará las indicaciones de los formatos que deben diligenciarse, 
                el entregable final y la periodicidad de estos. Los documentos son los siguientes:
              </p>
              <div id="servicioSocial" className="col-lg-12 col-md-12 text-center">
                <div className="practicasImg2 d-flex align-items-center" style={{backgroundImage:`url(${imagenSerSocial2})`}}></div>
              </div> 
            </div>
            <div className="col-lg-10 col-md-12 text-center mx-auto">
                <h2>Documentos para proceso de servicio social</h2>
            </div>  
            <div className="col-lg-8 col-md-6 col-ms-10 mx-auto align-items-center d-flex justify-content-center">
                <a href={informeFinalServicioComunitario} className="d-flex align-item-center">
                    <i><GrDocumentDownload/></i>
                    <p className="ml-2" style={{marginLeft:5, marginRight:15 }} >F-019 Formato Informe Final Servicio Social Comunitario</p>
                </a>
                <a href={registroHorasServicio} className="d-flex align-item-center">
                    <i><GrDocumentDownload/></i>
                    <p className="ml-2" style={{marginLeft:5, marginRight:15 }} >F-020 Formato de Registro de Horas de Servicio Social (Bitácora)</p>
                </a>
                <a href={evaluacionServicioSocial} className="d-flex align-item-center">
                    <i><GrDocumentDownload/></i>
                    <p className="ml-2" style={{marginLeft:5, marginRight:15 }} >F-021 Evaluación del Servicio Social</p>
                </a>
                <a href={informeFinalServicioFunciones} className="d-flex align-item-center">
                    <i><GrDocumentDownload/></i>
                    <p className="ml-2" style={{marginLeft:5, marginRight:15 }} >F-022 Formato Informe Final Servicio Social Funciones Sustantivas</p>
                </a>
                <a href={exencionServicioSocial} className="d-flex align-item-center">
                    <i><GrDocumentDownload/></i>
                    <p className="ml-2" style={{marginLeft:5, marginRight:15 }} >F-035 Exención Servicio Social por Convenio</p>
                </a>
            </div>
            <div className="col-lg-10 col-md-10 text-center mx-auto">
              <h2>Contáctanos</h2>
              <div className="contactanos col-lg-5 col-md-8 text-align-left mx-auto">
                <h3><i class="bi bi-envelope-at"></i> proyeccionsocial@unihorizonte.edu.co</h3>
                <h4><i class="bi bi-telephone"></i> (57) (601) 7437270 Ext. 140</h4>
                <h4><i class="bi bi-whatsapp"></i> (57) 318 225 8276</h4>
              </div>
            </div>
        </section>
        </>
    )
}

export default Practicas