import Image from 'next/image';
import ImageSection from '../components/about-us/ImageSection';
import TextSection from '../components/about-us/TextSection';

export default function page() {
    const demoContent = {
        imageSrc:
            'https://images.unsplash.com/photo-1607478900766-efe13248b125?w=800&auto=format&fit=crop&q=80',
        imageAlt: 'Delivery Service Illustration',
        subtitle: 'Our Service',
        title: 'We offer fast and secure home delivery services.',
        description:
            'At Welcome to [Your eCommerce Website Name], your one-stop destination for [your product niche, e.g., fashion, tech gadgets,home essentials, etc.]. Founded on the principles of quality, affordability, and customer satisfaction, we are committed to',
        longDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    };

    return (
        <section className='mt-10'>
            <Image
                src='/about-us-banner.png'
                alt='banner'
                width={1200}
                height={250}
            ></Image>

            <ImageSection imagePosition='left' {...demoContent} />

            <section>
                <TextSection {...demoContent} />
            </section>

            <ImageSection imagePosition='right' {...demoContent} />
        </section>
    );
}
