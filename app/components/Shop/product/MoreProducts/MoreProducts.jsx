import Product from '@/app/components/shared/Product/Product';

export default function MoreProducts() {
    const product = {
        name: 'Apple Watch Series 6',
        rating: 4.5,
        price: 399.99,
        totalRatings: 1000,
        badge: '20%',
        img: '/product.png',
    };

    return (
        <section className='mt-10'>
            <h2 className='mb-[2.188rem] border-b border-stroke text-2xl/[3.9rem] font-bold'>
                More Related Products
            </h2>

            {/* Products */}
            <section className='grid grid-cols-4 gap-6'>
                {Array.from({ length: 12 }).map((_, index) => (
                    <Product key={index} product={product} />
                ))}
            </section>
        </section>
    );
}
