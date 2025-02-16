export default function TextSection({ title, description, longDescription }) {
    return (
        <>
            <h1 className='text-4xl md:text-5xl font-bold text-[#FF6B4D] mb-6'>
                {title}
            </h1>
            <p className='text-gray-600 mb-4'>{description}</p>
            <p className='text-gray-600'>{longDescription}</p>
        </>
    );
}
