import ProductSearch from '../ProductSearch/ProductSearch';

export default function Filters() {
    return (
        <section className='col-span-3'>
            <h2 className='pb-1 border-b border-stroke text-[1.375rem] font-semibold'>
                Filter Product
            </h2>

            <ProductSearch />
        </section>
    );
}
