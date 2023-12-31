import React from "react";
import'../revistas.css';
import {Tab, Row, Col, Nav} from 'react-bootstrap';
import {RevistasCard} from '../RevistasCard';
import vol1 from '../../../../img/investigacion/revista_teckne/vol1.jpg';
import vol2 from '../../../../img/investigacion/revista_teckne/vol2.jpg';
import vol3 from '../../../../img/investigacion/revista_teckne/vol3.JPG';
import vol4 from '../../../../img/investigacion/revista_teckne/vol4.JPG';
import vol9 from '../../../../img/investigacion/revista_teckne/vol9uno.JPG';
import vol9dos from '../../../../img/investigacion/revista_teckne/vol9dos.JPG';
import vol10 from '../../../../img/investigacion/revista_teckne/vol10.JPG';
import vol10dos from '../../../../img/investigacion/revista_teckne/vol10dos.JPG';
import vol11 from '../../../../img/investigacion/revista_teckne/vol11.JPG';
import vol11dos from '../../../../img/investigacion/revista_teckne/vol11dos.JPG';
import vol12 from '../../../../img/investigacion/revista_teckne/vol12.JPG';
import vol12dos from '../../../../img/investigacion/revista_teckne/vol12dos.JPG';
import vol13 from '../../../../img/investigacion/revista_teckne/vol13.JPG';
import vol13dos from '../../../../img/investigacion/revista_teckne/vol13dos.JPG';
import vol14 from '../../../../img/investigacion/revista_teckne/vol14.JPG';
import vol14dos from '../../../../img/investigacion/revista_teckne/vol14dos.JPG';
import vol15 from '../../../../img/investigacion/revista_teckne/vol15.JPG';
import vol15dos from '../../../../img/investigacion/revista_teckne/vol15dos.JPG';
import vol16 from '../../../../img/investigacion/revista_teckne/vol16.JPG';
import vol16dos from '../../../../img/investigacion/revista_teckne/vol16dos.JPG';
import vol17 from '../../../../img/investigacion/revista_teckne/vol17.JPG';
import pdf1 from '../../../../documentos/investigacion/revistas_teckne/revista_teckne1.pdf';
import pdf2 from '../../../../documentos/investigacion/revistas_teckne/revista_teckne2.pdf';
import pdf3 from '../../../../documentos/investigacion/revistas_teckne/revista_teckne3.pdf';
import pdf4 from '../../../../documentos/investigacion/revistas_teckne/revista_teckne4.pdf';
import pdf9 from '../../../../documentos/investigacion/revistas_teckne/revista_teckne9_1.pdf';
import pdf9dos from '../../../../documentos/investigacion/revistas_teckne/revista_teckne9_2.pdf';
import pdf10 from '../../../../documentos/investigacion/revistas_teckne/revista_teckne10_1.pdf';
import pdf10dos from '../../../../documentos/investigacion/revistas_teckne/revista_teckne10_2.pdf';
import pdf11 from '../../../../documentos/investigacion/revistas_teckne/revista_teckne11_1.pdf';
import pdf11dos from '../../../../documentos/investigacion/revistas_teckne/revista_teckne11_2.pdf';
import pdf12 from '../../../../documentos/investigacion/revistas_teckne/revista_teckne12_1.pdf';
import pdf12dos from '../../../../documentos/investigacion/revistas_teckne/revista_teckne12_2.pdf';
import pdf13 from '../../../../documentos/investigacion/revistas_teckne/revista_teckne13_1.pdf';
import pdf13dos from '../../../../documentos/investigacion/revistas_teckne/revista_teckne13_2.pdf';
import pdf14 from '../../../../documentos/investigacion/revistas_teckne/revista_teckne14_1.pdf';
import pdf14dos from '../../../../documentos/investigacion/revistas_teckne/revista_teckne14_2.pdf';
import pdf15 from '../../../../documentos/investigacion/revistas_teckne/revista_teckne15_1.pdf';
import pdf15dos from '../../../../documentos/investigacion/revistas_teckne/revista_teckne15_2.pdf';
import pdf16 from '../../../../documentos/investigacion/revistas_teckne/revista_teckne16_1.pdf';
import pdf16dos from '../../../../documentos/investigacion/revistas_teckne/revista_teckne16_2.pdf';
import pdf17 from '../../../../documentos/investigacion/revistas_teckne/revista_teckne17_1.pdf';



const Teckne = () =>{

    const volumen1 = [
        {
          title: "Revista Teckne Volumen 1",
          imgContinua: vol1,
          pdf: pdf1,
        },
    ]

    const volumen2 = [
      {
        title: "Revista Teckne Volumen 2",
        imgContinua: vol2,
        pdf:pdf2,
      },
    ]

    const volumen3 = [
      {
        title: "Revista Teckne Volumen 3",
        imgContinua: vol3,
        pdf:pdf3,
      },
    ]

    const volumen4 = [
      {
        title: "Revista Teckne Volumen 4",
        imgContinua: vol4,
        pdf:pdf4,
      },
    ]

    const volumen9 = [
      {
        title: "Revista Teckne Volumen 9 No1",
        imgContinua: vol9,
        pdf:pdf9,
      },
      {
        title: "Revista Teckne Volumen 9 No2",
        imgContinua: vol9dos,
        pdf:pdf9dos,
      },
    ]

    const volumen10 = [
      {
        title: "Revista Teckne Volumen 10 No1",
        imgContinua: vol10,
        pdf:pdf10,
      },
      {
        title: "Revista Teckne Volumen 10 No2",
        imgContinua: vol10dos,
        pdf:pdf10dos,
      },
    ]

    const volumen11 = [
      {
        title: "Revista Teckne Volumen 11 No1 ",
        imgContinua: vol11,
        pdf:pdf11,
      },
      {
        title: "Revista Teckne Volumen 11 No2 ",
        imgContinua: vol11dos,
        pdf:pdf11dos,
      },
    ]

    const volumen12 = [
      {
        title: "Revista Teckne Volumen 12 No1",
        imgContinua: vol12,
        pdf:pdf12,
      },
      {
        title: "Revista Teckne Volumen 12 No2",
        imgContinua: vol12dos,
        pdf:pdf12dos,
      },
    ]

    const volumen13 = [
      {
        title: "Revista Teckne Volumen 13 No1",
        imgContinua: vol13,
        pdf:pdf13,
      },
      {
        title: "Revista Teckne Volumen 13 No2",
        imgContinua: vol13dos,
        pdf:pdf13dos,
      },
    ]

    const volumen14 = [
      {
        title: "Revista Teckne Volumen 14 No1",
        imgContinua: vol14,
        pdf:pdf14,
      },
      {
        title: "Revista Teckne Volumen 14 No2",
        imgContinua: vol14dos,
        pdf:pdf14dos,
      },
    ]

    const volumen15 = [
      {
        title: "Revista Teckne Volumen 15 No1",
        imgContinua: vol15,
        pdf:pdf15,
      },
      {
        title: "Revista Teckne Volumen 15 No2",
        imgContinua: vol15dos,
        pdf:pdf15dos,
      },
    ]

    const volumen16 = [
      {
        title: "Revista Teckne Volumen 16 No1",
        imgContinua: vol16,
        pdf:pdf16,
      },
      {
        title: "Revista Teckne Volumen 16 No2",
        imgContinua: vol16dos,
        pdf:pdf16dos,
      },
    ]

    const volumen17 = [
      {
        title: "Revista Teckne Volumen 17",
        imgContinua: vol17,
        pdf:pdf17,
      },
    ] 
    return(
        <>
        <section id="revistas" className="revistas">
          <div className="container" data-aos="fade-up">
            <div className="row position-relative">
              <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
                <h2>Revistas Teckne</h2>
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
                                <Nav.Link eventKey="second">Vol. 2</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="thirt">Vol. 3</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="fourth">Vol. 4</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="nineth">Vol. 9</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="tenth">Vol. 10</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="eleventh">Vol. 11</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="twelveth">Vol. 12</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="thirteenth">Vol. 13</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="fourteenth">Vol. 14</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="fifteenth">Vol. 15</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="sixteenth">Vol. 16</Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="seventeenth">Vol. 17</Nav.Link>
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
                                <div className="row gy-5" >
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
                                <div className="row gy-5" >
                                  {
                                      volumen3.map((div, index) => {
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
                              <Tab.Pane eventKey="fourth">
                                <div className="row gy-5" >
                                  {
                                    volumen4.map((div, index) => {
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
                              <Tab.Pane eventKey="nineth">
                                <div className="row gy-5" >
                                  {
                                      volumen9.map((div, index) => {
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
                              <Tab.Pane eventKey="tenth">
                                <div className="row gy-5" >
                                  {
                                      volumen10.map((div, index) => {
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
                              <Tab.Pane eventKey="eleventh">
                                <div className="row gy-5" >
                                  {
                                      volumen11.map((div, index) => {
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
                              <Tab.Pane eventKey="twelveth">
                                <div className="row gy-5" >
                                  {
                                    volumen12.map((div, index) => {
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
                              <Tab.Pane eventKey="thirteenth">
                                <div className="row gy-5" >
                                  {
                                    volumen13.map((div, index) => {
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
                              <Tab.Pane eventKey="fourteenth">
                                <div className="row gy-5" >
                                  {
                                    volumen14.map((div, index) => {
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
                              <Tab.Pane eventKey="fifteenth">
                                <div className="row gy-5" >
                                  {
                                    volumen15.map((div, index) => {
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
                              <Tab.Pane eventKey="sixteenth">
                                <div className="row gy-5" >
                                  {
                                    volumen16.map((div, index) => {
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
                              <Tab.Pane eventKey="seventeenth">
                                <div className="row gy-5" >
                                  {
                                    volumen17.map((div, index) => {
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

export default Teckne