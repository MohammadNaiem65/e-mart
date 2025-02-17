import Image from 'next/image';

export default function Blog() {
    return (
        <div className='flex items-center gap-3'>
            <Image
                src='/blog.png'
                alt='Smart Band'
                className='min-w-[8.875rem] min-h-20 max-w-[10.438rem] max-h-[5.875rem] rounded-lg object-cover overflow-hidden'
                width={167}
                height={94}
            />

            <div className='w-full'>
                <div className='text-xs text-primary flex items-center gap-2'>
                    <span>Gadgets</span>
                    <span>•</span>
                    <span className='text-mute'>30 Jan 2025</span>
                </div>
                <h3 className='text-sm font-medium leading-snug line-clamp-2'>
                    Smart Band Waterproof Color Screen Fitness Bracelet Smart
                    Band Waterproof Color Screen Fitness Bracelet
                </h3>
            </div>
        </div>
    );
}
