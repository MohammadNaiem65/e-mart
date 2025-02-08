import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import CategoryProductSection from '../shared/CategoryProductSection/CategoryProductSection';

export default function SecondCategoryProducts() {
    const products = [
        {
            name: 'Apple Watch Series 6',
            rating: 4.5,
            price: 399.99,
            totalRatings: 1000,
            badge: '20%',
            img: '/product.png',
        },
        {
            name: 'Apple Watch Series 6',
            rating: 4.5,
            price: 399.99,
            totalRatings: 1000,
            badge: '20%',
            img: '/product.png',
        },
        {
            name: 'Apple Watch Series 6',
            rating: 4.5,
            price: 399.99,
            totalRatings: 1000,
            badge: '20%',
            img: '/product.png',
        },
        {
            name: 'Apple Watch Series 6',
            rating: 4.5,
            price: 399.99,
            totalRatings: 1000,
            badge: '20%',
            img: '/product.png',
        },
        {
            name: 'Apple Watch Series 6',
            rating: 4.5,
            price: 399.99,
            totalRatings: 1000,
            badge: '20%',
            img: '/product.png',
        },
        {
            name: 'Apple Watch Series 6',
            rating: 4.5,
            price: 399.99,
            totalRatings: 1000,
            badge: '20%',
            img: '/product.png',
        },
        {
            name: 'Apple Watch Series 6',
            rating: 4.5,
            price: 399.99,
            totalRatings: 1000,
            badge: '20%',
            img: '/product.png',
        },
        {
            name: 'Apple Watch Series 6',
            rating: 4.5,
            price: 399.99,
            totalRatings: 1000,
            badge: '20%',
            img: '/product.png',
        },
    ];
    const image = '/category/category-image-2.jpg';

    return (
        <section className='mt-[6.125rem]'>
            <CategoryProductSection
                image={image}
                products={products}
                imagePosition='end'
            />

            <div className='w-[57rem] mt-3 flex justify-end'>
                <Link
                    href={'#'}
                    className='text-base flex items-center gap-x-3 duration-300 hover:text-highlight'
                >
                    See More
                    <FaArrowRightLong />
                </Link>
            </div>
        </section>
    );
}
