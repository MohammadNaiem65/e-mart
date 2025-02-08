'use client';

import Slider from 'react-slick';
import './GiftCards.css';

export default function GiftCards({ giftCards }) {
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        accessibility: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        touchMove: true,
    };

    return (
        <div className={`gift-cards-container max-h-[12.75rem] col-span-8`}>
            <Slider className='gap-x-[0.875rem]' {...settings}>
                {giftCards.map((card, index) => (
                    <img key={index} src={card.img} alt='Gift Card' />
                ))}
            </Slider>
        </div>
    );
}
