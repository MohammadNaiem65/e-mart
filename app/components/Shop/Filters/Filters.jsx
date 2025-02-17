import Availability from './Availability/Availability';
import CategoriesSection from './CategoriesSection/CategoriesSection';
import PriceRange from './PriceRange/PriceRange';
import ProductSearch from './ProductSearch/ProductSearch';
import Colors from './Colors/Colors';
import Sizes from './Sizes/Sizes';
import BrandsSection from './BrandsSection/BrandsSection';
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

                <Availability />

                <PriceRange />

                <Colors />

                <Sizes />

                <BrandsSection />
            </section>
        </section>
    );
}
