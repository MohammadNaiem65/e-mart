import Product from '@/app/components/shared/Product/Product';

export default function Products() {
    const product = {
        name: 'Apple Watch Series 6',
        rating: 4.5,
        price: 399.99,
        totalRatings: 1000,
        badge: '20%',
        img: '/product.png',
    };

    return (
        <section className='grid grid-cols-3 gap-4 mt-8'>
            {Array.from({ length: 15 }).map((_, index) => (
                <Product key={index} product={product} />
            ))}
        </section>
    );
}
