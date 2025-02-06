export default function FifthBanner() {
    return (
        <section className='mt-11 flex justify-between items-center gap-x-6 relative rounded-lg'>
            <img
                src='/fifth-banner.jpg'
                alt='banner image'
                className='w-full h-[6.25rem]'
            />

            <button className="px-5 py-2 bg-primary text-base/7 text-white font-semibold absolute right-[3.063rem] top-1/2 -translate-y-1/2 rounded-full">Get Started</button>
        </section>
    );
}
