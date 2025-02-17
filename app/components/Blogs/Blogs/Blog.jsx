import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Blog({ blog }) {
    const { category, name, slug, summary, thumbnail } = blog;

    return (
        <div className='flex justify-between items-center'>
            <Image
                src={'/blog.png'}
                alt={'blog image'}
                width={382}
                height={255}
                className={'rounded-2xl max-w-[382px] max-h-[255px] size-auto'}
            />

            <div className='w-1/2'>
                <div className='mb-2 text-sm text-primary flex items-center gap-2'>
                    <span>{name}</span>
                    <span>•</span>
                    <span className='text-mute'>30 Jan 2025</span>
                </div>

                <h2 className='text-xl font-bold text-primary mb-2'>{name}</h2>

                <p className='text-mute text-sm mb-4 line-clamp-6'>{summary}</p>

                <Link
                    href={`/blogs/${slug}`}
                    className='w-fit text-mute flex items-center hover:text-highlight cursor-pointer transition-colors'
                >
                    <span className='mr-1 text-base font-medium'>
                        Read more
                    </span>
                    <ArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
}
