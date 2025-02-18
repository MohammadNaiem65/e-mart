import Sidebar from '../components/Blogs/Sidebar/Sidebar';
import RouteBreadcrumb from './RouteBreadcrumb';

export default function layout({ children }) {
    return (
        <section className='mt-[2.375rem] grid grid-cols-12 gap-x-5 gap-y-4'>
            <RouteBreadcrumb />

            {children}

            <Sidebar />
        </section>
    );
}
