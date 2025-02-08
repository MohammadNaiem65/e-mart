import FooterContent from './FooterContent/FooterContent';
import Perks from './Perks';

export default function Footer() {
    return (
        <footer className='w-full min-h-[32rem] mt-[4.688rem]'>
            <Perks />

            <FooterContent />
        </footer>
    );
}
