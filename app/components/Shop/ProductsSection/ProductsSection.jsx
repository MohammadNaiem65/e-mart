import PageFilters from './PageFilters/PageFilters';
import Products from './Products/Products';

export default function ProductsSection() {
    return (
        <section className='col-span-9'>
            <section className='pb-1 border-b border-stroke flex justify-between items-center'>
                <h2 className='text-[1.375rem] font-semibold'>All Products</h2>

                <PageFilters />
            </section>

            <Products />
        </section>
    );
}
