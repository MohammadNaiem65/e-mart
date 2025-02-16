export default function Sidebar({
    faqData,
    activeCategory,
    setActiveCategory,
}) {
    return (
        <div className='w-64 bg-gray-100 p-6 space-y-2'>
            <h1 className='text-[2rem] text-center font-bold text-[#FF5733] mb-5'>
                FAQ
            </h1>
            {Object.keys(faqData).map((category) => (
                <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                        activeCategory === category
                            ? 'bg-[#FF5733] text-white'
                            : 'text-gray-700 hover:bg-primary/20'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
