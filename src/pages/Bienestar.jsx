import React from "react";
import bannerbienestar from '../img/Bienestar/bienestar_banner_final.png';
import '../css/bienestar.css';
import desarrollo from '../img/Bienestar/desarrollo.png';
import desarrollo1 from '../img/Bienestar/desarrollo-02.jpg';
import desarrollo2 from '../img/Bienestar/desarrollo-03.png';
import desarrollo3 from '../img/Bienestar/desarrollo-04.png';
import desarrollo5 from '../img/Bienestar/desarrollo-5.png';
import logo1 from '../img/financiamiento/logo_icetex.svg';
import logo2 from '../img/financiamiento/logo_financiar.png';
import logo3 from '../img/financiamiento/logo_coopfuturo.png';
import logo4 from '../img/financiamiento/logo_finicomercio.png';
import {Galeria} from '../componentes/bienestar/galeriaBienestar';

const Bienestar = () => {
    return(
        <>
        <div className="banner d-flex align-items-center">
          <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
              <img src={bannerbienestar}/>
          </div>
        </div>
        <section id="bienestar" className="bienestar">
          <div className="container" data-aos="fade-up">
            <ul className="nav nav-tabs row gy-4 d-flex">
              <li className="nav-item col-6 col-md-3 col-lg-3">
                <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
                <i class="bi bi-segmented-nav"></i>
                  <h4>Desarrollo Humano</h4>
                </a>
              </li>

              <li className="nav-item col-6 col-md-3 col-lg-3">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                <i class="bi bi-palette"></i>
                  <h4>Cultura</h4>
                </a>
              </li>

              <li className="nav-item col-6 col-md-3 col-lg-3">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                <i class="bi bi-scooter"></i>
                  <h4>Deportes</h4>
                </a>
              </li>

              <li className="nav-item col-6 col-md-3 col-lg-3">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                <i class="bi bi-bandaid"></i>
                  <h4>Promoción y prevención</h4>
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <div className="row gy-4">
                  <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                    <h3>Desarrollo humano</h3>
                    <p>
                      Promovemos el desarrollo de tus potencialidades personales y grupales a través de:
                    </p>
                    <ul>
                      <li><i class="bi bi-check-all"></i>Talleres Libres de formación</li>
                      <li><i class="bi bi-check-all"></i>Jornadas de Orientación a la Vida Universitaria</li>
                      <li><i class="bi bi-check-all"></i>Representantes Estudiantiles</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="100">
                    <img src={desarrollo} alt="" className="img-fluid"/>
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="tab-2">
                <div className="row gy-4">
                  <div className="col-lg-6 order-2 order-lg-1">
                    <h3>Cultura</h3>
                    <p>
                    Incentivamos el fomento de actividades artísticas paralelas a tu formación disciplinar mediante el arte y la cultura
                    </p>
                    
                    <h3>¡Muévete con la UH!</h3>

                    <ul>
                      <li><i class="bi bi-check-all"></i>Clases de Danza en diferentes géneros</li>
                    </ul>

                    <h3>¡Exprésate con la UH!</h3>
                    <ul>
                    <li><i class="bi bi-check-all"></i>Fortalecimiento de la Expresión corporal a través del Teatro y las Artes Escénicas</li>
                    <li><i class="bi bi-check-all"></i>Grupos Formativos en Danza y Teatro</li>
                    <li><i class="bi bi-check-all"></i>Grupos Representativos en Danza y Teatro</li>
                    </ul>

                    <h3>Tómate un Art´Break!</h3>

                    <ul>
                    <li><i class="bi bi-check-all"></i>Espacios de integración</li>
                    <li><i class="bi bi-check-all"></i>Celebración y Conmemoración de Fechas Especiales</li>
                    <li><i class="bi bi-check-all"></i>Actividades Artísticas</li>
                    </ul>

                    <h4><i class="bi bi-envelope-at"></i> Cultura@unihorizonte.edu.co</h4>

                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img src={desarrollo2} alt="" className="img-fluid"/>
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="tab-3">
                <div className="row gy-4">
                  <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                    <h3>Deportes y Recreación</h3>
                    <p>
                      Cuentas con diversas alternativas para que aproveches el tiempo libre en prácticas y actividades recreo-deportivas
                    </p>
                    <h3>¡Actívate en la UH!</h3>
                    <ul>
                      <li><i class="bi bi-check-all"></i>Jornadas Recreativas</li>
                      <li><i class="bi bi-check-all"></i>Actividades de Integración</li>
                      <li><i class="bi bi-check-all"></i>Grupo Gamers</li>
                    </ul>

                    <h3>¡Diviertéte en la UH!</h3>

                    <ul>
                      <li><i class="bi bi-check-all"></i>Grupos Formativos Deportivos (Futsal femenino, Futsal masculino, Voleibol)</li>
                      <li><i class="bi bi-check-all"></i>Grupos Representativos Deportivos (Futsal, Tenis de Mesa)</li>
                      <li><i class="bi bi-check-all"></i>Práctica Libre deportiva.</li>
                      <li><i class="bi bi-check-all"></i>Acondicionamiento Físico.</li>
                      <li><i class="bi bi-check-all"></i>Rutinas Fitness.</li>
                    </ul>

                    <h4><i class="bi bi-envelope-at"></i> Deportes@unihorizonte.edu.co</h4>

                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="100">
                    <img src={desarrollo1} alt="" className="img-fluid"/>
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="tab-4">
                <div className="row gy-4">
                  <div className="col-lg-6 order-2 order-lg-1">
                    <h3>Promoción y Prevención</h3>
                    <p>
                    Cuidamos de ti, promovemos estilos de vida saludable a través de:
                    </p>

                    <h3>Cuidado de la mente y el cuerpo</h3>
                    
                    <ul>
                    <li><i class="bi bi-check-all"></i>Seguimientos personalizados a tu estado de salud</li>
                    <li><i class="bi bi-check-all"></i>Talleres de Promoción y Prevención</li>
                    <li><i class="bi bi-check-all"></i>Semana de la Salud Mental</li>
                    <li><i class="bi bi-check-all"></i>Jornadas de Sensibilización frente al Autocuidado</li>
                    <li><i class="bi bi-check-all"></i>Pausas activas</li>
                    </ul>

                    <h3>Salud Sexual y Reproductiva</h3>
                    
                    <ul>
                    <li><i class="bi bi-check-all"></i>Jornadas de Sensibilización</li>
                    <li><i class="bi bi-check-all"></i>Campañas pedagógicas</li>
                    <li><i class="bi bi-check-all"></i>Talleres y Charlas</li>
                    </ul>

                    <h3>Prevención del consumo de sustancias psicoactivas</h3>
                    
                    <ul>
                    <li><i class="bi bi-check-all"></i>Jornadas de Sensibilización</li>
                    <li><i class="bi bi-check-all"></i>Campañas pedagógicas</li>
                    <li><i class="bi bi-check-all"></i>Talleres y Charlas</li>
                    </ul>

                    <h3>Conciencia Ambiental</h3>
                    
                    <ul>
                      <li><i class="bi bi-check-all"></i>Transformando el Planeta</li>
                    </ul>

                    <h4><i class="bi bi-envelope-at"></i> enfermeria@unihorizonte.edu.co</h4>

                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img src={desarrollo3} alt="" className="img-fluid"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="permanencia" className="permanencia">
          <div className="container" data-aos="fade-up">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
              <h2>Permanencia</h2>
              <p className="permanencia_principal">
                <strong>!Parce¡</strong>  A través de Nuestro Programa de Intervención Integral para la Permanencia Estudiantil <strong>PARCE</strong>   acompañamos tu proceso de formación desde:
              </p>
            </div>
            <div className="row gy-12">
              <div className="col-lg-4 d-flex flex-column">
                <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
                  {/* <i className="bi bi-file-earmark flex-shrink-0"></i> */}
                  <div className="tab-pane">
                    <h4>Gestión Académica</h4>
                    <div>
                      <img className="imgDes5" src={desarrollo5}></img>
                    </div>
                    <ul>
                      <li><i class="bi bi-check-all"></i><strong>Actividades académicas</strong></li>
                    </ul>
                    <ul>
                    <li><i class="bi bi-check-all"></i><strong>Acompañamiento y Asesoría Académica</strong></li>
                    </ul>
                    <ul>
                    <li><i class="bi bi-check-all"></i><strong>Directorio de Monitores</strong></li>
                    </ul>                
                    <ul>
                    <li><i class="bi bi-check-all"></i><strong>Caracterización</strong></li>
                    <p>Conocerte es importante para acompañarte en tu proceso académico, ingresa a nuestra plataforma académica y actualiza tus datos </p>
                    <a className="permanencia-btn" href="https://FUH.q10.com/" target="_blank">Actualízate</a>
                    </ul>
                  </div>
                </div>
                </div>
                <div className="col-lg-4 d-flex flex-column ">
                  <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                    {/* <i className="bi bi-pencil flex-shrink-0"></i> */}
                    <div>
                      <h4>Gestión Psicosocial</h4>
                      <ul>
                        <li><i class="bi bi-check-all"></i>Sesiones de apoyo individual</li>
                        <li><i class="bi bi-check-all"></i>Sesiones de apoyo colectivas</li>
                        <li><i class="bi bi-check-all"></i>Tips para sentirse mejor</li>
                      </ul>
                      <ul>
                      <li><strong>¡Aquí te escuchamos!</strong></li>
                      <a className="permanencia-btn">Agenda tu cita</a>
                      </ul>          
                    </div>
                  </div>              
                </div>
              <div className="col-lg-4 d-flex flex-column">            
                <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
                  {/* <i className="bi bi-file-earmark flex-shrink-0"></i> */}
                  <div>
                    <h4>Gestión Financiera</h4>
                    <p>Conoce nuestras opciones de Financiación:</p>
                    <ul>
                      <li><img src={logo1}/></li>
                      <li><img src={logo2}/></li>
                      <li><img src={logo3}/></li>
                      <li><img src={logo4}/></li>
                    </ul>
                    <p><strong>Solicita tu asesoría en:</strong></p>
                    <p>Asiscontable1@unihorizonte.edu.co
                        <br/>
                      Asiscontable3@unihorizonte.edu.co
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-10 col-md-12 text-center mx-auto">
                <div className="col-lg-12">
                  <h1>Felicidad es</h1>
                  <h3>conoce lo que hicimos este mes</h3>
                </div>
                <div className="container galeria_investigacion">
                    <div className="col-xl-12 col-md-12" data-aos="zoom-in" data-aos-delay="200">
                        <Galeria/>
                    </div>
                </div>
              </div>
              <div className="col-lg-10 col-md-12 text-center mx-auto" data-aos="fade-up" data-aos-delay="100">
                <div className="d-flex justify-content-center">
                    <h2>Contáctanos</h2>
                </div>
                <div className="col-lg-6 mx-auto " style={{textAlign: "left"}}>
                    <ul>
                        <h3><i class="bi bi-envelope-at"></i> bienestar@unihorizonte.edu.co</h3>
                        <h4><i class="bi bi-telephone"></i> (57) (601) 7437270 Ext. 162</h4>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default Bienestar