import PageFilters from './PageFilters/PageFilters';

export default function Products() {
    return (
        <section className='col-span-9'>
            <section className='pb-1 border-b border-stroke flex justify-between items-center'>
                <h2 className='text-[1.375rem] font-semibold'>
                    All Products
                </h2>

                <PageFilters />
            </section>
        </section>
    );
}
