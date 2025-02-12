'use client';

import { useState } from 'react';
import { FaMinus, FaPlus, FaRegHeart } from 'react-icons/fa6';
import { MdCompare } from 'react-icons/md';
import { cn } from '@/lib/utils';
import RatingStars from '@/app/components/shared/RatingStars/RatingStars';

export default function Details({ productDetails: details }) {
    const {
        name,
        price,
        rating,
        reviews,
        childCategory = ['gadget', 'electronics', 'smartphone'],
        brand,
        skuCode,
        discount,
        sizes = ['S', 'M', 'L', 'XL'],
    } = details || {};

    const [selectedSizes, setSelectedSizes] = useState('M');
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState('');
    const [isFavorite, setIsFavorite] = useState(false);

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleSizeToggle = (sizeId) => {
        setSelectedSizes((prevSelected) =>
            prevSelected.includes(sizeId)
                ? prevSelected.filter((id) => id !== sizeId)
                : [...prevSelected, sizeId]
        );
    };

    return (
        <div className='max-w-2xl mx-auto'>
            <h1 className='text-2xl font-semibold text-gray-900 mb-2'>
                {name}
            </h1>

            <div className='flex items-center flex-wrap gap-2 text-sm text-gray-500 mb-2'>
                <span className='bg-[#f3f3f3] px-2 py-1 whitespace-nowrap rounded-sm'>
                    Brand: {brand}
                </span>
                <span className='bg-[#f3f3f3] px-2 py-1 whitespace-nowrap rounded-sm'>
                    SKU: {skuCode}
                </span>

                <div className='flex items-center flex-wrap gap-2'>
                    <span className='block text-sm font-medium text-gray-700'>
                        Category:
                    </span>
                    {childCategory?.map((category, index) => (
                        <span
                            key={index}
                            className='bg-[#f3f3f3] px-2 py-1 whitespace-nowrap'
                        >
                            {category}
                        </span>
                    ))}
                </div>
            </div>

            {/* Rating */}
            <div className='flex items-center gap-2 mb-2'>
                <div className='flex'>
                    <RatingStars
                        rating={rating}
                        activeColor='#FF7143'
                        muteColor='#CCCCCC'
                        className='flex'
                    />
                </div>
                <span className='text-gray-500'>({reviews || 22})</span>
            </div>

            {/* Size */}
            <div className='my-4 flex items-center flex-wrap gap-x-2'>
                <label className='block text-sm font-medium text-gray-700'>
                    Size:
                </label>
                <div className='flex gap-2'>
                    {sizes.map((size, index) => (
                        <button
                            key={index}
                            onClick={() => handleSizeToggle(size)}
                            className={`px-3 py-2 text-xs uppercase flex items-center justify-center cursor-pointer rounded-lg hover:scale-110 ${
                                selectedSizes.includes(size)
                                    ? 'bg-primary text-white'
                                    : 'border border-gray-300 text-gray-700'
                            }`}
                            aria-label={`Select ${size} size`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Color */}
            <div className='mb-3 flex items-center gap-x-[10px]'>
                <label className='block text-sm font-medium text-gray-700'>
                    Color:
                </label>
                <select
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className='w-[7.25rem] py-2 px-3 border border-gray-300 text-xs rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent'
                >
                    <option value=''>Select One</option>
                    <option value='black'>Black</option>
                    <option value='blue'>Blue</option>
                    <option value='red'>Red</option>
                </select>
            </div>

            {/* Price, Compare, Wishlist */}
            <div className='mb-4 flex items-center gap-x-1'>
                <p className='text-2xl font-bold text-gray-900 flex items-end gap-3'>
                    <span>
                        $
                        {discount
                            ? (price - discount).toFixed(2)
                            : price.toFixed(2)}
                    </span>
                    <span className='mb-1 text-sm text-gray-400 line-through'>
                        ${price.toFixed(2)}
                    </span>
                </p>

                <button
                    className={cn(
                        'ml-3 p-2 border text-xl rounded-full hover:text-white hover:border-primary hover:bg-primary transition-colors',
                        isFavorite ? 'text-red-500' : 'text-gray-400'
                    )}
                >
                    <MdCompare />
                </button>

                <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={cn(
                        'p-2 border text-xl rounded-full hover:text-white hover:border-primary hover:bg-primary transition-colors',
                        isFavorite ? 'text-red-500' : 'text-gray-400'
                    )}
                    aria-label='Add to favorites'
                >
                    <FaRegHeart />
                </button>
            </div>

            {/* Action Buttons */}
            <div className='flex items-center gap-4 mb-6'>
                <div className='w-28 py-1 border border-gray-300 flex items-center justify-evenly rounded-md'>
                    <button
                        onClick={decreaseQuantity}
                        className='p-2'
                        aria-label='Decrease quantity'
                    >
                        <FaMinus />
                    </button>
                    <span className='min-w-8 text-center'>
                        {quantity}
                    </span>
                    <button
                        onClick={increaseQuantity}
                        className='p-2'
                        aria-label='Increase quantity'
                    >
                        <FaPlus />
                    </button>
                </div>

                <button className='flex-1 bg-primary text-white py-2 px-6 rounded-md hover:bg-[#F4511E] transition-colors'>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
