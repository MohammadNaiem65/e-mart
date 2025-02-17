import Blogs from '../components/Blogs/Blogs/Blogs';
import Sidebar from '../components/Blogs/Sidebar/Sidebar';
import RouteBreadcrumb from './RouteBreadcrumb';

export default function page({ params }) {
    return (
        <section className='mt-[2.375rem] grid grid-cols-12 gap-x-5 gap-y-4'>
            <RouteBreadcrumb />

            <Blogs />

            <Sidebar />
        </section>
    );
}
