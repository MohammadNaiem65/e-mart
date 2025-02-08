import Copyright from './Copyright';
import NavigationLinks from './NavigationLInks/NavigationLinks';

export default function FooterContent() {
    return (
        <section className='min-h-[26.75rem] px-[7.5rem] pt-[4.5rem] bg-black text-white flex flex-col justify-between divide-y divide-gray-500'>
            <NavigationLinks />

            <Copyright />
        </section>
    );
}
