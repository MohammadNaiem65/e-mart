'use client';

import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './ImageSlider.css';

export default function ImageSlider({ images }) {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    const slider1Setting = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4500,
        accessibility: true,
        swipeToSlide: true,
        focusOnSelect: true,
    };

    const sliderTwoSetting = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        accessibility: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        touchMove: true,
        nextArrow: <IoIosArrowForward />,
        prevArrow: <IoIosArrowBack />,
    };

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    return (
        <section className='slider-container w-1/2'>
            <Slider
                asNavFor={nav2}
                ref={(slider) => (sliderRef1 = slider)}
                {...slider1Setting}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt='product images'
                        className='w-full h-[23.25rem] object-cover rounded-[10px]'
                    />
                ))}
            </Slider>

            <Slider
                className='ml-4 mt-4'
                asNavFor={nav1}
                ref={(slider) => (sliderRef2 = slider)}
                {...sliderTwoSetting}
            >
                {images.map((image, index) => (
                    <div>
                        <img
                            key={index}
                            src={image}
                            alt='product images'
                            className='size-[4.5rem] object-cover rounded-[10px]'
                        />
                    </div>
                ))}
            </Slider>
        </section>
    );
}
