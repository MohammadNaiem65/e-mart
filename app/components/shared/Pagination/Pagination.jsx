export default function Pagination({ currentPage = 1, totalPages = 10 }) {
    return (
        <section className='min-h-[5.125rem] border-y border-stroke flex justify-between items-center'>
            <div className='flex items-center gap-x-7'>
                <button className='text-mute uppercase'>PREV</button>

                <div className="flex items-center gap-x-3">
                    {Array.from({
                        length: totalPages > 9 ? 9 : totalPages,
                    }).map((_, index) => (
                        <button
                            key={index}
                            className={`${
                                currentPage === index + 1 ? 'px-3 py-1 bg-primary text-white' : ''
                            }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                <button className='text-mute uppercase'>NEXT</button>
            </div>

            <div>
                <p className='text-mute'>Showing 1 to 20 of 300 (30 Pages)</p>
            </div>
        </section>
    );
}
