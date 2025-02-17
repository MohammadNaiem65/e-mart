export default function SecondBanner() {
    return (
        <section className='w-[1200px] h-[450px] mt-7 relative rounded-[0.875rem]'>
            <img
                src='/second-banner.png'
                alt='second banner'
                className='w-full h-[450px]'
            />

            <button className='px-8 py-[0.625rem] border border-[#403F3F] text-base/[1.75rem] absolute bottom-[3rem] left-[7.5rem] rounded-full'>
                Shop Now
            </button>
        </section>
    );
}
