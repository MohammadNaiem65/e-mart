import Image from 'next/image';

export default function Banner() {
    return (
        <div>
            <Image
                src='/blog-banner.jpg'
                alt='banner'
                width={792}
                height={528}
                className='w-[49.5rem] max-h-[33rem]'
            />

            <div className='mt-2 text-sm text-primary flex items-center gap-2'>
                <span>Electronics & Gadgets</span>
                <span>•</span>
                <span className='text-mute'>30 Jan 2025</span>
            </div>
        </div>
    );
}
