import Banner from './components/Home/Banner/Banner';
import Categories from './components/Home/Categories/Categories';

export default function Main() {
    return (
        <main className='bg-white font-inter'>
            <Banner />

            <Categories />
        </main>
    );
}
