'use client';

import React, { useState } from 'react';

export function PriceRangeSlider({ min, max, onChange }) {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const [localMin, setLocalMin] = useState(min);
    const [localMax, setLocalMax] = useState(max);

    const handleMinChange = (e) => {
        const value = e.target.value === '' ? '' : Number(e.target.value);
        setLocalMin(value);
    };

    const handleMaxChange = (e) => {
        const value = e.target.value === '' ? '' : Number(e.target.value);
        setLocalMax(value);
    };

    const handleUpdate = () => {
        const newMin =
            localMin === ''
                ? min
                : Math.max(
                      min,
                      Math.min(Number(localMin), Number(localMax) - 1)
                  );
        const newMax =
            localMax === ''
                ? max
                : Math.min(
                      max,
                      Math.max(Number(localMax), Number(localMin) + 1)
                  );
        setMinVal(newMin);
        setMaxVal(newMax);
        setLocalMin(newMin);
        setLocalMax(newMax);
        onChange?.(newMin, newMax);
    };

    const handleSliderChange = (e, isMin) => {
        const value = Number(e.target.value);
        if (isMin) {
            const newValue = Math.min(value, maxVal - 1);
            setMinVal(newValue);
            setLocalMin(newValue);
        } else {
            const newValue = Math.max(value, minVal + 1);
            setMaxVal(newValue);
            setLocalMax(newValue);
        }
    };

    const minPos = ((minVal - min) / (max - min)) * 100;
    const maxPos = ((maxVal - min) / (max - min)) * 100;

    return (
        <div className='w-full mt-3'>
            <div className='flex gap-4 mb-6'>
                <div className='flex items-center justify-between flex-1'>
                    <label
                        htmlFor='min-price'
                        className='text-[#7f7f7f] text-sm font-normal'
                    >
                        Min.
                    </label>
                    <input
                        type='number'
                        id='min-price'
                        value={localMin}
                        onChange={handleMinChange}
                        placeholder='Min.'
                        className='w-[4.875rem] h-8 text-sm px-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#FF7143] focus:ring-1 focus:ring-[#FF7143]'
                    />
                </div>
                <div className='flex items-center justify-between flex-1'>
                    <label
                        htmlFor='max-price'
                        className='text-[#7f7f7f] text-sm font-normal'
                    >
                        Max.
                    </label>
                    <input
                        type='number'
                        id='max-price'
                        value={localMax}
                        onChange={handleMaxChange}
                        placeholder='Max.'
                        className='w-[4.875rem] h-8 text-sm px-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#FF7143] focus:ring-1 focus:ring-[#FF7143]'
                    />
                </div>
            </div>

            <div className='relative h-2 mb-6'>
                <div className='absolute w-full h-2 bg-gray-200 rounded-full'></div>
                <div
                    className='absolute h-2 bg-[#FF7143] rounded-full'
                    style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
                ></div>

                <input
                    type='range'
                    min={min}
                    max={max}
                    value={minVal}
                    onChange={(e) => handleSliderChange(e, true)}
                    className='absolute w-full h-2 appearance-none pointer-events-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#FF7143] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md'
                />

                <input
                    type='range'
                    min={min}
                    max={max}
                    value={maxVal}
                    onChange={(e) => handleSliderChange(e, false)}
                    className='absolute w-full h-2 appearance-none pointer-events-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#FF7143] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md'
                />
            </div>

            <button
                onClick={handleUpdate}
                className='w-full py-2 text-[#FF7143] border border-[#FF7143] rounded-lg hover:bg-[#FF7143] hover:text-white transition-colors duration-200'
            >
                Update
            </button>
        </div>
    );
}
