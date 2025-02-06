import Banner from './components/Home/Banner/Banner';
import Categories from './components/Home/Categories/Categories';
import Coupons from './components/Home/Coupons/Coupons';
import FirstCategoryProducts from './components/Home/FirstCategoryProducts/FirstCategoryProducts';
import FlashSale from './components/Home/FlashSale/FlashSale';
import SecondBanner from './components/Home/SecondBanner/SecondBanner';
import ThirdBanner from './components/Home/ThirdBanner/ThirdBanner';

export default function Main() {
    return (
        <main className='bg-white font-inter'>
            <Banner />

            <Categories />

            <Coupons />

            <FlashSale />

            <SecondBanner />

            <FirstCategoryProducts />

            <ThirdBanner />
        </main>
    );
}
