import Banner from './components/Home/Banner/Banner';
import Categories from './components/Home/Categories/Categories';
import Coupons from './components/Home/Coupons/Coupons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Main() {
    return (
        <main className='bg-white font-inter'>
            <Banner />

            <Categories />

            <Coupons />
        </main>
    );
}
