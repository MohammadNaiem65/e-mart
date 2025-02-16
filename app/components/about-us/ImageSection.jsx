import React from 'react';

export default function ImageSection({
    imagePosition,
    imageSrc,
    imageAlt,
    subtitle,
    title,
    description,
    longDescription,
}) {
    const ImageContent = (
        <div className='w-full md:w-1/2'>
            <img
                src={imageSrc}
                alt={imageAlt}
                className='w-full h-auto rounded-lg'
            />
        </div>
    );

    const TextContent = (
        <div className='w-full md:w-1/2'>
            <h2 className='text-lg font-semibold text-gray-900 mb-4'>
                {subtitle}
            </h2>
            <h1 className='text-4xl md:text-5xl font-bold text-[#FF6B4D] mb-6'>
                {title}
            </h1>
            <p className='text-gray-600 mb-4'>{description}</p>
            <p className='text-gray-600'>{longDescription}</p>
        </div>
    );

    return (
        <div className='min-h-screen bg-white'>
            <div className='container mx-auto px-4 py-12 md:py-24'>
                <div className='flex flex-col md:flex-row items-center gap-8 md:gap-16'>
                    {imagePosition === 'left' ? (
                        <>
                            {ImageContent}
                            {TextContent}
                        </>
                    ) : (
                        <>
                            {TextContent}
                            {ImageContent}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
