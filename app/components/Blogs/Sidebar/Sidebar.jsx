import Categories from './Categories';
import Input from './Input';
import PopularBlogs from './PopularBlogs/PopularBlogs';

export default function Sidebar() {
    return (
        <section className='col-span-4'>
            {/* Search Bar */}
            <Input />

            {/* Categories Section */}
            <Categories />

            {/* Popular Blogs Section */}
            <PopularBlogs />
        </section>
    );
}
