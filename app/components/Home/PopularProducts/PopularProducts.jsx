import Products from './Products';

export default function PopularProducts() {
    return (
        <section className='mt-20'>
            <h2 className='mb-[2.188rem] border-b border-stroke text-2xl/[3.9rem] font-bold'>
                Popular Products
            </h2>

            <Products />
        </section>
    );
}
