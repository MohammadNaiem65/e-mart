export default function FourthBanner() {
    return (
        <section className='mt-11 flex justify-between items-center gap-x-6'>
            <img
                src='/banner-4-left.png'
                alt='banner image'
                className='w-96 h-[18.75rem] rounded-[0.625rem]'
            />
            <img
                src='./banner-4-right.png'
                alt='banner image'
                className='w-[36.75rem] h-[18.75rem] rounded-[0.625rem] flex-grow'
            />
        </section>
    );
}
