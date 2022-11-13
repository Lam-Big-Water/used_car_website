import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from 'react-router-dom'
import pic from './banner4.jfif'
import pic2 from './banner2.jfif'
import pic3 from './banner3.jfif'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import './Carousel.css'
export default function Carousel() {
    return (
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
        }}
        >
            <SwiperSlide className='img slide' style={{backgroundImage:`url(${pic2})`}}>
                <div className='content'>
                    <span>We provide top quality vehicles for customers in Hong Kong.</span>
                    <h3>Welcome</h3>
                    <Link to='/stock' className='btn'>discover more</Link>
                </div>
            </SwiperSlide>
            <SwiperSlide className='img slide' style={{backgroundImage:`url(${pic})`}}>
                <div className='content'>
                    <span>People of excellence enable us to take on the challenges of the world's markets and tracks - and win.</span>
                    <h3>We Reward Excellence</h3>
                    <Link to='/stock' className='btn'>discover more</Link>
                </div>
            </SwiperSlide>
            <SwiperSlide className='img slide' style={{backgroundImage:`url(${pic3})`}}>
                <div className='content'>
                    <span>We have a large variety of vehicles available in storage and at the showroom for customers to select.</span>
                    <h3>Cars For Sale</h3>
                    <Link to='/stock' className='btn'>discover more</Link>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};