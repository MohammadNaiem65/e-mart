'use client';

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { MdCloudUpload } from 'react-icons/md';

export default function ReviewForm() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <section className='w-full mt-9 p-6 bg-[#F5F5F5] shadow-md rounded-lg'>
            <h2 className='text-2xl text-dark font-semibold mb-4'>
                Add a review
            </h2>

            <div className='mb-6'>
                <label className='block text-gray-700 text-sm font-medium mb-2'>
                    Your rating*
                </label>
                <div className='flex gap-1'>
                    {[...Array(5)].map((_, index) => {
                        const ratingValue = index + 1;

                        return (
                            <FaStar
                                key={index}
                                className={`cursor-pointer text-2xl transition-colors duration-200 ${
                                    ratingValue <= (hover || rating)
                                        ? 'text-yellow-400'
                                        : 'text-gray-300'
                                }`}
                                onClick={() => setRating(ratingValue)}
                                onMouseEnter={() => setHover(ratingValue)}
                                onMouseLeave={() => setHover(0)}
                            />
                        );
                    })}
                </div>
            </div>

            <div className='mb-6'>
                <label className='block text-gray-700 text-sm font-medium mb-2'>
                    Your review*
                </label>
                <textarea
                    className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    rows={4}
                    placeholder='Write your review here...'
                />
            </div>

            <input
                type='file'
                id='avatar'
                name='avatar'
                className='block mb-6'
                accept='image/webp, image/png, image/jpeg'
            />

            <button
                className='px-4 py-2 bg-primary text-white flex items-center gap-x-2 rounded-md hover:bg-primary/80 transition-colors duration-200'
                type='submit'
            >
                <MdCloudUpload className='text-lg' />
                Submit
            </button>
        </section>
    );
}
