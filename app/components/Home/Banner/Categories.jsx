'use client';

import { useState } from 'react';

export default function Categories() {
    const [categories, setCategories] = useState([
        'Fashion and Apparel',
        'Electronics',
        'Home and Garden',
        'Health and Beauty',
        'Toys and Hobbies',
        'Sports and Outdoors',
        'Food and Beverages',
        'Books and Stationery',
        'Others',
    ]);
    const [showAllCategories, setShowAllCategories] = useState(true);

    return (
        <section className='w-[17.75rem] h-[31.688rem] border-[1px] border-stroke rounded-md overflow-hidden'>
            <button className='w-full pl-[1.438rem] pt-4 pr-[1.313rem] pb-[0.875rem] border-b-[1px] border-stroke text-[1.188rem] flex items-center justify-between bg-light'>
                All Categories
                <img
                    src='./icons/arrow_forward.svg'
                    alt='arrow'
                    className='size-5'
                />
            </button>

            {showAllCategories && (
                <ul className={`h-[28.188rem] divide-y-[1px] divide-stroke overflow-y-auto`}>
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            className='pl-[1.438rem] py-[0.625rem] pr-[1.313rem] text-[1.063rem] flex justify-between items-center'
                        >
                            {category}
                            <img
                                src='./icons/arrow_forward.svg'
                                alt='arrow'
                                className='-rotate-90'
                            />
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
