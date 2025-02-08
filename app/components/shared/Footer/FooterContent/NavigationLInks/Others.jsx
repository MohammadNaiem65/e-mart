import Image from 'next/image';
import { FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';
import { TbBrandInstagramFilled } from 'react-icons/tb';

export default function Others() {
    const socials = [
        { icon: <FaFacebookF /> },
        { icon: <TbBrandInstagramFilled /> },
        { icon: <FaTwitter /> },
        { icon: <FaYoutube /> },
    ];

    return (
        <section>
            <div>
                <h2 className='text-xl'>Socials</h2>

                <div className='mt-4 text-2xl flex items-center justify-start gap-x-3'>
                    {socials.map((social, index) => (
                        <span key={index} className='cursor-pointer'>
                            {social.icon}
                        </span>
                    ))}
                </div>
            </div>

            <div className='mt-7'>
                <h2 className='mb-4 text-xl'>Payment Methods</h2>

                <Image
                    src='/payment-methods.png'
                    alt='payment methods'
                    width={206}
                    height={36}
                />
            </div>

            <div className='mt-7 flex items-center gap-x-3'>
                <Image
                    src='/google-play-store.png'
                    alt='logo'
                    width={98}
                    height={28}
                    className='px-2 py-1 bg-white rounded'
                />
                <Image
                    src='/app-store.png'
                    alt='logo'
                    width={98}
                    height={28}
                    className='px-2 py-1 bg-white rounded'
                />
            </div>
        </section>
    );
}
