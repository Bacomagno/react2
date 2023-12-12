import React from "react";
import'../revistas.css';
import {Tab, Row, Col, Nav} from 'react-bootstrap';
import {RevistasCard} from '../RevistasCard';
import vol1 from '../../../../img/investigacion/revista_stylus/vol1.png';
import vol2 from '../../../../img/investigacion/revista_stylus/vol2.png';
import vol3 from '../../../../img/investigacion/revista_stylus/vol3.png';
import pdfvol1 from '../../../../documentos/investigacion/revista_stylus/revista_stylus1.pdf';
import pdfvol2 from '../../../../documentos/investigacion/revista_stylus/revista_stylus2.pdf';
import pdfvol3 from '../../../../documentos/investigacion/revista_stylus/revista_stylus3.pdf';


const Stylus = () =>{

    const volumen1 = [
        {
          title: "Revista Stylus Volumen No1",  
          imgContinua: vol1,
          pdf: pdfvol1,
        },
    ] 
    const volumen2 = [
      {
        title: "Revista Stylus Volumen No2",
        imgContinua: vol2,
        pdf: pdfvol2,
      },
    ]
    const volumen3 = [
      {
        title: "Revista Stylus Volumen No3",
        imgContinua: vol3,
        pdf: pdfvol3,
      },
    ] 

    return(
        <>      
        <section id="revistas" className="revistas">
          <div className="container" data-aos="fade-up">
            <div className="row position-relative">
              <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
                <h2>Revistas Stylus</h2>
              </div>
              <div className=" ">
                <div className="col-lg-12 col-xs-6 content d-flex flex-column order-last order-md-first">
                  <div className="revistas_items">
                    <Tab.Container 
                    id="left-tabs-example" 
                    defaultActiveKey="first">
                      <Row>
                        <Col sm={3}>
                          <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                              <Nav.Link eventKey="first"> Vol. 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second"> Vol. 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey={"thirt"}> Vol. 3</Nav.Link> 
                            </Nav.Item>
                          </Nav>
                        </Col>
                        <Col sm={9}>
                          <Tab.Content>
                            <Tab.Pane eventKey="first">
                              <div className="row gy-5 " >                    
                              {
                                    volumen1.map((div, index) => {
                                    return (
                                        <RevistasCard
                                         key={index}
                                         {...div}
                                        />
                                     )
                                   })
                                  }                   
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              <div className="row gy-5 " >                    
                                {
                                  volumen2.map((div, index) => {
                                  return (
                                      <RevistasCard
                                       key={index}
                                       {...div}
                                      />
                                   )
                                  })
                                }                   
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="thirt">
                              <div className="row gy-5">
                                {
                                  volumen3.map((div, index) =>{
                                    return(
                                      <RevistasCard
                                      key={index}
                                      {...div}
                                      />
                                    )
                                  })
                                }
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                      </Row>
                    </Tab.Container>
                  </div>            
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
};

export default Stylus