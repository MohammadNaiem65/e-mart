'use client';

import React, { useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const colors = [
    { id: 'yellow', value: '#FFD700', label: 'Yellow' },
    { id: 'orange', value: '#FFA500', label: 'Orange' },
    { id: 'darkOrange', value: '#FF8C00', label: 'Dark Orange' },
    { id: 'blue', value: '#4169E1', label: 'Blue' },
    { id: 'green', value: '#32CD32', label: 'Green' },
    { id: 'pink', value: '#FF69B4', label: 'Pink' },
    { id: 'brown', value: '#A0522D', label: 'Brown' },
    { id: 'purple', value: '#8A2BE2', label: 'Purple' },
    { id: 'red', value: '#FF0000', label: 'Red' },
    { id: 'teal', value: '#008080', label: 'Teal' },
    { id: 'cyan', value: '#00CED1', label: 'Cyan' },
    { id: 'olive', value: '#808000', label: 'Olive' },
    { id: 'darkBrown', value: '#654321', label: 'Dark Brown' },
    { id: 'white', value: '#FFFFFF', label: 'White' },
];

export default function ColorSelector() {
    const [selectedColors, setSelectedColors] = useState([]);

    const handleColorToggle = (colorId) => {
        setSelectedColors((prevSelected) =>
            prevSelected.includes(colorId)
                ? prevSelected.filter((id) => id !== colorId)
                : [...prevSelected, colorId]
        );
    };

    return (
        <section className='mt-4 grid grid-cols-7 gap-2'>
            {colors.map((color) => (
                <button
                    key={color.id}
                    onClick={() => handleColorToggle(color.id)}
                    className='relative size-6 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2'
                    style={{
                        backgroundColor: color.value,
                        border:
                            color.value === '#FFFFFF'
                                ? '2px solid #E5E7EB'
                                : 'none',
                    }}
                    aria-label={`Select ${color.label}`}
                >
                    {selectedColors.includes(color.id) && (
                        <IoMdCheckmark
                            className={`w-5 h-5 ${
                                ['white', 'yellow'].includes(color.id)
                                    ? 'text-gray-800'
                                    : 'text-white'
                            }`}
                        />
                    )}
                </button>
            ))}
        </section>
    );
}
