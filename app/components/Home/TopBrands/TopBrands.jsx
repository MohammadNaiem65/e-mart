import Image from 'next/image';

export default function TopBrands() {
    const brands = [
        { img: '/brands/adata.png' },
        { img: '/brands/eneos.png' },
        { img: '/brands/lg.png' },
        { img: '/brands/npotek.png' },
        { img: '/brands/ray-ban.png' },
        { img: '/brands/samsung.png' },
        { img: '/brands/top-club.png' },
    ];

    return (
        <section className='mt-20'>
            <h2 className='mb-[2.188rem] border-b border-stroke text-2xl/[3.9rem] font-bold'>
                Top Brands
            </h2>

            <section className='overflow-hidden'>
                <div
                    style={{
                        '--marquee-gap': '20px',
                        '--marquee-duration': '18s',
                    }}
                    className='w-max h-[6.25rem] flex items-center justify-between gap-x-9 animate-marquee transform-gpu'
                >
                    {[...brands, ...brands].map((brand, index) => (
                        <img
                            key={index}
                            src={brand.img}
                            alt='brand'
                            className='w-fit max-h-[6.25rem]'
                        />
                    ))}
                </div>
            </section>
        </section>
    );
}
