import Banner from './components/Home/Banner/Banner';
import Categories from './components/Home/Categories/Categories';
import Coupons from './components/Home/Coupons/Coupons';
import FirstCategoryProducts from './components/Home/FirstCategoryProducts/FirstCategoryProducts';
import FlashSale from './components/Home/FlashSale/FlashSale';
import SecondBanner from './components/Home/SecondBanner/SecondBanner';
import ThirdBanner from './components/Home/ThirdBanner/ThirdBanner';
import SecondCategoryProducts from './components/Home/SecondCategoryProducts/SecondCategoryProducts';
import FourthBanner from './components/Home/FourthBanner/FourthBanner';
import ThirdCategoryProducts from './components/Home/ThirdCategoryProducts/ThirdCategoryProducts';
import FifthBanner from './components/Home/FifthBanner/FifthBanner';
import FourthCategoryProducts from './components/Home/FourthCategoryProducts/FourthCategoryProducts';
import TopBrands from './components/Home/TopBrands/TopBrands';
import PopularProducts from './components/Home/PopularProducts/PopularProducts';
import Newsletter from './components/Home/Newsletter/Newsletter';

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

            <SecondCategoryProducts />

            <FourthBanner />

            <ThirdCategoryProducts />

            <FifthBanner />

            <FourthCategoryProducts />

            <TopBrands />

            <PopularProducts />

            <Newsletter />
        </main>
    );
}
