import Banner from '@/app/components/Blogs/Blog/Banner';
import Description from '@/app/components/Blogs/Blog/Description';

export default async function page() {
    return (
        <section className='col-span-8'>
            <Banner />

            <Description />
        </section>
    );
}
