export default function Input() {
    return (
        <div className='relative mb-6'>
            <input
                type='text'
                placeholder='Search your keywords...'
                className='w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-primary focus:ring-1 focus:ring-primary'
            />
        </div>
    );
}
