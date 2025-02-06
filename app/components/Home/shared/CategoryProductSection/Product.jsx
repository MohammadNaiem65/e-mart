import { FaRegHeart } from 'react-icons/fa6';
import RatingStars from '@/app/components/shared/RatingStars/RatingStars';

/**
 * Renders a product card with image, name, price, rating, and an optional badge.
 *
 * @param {Object} product - The product data to display.
 * @param {string} product.name - The name of the product.
 * @param {string} product.img - The URL of the product image.
 * @param {number} product.price - The price of the product.
 * @param {number} product.rating - The average rating of the product.
 * @param {number} product.totalRatings - The total number of ratings for the product.
 * @param {string} [product.badge] - An optional badge text to display on the product card.
 * @param {string} [product.badgeColor] - An optional color for the badge background.
 * @returns {JSX.Element} A JSX element representing a product card.
 */

export default function Product({ product }) {
    const { name, img, price, rating, totalRatings, badge, badgeColor } =
        product || {};

    return (
        <div className='h-[18.125rem] border border-stroke relative col-span-1 row-span-1 rounded-lg'>
            {badge && (
                <span
                    className={`absolute top-5 left-5 text-white text-[10px]/[0.938rem] font-semibold px-3 py-1 rounded-full ${
                        badgeColor ? `bg-[${badgeColor}]` : 'bg-[#2BA968]'
                    }`}
                >
                    Sale
                </span>
            )}

            <img
                src={img}
                alt='product image'
                className='w-full h-[12.125rem] border-b border-stroke'
            />

            <div className='px-[0.625rem] py-3'>
                <div className='flex items-center justify-between'>
                    <h3 className='text-sm max-w-[10.3rem] truncate'>{name}</h3>

                    <button className='size-7 bg-[#F9F9F9] text-sm flex justify-center items-center rounded-full cursor-pointer'>
                        <FaRegHeart />
                    </button>
                </div>

                <div className='flex items-center gap-x-[4px]'>
                    <RatingStars
                        length={5}
                        rating={rating}
                        height='.9rem'
                        width='.9rem'
                        activeColor='#FF9500'
                        muteColor='#cccccc'
                        className='flex items-center'
                    />
                    <span className='text-[.7rem] text-gray-500 ml-1'>
                        ({totalRatings})
                    </span>
                </div>

                <div className='mt-2 flex items-center justify-start gap-x-3'>
                    <p className='text-[#4880FF] text-sm/3 font-bold'>
                        ${price}
                    </p>
                    <p className='text-[#CCCCCC] text-[0.7rem]/3 font-semibold line-through'>
                        ${price}
                    </p>
                </div>
            </div>
        </div>
    );
}
