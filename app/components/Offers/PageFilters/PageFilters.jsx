'use client';

export default function PageFilters() {
    return (
        <div className='flex items-center gap-x-4'>
            <div>
                <label htmlFor='product-quantity'>Show:</label>
                <select
                    id='product-quantity'
                    name='product-quantity'
                    className='ml-2 px-2 py-1 bg-[#F4F4F4] rounded'
                >
                    <option value={9} selected>
                        9
                    </option>
                    <option value={15}>15</option>
                    <option value={21}>21</option>
                </select>
            </div>
        </div>
    );
}
