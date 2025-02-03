'use client';

import { useState } from 'react';
import Category from './Category';

export default function Categories() {
    const [categories, setCategories] = useState([
        { name: 'Fashion & Apparel' },
        { name: 'Electronics' },
        { name: 'Home & Furniture' },
        { name: 'Beauty & Health' },
        { name: 'Books & Stationery' },
        { name: 'Toys & Games' },
        { name: 'Sports & Outdoors' },
        { name: 'Automotive' },
    ]);

    return (
        <section className='overflow-x-hidden'>
            <div
                style={{
                    '--marquee-gap': '16.5px',
                    '--marquee-duration': '25s',
                }}
                className='w-max mt-20 flex items-center justify-between gap-x-[33px] animate-marquee'
            >
                {[...categories, ...categories]?.map((category, index) => (
                    <Category key={index} category={category} />
                ))}
            </div>
        </section>
    );
}
