'use client';

import React, { useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const sizes = [
    { id: 'xs', value: 'xs' },
    { id: 's', value: 's' },
    { id: 'm', value: 'm' },
    { id: 'lg', value: 'lg' },
    { id: 'xl', value: 'xl' },
    { id: 'xxl', value: 'xxl' },
    { id: '3xl', value: '3xl' },
];

export default function SizeSelector() {
    const [selectedSizes, setSelectedSizes] = useState([]);

    const handleSizeToggle = (sizeId) => {
        setSelectedSizes((prevSelected) =>
            prevSelected.includes(sizeId)
                ? prevSelected.filter((id) => id !== sizeId)
                : [...prevSelected, sizeId]
        );
    };

    return (
        <section className='mt-4 flex flex-wrap gap-2'>
            {sizes.map((size) => (
                <button
                    key={size.id}
                    onClick={() => handleSizeToggle(size.id)}
                    className={`size-6 px-5 py-4 uppercase flex items-center justify-center cursor-pointer rounded-lg hover:scale-110 ${
                        selectedSizes.includes(size.id)
                            ? 'bg-primary text-white'
                            : 'bg-gray-200'
                    }`}
                    aria-label={`Select ${size.value} size`}
                >
                    {size.value}
                </button>
            ))}
        </section>
    );
}
