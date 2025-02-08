import CategoriesSection from '../CategoriesSection/CategoriesSection';
import ProductSearch from '../ProductSearch/ProductSearch';
import './Filters.css';

export default function Filters() {
    return (
        <section className='col-span-3'>
            <h2 className='pb-1 border-b border-stroke text-[1.375rem] font-semibold'>
                Filter Product
            </h2>

            <section className=''>
                <ProductSearch />
                <CategoriesSection />
            </section>
        </section>
    );
}
