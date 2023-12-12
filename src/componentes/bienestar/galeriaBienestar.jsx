import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation,  } from 'swiper/modules';
import 'swiper/css/bundle';
import '../bienestar/galeriaBienestar.css';
import imgGalery1 from '../../img/Bienestar/galeri1.jpg';
import imgGalery2 from '../../img/Bienestar/galeri2.jpg';
import imgGalery3 from '../../img/Bienestar/galeri3.jpg';
import imgGalery4 from '../../img/Bienestar/galeri4.jpg';
import imgGalery5 from '../../img/Bienestar/galeri5.jpg';
import imgGalery6 from '../../img/Bienestar/galeri6.jpg';
import imgGalery7 from '../../img/Bienestar/galeri7.jpg';
import imgGalery8 from '../../img/Bienestar/galeri8.jpg';
import imgGalery9 from '../../img/Bienestar/galeri9.jpg';
import {TfiArrowCircleLeft} from "react-icons/tfi";
import {TfiArrowCircleRight} from "react-icons/tfi";


export const Galeria = () => {
    return(
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 1,
                stretch: 50,
                depth: 100,
                modifier: 3,

            }}
            className='swiper_card_investigacion'
            modules={[EffectCoverflow, Pagination, Navigation, ]}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true}}
            pagination={{el: '.swiper-pagination', clickable: true }}
            autoplay={true}
        >
            <SwiperSlide><img src={imgGalery1}/></SwiperSlide>
            <SwiperSlide><img src={imgGalery2}/></SwiperSlide>
            <SwiperSlide><img src={imgGalery3}/></SwiperSlide>
            <SwiperSlide><img src={imgGalery4}/></SwiperSlide>
            <SwiperSlide><img src={imgGalery5}/></SwiperSlide>
            <SwiperSlide><img src={imgGalery6}/></SwiperSlide>
            <SwiperSlide><img src={imgGalery7}/></SwiperSlide>
            <SwiperSlide><img src={imgGalery8}/></SwiperSlide>
            <SwiperSlide><img src={imgGalery9}/></SwiperSlide>

            <div className="slider-controler">
                <div className='swiper-button-prev slider-arrow'>
                    <TfiArrowCircleLeft/>   
                </div>
                <div className='swiper-button-next slider-arrow'>
                    <TfiArrowCircleRight/>
                </div>       
                <div className="swiper-pagination"></div>
            </div>
        </Swiper>
    )
}