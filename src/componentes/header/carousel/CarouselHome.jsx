import React from "react";
import { Link } from "react-router-dom";
import "../carousel/carousel.css";
import Carousel from 'react-bootstrap/Carousel';
import video from "../../../img/hero-carousel/Intro.mp4";
import img2 from '../../../img/hero-carousel/hero-carousel-3.jpg';
import img3 from '../../../img/hero-carousel/hero-carousel-4.jpg';
import img7 from '../../../img/hero-carousel/hero-carousel-7.jpg';
import img8 from '../../../img/hero-carousel/hero-carousel-8.jpg';
import img9 from '../../../img/hero-carousel/hero-carousel-9.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Carouselh = () =>{

  const ScrollToTop = () => {
    window.scrollTo({
      top: (0,0),
      behavior: "smooth",
    });
    return null
  }

  return(
      <Carousel fade>

        <Carousel.Item>
          <video autoPlay muted loop embed-responsive-item="true" controls >
            <source src={video} type="video/mp4" />
          </video>
        </Carousel.Item>

        <Carousel.Item>
          <a> 
            <Link to="/Contactenos" onClick={ScrollToTop}>
              <img src={img7} alt="Banner principal" text="First slide" className="img-fliud" />
            </Link>
          </a>
        </Carousel.Item>          

      <Carousel.Item>
        <a href="https://FUH.q10.com" target="_blank">
          <img src={img2} alt="Banner principal" text="First slide" className="img-fliud" target="_blank" />
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <img src={img3} alt="Banner principal" text="First slide" className="img-fliud" />
      </Carousel.Item>

      <Carousel.Item>
        <a>
          <Link to="/Contactenos" onClick={ScrollToTop}>
            <img src={img8} alt="Banner principal" text="" className="img-fliud" />
          </Link>
        </a>
      </Carousel.Item>

      <Carousel.Item>
        <img src={img9} alt="Banner principal" text="" className="img-fliud" />
      </Carousel.Item>

    </Carousel>
  )
}

export default Carouselh