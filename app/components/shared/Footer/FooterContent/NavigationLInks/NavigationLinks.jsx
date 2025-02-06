import Categories from './Categories';
import CompanyDetails from './CompanyDetails';
import Links from './Links';
import Others from './Others';

export default function NavigationLinks() {
    return (
        <section className='min-h-[15.625rem] mb-16 grid grid-cols-4 gap-x-[7.375rem]'>
            <CompanyDetails />

            <Links />

            <Categories />

            <Others />
        </section>
    );
}
