import Pagination from '../components/shared/Pagination/Pagination';
import Filters from '../components/Shop/Filters/Filters';
import ProductsSection from '../components/Shop/ProductsSection/ProductsSection';

export default function page() {
    return (
        <section className='grid grid-cols-12 gap-x-[1.375rem] gap-y-20'>
            <Filters />

            <ProductsSection />

            <section className='col-span-12'>
                <Pagination />
            </section>
        </section>
    );
}
