'use client';

import Slider from 'react-slick';
import Product from '../../shared/Product/Product';

export default function Products() {
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2600,
        accessibility: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        touchMove: true,
        arrows: false,
    };
    const product = {
        name: 'Apple Watch Series 6',
        rating: 4.5,
        price: 399.99,
        totalRatings: 1000,
        badge: '17%',
        img: '/product-2.png',
    };

    return (
        <section className='w-full h-[23.75rem] mt-[2.125rem] '>
            <Slider className='new' {...settings}>
                {Array.from({ length: 4 }).map((_, index) => (
                    <Product key={index} product={product} />
                ))}
            </Slider>
        </section>
    );
}
