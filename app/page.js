import Banner from './components/Home/Banner/Banner';
import Categories from './components/Home/Categories/Categories';
import Coupons from './components/Home/Coupons/Coupons';
import FlashSale from './components/Home/FlashSale/FlashSale';

export default function Main() {
    return (
        <main className='bg-white font-inter'>
            <Banner />

            <Categories />

            <Coupons />

            <FlashSale />
        </main>
    );
}
